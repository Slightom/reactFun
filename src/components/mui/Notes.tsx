import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Note from "./Note";

export type NoteType = {
    id: number,
    details: string,
    category: string,
    title: string
}

const Notes = () => {
    const [notes, setNotes] = useState<NoteType[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id: number) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        });

        setNotes(notes.filter(n => n.id !== id));
    }

    return (
        <Container>
            <Grid container spacing={2}>
                {notes.map(n => (
                    <Grid item key={n.id} xs={12} md={6} lg={4}>
                        <Note note={n} onDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Notes;