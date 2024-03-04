import React, { useState } from "react";

const FAQ = () => {
  // Define FAQ data
  const faqData = [
    {
      question: "Apakah perawatan gigi menyakitkan?",
      answer:
        "Perawatan gigi modern umumnya tidak menyakitkan. Dokter gigi akan menggunakan teknologi dan anestesi untuk meminimalkan rasa sakit selama prosedur.",
    },
    {
      question: "Berapa lama proses pemasangan behel?",
      answer:
        "Lama pemasangan behel bisa bervariasi tergantung pada kondisi gigi dan jenis perawatan yang diperlukan. Biasanya, proses pemasangan behel memakan waktu beberapa jam.",
    },
    {
      question: "Apakah perawatan gigi mahal?",
      answer:
        "Biaya perawatan gigi bisa bervariasi tergantung pada jenis perawatan yang Anda butuhkan dan lokasi klinik. Namun, banyak klinik menawarkan paket perawatan yang terjangkau.",
    },
    {
      question: "Bagaimana cara merawat gigi yang sehat?",
      answer:
        "Merawat gigi yang sehat meliputi menyikat gigi setidaknya dua kali sehari, menggunakan benang gigi, menghindari makanan manis berlebihan, dan mengunjungi dokter gigi secara teratur untuk pemeriksaan rutin.",
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
    <div id="faq" className="container mx-auto py-8 mb-10">
      <h1 className="px-8 py-2 text-md rounded-full bg-accent border border-tertiary mb-8 text-center font-bold">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-green-800">
            <div
              className="flex justify-between items-center py-4 cursor-pointer transition-colors duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium text-green-900">{faq.question}</h2>
              <svg
                className={`${
                  activeIndex === index
                    ? "transform rotate-180"
                    : "transform rotate-0"
                } w-6 h-6 p-1 rounded-full bg-green-900 text-white hover:bg-primary transition-all duration-300 ease-in-out`}
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
            <div
              className={`${
                activeIndex === index ? "max-h-full" : "max-h-0 overflow-hidden"
              } transition-all duration-300 ease-in-out`}
            >
              {activeIndex === index && (
                <p className="text-green-700 py-4">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
