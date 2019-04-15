import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

// Modulo HTTP para conexiones REST
import { HttpClientModule} from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';
import { ChatWindowComponent } from './components/chatwindow/chatwindow.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatusbarComponent,
    LoginComponent,
    RegistroComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
