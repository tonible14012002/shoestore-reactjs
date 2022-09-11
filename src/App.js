import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routers';
import DefaultLayout from  './layouts/defaultLayout'
import { Fragment } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './cart';

function App() {

  return (
    <CartProvider>
      <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = DefaultLayout
              if (route.layout){
                Layout = route.layout
              }
              else if (route.layout === null){
                Layout = Fragment
              }
              return (
                <Route 
                  key={index} path={route.path} 
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  } 
                  />
              )
            })}
          </Routes>
      </Router>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;