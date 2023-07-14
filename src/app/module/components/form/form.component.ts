import { Component } from '@angular/core';
import { Money } from '../../models/money';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  constructor(private http: HttpClient) {}

  public valor!: Money;
  public real: number = 0;

  public key = '1fed022d';

 getData(): Observable<any> {
  let url = `https://api.hgbrasil.com/finance?format=json-cors&key=${this.key}`;
  return this.http.get(url).pipe(
    map(( response : any) => {
      return response.results.currencies;
    })
    );
 }

 public buscar() {
  this.getData().subscribe((valor) =>{
    this.valor = {
      dolar: valor[valor.USD.buy],
      eur: valor[valor.EUR.buy] ,
      peso: valor[valor.ARS.buy],
    }
  }
  )
  console.log(this.valor.dolar)
 }

}
