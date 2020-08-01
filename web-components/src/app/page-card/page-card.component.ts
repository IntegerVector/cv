import { Component, OnInit, Input } from '@angular/core';
import { PageCardInputData } from 'src/types/page-card-input-data.interface';
import { DataLoaderService } from '../data-loader.service';
import { ProgressBar } from 'src/types/progress-bar.interface';

@Component({
	selector: 'app-page-card',
	templateUrl: './page-card.component.html',
	styleUrls: [ './page-card.component.css' ]
})
export class PageCardComponent implements OnInit {
	@Input() dataSrc: string = '';

	public vm: PageCardInputData = null;

	constructor(private dataLoaderService: DataLoaderService) {}

	ngOnInit() {
		this.dataLoaderService.getInputData(this.dataSrc).subscribe((data) => {
			this.vm = data;
		});
	}

	public getLevel(minLevel: number, maxLevel: number, level: number): string {
		const diff = maxLevel - minLevel;
		const updatedLevel = level * 100;

		return `${updatedLevel / diff}%`;
	}

	public getProgressBarText(progressBar: ProgressBar): string {
		if (progressBar.levels) {
			if (progressBar.levels.length > 0) {
				return progressBar.levels[progressBar.level - 1];
			}
		}

		return progressBar.displayLevel ? `${progressBar.level}` : '';
	}
}
