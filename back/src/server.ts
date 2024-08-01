import express from 'express'
import 'express-async-errors'
const cors = require('cors')
import { AppDataSource } from './data-source'
import { routes } from './routes'
import { errorMiddleware } from './middlewares/error'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    app.use(routes)
    app.use(errorMiddleware)

    return app.listen(process.env.PORT, () =>
        console.log(`Rodando Projeto na Porta ${process.env.PORT}`)
    )
})
