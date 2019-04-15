import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/userService.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

    public user: string;
    public password: string;

    constructor(public userService: UsersService) { }

    ngOnInit(): void { }

    login() {
        console.log(this.user + ' inicio login con credenciales: ' + this.password);
        this.userService.loginUser({
            user: this.user,
            pass: this.password
        }).subscribe(
            data => {
                console.log(data);
            },
            error => console.log(error)
        );
    }
}
