import faker from "@faker-js/faker";
import {HttpPostParams} from "@/data/protocols/http/httpPostClient";

export const mockPostRequest = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.arrayElement([{}, {}, {}])
})
