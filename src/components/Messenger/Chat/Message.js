import React from "react";

export const Message = (props) => {
    const { message, selectedContactId } = props;
    
    let isResponse = false;
    if (message.receiverId === selectedContactId) {
        isResponse = true;
    }

    const date = new Date(message.date);
    const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

    if (isResponse) {
        return (
            <>
                <div className="message text-only">
                    <div className="response">
                        <p className="text">{message.text}</p>
                        <p className="response-time time">{time}</p>
                    </div>
                </div>
                
            </>
        )
    }
    else {
        return (
            <>
                <div className="message text-only">
                    <div className="incoming">
                        <p className="text">{message.text}</p>
                        <p className="incoming-time time">{time}</p>
                    </div>
                </div>
            </>
        )
    }

}