const Header = ({
  title = "My Default App title",
  slogan = "The default Slogan",
}) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{slogan}</h2>
    </header>
  );
};

// Deprecated Approach. See this blog https://react.dev/blog/2024/04/25/react-19-upgrade-guide
// Header.defaultProps = {
//     title: 'My default App title',
//     slogan: 'The default slogan'
// }

export default Header;
