import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, map, lastValueFrom, firstValueFrom } from 'rxjs';
import { DataModel } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = '/assets/data.json';
  constructor(private http: HttpClient) {}

  $getCards(): Observable<DataModel[]> {
    return this.http
      .get<DataModel[]>(this.url)
      .pipe(
        map(
          (data) =>
            data.sort(
              (x, y) => +new Date(y.createdDate) - +new Date(x.createdDate)
            ) as DataModel[]
        )
      );
  }

  async getCards(): Promise<DataModel[]> {
    const data = this.$getCards();
    return await firstValueFrom(data);
  }
}
