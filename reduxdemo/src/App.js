import logo from './logo.svg';
import './App.css';
import CakeCOntainer from './components/CakeCOntainer';
import { Provider } from 'react-redux';
import store from './components/redux/Store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCOntainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
