import React from "react";
import userImage from "../../../assets/user.png";

export class Header extends React.Component {
    render() {
        let onlineIndicator = '';
        const head = this.props.contacts.map(contact => {
            if (contact.selected) { 
                if (contact.online) {
                    onlineIndicator = <div className="online"></div>;
                }
                return contact.username;
            }
        }).filter(notUndefined => notUndefined !== undefined)[0];

        
        if (head) {
            return (
                <div className="header-chat">
                    <i className="icon fa fa-user-o" aria-hidden="true"></i>
                    <div className="photo" style={{backgroundImage: 'url(' + userImage + ')'}}>
                        {onlineIndicator}
                    </div>
                    <p className="name">{head}</p>
                    <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
                </div>
            )
        }
        else {
            return (
                <div className="header-chat">
                    <i className="icon fa fa-user-o" aria-hidden="true"></i>
                    <p className="name">Select chat for messaging</p>
                    <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
                </div>
            )
        }
    }
}