const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const tareaRouter = require('./routes/tareas')
const authRouter = require('./routes/auth')
const connectDB = require('./db/connection')

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))

app.use('/api/tareas', tareaRouter)
app.use('/api/auth', authRouter);

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server corriendo en el puerto ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()