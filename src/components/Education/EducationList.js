import { Component } from 'react';
import Education from './Education';

class EducationList extends Component {
    render() {
        const { educations, removeEdu } = this.props;
        return (
            <div className="experience-list">
                <h2>Education</h2>
                {educations.map((education) => {
                    return (
                        <div key={education.id} className="cv-experience">
                            <Education
                                removeEdu={removeEdu}
                                education={education}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default EducationList;
