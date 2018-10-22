import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService, ItemService} from '../_services';
import {Item, Stocks} from '../../app/_models/';
import {Stock} from 'src/app/_models/stock';
@Component({
    selector: 'app-create.item',
    templateUrl: './create.item.component.html',
    styleUrls: ['./create.item.component.css']
})
export class CreateItemComponent implements OnInit {
    createItem: FormGroup;
    loading = false;
    submitted = false;
    item_types: Array<String> = ["Solvent", "Pigments ", "Resins", "Additives", "Defoamers"];
    stockItems: Stock[];
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService) {
        this.stockItems=Stocks;
        }

    ngOnInit() {
        this.createItem = this.formBuilder.group({
            code: ['', Validators.required],
            name: ['', Validators.required],
            sg: ['', Validators.required],
            item_type: ['', Validators.required],
            item_group: ['', Validators.required],
            uom: ['', Validators.required],
        });
    }
    item_list() {
        this.router.navigate(["list-items"]);
    }
    get f() {return this.createItem.controls;}
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.createItem.invalid) {
            return;
        }

        let items: Item[] = JSON.parse(localStorage.getItem('items')) || [];
        let new_item = new Item;
        let is_new = true;
        for (let i = 0; i < items.length; i++) {
            let it = items[0];
            if (it.code == this.createItem.controls["code"].value) {
                new_item = it;
                is_new = false;
                items = items.filter(obj => obj !== it);
                this.alertService.error("This product already exist");
            }
        }
        if (is_new) {
            new_item.AutoIdx = items.length + 1
        }

        new_item.code = this.createItem.controls["code"].value;
        new_item.name = this.createItem.controls["name"].value;
        new_item.sg = this.createItem.controls["sg"].value;
        new_item.item_type = this.createItem.controls["item_type"].value;
        new_item.item_group = this.createItem.controls["item_group"].value;
        new_item.uom = this.createItem.controls["uom"].value;

        items.push(new_item);
        localStorage.setItem('items', JSON.stringify(items));
        this.loading = true;
        switch (new_item.item_group) {
            case "Raw Material":
                this.router.navigate(["raw-material-list"]);
                break;
            case "Packing Material":
                this.router.navigate(["packaging-materials-list"]);
                break;
            case "Finished Goods":
                this.router.navigate(["finished-goods-list"]);
                break;
            case "Containers":
                this.router.navigate(["containers-list"]);
                break;
        }


    }

}
