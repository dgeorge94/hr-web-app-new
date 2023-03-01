import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'search',
    templateUrl: './search.component.html'
})

export class SearchComponent{

    searchOnSubmit(form: NgForm) {
        console.log(form.value);

    }
}
