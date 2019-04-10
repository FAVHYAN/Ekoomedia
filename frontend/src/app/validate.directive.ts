import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';


function verificationAge(c:AbstractControl){
	if(c.value < 18 ){
		return {esmenor: true};
	}
	if(c.value > 100 ){
		return {esmuchomayor: true};
	}
	return null;
}

@Directive({
	selector: '[rango-edad]',
	providers: [
				{provide: NG_VALIDATORS, multi: true, useValue:verificationAge}
				]
			})

export class RangoEdad{

}