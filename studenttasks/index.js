const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to student tasks RESTful API' })
})

require('../studenttasks/routes/taskRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT + '.')
})