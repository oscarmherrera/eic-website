import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ImageUploadModule } from '../shared/image-upload/image-upload.module';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { PrefooterAreasComponent } from './prefooter-areas/prefooter-areas.component';
import { FootersAreasComponent } from './footers-areas/footers-areas.component';
import { DescriptionAreasComponent } from './description-areas/description-areas.component';
import { InfoAreasComponent } from './info-areas/info-areas.component';
import { TablesAreasComponent } from './tables-areas/tables-areas.component';
import { CommentsAreasComponent } from './comments-areas/comments-areas.component';
import { CardsAreasComponent } from './cards-areas/cards-areas.component';
import {EicRequestInfoComponent} from "./eic-request-info/eic-request-info.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        TagInputModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        NgxGalleryModule,
        ImageUploadModule,
        ReactiveFormsModule
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        PrefooterAreasComponent,
        FootersAreasComponent,
        DescriptionAreasComponent,
        InfoAreasComponent,
        TablesAreasComponent,
        CommentsAreasComponent,
        CardsAreasComponent,
        EicRequestInfoComponent
    ],
    exports:[ ComponentsComponent,EicRequestInfoComponent ]
})
export class ComponentsModule { }
