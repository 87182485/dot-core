import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: '../app/app/app.component.html',
    directives:[ROUTER_DIRECTIVES]
})

export class AppComponent{
    constructor(private router: Router){

    }
}