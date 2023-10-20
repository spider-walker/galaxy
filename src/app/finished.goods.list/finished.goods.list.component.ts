import { Router } from '@angular/router';
import { Item } from '../_models';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-finished.goods.list',
    templateUrl: './finished.goods.list.component.html',
    styleUrls: ['./finished.goods.list.component.css']
})
export class FinishedGoodsListComponent implements OnInit {

    items: Item[];

    constructor(private _router: Router) {
        let products: Item[] = JSON.parse(localStorage.getItem('items')) || [];
        this.items = [];

        for (let it of products) {
            if (it.item_group == "Finished Goods") {
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
