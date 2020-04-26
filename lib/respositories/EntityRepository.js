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
      throw new Error('Error at DB ' + error);
    }
  }

  async getById(id) {
    try {
      let [entity] = await this._knexDB(this._entityName).where({ id: id });
      return entity;
    } catch (error) {
      throw new Error('Error at DB ' + error);
    }
  }

  async createNewAuthor(args) {
    try {
      let checkAuthors = await this._knexDB(this._entityName).where({ name: args.name });

      if (checkAuthors.length === 0) {
        let newAuthor = await this._knexDB(this._entityName).insert(args);
        return newAuthor;
      } else {
        throw new Error(`Author ${args.name}, already existed`);
      }
    } catch (error) {
      throw new Error('Error at DB ' + error);
    }
  }

  async createNewBook(args) {
    try {
      let authorBooks = await this._knexDB(this._entityName)
        .where({ author_id: args.author_id })
        .select('title');
      let uniqueBook = authorBooks.some((obj) => obj.title === args.title);

      if (!uniqueBook) {
        let [entity] = await this._knexDB(this._entityName).insert(args, '*');
        return entity;
      } else {
        throw new Error(`Book ${args.title}, already existed`);
      }
    } catch (error) {
      throw new Error('Error at DB ' + error);
    }
  }
}

module.exports = EntityRepository;
