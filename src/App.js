import React from 'react';

function Food({ favorite }) {
  //console.log(props.fav);
  //props.fav 와 { fav }는 같다 
  //function Food(props)
  //<h1>I like {props.fav}</h1>;
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite ="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
    </div>
  );
}

export default App;
