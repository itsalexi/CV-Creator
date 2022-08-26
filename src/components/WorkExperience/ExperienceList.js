import { Component } from 'react';
import WorkExperience from './WorkExperience';
import './ExperienceList.css';
class ExperienceList extends Component {
    render() {
        const { experiences, removeExp } = this.props;
        return (
            <div className="experience-list">
                <h2>Work Experiences</h2>
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id} className="cv-experience">
                            <WorkExperience
                                removeExp={removeExp}
                                work={experience}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ExperienceList;
