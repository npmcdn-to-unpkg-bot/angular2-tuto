import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import {OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {MessageComponent } from './message.component'
import {SendBoxComponent} from './send-box.component'
import {MessageService} from "./message.service";
import { Message } from './message';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [MdToolbar, MessageComponent, SendBoxComponent],
    providers: [MessageService]
})
export class AppComponent implements OnInit{
    messages : Message[] = [];

    private subscription: Subscription;

    constructor(private messageService : MessageService){}

    ngOnInit() {
        this.subscription = this.messageService.observe().subscribe(
            (msg:Message) => {
                console.log("new message");
                this.messages.push(msg);
            },
            (err:any) => console.log("error " + err)
         );
        console.log("Subscribing to observable message");
    }
}

