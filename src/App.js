
import Home from './Components/Home';
import AddEventModal from './Components/AddEventModal';
import { store } from './redux/store/index'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addEventModal" element={<AddEventModal />} />
    </Routes>
      </HashRouter>,
    </Provider>
  );
}

export default App;
