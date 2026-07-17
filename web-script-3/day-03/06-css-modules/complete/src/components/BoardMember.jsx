import styles from "../styles/BoardMember.module.css";

function BoardMember({ name, position, image }) {
  return (
    <div className={styles.boardMember}>
      <div className={styles.profilePicture}>
        <img
          src={image}
          alt={`${position} of the Kitten's Group Inc. - ${name}`}
        />
      </div>
      {/*
      If you can't change CSS to camel case, use bracket notation. 
      
      If you want add more classes on top of CSS Module then just use template literals.

      <div className={`${s['board-member']} card shadow-lg`} >

      */}
      <div className={styles.titleAndName}>
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Position: </b>
          {position}
        </p>
      </div>
    </div>
  );
}

export default BoardMember;
