import {
    Button,
    Container,
    TextField,
    MenuItem,
    Paper,
    Select,
    Stack,
    Typography,
    InputLabel,
    FormControl
} from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import '../../style.css'
import { Error } from "./Elements";
import SendIcon from '@mui/icons-material/Send';
import CSS from 'csstype';

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

type TextFields = {
    firsteName: string,
    lastName: string,
    gender: GenderEnum,
    age: number
}

type validator = {
    required: boolean,
    min: number,
    max: number,
    minLength: number,
    maxLength: number,
    pattern: string,

}
const register = {

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
        <Container>
            <Typography variant="h6">A form with useForm hook</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack sx={style}>
                    <TextField
                        sx={style}
                        id='firstName'
                        label='First name'
                        {...register("firsteName")}
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
                            <MenuItem value="female">female</MenuItem>
                            <MenuItem value="male">male</MenuItem>
                            <MenuItem value="other">other</MenuItem>
                        </Select>
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
                        type="submit"
                        endIcon={<SendIcon />}
                        variant='dashed'
                        onClick={e => submitClicked(e)}>
                        Submit
                    </Button>
                </Stack>
            </form>
        </Container>
    );
};

export default FormWithUseForm;