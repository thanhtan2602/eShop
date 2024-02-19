import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { store } from "./storage";
import { Header, Footer } from './components/layout';
import Home from './components/pages/Home';
import { GoogleSignIn, GoogleSignUp } from './components/pages/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sign-up' element={<GoogleSignUp />}></Route>
          <Route path='/sign-in' element={<GoogleSignIn />}></Route>
        </Routes>
        <Footer />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>
);