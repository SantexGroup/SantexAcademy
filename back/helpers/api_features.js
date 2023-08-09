class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  /**
   *
   * @returns
   */
  limitFields() {
    if (this.queryString.fields) {
      this.attributes = this.queryString.fields.split(',');
    }

    return this;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.where = JSON.parse(queryStr);
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const fields = this.queryString.sort.split(',');
      this.order = fields.map((f) => {
        const [field, order] = f.trim().split(' ');
        return [field, (order || 'ASC').toUpperCase()];
      });
    }

    return this;
  }

  paginate() {
    if (!this.queryString.page && !this.queryString.limit) {
      return this;
    }

    if (this.queryString.page < 1) {
      this.queryString.page = 1;
    }

    const page = this.queryString.page * 1;
    this.limit = this.queryString.limit * 1 || 100;
    this.offset = (page - 1) * this.limit;

    this.pagination = { page, limit: this.limit };
    return this;
  }

  async exec() {
    const {
      attributes, where, order, limit, offset, pagination,
    } = this;

    const data = await this.query.findAll({
      attributes,
      where,
      order,
      limit,
      offset,
    });

    const result = { status: 'success', data };
    if (this.pagination) {
      pagination.total = await this.query.count();
      result.pagination = pagination;
    }
    return result;
  }
}

module.exports = ApiFeatures;
