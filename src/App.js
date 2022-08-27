import './App.css';
import NameInfo from './components/NameInfo/NameInfo';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ExperienceList from './components/WorkExperience/ExperienceList';
import AddExperience from './components/WorkExperience/AddExperience';

import EducationList from './components/Education/EducationList';
import AddEducation from './components/Education/AddEducation';

import { useState } from 'react';

const App = (props) => {
    const [experiences, setExperiences] = useState([]);
    const [education, setEducation] = useState([]);
    const [preview, setPreview] = useState(false);
    const [buttonText, setButtonText] = useState('Edit Mode');

    const addExperience = (experience) => {
        setExperiences(experiences.concat(experience));
    };

    const addEducation = (education) => {
        setEducation(education.concat(education));
    };

    const removeExp = (id) => {
        const newExperiences = experiences.filter(
            (experience) => experience.id !== id
        );
        setExperiences(newExperiences);
    };

    const removeEdu = (id) => {
        const newEducation = education.filter(
            (education) => education.id !== id
        );
        setEducation(newEducation);
    };

    const switchMode = () => {
        if (preview) {
            setPreview(false);
            setButtonText('Preview Mode');
        } else {
            setPreview(true);
            setButtonText('Edit Mode');
        }
    };

    return (
        <div className="App">
            <button className="switchBtn" onClick={switchMode}>
                Enable {buttonText}
            </button>
            <div className="resume">
                <div className="cv-header">
                    <NameInfo />
                    <PersonalInfo />
                </div>
                <div className="cv-content">
                    <div className="cv-work-experience">
                        <ExperienceList
                            removeExp={removeExp}
                            experiences={experiences}
                            preview={preview}
                        />
                        <AddExperience
                            addExp={addExperience}
                            preview={preview}
                        />
                    </div>
                    <div className="cv-education">
                        <EducationList
                            removeEdu={removeEdu}
                            educations={education}
                            preview={preview}
                        />
                        <AddEducation addEdu={addEducation} preview={preview} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
