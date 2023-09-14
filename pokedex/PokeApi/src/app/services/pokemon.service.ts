import { Injectable } from '@angular/core';
import { enviorement } from '../enviorements/enviorement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = enviorement.baseUrl;

  constructor(private http : HttpClient) { }

  getPokemons(index:any) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
