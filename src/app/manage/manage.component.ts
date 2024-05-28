import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent {
  users: User[] = [];
  selectedUser?: User;

  onSelect(user: User) {
    this.selectedUser = user;
  }

  constructor(private userService: UserService, private location: Location) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
  searchInput: string = '';

  onSearchInputChange(searchValue: string) {
    this.searchInput = searchValue;
  }
  delete(user: User): void {
    this.users = this.users.filter((h) => h !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
  edit(user: User): void {
    this.users = this.users.filter((h) => h !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.selectedUser) {
      this.userService
        .updateHero(this.selectedUser)
        .subscribe(() => this.goBack());
    }
  }
}
