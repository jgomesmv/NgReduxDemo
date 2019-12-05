import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersStoreModule } from "./users-store/users-store.module";
import { MetaReducer, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: "Users Management Redux Store"
    })
  ]
})
export class RootStoreModule {}
