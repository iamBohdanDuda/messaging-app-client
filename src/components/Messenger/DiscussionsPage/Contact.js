import React from "react";
import clsx from "clsx";
import userImage from "../../../assets/user.png"

export const Contact = props => {
    const { contact } = props;
    let lastMessage, onlineIndicator, timeIndicator = '';
    let time, date, text = '';

    if (typeof (contact.messages.findLast(element => element)) !== 'undefined') {
        lastMessage = contact.messages.findLast(element => element);
        text = lastMessage.text;
        date = new Date(lastMessage.date);
        time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        timeIndicator = <div className="timer">{time}</div>;
    }

    if (contact.online) {
        onlineIndicator = <div className="online"></div>;
    }

    return (
        <div className={clsx({ 'discussion' : true }, { 'message-active' : contact.selected })} {...props}>
            <div className="photo" style={{backgroundImage: 'url(' + userImage + ')'}}>
                {onlineIndicator}
            </div>
            <div className="desc-contact">
                <p className="name">{contact.username}</p>
                <p className="message">{text}</p>
            </div>
            {timeIndicator}
        </div>
    )
}