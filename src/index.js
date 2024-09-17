import ScrollSmooth from "../js/modules/scroll.js";
import sectionNavigation from "../js/modules/scroll-animation.js";
import activeFaq from "../js/modules/faq-animation.js";
import activeList from "../js/modules/list-animation.js";
import initModal from "../js/modules/modal.js";
import actionTooltip from "../js/modules/tooltip.js";
import dropDownMenuAction from "../js/modules/dropdown-menu.js";
import initMenuMobile from "../js/modules/menu-mobile.js";
import initOperationSchedule from "../js/modules/operating-schedule.js";
import initAnimalsFetch from "../js/modules/animals-fetch.js";
import initFetchBitcoin from "../js/modules/fetch-bitcoin.js";

const Scroll = new ScrollSmooth("[data-menu='suave'] a[href^='#']", "smooth");
Scroll.init();
sectionNavigation();
activeFaq();
activeList();
initModal();
actionTooltip();
dropDownMenuAction();
initMenuMobile();
initOperationSchedule();
initAnimalsFetch();
initFetchBitcoin();