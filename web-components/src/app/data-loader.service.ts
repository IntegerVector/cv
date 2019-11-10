import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageCardInputData } from 'src/types/page-card-input-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(private httpClient: HttpClient) { }

  public getInputData(url: string): Observable<PageCardInputData> {
    return this.httpClient.get<PageCardInputData>(url);
  }
}
