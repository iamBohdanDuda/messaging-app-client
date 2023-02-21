import React from "react";
import { Message } from "./Message";

export class Messages extends React.Component {
    componentDidUpdate() {
        this.scrollToBottom()
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.el.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        const { contacts } = this.props;
        let key = Date.now();
        const messageItems = contacts.map(contact => {
            if (contact.selected) {
                console.log("selected log");
                return contact.messages.map(message => <Message message={message} selectedContactId={contact.userId} key={key++}/>)
            }
        })

        return (
            <div className="messages-chat">
                {messageItems}
                <div ref={el => { this.el = el }}></div>
            </div>
        )
    }
}