import { IComment } from '../Interface/Interfaces'

interface Prop {
    comments: IComment[]
}

export default function CommentsComponent({comments}: Prop) {
    comments = []
    // const checkUserName = async () => {
    //   if (document.cookie) {

    //   }
    // }
    
  return (
    <div>
        {comments.map((c) => 
            <p>{c.content} {c.author}</p>
        )}
        {/* <input type='text' onClick={checkUserName}></input> */}
    </div>
  )
}
