export type loggedUser = {
    id: string;
    name: string;
    email: string;
};

export type LoggedUserGetParams = {
    headers: {
        Authorization: string;
    }
}

export interface IloggedUser{
    get(params: LoggedUserGetParams): Promise<loggedUser>;
}
