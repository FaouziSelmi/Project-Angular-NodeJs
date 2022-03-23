import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

const materials=[
  MatButtonModule,
  MatDividerModule,
  MatIconModule
];
@NgModule({
  
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
