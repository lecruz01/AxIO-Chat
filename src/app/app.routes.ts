import { RouterModule, Routes } from '@angular/router';

/**
 * Importar componentes
 */
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/register/register.component';
import { ChatWindowComponent } from './components/chatwindow/chatwindow.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistroComponent },
    { path: 'chat', component: ChatWindowComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
