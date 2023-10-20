import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

//port to use
const port = 4000;

@Injectable({ 
	providedIn: 'root'
}) 
export class ApiService { 
	constructor(private http: HttpClient) { 
		//port of server
	} 
	getMessage() { 
		return this.http.get( 
			'http://localhost:'+port.toString()+'/api/message'); 
	} 
    
    sendtoServerConsole(message : string){
        console.log(message);
        return this.http.put('http://localhost:'+port.toString()+'/api/console', {'message' : message});
    }
}
