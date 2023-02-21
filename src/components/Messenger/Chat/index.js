import React from "react";
import { SendingForm } from "./SendingForm";
import { Header } from "./Header";
import { Messages } from "./Messages";

export class Chat extends React.Component {
    render() {
        return (
            <section className="chat">
                <Header contacts={this.props.contacts}/>
                <Messages contacts={this.props.contacts}/>
                <SendingForm contacts={this.props.contacts}/>
            </section>
        )
    }
}