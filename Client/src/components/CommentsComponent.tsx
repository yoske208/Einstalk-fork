import React from 'react'
import { IComment } from '../Interface/Interfaces'

interface Prop {
    comments: IComment[]
}

export default function CommentsComponent({comments}: Prop) {
    comments = []
  return (
    <div>
        {comments.map((c) => 
            <p>{c.content} {c.author}</p>
        )}
    </div>
  )
}
