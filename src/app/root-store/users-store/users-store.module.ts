import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./effects";
import { services } from ".";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("users", reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [...services]
})
export class UsersStoreModule {}
