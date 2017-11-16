import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent }  from './child-component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ChildComponent ],
    bootstrap:    [ ChildComponent ]
})
export class AppModule {

}