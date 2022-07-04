import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ListCards from './pages/ListCards';
import Header from './components/Header';
import ViewCard from './pages/ViewCard';
import './scss/app.scss'

function App() {
  return (
    <Router basename={`${process.env.BASE_URL}`}>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route path={'/'} element={<ListCards />} />
          <Route path={"/card/:id"} element={<ViewCard />} />
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
