const { getItems, getItem, addItem } = require("../controllers/items");
//item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
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

//options fot add item
const postItemOpts = {
  schema: {
    response: {
      201: Item,
    },
  },
  handler: addItem,
};
function itemRoutes(fastify, option, done) {
  //get all items
  fastify.get("/items", getItemsOpts);

  //get single items
  fastify.get("/items/:id", getItemOpts);

  //add item
  fastify.post('/items', postItemOpts)

  done();
}

module.exports = itemRoutes;
