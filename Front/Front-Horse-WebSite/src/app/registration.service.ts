import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';
import { HorseInstructor } from './horse-instructor';
import { Rider } from './rider';
import { WebsiteAdmin } from './website-admin';
import { Horse } from './horse';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post('http://localhost:8080/login', user);
  }

  public loginAdminFromRemote(admin: Admin): Observable<any> {
    return this._http.post('http://localhost:8080/loginAdmin', admin);
  }

  public loginHorseInstructorFromRemote(hs: HorseInstructor): Observable<any> {
    return this._http.post('http://localhost:8080/loginHI', hs);
  }

  public loginRiderFromRemote(rider: Rider): Observable<any> {
    return this._http.post('http://localhost:8080/loginRider', rider);
  }

  public loginWebsiteAdminidtratorFromRemote(
    wb: WebsiteAdmin
  ): Observable<any> {
    return this._http.post('http://localhost:8080/loginWA', wb);
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post('http://localhost:8080/registeruser', user);
  }

  public registerAdminFromRemote(admin: Admin): Observable<any> {
    return this._http.post('http://localhost:8080/registeradmin', admin);
  }

  public registerHorseInstructorFromRemote(
    hs: HorseInstructor
  ): Observable<any> {
    return this._http.post('http://localhost:8080/registerHI', hs);
  }

  public registerRiderFromRemote(rider: Rider): Observable<any> {
    return this._http.post('http://localhost:8080/registerRider', rider);
  }

  public registerWebsiteAdministratorFromRemote(
    wb: WebsiteAdmin
  ): Observable<any> {
    return this._http.post('http://localhost:8080/registerWA', wb);
  }

  public registerHorseFromRemote(horse: Horse): Observable<any> {
    return this._http.post('http://localhost:8080/creationHorse', horse);
  }
}
