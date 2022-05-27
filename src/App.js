import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Schedule from './pages/Schedule';
import ChangeTask from './pages/ChangeTask';
import ExcludeTask from './pages/ExcludeTask';
import NotFound from './pages/NotFound';
import CreateTask from './pages/CreateTask';

const App = () => (
  <Routes>
    <Route exact path="/" element={ <Schedule /> } />
    <Route path="/changetask" element={ <ChangeTask /> } />
    <Route path="/excludetask" element={ <ExcludeTask /> } />
    <Route path="/createtask" element={ <CreateTask /> } />
    <Route path="*" element={ <NotFound /> } />
  </Routes>
);

export default App;
