import React from "react";
import AppSearch from "./AppSearch";

const AppHeader = () => {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <AppSearch />
        </div>
    )
}

export default AppHeader;