import './App.css';
// import TextField from './components/TextField/TextField';
import NameInfo from './components/NameInfo/NameInfo';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import ExperienceList from './components/WorkExperience/ExperienceList';
import AddExperience from './components/WorkExperience/AddExperience';

import EducationList from './components/Education/EducationList';
import AddEducation from './components/Education/AddEducation';

import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            experiences: [],
            education: [],
            skills: [],
            preview: false,
            buttonText: 'Edit Mode',
        };

        this.removeExp = this.removeExp.bind(this);
        this.switchMode = this.switchMode.bind(this);
    }

    addExperience = (experience) => {
        this.setState(
            {
                experiences: this.state.experiences.concat(experience),
            },
            () => {
                console.log(this.state.experiences);
            }
        );
    };

    addEducation = (education) => {
        this.setState(
            {
                education: this.state.education.concat(education),
            },
            () => {
                console.log(this.state.education);
            }
        );
    };

    removeExp(id) {
        const experiences = this.state.experiences.filter(
            (experience) => experience.id !== id
        );

        this.setState({ experiences });
    }

    removeEdu(id) {
        const education = this.state.education.filter(
            (education) => education.id !== id
        );

        this.setState({ education });
    }
    switchMode() {
        if (this.state.preview) {
            this.setState({
                preview: false,
                buttonText: 'Preview Mode',
            });
        } else {
            this.setState({
                preview: true,
                buttonText: 'Edit Mode',
            });
        }
    }
    render() {
        return (
            <div className="App">
                <button className="switchBtn" onClick={this.switchMode}>
                    Enable {this.state.buttonText}
                </button>
                <div className="resume">
                    <div className="cv-header">
                        <NameInfo />
                        <PersonalInfo />
                    </div>
                    <div className="cv-content">
                        <div className="cv-work-experience">
                            <ExperienceList
                                removeExp={this.removeExp}
                                experiences={this.state.experiences}
                                preview={this.state.preview}
                            />
                            <AddExperience
                                addExp={this.addExperience}
                                preview={this.state.preview}
                            />
                        </div>
                        <div className="cv-education">
                            <EducationList
                                removeEdu={this.removeEdu}
                                educations={this.state.education}
                                preview={this.state.preview}
                            />
                            <AddEducation
                                addEdu={this.addEducation}
                                preview={this.state.preview}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
