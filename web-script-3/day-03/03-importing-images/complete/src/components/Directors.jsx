// Directors.jsx

// All JPGs in src/images
const images = import.meta.glob("/src/images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const getImageUrl = (filename) => {
  const path = `/src/images/${filename}`;
  const url = images[path];

  if (!url) {
    return "https://placehold.co/600x600";
  }

  return url;
};

function Directors() {
  return (
    <div className="kittens-board-of-directors">
      <h3>Board of Directors</h3>
      <ul>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img
                src={getImageUrl("cat-profile-pic-chairman.jpg")}
                alt="Missy"
              />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Missy
              </p>
              <p>
                <b>Position: </b>Chairman
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={getImageUrl("cat-profile-pic-ceo.jpg")} alt="Smokey" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Smokey
              </p>
              <p>
                <b>Position: </b>CEO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={getImageUrl("cat-profile-pic-cfo.jpg")} alt="Oscar" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Oscar
              </p>
              <p>
                <b>Position: </b>CFO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img src={getImageUrl("cat-profile-pic-cio.jpg")} alt="Max" />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Max
              </p>
              <p>
                <b>Position: </b>CIO
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="board-member">
            <div className="profile-picture">
              <img
                src={getImageUrl("cat-profile-pic-vp-hr.jpg")}
                alt="Snowball"
              />
            </div>
            <div className="title-and-name">
              <p>
                <b>Name: </b>Snowball
              </p>
              <p>
                <b>Position: </b>VP, HR
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Directors;
