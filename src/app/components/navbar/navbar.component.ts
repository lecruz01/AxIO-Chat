import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

    public noUsers: number;

    constructor() {
        this.noUsers = 3;
    }

    ngOnInit(): void { }
}
