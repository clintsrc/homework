import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

async function enableMocking() {
  //TA Mike made the following change
  // if(process.env.NODE_ENV !== 'development') {
  if(import.meta.env.MODE !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
