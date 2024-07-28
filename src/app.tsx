import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/home';
import ContactDetail from './pages/contactDetail';

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
          refetchInterval: false,
          refetchIntervalInBackground: false,
          refetchOnReconnect: false,
          refetchOnMount: false,
      },
      mutations: {
          retry: false,
      },
  },
});
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-detail/:contactId" element={<ContactDetail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
