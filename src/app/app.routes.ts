import { Routes } from '@angular/router';
import { Layout } from '../shared/layout/layout';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Login, pathMatch: 'full' },
    { path: 'Login', component: Login },
    {
        path: '', component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                title: 'Dashboard'
            }
        ]
    },
];
