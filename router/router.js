const { Router } = require('express')
const GameControler = require('../controllers/GameController')
const IssueController = require('../controllers/IssueController')
const MsgController = require('../controllers/MsgController')
const UserController = require('../controllers/UserController')
const route = Router()
const msgController = new MsgController()
const userController = new UserController()
const issueController = new IssueController()
const gameController = new GameControler()

route.get('/messages/:gameId', msgController.getAllMessages)
route.delete('/messages/:msgId', msgController.deleteMessage)
route.get('/users/:userId', userController.getUser)
route.get('/users/:gameId', userController.getAllUsers)
route.post('/users', userController.setUser)
route.delete('/users/:userId', userController.deleteUser)
route.get('/issues/:issueId', issueController.getIssue)
route.get('/issues/:gameId', issueController.getAllIssues)
route.post('/issues', issueController.addIssue)
route.delete('/issues/:issueId', issueController.deleteIssue)
route.put('/issues', issueController.updateIssue)
route.get('/game/:gameId', gameController.getGame)


module.exports = { route }
