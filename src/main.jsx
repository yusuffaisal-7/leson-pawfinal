import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // <-- Import toast styles
const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}> 
      <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
        <ToastContainer position="top-center" autoClose={3000} /> {/* <-- Add this */}
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
