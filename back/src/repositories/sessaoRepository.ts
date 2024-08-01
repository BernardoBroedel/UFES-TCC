import { AppDataSource } from '../data-source'
import { Sessao } from '../entities/Sessao'

export const sessaoRepository = AppDataSource.getRepository(Sessao)
