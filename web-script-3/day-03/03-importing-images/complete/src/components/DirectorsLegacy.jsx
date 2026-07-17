const imageFolderPath = import.meta.env.BASE_URL + 'assets/images/';

function DirectorsLegacy() {
    return (
        <div className="kittens-board-of-directors">
            <h3>Board of Directors</h3>
            <ul>
                <li>
                    <div className="board-member">
                        <div className="profile-picture">
                            <img src={`${imageFolderPath}cat-profile-pic-chairman.jpg`} alt="Missy" />
                        </div>
                        <div className="title-and-name">
                            <p><b>Name: </b>Missy</p>
                            <p><b>Position: </b>Chairman</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="board-member">
                        <div className="profile-picture">
                            <img src={`${imageFolderPath}cat-profile-pic-ceo.jpg`} alt="Smokey" />
                        </div>
                        <div className="title-and-name">
                            <p><b>Name: </b>Smokey</p>
                            <p><b>Position: </b>CEO</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="board-member">
                        <div className="profile-picture">
                            <img src={`${imageFolderPath}cat-profile-pic-cfo.jpg`} alt="Oscar" />
                        </div>
                        <div className="title-and-name">
                            <p><b>Name: </b>Oscar</p>
                            <p><b>Position: </b>CFO</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="board-member">
                        <div className="profile-picture">
                            <img src={`${imageFolderPath}cat-profile-pic-cio.jpg`} alt="Max" />
                        </div>
                        <div className="title-and-name">
                            <p><b>Name: </b>Max</p>
                            <p><b>Position: </b>CIO</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="board-member">
                        <div className="profile-picture">
                            <img src={`${imageFolderPath}cat-profile-pic-vp-hr.jpg`} alt="Snowball" />
                        </div>
                        <div className="title-and-name">
                            <p><b>Name: </b>Snowball</p>
                            <p><b>Position: </b>VP, HR</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default DirectorsLegacy;
