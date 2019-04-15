import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService  {

  private socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  private checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conexion a servidor establecida');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Conexion a servidor terminada');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback ?: Function ) {
    this.socket.emit(event, payload, callback);
  }

  public getStatus() {
    return this.socketStatus;
  }
}
