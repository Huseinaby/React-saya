import React from "react";

const BtDelete = ({id, onDelete }) => {
    return <button className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
}

export default BtDelete;