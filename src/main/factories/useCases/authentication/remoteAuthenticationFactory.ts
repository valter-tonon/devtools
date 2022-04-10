import {Authentication} from "@/domain/useCases/authentication/authentication";
import {makeApiUrl} from "@/main/factories/http/httpUrlFactory";
import {RemoteAuthentication} from "@/data/useCases/RemoteAuthentication/RemoteAuthentication";
import {makeAxiosHttpClient} from "@/main/factories/http/axiosHttpClient";


export const makeRemoteAuthentication = (): Authentication => {
    const url = makeApiUrl('/oauth/token')
    return new RemoteAuthentication(url, makeAxiosHttpClient());
};
