import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-slider/product-slider.component';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private sliderSubject = new BehaviorSubject<number>(1);

  productStream$ = this.sliderSubject.asObservable();



  constructor() {}

  updateProduct(productId: number){
    return this.sliderSubject.next(productId);
  }
}
