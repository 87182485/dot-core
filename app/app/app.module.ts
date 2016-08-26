import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';

import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';

import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

// import { TestDataService } from './services/testDataService';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        MdButtonModule,
        MdCardModule
    ],
    declarations: [
        AppComponent,
        // AboutComponent,
        HomeComponent
    ],
    providers: [
        // TestDataService,
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule {}