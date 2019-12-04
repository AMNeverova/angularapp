import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import { RequestService } from './request.service';

@Directive({
  selector: '[appShowViewFilter]'
})
export class ShowViewFilterDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private request: RequestService
  ) {}

  @Input() set appShowViewFilter(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
