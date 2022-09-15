import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RadditAPI {
    constructor(private http: HttpClient){}
    
    getRadditApi(limit: number, item: any){
        let url;
        if(item !== ''){
            url = `https://www.reddit.com/r/aww/${item}/.json?limit=${limit}` 
        }else{
            url= 'https://www.reddit.com/r/aww/.json?limit='+ limit
        }
        return this.http.get(url);
    }
}