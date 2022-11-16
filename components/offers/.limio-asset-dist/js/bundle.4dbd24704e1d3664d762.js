const module =  (function(require, window) {

  const moduleLoader = {
    exports: {}
  };
  
  (function(module, exports, require, window) {
/*! version: undefined@undefined+undefined */
/******/ var __webpack_modules__ = ({

/***/ "../../../.yarn/__virtual__/@i42-shared-virtual-70181d7aef/1/packages/shared/src/helpers/cookie.js":
/*!*********************************************************************************************************!*\
  !*** ../../../.yarn/__virtual__/@i42-shared-virtual-70181d7aef/1/packages/shared/src/helpers/cookie.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "getCookieValue": () => (/* binding */ getCookieValue)
/* harmony export */ });
/* eslint-env browser */
const _cookie = __webpack_require__(/*! cookie */ "../../../.yarn/cache/cookie-npm-0.4.1-cc5e2ebb42-bd7c47f5d9.zip/node_modules/cookie/index.js"); // Used for front-end


const getCookie = name => {
  let cookie = ""; // Annoyingly without this if, Gatbsy was throwing error "ReferenceError: document is not defined" even using document?.cookie

  if (typeof document !== "undefined") {
    const cookiesString = document.cookie || "";
    cookie = getCookieValue(cookiesString, name) || ""; // Front-end needs an string to work
  }

  return cookie;
};
const getCookieValue = (cookiesString, name) => {
  if (!cookiesString) {
    return undefined;
  }

  const cookies = _cookie.parse(cookiesString);

  if (cookies[name]) {
    return cookies[name];
  }
};

/***/ }),

/***/ "../../../.yarn/__virtual__/@i42-shared-virtual-70181d7aef/1/packages/shared/src/shop/offers/helpers.js":
/*!**************************************************************************************************************!*\
  !*** ../../../.yarn/__virtual__/@i42-shared-virtual-70181d7aef/1/packages/shared/src/shop/offers/helpers.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortOffers": () => (/* binding */ sortOffers),
/* harmony export */   "sortOffers2": () => (/* binding */ sortOffers2),
/* harmony export */   "filterTrials": () => (/* binding */ filterTrials),
/* harmony export */   "groupOffers": () => (/* binding */ groupOffers),
/* harmony export */   "sanitizeString": () => (/* binding */ sanitizeString),
/* harmony export */   "getDiscountedPrice": () => (/* binding */ getDiscountedPrice)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xss */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_1__);


function sortOffers(offersIn, sorting) {
  // clone the array as otherwise the array is sorted in place which is unexpected
  let offers = [...offersIn];

  if (sorting) {
    return offers.sort((a, b) => sorting[a.path] - sorting[b.path]);
  }

  if (ramda__WEBPACK_IMPORTED_MODULE_0__.any(offer => {
    var _offer$data, _offer$data$attribute;

    return offer === null || offer === void 0 ? void 0 : (_offer$data = offer.data) === null || _offer$data === void 0 ? void 0 : (_offer$data$attribute = _offer$data.attributes) === null || _offer$data$attribute === void 0 ? void 0 : _offer$data$attribute.sales_channel__limio;
  }, offers)) {
    offers = offers.filter(offer => {
      var _offer$data2, _offer$data2$attribut, _offer$data3, _offer$data3$attribut;

      return ramda__WEBPACK_IMPORTED_MODULE_0__.isNil(offer === null || offer === void 0 ? void 0 : (_offer$data2 = offer.data) === null || _offer$data2 === void 0 ? void 0 : (_offer$data2$attribut = _offer$data2.attributes) === null || _offer$data2$attribut === void 0 ? void 0 : _offer$data2$attribut.sales_channel__limio) || ramda__WEBPACK_IMPORTED_MODULE_0__.includes("Online", offer === null || offer === void 0 ? void 0 : (_offer$data3 = offer.data) === null || _offer$data3 === void 0 ? void 0 : (_offer$data3$attribut = _offer$data3.attributes) === null || _offer$data3$attribut === void 0 ? void 0 : _offer$data3$attribut.sales_channel__limio);
    });
  }

  return offers.sort((a, b) => {
    const firstPrice = ramda__WEBPACK_IMPORTED_MODULE_0__.path(["data", "attributes", "price__limio", 0, "value"], a) || 0;
    const secondPrice = ramda__WEBPACK_IMPORTED_MODULE_0__.path(["data", "attributes", "price__limio", 0, "value"], b) || 0;
    return parseFloat(firstPrice) - parseFloat(secondPrice);
  });
} // returns the union of the offers referenced by offersMetadata and offers.

function sortOffers2(offers, offersMetadata = []) {
  // get the offers referenced by the metadata, remove anything where there is no match (ie offers metadata is out of date with offers returned)
  const offerListFromMetadata = offersMetadata.map(({
    path: offer
  }) => offers.find(({
    path
  }) => path === offer)).filter(Boolean); // return the union of the two lists, and remove duplicates.

  const displayOrder = ramda__WEBPACK_IMPORTED_MODULE_0__.uniq([...offerListFromMetadata, ...offers]);
  return displayOrder;
}
function filterTrials(offers, filterTrial) {
  if (filterTrial) {
    offers = offers.map(offer => {
      var _offer$data4, _offer$data4$attribut;

      return { ...offer,
        hidden: offer === null || offer === void 0 ? void 0 : (_offer$data4 = offer.data) === null || _offer$data4 === void 0 ? void 0 : (_offer$data4$attribut = _offer$data4.attributes) === null || _offer$data4$attribut === void 0 ? void 0 : _offer$data4$attribut.trial__limio
      };
    });
  }

  return offers;
}
function groupOffers(offers = [], groupLabels = []) {
  const groups = ramda__WEBPACK_IMPORTED_MODULE_0__.groupBy(ramda__WEBPACK_IMPORTED_MODULE_0__.path(["data", "attributes", "group__limio"]) || "other", offers);
  const groupedOffers = Object.keys(groups).map(groupId => {
    var _groupLabels$find;

    return {
      groupId,
      id: groupId,
      label: ((_groupLabels$find = groupLabels.find(x => x.id === groupId)) === null || _groupLabels$find === void 0 ? void 0 : _groupLabels$find.label) || "Other",
      offers: groups[groupId]
    };
  });
  return groupedOffers;
}
function sanitizeString(string) {
  const xssOptions = {
    whitelist: [],
    stripIgnoreTag: true,
    stripIgnoreTagBody: ["script"]
  };
  return xss__WEBPACK_IMPORTED_MODULE_1___default()(string, xssOptions);
}
function getDiscountedPrice(discount, nextSchedule) {
  if (discount && nextSchedule) {
    return (nextSchedule.data.amount * ((100 - discount.value) / 100)).toFixed(2);
  }
}

/***/ }),

/***/ "./components/AddToBasketButton.js":
/*!*****************************************!*\
  !*** ./components/AddToBasketButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToBasketButton": () => (/* binding */ AddToBasketButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @limio/sdk */ "@limio/sdk");
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_limio_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Quantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quantity */ "./components/Quantity.js");



const AddToBasketButton = ({
  item,
  primaryColor,
  inBasket,
  invertCTA,
  quantity,
  setQuantity,
  addToBasket,
  selection,
  removeText
}) => {
  var _item$data, _attributes$checkout_;

  const LimioPageContext = (0,_limio_sdk__WEBPACK_IMPORTED_MODULE_1__.useLimio)();
  const attributes = item === null || item === void 0 ? void 0 : (_item$data = item.data) === null || _item$data === void 0 ? void 0 : _item$data.attributes;

  if ((attributes === null || attributes === void 0 ? void 0 : (_attributes$checkout_ = attributes.checkout__limio) === null || _attributes$checkout_ === void 0 ? void 0 : _attributes$checkout_.checkout_type) !== "purchase-link") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !inBasket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: `add-to-basket-group${attributes.allow_multibuy__limio ? " multibuy" : ""}`
    }, attributes.allow_multibuy__limio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Quantity__WEBPACK_IMPORTED_MODULE_2__.Quantity, {
      className: "quantity-button",
      primaryColor: primaryColor,
      invertCTA: invertCTA,
      quantity: quantity,
      setQuantity: setQuantity
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: addToBasket,
      style: invertCTA ? {
        color: primaryColor,
        borderColor: primaryColor
      } : {
        color: "#ffffff",
        borderColor: primaryColor,
        backgroundColor: primaryColor
      },
      className: "btn btn-lg btn-block btn-outline-light add add-to-basket"
    }, attributes.cta_text__limio ? attributes.cta_text__limio : "Subscribe")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => LimioPageContext.shop.removeFromBasket(item),
      style: invertCTA ? {
        color: "#ffffff",
        borderColor: primaryColor,
        backgroundColor: primaryColor
      } : {
        color: primaryColor,
        borderColor: primaryColor
      },
      className: "btn btn-lg btn-block btn-outline-light remove"
    }, removeText || "Remove"));
  } else {
    var _LimioPageContext$sho;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: `${((_LimioPageContext$sho = LimioPageContext.shop) === null || _LimioPageContext$sho === void 0 ? void 0 : _LimioPageContext$sho.shopUrl) || ""}/checkout?purchase=${item.data.path}`,
      className: "btn btn-lg btn-block btn-outline-light add add-to-basket",
      style: invertCTA ? {
        color: primaryColor,
        borderColor: primaryColor
      } : {
        color: "#ffffff",
        borderColor: primaryColor,
        backgroundColor: primaryColor
      }
    }, attributes.cta_text__limio ? attributes.cta_text__limio : "Subscribe");
  }
};

/***/ }),

/***/ "./components/MobileOffers.js":
/*!************************************!*\
  !*** ./components/MobileOffers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileOffers": () => (/* binding */ MobileOffers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MobileOffers = ({
  items = [],
  mobileArrows,
  mobileArrowsColor,
  mobileSwipe,
  useTransform,
  children,
  layout,
  offerOverflowLayout
}) => {
  const [offerIndex, setOfferIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    startX: 0,
    startY: 0,
    currentX: 0
  });
  const threshold = 50;

  const offerBack = () => {
    setOfferIndex(offerIndex !== 0 ? offerIndex - 1 : items.length - 1);
  };

  const offerForward = () => {
    setOfferIndex(offerIndex < items.length - 1 ? offerIndex + 1 : 0);
  };

  const handleNext = () => {
    if (mobileSwipe) {
      const new_index = offerIndex === items.length - 1 ? 0 : offerIndex + 1;
      setOfferIndex(new_index);
    }
  };

  const handleBack = () => {
    if (mobileSwipe) {
      const new_index = offerIndex === 0 ? items.length - 1 : offerIndex - 1;
      setOfferIndex(new_index);
    }
  };

  const touchStart = e => {
    if (mobileSwipe) {
      const touchObj = e.touches[0];
      setPosition({
        startX: touchObj.clientX,
        startY: touchObj.clientY,
        currentX: touchObj.clientX
      });
    }
  };

  const touchMove = e => {
    if (mobileSwipe) {
      const touchObj = e.touches[0];
      setPosition({ ...position,
        currentX: touchObj.clientX
      });
    }
  };

  const touchEnd = () => {
    if (mobileSwipe) {
      if (Math.abs(position.startX - position.currentX) > threshold) {
        position.startX > position.currentX ? handleNext() : handleBack();
      }
    }
  };

  const mobileStyle = mobileSwipe && useTransform ? {
    transform: `translateX(calc(-${offerIndex * 100}% - ${offerIndex * 3.75}em))`
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `offer-container mobile ${mobileSwipe ? "swipe" : ""} ${useTransform ? "" : "no-transition"} card-deck mt-4 text-center ${layout}`,
    style: {
      alignItems: offerOverflowLayout,
      ...mobileStyle
    },
    onTouchStart: touchStart,
    onTouchMove: touchMove,
    onTouchEnd: touchEnd
  }, children), mobileSwipe && items.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, mobileArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-arrows container",
    onTouchStart: touchStart,
    onTouchMove: touchMove,
    onTouchEnd: touchEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    onClick: offerBack,
    viewBox: "0 0 284.935 284.936"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M110.488,142.468L222.694,30.264c1.902-1.903,2.854-4.093,2.854-6.567c0-2.474-0.951-4.664-2.854-6.563L208.417,2.857   C206.513,0.955,204.324,0,201.856,0c-2.475,0-4.664,0.955-6.567,2.857L62.24,135.9c-1.903,1.903-2.852,4.093-2.852,6.567   c0,2.475,0.949,4.664,2.852,6.567l133.042,133.043c1.906,1.906,4.097,2.857,6.571,2.857c2.471,0,4.66-0.951,6.563-2.857   l14.277-14.267c1.902-1.903,2.851-4.094,2.851-6.57c0-2.472-0.948-4.661-2.851-6.564L110.488,142.468z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: mobileArrowsColor
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    onClick: offerForward,
    viewBox: "0 0 284.935 284.936"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133   c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677   c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854   c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: mobileArrowsColor
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-steps"
  }, items.map((offer, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `offer-step${index === offerIndex ? " current-offer-step" : ""}`,
    key: JSON.stringify(offer) + index,
    onClick: () => setOfferIndex(index)
  }, "\u25CF")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileOffers);

/***/ }),

/***/ "./components/MoreInfo.js":
/*!********************************!*\
  !*** ./components/MoreInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreInfo": () => (/* binding */ MoreInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @limio/sdk */ "@limio/sdk");
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_limio_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Quantity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Quantity */ "./components/Quantity.js");




const MoreInfo = props => {
  const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const LimioPageContext = (0,_limio_sdk__WEBPACK_IMPORTED_MODULE_1__.useLimio)();
  const {
    item,
    attachments,
    onClose
  } = props;
  const {
    data
  } = item;

  const sanitizeString = string => {
    const xssOptions = {
      whitelist: [],
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script"]
    };
    return xss__WEBPACK_IMPORTED_MODULE_2___default()(string, xssOptions);
  };

  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const escHandler = ({
      key
    }) => {
      if (key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", escHandler);
    window.addEventListener("keyup", escHandler); // Remove event listeners on cleanup

    return () => {
      window.removeEventListener("keydown", escHandler);
      window.removeEventListener("keyup", escHandler);
    };
  }, [onClose]);

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target) && e.target.className !== "dropdown-item") {
        callback();
      }
    };

    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => props.onClose());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-info-outer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-info-container",
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "close-button",
    onClick: () => props.onClose()
  }, "+"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-info-body"
  }, attachments && attachments.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-info-photos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-info-photo",
    style: {
      backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachments[currentImage].url)}")`
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `more-info-photo-thumbnails${attachments.length <= 1 ? " hidden" : ""}`
  }, attachments.map((attachment, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: `more-info-photo-thumbnail${index === currentImage ? " current" : ""}`,
    style: {
      backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachment.url)}")`
    },
    onClick: () => setCurrentImage(index)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "more-info-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "title"
  }, data.attributes.display_name__limio || item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "display-price",
    dangerouslySetInnerHTML: {
      __html: sanitizeString(data.attributes.display_price__limio)
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `add-to-basket-group${data.attributes.allow_multibuy__limio ? " multibuy" : ""}`
  }, data.attributes.allow_multibuy__limio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Quantity__WEBPACK_IMPORTED_MODULE_3__.Quantity, {
    className: "quantity-button",
    primaryColor: props.primaryColor,
    invertCTA: props.invertCTA,
    quantity: props.quantity,
    setQuantity: props.setQuantity
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => LimioPageContext.shop.addToBasket(item, props.selection, props.quantity, props.redirectUrl),
    style: {
      color: "#ffffff",
      borderColor: props.primaryColor,
      backgroundColor: props.primaryColor,
      minHeight: "48px"
    },
    className: "btn btn-lg btn-block btn-outline-light add add-to-basket"
  }, data.attributes.cta_text__limio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "detailed-display-price",
    dangerouslySetInnerHTML: {
      __html: sanitizeString(data.attributes.display_price__limio)
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "description",
    dangerouslySetInnerHTML: {
      __html: sanitizeString(data.attributes.description ? data.attributes.description : data.attributes.offer_features__limio)
    }
  })))));
};

/***/ }),

/***/ "./components/OfferImage.js":
/*!**********************************!*\
  !*** ./components/OfferImage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferImage": () => (/* binding */ OfferImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @limio/sdk */ "@limio/sdk");
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_limio_sdk__WEBPACK_IMPORTED_MODULE_1__);


const OfferImage = ({
  attachments = [],
  showAllImages,
  imageShape,
  thumbnailPosition
}) => {
  const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const LimioPageContext = (0,_limio_sdk__WEBPACK_IMPORTED_MODULE_1__.useLimio)();
  const showArrows = showAllImages && attachments.length > 1;

  const handleNext = () => {
    const new_index = currentImage === attachments.length - 1 ? 0 : currentImage + 1;
    setCurrentImage(new_index);
  };

  const handleBack = () => {
    const new_index = currentImage === 0 ? attachments.length - 1 : currentImage - 1;
    setCurrentImage(new_index);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-images"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `offer-img ${imageShape}`,
    style: {
      backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachments[currentImage].url)}")`
    },
    alt: "offerImg"
  }, showArrows && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-img-arrow",
    onClick: () => handleBack()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-img-arrow-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "chevron left"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-img-arrow right",
    onClick: () => handleNext()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-img-arrow-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "chevron right"
  }))))), showAllImages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `image-thumbnails${attachments.length <= 1 ? " hidden" : ""} ${thumbnailPosition}`
  }, attachments.map((attachment, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    className: `image-thumbnail${index === currentImage ? " current" : ""}`,
    style: {
      backgroundImage: `url("${LimioPageContext.endpoint ? LimioPageContext.endpoint : ""}${encodeURI(attachment.url)}")`
    },
    onClick: () => setCurrentImage(index)
  }))));
};

/***/ }),

/***/ "./components/PriceCard.js":
/*!*********************************!*\
  !*** ./components/PriceCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceCard": () => (/* binding */ PriceCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @limio/sdk */ "@limio/sdk");
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_limio_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoreInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreInfo */ "./components/MoreInfo.js");
/* harmony import */ var _OfferImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OfferImage */ "./components/OfferImage.js");
/* harmony import */ var _AddToBasketButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddToBasketButton */ "./components/AddToBasketButton.js");
/* harmony import */ var _i42_shared_src_shop_offers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @i42/shared/src/shop/offers/helpers */ "../../../.yarn/__virtual__/@i42-shared-virtual-70181d7aef/1/packages/shared/src/shop/offers/helpers.js");







const displayProducts = productString => {
  const sanitizeString = string => !string || string.includes("</script>") || string.includes("onload=") || string.includes("onerror=") ? "" : string;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    dangerouslySetInnerHTML: {
      __html: sanitizeString(productString)
    }
  });
};

const PriceCard = props => {
  const LimioPageContext = (0,_limio_sdk__WEBPACK_IMPORTED_MODULE_1__.useLimio)();
  const {
    item,
    setUseTransform,
    redirectUrl
  } = props;
  const itemData = item.data;
  const attachments = itemData.attachments ? itemData.attachments.filter(x => x.type.includes("image")) : [];
  const hasAttachments = attachments.length > 0;
  const [showMoreInfo, setShowMoreInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selection, setSelection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setUseTransform(!showMoreInfo);
  }, [setUseTransform, showMoreInfo]);
  const push_to_checkout__limio = itemData.attributes.push_to_checkout__limio;
  const inBasket = push_to_checkout__limio === false && props.inBasket;
  let priceCardStyle = {
    textAlign: props.textAlign,
    maxWidth: `${props.offerWidth * 10}em`,
    minWidth: `${props.offerWidth * 10}em`
  };

  if (inBasket) {
    priceCardStyle.border = `1px solid ${props.buttonColor}`;
  }

  if (props.border) {
    priceCardStyle.border = `2px solid ${props.primaryColor}`;
  }

  function addToBasket() {
    LimioPageContext.shop.addToBasket(props.item, selection, quantity, redirectUrl);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !props.useTransform && showMoreInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MoreInfo__WEBPACK_IMPORTED_MODULE_2__.MoreInfo, {
    item: item,
    primaryColor: props.primaryColor,
    onClose: () => setShowMoreInfo(false),
    attachments: attachments,
    selection: selection,
    setSelection: setSelection,
    productSelectText: props.productSelectText,
    quantity: quantity,
    setQuantity: setQuantity,
    redirectUrl: redirectUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: priceCardStyle,
    className: `price-card mb-5${props.shadow ? " shadow-sm" : ""}${props.showAllImages ? " show-thumbs" : ""}${props.roundCorners ? " round-corners" : ""}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `card-body ${props.offerOverflowLayout}`
  }, hasAttachments && props.imagePosition === "top" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OfferImage__WEBPACK_IMPORTED_MODULE_3__.OfferImage, {
    attachments: attachments,
    imageShape: props.imageShape,
    showAllImages: props.showAllImages,
    thumbnailPosition: props.thumbnailPosition
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "display-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "my-0"
  }, itemData.attributes.display_name__limio ? itemData.attributes.display_name__limio : props.item.name || itemData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "display-price",
    style: {
      color: props.primaryColor
    },
    dangerouslySetInnerHTML: {
      __html: (0,_i42_shared_src_shop_offers_helpers__WEBPACK_IMPORTED_MODULE_5__.sanitizeString)(itemData.attributes.display_price__limio)
    }
  })), (hasAttachments && props.imagePosition) === "middle" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OfferImage__WEBPACK_IMPORTED_MODULE_3__.OfferImage, {
    attachments: attachments,
    imageShape: props.imageShape,
    showAllImages: props.showAllImages,
    thumbnailPosition: props.thumbnailPosition
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "products"
  }, itemData.attributes.offer_features__limio && displayProducts(itemData.attributes.offer_features__limio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "detailed-price",
    dangerouslySetInnerHTML: {
      __html: (0,_i42_shared_src_shop_offers_helpers__WEBPACK_IMPORTED_MODULE_5__.sanitizeString)(itemData.attributes.detailed_display_price__limio)
    }
  }), hasAttachments && props.imagePosition === "bottom" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OfferImage__WEBPACK_IMPORTED_MODULE_3__.OfferImage, {
    attachments: attachments,
    imageShape: props.imageShape,
    showAllImages: props.showAllImages,
    thumbnailPosition: props.thumbnailPosition
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddToBasketButton__WEBPACK_IMPORTED_MODULE_4__.AddToBasketButton, {
    addToBasket: addToBasket,
    inBasket: inBasket,
    invertCTA: props.invertCTA,
    item: props.item,
    primaryColor: props.primaryColor,
    quantity: quantity,
    removeText: props.removeText,
    selection: selection,
    setQuantity: setQuantity
  }), props.showLearnMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setShowMoreInfo(true),
    style: props.invertCTA ? {
      color: "#ffffff",
      borderColor: props.primaryColor,
      backgroundColor: props.primaryColor
    } : {
      color: props.primaryColor,
      borderColor: props.primaryColor
    },
    className: "btn btn-lg btn-block btn-outline-light add"
  }, props.learnMoreText)))));
};

/***/ }),

/***/ "./components/Quantity.js":
/*!********************************!*\
  !*** ./components/Quantity.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quantity": () => (/* binding */ Quantity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _limio_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @limio/design-system */ "@limio/design-system");
/* harmony import */ var _limio_design_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_limio_design_system__WEBPACK_IMPORTED_MODULE_1__);


const Quantity = ({
  invertCTA,
  primaryColor,
  quantity,
  setQuantity
}) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limio_design_system__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    isOpen: isOpen,
    toggle: () => setIsOpen(!isOpen)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limio_design_system__WEBPACK_IMPORTED_MODULE_1__.DropdownToggle, {
    caret: true,
    style: invertCTA ? {
      color: "#ffffff",
      borderColor: primaryColor,
      backgroundColor: primaryColor
    } : {
      color: primaryColor,
      borderColor: primaryColor,
      backgroundColor: "transparent"
    }
  }, quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limio_design_system__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limio_design_system__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, {
    header: true
  }, "Quantity"), quantities.map(quant => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limio_design_system__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, {
    key: "quantity-selector-" + quant,
    onClick: () => setQuantity(quant)
  }, quant))));
};

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../.yarn/cache/cookie-npm-0.4.1-cc5e2ebb42-bd7c47f5d9.zip/node_modules/cookie/index.js":
/*!****************************************************************************************************!*\
  !*** ../../../.yarn/cache/cookie-npm-0.4.1-cc5e2ebb42-bd7c47f5d9.zip/node_modules/cookie/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/css.js":
/*!*************************************************************************************************************!*\
  !*** ../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/css.js ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(/*! ./default */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/default.js");
var parseStyle = __webpack_require__(/*! ./parser */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/parser.js");
var _ = __webpack_require__(/*! ./util */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/util.js");


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS (options) {
  options = shallowCopyObject(options || {});
  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onAttr = options.onAttr || DEFAULT.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  this.options = options;
}

FilterCSS.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


module.exports = FilterCSS;


/***/ }),

/***/ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/default.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/default.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;


/***/ }),

/***/ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/index.js":
/*!***************************************************************************************************************!*\
  !*** ../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/index.js ***!
  \***************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(/*! ./default */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/default.js");
var FilterCSS = __webpack_require__(/*! ./css */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/css.js");


/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */
function filterCSS (html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
}


// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];

// 在浏览器端使用
if (typeof window !== 'undefined') {
  window.filterCSS = module.exports;
}


/***/ }),

/***/ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/parser.js":
/*!****************************************************************************************************************!*\
  !*** ../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/parser.js ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _ = __webpack_require__(/*! ./util */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/util.js");


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle (css, onAttr) {
  css = _.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _.trim(source.slice(0, j));
        var value = _.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) {
        // 在圆括号里面，忽略
      } else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _.trim(retCSS);
}

module.exports = parseStyle;


/***/ }),

/***/ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/util.js":
/*!**************************************************************************************************************!*\
  !*** ../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/util.js ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};


/***/ }),

/***/ "../../../.yarn/cache/decode-uri-component-npm-0.2.0-5bcc0f3597-f3749344ab.zip/node_modules/decode-uri-component/index.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../.yarn/cache/decode-uri-component-npm-0.2.0-5bcc0f3597-f3749344ab.zip/node_modules/decode-uri-component/index.js ***!
  \********************************************************************************************************************************/
/***/ ((module) => {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "../../../.yarn/cache/query-string-npm-6.13.8-77db681d8d-da14ec8011.zip/node_modules/query-string/index.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../.yarn/cache/query-string-npm-6.13.8-77db681d8d-da14ec8011.zip/node_modules/query-string/index.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "../../../.yarn/cache/strict-uri-encode-npm-2.0.0-1ec3189376-eaac4cf978.zip/node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "../../../.yarn/cache/decode-uri-component-npm-0.2.0-5bcc0f3597-f3749344ab.zip/node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "../../../.yarn/cache/split-on-first-npm-1.1.0-e2f3ab5e4e-16ff85b54d.zip/node_modules/split-on-first/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};


/***/ }),

/***/ "../../../.yarn/cache/split-on-first-npm-1.1.0-e2f3ab5e4e-16ff85b54d.zip/node_modules/split-on-first/index.js":
/*!********************************************************************************************************************!*\
  !*** ../../../.yarn/cache/split-on-first-npm-1.1.0-e2f3ab5e4e-16ff85b54d.zip/node_modules/split-on-first/index.js ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "../../../.yarn/cache/strict-uri-encode-npm-2.0.0-1ec3189376-eaac4cf978.zip/node_modules/strict-uri-encode/index.js":
/*!**************************************************************************************************************************!*\
  !*** ../../../.yarn/cache/strict-uri-encode-npm-2.0.0-1ec3189376-eaac4cf978.zip/node_modules/strict-uri-encode/index.js ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/default.js":
/*!****************************************************************************************************!*\
  !*** ../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/default.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = (__webpack_require__(/*! cssfilter */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/index.js").FilterCSS);
var getDefaultCSSWhiteList = (__webpack_require__(/*! cssfilter */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/index.js").getDefaultWhiteList);
var _ = __webpack_require__(/*! ./util */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/util.js");

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: ["autoplay", "controls", "loop", "preload", "src"],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
  };
}

var defaultCSSFilter = new FilterCSS();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value.substr(0, 11) === "data:image/" ||
        value.substr(0, 6) === "ftp://" ||
        value.substr(0, 2) === "./" ||
        value.substr(0, 3) === "../" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape doube quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function() {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function(tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function(html) {
      var rethtml = "";
      var lastPos = 0;
      _.forEach(removeList, function(pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    }
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
}
var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function(char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;


/***/ }),

/***/ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/index.js":
/*!**************************************************************************************************!*\
  !*** ../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/index.js ***!
  \**************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(/*! ./default */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/default.js");
var parser = __webpack_require__(/*! ./parser */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/parser.js");
var FilterXSS = __webpack_require__(/*! ./xss */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/xss.js");

/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */
function filterXSS(html, options) {
  var xss = new FilterXSS(options);
  return xss.process(html);
}

exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];
for (var i in parser) exports[i] = parser[i];

// using `xss` on the browser, output `filterXSS` to the globals
if (typeof window !== "undefined") {
  window.filterXSS = module.exports;
}

// using `xss` on the WebWorker, output `filterXSS` to the globals
function isWorkerEnv() {
  return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
if (isWorkerEnv()) {
  self.filterXSS = module.exports;
}


/***/ }),

/***/ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/parser.js":
/*!***************************************************************************************************!*\
  !*** ../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/parser.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _ = __webpack_require__(/*! ./util */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/util.js");

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    var tagName = html.slice(1, -1);
  } else {
    var tagName = html.slice(1, i + 1);
  }
  tagName = _.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag(html, onTag, escapeHtml) {
  "use strict";

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if ((c === '"' || c === "'")) {
          var i = 1;
          var ic = html.charAt(currentPos - i);

          while ((ic === " ") || (ic === "=")) {
            if (ic === "=") {
              quoteStart = c;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr(html, onAttr) {
  "use strict";

  var lastPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastPos &&
        (c === '"' || c === "'") &&
        html.charAt(i - 1) === "="
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _.trim(html.slice(lastPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
    }
  }

  return _.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

exports.parseTag = parseTag;
exports.parseAttr = parseAttr;


/***/ }),

/***/ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/util.js":
/*!*************************************************************************************************!*\
  !*** ../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/util.js ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {
  indexOf: function(arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function(arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function(str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  }
};


/***/ }),

/***/ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/xss.js":
/*!************************************************************************************************!*\
  !*** ../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/xss.js ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = (__webpack_require__(/*! cssfilter */ "../../../.yarn/cache/cssfilter-npm-0.0.10-28e06ce546-bc2c52bbb3.zip/node_modules/cssfilter/lib/index.js").FilterCSS);
var DEFAULT = __webpack_require__(/*! ./default */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/default.js");
var parser = __webpack_require__(/*! ./parser */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/parser.js");
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = __webpack_require__(/*! ./util */ "../../../.yarn/cache/xss-npm-1.0.8-7219f18929-e43deb43a6.zip/node_modules/xss/lib/util.js");

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/"
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList, onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }

  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function(html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    var stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function(sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: whiteList.hasOwnProperty(tag)
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function(name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        var html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        var ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

module.exports = FilterXSS;


/***/ }),

/***/ "@limio/design-system":
/*!***************************************!*\
  !*** external "@limio/design-system" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@limio/design-system");

/***/ }),

/***/ "@limio/sdk":
/*!*****************************!*\
  !*** external "@limio/sdk" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@limio/sdk");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("ramda");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Offers": () => (/* binding */ Offers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @limio/sdk */ "@limio/sdk");
/* harmony import */ var _limio_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_limio_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PriceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PriceCard */ "./components/PriceCard.js");
/* harmony import */ var _limio_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @limio/design-system */ "@limio/design-system");
/* harmony import */ var _limio_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_limio_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i42_shared_src_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @i42/shared/src/helpers */ "../../../.yarn/__virtual__/@i42-shared-virtual-70181d7aef/1/packages/shared/src/helpers/cookie.js");
/* harmony import */ var _i42_shared_src_shop_offers_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @i42/shared/src/shop/offers/helpers */ "../../../.yarn/__virtual__/@i42-shared-virtual-70181d7aef/1/packages/shared/src/shop/offers/helpers.js");
/* harmony import */ var _components_MobileOffers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MobileOffers */ "./components/MobileOffers.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "../../../.yarn/cache/query-string-npm-6.13.8-77db681d8d-da14ec8011.zip/node_modules/query-string/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./index.css");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Offers = props => {
  const LimioPageContext = (0,_limio_sdk__WEBPACK_IMPORTED_MODULE_1__.useLimio)();
  const offerEligibility = (0,_i42_shared_src_helpers__WEBPACK_IMPORTED_MODULE_8__.getCookie)("limio-invalid");
  const {
    shop: shopContext
  } = LimioPageContext;
  const {
    offers = [],
    groups = []
  } = shopContext;
  const offerItems = (0,_i42_shared_src_shop_offers_helpers__WEBPACK_IMPORTED_MODULE_9__.filterTrials)(offers, offerEligibility.includes("trial"));
  const offerGroups = (0,_i42_shared_src_shop_offers_helpers__WEBPACK_IMPORTED_MODULE_9__.groupOffers)(offerItems, groups);
  const [useTransform, setUseTransform] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [showTrialAlert, setShowTrialAlert] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(offerEligibility.includes("trial"));
  let redirect_url = "";

  if (typeof window !== undefined) {
    var _window, _window$location;

    const search = query_string__WEBPACK_IMPORTED_MODULE_6__.parse((_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.search);
    redirect_url = search["redirect_url"] || "";
  }

  const renderPriceCards = groupItems => {
    if (!offerItems.length || props.splitByGroups && !groupItems) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "no-offers mb-5"
      }, "No offers to display...");
    }

    return (groupItems || offerItems).map((item, index) => {
      var _LimioPageContext$sho, _LimioPageContext$sho2;

      const {
        trial__limio,
        sales_channel__limio
      } = item.data.attributes;

      if (trial__limio && offerEligibility.includes("trial")) {
        return;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PriceCard__WEBPACK_IMPORTED_MODULE_2__.PriceCard, {
        endpoint: props.endpoint,
        key: item.path + index,
        item: item,
        inBasket: !!(LimioPageContext !== null && LimioPageContext !== void 0 && (_LimioPageContext$sho = LimioPageContext.shop) !== null && _LimioPageContext$sho !== void 0 && (_LimioPageContext$sho2 = _LimioPageContext$sho.basketItems) !== null && _LimioPageContext$sho2 !== void 0 && _LimioPageContext$sho2.find(basketItem => {
          var _basketItem$offer, _basketItem$offer2;

          return (basketItem === null || basketItem === void 0 ? void 0 : (_basketItem$offer = basketItem.offer) === null || _basketItem$offer === void 0 ? void 0 : _basketItem$offer.path) === item.path && (basketItem === null || basketItem === void 0 ? void 0 : (_basketItem$offer2 = basketItem.offer) === null || _basketItem$offer2 === void 0 ? void 0 : _basketItem$offer2.id) === item.id;
        })) // @TODO: Tidy this
        ,
        primaryColor: props.primaryColor__limio_color,
        offerOverflowLayout: props.offerOverflowLayout,
        removeFromBasket: item => LimioPageContext.shop.removeFromBasket(item),
        imageShape: props.imageShape,
        imagePosition: props.imagePosition,
        showAllImages: props.showAllImages,
        showLearnMore: props.showLearnMore,
        shadow: props.shadow,
        border: props.border,
        roundCorners: props.roundCorners,
        learnMoreText: props.learnMoreText,
        setUseTransform: setUseTransform,
        useTransform: props.mobileSwipe ? useTransform : false,
        invertCTA: props.invertCTA,
        thumbnailPosition: props.thumbnailPosition,
        productSelectText: props.productSelectText,
        offerWidth: props.offerWidth,
        removeText: props.removeText,
        redirectUrl: redirect_url
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: props.componentId || "offers-component",
    className: "offers py-2 container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limio_design_system__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    color: "info",
    variant: "warning",
    isOpen: showTrialAlert,
    toggle: () => setShowTrialAlert(false),
    text: props.ineligibleMessage,
    style: {
      margin: "1em"
    }
  }, props.ineligibleMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mb-2"
  }, props.splitByGroups ? offerGroups ? offerGroups.map(({
    id: groupName,
    label: groupLabel,
    offer: groupItems
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "offer-group-container",
    key: groupName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "offer-group-heading"
  }, groupLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `offer-container card-deck mt-4 text-center ${props.layout}`,
    style: {
      alignItems: props.offerOverflowLayout
    }
  }, renderPriceCards(groupItems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MobileOffers__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    items: groupItems
  }, props), renderPriceCards(groupItems))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `offer-container card-deck mt-4 text-center ${props.layout}`,
    style: {
      alignItems: props.offerOverflowLayout
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "no-offers mb-5"
  }, "No offers to display...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `offer-container mobile card-deck mt-4 text-center ${props.layout}`,
    style: {
      alignItems: props.offerOverflowLayout
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "no-offers mb-5"
  }, "No offers to display..."))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `offer-container card-deck mt-5 text-center ${props.layout}`,
    style: {
      alignItems: props.offerOverflowLayout
    }
  }, renderPriceCards()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MobileOffers__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    items: offerItems
  }, props), renderPriceCards()))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Offers);
})();

module.exports = __webpack_exports__;

}).call(window, moduleLoader, moduleLoader.exports, require, window);
  
  
  return moduleLoader.exports;

}).call(global, require, global);

return module;

//# sourceMappingURL=bundle.4dbd24704e1d3664d762.js.map