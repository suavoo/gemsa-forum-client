import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import configureStore from './store/configureStore';
import reportWebVitals from './reportWebVitals';
import ReactModal from "react-modal";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
        <BrowserRouter>
          <ErrorBoundary>{[<App key='App' />]}</ErrorBoundary>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactModal.setAppElement("#root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
