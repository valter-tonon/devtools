import {setSessionStorage} from "@/data/cache/sessionStorage";
import {ISaveAccessToken} from "@/domain/useCases/saveAccessToken/saveAccessToken";

export class SaveAccessToken implements ISaveAccessToken {
    constructor(private readonly setSession: setSessionStorage) {}

    public async save(accessToken): Promise<void> {
        await this.setSession.set('access_token', accessToken);
    }
}
