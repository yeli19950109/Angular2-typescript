/**
 * Created by admin on 2016/11/17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
    public logs:string[]=[];

    constructor() {}
    public log(message:any){
        this.logs.push(message);
        console.log(message);
    }
}