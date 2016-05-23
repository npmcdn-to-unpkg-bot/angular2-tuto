"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var input_1 = require('@angular2-material/input');
var button_1 = require('@angular2-material/button');
var message_service_1 = require("./message.service");
var message_1 = require("./message");
var SendBoxComponent = (function () {
    function SendBoxComponent(messageService) {
        this.messageService = messageService;
        this.model = new message_1.Message();
    }
    SendBoxComponent.prototype.onSendMessage = function () {
        var message = this.model;
        console.log("Publishing new message to service " + message);
        this.messageService.publish(message);
        this.model = new message_1.Message();
    };
    SendBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "send-box",
            templateUrl: "send-box.component.html",
            directives: [input_1.MdInput, button_1.MdButton]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], SendBoxComponent);
    return SendBoxComponent;
}());
exports.SendBoxComponent = SendBoxComponent;
//# sourceMappingURL=send-box.component.js.map