import { useState, useReducer } from 'react';
import React from "react";

import { Helmet } from 'react-helmet';


import { SplitLogin } from './splitlogin';
import { UseMilligram } from './millilib';


export function Form() {
    const [name, setName] = useState("CJ Patoilo");

    const [fields, setFields] = useState([]);
    // const [educations, setEducations] = useState([]);

    const updateName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    // const addField = () => {
    //     setFields([...fields, { education: "", GPA: "", StartDate: "", EndDate: "" }]);
    // }

    const addEducation = () => {
        setEducations([...educations, { education: "", GPA: "", StartDate: "", EndDate: "", randomKey: Math.random() }]);
    }





    const updateField = (e, index, key, Lfield, setLfield) => {
        console.log(e.target.value);
        console.log({index});
        const newFields = [...Lfield];
        newFields[index][key] = e.target.value;
        setLfield(newFields);
    }


    const removeField = (index, Lfield, setLfield) => {
        console.log({ Lfield })
        setLfield([...Lfield.slice(0, index), ...Lfield.slice(index + 1)]);
    }

    const movefield = (index, direction, Lfield, setLfield) => {
        console.log({ Lfield })
        if (direction === "up") {
            if (index === 0) {
                return;
            }
            const indexField = Lfield[index]
            indexField.randomKey = Math.random();
            const newFields = [...Lfield.slice(0, index - 1), indexField , Lfield[index - 1], ...Lfield.slice(index + 1)]
            setLfield(newFields);
            setChangeMade(changeMade + 1);
        } else {
            if (index === Lfield.length - 1) {
                return;
            }
            setLfield([...Lfield.slice(0, index), Lfield[index + 1], Lfield[index], ...Lfield.slice(index + 2)]);
            setChangeMade(changeMade + 1);
        }
    }

    // const moveEducation = (index, direction) => {
    //     movefield(index, direction, educations, setEducations);
    // }

    const moveEducation = (index, direction) => {
        console.log({ educations })
        if (direction === "up") {
            if (index === 0) {
                return;
            }
            const indexField = educations[index]
            indexField.randomKey = Math.random();
            const newFields = [...educations.slice(0, index - 1), indexField , educations[index - 1], ...educations.slice(index + 1)]
            setEducations(newFields);
            setChangeMade(changeMade + 1);

            // setEducations([...educations.slice(0, index - 1), educations[index], educations[index - 1], ...educations.slice(index + 1)]);
        } else {
            if (index === educations.length - 1) {
                return;
            }
            const indexField = educations[index]
            indexField.randomKey = Math.random();
            const newFields = [...educations.slice(0, index), educations[index + 1], indexField, ...educations.slice(index + 2)]
            setEducations(newFields);
            setChangeMade(changeMade + 1);

            //
            // setEducations([...educations.slice(0, index), educations[index + 1], educations[index], ...educations.slice(index + 2)]);
        }    }




        const [, forceUpdate] = useReducer(x => x + 1, 0);


    return <>
        <UseMilligram />
        <label for="nameField">Name</label>
        <input type="text" placeholder="CJåååååßß∂∂ƒƒ©©∆µ®µƒ Patoilo" id="nameField" onChange={updateName}></input>
        {educations.map((education, index) => {

            return <>
                <label for="educationField">Education</label>
                <input type="text" placeholder="e.g: Carnegie Mellon University" id="educationField" onChange={(event)=>updateField(event, index, "education", educations, setEducations)}></input>
                <label for="GPAField">GPA</label>
                <input type="text" placeholder="e.g: 4.0/4.0" id="GPAField" onChange={(event)=> updateField(event, index, "GPA", educations, setEducations) }></input>
                <label for="StartDateField">Start Date</label>
                <input type="text" placeholder="e.g: Aug 2021" id="StartDateField" onChange={(event)=> updateField(event, index, "StartDate", educations, setEducations) }></input>
                <label for="EndDateField">End Date</label>
                <input type="text" placeholder="e.g: Dec 2022" id="EndDateField" onChange={(event)=> updateField(event, index, "EndDate", educations, setEducations) }></input>
                <button onClick={() => removeField(index)}>Remove</button>
                <button onClick={() => moveEducation(index, "up")}>Move Up</button>
                <button onClick={() => moveEducation(index, "down")}>Move Down</button>
                
                </>
        })}
                <button onClick={addEducation}>Add Education</button>
        <button onClick={(e)=>{console.log({educations})}}> Log Educations</button>
        <button onClick={forceUpdate1}> Force Update</button>
        <p>Hello {name}</p>
    </>

}