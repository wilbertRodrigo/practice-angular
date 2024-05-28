import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] = [];
  selectedUser?: User;

  onSelect(user: User) {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) {}

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
    this.users = this.users.filter((x) => x !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

  submitted = false;

  onSubmit(name: string, username: string) {
    this.userService.addUser({ name, username } as User).subscribe((user) => {
      this.users.push(user);
    });
  }
}
