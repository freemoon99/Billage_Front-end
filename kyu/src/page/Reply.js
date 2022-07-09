import React, { useState, useRef, useCallback } from 'react';
import Template from '../component/Template';
import CommentInput from '../component/commentInput';
import Comment from '../component/Comment';


function Reply() {

  const [comments, setComments] = useState([
    { id: 1, name: 'KIT BILLAGE TEAM', content: 'WELCOME!!', }
  ]);

  const [like, setLike] = useState(0);  //좋아요 버튼구현


  const nextId = useRef(1);

  const onInsert = useCallback(
    (name, content) => {
      const comment = {
        id: nextId.current,
        name,
        content
      };
      console.log(name);
      console.log(content);
      setComments(comments => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );


  return (
    <div>
      <Template>
        <h3>댓글을 남겨주세요</h3>
        <CommentInput onInsert={onInsert} />
      </Template>
      <div style={{ marginBottom: "4rem" }}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Reply;
