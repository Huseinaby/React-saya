import React from "react";
import AppItem from "./appItem";

const AppList = ({notes, onArchive, onDelete, path, isArchive}) => {
    return (
        <>
            <h2>{path}</h2>
            {notes.length === 0 ? (
                <p className="notes-list__empty-message">Tidak Ada Catatan</p>
            ) : (
                <div className="notes-list">
                    {notes.map((note) => (
                        <AppItem key={note.id} id={note.id} onArchive={onArchive} onDelete={onDelete} 
                        isArchive={isArchive} {...note}/>
                    ))}
                </div>
            )}
        </>
    );
}

export default AppList;