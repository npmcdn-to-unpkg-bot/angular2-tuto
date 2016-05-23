import {Component} from '@angular/core';
import {Input} from '@angular/core';
import {MdCard} from '@angular2-material/card';
import {Message} from './message';

@Component({
    moduleId: module.id,
    selector: 'message-detail',
    templateUrl: 'message.component.html',
    directives: [MdCard]
})
export class MessageComponent {
    @Input() message : Message;
}