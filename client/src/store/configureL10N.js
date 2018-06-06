import { initialize, addTranslationForLanguage } from "react-localize-redux";

import english from "../resources/en-us.json";
import spanish from "../resources/es-mx.json";
import simplifiedChinese from "../resources/zh-chs.json";

export default store => {
  const languages = [
    { name: "English", code: "en-US" },
    { name: "español", code: "es-mx" },
    { name: "中文(简体)", code: "zh-chs" }
  ];

  store.dispatch(initialize(languages, { defaultLanguage: "en-US" }));

  store.dispatch(addTranslationForLanguage(english, "en-US"));
  store.dispatch(addTranslationForLanguage(spanish, "es-mx"));
  store.dispatch(addTranslationForLanguage(simplifiedChinese, "zh-chs"));
};
