import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from "@mui/material/TextField";
import { addName } from '../../features/name/nameSlice';
import { useNavigate } from "react-router-dom";

import "./style.css"

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");

    /*const handleChange = (e: { target: { value: e: FormEvent<HTMLFormElement>; } }) => {
        setName(e.target.value)

    }
    console.log(name)*/

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(name);
        dispatch(addName(name));
        navigate("/quiz");
        setName("")
    }

    return (
        <div className="main">

            <div className="welcome">Please enter your username</div>

            <div className='inputDiv'>
                <TextField onChange={event => setName(event.target.value)} value={name} label={"Name"}
                    variant={'outlined'}
                    fullWidth={true}
                    helperText={"Enter You name"} />
            </div>
            <TextField onChange={event => setName(event.target.value)} value={name} label={"Name"}
                    variant={'outlined'}
                    fullWidth={true}
                    helperText={"Enter You name"} />

            <div  className='btnDiv'><button  className='btn' onClick={handleSubmit}>Submit</button> </div>
        </div>



    )
}

export default LoginPage