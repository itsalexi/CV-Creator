import './App.css';
import TextField from './components/TextField/TextField';

function App() {
    return (
        <div className="App">
            <div className="name">
                <TextField className="firstName" text="First Name" />
                <TextField className="lastName" text="Last Name" />
            </div>
        </div>
    );
}

export default App;
