import React from "react";
import BtArchive from "./BtArchive";
import BtDelete from "./BtDelete";

const AppItem = ({ title, createAt, body, id, isArchive, onDelete, onArchive }) => {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{createAt}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <BtDelete id={id} onDelete={onDelete}/>
                <BtArchive id={id} onArchive={onArchive} isArchive={isArchive}></BtArchive>
            </div>
        </div>
    )
}

export default AppItem;