import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);


const DataProvider = ({ children }) =>{
    const [notes, setNotes] = useState([]);
    const [archive, setArchive] = useState([]);
    const [deletedNote, setDeletedNote] = useState([]);

    return(
        <DataContext.Provider value={{ 
            notes,
            setNotes,
            archive,
            setArchive,
            deletedNote,
            setDeletedNote
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider;