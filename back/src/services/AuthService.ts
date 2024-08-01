import { User } from '../entities/User'
import { compare, hash } from "bcryptjs";
import { userRepository } from "../repositories/userRepository";
import { sign } from 'jsonwebtoken'

type CreateUserRequest = {
    username: string
    password: string
    role: number
}

type SessionUserRequest = {
    username: string
    password: string
}

export class AuthService {
    async createUser({
        username,
        password,
        role,
    }: CreateUserRequest): Promise<User | Error> {
        const passwordHash = await hash(password, 8)

        const user = userRepository.create({
            username,
            password: passwordHash,
            role,
        })

        await userRepository.save(user)

        return user
    }

    async session({ username, password }: SessionUserRequest) {
        const user = await userRepository.findOneBy({ username })

        if (!user) {
            return new Error('User does not exists!')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            return new Error('User or Password incorrect!')
        }

        const token = sign({}, process.env.SECRET_JWT!, {
            subject: user.id,
        })

        const userSession = await userRepository.findOneBy({username})

        return { token, userSession }
    }
}
