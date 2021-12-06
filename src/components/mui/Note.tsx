import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { NoteType } from "./Notes";

interface NoteProps {
    note: NoteType;
    onDelete: (id: number) => {};
}

const Note = ({ note, onDelete }: NoteProps) => {

    return (
        <Card elevation={4}>
            <CardHeader
                action={
                    <IconButton onClick={() => onDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color='secondary'>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Note;