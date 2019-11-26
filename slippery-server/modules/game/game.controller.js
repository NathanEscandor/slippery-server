//this is the entry point for any game requests
(function () {
  'use strict';

  const express = require('express');
  const router = express.Router();

  const GameMiddleware = require('./game.module')().GameMiddleware;

  router.post('/', 
    GameMiddleware.addGame, 
    function (req, res) {
      res.status(201).json(req.response);
  });

  router.get('/',
    GameMiddleware.getGames,
    function (req, res) {
      res.status(200).json(req.response);
    }
  );

  router.get('/:gameId',
    GameMiddleware.getGameById,
    function (req, res) {
      res.status(200).json(req.response);
    })

  module.exports = router;
}) ();