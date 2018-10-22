import {Component, OnInit} from '@angular/core';

import { User } from '../_models';
@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    currentUser: User; constructor() { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

}
