import {Component, OnInit} from '@angular/core';
import {User} from '../_models';
@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
    currentUser: User;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
    }

}
