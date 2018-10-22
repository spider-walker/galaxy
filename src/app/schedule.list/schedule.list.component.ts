import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'app-schedule.list',
    templateUrl: './schedule.list.component.html',
    styleUrls: ['./schedule.list.component.css']
})
export class ScheduleListComponent implements OnInit {

    constructor(private _router:Router) {}

    ngOnInit() {
    }
    add_schedule() {
        this._router.navigate(["../schedule-production"]);

    }

}
