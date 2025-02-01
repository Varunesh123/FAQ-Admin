import { useState } from "react";
import { createFAQ } from "../api/faqApi";
import { useNavigate } from "react-router-dom";

const FAQForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFAQ({ question, answer });
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="text-center">Create FAQ</h2>
      <form onSubmit={handleSubmit} className="card">
        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FAQForm;
