import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { LocalStorageService } from './local.storage.service';
import { AppConstant } from '../_const/app.constant';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private localStorageService : LocalStorageService) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
    getCurentUserId(){
        let user = this.localStorageService.get(AppConstant.BILL_ORDER);
        return user.id;
    }
}