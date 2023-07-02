import React from 'react'
import Comment from './Comment'

const Comments = (props) => {

  if (props.postComments != undefined && props.postComments.length > 0) {
    return <div>
      {
        props.postComments.map(comment => {
          return <Comment  singleComment={comment} key={comment.id}/>
          
        })
      }
    </div>
      
  } else {
    return <div>
      <h5>No Comments</h5>
    </div>
  }

}

export default React.memo(Comments)

