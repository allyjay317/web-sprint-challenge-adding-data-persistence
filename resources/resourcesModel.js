const db = require('knex')(require('../knexfile').development)

function getResources() {
  return db('resources')
}

function getResourceById(id) {
  return db('resources')
    .where({ id })
    .first()
}

async function addResource(resource) {
  const [id] = await db('resources')
    .insert(resource)

  return getResourceById(id)
}



module.exports = {
  getResources,
  addResource,
  getResourceById
}