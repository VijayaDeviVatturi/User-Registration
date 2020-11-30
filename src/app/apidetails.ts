export interface SignIn {
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: number;
}
export interface SignInDataResponse {
    results: SignIn[]
}
