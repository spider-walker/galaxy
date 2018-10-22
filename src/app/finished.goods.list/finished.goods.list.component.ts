import { Component, OnInit } from '@angular/core';
import {Item} from 'src/app/_models';
import {Router} from '@angular/router';

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
        for (let i = 0; i < products.length; i++) {
            let it = products[i];
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
