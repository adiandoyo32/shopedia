// export enum HttpMethod {
//     GET = "GET",
//     POST = "POST",
//     PUT = "PUT",
//     DELETE = "DELETE",
// }

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export enum HttpStatus {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500,
}

export interface HttpResponse<T> {
    status: HttpStatus;
    data: T;
}

export interface HttpRequest<T> {
    url: string;
    method: HttpMethod;
    data?: T;
}
