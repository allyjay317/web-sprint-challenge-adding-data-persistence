const db = require('knex')(require('../knexfile').development)

function getProjects() {

}

function getProjectsById(id) {

}

function getProjectTasks(id) {

}

function getProjectResources(id) {

}

function addProject(project) {

}

function updateProject(id, project) {

}

function deleteProject(id) {

}

function addTaskToProject(task) {

}

function addResourceToProject(resourceId) {

}


module.exports = {
  getProjects,
  getProjectTasks,
  getProjectResources,
  addProject,
  updateProject,
  deleteProject,
  getProjectsById,
  addTaskToProject,
  addResourceToProject
}