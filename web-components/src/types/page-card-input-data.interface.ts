import { Statuse } from './statuse.interface';
import { Section } from './section.interface';
import { Header } from './header.interface';

export interface PageCardInputData {
    header: Header;
    statuses: Statuse[];
    sections: Section[];
}