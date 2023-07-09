import { Dashboard } from './pages/Dashboard';
import { store } from './store/index';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
