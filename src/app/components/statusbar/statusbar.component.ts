import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
    selector: 'app-statusbar',
    templateUrl: './statusbar.component.html',
    styleUrls: ['./statusbar.component.styl']
})
export class StatusbarComponent {

    constructor(public socketServer: WebsocketService) {}
}
