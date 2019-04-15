import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor( private http: HttpClient ) { }

    registerUser(form, file) {
        const formData: FormData = new FormData();
        formData.append('layerUpload', file);
        formData.append('layerName', form.nombreCapa);
        formData.append('layerType', form.tipoCapa);
        formData.append('layerColor', form.colorCapa);
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        return this.http.post('http://localhost:5000/users/register', formData, { headers: headers } );
    }

    loginUser(userdata) {
        const formData: FormData = new FormData();
        formData.append('user', userdata.user);
        formData.append('password', userdata.pass);
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        return this.http.post('http://localhost:5000/api/users/login', formData, { headers: headers } );
    }

}
