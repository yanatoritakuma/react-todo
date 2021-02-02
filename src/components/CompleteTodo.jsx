import React from 'react';

export const CompleteTodo = (props) => {
  const {completeTodo, onClickBack} = props;
  return(
    <div className="complete-area">
    <p className="title">未完了リスト</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return(
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
   </div>
  );
};