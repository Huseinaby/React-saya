import React from "react";

const BtArchive = ({id, onArchive, NameBtn}) => {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{NameBtn}</button>
}

export default BtArchive;