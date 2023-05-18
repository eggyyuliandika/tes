const { getItems, getItem } = require("../controllers/items");
//item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
};

// options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};
//options for get single items
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};
function itemRoutes(fastify, option, done) {
  //get all items
  fastify.get("/items", getItemsOpts);

  //get single items
  fastify.get("/items/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
