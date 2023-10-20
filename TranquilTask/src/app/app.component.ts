import { Component, OnInit } from '@angular/core'; 
import { ApiService } from './api.service'; 

@Component({ 
	selector: 'app', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
	title = 'TranquilTask'; 
  
  clicked(message: string) {
    this.apiService.sendtoServerConsole(message).subscribe(data => {
      console.log(data);
    });
  }


	recievedMessage: any; 
	constructor(private apiService: ApiService) { }; 
	ngOnInit() { 
    console.log('Started')
		this.apiService.getMessage().subscribe(data => { 
			this.recievedMessage = data; 
		}); 
	} 
}
