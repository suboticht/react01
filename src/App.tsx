import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Layout from './layout';
import routes from './routes';

function App() {
  return  <Router>
    <Routes>
      {routes.map((route, index) => {
        const Page = route.component;
        return <Route 
          key={route.key}
          path={route.path} 
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />;
        })};
    </Routes>
</Router>;
}

export default App;
