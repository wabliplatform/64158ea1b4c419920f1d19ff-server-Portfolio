/**
 * The DescsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DescsService');
const createdescs = async (request, response) => {
  await Controller.handleRequest(request, response, service.createdescs);
};

const deletedescs = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletedescs);
};

const getAlldescs = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlldescs);
};

const getdescs = async (request, response) => {
  await Controller.handleRequest(request, response, service.getdescs);
};

const updatedescs = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatedescs);
};


module.exports = {
  createdescs,
  deletedescs,
  getAlldescs,
  getdescs,
  updatedescs,
};
