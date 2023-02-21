import React from "react";
import { DiscussionSearch } from "./DiscussionSearch";
import { Discussions } from "./Discussions";

export class DiscussionsPage extends React.Component {
    render() {
        return (
            <section className="discussions">
                <DiscussionSearch/>
                <Discussions contacts={this.props.contacts} unselectAllContacts={this.props.unselectAllContacts} selectContact={this.props.selectContact}/>
            </section>
        )
    }
}