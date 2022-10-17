import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { addName } from "../../features/name/nameSlice";
import "./style.css";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(addName(name));
    navigate("/quiz");
    setName("");
  };

  return (
    <div className="main">
      <div className="welcome">Please enter your username</div>

      <div className="inputDiv">
        <TextField
          onChange={(event) => setName(event.target.value)}
          value={name}
          label={"Name"}
          variant={"outlined"}
          fullWidth={true}
          helperText={"Enter You name"}
        />
      </div>

      <div className="btnDiv">
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>{" "}
      </div>
    </div>
  );
};

export default LoginPage;
