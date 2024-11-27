import { useContext, useState } from "react";
import { IComment } from "../../Interface/Interfaces";
import { Link, useParams } from "react-router-dom";
import { UserConntext } from "../../Provider/UserProvider";
import useFatch from "../../Hooks/useFetch";

interface Prop {
  comments: IComment[];
}

export default function CommentsComponent({ comments }: Prop) {
  const [content, setContent] = useState<string>("");
  const user = useContext(UserConntext);
  const { id } = useParams();
  const { editFetch } = useFatch(`http://localhost:3040/post/`);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    editFetch(id!, { content });    
  }
  console.log(comments);
  return (
    <div>
      <div>
        {comments.map((c) => (
          <p style={{background: '#9e8d24', padding: '5px', borderRadius: '20px'}}>
            {c.content}
          </p>
        ))}
      </div>
      <div>
        {user?.user ? (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></input>
              <button type="submit">Send</button>
            </form>
          </div>
        ) : (
          <div>
            <h3>Before You adding comment you need to Register</h3>
          <button>
            <Link to={"/"}></Link>Register
          </button>
          </div>
          
        )}
      </div>
    </div>
  );
}
