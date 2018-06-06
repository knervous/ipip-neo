import moment from "moment/min/moment-with-locales";

var momentMapping = { "en-US": "en", "es-mx": "es", "zh-chs": "zh-cn" };

export const setLocaleForDateTimeFormatting = locale => {
  moment.locale(momentMapping[locale] || locale);
};
