import {AfterViewInit, Directive, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[appInView]'
})
export class InViewDirective implements AfterViewInit {

  constructor(
    private vcRef: ViewContainerRef,
    private tplRef: TemplateRef<any>
  ) { }

  ngAfterViewInit(): void {
    const option = { threshold: 0.1 }
    const element = this.vcRef.element.nativeElement;
    const elToObserve = element.parentElement;


    const obs = new IntersectionObserver(entries => {
        entries.forEach(ent => {
          if(ent.isIntersecting){
            this.vcRef.clear();
            this.vcRef.createEmbeddedView(this.tplRef);
            obs.unobserve(elToObserve);
            return
          }

        })

    },  option)

    obs.observe(elToObserve);
  }




}
