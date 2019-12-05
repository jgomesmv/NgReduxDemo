import { Component, OnDestroy, OnInit } from "@angular/core";

import { UserModel } from "./models/user/user.model";
import { UserDispatchers, UserSelectors } from "./root-store/users-store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public users: UserModel[] = [];

  constructor(
    private userDispatchers: UserDispatchers,
    private userSelectors: UserSelectors
  ) {}

  ngOnInit() {
    // Subscribe selectors
    this.userSelectors.users$.subscribe(users => {
      this.users = users;
    });

    this.userSelectors.selectedUser$.subscribe(user => {
      console.log(`This was the selected user: ${user ? user.name : "None"}`);
    });

    this.userSelectors.usersTotal$.subscribe(total => {
      console.log(`Number of users on the store: ${total}`);
    });

    this.userSelectors.usersIds$.subscribe(ids => {
      console.log(`User names on the store: ${ids.join(", ")}`);
    });

    const userName = "userA";
    this.userSelectors.selectUserByName$(userName).subscribe(user => {
      console.log(`The user selected is: ${user ? user.name : "None"}`);
    });

    const currentPage = 0;
    const pageSize = 4;
    this.userSelectors
      .selectUsersByPage$(currentPage, pageSize)
      .subscribe(users => {
        console.log("This are the users by page:", users);
      });

    // Dispatch actions
    this.userDispatchers.getusers();
    this.userDispatchers.selectUser("userC");
    this.userDispatchers.deleteUsersByPredicate(user => user.name === "userA");
    this.userDispatchers.mapUsers(user => {
      user.name = user.name.indexOf("D") > -1 ? `${user.name}aftermap` : user.name;
      return user;
    });
  }

  public onAddUser(user: UserModel): void {
    this.userDispatchers.addUser(user);
  }
}
