import {Directive, inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthorizationService} from "../configuration/authorization/authorization.service";

@Directive({
  selector: '[appAdminAccess]'
})
export class AdminAccessDirective implements OnInit {
  private authorizationService = inject(AuthorizationService)
  private templateRef = inject(TemplateRef<any>)
  private viewContainer = inject(ViewContainerRef)

  constructor() {
  }

  ngOnInit(): void {
    const isAdmin = this.authorizationService.isAdmin()
    this.viewContainer.createEmbeddedView(this.templateRef)
    if (!isAdmin) {
      this.viewContainer.clear()
    }
  }
}
