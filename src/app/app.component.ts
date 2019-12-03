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
    this.userSelectors.users$.subscribe(users => {
      this.users = users;
    });
    this.userDispatchers.getusers();
  }

  public onAddUser(user: UserModel): void {
    this.userDispatchers.addUser(user);
  }
}
