import "./LinkComponent.css";

const LinkComponent = () => {
  return (
    <div className="colz-icon">
      <a
        href="https://www.linkedin.com/in/prithvirajsengupta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.facebook.com/prithviraj.sengupta.5/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.instagram.com/sengupta.prithviraj/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube"
      >
        <i className="fa fa-youtube-square" aria-hidden="true"></i>
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default LinkComponent;
