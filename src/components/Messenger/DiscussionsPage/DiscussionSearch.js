import React from "react";

export class DiscussionSearch extends React.Component {
    render() {
        return (
            <div className="discussion search">
                <div className="searchbar">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="Search..."></input>
                </div>
            </div>
        )
    }
}