class EntityResolver {
  constructor({ entityName, entityService }) {
    this.entityName = entityName;
    this.entityService = entityService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.createNew = this.createNew.bind(this);
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

  async createNew(parent, args, context) {
    console.log('First ????', args);
    try {
      const newBook = await this.entityService.createNew(args);
      return newBook;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EntityResolver;
