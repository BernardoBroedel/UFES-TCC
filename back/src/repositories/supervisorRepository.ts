import { AppDataSource } from '../data-source'
import { Supervisor } from '../entities/Supervisor'

export const supervisorRepository = AppDataSource.getRepository(Supervisor)
