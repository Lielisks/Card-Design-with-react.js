import './App.css';
import './Navbar.css';
import 'bulma/css/bulma.css';
import  People  from './People';
import Frontend from './Faces/frontend.jpg'; 
import Leader from './Faces/leader.jpg'; 
import Backend from './Faces/backend.jpg'; 
import Logo from './Faces/logo1.png';

function App() {
  return (

  <div className="App">

{/* <nav class="navbar bg-dark navbar-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src={Logo} width="100" height="100"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        About
      </a>

      
      <a class="navbar-item">
        Portfolio
      </a>

      <a class="navbar-item">
        Services
      </a>

      <a class="navbar-item">
        Contact
      </a>

    </div>

  </div>
</nav> */}
       <header className="header">
       <nav>
         <a href="#" className="logo">Frontend Developer</a>
            <div className="nav-links">
              <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">SERVİCES</a></li>
                <li><a href="">PORTFOLİO</a></li>
                <li><a href="">CONTACT</a></li>
              </ul>
            </div>
       </nav>
       </header>
   

       <div className="container">
    <section className="section">
        <div className="columns">
        <div className="column">
          <People 
          images={Frontend}
          title="John Hamilton"
          subtitle="Frontend Developer"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Officia nam reiciendis veritatis, animi ea repellat 
          vitae voluptates totam consequatur enim cumque deleniti, dolores sint vero."/>
       </div>

      <div className="column">
          <People
           images={Leader}
           title="Micheal Ortega"
           subtitle="Team Leader"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Officia nam reiciendis veritatis, animi ea repellat vitae voluptates 
           totam consequatur enim cumque deleniti, dolores sint vero."/>
      </div>

      <div className="column">
           <People
           images={Backend}
           title="Alice Wonderland"
           subtitle="Graphic Designer"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Officia nam reiciendis veritatis, animi ea repellat vitae voluptates 
           totam consequatur enim cumque deleniti, dolores sint vero."/>
      </div> 
     
       </div>
    </section>    
 
        

    </div>

  </div>
  );
}

export default App;
