export class Worksheet {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

export class Command {
  constructor(name, id, worksheet, date) {
    this.name = name;
    this.id = id;
    this.worksheet = worksheet;
    this.date = date;
  }
}
