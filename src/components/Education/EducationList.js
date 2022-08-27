import Education from './Education';

const EducationList = (props) => {
    const { educations, removeEdu, preview } = props;
    return (
        <div className="experience-list">
            <h2>Education</h2>
            {educations.map((education) => {
                return (
                    <div key={education.id} className="cv-experience">
                        <Education
                            removeEdu={removeEdu}
                            education={education}
                            preview={preview}
                        />
                    </div>
                );
            })}
        </div>
    );
};
export default EducationList;
