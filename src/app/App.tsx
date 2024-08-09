// import * as React from 'react';

import { BrowserRouter } from "react-router-dom";
import { ContextProviders } from "@/contexts/ContextProviders/ContextProviders";
import PrimaryNav from "@/components/nav/PrimaryNav/PrimaryNav";
import PageContainer from "@/components/common/PageContainer/PageContainer";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <PrimaryNav />
        <PageContainer>
          <AppRoutes />
        </PageContainer>
      </BrowserRouter>
    </ContextProviders>
  );
}

export default App;
