import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Item} from '../../app/_models/';
@Component({
    selector: 'app-list.items',
    templateUrl: './list.items.component.html',
    styleUrls: ['./list.items.component.css']
})
export class ListItemsComponent implements OnInit {
    items: Item[];
    constructor(private _router: Router) {
        this.items = JSON.parse(localStorage.getItem('items')) || [];
    }

    ngOnInit() {
    }
    add_item() {
        this._router.navigate(["../create-item"]);
    }


}
