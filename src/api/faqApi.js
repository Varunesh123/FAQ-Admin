import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/faqs";

export const getFAQs = async (lang = "en") => {
  const res = await axios.get(`${API_URL}?lang=${lang}`);
  return res.data;
};

export const createFAQ = async (faqData) => {
  const res = await axios.post(API_URL, faqData);
  return res.data;
};

export const updateFAQ = async (id, faqData) => {
  const res = await axios.put(`${API_URL}/${id}`, faqData);
  return res.data;
};

export const deleteFAQ = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
