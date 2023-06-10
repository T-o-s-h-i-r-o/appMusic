import Nav from './components/Nav';
import CenterBlock from './components/CenterBlock';
import SideBar from './components/Sidebar';
import Bar from './components/Bar';
import './css/style.css';

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
