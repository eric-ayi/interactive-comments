import "./newComment.css";
let reply;



const NewReply = ({ setNewReply, parentId, addNewReply, currentUser }) => {

  return (
    <div className="newComment">
      <div className="avatarColumn">
        <img
          className="avatarReply"
          src={currentUser.image.png}
          alt="current user avatar"
        />
      </div>

      <div className="inputColumn">
        <textarea
          className="replyInput"
          placeholder="Add a reply..."
          onChange={(e) => {
            reply = e.target.value;
          }}
       
        ></textarea>
      </div>

      <div className="sendColumn">
        <button
          className="sendButton"
          onClick={() => {
            addNewReply(parentId, reply);
            setNewReply(false);
            
          }}
        >
          REPLY
        </button>
      </div>
    </div>
  );
};

export default NewReply;
