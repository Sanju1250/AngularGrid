import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../service/pagination.service';
import { GridService } from '../../service/grid.service';
import { IAssest } from '../../interface/assest';
import { GridComponent } from '../grid/grid.component';

@Component({
    selector: 'grid-pagination',
    templateUrl: './pagination.component.html',
    providers: [GridService]
})

export class PaginationComponent implements OnInit {
    assests: IAssest[];
    pager: any = {};
    pagedItems: any[];
    constructor(private _assestService: GridService) { }
    ngOnInit() {
        this.assests = this._assestService.getAssest();
    }

    setPage(page: number) {

        this.pager = this._assestService.getPagination(this.assests.length, page);

        // get current page of items
        this.pagedItems = this.assests.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
