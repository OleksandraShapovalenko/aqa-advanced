const Book = require('./Book')

class EBook extends Book {
    constructor(name, author, year, file) {
        super(name, author, year)
        this._file = file;
    }
    get file() {
        return this._file;
    }
    set file(value) {
        if (typeof value === "string") {
            this._file = value;
        } else {
            console.log("No file format of book!")
        }
    }
    printInfo() {
        super.printInfo()
        console.log(`file format: ${this._file}`);
    }

    static createEBook(book, file) {
        return new EBook(book.name, book.author, book.year, file)
    }
}

module.exports = EBook