var models = require('../models');
var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

module.exports = {
  messages: {
    get: (req, res) => { //elsewhere we will call app.get on a directory???, and the messages.get cb.
      fs.readDir(folder)
        .then((fileList) =>{
          return readAllFiles(fileList);
        });
    },
    // a function which handles a get request for all messages
    //we will need to import/require fs = fs, promises = bluebird, ...=promisify fs...
    //use promisified fs.readDir called on message folder.
    //  .then((messageFileList) => {
    //    return readAllMessageFiles(messageFileList)
    //is readAllMessageFiles a built in program or do we define it elsewhere or is this a reference to the model??
    //    .then((messageData) => {
    //      res.end(messageData)
    //    })
    //   })


    post: (req, res) => {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

