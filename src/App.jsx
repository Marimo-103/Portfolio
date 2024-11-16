import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route index  element={ <Home /> }/>
      <Route path='/resume'  element={ <Resume /> }/>
      <Route path='/portfolio'  element={ <Portfolio /> }/>
      <Route path='/contact'  element={ <Contact /> }/>

    </Route>
  )
);






const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App