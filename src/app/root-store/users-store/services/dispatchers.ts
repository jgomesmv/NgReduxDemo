import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserModel } from "../../../models/user/user.model";
import * as UserActions from "../actions";
import { adapter, State } from "../state";
import { Update, Predicate, EntityMap } from "@ngrx/entity";

@Injectable()
export class UserDispatchers {
  constructor(private store: Store<State>) {}

  deleteUser(name: string) {
    this.store.dispatch(UserActions.deleteUser({ name }));
  }

  deleteUsersByPredicate(predicate: Predicate<UserModel>) {
    this.store.dispatch(UserActions.deleteUsersByPredicate({ predicate }));
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

  updateUsers(users: UserModel[]) {
    const editUsers: Update<UserModel>[] = users.map(user => {
      return {
        id: user.previousName,
        changes: { name: user.name }
      };
    });

    this.store.dispatch(UserActions.updateUsers({ users: editUsers }));
  }

  mapUsers(entityMap: EntityMap<UserModel>) {
    this.store.dispatch(UserActions.mapUsers({entityMap}));
  }

  getusers() {
    this.store.dispatch(UserActions.getUsers());
  }

  selectUser(name: string) {
    this.store.dispatch(UserActions.selectUser({ name }));
  }
}
