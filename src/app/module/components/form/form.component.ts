import { Component } from '@angular/core';
import { Money } from '../../models/money';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  public real: number = 0;
  public valor: Money = {
    dolar: 0,
    eur: 0,
    peso: 0
  };

  constructor(private http: HttpClient) {}

  getMoney(): Observable<any> {
    let url = `https://api.hgbrasil.com/finance?format=json-cors&key=1fed022d`;
    return this.http.get(url).pipe(
      map(( response : any) => {
        return response.results.currencies;
      })
      );
   }
  
   public buscar() {
    this.getMoney().subscribe((moeda) =>{
        const dolar = (this.real/moeda.USD.buy.toFixed(2));
        const eur = (this.real/moeda.EUR.buy.toFixed(2));
        const peso = (this.real/moeda.ARS.buy.toFixed(2));
  
      this.valor = {
        dolar: Number(dolar),
        eur: Number(eur),
        peso: Number(peso)
      }
      });
      console.log(this.real);
      console.log(this.real);
    }
   
  
}
