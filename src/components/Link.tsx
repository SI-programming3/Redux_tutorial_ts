import React from "react";

const Link: any = (onClick: () => any, active: boolean, children: any) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </button>
);

export default Link;

/*
onClickには() => dispatch(setVisibilityFilter(ownProps.filter))が入っている。
Allが押されている状態でActiveを押したとすると、onClickによってstateの更新が入り、
  FilterLink内のstate.visibilityFilterの中身が変わり、activeの真偽値が更新され、
  Allが押せるようになり、Activeが押せなくなる。
childrenは、FooterにてFilterLinkタグで囲った部分が入る。つまりこの場合、AllやActiveが入る。
nodeという形で定義されているので、タグで囲まれたやつとかでもchildrenとして渡すことができる。
*/
