import React from "react";
import AppSearch from "./AppSearch";

const AppHeader = ({onSearch}) => {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <AppSearch onSearch={onSearch}/>
        </div>
    )
}

export default AppHeader;