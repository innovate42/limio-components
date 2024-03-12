// @flow
import React, { useState } from "react";
import "./index.css";

type Props = {
  downArrowImg: String,
  headline: String,
  subline: String,
  faqItems: Array<{
    question: String,
    answer: String,
  }>,
  componentId: String
};

const FaqBanner = (props: Props): React.Node => {
  const {
    downArrowImg,
    headline,
    subline,
    faqItems = [],
    componentId,
  } = props;

  const [openAccordions, setOpenAccordions] = useState([]);
  const [btnOnhover, setBtnOnHover] = useState(-1);
  const [onKeyDown, setOnKeyDown] = useState(-1);

  function toggleOpenAccordion(accordionIndex) {
    let newOpenAccordions = [...openAccordions];

    openAccordions.includes(accordionIndex)
      ? (newOpenAccordions = openAccordions.filter(
          (item) => item !== accordionIndex
        ))
      : newOpenAccordions.push(accordionIndex);

    setOpenAccordions(newOpenAccordions);
  }

  // Took the map function for items outside the "HTML" section for better reading and understanding
  const retrieveFaqItems = faqItems.map((item, i) => {
    const active = openAccordions.includes(i);

    return (
      <dl className="FaqItem" key={i}>
        <dt>
          <button
            type="button"
            className="AccordionItem"
            aria-expanded={`${active ? "true" : "false"}`}
            aria-controls={`faqAnswer${i + 1}`}
            onClick={() => toggleOpenAccordion(i)}
            onMouseEnter={() => setBtnOnHover(i)}
            onMouseLeave={() => setBtnOnHover(-1)}
            onFocus={() => setOnKeyDown(i)}
            onBlur={() => setOnKeyDown(-1)}
          >
            <p className="Question">{item.question}</p>
            <img
              className={`Arrow ${active ? "active" : ""}`}
              src={downArrowImg}
              alt="down"
            />
          </button>
        </dt>
        <dd className={`Panel ${active ? "active" : ""}`}>
          <div
            id={`faqAnswer${i + 1}`}
            className="Answer"
            data-testid="answer"
            dangerouslySetInnerHTML={{
              __html: item.answer,
            }}
          />
        </dd>
      </dl>
    );
  });

  return (
    <div className="FaqBanner" id={componentId}>
      <div className="FaqWrapper">
        <h2>{headline}</h2>
        <p>{subline}</p>
        <div className="AccordionContainer">{retrieveFaqItems}</div>
      </div>
    </div>
  );
};

export default FaqBanner;
