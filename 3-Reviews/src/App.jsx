import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa6";
import reviews from "./data";
import "./index.css";

function App() {
  // initialize screen to first
  const [index, setIndex] = useState(0);
  // destructure the reviews
  const { name, job, image, text } = reviews[index];

  // what if number is above below
  const checkNumber = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  // we can also use check number function as well as modulus logic
  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = (currIndex + 1) % reviews.length;

      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = (currIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
      // return checkNumber(newIndex);
    });
  };

  const randomPeople = () => {
    let random = Math.floor(Math.random() * reviews.length + 1);
    setIndex(random % reviews.length);
    // setIndex(checkNumber(random));
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
      <button className="btn btn-hipster" onClick={randomPeople}>
        Surprise me !
      </button>
    </main>
  );
}

export default App;
