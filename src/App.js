import { useEffect, useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import {Routes,Route, useLocation} from 'react-router-dom'
import { Pageabout } from './pages/Pageabout';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { PricingPage } from './pages/PricingPage';
import { PackagePage } from './pages/PackagePage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { EDOnlinePage } from './pages/EDOnlinePage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { ErrorPage } from './pages/ErrorPage';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { ProjectDetailPage } from './pages/ProjectDetail';
import { FAQPage } from './pages/FAQPage';
import "./App.css";
import { Project } from './pages/Project';
import { PreLoad } from './Components/Header/PreLoad';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <>
    {isLoading ? (
      <PreLoad />
    ) : (
      <>
        <Header />
        <Routes>
          {/* Your routes go here */}
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" element={<Pageabout />} />
          <Route path="/Ed-online" element={<EDOnlinePage />} />
          <Route path="/courses" element={<PackagePage />} />
          <Route path="/courses/:name" element={<PackageDetailPage />} />
          <Route path="/service/:name" element={<ServiceDetail />} />
          <Route path="/:name" element={<BlogDetail />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/Car-available-for-drive" element={<ProjectDetailPage />} />
          <Route path="/students" element={<Project />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </>
    )}
  </>
  );
}

export default App;
