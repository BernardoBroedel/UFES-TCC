import { AppDataSource } from '../data-source'
import { Reabilitador } from '../entities/Reabilitador'

export const reabilitadorRepository = AppDataSource.getRepository(Reabilitador)
