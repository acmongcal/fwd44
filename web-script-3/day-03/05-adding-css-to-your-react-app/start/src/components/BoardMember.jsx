function BoardMember({name, position, image}) {
    return (
        <div className="board-member">
            <div className="profile-picture">
                <img src={image} alt={`${position} of the Kitten's Group Inc. - ${name}`} />
            </div>
            <div className="title-and-name">
                <p><b>Name: </b>{name}</p>
                <p><b>Position: </b>{position}</p>
            </div>
        </div>
    );
}

export default BoardMember;
