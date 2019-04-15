import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chatService.service';

@Component({
    selector: 'app-chatwindow',
    templateUrl: './chatwindow.component.html',
    styleUrls: ['./chatwindow.component.styl']
})
export class ChatWindowComponent implements OnInit {

    private messageHistory: any[];

    constructor(public chatService: ChatService) {
        this.messageHistory = [
            {
                self: false,
                message: 'Hola'
            },
            {
                self: false,
                message: 'como estas? :)'
            },
            {
                self: true,
                message: 'muy bien y tu?'
            },
        ];
    }

    ngOnInit(): void { }

    public getMessages() {
        return this.messageHistory;
    }

    public sendMessage() {
        // @ts-ignore
        const message: string = document.getElementById('message-box').value;
        this.chatService.sendMessage(message);
    }
}
