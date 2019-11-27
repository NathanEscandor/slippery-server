(function () {
  'use strict';

  const express = require('express');
  const router = express.Router();

  const UserMiddleware = require('./user.module')().UserMiddleware;

  router.post('/', 
    UserMiddleware.addUser,
    function (req, res) {
      res.status(201).json(req.response);
  });

  module.exports = router;
}) (); 