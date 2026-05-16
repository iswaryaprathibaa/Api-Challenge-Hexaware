import { Link } from "react-router-dom";
import "../../App.css"
const HomeContent=()=>{
    return(<>
    <section className="hero-section">

  <div className="hero-content">

    <h1>
      Manage Your Library With Confidence
    </h1>

    <p>
      BookVault is a secure and modern book management platform
      powered by JWT authentication and Spring Boot APIs.
      Organize, search, update, and manage books seamlessly.
    </p>

    <div className="hero-buttons">
        <Link to="/signup">
      <button className="primary-btn">
        Explore Books
      </button>
      </Link>

        <Link to="/faq">
      <button className="secondary-btn">
        Learn More
      </button>
      </Link>

    </div>

  </div>

</section>
<section className="features-section">

  <h2>
    Why Choose BookVault?
  </h2>

  <div className="features-grid">

    <div className="feature-card">

      <div className="feature-icon">
        🔐
      </div>

      <h3>
        Secure Authentication
      </h3>

      <p>
        JWT-based authentication ensures secure access
        and protected book management operations.
      </p>

    </div>

    <div className="feature-card">

      <div className="feature-icon">
        📚
      </div>

      <h3>
        Easy Book Management
      </h3>

      <p>
        Add, update, delete, and search books
        with a clean and user-friendly interface.
      </p>

    </div>

    <div className="feature-card">

      <div className="feature-icon">
        ⚡
      </div>

      <h3>
        Fast REST APIs
      </h3>

      <p>
        Built using Spring Boot REST APIs
        for fast and scalable performance.
      </p>

    </div>

  </div>

</section>
    </>)
}
export default HomeContent;