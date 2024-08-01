import { Request, Router } from 'express'

const routes = Router()

//MULTER
let multer = require('multer')
const upload = multer()

//MIDDLEWARE
import jwt from 'jsonwebtoken'
import { AuthController } from './controllers/AuthController'
import { UserController } from './controllers/UserController'
import { PacienteController } from './controllers/PacienteController'
function verifyToken(req: Request, res: any, next: any) {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido' })
    }
    jwt.verify(token, process.env.SECRET_JWT!, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' })
        }

        req.user = decoded
        next()
    })
}

//ROUTES

//AUTH
routes.post('/session', new AuthController().getSession)

//USER
routes.get('/user/:id/:role', verifyToken, new UserController().userInfo)
routes.post('/user/:id/:role', verifyToken, upload.single('datein') , new UserController().updateUserInfo)

//CADASTRO
routes.post('/novosupervisor', verifyToken, new UserController().novoSupervisor)
routes.post('/novoreabilitador', verifyToken, new UserController().novoReabilitador)
routes.post('/novopaciente', verifyToken, new UserController().novoPaciente)

//PACIENTE
routes.get('/pacientes/:edp', verifyToken, new PacienteController().listagemPacientes)
routes.get('/sobrepaciente/:id', verifyToken, new PacienteController().sobrePaciente)
routes.get('/paciente/:id', verifyToken, new PacienteController().headerPaciente)
routes.patch('/paciente/:id', verifyToken, new PacienteController().updatePaciente)
routes.post('/pacienteimagem/:id', verifyToken, upload.single('datein') , new PacienteController().updateImagePaciente)


export { routes }
