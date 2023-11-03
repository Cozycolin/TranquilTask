import { NgModule, isDevMode } from '@angular/core'; 
import { BrowserModule } 
	from '@angular/platform-browser'; 
import { AppRoutingModule } 
	from './app-routing.module'; 
import { AppComponent } from './Calendar app/app.component'; 
import { HttpClientModule } 
	from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker'; 
import { NavAppComponent } from './app/nav-app/nav-app.component';

@NgModule({ 
	declarations: [ 
		AppComponent,
		NavAppComponent
	], 
	imports: [ 
		BrowserModule, 
		AppRoutingModule, 
		HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}) 
	], 
	providers: [], 
	bootstrap: [AppComponent, NavAppComponent] 
})
export class AppModule { }
