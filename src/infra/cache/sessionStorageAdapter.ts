import {setSessionStorage} from "@/data/cache/sessionStorage";

export class SessionStorageAdapter implements setSessionStorage {
    async set (key: string, value: string): Promise<void> {
        sessionStorage.setItem(key, value);
    }
}
