class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year}, genre: ${this.genre}`;
    }
  }

  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    filterBooksByYear(year) {
      return this.books.filter(book => book.year > year);
    }
  
    getAllTitles() {
      return this.books.map(book => book.title);
    }
  
    getTotalNumberOfBooks() {
      return this.books.length;
    }
  
    getAveragePublicationYear() {
      if (this.books.length === 0) return 0;
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return totalYears / this.books.length;
    }
  }
  function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
  }
// Create a new library
const myLibrary = new Library();

// Create books using the factory function
const book1 = createBook("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy");
const book2 = createBook("1984", "George Orwell", 1949, "Dystopian");
const book3 = createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Filter books published after 1940
const recentBooks = myLibrary.filterBooksByYear(1940);
console.log("Books published after 1940:");
recentBooks.forEach(book => console.log(book.getInfo()));

// Get all book titles
const titles = myLibrary.getAllTitles();
console.log("All book titles:", titles);

// Get the total number of books
const totalBooks = myLibrary.getTotalNumberOfBooks();
console.log("Total number of books:", totalBooks);

// Calculate the average publication year
const averageYear = myLibrary.getAveragePublicationYear();
console.log("Average publication year:", averageYear);
    