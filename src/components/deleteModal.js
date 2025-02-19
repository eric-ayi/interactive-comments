import "./deleteModal.css";

const DeleteModal = ({ id, setDeleteComment, setData, data }) => {
  
  const deleteComment = () => {
    for (let comment of data.comments) {
      if (comment.id === id) {
        const updatedComments = data.comments.filter(
          (comment) => comment.id !== id
        );
        setData((data) => ({
          currentUser: { ...data.currentUser },
          comments: updatedComments,
        }));
        break;
      }
      if (comment.replies.length > 0) {
        for (let reply of comment.replies) {
          if (reply.id === id) {
            const updatedReplies = comment.replies.filter(
              (reply) => reply.id !== id
            );

            comment.replies = updatedReplies;

            setData((data) => ({
              currentUser: { ...data.currentUser },
              comments: data.comments,
            }));
            break;
          }
        }
      }
    }
    setDeleteComment(false);
  };
  

  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="modalTitle">Delete comment</div>
        <div>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </div>
        <div className="buttonsRow">
          {/* changed <span> into <button> */}
          {/* added a button class */}
          <button
            id="cancel"
            className="buttonsRow__buttons "
            onClick={() => setDeleteComment(false)}
          >
            NO, CANCEL
          </button>
          <button
            id="confirm"
            className="buttonsRow__buttons "
            onClick={() => deleteComment()}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
