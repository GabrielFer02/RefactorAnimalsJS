import ScrollSmooth from "../js/modules/scroll.js";
import ActiveFaq from "../js/modules/faq-animation.js";
import ActiveList from "../js/modules/list-animation.js";
import InitModal from "../js/modules/modal.js";
import ActionTooltip from "../js/modules/tooltip.js";
import initAnimalsFetch from "../js/modules/animals-fetch.js";
import initFetchBitcoin from "../js/modules/fetch-bitcoin.js";
import SectionNavigation from "../js/modules/scroll-animation.js";
import DropdownMenuAction from "../js/modules/dropdown-menu.js";
import InitMenuMobile from "../js/modules/menu-mobile.js";
import InitOperationSchedule from "../js/modules/operating-schedule.js";

const Scroll = new ScrollSmooth("[data-menu='suave'] a[href^='#']", "smooth");
Scroll.init();

const activeFaq = new ActiveFaq("[data-anime='accordion'] dt");
activeFaq.init();

const activeList = new ActiveList(
  "[data-tab='menu'] li",
  "[data-tab='listaDescricao'] section"
);
activeList.init();

const initModal = new InitModal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']"
);
initModal.init();

const actionTooltip = new ActionTooltip("[data-tooltip]");
actionTooltip.init();

initAnimalsFetch("../animalsapi.json", ".numeros-grid");

initFetchBitcoin("https://www.blockchain.com/ticker", ".btc-info");

const sectionNavigation = new SectionNavigation("[data-anime='scroll']");
sectionNavigation.init();

const dropdownMenuAction = new DropdownMenuAction("[data-dropdown]");
dropdownMenuAction.init();

const initMenuMobile = new InitMenuMobile("[data-menu='buttom']", "[data-menu='list-items']");
initMenuMobile.init();

const initOperationSchedule = new InitOperationSchedule("[data-week]");
initOperationSchedule.init();
