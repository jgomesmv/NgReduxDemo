import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { UserModel } from "../../models/user/user.model";

export interface State extends EntityState<UserModel> {
  selectedUserId: string | null;
}

export const adapter = createEntityAdapter<UserModel>({
  selectId: (user: UserModel) => user.name
});

export const initialState: State = adapter.getInitialState({
  selectedUserId: null
});
