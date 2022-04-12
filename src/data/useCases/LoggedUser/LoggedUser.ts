import {IloggedUser, loggedUser, LoggedUserGetParams} from "@/domain/useCases/loggedUser/IloggedUser";
import {HttpStatusCode} from "@/data/protocols/http/HttpResponse";
import {InvalidCredentialsError} from "@/domain/errors/invalidCredentialsError";
import {UnexpectedError} from "@/domain/errors/unexpectedError";
import {HttpGetClient} from "@/data/protocols/http/httpGetClient";

export class LoggedUser implements IloggedUser {
    constructor(
        private readonly url: string,
        private readonly httpGetClient: HttpGetClient<LoggedUserGetParams, loggedUser>
    ) {}

    async get(params): Promise<loggedUser> {
        const httpResponse = await this.httpGetClient.get({
            url: this.url, body: params
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError()
            default:
                throw new UnexpectedError()
        }
    }

}
