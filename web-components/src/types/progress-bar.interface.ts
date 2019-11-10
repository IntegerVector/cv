export interface ProgressBar {
    minLevel: number;
    maxLevel: number;
    levels: string[];
    level: number;
    displayLevel: boolean;
    displaySeparators: boolean;
    displayCurrentLevelPointer: boolean;
    color: string;
}