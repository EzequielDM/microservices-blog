import PropTypes from "prop-types";

const Comments = ({ comments }) => {
  const getRandomUsername = () => {
    const random = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };

    const names = [
      "Lacey",
      "Rodriguez",
      "Shona",
      "Huffman",
      "Cormac",
      "Winter",
      "Avni",
      "Kenny",
      "Amiyah",
      "Rios",
      "Aleeza",
      "Berger",
      "Anushka",
      "Clayton",
      "Leona",
      "Mair",
      "Joy",
      "Fountain",
      "William",
      "Weiss",
      "Ranveer",
      "Hodges",
      "Montgomery",
      "Hale",
      "Julia",
      "Lynn",
      "Siobhan",
      "Gross",
      "Kingston",
      "Denton",
      "Hakim",
      "Fox",
      "Calista",
      "Carter",
      "Dalton",
      "Friedman",
      "Piper",
      "Rutledge",
      "Nate",
      "Hamer",
      "Helen",
      "Ridley",
      "Tashan",
      "Carpenter",
      "Violet",
      "Roth",
      "Kit",
      "O'Neill",
      "Kimora",
      "Andrew",
      "Hattie",
      "Blundell",
      "Ignacy",
      "Burton",
      "Hanifa",
      "Higgs",
      "Kaci",
      "Mcculloch",
      "Lacy",
      "Mackie",
      "Bonnie",
      "Potts",
      "Landon",
      "Crowther",
      "Neriah",
      "Villanueva",
      "Marcel",
      "Davila",
      "Cassian",
      "Moody",
      "Jonathan",
      "Lyons",
      "Skylar",
      "Bellamy",
      "Rhona",
      "Watkins",
      "Bethany",
      "Millington",
      "Ciara",
      "Obrien",
      "Hamzah",
      "Dunlap",
      "Byron",
      "Davidson",
      "Qasim",
      "Olsen",
      "Clodagh",
      "Levy",
      "Hunter",
      "Mcnally",
      "Alexis",
      "Skinner",
      "Sebastian",
      "Bonilla",
      "Cian",
      "Albert",
      "Marcia",
      "Roberson",
      "Ronnie",
      "Brook",
    ];

    return names[random(0, names.length)];
  };

  return (
    <ul className="mx-10 px-2 py-1 text-gray-500 mt-2">
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <li key={comment.id} className="bg-gray-50 border rounded px-2 py-1 mb-3">
            <span className="text-purple-400 font-bold">
              {getRandomUsername()} {getRandomUsername()}
            </span>

            {comment.status === "rejected" ? (
              <p className="ml-1 italic text-red-400">This comment was rejected</p>
            ) : comment.status === "pending" ? (
              <p className="ml-1 italic text-yellow-500">This post is awaiting approval</p>
            ) : (
              <p className="font-mono ml-1">{comment.content}</p>
            )}
          </li>
        ))}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comments;
