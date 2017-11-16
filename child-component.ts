import { Component } from '@angular/core';

@Component({
    selector: 'childComp',
    template: `<h1> {{name}} </h1> 
            <p> This is {{masterChild}}</p>`
})

export class ChildComponent{
    name='John';
    masterChild='Jane';
}