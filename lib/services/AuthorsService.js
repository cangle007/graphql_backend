class AuthorsService {
  constructor({ authorsRepository }) {
    this.authorsRepository = authorsRepository;
  }

  async getAll(args, parent) {
    try {
      let authors = await this.authorsRepository.getAll('name');
      return authors;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      let author = await this.authorsRepository.getById(id);
      return author;
    } catch (error) {
      console.log(error);
    }
  }

  async createNewAuthor(args) {
    console.log('Second ????', args);
    try {
      let newAuthor = await this.authorsRepository.createNewAuthor(args);
      return newAuthor;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AuthorsService;
