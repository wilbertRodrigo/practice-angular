import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent {
  ngOnInit(): void {}

  enteredSearchValue: string = '';
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChange.emit(this.enteredSearchValue);
  }
}
