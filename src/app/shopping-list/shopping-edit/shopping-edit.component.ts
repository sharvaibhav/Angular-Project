import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: true })
  name: ElementRef;
  @ViewChild("nameAmountInput", { static: true })
  amount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAdd($event) {
    $event.preventDefault();
    this.shoppingListService.addShoppingListItem(
      new Ingredient(
        this.name.nativeElement.value,
        this.amount.nativeElement.value
      )
    );
  }
  onDelete($event) {
    $event.preventDefault();
    this.shoppingListService.deleteShoppingListIngredient();
  }
  onClear($event) {
    $event.preventDefault();
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }
}
