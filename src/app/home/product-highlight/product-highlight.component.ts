import { Component, OnDestroy, OnInit } from '@angular/core';
import { SliderService } from './slider.service';
import { ProductHighlightsService, ProductHighlight } from 'src/app/api/product-highlights/product-highlights.service';

@Component({
  selector: 'app-product-highlight',
  templateUrl: './product-highlight.component.html',
  styleUrls: ['./product-highlight.component.scss']
})
export class ProductHighlightComponent implements OnInit{

  productHighlights: ProductHighlight[] = [];
  currentHighlight?: ProductHighlight;
  currentPicture: string = '';
  isLoaded: boolean = false;


  constructor(private sliderService: SliderService, private productHighlightService : ProductHighlightsService){}

  ngOnInit(): void {
    this.productHighlightService.getProductHighlights().subscribe((productHighlightArray)=>{
      this.productHighlights = productHighlightArray;
      this.sliderService.productStream$.subscribe((id)=>{
        this.currentHighlight = this.productHighlights[id-1];
        this.currentPicture = this.currentHighlight.productImg;
        this.isLoaded = true;
      })
    })
  }

}
