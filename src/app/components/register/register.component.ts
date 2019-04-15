import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.styl']
})
export class RegistroComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    public register() {
        console.log('Iniciar registro');
    }
}
