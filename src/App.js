import Home from './components/Home';
import Info from './components/Info';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/:id' component={Info} />
    </>
  );
}

export default App;
