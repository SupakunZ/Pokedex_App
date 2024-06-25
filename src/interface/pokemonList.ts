export interface IPokemonListResponse {
    const: number
    next: string
    previous: null
    results: IPokemonListResponse[]
}

export interface IPokemonListResponse {
    name: string
    url: string

}