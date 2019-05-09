import { RouterModule, Routes} from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuarios/usuario.component';

const APP_ROUTES: Routes = [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'usuarios' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);