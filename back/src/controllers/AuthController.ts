import { Request, Response } from 'express'
import {AuthService} from "../services/AuthService";
import Joi from "joi";
import {BadRequestError} from "../helpers/api-erros";

export class AuthController {
    async getSession(request: Request, response: Response) {
        const { error: validationError, value: validatedInputs } = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
            role: Joi.number().required()
        }).validate(request.body);

        if (validationError) {
            throw new BadRequestError(validationError.message);
        }

        const { username, password, role } = request.body

        const sessionService = new AuthService()
        const result = await sessionService.session({ username, password })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        if(result.userSession?.role != role){
            return response.status(403).json("Usuário não autorizado")
        }

        return response.status(200).json({
            token: result.token,
            id: result.userSession?.id,
            username: result.userSession?.username,
            role: result.userSession?.role,
        })
    }
}
