import { ProgressBar } from './progress-bar.interface';

export interface SectionContent {
    contentLabel: string;
    contentDataValidity: string;
    progressBar: ProgressBar;
    contentText: string;
}