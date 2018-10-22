import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import {fakeBackendProvider} from './_helpers';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AlertService, AuthenticationService, UserService} from './_services';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {RegisterComponent} from './register';;
import {HelpComponent} from './help/help.component';
import {ProfileComponent} from './profile/profile.component';
import {ProductsComponent} from './products/products.component';
import {FormulationComponent} from './formulation/formulation.component';
import {ScheduleProductionComponent} from './schedule.production/schedule.production.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from 'src/app/footer/footer.component';;
import {MenuComponent} from './menu/menu.component';
import {AddFormulationComponent} from './add.formulation/add.formulation.component';
import {CreateItemComponent} from './create.item/create.item.component';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {RawMaterialListComponent} from './raw.material.list/raw.material.list.component';
import {FinishedGoodsListComponent} from './finished.goods.list/finished.goods.list.component'    ;
import {ContainersListComponent} from './containers.list/containers.list.component';;
import {ListItemsComponent } from './list.items/list.items.component'
import {PackingMaterialsListComponent} from './packing.materials.list/packing.materials.list.component';;
import {ScheduleListComponent } from './schedule.list/schedule.list.component';;
import {ActualProductionComponent } from './actual.production/actual.production.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        SelectDropDownModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HelpComponent,
        ProfileComponent,
        ProductsComponent,
        FormulationComponent,
        ActualProductionComponent,
        ScheduleProductionComponent,
        FooterComponent,
        HeaderComponent,
        AddFormulationComponent,
        CreateItemComponent,
        RawMaterialListComponent,
        ContainersListComponent,
        PackingMaterialsListComponent,
        FinishedGoodsListComponent,        
        ScheduleListComponent,
        ActualProductionComponent,
        ListItemsComponent,MenuComponent], 


    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}