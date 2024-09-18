import ScrollSmooth from "../js/modules/scroll.js";
import ActiveFaq from "../js/modules/faq-animation.js";
import ActiveList from "../js/modules/list-animation.js";
import sectionNavigation from "../js/modules/scroll-animation.js";
import initModal from "../js/modules/modal.js";
import actionTooltip from "../js/modules/tooltip.js";
import dropDownMenuAction from "../js/modules/dropdown-menu.js";
import initMenuMobile from "../js/modules/menu-mobile.js";
import initOperationSchedule from "../js/modules/operating-schedule.js";
import initAnimalsFetch from "../js/modules/animals-fetch.js";
import initFetchBitcoin from "../js/modules/fetch-bitcoin.js";

const Scroll = new ScrollSmooth("[data-menu='suave'] a[href^='#']", "smooth");
Scroll.init();

const activeFaq = new ActiveFaq("[data-anime='accordion'] dt");
activeFaq.init();

const activeList = new ActiveList("[data-tab='menu'] li", "[data-tab='listaDescricao'] section");
activeList.init();

sectionNavigation();
initModal();
actionTooltip();
dropDownMenuAction();
initMenuMobile();
initOperationSchedule();
initAnimalsFetch();
initFetchBitcoin();