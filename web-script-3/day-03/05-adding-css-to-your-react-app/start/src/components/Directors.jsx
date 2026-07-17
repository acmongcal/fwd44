import BoardMember from "./BoardMember";
import boardMembersList from "../data/board-members-list";

const images = import.meta.glob("/src/images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const getImageUrl = (filename) => {
  const path = `/src/images/${filename}`;
  const url = images[path];

  return url || "https://placehold.co/600x600";
};

function Directors() {
  return (
    <div className="kittens-board-of-directors">
      <h3>Board of Directors</h3>
      <ul>
        {boardMembersList.map((member) => (
          <li key={member.position}>
            <BoardMember
              name={member.name}
              position={member.position}
              image={getImageUrl(member.picture)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directors;
