import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-l from-black via-blue-1050 to-blue-900 backdrop-blur-lg">
      <div className="container p-5 mx-auto">
        <div className="rowFooter">

          <div className='flex items-center justify-between'>
            <h1>Nexstep</h1>
          </div>
          <div>
            <h1>Menu</h1>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/Faq">Faq</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
