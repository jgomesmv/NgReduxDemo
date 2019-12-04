import { createAction, props } from "@ngrx/store";

import { UserModel } from "../../models/user/user.model";
import { Update, EntityMap, Predicate } from "@ngrx/entity";

export const getUsers = createAction("[Users] Get Users");

export const loadUsers = createAction(
  "[Users] Load Users",
  props<{ users: UserModel[] }>()
);
export const addUser = createAction(
  "[Users] Add User",
  props<{ user: UserModel }>()
);
export const upsertUser = createAction(
  "[Users] Upsert User",
  props<{ user: UserModel }>()
);
export const addUsers = createAction(
  "[Users] Add Users",
  props<{ users: UserModel[] }>()
);
export const upsertUsers = createAction(
  "[Users] Upsert Users",
  props<{ users: UserModel[] }>()
);
export const updateUser = createAction(
  "[Users] Update User",
  props<{ user: Update<UserModel> }>()
);
export const updateUsers = createAction(
  "[Users] Update Users",
  props<{ users: Update<UserModel>[] }>()
);
export const mapUsers = createAction(
  "[Users] Map Users",
  props<{ entityMap: EntityMap<UserModel> }>()
);
export const deleteUser = createAction(
  "[Users] Delete User",
  props<{ name: string }>()
);
export const deleteUsers = createAction(
  "[Users] Delete Users",
  props<{ names: string[] }>()
);
export const deleteUsersByPredicate = createAction(
  "[Users] Delete Users By Predicate",
  props<{ predicate: Predicate<UserModel> }>()
);
export const selectUser = createAction(
  "[Users] Select User",
  props<{ name: string }>()
);
export const clearUsers = createAction("[Users] Clear Users");
