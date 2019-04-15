import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
    providedIn: 'root'
  })
export class ChatService {

    constructor(public webSocketService: WebsocketService) {
    }

    sendMessage(payload: any) {
        this.webSocketService.emit('mensaje', payload);
    }

}
