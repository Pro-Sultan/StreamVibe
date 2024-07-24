/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import faqData from "../JS/faq";

const Faq = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (index) => {
    setShowAnswers((prevShowAnswers) => {
      const newShowAnswers = { ...prevShowAnswers };
      Object.keys(newShowAnswers).forEach((key) => {
        newShowAnswers[key] = false;
      });
      newShowAnswers[index] = !prevShowAnswers[index];
      return newShowAnswers;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      Object.keys(showAnswers).forEach((key) => {
        if (showAnswers[key]) {
          setShowAnswers((prevShowAnswers) => {
            const newShowAnswers = { ...prevShowAnswers };
            newShowAnswers[key] = false;
            return newShowAnswers;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAnswers]);

  return (
    <div className="faq bg-black10 text-white">
      <div className="faq-header">
        <div className="explore-head" data-aos="fade-right">
          <h1 className="text-xl">Frequently Asked Questions</h1>
          <p className="explore-para text-grey60">
            Got questions? We've got answers! Check out our FAQ section to find
            answers.
          </p>
        </div>

        <div className="question-button" data-aos="fade-right">
          <button className="bg-red45 font-bold">Ask a Question</button>
        </div>
      </div>

      <div className="faq-questions">
        {faqData.map((faq, index) => (
          <div
            className="faqi"
            key={index}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="4000"
          >
            <div className="faq-question">
              <div className="faq-content">
                <img src={faq.image} alt="" />
                <h1>{faq.question}</h1>
              </div>
              <button className="sign" onClick={() => toggleAnswer(index)}>
                {showAnswers[index] ? (
                  <img src="../src/assets/images/minus.png" alt="" />
                ) : (
                  <img src="../src/assets/images/plus.png" alt="" />
                )}
              </button>
            </div>
            {showAnswers[index] && (
              <motion.div
                className="faq-para-container"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
                exit={{ height: 0, transition: { duration: 0.5 } }}
              >
                <motion.p
                  className="faq-para"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
