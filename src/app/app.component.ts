import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Phone } from './model/phone';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {

	phone: Phone = new Phone("", 0, "Huawei");

	//phones: Phone[] = [];
	companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

	addPhone(title: NgModel, price: NgModel, company: NgModel) {
		console.log(title);
		console.log(price);
		console.log(company);

		// this.phones.push(
		// 	new Phone(
		// 		this.phone.title, 
		// 		this.phone.price, 
		// 		this.phone.company));
	}

	onTitleChange() {
		if (this.phone.title == "no") {
			this.phone.title = "undefined";
		}
	}

}