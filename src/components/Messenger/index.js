import React from "react";
import { connect } from "react-redux";
import '../../assets/styles/style.scss';
import { Chat } from "./Chat";
import { DiscussionsPage } from "./DiscussionsPage";
import { Menu } from "./Menu";
import { authHOC } from "./authHOC";
import { addNewUser, unselectAllContacts, selectContact } from "../../actions";

class MessengerComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Menu/>
                    <DiscussionsPage contacts={this.props.contacts} unselectAllContacts={this.props.unselectAllContacts} selectContact={this.props.selectContact}/>
                    <Chat contacts={this.props.contacts}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (username, userId) => dispatch(addNewUser(username, userId)),
        unselectAllContacts: () => dispatch(unselectAllContacts()),
        selectContact: (userId) => dispatch(selectContact(userId))
    }
}

export const Messenger = connect(mapStateToProps, mapDispatchToProps)(MessengerComponent);
export default authHOC(Messenger);