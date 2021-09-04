
import '../style/index.css';
import Bar from '../component/Navbar';
import PGrid from './ProductGrid';
import CheckoutPages from '../component/CheckoutPage';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import SignInSide from './Singin';
import SingUps from './SingUp';






function App() {
  return(
    <Router>
    <div className="App">
    <Bar/>
    <Switch>
      <Route path="/checkout-pages">
        <CheckoutPages/>
      </Route>
      <Route path="/InicioSession">
        <SignInSide></SignInSide>
      </Route>
      <Route path="/Registration">
        <SingUps></SingUps>
          </Route>
      <Route path="/">
          <PGrid/>
      </Route>
    </Switch>

    </div>
    </Router>
  )
  
}

export default App;
