import React, { useState } from "react";

const FAQ = () => {
  // Define FAQ data
  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  // State to keep track of active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle active FAQ item
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <svg
                className={`${
                  activeIndex === index
                    ? "transform rotate-180"
                    : "transform rotate-0"
                } w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 py-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
