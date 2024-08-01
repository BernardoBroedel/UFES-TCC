import { pacienteRepository } from '../repositories/pacienteRepository'
import { EdpEnum } from '../models/enums'
import { SobrePaciente } from '../models/paciente'
import { imagemRepository } from '../repositories/imagemRepository'

let mime = require('mime')

export class PacienteService {
    async pacientesEdp(edp: EdpEnum): Promise<any[] | Error> {
        //TODO: TRATAR CASOS DE ERRO

        // return await pacienteRepository.find({
        //     where: {
        //         edp: edp,
        //     },
        //     select: ['id', 'nome', 'nascimento'],
        //     order: {
        //         nome: 'ASC',
        //     },
        // })

        const pacientes = await pacienteRepository.find({
            where: { edp: edp },
            select: ['id', 'nome', 'nascimento'],
            relations: ['imagem'],
            order: { nome: 'ASC' },
        });

        // Mapear os pacientes para incluir a imagem em base64
        return pacientes.map((paciente) => {
            let url = ''

            if (paciente.imagem) {
                const fileData = paciente.imagem.data
                const imagemBase64 = fileData.toString('base64')
                const dataImagePrefix = `data:image/${paciente.imagem.mimeType};base64,`
                url = `${dataImagePrefix}${imagemBase64}`
            }

            return {
                id: paciente.id,
                nome: paciente.nome,
                nascimento: paciente.nascimento,
                imagem: url.length > 0 ? url : null,
            }
        })
    }

    async headerPaciente(id: string): Promise<any | Error> {
        const paciente = await pacienteRepository.findOne({
            where: {
                id: id,
            },
            select: ['id', 'nome', 'edp'],
            relations: {
                imagem: true,
            },
        })

        let url = ''

        if (paciente?.imagem) {
            let fileData = paciente!.imagem!.data

            let imagemBase64 = fileData.toString('base64')

            const dataImagePrefix = `data:image/${paciente!.imagem!!.mimeType};base64,`

            url = `${dataImagePrefix}${imagemBase64}`
        }

        return {
            id: paciente?.id,
            nome: paciente?.nome,
            edp: paciente?.edp,
            imagem: url.length > 0 ? url : null,
        }
    }

    async sobrePaciente(id: string): Promise<SobrePaciente | Error> {
        //TODO: TRATAR CASOS DE ERRO

        const paciente = await pacienteRepository.findOneBy({ id })

        if (!paciente) {
            return new Error('Paciente não encontrado')
        }

        return {
            nome: paciente.nome,
            nascimento: paciente.nascimento,
            prontuario: paciente.prontuario,
            edp: paciente.edp,
            cpf: paciente.cpf,
            rg: paciente.rg,
            sobre_orelha_direita: paciente.sobre_orelha_direita,
            marca_orelha_direita: paciente.marca_orelha_direita,
            modelo_orelha_direita: paciente.modelo_orelha_direita,
            sobre_orelha_esquerda: paciente.sobre_orelha_esquerda,
            marca_orelha_esquerda: paciente.marca_orelha_esquerda,
            modelo_orelha_esquerda: paciente.modelo_orelha_esquerda,
        }
    }

    async updatePaciente(id: string, update: any): Promise<any> {
        return await pacienteRepository.update(id, update)
    }

    async atualizarImagemPaciente({ id, file }: any): Promise<any | Error> {
        let paciente = await pacienteRepository.findOne({
            where: {
                id: id,
            },
        })

        if (!paciente) return new Error('Paciente não encontrado')

        if (!!file) {
            const itemImage = imagemRepository.create({
                nomeImagem: 'nomeImagem',
                name: file!.originalname,
                mimeType: mime.extension(file!.mimetype),
                data: file!.buffer,
            })

            await imagemRepository.save(itemImage)

            paciente = {
                ...paciente,
                imagem: itemImage,
            }
        }

        paciente = {
            ...paciente,
        }

        await pacienteRepository.save(paciente!)

        let url = ''

        if (paciente?.imagem) {
            let fileData = paciente!.imagem!.data

            let imagemBase64 = fileData.toString('base64')

            const dataImagePrefix = `data:image/${paciente!.imagem!!.mimeType};base64,`

            url = `${dataImagePrefix}${imagemBase64}`
        }

        return {
            imagem: url,
        }
    }
}
