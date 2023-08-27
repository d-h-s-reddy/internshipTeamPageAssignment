import './App.css';
import Header from './components/Header'
import University from './components/Universities';
import Mentors from './components/Mentors';
import Advisors from './components/Advisors';
function App() {
  return (
    <div className="App">
        <Header/>
        <University/>
        <Mentors/>
        <Advisors/>
    </div>
  );
}

export default App;
