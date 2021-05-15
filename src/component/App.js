import '../style/App.css';
import { Route } from "react-router-dom";
import Index from './index';
import Gift from './gift';
import Login from './login';
import Photo from './photo';
import Sign from './sign';
import Stream from './stream';
import Take from './take';

import Topnav from './nav';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Route exact path="/" component={Index} />
      <Route exact path="/gift" component={Gift} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/photo" component={Photo} />
      <Route exact path="/sign" component={Sign} />
      <Route exact path="/stream" component={Stream} />
      <Route exact path="/take" component={Take} />
      

    </div>
  );

}



export default App;
