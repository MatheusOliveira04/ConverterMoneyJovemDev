import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ], 
  exports: [
    FormComponent
  ]
})
export class ModuleModule { }
