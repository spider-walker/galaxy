import {Component, OnInit} from '@angular/core';
import {Formulation} from 'src/app/_models/formulation';
import {Router} from '@angular/router';
@Component({
    selector: 'app-formulation',
    templateUrl: './formulation.component.html',
    styleUrls: ['./formulation.component.css']
})
export class FormulationComponent implements OnInit {
    pageTitle: string = "Formulation Maintainance"

    constructor(private _router:Router) {
        
    }

    ngOnInit() {
    }
    add_formulation(){
      this._router.navigate(["../add-formulation"]);  
    }


}
