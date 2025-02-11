import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import PrivateRoute from './routes/PrivateRoute';
import


  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <TaskListPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/task/:id"
            element={
              <PrivateRoute>
                <TaskDetailsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    );
  }

export default App;
