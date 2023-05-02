/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Descs } = require('../models/Descs');

/**
* Creates the data
*
* descs Descs data to be created
* returns descs
* */
const createdescs = ({ descs }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Descs(descs).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* descsId String the Id parameter
* no response value expected for this operation
* */
const deletedescs = ({ descsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Descs.findOneAndDelete({ _id:descsId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlldescs = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Descs.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* descsId String the Id parameter
* returns descs
* */
const getdescs = ({ descsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Descs.findById(descsId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* descsId String the Id parameter
* descs Descs data to be updated (optional)
* returns descs
* */
const updatedescs = ({ descsId, descs }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Descs.findOneAndUpdate({ _id:descsId },descs).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createdescs,
  deletedescs,
  getAlldescs,
  getdescs,
  updatedescs,
};
