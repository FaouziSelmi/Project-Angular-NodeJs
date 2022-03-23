import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const materials=[
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule

];
@NgModule({
  
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
