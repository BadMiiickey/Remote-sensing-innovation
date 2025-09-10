import { Route } from "../type/http/Route.ts";

export const RouteState = {
    INDEX: <Route>{ route: '/api/index', method: 'get' },
    UPLOAD_IMAGE: <Route>{ route: '/api/upload-picture', method: 'post' },
}