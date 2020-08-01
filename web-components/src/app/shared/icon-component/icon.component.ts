import { Component, Input } from '@angular/core';
import { IconSize } from './types/icon-size.enum';

@Component({
	selector: 'icon-component',
    styleUrls: ['./icon.component.css'],
    template: ` <img
                    *ngIf="iconSrc"
                    [src]="iconSrc"
                    [ngClass]="['icon-box', iconSize]"
                />`
})
export class IconComponent {
    @Input() iconSrc: string = '';
    @Input() iconSize: IconSize = IconSize.small;

    constructor() {}
}
