import logo from './logo.svg';
import './App.css';
import CakeCOntainer from './components/CakeCOntainer';
import { Provider } from 'react-redux';
import store from './components/redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCOntainer />
      </div>
    </Provider>
  );
}

export default App;
