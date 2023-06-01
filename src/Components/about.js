import React from 'react';
import Me from '../image/profile round.jpg'



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
      <img src={Me}
                alt="Jarrett Stavey"
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    outlineStyle: "solid",
                    borderRadius: "100%",
                    width: "250px",
                    height: "250px"
                }}
            ></img>




      
    </div>


  );
}