import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ProductHighlight {
  id: number,
  headline: string,
  description: string,
  subtitle: string,
  productImg: string
}


@Injectable({
  providedIn: 'root'
})
export class ProductHighlightsService {

  url: string  ="/assets/product-highlights.json";

  constructor(private http: HttpClient) {}

  getProductHighlights() {
    return this.http.get<ProductHighlight[]>(this.url);
  }
}
