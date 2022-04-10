import {AccountModel} from "@/domain/models/accountModels";

export type AuthenticationParams = {
    email: string;
    password: string;
};

export interface Authentication {
    auth (params: AuthenticationParams): Promise<AccountModel>;
}
