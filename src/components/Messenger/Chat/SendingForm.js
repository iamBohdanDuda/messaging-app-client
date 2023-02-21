import React from "react";
import ws from "../../../util/ws";

export class SendingForm extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    handleKeyDown = e => {
        const text = this.inputRef.current.value;
        const receiverId = this.props.contacts.map(contact => {
            if (contact.selected) return contact.userId
        }).filter(notUndefined => notUndefined !== undefined)[0];
        const date = Date.now();

        if (e.key === 'Enter') {
            if (text && receiverId) {
                ws.sendMessage(text, receiverId, date);
                this.inputRef.current.value = '';
            };
        };
    };

    handleSendClick = () => {
        const text = this.inputRef.current.value;
        const receiverId = this.props.contacts.map(contact => {
            if (contact.selected) return contact.userId
        }).filter(notUndefined => notUndefined !== undefined)[0];
        const date = Date.now();

        if (text && receiverId) {
            ws.sendMessage(text, receiverId, date);
            this.inputRef.current.value = '';
        };
    }

    render() {
        return (
            <div className="footer-chat">
                <i className="icon fa fa-smile-o clickable" style={{fontSize: 25}} aria-hidden="true"></i>
                <input ref={this.inputRef} onKeyDown={this.handleKeyDown} type="text" className="write-message" placeholder="Type your message here"></input>
                <i className="icon send fa fa-paper-plane-o clickable" aria-hidden="true" onClick={this.handleSendClick}>SEND</i>
            </div>
        )
    }
}