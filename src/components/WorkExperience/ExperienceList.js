import { Component } from 'react';
import WorkExperience from './WorkExperience';

class ExperienceList extends Component {
    render() {
        const { experiences } = this.props;
        return (
            <div className="experience-list">
                <h2>Work Experiences</h2>
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id} className="cv-experience">
                            <WorkExperience jobName={experience.companyName} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ExperienceList;
