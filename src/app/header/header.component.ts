import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  templateUrl: "./header.component.html",
  selector: "app-header"
})
export class HeaderComponent {
  @Output("featureSelected")
  featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
