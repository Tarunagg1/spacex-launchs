import './App.css';
import { Fragment } from 'react';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Fragment>
          <ToastContainer />
          <div className="app">
              <Home />
          </div>
      </Fragment>
  );
}

export default App;
