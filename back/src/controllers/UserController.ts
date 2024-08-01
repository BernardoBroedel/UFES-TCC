import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    async novoSupervisor(request: Request, response: Response) {
        const { name, username, password } = request.body

        const service = new UserService()

        const result = await service.cadastrarSupervisor({
            username,
            password,
            name,
        })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(true)
    }

    async novoReabilitador(request: Request, response: Response) {
        const { name, password, matricula, semestre, edp } = request.body

        const service = new UserService()

        const result = await service.cadastrarReabilitador({
            name,
            password,
            matricula,
            semestre,
            edp
        })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(true)
    }

    async novoPaciente(request: Request, response: Response) {
        const { name, dataNascimento, numeroProntuario, edp } = request.body

        const service = new UserService()

        const result = await service.cadastrarPaciente({
            name,
            dataNascimento,
            numeroProntuario,
            edp,
        })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(true)
    }

    async userInfo(request: Request, response: Response){
        const { id, role } = request.params

        const convertRole = Number(role)

        const service = new UserService()

        let result;

        if(convertRole == 0) {
            result = await service.userInfoSupervisor(id)

        } else {
            result = await service.userInfoReabilitador(id)

        }

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }

    async updateUserInfo(request: Request, response: Response){
        const { id, role } = request.params
        const { nome } = request.body

        const convertRole = Number(role)

        const service = new UserService()

        let result;

        let fileData = request.file

        if(convertRole == 0) {
            result = await service.atualizarUsuarioSupervisor({
                id,
                nome,
                file: fileData,
            })

        } else {
            result = await service.userInfoReabilitador(id)

        }

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }
}
