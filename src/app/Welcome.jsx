
import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

function WelcomeList() {
  return (
    <div>
      <Welcome name="Liwei" />
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
  
export default  WelcomeList;