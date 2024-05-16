import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {ChargerModel} from "../models/charging-system.model";

@Directive({
  selector: '[appChargerState]'
})
export class ChargerStateDirective implements OnInit {
  @Input('appChargerState') charger!: ChargerModel

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    if (this.charger.error) {
      this.renderer.addClass(this.el.nativeElement, "charger-error")
      return;
    }
    if (this.charger.charging) {
      this.renderer.addClass(this.el.nativeElement, "charger-charging")
    } else if (!this.charger.charging && this.charger.currentCart !== "Brak wózka") {
      this.renderer.addClass(this.el.nativeElement, "charger-charging-finished")
    }
  }


}
