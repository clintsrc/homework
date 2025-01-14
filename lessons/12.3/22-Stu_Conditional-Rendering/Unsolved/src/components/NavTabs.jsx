// TODO: Add a comment explaining how we are able to extract the key value pairs from props
/*
 * React lets you extract key-value pairs from props using destructuring. 
 * It lets you to unpack array values (or object properties) and store them in 
 * variables in order to simplify access to the values
 *
 */

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          {/* 
            This is a ternary operator, checking for absoulte equality (variable value and type).
            When the user clicks the Home page link this sets the link to active if it isn't already
            */}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
          {/* When the user clicks the About page link this sets the link to active if it isn't already */}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing
          {/* When the user clicks the Blog page link this sets the link to active if it isn't already */}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          {/* When the user clicks the Contact page link this sets the link to active if it isn't already */}
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
