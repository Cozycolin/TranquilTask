import { Component, OnInit } from '@angular/core'; 
import { ApiService } from '../server.api'; 

@Component({ 
	selector: 'app', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
	title = 'TranquilTask'; 
  
  async clicked(message: string) {
    this.apiService.sendMessagetoServerConsole(message).subscribe(data => {
		  console.log(data);
	  });
  }


	recievedMessage: any; 
	constructor(private apiService: ApiService) { }; 
	ngOnInit() { 
    	console.log('Started')
		this.apiService.testConnection().subscribe(data => {
			console.log(data);
			if(data.hasOwnProperty('message')){
				console.log("Connected to server");
			}
		});
	} 
}
