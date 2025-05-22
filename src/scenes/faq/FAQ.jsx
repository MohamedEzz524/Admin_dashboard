import Header from "../../components/Header";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const faqData = [
  {
    id: "faq-1",
    question: "What is the purpose of this project?",
    answer:
      "This project is a dashboard template built with React and Material UI.",
  },
  {
    id: "faq-2",
    question: "How do I use this project?",
    answer:
      "You can use this project by cloning the repository and running it locally.",
  },
  {
    id: "faq-3",
    question: "What technologies are used in this project?",
    answer:
      "This project uses React, Material UI, and other modern web technologies.",
  },
  {
    id: "faq-4",
    question: "How do I contribute to this project?",
    answer:
      "You can contribute to this project by submitting a pull request or opening an issue.",
  },
  {
    id: "faq-5",
    question: "Where can I find the documentation?",
    answer:
      "The documentation can be found in the docs folder of the repository.",
  },
  {
    id: "faq-6",
    question: "How do I report a bug?",
    answer:
      "You can report a bug by opening an issue on the GitHub repository.",
  },
  {
    id: "faq-7",
    question: "How do I request a feature?",
    answer:
      "You can request a feature by opening an issue on the GitHub repository.",
  },
  {
    id: "faq-8",
    question: "How do I get help?",
    answer:
      "You can get help by opening an issue on the GitHub repository or by asking in the community.",
  },
  {
    id: "faq-9",
    question: "How do I contact the maintainers?",
    answer:
      "You can contact the maintainers by opening an issue on the GitHub repository.",
  },
  {
    id: "faq-10",
    question: "How do I support this project?",
    answer:
      "You can support this project by starring the repository or by donating.",
  },
  {
    id: "faq-11",
    question: "How do I stay updated?",
    answer: "You can stay updated by following the repository on GitHub.",
  },
  {
    id: "faq-12",
    question: "How do I follow the project on social media?",
    answer: "You can follow the project on Twitter, Facebook, and LinkedIn.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState("faq-1");

  const handleChange = (id) =>
    expanded === id ? setExpanded("") : setExpanded(id);
  return (
    <div className="m-5">
      <div className="flex flex-col gap-10">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
        <div>
          {faqData.map(({ id, question, answer }) => (
            <Accordion
              expanded={expanded === id}
              onChange={() => handleChange(id)}
              key={id}
              style={{
                background: "var(--sidebar)",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
              }}
              slotProps={{ transition: { unmountOnExit: true } }} // Fix for the warning
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-menu" />}
              >
                <h5 className="h5 text-primary-accent">{question}</h5>
              </AccordionSummary>
              <AccordionDetails>
                <h6 className="h6 text-menu">{answer}</h6>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
