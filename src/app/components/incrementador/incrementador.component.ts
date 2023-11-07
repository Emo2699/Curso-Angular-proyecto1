import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{  
  // @Input('valor') progreso: number = 50;
  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  
  @Output() resultado: EventEmitter<number> = new EventEmitter();
  
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  getProgreso(){
    return `${this.progreso}%`
  }

  cambiarValor(valor: number){
    if(this.progreso >= 100 && valor >= 0){
      return this.resultado.emit(this.progreso = 100);
    }

    if(this.progreso <= 0 && valor < 0){
      return this.resultado.emit(this.progreso = 0);
    }

    
    return this.resultado.emit(this.progreso+= valor);
  }

  onChange(valor: number){
    if(valor >= 100){
      this.progreso = 100;
    }else if (valor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }
    this.resultado.emit(this.progreso);
  }
}
