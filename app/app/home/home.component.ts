import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CORE_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';

@Component({
    selector: 'homecomponent',
    templateUrl: '../app/app/home/home.component.html',
    directives: [CORE_DIRECTIVES]
})

export class HomeComponent implements OnInit{
    public message: string;
    public values: any[];

    constructor(){
        this.message = "This is From Home Component";
    }

    ngOnInit(){

    }
}