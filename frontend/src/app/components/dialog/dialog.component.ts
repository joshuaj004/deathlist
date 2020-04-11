import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatGridList, MatGridTile } from "@angular/material/grid-list";

interface DialogData {
  category: string;
  location: string;
  price: number;
  resources: any;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public itemGroup = new FormGroup({
    category: new FormControl(""),
    location: new FormControl(""),
    price: new FormControl(""),
    resources: new FormControl(null)
  });
  public valid = false;
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  addItem() {
    if (this.itemGroup.status === "VALID") {
      const payload: DialogData = {
        category: this.itemGroup.value.category,
        location: this.itemGroup.value.location,
        price: this.itemGroup.value.price,
        resources: this.itemGroup.value.resources
      };

      this.dialogRef.close(payload);
    }
  }

  ngOnInit() {
  }
}