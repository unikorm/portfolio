
import './App.css';
import router from './router';

import React from 'react';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div id="dark">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;