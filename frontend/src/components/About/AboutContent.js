import "../../App.css"
const AboutContent=()=>{
    return(<>
    <section className="about-section">

  <div className="about-content">

    <h2>
      About BookVault
    </h2>

    <p>
      BookVault is a full-stack web application designed
      for efficient book management. It integrates React frontend,
      Spring Boot backend, JWT authentication,
      and database connectivity into a seamless platform.
    </p>

    <p>
      Whether you are an administrator managing collections
      or a user exploring available books,
      BookVault provides a smooth and secure experience.
    </p>

  </div>

</section>
<section className="cta-section">

  <h2>
    Start Managing Your Books Today
  </h2>

  <p>
    Secure, scalable, and modern library management experience.
  </p>

  <button className="cta-btn">
    Get Started
  </button>

</section>
    </>)
}
export default AboutContent;