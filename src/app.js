import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";


import  authRoutes from './routes/auth.routes.js'
import  taskRoutes from './routes/tasks.routes.js'

const app = express();

app.use(cors({
    origin: 'https://listasks-front.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',//no es necesario, pero ayuda a controlar que peticiones solamente va realizar
    credentials: true,
    optionsSuccessStatus: 204
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use("/api",authRoutes)
app.use("/api",taskRoutes)

export default app;