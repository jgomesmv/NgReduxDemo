import { Component, OnDestroy, OnInit } from "@angular/core";

import { UserModel } from "./models/user/user.model";
import { UserDispatchers, UserSelectors } from "./root-store/users-store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  public users: UserModel[] = [];

  constructor(
    // private usersDataSource: UsersDataSource
    private userDispatchers: UserDispatchers,
    private userSelectors: UserSelectors
  ) {}

  ngOnInit() {
    // this.usersDataSource.connect().subscribe(
    //   (users) => {
    //     this.users = users;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.userSelectors.users$.subscribe(users => {
      this.users = users;
    });
    this.userDispatchers.getusers();
  }

  ngOnDestroy() {
    // this.usersDataSource.disconnect();
  }

  public onAddUser(user: UserModel): void {
    // this.usersDataSource.addUser(user);
  }
}
