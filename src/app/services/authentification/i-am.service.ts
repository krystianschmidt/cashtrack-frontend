import { Injectable } from '@angular/core';
import {CommunicationRequestService} from "../lib/communication-request.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import { iAmUser } from '../../models/iAmUser';

@Injectable({
  providedIn: 'root'
})
export class IAmService extends CommunicationRequestService<any>{

  iAmUser: iAmUser = {
    name: "", username: ""
  };

  protected readonly backendUrlExt: string = 'auth';


  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    if(reqParameter.username)
      return new HttpParams().set('username', reqParameter.username);

    return new HttpParams();
  }

  loadUser(headers?: any){
    return super.sendGetRequest<iAmUser>(this.backendUrlExt + '/iAm', null, headers)
      .then(user => {
        this.iAmUser = user
        return user;
      });
  }



}
