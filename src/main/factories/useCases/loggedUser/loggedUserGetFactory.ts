import {IloggedUser} from "@/domain/useCases/loggedUser/IloggedUser";
import {makeApiUrl} from "@/main/factories/http/httpUrlFactory";
import {LoggedUser} from "@/data/useCases/LoggedUser/LoggedUser";
import {makeAxiosHttpClient} from "@/main/factories/http/axiosHttpClient";

export const makeLoggedUserGet = (): IloggedUser => {
    const url = makeApiUrl("/api/user");
    return new LoggedUser(url, makeAxiosHttpClient());
}
