import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersStoreModule } from "./users-store/users-store.module";
import { MetaReducer, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {}
