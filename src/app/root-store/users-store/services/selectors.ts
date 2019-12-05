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

const selectUserByName = (name: string) =>
  createSelector(selectUsersState, state => {
    return state.entities[name];
  });

const selectUsersByPage = (currentPage: number, pageSize: number) =>
  createSelector(getAllUsers, state => {
    const start = currentPage * pageSize;
    const end = start + pageSize;

    return state.slice(start, end);
  });

@Injectable()
export class UserSelectors {
  constructor(private store: Store<State>) {}

  // selectors$
  usersIds$ = this.store.select(getUserIds);
  users$ = this.store.select(getAllUsers);
  usersTotal$ = this.store.select(getUserTotal);
  selectedUser$ = this.store.select(getSelectedUser);
  selectUserByName$ = (name: string) =>
    this.store.select(selectUserByName(name));
  selectUsersByPage$ = (currentPage: number, pageSize: number) =>
    this.store.select(selectUsersByPage(currentPage, pageSize));
}
