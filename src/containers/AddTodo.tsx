import React from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  let input: any;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          console.log(input.value);
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

/*
onSubmitは送信ボタン（submit）が押された時に起動するイベント。
preventDefaultはイベントをキャンセルできる時にキャンセルする関数。
  イベントはテキストエリアの入力やチェックボックスのチェックなど。
  この場合typeがsubmitのボタンが押された時にフォームを送信し送信先のURLに飛ばないようにしている
inputのところはコールバックref。 この場合nodeの中にはDOM要素の参照が入っている。
  .valueでinputの際の値が出せる。

dispatch:Functionだとダメでdispatch{dispatch:Function}なら良い理由がわからない。

*/
