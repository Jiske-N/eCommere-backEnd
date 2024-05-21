// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// this one from chatgpt works properly the commented out one below works but gives duplicate product tag info on get requests. I can't quite work out why though.
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  otherKey: "tag_id",
});

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: { model: ProductTag },
// });

// this one from chatgpt works properly the commented out one below works but gives duplicate product tag info on get requests. I can't quite work out why though.
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  otherKey: "product_id",
});

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: { model: ProductTag },
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
