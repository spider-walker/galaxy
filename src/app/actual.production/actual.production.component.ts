import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService, ItemService} from '../_services';
import {Item} from '../../app/_models/';
@Component({
    selector: 'app-actual.production',
    templateUrl: './actual.production.component.html',
    styleUrls: ['./actual.production.component.css']
})
export class ActualProductionComponent implements OnInit {
    createItem: FormGroup;
    loading = false;
    submitted = false;
    finishedGoodsItemsColors: Array<String> = ["Red", "Green ", "Beige", "Blue", "Yellow"];
    finishedGoodsItems: Item[];
    containersItems: Item[];
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService) {
        let products: Item[] = JSON.parse(localStorage.getItem('items')) || [];
        this.finishedGoodsItems = [];
        this.containersItems = [];
        for (let i = 0; i < products.length; i++) {
            let it = products[i];
            if (it.item_group == "Finished Goods") {
                this.finishedGoodsItems.push(it);
            }
            if (it.item_group == "Containers") {
                this.containersItems.push(it);
            }
        }
    }

    ngOnInit() {
        this.createItem = this.formBuilder.group({
            batch_number: ['', Validators.required],
            scheduled_date: ['', Validators.required],
            code: ['', Validators.required],
            container_code: ['', Validators.required],
            name: ['', Validators.required],
            color: ['', Validators.required],
            status: ['1', Validators.required],
            creation_date: ['', Validators.required],
            theorethical_sg: ['0', Validators.required],
            actual_sg: ['0', Validators.required],
            actual_cost: ['0', Validators.required],
            batch_cost: ['0', Validators.required],
            standard_production_loss: ['0', Validators.required],
            actual_production_loss: ['0', Validators.required],
            production_mass: ['0', Validators.required],
            production_volume: ['0', Validators.required],
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
