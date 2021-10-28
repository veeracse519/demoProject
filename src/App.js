import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MealDb from './components/MealDB';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Router>
    <Switch>
      <Provider store={store}>
      <Route exact path="/" component={MealDb}/>
      </Provider>
    </Switch>
  </Router>
  );
}

export default App;
