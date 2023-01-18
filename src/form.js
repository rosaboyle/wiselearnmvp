import { useState, useReducer } from 'react';
import React from "react";

import {resumeobject} from './resumeobject';
import { Helmet } from 'react-helmet';


import { SplitLogin } from './splitlogin';
import { UseMilligram } from './millilib';



export function Form() {
    
    // let resume1 = resume0;
    const resume1 = resumeobject()
    // resume1[]
    console.log({resume1});
    const [name, setName] = useState(resume1['name']);
    const [numbers, setNumbers] = useState([8, 6, 4, 9, 7, 3, 1, 2]);
    const sortEvent = () => {
        setNumbers(num => [...num.sort()]);
    }

    const [changeMade, setChangeMade] = useState(0);
    const [, updateState] = React.useState();
    const forceUpdate1 = React.useCallback(() => updateState({}), []);

    // const [fields, setFields] = useState([]);
    const [educations, setEducations] = useState(resume1['educations']);
    const [experiences, setExperiences] = useState(resume1['experiences']);
    const [skills, setSkills] = useState(resume1['skills']);
    const [projects, setProjects] = useState(resume1['projects']);
    const [awards, setAwards] = useState(resume1['awards']);
    const [certifications, setCertifications] = useState(resume1['certifications']);
    const [languages, setLanguages] = useState(resume1['languages']);
    const [publications, setPublications] = useState(resume1['publications']);

    const updateName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const resume = {
        name: name,
        educations: educations,
        experiences: experiences,
        skills: skills,
        projects: projects,
        awards: awards,
        certifications: certifications,
        languages: languages,
        publications: publications
    }

    // const addField = () => {
    //     setFields([...fields, { education: "", GPA: "", StartDate: "", EndDate: "" }]);
    // }

    const addEducation = () => {
        setEducations([...educations, { education: "", GPA: "", StartDate: "", EndDate: "", randomKey: Math.random() }]);
    }

    const addExperience = () => {
        setExperiences([...experiences, { jobTitle: "", company: "", startDate: "", endDate: "", description: "", skills: "", randomKey: Math.random() }]);
    }

    const addSkill = () => {
        setSkills([...skills, { skill: "", level: "", randomKey: Math.random() }]);
    }

    const addProject = () => {
        setProjects([...projects, { project: "", description: "", link: "",skills:"" , randomKey: Math.random() }]);
    }

    const addAward = () => {
        setAwards([...awards, { award: "", description: "", link: "", date: "", randomKey: Math.random() }]);
    }

    const addCertification = () => {
        setCertifications([...certifications, { certification: "", description: "", link: "", StartDate: "", EndDate: "", randomKey: Math.random() }]);
    }
    const addPublication = () => {
        setPublications([...publications, { publication: "", description: "", link: "", date:"", randomKey: Math.random() }]);
    }


    const addLanguage = () => {
        setLanguages([...languages, { language: "", level: "", randomKey: Math.random() }]);
    }

    const updateField = (e, index, key, Lfield, setLfield) => {
        console.log(e.target.value);
        console.log({ index });
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
            const newFields = [...Lfield.slice(0, index - 1), indexField, Lfield[index - 1], ...Lfield.slice(index + 1)]
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

    // const moveEducation = (index, direction) => {
    //     console.log({ educations })
    //     if (direction === "up") {
    //         if (index === 0) {
    //             return;
    //         }
    //         const indexField = {...educations[index]};
    //         indexField.randomKey = Math.random();
    //         const newFields = [...educations.slice(0, index - 1), indexField, educations[index - 1], ...educations.slice(index + 1)]
    //         console.log(Object.is(newFields, educations));
    //         console.log("Check New Fields");
    //         setEducations(newFields);
    //         // setChangeMade(changeMade + 1);

    //         // setEducations([...educations.slice(0, index - 1), educations[index], educations[index - 1], ...educations.slice(index + 1)]);
    //     } else {
    //         if (index === educations.length - 1) {
    //             return;
    //         }
    //         const indexField = {...educations[index]};
    //         indexField.randomKey = Math.random();
    //         const newFields = [...educations.slice(0, index), educations[index + 1], indexField, ...educations.slice(index + 2)]
    //         console.log(Object.is(newFields, educations));
    //         console.log("Check New Fields");
    //         setEducations(newFields);
    //         setChangeMade(changeMade + 1);

    //         // setEducations([...educations.slice(0, index), educations[index + 1], educations[index], ...educations.slice(index + 2)]);
    //     }
    // }




    return <>
        <UseMilligram />
        <label for="nameField">Name</label>
        <input type="text" placeholder="Your Full Name" id="nameField" onChange={updateName}></input>
        {educations.map((education, index) => {

            return <>

                <div>
                    <label for="educationField">Education</label>
                    <input type="text" placeholder="Carnegie Mellon University" value={education["education"]} id="educationField" onChange={(event) => updateField(event, index, "education", educations, setEducations)}></input>
                    <label for="GPAField">GPA</label>
                    <input type="text" placeholder="e.g: 4.0/4.0" id="GPAField" value={education["GPA"]} onChange={(event) => updateField(event, index, "GPA", educations, setEducations)}></input>
                    <label for="StartDateField">Start Date</label>
                    <input type="text" placeholder="e.g: Aug 2021" id="StartDateField" value={education["StartDate"]} onChange={(event) => updateField(event, index, "StartDate", educations, setEducations)}></input>
                    <label for="EndDateField">End Date</label>
                    <input type="text" placeholder="e.g: Dec 2022" id="EndDateField" value={education["EndDate"]} onChange={(event) => updateField(event, index, "EndDate", educations, setEducations)}></input>
                    <button onClick={() => removeField(index, educations, setEducations)}>Remove</button>
                    {/* TODO */}

                    {/* <button onClick={() => moveEducation(index, "up")}>Move Up</button>
                    <button onClick={() => moveEducation(index, "down")}>Move Down</button> */}
                </div>
            </>
        })}
        <button onClick={addEducation}>Add Education</button>
        {/* TODO: REMOVE THIS // DEBUG ONLY */}
        <button onClick={(e) => { console.log({ educations }) }}> Log Educations</button>

        {experiences.map((experience, index) => {

            return <>

                <div>
                    <label for="experienceField">Job Title</label>
                    <input type="text" placeholder="e.g: Software Engineer Intern" value={experience["jobTitle"]} id="experienceField" onChange={(event) => updateField(event, index, "jobTitle", experiences, setExperiences)}></input>
                    <label for="companyField">Company</label>
                    <input type="text" placeholder="e.g: Google" id="companyField" value={experience["company"]} onChange={(event) => updateField(event, index, "company", experiences, setExperiences)}></input>
                    <label for="StartDateField">Start Date</label>
                    <input type="text" placeholder="e.g: Aug 2021" id="StartDateField" value={experience["startDate"]} onChange={(event) => updateField(event, index, "startDate", experiences, setExperiences)}></input>
                    <label for="EndDateField">End Date</label>
                    <input type="text" placeholder="e.g: Dec 2022" id="EndDateField" value={experience["endDate"]} onChange={(event) => updateField(event, index, "endDate", experiences, setExperiences)}></input>
                    <label for="descriptionField">Description</label>
                    <input type="text" placeholder="e.g: Worked on the Google Search Engine" value={experience["description"]} id="descriptionField" onChange={(event) => updateField(event, index, "description", experiences, setExperiences)}></input>
                    <label for="skillsField">Skills</label>
                    <input type="text" placeholder="e.g: Java, Python, C++" id="skillsField" value={experience["skills"]} onChange={(event) => updateField(event, index, "skills", experiences, setExperiences)}></input>


                    <button onClick={() => removeField(index, experiences, setExperiences)}>Remove</button>
                    {/* <button onClick={() => movefield(index, "up", experiences, setExperiences)}>Move Up</button> */}
                    {/* <button onClick={() => movefield(index, "down", experiences, setExperiences)}>Move Down</button> */}
                </div>
            </>
        })}
        <button onClick={addExperience}>Add Experience</button>
        <button onClick={(e) => { console.log({ experiences }) }}> Log Experiences</button>
        {/* <button onClick={forceUpdate1}> Force Update</button> */}
        {/* <p>Hello {name}</p> */}
        {skills.map((skill, index) => {
            return <>

                <div>
                    <label for="skillField">Skill</label>
                    <input type="text" placeholder="e.g: Java" value={skill["skill"]} id="skillField" onChange={(event) => updateField(event, index, "skill", skills, setSkills)}></input>
                    <label for="levelField">Level</label>
                    <input type="text" placeholder="e.g: Beginner" value={skill["level"]} id="levelField" onChange={(event) => updateField(event, index, "level", skills, setSkills)}></input>
                    {/* <label for="descriptionField">Description</label>
                    <input type="text" placeholder="e.g: I know the basics of Java" id="descriptionField" onChange={(event) => updateField(event, index, "description", skills, setSkills)}></input> */}
                    <button onClick={() => removeField(index, skills, setSkills)}>Remove</button>
                    {/* <button onClick={() => movefield(index, "up", skills, setSkills)}>Move Up</button> */}
                    {/* <button onClick={() => movefield(index, "down", skills, setSkills)}>Move Down</button> */}
                </div>
            </>
        })}
        <button onClick={addSkill}>Add Skill</button>
        <button onClick={(e) => { console.log({ skills }) }}> Log Skills</button>

        {projects.map((project, index) => {
            return <>

                <div>
                    <label for="projectField">Project</label>
                    <input type="text" placeholder="e.g: Google Search Engine" id="projectField" value={project["project"]} onChange={(event) => updateField(event, index, "project", projects, setProjects)}></input>
                    <label for="descriptionField">Description</label>
                    <input type="text" placeholder="e.g: I worked on the Google Search Engine" value={project["description"]} id="descriptionField" onChange={(event) => updateField(event, index, "description", projects, setProjects)}></input>
                    
                    <label for="skillsField">Skills</label>
                    <input type="text" placeholder="e.g: Java, Python, C++" id="skillsField" value={project["skills"]} onChange={(event) => updateField(event, index, "skills", projects, setProjects)}></input>
                    <label for="StartDateField">Start Date</label>
                    <input type="text" placeholder="e.g: Aug 2021" id="StartDateField" value={project["startDate"]} onChange={(event) => updateField(event, index, "startDate", projects, setProjects)}></input>
                    <label for="EndDateField">End Date</label>
                    <input type="text" placeholder="e.g: Dec 2022" id="EndDateField" value={project["endDate"]} onChange={(event) => updateField(event, index, "endDate", projects, setProjects)}></input>
                    <label for="linkField">Link</label>
                    <input type="text" placeholder="e.g: https://github.com/googleinc/repo" id="linkField" value={project["link"]} onChange={(event) => updateField(event, index, "link", projects, setProjects)}></input>
                    {/* <label for="imageField">Image</label>
                    <input type="text" placeholder="e.g: https://www.google.com" id="imageField" onChange={(event) => updateField(event, index, "image", projects, setProjects)}></input>
                    <label for="githubField">Github</label>
                    <input type="text" placeholder="e.g: https://www.google.com" id="githubField" onChange={(event) => updateField(event, index, "github", projects, setProjects)}></input>
                    <label for="youtubeField">Youtube</label>
                    <input type="text" placeholder="e.g: https://www.google.com" id="youtubeField" onChange={(event) => updateField(event, index, "youtube", projects, setProjects)}></input>
                     */}
                    <button onClick={() => removeField(index, projects, setProjects)}>Remove</button>
                    {/* <button onClick={() => movefield(index, "up", projects, setProjects)}>Move Up</button> */}
                    {/* <button onClick={() => movefield(index, "down", projects, setProjects)}>Move Down</button> */}
                </div>
            </>

        })}
        <button onClick={addProject}>Add Project</button>
        <button onClick={(e) => { console.log({ projects }) }}> Log Projects</button>

        {awards.map((award, index) => {
            return <>
                <div>
                    <label for="awardField">Award</label>
                    <input type="text" placeholder="e.g: Google Search Engine" id="awardField" value={award["award"]} onChange={(event) => updateField(event, index, "award", awards, setAwards)}></input>
                    <label for="descriptionField">Description</label>
                    <input type="text" placeholder="e.g: I worked on the Google Search Engine" id="descriptionField" value={award["description"]} onChange={(event) => updateField(event, index, "description", awards, setAwards)}></input>
                    <label for="dateField">Date</label>
                    <input type="text" placeholder="e.g: Aug 2021" id="dateField" value={award["date"]} onChange={(event) => updateField(event, index, "date", awards, setAwards)}></input>
                    <button onClick={() => removeField(index, awards, setAwards)}>Remove</button>
                    {/* <button onClick={() => movefield(index, "up", awards, setAwards)}>Move Up</button> */}
                    {/* <button onClick={() => movefield(index, "down", awards, setAwards)}>Move Down</button> */}
                </div>
            </>
        })}


        <button onClick={addAward}>Add Award</button>
        <button onClick={(e) => { console.log({ awards }) }}> Log Awards</button>

        {certifications.map((certification, index) => {
            return <>
                <div>
                    <label for="certificationField">Certification</label>
                    <input type="text" placeholder="e.g: Google Search Engine" id="certificationField" value={certification["certification"]} onChange={(event) => updateField(event, index, "certification", certifications, setCertifications)}></input>
                    <label for="descriptionField">Description</label>
                    <input type="text" placeholder="e.g: I worked on the Google Search Engine" id="descriptionField" value={certification["description"]} onChange={(event) => updateField(event, index, "description", certifications, setCertifications)}></input>
                    <label for="dateField">Date</label>
                    <input type="text" placeholder="e.g: Aug 2021" id="dateField"  value={certification["date"]} onChange={(event) => updateField(event, index, "date", certifications, setCertifications)}></input>
                    <button onClick={() => removeField(index, certifications, setCertifications)}>Remove</button>
                    {/* <button onClick={() => movefield(index, "up", certifications, setCertifications)}>Move Up</button> */}
                    {/* <button onClick={() => movefield(index, "down", certifications, setCertifications)}>Move Down</button> */}
                </div>

                </>
        })}
        <button onClick={addCertification}>Add Certification</button>
        <button onClick={(e) => { console.log({ certifications }) }}> Log Certifications</button>

        {publications.map((publication, index) => {
            return <>
                <div>
                    <label for="publicationField">Publication</label>
                    <input type="text" placeholder="e.g: Google Search Engine" id="publicationField" value={publication["publication"]} onChange={(event) => updateField(event, index, "publication", publications, setPublications)}></input>
                    <label for="descriptionField">Description</label>
                    <input type="text" placeholder="e.g: I worked on the Google Search Engine" id="descriptionField" value={publication["description"]} onChange={(event) => updateField(event, index, "description", publications, setPublications)}></input>
                    <label for="dateField">Date</label>
                    <input type="text" placeholder="e.g: Aug 2021" id="dateField" value={publication["date"]} onChange={(event) => updateField(event, index, "date", publications, setPublications)}></input>
                    <label for="linkField">Link</label>
                    <input type="text" placeholder="e.g:https://www.google.com" id="linkField" value={publication["link"]} onChange={(event) => updateField(event, index, "link", publications, setPublications)}></input>


                    <button onClick={() => removeField(index, publications, setPublications)}>Remove</button>
                    {/* <button onClick={() => movefield(index, "up", publications, setPublications)}>Move Up</button> */}
                    {/* <button onClick={() => movefield(index, "down", publications, setPublications)}>Move Down</button> */}
                </div>
                </>
        })}
        <button onClick={addPublication}>Add Publication</button>
        <button onClick={(e) => { console.log({ publications }) }}> Log Publications</button>

        {languages.map((language, index) => {
            return <>
                <div>
                    <label for="languageField">Language</label>
                    <input type="text" placeholder="e.g: English" id="languageField" value={language["language"]} onChange={(event) => updateField(event, index, "language", languages, setLanguages)}></input>
                    <label for="levelField">Level</label>
                    <input type="text" placeholder="e.g: Fluent" id="levelField" value={language["level"]} onChange={(event) => updateField(event, index, "level", languages, setLanguages)}></input>
                    <button onClick={() => removeField(index, languages, setLanguages)}>Remove</button>
                    {/* <button onClick={() => movefield(index, "up", languages, setLanguages)}>Move Up</button> */}
                    {/* <button onClick={() => movefield(index, "down", languages, setLanguages)}>Move Down</button> */}
                </div>
                </>
            
        })}
        <button onClick={addLanguage}>Add Language</button>
        <button onClick={(e) => { console.log({ languages }) }}> Log Languages</button>

        <button onClick={(e)=> {console.log({resume})}}>Log Resume</button>
    </>
}