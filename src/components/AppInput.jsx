import React from "react";

class AppInput extends React.Component {
    render() {
        return (
            <div className="note-input">
                <h2>Buat    Catatan</h2>
                <form onSubmit={this.onSubmit}>
                    <p className="note-input__title__char-limit">Sisa Karakter : </p>
                    <input className="note-input__title" type="text" placeholder="Masukkan Judul ..." required=""  />
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan Catatanmu ..."></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default AppInput;