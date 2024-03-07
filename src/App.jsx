import './App.css'
import left from './assets/left.png'
import right from './assets/right photo.png';
// import reklama1 from './assets/reklama1.png';
// import reklama2 from './assets/reklama2.png';
// import reklama3 from './assets/reklama3.png';
// import reklama4 from './assets/reklam4.png';
// import reklama5 from './assets/reklama5.png';
// import reklama6 from './assets/reklama6.png';
function App() {

  return (
    <>
      <header className="header">
        <div className="menu">
          <a href="#">Products</a>
          <a href="#">Use cases</a>
          <a href="#">Resources</a>
          <a href="#">About us</a>
        </div>
        <div className="login">
          <a href="#">Log in</a>
          <button>Request a demo</button>
        </div>
      </header>
      <div className="hero">
        <div className="left">
          <h2>Next generation</h2>
          <p>Welcome to the next generation of mobile commerce and customer engagement. Meet your mobile customers where they want to be met.</p>
          <img src={left} alt="left" />
        </div>
        <div className="img">
          <img src={right} alt="right" />
        </div>
      </div>
      <div className="reklama">
        <h4>Used by industry leaders</h4>
        <div className="reklama-photo">
          {/* <img src={reklama1} alt="Reklama img" />
          <img src={reklama2} alt="Reklama img" />
          <img src={reklama3} alt="Reklama img" />
          <img src={reklama4} alt="Reklama img" />
          <img src={reklama5} alt="Reklama img" />
          <img src={reklama6} alt="Reklama img" /> */}
        </div>
      </div>
      <div className="main">
        <h1>Make mobile journeys easier, faster and frictionless for your clients</h1>
        <div className="container">
        <div className="block">
            <h4>Easy to use</h4>
            <p>A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required.
            Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.
            </p>
          </div>
          <div className="block">
            <h4>Revenue driving</h4>
            <p>Companies in the USA are claiming over 18.5% of online revenue is being generated from mobile commerce initiatives. With 100% views, 90% plus open rates and CTR's like the very early days of email, you can be confident your mobile marketing is being seen and your efforts aren’t going to waste.</p>
          </div>
          <div className="block">
            <h4>Integrated with your stack</h4>
            <p>You don't want to be shifting data from platform to platform. intouch has complete set of API’s and Webhooks to enable integration with existing marketing stacks - as well as deep integration with a limited number of marketing platforms.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
