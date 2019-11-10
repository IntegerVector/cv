import { SectionContent } from './section-content.interface';

export interface Section {
    sectionIcon: string;
    sectionTitle: string;
    content: SectionContent[];
}