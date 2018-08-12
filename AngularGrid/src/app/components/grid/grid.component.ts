import { Component, OnInit } from '@angular/core';
import { GridService } from '../../service/grid.service';
import { IAssest } from '../../interface/assest';

@Component({
    selector: 'grid-view',
    templateUrl: './grid.component.html',
    providers: [GridService]
})

export class GridComponent implements OnInit {

    assests: IAssest[];
    constructor(private _assestService: GridService) { }

    ngOnInit() {
        this.assests = this._assestService.getAssest();
    }

}