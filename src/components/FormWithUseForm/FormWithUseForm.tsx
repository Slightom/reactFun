import {
    Button,
    Container,
    TextField,
    MenuItem,
    Select,
    Stack,
    Typography,
    InputLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import '../../style.css'
import { Error } from "./Elements";
import SendIcon from '@mui/icons-material/Send';
import CSS from 'csstype';
import { useEffect } from "react";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

enum PetEnum {
    dog = 'dog',
    cat = 'cat',
    kangaroo = 'kangaroo'
}

type TextFields = {
    firsteName: string,
    lastName: string,
    gender: GenderEnum,
    bestPet: PetEnum,
    age: number
}


const style: CSS.Properties = {
    margin: '10px 20px 20px 0px'
} as const;

const FormWithUseForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TextFields>();
    const onSubmit: SubmitHandler<TextFields> = data => console.log(data);

    const submitClicked = (e: any) => {
        alert(errors.age?.message);
        e.preventDefault();
    }


    return (
        <Container >
            <Typography variant="h6" sx={style}>A form with useForm hook</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack sx={style}>
                    <TextField
                        sx={style}
                        id='firstName'
                        label='First name'
                        {...register("firsteName")}
                        required
                    />

                    <TextField
                        sx={style}
                        id='lastName'
                        label='Last Name'
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName && <Error>This field is required</Error>}

                    <FormControl fullWidth>
                        <InputLabel id="select-label">Gender</InputLabel>
                        <Select
                            id='gender'
                            labelId="select-label"
                            {...register("gender")}
                            sx={style}>
                            {Object.values(GenderEnum).map(g => <MenuItem key={g} value={g}>{g}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <FormLabel>Best Pet</FormLabel>
                        <RadioGroup
                            sx={style}
                            row
                            id='bestPet'>
                            {Object.values(PetEnum).map(pet =>
                                <FormControlLabel {...register("bestPet")} key={pet} value={pet} control={<Radio />} label={pet} />
                            )}
                        </RadioGroup>
                    </FormControl>

                    <TextField
                        sx={style}
                        id='age'
                        label='Age'
                        placeholder='Enter number'
                        type='number'
                        {...register("age",
                            {
                                valueAsNumber: true,
                                min: { value: 18, message: 'uuuuu young men' },
                                max: 99
                            })}
                    />
                    {errors.age && <Error>{errors.age.message}</Error>}

                    <Button
                        sx={style}
                        type="submit"
                        endIcon={<SendIcon />}
                        variant='contained'
                    //onClick={e => submitClicked(e)}
                    >
                        Submit
                    </Button>
                </Stack>
            </form>
        </Container>
    );
};

export default FormWithUseForm;