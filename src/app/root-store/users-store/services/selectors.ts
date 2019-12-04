import { adapter, State } from "../state";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

const selectUsersState = createFeatureSelector<State>("users");

const {
  // select the array of user ids
  selectIds: getUserIds,

  // select the dictionary of user entities
  selectEntities: getUserEntities,

  // select the array of users
  selectAll: getAllUsers,

  // select the total user count
  selectTotal: getUserTotal
} = adapter.getSelectors(selectUsersState);

// select the user based on the selected username
const getSelectedUser = createSelector(selectUsersState, state => {
  return state.entities[state.selectedUserName];
});

@Injectable()
export class UserSelectors {
  constructor(private store: Store<State>) {}

  // selectors$
  usersIds$ = this.store.select(getUserIds);
  users$ = this.store.select(getAllUsers);
  usersTotal$ = this.store.select(getUserTotal);
  selectedUser$ = this.store.select(getSelectedUser);
}
