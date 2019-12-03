import { adapter, State } from "../state";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { EntityState } from "@ngrx/entity";

// // get the selectors
// const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal
// } = adapter.getSelectors();

// // select the array of user ids
// const selectUserIds = selectIds;

// // select the dictionary of user entities
// const selectUserEntities = selectEntities;

// select the array of users
// const selectAllUsers = selectAll;

// // select the total user count
// const selectUsersTotal = selectTotal;

// const selectUsersState = createFeatureSelector<State>("users");

// const selectUserByName = (name: string) =>
//   createSelector(selectUsersState, usersState => usersState.entities[name]);

// const selectUsersState = createFeatureSelector<State>("users");

// const getUsersState = createSelector(
//   selectUsersState,
//   (state: State) => state.entities
// );

// const getAllUsers = createSelector(
//   selectUsersState,
//   (state: State) => state.entities
// );

const selectUsersState = createFeatureSelector<State>("users");

const { selectAll, selectIds } = adapter.getSelectors(selectUsersState);

// export const getSelectedHero = createSelector(selectHeroState, state => {
//   return state.entities[state.selectedHeroId];
// });

@Injectable()
export class UserSelectors {
  constructor(private store: Store<State>) {}
  // selectors$
  users$ = this.store.select(selectAll);
  // usersState$ = this.store.select(getUsersState);
  // usersTotal$ = this.store.select(selectUsersTotal);
  // userByName$ = (name: string) => this.store.select(selectUserByName(name));
}
