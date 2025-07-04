import "./ContactMe.css";

import contactMeBackground from "../../assets/contact-me/contact-me-bg.png";
import { ScreenComponentType } from "../../utilities/commonUtils";
import ScreenHeading from "../../component/ScreenHeading";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import loaderGif from "../../assets/contact-me/load2.gif";
import FadeIn from "../../utilities/FadeIn";

const ContactMe = ({ id }: ScreenComponentType) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event?.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
  };

  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event?.target.value);
  };

  const submitForm = async (event: React.FormEvent) => {
    event?.preventDefault();

    try {
      let data = {
        name: name,
        email: email,
        message: message,
      };

      setBool(true);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/contact`,
        data
      );

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(response.data.msg);
        toast.error(response.data.msg);
        setBool(false);
      } else if (response.status === 200) {
        setBanner(response.data.msg);
        toast.success(response.data.msg);
        setBool(false);
        setBanner(response.data.msg);
        toast.error(response.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setBool(false);
      setBanner("Something went wrong. Please try again later.");
      console.log(error);
    }
  };

  return (
    <FadeIn>
      <div className="main-container" id={id || "contact-me"}>
        <ScreenHeading
          title="Contact "
          highlightedTitle="Me"
          subHeading="If you require any clarification regarding my CV, please don’t hesitate to contact me."
        />

        <div className="central-form">
          <div className="col">
            <h2 className="title">
              <Typewriter
                words={["Front-End Developer", "React Developer"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>

            <div>
              <a
                href="https://www.linkedin.com/in/prithvirajsengupta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/prithviraj.sengupta.5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/sengupta.prithviraj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-square" aria-hidden="true"></i>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>

            <div className="back-form">
              <div className="img-back">
                <h4>Feel free to send me an email</h4>
                <img src={contactMeBackground} alt="background not found" />
              </div>

              <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleName} value={name} />

                <label htmlFor="email">Email</label>
                <input type="email" onChange={handleEmail} value={email} />

                <label htmlFor="message">Message</label>
                <textarea onChange={handleMessage} value={message} />

                <div className="send-btn">
                  {bool ? (
                    <p className="load">
                      <img src={loaderGif} alt="no loader" />
                    </p>
                  ) : (
                    <button type="submit" className="btn highlighted-btn">
                      send
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactMe;
