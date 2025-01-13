import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  /* 
   * renderPage() reads the currentPage state that the user selected,
   *  then returns the matching jsx component's name 
   *
   */
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* The currentPage prop holds the name of the page that's currently active.
          The handlePageChange prop is a callback function that NavTabs uses to set the 
          page that the user selects */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* This executes the renderPage() callback to add the selected jsx component
          name inside the html main elemnt to redirect to the page that the user
          selected */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
