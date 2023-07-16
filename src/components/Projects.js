import React from "react";
import CardList from "./projects/cardList";
import {experienceData} from "../constants/experienceData";
import {projects} from "../constants/projects";
import '../App.css';
import { motion } from "framer-motion";

export default function Projects () {
    return (
        <motion.div
            className="container text-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >

        <div className="projectPage">
            <h2> past experience </h2>
            <p> Click on a card to learn more about my involvements off and on-campus </p>
            <div className="projectContainer">
                <CardList data={experienceData}></CardList>                
            </div>
            <h2> projects </h2>
            <p> some fun things i do in my freetime </p>
            <div className="projectContainer">
                <CardList className="projects" data={projects}></CardList>                
            </div>
            
        </div>
        </motion.div>

    )
};
