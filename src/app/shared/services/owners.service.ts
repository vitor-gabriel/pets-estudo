import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owners } from '../interfaces/owners.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Owners> {
    return this.httpClient.get<Owners>(environment.base_url+'/api/v1/owners')
  }

}
