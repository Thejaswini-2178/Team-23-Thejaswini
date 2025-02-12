import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TaskListPage from './pages/TaskListPage';
import TaskFormPage from './pages/TaskDetailsPage';


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/tasks" element={<TaskListPage />} />
                    <Route path="/task/new" element={<TaskFormPage />} />
                    <Route path="/task/:taskId" element={<TaskFormPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;