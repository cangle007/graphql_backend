class EntityResolver {
  constructor({ entityName, entityService }) {
    this.entityName = entityName;
    this.entityService = entityService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.createNewBook = this.createNewBook.bind(this);
    this.createNewAuthor = this.createNewAuthor.bind(this);
  }

  async getAll(parent, args, context) {
    try {
      const allEntities = await this.entityService.getAll();
      return allEntities;
    } catch (error) {
      throw new Error('Error occurred. Please try again.');
    }
  }

  async getById(parent, args, context) {
    try {
      const entity = await this.entityService.getById(args.id);
      return entity;
    } catch (error) {
      throw new Error('Error occurred. Please try again.');
    }
  }

  async createNewBook(parent, args, context) {
    console.log('First ????', args);
    try {
      const newBook = await this.entityService.createNewBook(args);
      return newBook;
    } catch (error) {
      console.log(error);
    }
  }

  async createNewAuthor(parent, args, context) {
    console.log('First ????', args);
    try {
      const newAuthor = await this.entityService.createNewAuthor(args);
      return newAuthor;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EntityResolver;
