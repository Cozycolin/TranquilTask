import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 


//URL to use 
const URL = "http://localhost:4000/mongoDb"

@Injectable({ 
	providedIn: 'root'
}) 
export class MongoService { 
	constructor(private http: HttpClient) {} 
	runCommand(command: Object){
		return this.http.put(URL+'/runCommand',command);
	}
}
