import React from "react";
import AppInput from "./AppInput";
import AppList from "./AppList";

const AppBody = ({ notes, addNote, onDelete, onArchive, archivedNotes=[], isArchive}) => {
    return (
        <div className='note-app__body'>
			<AppInput addNote={addNote} />
			<AppList
				onDelete={onDelete}
				onArchive={onArchive}
				notes={notes}
				path={'Catatan Aktif'}
				isArchive={isArchive}
			/>
			<AppList
				onDelete={onDelete}
				onArchive={onArchive}
				notes={archivedNotes}
				path={'Arsip'}
				isArchive={!isArchive}
			/>
		</div>
    )
}

export default AppBody;