import { ADD_NEW_USER, ADD_NEW_MESSAGE, UNSELECT_ALL_CONTACTS, SELECT_CONTACT, REMOVE_ONLINE_STATUS } from "../constants/actions";

export const contacts = (state = [], action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            return state.concat({
                username: action.username,
                userId: action.userId,
                messages: action.messages,
                online: action.online,
                selected: action.selected
            });

        case ADD_NEW_MESSAGE:
            return [
                ...state.map(contact => {
                    if (contact.userId === action.receiverId || contact.userId === action.senderId) {
                        return {
                            ...contact,
                            messages: contact.messages.concat({
                                senderId: action.senderId,
                                receiverId: action.receiverId,
                                text: action.text,
                                date: action.date
                            })
                        }
                    }
                    else {
                        return contact;
                    }                    
                })
            ]

        case UNSELECT_ALL_CONTACTS:
            return [
                ...state.map(contact => {
                    return Object.assign({}, contact, { selected: false })
                })
            ]

        case SELECT_CONTACT:
            return [
                ...state.map(contact => {
                    if (action.userId === contact.userId) {
                        return Object.assign({}, contact, { selected: true })
                    }
                    else {
                        return contact
                    }
                })
            ];

        case REMOVE_ONLINE_STATUS:
            return [
                ...state.map(contact => {
                    if (contact.userId === action.userId) {
                        return Object.assign({}, contact, { online: false })
                    }
                    else {
                        return contact;
                    }
                })
            ];
        default:
            return state;
    }
}