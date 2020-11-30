import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoteState } from './state/Note.state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import {NoteComponentComponent} from './note-component/note-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponentComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([NoteState], { // here login state
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }