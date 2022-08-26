import { Component } from 'react';
import WorkExperience from './WorkExperience';
import './ExperienceList.css';
class ExperienceList extends Component {
    render() {
        const { experiences, removeExp, preview } = this.props;
        return (
            <div className="experience-list">
                <h2>Work Experiences</h2>
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id} className="cv-experience">
                            <WorkExperience
                                removeExp={removeExp}
                                work={experience}
                                preview={preview}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ExperienceList;
