import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';
import FormInput from './Components/FormInput';
import NotesList from './Components/NotesList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                Timestamped Notes App
              </div>
              <FormInput />
              <hr />
              <NotesList />
            </div>
          </div>
        </div>

      </div>
    </Provider>
  );
}

export default App;
