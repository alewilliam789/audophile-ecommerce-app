import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { SliderService } from '../slider.service';
import { ProductHighlight } from 'src/app/api/product-highlights/product-highlights.service';


export interface Product {
  id: number,
  headline: string,
  productImage: string
}

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {

  @Input() highlightArray?: ProductHighlight[];

  constructor(private sliderService: SliderService){}

  selectDot(dotEvent : Event){
    const dotId = (dotEvent.target as HTMLSpanElement).getAttribute('data-id');
    if (dotId != null)
      this.sliderService.updateProduct(parseInt(dotId));
  }

  

}
