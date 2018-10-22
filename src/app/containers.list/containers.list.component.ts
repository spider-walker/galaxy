import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Item} from '../../app/_models/';
@Component({
    selector: 'app-containers.list',
    templateUrl: './containers.list.component.html',
    styleUrls: ['./containers.list.component.css']
})
export class ContainersListComponent implements OnInit {

    items: Item[];
    constructor(private _router: Router) {
        let products: Item[] = JSON.parse(localStorage.getItem('items')) || [];
        this.items = [];
        for (let i = 0; i < products.length; i++) {
            let it = products[i];
            if (it.item_group == "Containers") {
                this.items.push(it);
            }
        }
    }

    ngOnInit() {
    }
    add_item() {
        this._router.navigate(["../create-item"]);
    }


}
