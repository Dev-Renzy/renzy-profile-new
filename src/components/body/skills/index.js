import React from 'react';
import Separator from '../../common/separator';
import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';
import "./skills.css";
function Skills() {
    const data = SkillsData
    return (
        <div>
            <Separator />
            <label className="section-title">Skills</label>
            <div className='skill-container'>
                {data.map((item)=>{
                    return(
                        <div className="skill-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard skill={skill}/>
                                )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
