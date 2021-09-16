import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  c : string;
  f : string;
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  convertToFahrenheit($event){
  	let value = $event.target.value;

  	if($event.code == "KeyE"){
  		this.c = value.replace("e",""); 
  	}

  	if(value.length == 0 )
  		this.f = null;
  	else 
  		this.f = ((Number(this.c)  * 9) / 5  + 32).toFixed(1);
  }


  convertToCelsius($event){
  	 let value = $event.target.value;

  	if($event.code == "KeyE"){
  		this.f = value.replace("e",""); 
  	}

  	if(value.length == 0 )
  		this.c = null;
  	else 
  		this.c = (((Number(this.f) -  32) * 5 )/9).toFixed(1);
  }


}