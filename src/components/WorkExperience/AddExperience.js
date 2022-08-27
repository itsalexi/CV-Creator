import { useState } from 'react';
import uniqid from 'uniqid';
import './AddExperience.css';
const AddExperience = (props) => {
    const [adding, setAdding] = useState(false);
    let experience = {
        companyName: 'Company Name',
        role: 'Example Role',
        from: '2019',
        to: '2021',
        description: 'Hey this is an example!',
        id: uniqid(),
    };

    const handleOnChange = (event) => {
        let key = event.target.id;
        experience[key] = event.target.value;
    };

    const toggleMode = () => {
        setAdding(!adding);
    };

    const addExperience = () => {
        let newExperience = experience;
        props.addExp(newExperience);
        reset();
        toggleMode();
    };

    const cancel = () => {
        reset();
        toggleMode();
    };

    const reset = () => {
        experience = {
            companyName: 'Company Name',
            role: 'Example Role',
            from: '2019',
            to: '2021',
            description: 'Hey this is an example!',
            id: uniqid(),
        };
    };

    if (!props.preview) {
        if (!adding) {
            return (
                <div className="add-experience">
                    <button className="addExpBtn" onClick={toggleMode}>
                        + Add Experience
                    </button>
                </div>
            );
        } else {
            return (
                <div className="add-experience">
                    <form className="add-form">
                        <input
                            type="text"
                            id="companyName"
                            placeholder="Company Name"
                            onChange={handleOnChange}
                        ></input>
                        <input
                            type="text"
                            id="role"
                            placeholder="Company Role"
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
                        <button className="addExpBtn" onClick={addExperience}>
                            + Add Experience
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
export default AddExperience;
