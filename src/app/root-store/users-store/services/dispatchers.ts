import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserModel } from "../../../models/user/user.model";
import * as UserActions from "../actions";
import { adapter, State } from "../state";

@Injectable()
export class UserDispatchers {
  constructor(private store: Store<State>) {}

  deleteUser(name: string) {
    this.store.dispatch(UserActions.deleteUser({ name }));
  }

  addUser(user: UserModel) {
    this.store.dispatch(UserActions.addUser({ user }));
  }

  // updateUser(user: UserModel) {
  //   this.store.dispatch(UserActions.updateUser({ user }));
  // }

  getusers() {
    this.store.dispatch(UserActions.getUsers());
  }
}
