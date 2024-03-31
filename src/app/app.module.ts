import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './components/basic-component/tasks-list/tasks-list.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule}from '@angular/common/http';
import { AddTaskBtnComponent } from './components/ui-component/add-task-btn/add-task-btn.component';
import { DeleteTaskBtnComponent } from './components/ui-component/delete-task-btn/delete-task-btn.component';
import { TaskItemsComponent } from './components/basic-component/task-item/task-item.component';
import { NotfoundComponent } from './components/basic-component/notfound/notfound.component';
import { SearchPipe } from './pipes/search.pipe';
import { ThemeBtnComponent } from './components/ui-component/theme-btn/theme-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskItemsComponent,
    AddTaskBtnComponent,
    DeleteTaskBtnComponent,
    NotfoundComponent,
    SearchPipe,
    ThemeBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
