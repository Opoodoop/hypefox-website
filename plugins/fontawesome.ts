import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas, far, fab);
config.autoAddCss = false;
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FAIcon", FontAwesomeIcon);
});