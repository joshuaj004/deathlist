import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from '@angular/material/slider';

const materials = [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSliderModule];
@NgModule({
    imports: materials,
    exports: materials
})
export class MaterialModule {}