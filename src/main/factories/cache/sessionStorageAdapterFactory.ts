import {SessionStorageAdapter} from "@/infra/cache/sessionStorageAdapter";

export const makeSessionStorageAdapter = (): SessionStorageAdapter => {
    return new SessionStorageAdapter();
};
