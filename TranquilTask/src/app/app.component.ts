import { Component, OnInit } from '@angular/core'; 
import { ApiService } from '../server.api'; 
import { MongoService } from '../mongo.api';

@Component({ 
	selector: 'app', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
	title = 'TranquilTask'; 
	
	MongoDbOuttext = "MongoDB shown here";
  	async clicked(message: string) {
    	this.apiService.sendMessagetoServerConsole(message).subscribe(data => {
		  console.log(data);
	  	});
	}

	constructor(private apiService: ApiService, private mongoService: MongoService) { }; 
	ngOnInit() { 
		
		console.log('Started')
		this.apiService.testConnection().subscribe(data => {
			console.log(data);
			if(data.hasOwnProperty('message')){
				console.log("Connected to server");
			}
		});
		this.mongoService.runCommand({"find":"Profile_info"}).subscribe(data => {
			console.dir(data);
		});
	} 
}
