import React from "react"
import { PATHS } from "./paths"

export interface IRoutes {
    path: string,
    component: React.ElementType | null;
    protected: boolean
}

export const ROUTES: Array<IRoutes> = [
    {
        path: PATHS.FORUM,
        component: null,
        protected: false,
    },
    {
        path: PATHS.SIGN_IN,
        component: null,
        protected: false,
    },
    {
        path: PATHS.SIGN_UP,
        component: null,
        protected: false,
    },
    {
        path: PATHS.LEADERBOARD,
        component: null,
        protected: false,
    },
    {
        path: PATHS.PROFILE,
        component: null,
        protected: true,
    },
    {
        path: PATHS.GAME,
        component: null,
        protected: false,
    },
    {
        path: PATHS.MAIN,
        component: null,
        protected: false,
    }
]
