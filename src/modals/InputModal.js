import React, { useContext, useRef, useState } from "react";
import { Container, Button, Dropdown, Image, Navbar, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import { Context } from "../index";

import { useForm } from "react-hook-form";

function InputModal(props) {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const {navbarHeight} = useContext(Context)
    console.log(props)
    const container = useRef('')

    console.log(errors);

    

    console.log(container.current.offsetHeight)
//style={{backgroundImage: `url(${background})`, height: 1000}}
//#86b7fe
  return (
    <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip style={{position: "absolute"}} id="button-tooltip-3">Check out this avatar</Tooltip>}
  >
    {({ ref, ...triggerHandler }) => (
     <input {...triggerHandler} ref={ref} {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
    )}
  </OverlayTrigger>
  );
}


export default InputModal;
