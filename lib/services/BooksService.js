class BooksService {
  constructor({ booksRepository }) {
    this.booksRepository = booksRepository;
  }

  async getAll(args, parent) {
    try {
      let books = await this.booksRepository.getAll('title');
      return books;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      let book = await this.booksRepository.getById(id);
      return book;
    } catch (error) {
      console.log(error);
    }
  }

  async createNewBook(args) {
    console.log('Second BooksService ????', args);
    try {
      let newBook = await this.booksRepository.createNewBook(args);
      return newBook;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BooksService;
