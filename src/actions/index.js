import { ADD_NEW_USER, ADD_NEW_MESSAGE, UNSELECT_ALL_CONTACTS, SELECT_CONTACT, REMOVE_ONLINE_STATUS } from "../constants/actions";

export const addNewUser = (username, userId) => {
    return {
        type: ADD_NEW_USER,
        username,
        userId,
        messages: [],
        online: true,
        selected: false
    }
}

export const addNewMessage = (senderId, receiverId, text, date) => {
    return {
        type: ADD_NEW_MESSAGE,
        senderId,
        receiverId,
        text,
        date
    }
}

export const unselectAllContacts = () => {
    return {
        type: UNSELECT_ALL_CONTACTS
    }
}

export const selectContact = userId => {
    return {
        type: SELECT_CONTACT,
        userId
    }
};

export const removeOnlineStatus = userId => {
    return {
        type: REMOVE_ONLINE_STATUS,
        userId
    }
}