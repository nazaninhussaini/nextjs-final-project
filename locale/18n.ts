import {i18n} from "i18next";
import en from "./en.json";
import fa from "./fa.json";
import pa from "./pa.json";
i18n.init({
    lug : "en",
    resources:{
        en :{
            translation : en,
        },
        fa :{
            translation : fa,
        },
        pa :{
            translation : pa,
        }
    }
});
export default i18n;