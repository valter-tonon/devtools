import {SaveAccessToken} from "@/data/useCases/saveAccessToken/saveAccessToken";
import {makeSessionStorageAdapter} from "@/main/factories/cache/sessionStorageAdapterFactory";

export const saveAccessToken = (): SaveAccessToken => {
    return new SaveAccessToken(makeSessionStorageAdapter())

};
