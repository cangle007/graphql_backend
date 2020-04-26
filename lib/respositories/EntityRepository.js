class EntityRepository {
  constructor({ entityName, knexDB }) {
    this._entityName = entityName;
    this._knexDB = knexDB;
  }

  async getAll(orderFactor) {
    try {
      let allEntities = await this._knexDB(this._entityName).orderBy(orderFactor, 'desc');
      return allEntities;
    } catch (error) {
      throw new Error('Error at DB');
    }
  }

  async getById(id) {
    try {
      let [entity] = await this._knexDB(this._entityName).where({ id: id });
      return entity;
    } catch (error) {
      throw new Error('Error at DB');
    }
  }

  async createNew(args) {
    console.log('Third ????');
    console.log('args----->', args);
    try {
      let authorBooks = await this._knexDB(this._entityName)
        .where({ author_id: args.author_id })
        .select('title');
      let uniqueBook = authorBooks.some((obj) => obj.title !== args.title);

      if (uniqueBook) {
        let [entity] = await this._knexDB(this._entityName).insert(args, '*');
        return entity;
      } else {
        return 'duplicate book found!!'; //how would handle this?
      }
    } catch (error) {
      throw new Error('Error at DB');
    }
  }
}

module.exports = EntityRepository;
