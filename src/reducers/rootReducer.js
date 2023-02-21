import { contacts } from "./contacts"

export const rootReducer = (state = [], action) => {
    return {
        contacts: contacts(state.contacts, action)
    }
}