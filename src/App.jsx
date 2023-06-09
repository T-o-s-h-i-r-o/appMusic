import Nav from './jsx/nav';
import CenterBlock from './jsx/centerBlock';
import SideBar from './jsx/sidebar';
import Bar from './jsx/bar';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
        <div className='container'>
            <div className='main'>
                <Nav />
                <CenterBlock />
                <SideBar />
                <Bar />
            </div>
        </div>
    </div>
)
}

export default App;
