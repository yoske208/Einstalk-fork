import { useContext, useState } from "react";
import { IComment } from "../Interface/Interfaces";
import { Link, useParams } from "react-router-dom";
import { UserConntext } from "../Provider/UserProvider";
import useFatch from "../Hooks/useFetch";

interface Prop {
  comments: IComment[];
}

export default function CommentsComponent({ comments }: Prop) {
  comments = [];
  const [content, setContent] = useState<string>("");
  const user = useContext(UserConntext);
  const { id } = useParams();
  const { editFetch, data } = useFatch(`http://localhost:3040/post/`);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
    console.log(id);

    editFetch(id!, { content });
    console.log(data);
  }
  return (
    <div>
      <div>
        {comments.map((c) => (
          <p>
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
          <button>
            <Link to={"/"}></Link>Register
          </button>
        )}
      </div>
    </div>
  );
}
