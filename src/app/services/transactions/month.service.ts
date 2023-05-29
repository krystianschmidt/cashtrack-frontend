import {Injectable} from "@angular/core";
import {CommunicationRequestService} from "../lib/communication-request.service";

@Injectable({
  providedIn: 'root'
})
export class MonthService{
  public month: number = 0;
}
