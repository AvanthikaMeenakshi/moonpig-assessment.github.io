import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ListCards from './pages/ListCards';
import Header from './components/Header';
import './scss/app.scss'

function App() {
  return (
    <Router>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<ListCards />} />
        </Routes>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root') as HTMLElement;
const documentRoot = ReactDOM.createRoot(rootElement);
documentRoot.render(
  <App />,
);
