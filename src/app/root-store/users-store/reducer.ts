import { Action, createReducer, on } from "@ngrx/store";
import * as UserActions from "./actions";
import { initialState, adapter, State } from "./state";

const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => {
    return adapter.addOne(user, state);
  }),
  on(UserActions.upsertUser, (state, { user }) => {
    return adapter.upsertOne(user, state);
  }),
  on(UserActions.addUsers, (state, { users }) => {
    return adapter.addMany(users, state);
  }),
  on(UserActions.upsertUsers, (state, { users }) => {
    return adapter.upsertMany(users, state);
  }),
  on(UserActions.updateUser, (state, { user }) => {
    return adapter.updateOne(user, state);
  }),
  on(UserActions.updateUsers, (state, { users }) => {
    return adapter.updateMany(users, state);
  }),
  on(UserActions.mapUsers, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(UserActions.deleteUser, (state, { name }) => {
    return adapter.removeOne(name, state);
  }),
  on(UserActions.deleteUsers, (state, { names }) => {
    return adapter.removeMany(names, state);
  }),
  on(UserActions.deleteUsersByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(UserActions.loadUsers, (state, { users }) => {
    return adapter.addAll(users, state);
  }),
  on(UserActions.clearUsers, state => {
    return adapter.removeAll({ ...state, selectedUserId: null });
  }),
  on(UserActions.selectUser, (state, { name }) => {
    return {
      ...state,
      selectedUserName: name
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
