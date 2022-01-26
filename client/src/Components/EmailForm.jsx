import { useState } from "react";
import "./EmailForm.scss";
import axios from "axios";

export default function EmailForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    status: false,
  });

  const handleStateChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEmail = (e) => {
    e.preventDefault();
    axios.post("/api/email", values).then((res) => {
      setValues({
        name: "",
        email: "",
        message: "",
        status: true,
      }).catch((err) => {
        console.log(err);
        window.alert("Email not sent");
      });
    });
  };

  return (
    <>
      <h1 class="title">Contact Us</h1>
      <br />
      <p class="desc">
        Questions? Concerns? Suggestions? We want to hear it all! Send us a
        message using the form below.
      </p>
      <div class="contact">
        <div className="container">
          <form METHOD="POST" onSubmit={submitEmail}>
            {/* single item */}

            <div className="single-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="name"
                placeholder="Your name"
                value={values.name}
                onChange={handleStateChange}
              />
            </div>
            {/* end of single item */}
            <div className="single-item">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="name"
                placeholder="Your email"
                value={values.email}
                onChange={handleStateChange}
              />
            </div>

            <div className="text-area single-item">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="What would you like to say?"
                value={values.message}
                onChange={handleStateChange}
              ></textarea>
            </div>

            {/* <div className="msg">Message has been sent</div> */}
            <div
              className="msg"
              style={{ display: values.status ? "block" : "none" }}
            >
              Message has been sent
            </div>
            <div className="btn">
              <button type="submit">Send Email</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
