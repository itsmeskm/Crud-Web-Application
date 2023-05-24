
import Home from './Components/Home';
import AddEventModal from './Components/AddEventModal';
import { store } from './redux/store/index'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addEventModal" element={<AddEventModal />} />
    </Routes>
      </Router>,
    </Provider>
  );
}

export default App;
