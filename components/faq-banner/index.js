import React, { useState } from "react";
import "./index.css";
// import { useComponentStaticProps } from "./componentStaticProps";

type Props = {
  bgColor__limio_color: String,
  downArrowImg: String,
  headline: String,
  subline: String,
  faqItems: Array<{
    question: String,
    answer__limio_richtext: String,
  }>,
  componentId: String,
  showButtonBackgroundColor: boolean,
  btnBgColor__limio_color: String,
  btnBorderColor__limio_color: String,
};

const FaqBanner = (props: Props): React.Node => {
  const {
    downArrowImg,
    headline,
    subline,
    faqItems = [],
    componentId,
    showButtonBackgroundColor,
    btnBgColor__limio_color,
    btnBorderColor__limio_color,
  } = props;
  //   const {
  //     downArrowImg, headline, subline, faqItems = [], componentId, showButtonBackgroundColor, btnBgColor__limio_color, btnBorderColor__limio_color
  //   } = useComponentStaticProps();
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
            style={
              (showButtonBackgroundColor && btnOnhover === i) ||
              (showButtonBackgroundColor && onKeyDown === i)
                ? {
                    background: `${btnBgColor__limio_color}`,
                    borderColor: `${btnBorderColor__limio_color}`,
                  }
                : { background: "#ffffff", border: "none" }
            }
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
              __html: item.answer__limio_richtext,
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
