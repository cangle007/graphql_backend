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
}

module.exports = EntityRepository;
