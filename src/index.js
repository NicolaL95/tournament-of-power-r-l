import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Homepage from './views/Homepage/Homepage';
import Characters from './views/Characters/Characters';
import Contacts from './views/Contacts/Contacts';
import Timeline from './views/Timeline/Timeline';
import DefaultChildComponent from './components/DefaultChildComponent'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import CharacterDetail from './views/Characters/CharacterDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="characters" element={<DefaultChildComponent/>}>
        <Route index element={<Characters />} />
        <Route path=":id" element={<CharacterDetail />} />
      </Route>
      <Route path="contacts" element={<Contacts />} />
      <Route path="timeline" element={<Timeline />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);