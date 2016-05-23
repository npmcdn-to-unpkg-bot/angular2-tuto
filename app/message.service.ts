
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Message} from "./message";

@Injectable()
export class MessageService {

    private messageObservable:Subject<Message> = new Subject();

    publish(message:Message):void {
        console.log("new message !!");
        this.messageObservable.next(message);
    }

    observe():Observable<Message> {
        return this.messageObservable.asObservable();
    }

}