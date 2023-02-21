import React from "react";
import { Contact } from "./Contact";

export class Discussions extends React.Component {
    clickContactHandler = (userId) => {
        if (userId) {
            this.props.unselectAllContacts();
            this.props.selectContact(userId);
        }
    }

    render() {
        const { contacts } = this.props;
        let key = Date.now();

        let contactsList = contacts.map(contact => {
            return <Contact key={key++} contact={contact} onClick={() => this.clickContactHandler(contact.userId)}/>
        });
        return <div className="discussions-wrap">
                {contactsList}
            </div>
    }
    
}