const maleUnder21Norm = [
  0,
  164.2,
  197.6,
  217.8,
  197.1,
  204.2,
  33.4,
  34.2,
  28.1,
  28.0,
  29.1,
  27.9,
  26.8,
  26.2,
  29.4,
  29.9,
  24.1,
  7.7,
  8.3,
  9.2,
  7.4,
  6.4,
  6.3,
  33.9,
  29.8,
  34.0,
  29.6,
  33.9,
  36.5,
  8.0,
  8.9,
  7.4,
  5.6,
  8.1,
  7.1,
  40.6,
  37.3,
  36.1,
  35.7,
  39.6,
  28.5,
  6.8,
  7.0,
  6.8,
  6.4,
  7.1,
  8.0,
  32.5,
  34.7,
  37.5,
  31.2,
  28.1,
  33.2,
  7.6,
  6.7,
  6.6,
  6.9,
  7.1,
  6.5,
  38.3,
  30.5,
  38.1,
  36.2,
  29.2,
  31.9,
  5.6,
  7.7,
  5.9,
  6.7,
  8.0,
  7.2
];

const maleOver21Norm = [
  0,
  161.8,
  192.8,
  218.4,
  202.8,
  215.3,
  38.7,
  31.9,
  26.6,
  27.3,
  30.8,
  27.6,
  27.0,
  25.6,
  27.8,
  31.1,
  22.6,
  8.0,
  9.3,
  9.8,
  7.6,
  7.3,
  7.4,
  33.1,
  27.3,
  34.6,
  30.6,
  30.8,
  36.4,
  8.1,
  8.1,
  7.5,
  6.0,
  7.6,
  7.0,
  39.1,
  38.3,
  35.4,
  35.8,
  40.9,
  28.8,
  6.6,
  6.8,
  6.7,
  6.6,
  6.7,
  8.1,
  33.6,
  36.2,
  37.6,
  33.7,
  28.5,
  33.2,
  7.6,
  6.4,
  6.4,
  6.9,
  6.9,
  6.8,
  39.7,
  33.0,
  39.7,
  38.2,
  31.3,
  33.4,
  5.7,
  7.8,
  5.8,
  6.7,
  8.4,
  7.3
];

const femaleUnder21Norm = [
  0,
  180.0,
  203.9,
  228.7,
  208.6,
  203.5,
  37.5,
  35.0,
  26.8,
  29.1,
  31.0,
  31.3,
  29.8,
  27.9,
  30.6,
  29.9,
  27.6,
  7.9,
  9.1,
  9.6,
  7.7,
  6.4,
  7.6,
  34.8,
  31.7,
  34.0,
  30.5,
  34.0,
  38.9,
  8.5,
  9.2,
  8.1,
  5.6,
  8.2,
  7.0,
  41.5,
  42.5,
  39.4,
  36.3,
  39.0,
  30.0,
  6.9,
  5.7,
  6.5,
  6.3,
  7.1,
  7.2,
  33.9,
  37.4,
  39.5,
  32.5,
  29.9,
  35.4,
  7.4,
  6.1,
  6.5,
  7.6,
  7.0,
  6.7,
  37.6,
  30.6,
  38.9,
  37.2,
  29.0,
  30.2,
  5.8,
  8.3,
  6.0,
  7.0,
  8.0,
  7.7
];

const femaleOver21Norm = [
  0,
  172.5,
  196.2,
  226.3,
  217.3,
  220.7,
  36.8,
  31.7,
  26.8,
  25.3,
  29.8,
  30.7,
  28.8,
  26.5,
  29.1,
  31.1,
  25.3,
  7.8,
  8.8,
  9.4,
  7.5,
  7.3,
  7.5,
  35.1,
  28.5,
  34.2,
  32.0,
  28.6,
  37.8,
  8.1,
  8.5,
  7.4,
  5.9,
  7.8,
  6.9,
  38.5,
  42.3,
  39.4,
  35.9,
  39.8,
  30.3,
  7.4,
  5.7,
  6.2,
  6.7,
  7.0,
  7.5,
  34.5,
  39.6,
  40.5,
  35.5,
  31.0,
  36.3,
  7.4,
  5.7,
  5.9,
  6.8,
  6.7,
  6.3,
  39.9,
  34.1,
  41.5,
  39.4,
  32.6,
  33.3,
  5.6,
  8.5,
  5.4,
  6.2,
  8.3,
  7.3
];

const questionMap = {
  "1": {
    full: 1,
    modifier: "+N1",
    facet: 0
  },
  "2": {
    full: 2,
    modifier: "+E1",
    facet: 1
  },
  "3": {
    full: 3,
    modifier: "+O1",
    facet: 2
  },
  "4": {
    full: 4,
    modifier: "+A1",
    facet: 3
  },
  "5": {
    full: 5,
    modifier: "+C1",
    facet: 4
  },
  "6": {
    full: 6,
    modifier: "+N2",
    facet: 5
  },
  "7": {
    full: 7,
    modifier: "+E2",
    facet: 6
  },
  "8": {
    full: 8,
    modifier: "+O2",
    facet: 7
  },
  "9": {
    full: 99,
    modifier: "-A2",
    facet: 8
  },
  "10": {
    full: 40,
    modifier: "+C2",
    facet: 9
  },
  "11": {
    full: 11,
    modifier: "+N3",
    facet: 10
  },
  "12": {
    full: 12,
    modifier: "+E3",
    facet: 11
  },
  "13": {
    full: 13,
    modifier: "+O3",
    facet: 12
  },
  "14": {
    full: 74,
    modifier: "+A3",
    facet: 13
  },
  "15": {
    full: 45,
    modifier: "+C3",
    facet: 14
  },
  "16": {
    full: 76,
    modifier: "+N4",
    facet: 15
  },
  "17": {
    full: 17,
    modifier: "+E4",
    facet: 16
  },
  "18": {
    full: 18,
    modifier: "+O4",
    facet: 17
  },
  "19": {
    full: 169,
    modifier: "-A4",
    facet: 18
  },
  "20": {
    full: 50,
    modifier: "+C4",
    facet: 19
  },
  "21": {
    full: 111,
    modifier: "+N5",
    facet: 20
  },
  "22": {
    full: 22,
    modifier: "+E5",
    facet: 21
  },
  "23": {
    full: 53,
    modifier: "+O5",
    facet: 22
  },
  "24": {
    full: 144,
    modifier: "-A5",
    facet: 23
  },
  "25": {
    full: 55,
    modifier: "+C5",
    facet: 24
  },
  "26": {
    full: 26,
    modifier: "+N6",
    facet: 25
  },
  "27": {
    full: 27,
    modifier: "+E6",
    facet: 26
  },
  "28": {
    full: 28,
    modifier: "+O6",
    facet: 27
  },
  "29": {
    full: 29,
    modifier: "+A6",
    facet: 28
  },
  "30": {
    full: 120,
    modifier: "-C6",
    facet: 29
  },
  "31": {
    full: 31,
    modifier: "+N1",
    facet: 0
  },
  "32": {
    full: 62,
    modifier: "+E1",
    facet: 1
  },
  "33": {
    full: 33,
    modifier: "+O1",
    facet: 2
  },
  "34": {
    full: 34,
    modifier: "+A1",
    facet: 3
  },
  "35": {
    full: 35,
    modifier: "+C1",
    facet: 4
  },
  "36": {
    full: 36,
    modifier: "+N2",
    facet: 5
  },
  "37": {
    full: 37,
    modifier: "+E2",
    facet: 6
  },
  "38": {
    full: 68,
    modifier: "+O2",
    facet: 7
  },
  "39": {
    full: 159,
    modifier: "-A2",
    facet: 8
  },
  "40": {
    full: 160,
    modifier: "-C2",
    facet: 9
  },
  "41": {
    full: 41,
    modifier: "+N3",
    facet: 10
  },
  "42": {
    full: 42,
    modifier: "+E3",
    facet: 11
  },
  "43": {
    full: 43,
    modifier: "+O3",
    facet: 12
  },
  "44": {
    full: 104,
    modifier: "+A3",
    facet: 13
  },
  "45": {
    full: 105,
    modifier: "+C3",
    facet: 14
  },
  "46": {
    full: 106,
    modifier: "+N4",
    facet: 15
  },
  "47": {
    full: 47,
    modifier: "+E4",
    facet: 16
  },
  "48": {
    full: 138,
    modifier: "-O4",
    facet: 17
  },
  "49": {
    full: 199,
    modifier: "-A4",
    facet: 18
  },
  "50": {
    full: 140,
    modifier: "+C4",
    facet: 19
  },
  "51": {
    full: 171,
    modifier: "-N5",
    facet: 20
  },
  "52": {
    full: 52,
    modifier: "+E5",
    facet: 21
  },
  "53": {
    full: 203,
    modifier: "-O5",
    facet: 22
  },
  "54": {
    full: 174,
    modifier: "-A5",
    facet: 23
  },
  "55": {
    full: 145,
    modifier: "+C5",
    facet: 24
  },
  "56": {
    full: 56,
    modifier: "+N6",
    facet: 25
  },
  "57": {
    full: 57,
    modifier: "+E6",
    facet: 26
  },
  "58": {
    full: 58,
    modifier: "+O6",
    facet: 27
  },
  "59": {
    full: 59,
    modifier: "+A6",
    facet: 28
  },
  "60": {
    full: 150,
    modifier: "-C6",
    facet: 29
  },
  "61": {
    full: 61,
    modifier: "+N1",
    facet: 0
  },
  "62": {
    full: 212,
    modifier: "-E1",
    facet: 1
  },
  "63": {
    full: 63,
    modifier: "+O1",
    facet: 2
  },
  "64": {
    full: 64,
    modifier: "+A1",
    facet: 3
  },
  "65": {
    full: 65,
    modifier: "+C1",
    facet: 4
  },
  "66": {
    full: 126,
    modifier: "+N2",
    facet: 5
  },
  "67": {
    full: 157,
    modifier: "-E2",
    facet: 6
  },
  "68": {
    full: 188,
    modifier: "-O2",
    facet: 7
  },
  "69": {
    full: 249,
    modifier: "-A2",
    facet: 8
  },
  "70": {
    full: 190,
    modifier: "-C2",
    facet: 9
  },
  "71": {
    full: 71,
    modifier: "+N3",
    facet: 10
  },
  "72": {
    full: 132,
    modifier: "+E3",
    facet: 11
  },
  "73": {
    full: 223,
    modifier: "-O3",
    facet: 12
  },
  "74": {
    full: 194,
    modifier: "-A3",
    facet: 13
  },
  "75": {
    full: 165,
    modifier: "-C3",
    facet: 14
  },
  "76": {
    full: 136,
    modifier: "+N4",
    facet: 15
  },
  "77": {
    full: 77,
    modifier: "+E4",
    facet: 16
  },
  "78": {
    full: 168,
    modifier: "-O4",
    facet: 17
  },
  "79": {
    full: 229,
    modifier: "-A4",
    facet: 18
  },
  "80": {
    full: 260,
    modifier: "-C4",
    facet: 19
  },
  "81": {
    full: 201,
    modifier: "-N5",
    facet: 20
  },
  "82": {
    full: 142,
    modifier: "+E5",
    facet: 21
  },
  "83": {
    full: 233,
    modifier: "-O5",
    facet: 22
  },
  "84": {
    full: 204,
    modifier: "-A5",
    facet: 23
  },
  "85": {
    full: 205,
    modifier: "-C5",
    facet: 24
  },
  "86": {
    full: 86,
    modifier: "+N6",
    facet: 25
  },
  "87": {
    full: 147,
    modifier: "+E6",
    facet: 26
  },
  "88": {
    full: 148,
    modifier: "-O6",
    facet: 27
  },
  "89": {
    full: 149,
    modifier: "-A6",
    facet: 28
  },
  "90": {
    full: 210,
    modifier: "-C6",
    facet: 29
  },
  "91": {
    full: 91,
    modifier: "+N1",
    facet: 0
  },
  "92": {
    full: 272,
    modifier: "-E1",
    facet: 1
  },
  "93": {
    full: 93,
    modifier: "+O1",
    facet: 2
  },
  "94": {
    full: 184,
    modifier: "-A1",
    facet: 3
  },
  "95": {
    full: 155,
    modifier: "+C1",
    facet: 4
  },
  "96": {
    full: 216,
    modifier: "-N2",
    facet: 5
  },
  "97": {
    full: 247,
    modifier: "-E2",
    facet: 6
  },
  "98": {
    full: 218,
    modifier: "-O2",
    facet: 7
  },
  "99": {
    full: 279,
    modifier: "-A2",
    facet: 8
  },
  "100": {
    full: 220,
    modifier: "-C2",
    facet: 9
  },
  "101": {
    full: 251,
    modifier: "-N3",
    facet: 10
  },
  "102": {
    full: 162,
    modifier: "-E3",
    facet: 11
  },
  "103": {
    full: 283,
    modifier: "-O3",
    facet: 12
  },
  "104": {
    full: 284,
    modifier: "-A3",
    facet: 13
  },
  "105": {
    full: 195,
    modifier: "-C3",
    facet: 14
  },
  "106": {
    full: 256,
    modifier: "-N4",
    facet: 15
  },
  "107": {
    full: 167,
    modifier: "-E4",
    facet: 16
  },
  "108": {
    full: 288,
    modifier: "-O4",
    facet: 17
  },
  "109": {
    full: 259,
    modifier: "-A4",
    facet: 18
  },
  "110": {
    full: 290,
    modifier: "-C4",
    facet: 19
  },
  "111": {
    full: 231,
    modifier: "-N5",
    facet: 20
  },
  "112": {
    full: 172,
    modifier: "+E5",
    facet: 21
  },
  "113": {
    full: 263,
    modifier: "-O5",
    facet: 22
  },
  "114": {
    full: 264,
    modifier: "-A5",
    facet: 23
  },
  "115": {
    full: 265,
    modifier: "-C5",
    facet: 24
  },
  "116": {
    full: 176,
    modifier: "-N6",
    facet: 25
  },
  "117": {
    full: 177,
    modifier: "+E6",
    facet: 26
  },
  "118": {
    full: 268,
    modifier: "-O6",
    facet: 27
  },
  "119": {
    full: 239,
    modifier: "-A6",
    facet: 28
  },
  "120": {
    full: 270,
    modifier: "-C6",
    facet: 29
  },
  "121": {
    full: 9,
    modifier: "+A2",
    facet: 8
  },
  "122": {
    full: 10,
    modifier: "+C2",
    facet: 9
  },
  "123": {
    full: 14,
    modifier: "+A3",
    facet: 13
  },
  "124": {
    full: 15,
    modifier: "+C3",
    facet: 14
  },
  "125": {
    full: 16,
    modifier: "+N4",
    facet: 15
  },
  "126": {
    full: 19,
    modifier: "+A4",
    facet: 18
  },
  "127": {
    full: 20,
    modifier: "+C4",
    facet: 19
  },
  "128": {
    full: 21,
    modifier: "+N5",
    facet: 20
  },
  "129": {
    full: 23,
    modifier: "+O5",
    facet: 22
  },
  "130": {
    full: 24,
    modifier: "+A5",
    facet: 23
  },
  "131": {
    full: 25,
    modifier: "+C5",
    facet: 24
  },
  "132": {
    full: 30,
    modifier: "+C6",
    facet: 29
  },
  "133": {
    full: 32,
    modifier: "+E1",
    facet: 1
  },
  "134": {
    full: 38,
    modifier: "+O2",
    facet: 7
  },
  "135": {
    full: 39,
    modifier: "+A2",
    facet: 8
  },
  "136": {
    full: 44,
    modifier: "+A3",
    facet: 13
  },
  "137": {
    full: 46,
    modifier: "+N4",
    facet: 15
  },
  "138": {
    full: 48,
    modifier: "+O4",
    facet: 17
  },
  "139": {
    full: 49,
    modifier: "+A4",
    facet: 18
  },
  "140": {
    full: 51,
    modifier: "+N5",
    facet: 20
  },
  "141": {
    full: 54,
    modifier: "+A5",
    facet: 23
  },
  "142": {
    full: 60,
    modifier: "+C6",
    facet: 29
  },
  "143": {
    full: 66,
    modifier: "+N2",
    facet: 5
  },
  "144": {
    full: 67,
    modifier: "+E2",
    facet: 6
  },
  "145": {
    full: 69,
    modifier: "-A2",
    facet: 8
  },
  "146": {
    full: 70,
    modifier: "+C2",
    facet: 9
  },
  "147": {
    full: 72,
    modifier: "+E3",
    facet: 11
  },
  "148": {
    full: 73,
    modifier: "+O3",
    facet: 12
  },
  "149": {
    full: 75,
    modifier: "+C3",
    facet: 14
  },
  "150": {
    full: 78,
    modifier: "+O4",
    facet: 17
  },
  "151": {
    full: 79,
    modifier: "+A4",
    facet: 18
  },
  "152": {
    full: 80,
    modifier: "+C4",
    facet: 19
  },
  "153": {
    full: 81,
    modifier: "+N5",
    facet: 20
  },
  "154": {
    full: 82,
    modifier: "+E5",
    facet: 21
  },
  "155": {
    full: 83,
    modifier: "+O5",
    facet: 22
  },
  "156": {
    full: 84,
    modifier: "+A5",
    facet: 23
  },
  "157": {
    full: 85,
    modifier: "+C5",
    facet: 24
  },
  "158": {
    full: 87,
    modifier: "+E6",
    facet: 26
  },
  "159": {
    full: 88,
    modifier: "+O6",
    facet: 27
  },
  "160": {
    full: 89,
    modifier: "+A6",
    facet: 28
  },
  "161": {
    full: 90,
    modifier: "+C6",
    facet: 29
  },
  "162": {
    full: 92,
    modifier: "+E1",
    facet: 1
  },
  "163": {
    full: 94,
    modifier: "+A1",
    facet: 3
  },
  "164": {
    full: 95,
    modifier: "+C1",
    facet: 4
  },
  "165": {
    full: 96,
    modifier: "+N2",
    facet: 5
  },
  "166": {
    full: 97,
    modifier: "+E2",
    facet: 6
  },
  "167": {
    full: 98,
    modifier: "+O2",
    facet: 7
  },
  "168": {
    full: 100,
    modifier: "+C2",
    facet: 9
  },
  "169": {
    full: 101,
    modifier: "+N3",
    facet: 10
  },
  "170": {
    full: 102,
    modifier: "+E3",
    facet: 11
  },
  "171": {
    full: 103,
    modifier: "+O3",
    facet: 12
  },
  "172": {
    full: 107,
    modifier: "+E4",
    facet: 16
  },
  "173": {
    full: 108,
    modifier: "+O4",
    facet: 17
  },
  "174": {
    full: 109,
    modifier: "-A4",
    facet: 18
  },
  "175": {
    full: 110,
    modifier: "+C4",
    facet: 19
  },
  "176": {
    full: 112,
    modifier: "+E5",
    facet: 21
  },
  "177": {
    full: 113,
    modifier: "+O5",
    facet: 22
  },
  "178": {
    full: 114,
    modifier: "+A5",
    facet: 23
  },
  "179": {
    full: 115,
    modifier: "+C5",
    facet: 24
  },
  "180": {
    full: 116,
    modifier: "+N6",
    facet: 25
  },
  "181": {
    full: 117,
    modifier: "+E6",
    facet: 26
  },
  "182": {
    full: 118,
    modifier: "-O6",
    facet: 27
  },
  "183": {
    full: 119,
    modifier: "+A6",
    facet: 28
  },
  "184": {
    full: 121,
    modifier: "+N1",
    facet: 0
  },
  "185": {
    full: 122,
    modifier: "+E1",
    facet: 1
  },
  "186": {
    full: 123,
    modifier: "+O1",
    facet: 2
  },
  "187": {
    full: 124,
    modifier: "+A1",
    facet: 3
  },
  "188": {
    full: 125,
    modifier: "+C1",
    facet: 4
  },
  "189": {
    full: 127,
    modifier: "+E2",
    facet: 6
  },
  "190": {
    full: 128,
    modifier: "+O2",
    facet: 7
  },
  "191": {
    full: 129,
    modifier: "-A2",
    facet: 8
  },
  "192": {
    full: 130,
    modifier: "+C2",
    facet: 9
  },
  "193": {
    full: 131,
    modifier: "+N3",
    facet: 10
  },
  "194": {
    full: 133,
    modifier: "+O3",
    facet: 12
  },
  "195": {
    full: 134,
    modifier: "+A3",
    facet: 13
  },
  "196": {
    full: 135,
    modifier: "+C3",
    facet: 14
  },
  "197": {
    full: 137,
    modifier: "+E4",
    facet: 16
  },
  "198": {
    full: 139,
    modifier: "-A4",
    facet: 18
  },
  "199": {
    full: 141,
    modifier: "+N5",
    facet: 20
  },
  "200": {
    full: 143,
    modifier: "+O5",
    facet: 22
  },
  "201": {
    full: 146,
    modifier: "+N6",
    facet: 25
  },
  "202": {
    full: 151,
    modifier: "-N1",
    facet: 0
  },
  "203": {
    full: 152,
    modifier: "-E1",
    facet: 1
  },
  "204": {
    full: 153,
    modifier: "+O1",
    facet: 2
  },
  "205": {
    full: 154,
    modifier: "+A1",
    facet: 3
  },
  "206": {
    full: 156,
    modifier: "-N2",
    facet: 5
  },
  "207": {
    full: 158,
    modifier: "-O2",
    facet: 7
  },
  "208": {
    full: 161,
    modifier: "+N3",
    facet: 10
  },
  "209": {
    full: 163,
    modifier: "-O3",
    facet: 12
  },
  "210": {
    full: 164,
    modifier: "-A3",
    facet: 13
  },
  "211": {
    full: 166,
    modifier: "+N4",
    facet: 15
  },
  "212": {
    full: 170,
    modifier: "+C4",
    facet: 19
  },
  "213": {
    full: 173,
    modifier: "-O5",
    facet: 22
  },
  "214": {
    full: 175,
    modifier: "-C5",
    facet: 24
  },
  "215": {
    full: 178,
    modifier: "-O6",
    facet: 27
  },
  "216": {
    full: 179,
    modifier: "-A6",
    facet: 28
  },
  "217": {
    full: 180,
    modifier: "-C6",
    facet: 29
  },
  "218": {
    full: 181,
    modifier: "-N1",
    facet: 0
  },
  "219": {
    full: 182,
    modifier: "-E1",
    facet: 1
  },
  "220": {
    full: 183,
    modifier: "-O1",
    facet: 2
  },
  "221": {
    full: 185,
    modifier: "-C1",
    facet: 4
  },
  "222": {
    full: 186,
    modifier: "-N2",
    facet: 5
  },
  "223": {
    full: 187,
    modifier: "-E2",
    facet: 6
  },
  "224": {
    full: 189,
    modifier: "-A2",
    facet: 8
  },
  "225": {
    full: 191,
    modifier: "+N3",
    facet: 10
  },
  "226": {
    full: 192,
    modifier: "-E3",
    facet: 11
  },
  "227": {
    full: 193,
    modifier: "-O3",
    facet: 12
  },
  "228": {
    full: 196,
    modifier: "-N4",
    facet: 15
  },
  "229": {
    full: 197,
    modifier: "-E4",
    facet: 16
  },
  "230": {
    full: 198,
    modifier: "-O4",
    facet: 17
  },
  "231": {
    full: 200,
    modifier: "+C4",
    facet: 19
  },
  "232": {
    full: 202,
    modifier: "+E5",
    facet: 21
  },
  "233": {
    full: 206,
    modifier: "-N6",
    facet: 25
  },
  "234": {
    full: 207,
    modifier: "+E6",
    facet: 26
  },
  "235": {
    full: 208,
    modifier: "-O6",
    facet: 27
  },
  "236": {
    full: 209,
    modifier: "-A6",
    facet: 28
  },
  "237": {
    full: 211,
    modifier: "-N1",
    facet: 0
  },
  "238": {
    full: 213,
    modifier: "-O1",
    facet: 2
  },
  "239": {
    full: 214,
    modifier: "-A1",
    facet: 3
  },
  "240": {
    full: 215,
    modifier: "-C1",
    facet: 4
  },
  "241": {
    full: 217,
    modifier: "-E2",
    facet: 6
  },
  "242": {
    full: 219,
    modifier: "-A2",
    facet: 8
  },
  "243": {
    full: 221,
    modifier: "-N3",
    facet: 10
  },
  "244": {
    full: 222,
    modifier: "-E3",
    facet: 11
  },
  "245": {
    full: 224,
    modifier: "-A3",
    facet: 13
  },
  "246": {
    full: 225,
    modifier: "-C3",
    facet: 14
  },
  "247": {
    full: 226,
    modifier: "-N4",
    facet: 15
  },
  "248": {
    full: 227,
    modifier: "-E4",
    facet: 16
  },
  "249": {
    full: 228,
    modifier: "-O4",
    facet: 17
  },
  "250": {
    full: 230,
    modifier: "-C4",
    facet: 19
  },
  "251": {
    full: 232,
    modifier: "+E5",
    facet: 21
  },
  "252": {
    full: 234,
    modifier: "-A5",
    facet: 23
  },
  "253": {
    full: 235,
    modifier: "-C5",
    facet: 24
  },
  "254": {
    full: 236,
    modifier: "-N6",
    facet: 25
  },
  "255": {
    full: 237,
    modifier: "+E6",
    facet: 26
  },
  "256": {
    full: 238,
    modifier: "-O6",
    facet: 27
  },
  "257": {
    full: 240,
    modifier: "-C6",
    facet: 29
  },
  "258": {
    full: 241,
    modifier: "-N1",
    facet: 0
  },
  "259": {
    full: 242,
    modifier: "-E1",
    facet: 1
  },
  "260": {
    full: 243,
    modifier: "-O1",
    facet: 2
  },
  "261": {
    full: 244,
    modifier: "-A1",
    facet: 3
  },
  "262": {
    full: 245,
    modifier: "-C1",
    facet: 4
  },
  "263": {
    full: 246,
    modifier: "-N2",
    facet: 5
  },
  "264": {
    full: 248,
    modifier: "-O2",
    facet: 7
  },
  "265": {
    full: 250,
    modifier: "-C2",
    facet: 9
  },
  "266": {
    full: 252,
    modifier: "-E3",
    facet: 11
  },
  "267": {
    full: 253,
    modifier: "-O3",
    facet: 12
  },
  "268": {
    full: 254,
    modifier: "-A3",
    facet: 13
  },
  "269": {
    full: 255,
    modifier: "-C3",
    facet: 14
  },
  "270": {
    full: 257,
    modifier: "-E4",
    facet: 16
  },
  "271": {
    full: 258,
    modifier: "-O4",
    facet: 17
  },
  "272": {
    full: 261,
    modifier: "-N5",
    facet: 20
  },
  "273": {
    full: 262,
    modifier: "-E5",
    facet: 21
  },
  "274": {
    full: 266,
    modifier: "-N6",
    facet: 25
  },
  "275": {
    full: 267,
    modifier: "-E6",
    facet: 26
  },
  "276": {
    full: 269,
    modifier: "-A6",
    facet: 28
  },
  "277": {
    full: 271,
    modifier: "-N1",
    facet: 0
  },
  "278": {
    full: 273,
    modifier: "-O1",
    facet: 2
  },
  "279": {
    full: 274,
    modifier: "-A1",
    facet: 3
  },
  "280": {
    full: 275,
    modifier: "-C1",
    facet: 4
  },
  "281": {
    full: 276,
    modifier: "-N2",
    facet: 5
  },
  "282": {
    full: 277,
    modifier: "-E2",
    facet: 6
  },
  "283": {
    full: 278,
    modifier: "-O2",
    facet: 7
  },
  "284": {
    full: 280,
    modifier: "-C2",
    facet: 9
  },
  "285": {
    full: 281,
    modifier: "-N3",
    facet: 10
  },
  "286": {
    full: 282,
    modifier: "-E3",
    facet: 11
  },
  "287": {
    full: 285,
    modifier: "-C3",
    facet: 14
  },
  "288": {
    full: 286,
    modifier: "-N4",
    facet: 15
  },
  "289": {
    full: 287,
    modifier: "-E4",
    facet: 16
  },
  "290": {
    full: 289,
    modifier: "-A4",
    facet: 18
  },
  "291": {
    full: 291,
    modifier: "-N5",
    facet: 20
  },
  "292": {
    full: 292,
    modifier: "-E5",
    facet: 21
  },
  "293": {
    full: 293,
    modifier: "-O5",
    facet: 22
  },
  "294": {
    full: 294,
    modifier: "-A5",
    facet: 23
  },
  "295": {
    full: 295,
    modifier: "-C5",
    facet: 24
  },
  "296": {
    full: 296,
    modifier: "-N6",
    facet: 25
  },
  "297": {
    full: 297,
    modifier: "-E6",
    facet: 26
  },
  "298": {
    full: 298,
    modifier: "-O6",
    facet: 27
  },
  "299": {
    full: 299,
    modifier: "-A6",
    facet: 28
  },
  "300": {
    full: 300,
    modifier: "-C6",
    facet: 29
  }
};

const facetArray = [
  "Anxiety",
  "Friendliness",
  "Imagination",
  "Trust",
  "Self-Efficacy",
  "Anger",
  "Gregariousness",
  "Artistic Interests",
  "Morality",
  "Orderliness",
  "Depression",
  "Assertiveness",
  "Emotionality",
  "Altruism",
  "Dutifulness",
  "Self-Consciousness",
  "Activity Level",
  "Adventurousness",
  "Cooperation",
  "Achievement-Striving",
  "Immoderation",
  "Excitement-Seeking",
  "Intellect",
  "Modesty",
  "Self-Discipline",
  "Vulnerability",
  "Cheerfulness",
  "Liberalism",
  "Sympathy",
  "Cautiousness"
];

const domains = {
  1: {
    id: "E",
    description: "Extraversion",
    facets: ["Friendliness", "Gregariousness", "Assertiveness", "Activity Level", "Excitement-Seeking", "Cheerfulness"]
  },
  2: {
    id: "A",
    description: "Agreeableness",
    facets: ["Trust", "Morality", "Altruism", "Cooperation", "Modesty", "Sympathy"]
  },
  3: {
    id: "C",
    description: "Conscientiousness",
    facets: ["Self-Efficacy", "Dutifulness", "Achievement-Striving", "Self-Discipline", "Cautiousness"]
  },
  4: {
    id: "N",
    description: "Neuroticism",
    facets: ["Anxiety", "Anger", "Depression", "Self-Consciousness", "Immoderdation", "Vulnerability"]
  },
  5: {
    id: "O",
    descriptions: "Openness to Experience",
    facets: ["Imagination", "Artistic Interests", "Emotionality", "Adventurousness", "Intellect", "Liberalism"]
  }
};

export const calculateNorms = (testData, user, full) => {
  const norm =
    user.sex === "male"
      ? user.age < 21
        ? maleUnder21Norm
        : maleOver21Norm
      : user.age < 21
      ? femaleUnder21Norm
      : femaleOver21Norm;
  const facetScale = {};
  // Score facet scales
  for (let i = 1; i < 31; i++) {
    let k = 0;
    for (let j = 0; j < 10; j++) {
      if (facetScale[i] === undefined) {
        facetScale[i] = 0;
      }
      facetScale[i] += full ? testData[questionMap[i + k].full] : testData[i + k];
      k += 30;
    }
  }
  // Number each facet set from 1-6
  const nFacet = {},
    eFacet = {},
    oFacet = {},
    aFacet = {},
    cFacet = {};
  let j = 0;
  for (let i = 1; i < 7; i++) {
    nFacet[i] = facetScale[i + j];
    eFacet[i] = facetScale[i + j + 1];
    oFacet[i] = facetScale[i + j + 2];
    aFacet[i] = facetScale[i + j + 3];
    cFacet[i] = facetScale[i + j + 4];
    j += 4;
  }
  // Domain scale
  const nDomainScale =
    facetScale[1] + facetScale[6] + facetScale[11] + facetScale[16] + facetScale[21] + facetScale[26];
  const eDomainScale =
    facetScale[2] + facetScale[7] + facetScale[12] + facetScale[17] + facetScale[22] + facetScale[27];
  const oDomainScale =
    facetScale[3] + facetScale[8] + facetScale[13] + facetScale[18] + facetScale[23] + facetScale[28];
  const aDomainScale =
    facetScale[4] + facetScale[9] + facetScale[14] + facetScale[19] + facetScale[24] + facetScale[29];
  const cDomainScale =
    facetScale[5] + facetScale[10] + facetScale[15] + facetScale[20] + facetScale[25] + facetScale[30];

  // Normed
  const SN = (10 * (nDomainScale - norm[1])) / norm[6] + 50;
  const SE = (10 * (eDomainScale - norm[2])) / norm[7] + 50;
  const SO = (10 * (oDomainScale - norm[3])) / norm[8] + 50;
  const SA = (10 * (aDomainScale - norm[4])) / norm[9] + 50;
  const SC = (10 * (cDomainScale - norm[5])) / norm[10] + 50;

  const SNF = {},
    SEF = {},
    SOF = {},
    SAF = {},
    SCF = {};
  for (let i = 1; i < 7; i++) {
    SNF[i] = 50 + (10 * (nFacet[i] - norm[i + 10])) / norm[i + 16];
    SEF[i] = 50 + (10 * (eFacet[i] - norm[i + 22])) / norm[i + 28];
    SOF[i] = 50 + (10 * (oFacet[i] - norm[i + 34])) / norm[i + 40];
    SAF[i] = 50 + (10 * (aFacet[i] - norm[i + 46])) / norm[i + 52];
    SCF[i] = 50 + (10 * (cFacet[i] - norm[i + 58])) / norm[i + 64];
  }

  // Cubic approximations for percentiles
  const cubicApprox = val =>
    val < 32
      ? 1
      : val > 73
      ? 99
      : Math.round(
          210.335958661391 -
            16.7379362643389 * val +
            0.405936512733332 * Math.pow(val, 2) -
            0.00270624341822222 * Math.pow(val, 3)
        );

  const SNP = cubicApprox(SN);
  const SEP = cubicApprox(SE);
  const SOP = cubicApprox(SO);
  const SAP = cubicApprox(SA);
  const SCP = cubicApprox(SC);

  const percentileN = {},
    percentileE = {},
    percentileO = {},
    percentileA = {},
    percentileC = {};
  const scorePercentile = {};
  const SNFP = {}, SEFP = {}, SOFP = {}, SAFP = {}, SCFP = {};
  const getPct = val => (val < 45 ? "low" : val >= 45 && val <= 55 ? "average" : "high");
  for (let i = 1; i < 7; i++) {
    percentileN[i] = getPct(SNF[i]);
    percentileE[i] = getPct(SEF[i]);
    percentileO[i] = getPct(SOF[i]);
    percentileA[i] = getPct(SAF[i]);
    percentileC[i] = getPct(SCF[i]);
    SNFP[i] = cubicApprox(SNF[i]);
    SEFP[i] = cubicApprox(SEF[i]);
    SOFP[i] = cubicApprox(SOF[i]);
    SAFP[i] = cubicApprox(SAF[i]);
    SCFP[i] = cubicApprox(SCF[i]);
    scorePercentile[i] = SNF[i];
    scorePercentile[i + 6] = SEF[i];
    scorePercentile[i + 12] = SOF[i];
    scorePercentile[i + 18] = SAF[i];
    scorePercentile[i + 24] = SCF[i];
  }
  return {
    extraversion: {
      score: SEP,
      facets: {
        friendliness: SEFP[1],
        gregariousness: SEFP[2],
        assertiveness: SEFP[3],
        activityLevel: SEFP[4],
        excitementSeeking: SEFP[5],
        cheerfulness: SEFP[6],
      }
    },
    agreeableness: {
      score: SAP,
      facets: {
        trust: SAFP[1],
        morality: SAFP[2],
        altruism: SAFP[3],
        cooperation: SAFP[4],
        modesty: SAFP[5],
        sympathy: SAFP[6],
      }
    },
    conscientiousness: {
      score: SCP,
      facets: {
        selfEfficacy: SCFP[1],
        orderliness: SCFP[2],
        dutifulness: SCFP[3],
        achievementStriving: SCFP[4],
        selfDiscipline: SCFP[5],
        cautiousness: SCFP[6],
      }
    },
    neuroticism: {
      score: SNP,
      facets: {
        anxiety: SNFP[1],
        anger: SNFP[2],
        depression: SNFP[3],
        selfConsciousness: SNFP[4],
        immoderation: SNFP[5],
        vulnerability: SNFP[6],
      }
    },
    opennessToExperience: {
      score: SOP,
      facets: {
        imagination: SOFP[1],
        artisticInterests: SOFP[2],
        emotionality: SOFP[3],
        adventurousness: SOFP[4],
        intellect: SOFP[5],
        liberalism: SOFP[6],
      }
    },
  }
};
