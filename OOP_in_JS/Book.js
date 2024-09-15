class Book {
  constructor(name, author, year) {
    this._name = name;
    this._author = author;
    this._year = year;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.log("No book name!")
    }
  }
  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value === "string") {
      this._author = value;
    } else {
      console.log("No book author!")
    }
  }
  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value === "number") {
      this._year = value;
    } else {
      console.log("No year of book written!")
    }
  }
  printInfo() {
    console.log(`book name: ${this._name} author: ${this._author} year: ${this._year}`);
  }

  static findOldestBook(books) {
    if (!books.length) {
      return;
    }

    let oldestBook = books[0];

    for (let i = 1; i < books.length; i++) {
      if (books[i].year < oldestBook.year) {
        oldestBook = books[i]
      }
    }

    return oldestBook;
  }
}

module.exports = Book

