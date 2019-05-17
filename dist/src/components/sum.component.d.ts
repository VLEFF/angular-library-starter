import { OnInit } from '@angular/core';
import { SumService } from '../services/sum.service';
export declare class SumComponent implements OnInit {
    private sumService;
    sum: number;
    constructor(sumService: SumService);
    ngOnInit(): void;
}
