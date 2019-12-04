import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserModel } from "../../../models/user/user.model";
import * as UserActions from "../actions";
import { adapter, State } from "../state";
import { Update } from "@ngrx/entity";

@Injectable()
export class UserDispatchers {
  constructor(private store: Store<State>) {}

  deleteUser(name: string) {
    this.store.dispatch(UserActions.deleteUser({ name }));
  }

  clearUsers() {
    this.store.dispatch(UserActions.clearUsers());
  }

  addUser(user: UserModel) {
    this.store.dispatch(UserActions.addUser({ user }));
  }

  updateUser(user: UserModel) {
    const editUser: Update<UserModel> = {
      id: user.previousName,
      changes: { name: user.name }
    };

    this.store.dispatch(UserActions.updateUser({ user: editUser }));
  }

  getusers() {
    this.store.dispatch(UserActions.getUsers());
  }
}
