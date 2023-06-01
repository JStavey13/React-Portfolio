import React from 'react';


function Footer() {
    return (
        <footer 
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          
          backgroundColor: '#a6aeba'


        }}
          class="footer">
  <div class="content has-text-centered" style={{ color: 'black', fontSize: '15px' }}>
    <p class="footer-text">
      <strong>Portfolio</strong> by <a href="https://github.com/jstavey13">Jarrett Stavey</a>. The source code is licensed as:
      <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. 
      designed using <a href='https://getbootstrap.com/'>Bootstrap</a> and sourced on <a href='https://github.com/jstavey13/react-portfolio'>Github</a>.
    </p>
  </div>
</footer>
    )
   };

  
  export default Footer;