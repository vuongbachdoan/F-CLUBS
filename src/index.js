import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom/dist';
import { appRouter } from './shared/router';
import "./assets/styles/style.css";
import { Amplify } from 'aws-amplify/lib-esm';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={appRouter}/>
    </NextUIProvider>
  </React.StrictMode>
);
