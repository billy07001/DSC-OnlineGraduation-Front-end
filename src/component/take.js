import '../style/App.css';
import '../style/takepage.css';
import '../style/main.css';
import logo from '../view/logo.png';
import ocean from '../view/ocean.png';
import president from '../view/president.png';

const studentName = window.localStorage.getItem("username");
const nowdate = new Date();
const now = (nowdate.getMonth() + 1) + "/" + nowdate.getDate() + "/" + nowdate.getFullYear();

function Take() {
    return (
        <div className="App-header">
            <div>
                <div class="container box-shadow">
                    <div class="topimg">
                        <img class="university" src={logo} alt="represent" />
                    </div>
                    <header class="header">
                        <p class="certificate">Certificate</p>
                    </header>

                    <div class="contentdiv">
                        <p class="content">Congruation, Mr./Mrs	{studentName} complete all of four years courses in National Taiwan Ocean University from department of Management information . It is given in Taiwan ,day of {now} .</p>
                    </div>
                    <div class="imginline">
                        <img class="president" src={president} alt="president" />
                        <img class="ocean" src={ocean} alt="ocaen" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Take;