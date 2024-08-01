import { Request, Response } from 'express'
import { PacienteService } from '../services/PacienteService'

import { EdpEnum } from '../models/enums'
import { UserService } from '../services/UserService'

export class PacienteController {
    async listagemPacientes(request: Request, response: Response) {
        const { edp } = request.params

        let edpTransform = EdpEnum.edp1

        if (edp === '0') {
            edpTransform = EdpEnum.edp1
        } else if (edp === '1') {
            edpTransform = EdpEnum.edp2
        } else {
            console.warn(
                'Parâmetro EDP não corresponde a nenhum valor esperado.'
            )
        }

        const service = new PacienteService()

        const result = await service.pacientesEdp(edpTransform)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }

    async headerPaciente(request: Request, response: Response) {
        const { id } = request.params

        const service = new PacienteService()

        const result = await service.headerPaciente(id)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }

    async sobrePaciente(request: Request, response: Response) {
        const { id } = request.params

        const service = new PacienteService()

        const result = await service.sobrePaciente(id)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }

    async updatePaciente(request: Request, response: Response) {
        const update = request.body
        const { id } = request.params

        const service = new PacienteService()

        const result = await service.updatePaciente(id, update)

        if (result.affected === 0) {
            return response.status(404).json({ message: 'Erro ao salvar' })
        }

        return response
            .status(200)
            .json({ message: 'Paciente atualizado com sucesso' })
    }

    async updateImagePaciente(request: Request, response: Response) {
        const { id, role } = request.params

        const convertRole = Number(role)

        const service = new PacienteService()

        let fileData = request.file

        const result = await service.atualizarImagemPaciente({
            id,
            file: fileData,
        })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).json(result)
    }
}
