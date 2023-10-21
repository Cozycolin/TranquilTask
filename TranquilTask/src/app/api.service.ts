import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 


//URL to use 
const URL = "http://localhost:4000"

@Injectable({ 
	providedIn: 'root'
}) 
export class ApiService { 
	constructor(private http: HttpClient) {} 
	getMessage() { 
		return this.http.get(URL+'/api/message'); 
	} 
    
    sendMessagetoServerConsole(message : string){
        console.log(message);
        return this.http.put(URL+'/api/console', {'message' : message});
    }
}
