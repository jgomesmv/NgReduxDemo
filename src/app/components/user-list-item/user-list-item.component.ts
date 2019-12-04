import { Component, Input, OnInit } from "@angular/core";

import { UserModel } from "src/app/models/user/user.model";
import { ViewModeEnum } from "src/app/enums/view-mode.enum";
import { UserDispatchers } from "src/app/root-store/users-store";

@Component({
  selector: "user-list-item",
  templateUrl: "./user-list-item.component.html",
  styleUrls: ["./user-list-item.component.scss"],
  host: { class: "c-userListItem" }
})
export class UserListItemComponent implements OnInit {
  @Input() public user: UserModel;
  @Input() mode: ViewModeEnum = ViewModeEnum.view;
  public viewModes = ViewModeEnum;

  constructor(private userDispatchers: UserDispatchers) {}

  ngOnInit() {}

  public onEdit(): void {
    this.mode = this.viewModes.editMode;
  }

  public onDelete(): void {
    this.userDispatchers.deleteUser(this.user.name);
  }

  public onUserUpdated(user: UserModel): void {
    user.previousName = this.user.name;
    this.userDispatchers.updateUser(user);
    this.mode = this.viewModes.view;
  }
}
