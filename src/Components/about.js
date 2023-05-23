import React from 'react';



export default function About() {

  return (
    <div>
      <h1 style={{
        textAlign: "center",
      }}>{`Hey, I'm `} 
        <strong style={{
        fontSize: "40px",
        marginTop: "20px",
        fontWeight: "bolder",
        textShadow: "1px 1px 1px gray, 2px 2px 1px blue",
        textAlign: "center"}}>
          Jarrett Stavey
          </strong>
        </h1>

      <p style={{
        fontSize: "20px",
        textShadow: "1px 1px 1px white",
        fontWeight: "bold",
        textAlign: "center"
      }}>
A full-stack Javascript web developer, and full-time nerd. I'm on a journey to build cool things and master my craft.
      </p>





      
    </div>


  );
}