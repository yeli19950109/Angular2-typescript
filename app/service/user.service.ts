/**
 * Created by admin on 2016/11/17.
 */
import {Injectable} from '@angular/core';

import {User}       from '../model/user';

@Injectable()
export class UserService {
    public user:User={
        id: 1,
        name: 'admin',
        isAuthorized:true
    };

    constructor(){
    }
    public check():boolean{
        return this.user.isAuthorized;
    }
    public getuser():User{
        return this.user;
    }
}