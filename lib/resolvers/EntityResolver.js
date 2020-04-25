class EntityResolver {
  constructor({ entityName, entityService }) {
    this.entityName = entityName;
    this.entityService = entityService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
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
}

module.exports = EntityResolver;
