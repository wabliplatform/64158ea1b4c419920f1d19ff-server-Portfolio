/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Posts } = require('../models/Posts');

/**
* Creates the data
*
* posts Posts data to be created
* returns posts
* */
const createposts = ({ posts }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Posts(posts).save();
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
* postsId String the Id parameter
* no response value expected for this operation
* */
const deleteposts = ({ postsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Posts.findOneAndDelete({ _id:postsId }).exec();
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
const getAllposts = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Posts.find().exec();
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
* postsId String the Id parameter
* returns posts
* */
const getposts = ({ postsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Posts.findById(postsId)
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
* postsId String the Id parameter
* posts Posts data to be updated (optional)
* returns posts
* */
const updateposts = ({ postsId, posts }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Posts.findOneAndUpdate({ _id:postsId },posts).exec();
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
  createposts,
  deleteposts,
  getAllposts,
  getposts,
  updateposts,
};
