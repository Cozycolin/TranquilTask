import { Component, OnInit } from '@angular/core'; 
import { ApiService } from './api.service'; 

@Component({ 
	selector: 'app', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
	title = 'TranquilTask'; 

  clicked(message:string) {
    console.log("hello");
  }


	message: any; 
	constructor(private apiService: ApiService) { }; 
	ngOnInit() { 
		this.apiService.getMessage().subscribe(data => { 
			this.message = data; 
		}); 
	} 
}
