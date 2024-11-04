const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/regRoute'); 
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());    


app.use('/users/', authRoutes); 


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to student tasks RESTful API' });
});


require('../studenttasks/routes/taskRoutes')(app);
require('../studenttasks/routes/categoryRoutes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT + '.');
});
