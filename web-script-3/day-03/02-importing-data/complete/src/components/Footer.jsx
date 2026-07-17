function Footer({
  author = "BCIT",
  credit = null,
  creditText = null,
  imageCredit = false,
}) {
  const d = new Date();
  const year = d.getFullYear();

  function displayCredits() {
    if (imageCredit === true) {
      if (creditText !== null) {
        return (
          <p>
            Image Credits: <a href={credit}>{creditText}</a>
          </p>
        );
      } else {
        return (
          <p>
            Image Credits: <a href={credit}>{credit}</a>
          </p>
        );
      }
    } else {
      if (creditText !== null) {
        return (
          <p>
            Credits: <a href={credit}>{creditText}</a>
          </p>
        );
      } else {
        return (
          <p>
            Credits: <a href={credit}>{credit}</a>
          </p>
        );
      }
    }
  }

  return (
    <footer>
      {credit !== null && displayCredits()}
      <p>
        &copy; {year} {author}
      </p>
    </footer>
  );
}

export default Footer;
