export default class InitOperationSchedule {
  constructor(operation) {
    this.schedule = document.querySelector(operation);
    this.activeClass = "open";
  }

  operationInfo() {
    this.dayWeek = this.schedule.dataset.week.split(",").map(Number);
    this.time = this.schedule.dataset.time.split(",").map(Number);
  }

  validatingInfo() {
    this.day = new Date();
    this.scheduleOpen =
      this.day.getUTCHours() - 3 >= this.time[0] &&
      this.day.getUTCHours() - 3 < this.time[1];
    this.validDay = this.dayWeek.includes(this.day.getDay());

    return this.scheduleOpen && this.validDay;
  }

  initOperation() {
    if (this.validatingInfo()) {
      this.schedule.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.schedule) {
      this.operationInfo();
      this.initOperation();
    }
  }
}
