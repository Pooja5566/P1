import React from "react";
import "./Faq.css";

const FAQ = () => {
  const faqItems = [
    {
      question: "What type of flats do you have in South Delhi?",
      answer:
        "We provide ready-to-move 2 BHK, 3 BHK, and 4 BHK loan and registry society flats in chattarpur, South Delhi",
    },
    {
      question: "Do you have any active projects?",
      answer:
        "Yes, we have ready-to-move flats and under-construction flats in South Delhi like Jasmine Apartment, Daisy Apartment, Lotus Apartment, Magnolia Apartment, etc.",
    },

    {
      question: "Is registry flat available in South Delhi?",
      answer:
        "Yes, the registry flat is available in South Delhi with 100% documentation support from us,",
    },

    {
      question: "Is loan available for all flats in South Delhi?",
      answer:
        "Yes, different banks including Govt. and Semi-Govt. provides you the loan facilities easily.",
    },
    // add more FAQ items here
  ];

  return (
    <div className="Faq">
      <h2>Frequently Asked Questions</h2>
      <p>Most frequent questions and answers</p>
      <div className="row">
        {faqItems.map((item, index) => (
          <div className="col-sm-6">
            <div key={index}>
              <div className="Quesansw">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
                {/* add FAQ items here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
