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

  async createNew(args) {
    console.log('Second ????');
    try {
      let newBook = await this.booksRepository.createNew(args);
      return newBook;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = BooksService;
