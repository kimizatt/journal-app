require('dotenv').config({path: __dirname +'/../.env'})
const express = require('express')
const massive = require('massive')
const session = require ('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const uc = require('./controllers/userController')
const ec = require('./controllers/entryController')
const initSession = require('./middleware/initSession')
const authCheck = require('./middleware/authCheck')

const app = express()
app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: true,
        resave: false
    })
)

massive(CONNECTION_STRING).then(db => {
app.set('db', db)
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))}
)

app.use(initSession)

//endpoints for authorization
app.post('/api/login', uc.login)
app.post('/api/signup', uc.signup)
app.get('/api/user', authCheck, uc.getUser)
app.delete('/api/logout', uc.logout)

//endpoints for journal entries
app.get('/api/entries/:userId', ec.getEntries)
app.delete('/api/entries/:entryId',  ec.deleteEntry)
app.put('/api/entries/edit/:entryId', ec.editEntry)
app.post('/api/entries',  ec.saveEntry)
