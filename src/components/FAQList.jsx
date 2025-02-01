import { useEffect, useState } from "react";
import { getFAQs, deleteFAQ } from "../api/faqApi";
import { Link } from "react-router-dom";

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      const data = await getFAQs();
      setFaqs(data);
    };
    fetchFAQs();
  }, []);

  return (
    <div className="card">
      <h2 className="card-header">FAQ List</h2>
      <ul className="faq-list">
        {faqs.map((faq) => (
          <li key={faq._id} className="faq-item">
            <span>{faq.question}</span>
            <div>
              <Link to={`/edit/${faq._id}`} className="btn-edit">Edit</Link>
              <button onClick={() => deleteFAQ(faq._id)} className="btn-delete">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQList;
