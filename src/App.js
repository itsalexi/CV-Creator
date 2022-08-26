import './App.css';
// import TextField from './components/TextField/TextField';
import NameInfo from './components/NameInfo/NameInfo';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="resume">
                    <div className="cv-header">
                        <NameInfo />
                        <PersonalInfo />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
