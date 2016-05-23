import {Component} from "@angular/core";
import {MdInput} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';
import {MessageService} from "./message.service";
import {Message} from "./message";

@Component({
    moduleId: module.id,
    selector: "send-box",
    templateUrl: "send-box.component.html",
    directives: [MdInput, MdButton]
})
export class SendBoxComponent {

    constructor(private messageService : MessageService){}

    model:Message = new Message();

    onSendMessage(){
        let message:Message = this.model;
        console.log("Publishing new message to service " + message);
        this.messageService.publish(message);
        this.model = new Message();
    }

}