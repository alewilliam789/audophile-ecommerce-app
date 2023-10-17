import { Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import { SliderService } from '../slider.service';

@Directive({
  selector: '[appSliderHighlight]'
})
export class SliderHighlightDirective implements OnInit{

  private clickColor = 'var(--theme-color3)';
  private baseColor = 'var(--theme-color4)';

  @HostListener('click',['$event']) onClick(dotEvent: Event){

    const dotId = (dotEvent.target as HTMLSpanElement).getAttribute('data-id');
    if(dotId != null){
      this.sliderService.productStream$.subscribe((id)=>{
      this.isActive(parseInt(dotId), id);
      })
    }
  }

  constructor(private selector: ElementRef, private sliderService : SliderService) {}

  isActive(dotId: number, subjectId: number){
    if(dotId == subjectId){
      this.selector.nativeElement.style.backgroundColor = this.clickColor;
    }
    else{
      this.selector.nativeElement.style.backgroundColor = this.baseColor;
    }
  }

  ngOnInit(): void {

    const subjectId = this.selector.nativeElement.getAttribute('data-id');

    this.sliderService.productStream$.subscribe((id)=>{
      this.isActive(id, subjectId);
    })

  }

}
