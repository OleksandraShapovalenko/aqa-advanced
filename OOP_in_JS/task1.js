const Book = require('./Book')
const EBook = require('./EBook')

const book1 = new Book("Kerri", "S.King", 1983)
const book2 = new Book("Lissy", "S.King", 1996)

book1.printInfo()
book2.printInfo()

book1.year = "Author"
book1.name = 1967
book1.printInfo()


const ebook1 = new EBook("Billi Samers", "S.King", 2006, "PDF")

ebook1.file = null
ebook1.printInfo()


const oldestBook = Book.findOldestBook([book1, book2, ebook1])
console.log('The oldest', oldestBook)