import { AppDataSource } from '../data-source'
import { Paciente } from '../entities/Paciente'

export const pacienteRepository = AppDataSource.getRepository(Paciente)
