import TextField from '../TextField/TextField';

const Education = (props) => {
    const { education, preview } = props;
    const { schoolName, degree, from, to, description } = education;

    const removeEducation = () => {
        props.removeEdu(this.props.education.id);
    };
    if (!preview) {
        return (
            <div className="work-experience hover">
                <div className="edu-left">
                    <TextField text={schoolName} id="schoolName" />
                    <TextField text={`${from} - ${to}`} id="fromTo" />
                </div>
                <div className="edu-right">
                    <TextField id="companyRole" text={degree} />
                    <TextField id="edu-description" text={description} />
                </div>
                <button className="removeExperience" onClick={removeEducation}>
                    X
                </button>
            </div>
        );
    } else {
        return (
            <div className="work-experience hover">
                <div className="edu-left">
                    <TextField text={schoolName} id="schoolName" />
                    <TextField text={`${from} - ${to}`} id="fromTo" />
                </div>
                <div className="edu-right">
                    <TextField id="companyRole" text={degree} />
                    <TextField id="edu-description" text={description} />
                </div>
            </div>
        );
    }
};

export default Education;
