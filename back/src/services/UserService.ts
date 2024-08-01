import { User, UserRole } from '../entities/User'
import { hash } from 'bcryptjs'
import { userRepository } from '../repositories/userRepository'
import { supervisorRepository } from '../repositories/supervisorRepository'
import { reabilitadorRepository } from '../repositories/reabilitadorRepository'
import { pacienteRepository } from '../repositories/pacienteRepository'
import { EdpEnum } from '../models/enums'
import { UpdateUserInfo, UserInfo } from '../models/user'
import { imagemRepository } from '../repositories/imagemRepository'

let mime = require('mime')

type CreateSupervisorRequest = {
    username: string
    password: string
    name: string
}

type CreateReabilitadorRequest = {
    name: string
    password: string
    semestre: string
    matricula: string
    edp: EdpEnum
}

type CreatePacienteRequest = {
    name: string
    dataNascimento: string
    numeroProntuario: string
    edp: EdpEnum
}

export class UserService {
    async cadastrarSupervisor({
        username,
        password,
        name,
    }: CreateSupervisorRequest): Promise<User | Error> {
        // Verificar se o nome de usuário já existe
        const existingUser = await userRepository.findOne({
            where: { username },
        })
        if (existingUser) {
            return new Error(
                'Nome de usuário já existe. Por favor, escolha outro nome de usuário.'
            )
        }

        const passwordHash = await hash(password, 8)

        const supervisor = supervisorRepository.create({
            nome: name,
        })
        await supervisorRepository.save(supervisor)

        const user = userRepository.create({
            username,
            password: passwordHash,
            role: UserRole.supervisor,
            supervisor,
        })

        await userRepository.save(user)

        await supervisorRepository.save({
            id: supervisor.id,
            user: user,
        })

        return user
    }

    async cadastrarReabilitador({
        name,
        password,
        matricula,
        semestre,
        edp
    }: CreateReabilitadorRequest): Promise<User | Error> {
        // Verificar se o nome de usuário já existe
        const existingUser = await userRepository.findOne({
            where: { username: matricula },
        })
        if (existingUser) {
            return new Error(
                'Nome de usuário já existe. Por favor, escolha outro nome de usuário.'
            )
        }

        const passwordHash = await hash(password, 8)

        const reabilitador = reabilitadorRepository.create({
            nome: name,
            semestre,
            matricula,
            edp: edp,
        })
        await reabilitadorRepository.save(reabilitador)

        const user = userRepository.create({
            username: matricula,
            password: passwordHash,
            role: UserRole.reabilitador,
            reabilitador,
        })

        await userRepository.save(user)

        await reabilitadorRepository.save({
            id: reabilitador.id,
            user: user,
        })

        return user
    }

    async cadastrarPaciente({
        name,
        edp,
        numeroProntuario,
        dataNascimento,
    }: CreatePacienteRequest): Promise<User | Error> {
        // Verificar se o nome de usuário já existe
        const existingUser = await userRepository.findOne({
            where: { username: numeroProntuario },
        })
        if (existingUser) {
            return new Error(
                'Nome de usuário já existe. Por favor, escolha outro nome de usuário.'
            )
        }

        const passwordHash = await hash('senhagenerica', 8)

        const paciente = pacienteRepository.create({
            nome: name,
            edp: edp,
            nascimento: dataNascimento,
            prontuario: numeroProntuario,
        })
        await pacienteRepository.save(paciente)

        const user = userRepository.create({
            username: numeroProntuario,
            password: passwordHash,
            role: UserRole.paciente,
            paciente,
        })

        await userRepository.save(user)

        await pacienteRepository.save({
            id: paciente.id,
            user: user,
        })

        return user
    }

    async userInfoSupervisor(id: string): Promise<UserInfo | Error> {
        const user = await userRepository.findOne({
            where: {
                id,
            },
            relations: {
                supervisor: true,
            }
        })

        const supervisor = await supervisorRepository.findOne({
            where: {
                id: user?.supervisor.id,
            },
            select: ['id', 'nome'],
            relations: {
                imagem: true,
            }
        })

        let url = ''

        if(supervisor?.imagem) {
            let fileData = supervisor!.imagem!.data

            let imagemBase64 = fileData.toString('base64')

            const dataImagePrefix = `data:image/${supervisor!.imagem!!.mimeType};base64,`

            url = `${dataImagePrefix}${imagemBase64}`
        }

        return {
            id: supervisor?.id,
            nome: supervisor?.nome,
            imagem: url.length > 0 ? url : null,
        }
    }

    async userInfoReabilitador(id: string): Promise<UserInfo | Error> {
        const user = await userRepository.findOne({
            where: {
                id,
            },
            relations: {
                reabilitador: true,
            }
        })

        const reabilitador = await reabilitadorRepository.findOne({
            where: {
                id: user?.reabilitador.id,
            },
            select: ['id', 'nome'],
            relations: {
                imagem: true,
            }
        })

        let url = ''

        if(reabilitador?.imagem) {
            let fileData = reabilitador!.imagem!.data

            let imagemBase64 = fileData.toString('base64')

            const dataImagePrefix = `data:image/${reabilitador!.imagem!!.mimeType};base64,`

            url = `${dataImagePrefix}${imagemBase64}`
        }

        return {
            id: reabilitador?.id,
            nome: reabilitador?.nome,
            imagem: url.length > 0 ? url : null,
        }
    }

    async atualizarUsuarioSupervisor({
                                id,
                                nome,
                                file,
                            }: UpdateUserInfo): Promise<any | Error> {

        const user = await userRepository.findOne({
            where: {
                id,
            },
            relations: {
                supervisor: true,
            }
        })

        let supervisor = await supervisorRepository.findOne({
            where: {
                id: user?.supervisor.id,
            }
        })

        if(!supervisor) return new Error('Supervisor não encontrado')

        if(!!file) {
            const itemImage = imagemRepository.create({
                nomeImagem: 'nomeImagem',
                name: file!.originalname,
                mimeType: mime.extension(file!.mimetype),
                data: file!.buffer,
            })

            await imagemRepository.save(itemImage)

            supervisor = {
                ...supervisor,
                imagem: itemImage,
            }
        }

        supervisor = {
            ...supervisor,
            nome: nome,
        }

        await supervisorRepository.save(supervisor!)

        let url = ''

        if(supervisor?.imagem) {
            let fileData = supervisor!.imagem!.data

            let imagemBase64 = fileData.toString('base64')

            const dataImagePrefix = `data:image/${supervisor!.imagem!!.mimeType};base64,`

            url = `${dataImagePrefix}${imagemBase64}`
        }

        return {
            imagem: url,
        }

    }
}
