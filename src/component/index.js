import '../style/App.css';
import '../style/index.css';

import gra from '../view/graduation.jpg';

function Index() {
    return (
        <div className="App-header">
            <img className="gra" src={gra} alt="Graduate" />
        </div>
    );
}

export default Index;