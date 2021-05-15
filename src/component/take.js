import '../style/App.css';
import '../style/takepage.css';
import diploma from '../view/diploma.jpg';

const studentName = window.localStorage.getItem("username");

function Take() {
    return (
        <div className="App-header">
            <div>
                <img className="diploma" src={diploma} alt="Diploma" />
                <p>姓名：{studentName}</p>
            </div>
        </div>
    );
}

export default Take;