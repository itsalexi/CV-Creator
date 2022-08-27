import WorkExperience from './WorkExperience';
import './ExperienceList.css';

const ExperienceList = (props) => {
    const { experiences, removeExp, preview } = props;
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
};

export default ExperienceList;
