import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, switchMap } from "rxjs/operators";
import * as UsersActions from "./actions";
import { UsersService } from "src/app/services/users/users.service";

@Injectable()
export class UserEffects {
  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.getUsers),
      switchMap(() =>
        this.usersService.get().pipe(
          map(users => UsersActions.loadUsers({ users })),
          // catchError(error => of(UsersActions.getHeroesError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
