import { Observable, of } from "rxjs";
import { map, mergeMap, toArray } from "rxjs/operators";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from "src/app/models/user/user.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public get(): Observable<UserModel[]> {
    return this.http
      .get<UserModel[]>("https://uitest.free.beeceptor.com/usernames")
      .pipe(
        mergeMap((data: Iterable<any>) => data),
        map((dataItem: any) => new UserModel(dataItem)),
        toArray()
      );

    // const users: UserModel[] = [
    //   new UserModel({ id: "1212", name: "userA" }),
    //   new UserModel({ id: "1213", name: "userB" }),
    //   new UserModel({ id: "1214", name: "userC" }),
    //   new UserModel({ id: "1215", name: "userD" }),
    //   new UserModel({ id: "1216", name: "userE" })
    // ];

    // return of(users);
  }
}
