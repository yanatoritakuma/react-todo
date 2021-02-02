import React from 'react';

export const IncompleteTodo = (props) => {
  const { incompleteTodo, onClickComplete, onClickDelete } = props;
  return(
    <div className="incomplete-area">
      <p className="title">未完了リスト</p>
      <ul>
        {incompleteTodo.map((todo, index) => {
          return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickComplete(index)}>完成</button>
            <button onClick={ () => onClickDelete(index)}>削除</button>
          </div>
          );
        })}
      </ul>
   </div>
  );
};