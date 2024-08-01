import { AppDataSource } from '../data-source'
import { Anexo } from '../entities/Anexo'

export const anexoRepository = AppDataSource.getRepository(Anexo)
