// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// Create a styles object called "styles"
const styles = {
  navbar: {
    backgroundColor: '#008000',
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  nav: {
    color: 'white',
  },
};

function Navbar() {
  // Add a style attribute to `nav`
  return (
    <nav className="navbar" style={styles.navbar}>
      <a href="/" style={styles.nav}>Welcome</a>
    </nav>
  );
}
export default Navbar;
