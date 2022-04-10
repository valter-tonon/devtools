import axios, {AxiosResponse} from "axios";
import {HttpPostClient, HttpPostParams} from "@/data/protocols/http/httpPostClient";
import {HttpResponse} from "@/data/protocols/http/HttpResponse";

export class AxiosHttpClient implements HttpPostClient<any, any>{
    async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
        let httpResponse : AxiosResponse
        try {
            httpResponse = await axios.post(params.url, params.body)
        } catch (error) {
            httpResponse = error.response
        }
        return {
            statusCode: httpResponse.status,
            body: httpResponse.data
        }
    }
}
