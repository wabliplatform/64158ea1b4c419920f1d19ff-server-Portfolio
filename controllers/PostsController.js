/**
 * The PostsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PostsService');
const createposts = async (request, response) => {
  await Controller.handleRequest(request, response, service.createposts);
};

const deleteposts = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteposts);
};

const getAllposts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllposts);
};

const getposts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getposts);
};

const updateposts = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateposts);
};


module.exports = {
  createposts,
  deleteposts,
  getAllposts,
  getposts,
  updateposts,
};
