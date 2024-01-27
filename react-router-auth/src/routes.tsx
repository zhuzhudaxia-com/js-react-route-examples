import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path:'/',
        lazy:()=>import('./pages/App')
    }
];

export default routes;
