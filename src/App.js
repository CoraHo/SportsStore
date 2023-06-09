import './App.css';
import {SportsStoreDataStore} from "./data/DataStore";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {ShopConnector} from "./shop/ShopConnector";

function App() {
  return <Provider store={SportsStoreDataStore}>
    <Router>
      <Switch>
        <Route path="/shop" component={ShopConnector} />
        <Redirect to="/shop"/>
      </Switch>
    </Router>
  </Provider>
}

export default App;
