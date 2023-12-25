import React from "react";
import { getInitialData } from "./utils";
import AppBody from "./components/appBody";
import AppHeader from "./components/appHeader";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            search: '',
            archivedNotes: [],
        };

        this.onSearch = this.onSearch.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onDeleteNote = this.onDeleteNote.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onArchiveNote = this.onArchiveNote.bind(this);
    }

    onDeleteNote(id) {
        const notes = this.state.notes.filter((note) => note.id !==id);
        const archived = this.state.archivedNotes.filter((note) => note.id !==id);

        this.setState({notes, archived})
    }

    onAdd({ title, body, archived }) {
        this.setState((prevState) => {
            const date = new Date().toISOString();
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: date,
                        archived,
                    },
                ],
            };
        });
    }

    onArchiveNote(id) {
        const noteArchive = this.state.notes.find((note) => note.id ===id);
        const archivedNotes = this.state.archivedNotes.find((note) => note.id ===id);

        if(noteArchive){
            this.setState((prevState) => ({
                notes: prevState.notes.filter((note) => note.id !== id),
                archivedNotes: [...prevState.archivedNotes, noteArchive],
            }))
        } else {
            this.setState((prevState) => ({
                archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
                notes: [...prevState.notes, archivedNotes]
            }))
        }
    }

    onSearch(value) {
        this.setState({searchKeywords: value});
    }

    onFilter(currNotes, searchKeywords) {
        const notes = currNotes.filter((note) => {
            return note.title.toLowerCase().includes(searchKeywords.toLowerCase());
        });
        return notes;
    }

    render() {
        const {notes, search, archivedNotes} = this.state;
        return (
            <>

                <AppHeader value={this.state.searchKeywords} onSearch={this.onSearch}/>

                <AppBody notes = {this.onFilter(notes, search)} onDelete={this.onDeleteNote} onArchive={this.onArchiveNote} 
                        archivedNotes={this.onFilter(archivedNotes, search)} addNotes={this.onAdd} />
            </>
        )
    }
}

export default NoteApp;