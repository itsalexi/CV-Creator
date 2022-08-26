import './App.css';
// import TextField from './components/TextField/TextField';
import NameInfo from './components/NameInfo/NameInfo';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ExperienceList from './components/WorkExperience/ExperienceList';
import AddExperience from './components/WorkExperience/AddExperience';

import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            experiences: [],
            education: [],
            skills: [],
        };
    }

    addExperience = (experience) => {
        console.log('test', experience);
        // console.log(this.state);
        this.setState(
            {
                experiences: this.state.experiences.concat(experience),
            },
            () => {
                console.log(this.state.experiences);
            }
        );
    };

    render() {
        return (
            <div className="App">
                <div className="resume">
                    <div className="cv-header">
                        <NameInfo />
                        <PersonalInfo />
                    </div>
                    <div className="cv-content">
                        <div className="cv-work-experience">
                            <ExperienceList
                                experiences={this.state.experiences}
                            />
                            <AddExperience addExp={this.addExperience} />
                        </div>
                        <div className="cv-education">
                            <h1>Education</h1>
                            <button>+ Education</button>
                        </div>
                        <div className="cv-skills">
                            <h1>Skills</h1>
                            <button>+ Skill</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
