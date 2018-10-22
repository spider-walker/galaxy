import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {AuthGuard} from './_guards';
import {HelpComponent} from 'src/app/help/help.component';
import {FormulationComponent} from 'src/app/formulation/formulation.component';
import {AddFormulationComponent} from 'src/app/add.formulation/add.formulation.component';
import {CreateItemComponent} from 'src/app/create.item/create.item.component';
import {RawMaterialListComponent} from 'src/app/raw.material.list/raw.material.list.component';
import {ListItemsComponent} from 'src/app/list.items/list.items.component';
import {FinishedGoodsListComponent} from 'src/app/finished.goods.list/finished.goods.list.component';
import {ContainersListComponent} from 'src/app/containers.list/containers.list.component';
import {PackingMaterialsListComponent} from 'src/app/packing.materials.list/packing.materials.list.component';
import {ScheduleProductionComponent} from 'src/app/schedule.production/schedule.production.component';
import {ScheduleListComponent} from 'src/app/schedule.list/schedule.list.component';
import {ActualProductionComponent} from 'src/app/actual.production/actual.production.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'help', component: HelpComponent},
    {path: "formulation", component: FormulationComponent},
    {path: "add-formulation", component: AddFormulationComponent},
    {path: "create-item", component: CreateItemComponent},
    {path: "raw-material-list", component: RawMaterialListComponent},
    {path: "list-items", component: RawMaterialListComponent},
    {path: "packing-materials-list", component: PackingMaterialsListComponent},
    {path: "finished-goods-list", component: FinishedGoodsListComponent},
    {path: "containers-list", component: ContainersListComponent},
    {path: "schedule-production", component: ScheduleProductionComponent},
    {path: "schedule-list", component: ScheduleListComponent},
    {path: "actual-production", component: ActualProductionComponent},
    

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);