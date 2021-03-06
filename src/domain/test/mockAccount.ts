import faker from "@faker-js/faker";
import {AuthenticationParams} from "@/domain/useCases/authentication/authentication";
import {AccountModel} from "@/domain/models/accountModels";

export const mockAuthentication = (): AuthenticationParams => ({
    email: faker.internet.email(),
    password: faker.internet.password(),
})

export const mockAccountModel = (): AccountModel => ({
    accessToken: faker.datatype.uuid(),
})
