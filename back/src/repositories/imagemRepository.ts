import { AppDataSource } from "../data-source";
import { Imagem } from "../entities/Imagem";

export const imagemRepository = AppDataSource.getRepository(Imagem)
