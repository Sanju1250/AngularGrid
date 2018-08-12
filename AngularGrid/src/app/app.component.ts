import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                <header></header>
                <router-outlet></router-outlet>
               </div>`,
})
export class AppComponent { name = 'Angular'; }
