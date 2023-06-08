const lineReader = require('readline')
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')

const config = {
  user: 'admin',
  host: 'localhost',
  port: 27017,
  database: 'ipip'
}

// Use index to encode based on value in hextets e.g. 000100 index 4 = E
const Base64Characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

const countryArray = [
  'USA',
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua',
  'Arabian Gulf',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Borneo',
  'Bosnia Herzogovinia',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Fasso',
  'Burma',
  'Burma(Myanmar)',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island (Australia)',
  'Cocos (Keeling) Islands',
  'Columbia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Faeroe Islands',
  'Falkland Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Johnston Island',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgystan',
  'Lao P.Dem.R.',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Midway Islands',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Korea',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of Moldavia',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Pierre and Miquelon',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Lucia',
  'St Vincent and  Grenadines',
  'Sudan',
  'Suriname',
  'Svalbard & Jan Mayen Islands',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'UK',
  'USA',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Virgin Islands',
  'W. Samoa',
  'Wake Island',
  'Wallis and Futuna Islands',
  'Western Sahara',
  'Yemen',
  'Yugoslavia',
  'Zaire',
  'Zambia',
  'Zimbabwe'
]


const encodeAnswerString = answerString => {
  // Since digits are limited to 5 their max value is 0x00000101 in binary. We can split these in couples and concatenate them to form a 6 bit hextet
  let b64String = ''
  for (let i = 0; i < answerString.length; i += 2) {
    b64String +=
      Base64Characters[
        parseInt(
          Array.from(answerString.substr(i, 2))
            .map(num => (+num).toString(2).padStart(3, '0'))
            .join(''),
          2
        )
      ]
  }
  return b64String
}

const decodeAnswerString = b64string => {
  // the encoded string into a hextet and split into two trits -> two values 1-5
  return Array.from(b64String).reduce((acc, val) => {
    const hextet = Base64Characters.indexOf(val)
      .toString(2)
      .padStart(6, '0')
    return (
      acc +
      parseInt(hextet.substr(0, 3), 2).toString() +
      parseInt(hextet.substr(3, 3), 2).toString()
    )
  }, '')
}

const TestSubmission = mongoose.model(
  'TEST300',
  new mongoose.Schema({
    id: { type: Number, unique: true, required: true, index: true },
    sex: { type: Number, index: true },
    age: { type: Number, index: true },
    country: { type: Number, index: true, default: 0 },
    time: { type: Date, default: Date.now },
    testData: { type: String, default: '' }
  }),
  'TEST300'
);

(async () => {
  const db = await new Promise((res, rej) => {
    const connectionUri = `mongodb://${config.host}:27017/${config.database}` // Maybe have an auth source here if protected
    mongoose.connect(connectionUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const db = mongoose.connection

    db.on('error', err => {
      console.log('Connection error to DB')
      console.log(err)
      rej(err)
    })

    db.on('open', res)
  })
  const stream = fs.createReadStream(path.join(__dirname, './IPIP300.dat'), {
    encoding: 'utf8'
  })
  const rl = lineReader.createInterface({
    input: stream
  })
  for await (const line of rl) {
    if (line === '') {
        continue
    }
    const id = +line.substr(0, 6).trim()
    const sex = +line.substr(6, 1)
    const age = +line.substr(7, 2)
    const sec = +line.substr(9, 2)
    const min = +line.substr(11, 2)
    const hour = +line.substr(13, 2)
    const date = +line.substr(15, 2)
    const month = +line.substr(17, 2)
    const year = 1900 + +line.substr(19, 3)
    const country = countryArray.findIndex(c =>
      c.startsWith(line.substr(22, 11).trim())
    )
    const testData = encodeAnswerString(line.substr(33, 300))

    const time = new Date()
    time.setSeconds(sec)
    time.setMinutes(min)
    time.setHours(hour)
    time.setDate(date)
    time.setDate(month)
    time.setFullYear(year)
    try {
      await new TestSubmission({ id, sex, age, country, time, testData }).save()
    } catch(e) {
      console.warn(e);
    }
  }
})()
