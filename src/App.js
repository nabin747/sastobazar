import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes/Routes';
import RoutesMain from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // <ToasContainer>

    // <Router>
      // <AuthProvider>
      <div>

        <RoutesMain />
    <ToastContainer/>

      </div>
      // </AuthProvider>
    // </Router>
  );
}

export default App;
