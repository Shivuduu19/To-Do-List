export default class Task {
  constructor(name, dueDate = "Give date", status = false) {
    this.name = name;
    this.dueDate = dueDate;
    this.status = status;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setStatus(status) {
    this.status = status;
  }
  getStatus() {
    return this.status;
  }
  taskStatus() {
    this.status = !this.status;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  getDateFormatted() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];
    return `${month}/${day}/${year}`;
  }
}
