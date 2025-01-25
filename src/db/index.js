// Simulated in-memory database
let books = [];
let nextId = 1;

export const db = {
  async addBook(book) {
    const newBook = { ...book, id: nextId++ };
    books.push(newBook);
    return newBook;
  },
  
  async getBooks() {
    return [...books];
  }
};
