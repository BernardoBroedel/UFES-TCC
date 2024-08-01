export interface UserInfo {
    id: string | undefined
    nome: string | undefined
    imagem: string | null
}

export interface UpdateUserInfo {
    id: string
    nome: string
    file: any
}
