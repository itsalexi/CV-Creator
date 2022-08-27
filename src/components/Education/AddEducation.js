import { useState } from 'react';
import uniqid from 'uniqid';
import './AddEducation.css';

const AddEducation = (props) => {
    const [adding, setAdding] = useState(false);
    let education = {
        schoolName: 'Sample University',
        degree: 'Degree of Wow',
        from: '2019',
        to: '2021',
        description: 'Hey this is an example!',
        id: uniqid(),
    };

    const handleOnChange = (event) => {
        let key = event.target.id;
        education[key] = event.target.value;
    };

    const toggleMode = () => {
        setAdding(!adding);
    };

    const addEducation = () => {
        let newEducation = education;
        props.addEdu(newEducation);
        reset();
        toggleMode();
    };

    const cancel = () => {
        reset();
        toggleMode();
    };

    const reset = () => {
        education = {
            schoolName: 'Sample University',
            degree: 'Degree of Wow',
            from: '2019',
            to: '2021',
            description: 'Hey this is an example!',
            id: uniqid(),
        };
    };

    if (!props.preview) {
        if (!adding) {
            return (
                <div className="add-education">
                    <button className="addEdu" onClick={toggleMode}>
                        + Add Education
                    </button>
                </div>
            );
        } else {
            return (
                <div className="add-education">
                    <form className="add-form">
                        <input
                            type="text"
                            id="schoolName"
                            placeholder="School Name"
                            onChange={handleOnChange}
                        ></input>
                        <input
                            type="text"
                            id="degree"
                            placeholder="Degree"
                            onChange={handleOnChange}
                        ></input>
                        <div className="fromTo">
                            <input
                                type="text"
                                id="from"
                                placeholder="From (YYYY)"
                                onChange={handleOnChange}
                            ></input>
                            <input
                                type="text"
                                id="to"
                                placeholder="To (YYYY)"
                                onChange={handleOnChange}
                            ></input>
                        </div>
                        <textarea
                            id="description"
                            onChange={handleOnChange}
                            rows="5"
                            cols="50"
                            placeholder="Descriptions or Achievements"
                        ></textarea>
                    </form>
                    <div className="button-group">
                        <button className="addEdu" onClick={addEducation}>
                            + Add Education
                        </button>
                        <button className="cancelBtn" onClick={cancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            );
        }
    }
};

export default AddEducation;
