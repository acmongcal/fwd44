function Header({
    title = "My Default App Title",
    slogan = "The default slogan"
}) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{slogan}</h2>
    </header>
  );
}

// export const Header = () => {
//     return(
//         <header>
//             <h1>My First App</h1>
//             <h2>The best App Ever</h2>
//         </header>
//     );

// }

export default Header;
