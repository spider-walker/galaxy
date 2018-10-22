import {Component, OnInit} from '@angular/core';
import {Item} from 'src/app/_models';
import {Router} from '@angular/router';
@Component({
    selector: 'app-raw.material.list',
    templateUrl: './raw.material.list.component.html',
    styleUrls: ['./raw.material.list.component.css']
})
export class RawMaterialListComponent implements OnInit {

    items: Item[];
    constructor(private _router: Router) {
        let products: Item[] = JSON.parse(localStorage.getItem('items')) || [];
        this.items = [];
        for (let i = 0; i < products.length; i++) {
            let it = products[i];
            if (it.item_group == "Raw Material") {
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
