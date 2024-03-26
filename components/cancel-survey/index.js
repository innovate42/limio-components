// @flow
import type { Node } from "react";
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";

import { Input } from "@limio/design-system";
import { sendDataLayerEvent } from "@limio/shop/src/shop/helpers";
import { sendOrder } from "@limio/shop/src/shop/helpers/postRequests.js";
import { sha1Hex } from "@limio/crypto";

import { cancelIcons, helpIcons } from "./cancelIcons.js";
import type { CancelSurveyProps, CancelReason } from "./types";
import { DefaultCancelProps } from "./types";
import Confirmation from "../confirmation/index.js";

export const CancelSurvey = (
  props: CancelSurveyProps = DefaultCancelProps
): Node => {
  const [selected, setSelected] = useState<CancelReason | null>(null);
  const [feedback, setFeedback] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const icons = cancelIcons(
    props.iconPrimary__limio_color,
    props.iconSecondary__limio_color
  );
  const ctaIcons = helpIcons(
    props.iconPrimary__limio_color,
    props.iconSecondary__limio_color
  );

  useEffect(() => {
    const sendCancelIntent = async () => {
      const params = new URL(window.location).searchParams;
      const subId = params.get("subId");

      if (subId) {
        await sendOrder({
          order_type: "cancel_intent",
          subscriptionId: subId,
          external_id: subId,
        });
      }
    };

    if (!props.pageBuilder__limio) {
      sendCancelIntent();
    }
  }, [props.pageBuilder__limio]);

  const handleCancel = () => {
    let params = new URL(window.location).searchParams;

    const analyticsObj = {
      name: "form.formSubmit",
      form: {
        name: "cancellation-confirm",
        category: "subscription-cancellation",
        fields: {
          name: "reason",
          value: selected?.id,
        },
      },
    };

    sendDataLayerEvent(analyticsObj);

    return sendOrder({
      order_type: "cancel_subscription",
      data: {
        reason: {
          id: selected?.id,
          feedback: feedback[selected.id],
        },
      },
      subscriptionId: params.get("subId"),
      subscriptionRef: params.get("subRef"),
      external_id: params.get("subId") || params.get("subRef"),
    });
  };

  const handleFeedbackChange = (value, type) => {
    setFeedback({
      ...feedback,
      [type]: value,
    });
  };

  const onCtaClick = (url, segments) => {
    const setCookie = (name, value) => {
      document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${
        60 * 60
      }`; // an hour should be fine for now
    };

    if (segments?.length) {
      const hashSegment = segment => {
        return sha1Hex(segment);
      };

      const hashedSegments = segments.map(seg => hashSegment(seg));
      setCookie("limio-segment", JSON.stringify(hashedSegments));
    }

    window.location.href = url;
  };

  const onSelectClick = reason => {
    const { straightToUrl__limio_boolean, url, segments__limio_segments, id } =
      reason;
    let params = new URL(window.location).searchParams;

    const analyticsObj = {
      name: "form.formSubmit",
      form: {
        name: "cancellation-reason",
        category: "subscription-cancellation",
        fields: {
          name: "reason",
          value: id,
        },
      },
    };

    //sendGoogleAnalyticsEvent("form.formSubmit", "cancellation-reason",  {}, analyticsObj)
    sendDataLayerEvent(analyticsObj);

    if (straightToUrl__limio_boolean) {
      onCtaClick(
        `${url}?subId=${params.get("subId")}&reason=${id}`,
        segments__limio_segments
      );
    } else {
      setSelected(reason);
    }
  };

  const renderForm = () => {
    const icon = selected?.ctaImage ? (
      <img src={selected.ctaImage} alt={selected.ctaText} />
    ) : (
      ctaIcons[selected?.id] || ctaIcons["image"]
    );
    let params = new URL(window.location).searchParams;

    if (selected?.showCta__limio_boolean) {
      return (
        <div className="cancel-form w-full flex justify-evenly">
          <button
            className={clsx(
              "cancel-form-button flex flex-col p-4 delay-200 transition-all",
              "[&>svg]:w-16 [&>svg]:h-16 [&>svg]:mt-0 [&>svg]:mx-auto mb-4",
              "hover:cursor-pointer hover:bg-black/5 rounded-lg"
            )}
            onClick={() =>
              onCtaClick(
                `${selected.url}?subId=${params.get("subId")}&reason=${
                  selected.id
                }`,
                selected.segments__limio_segments
              )
            }
          >
            {icon}
            {selected.ctaText}
          </button>
        </div>
      );
    }

    return (
      <div className="cancel-form-container w-full p-8">
        <div className="cancel-form w-full flex content-evenly">
          <Input
            type="textarea"
            name="text"
            value={feedback[selected.id] || ""}
            id="cancel-feedback"
            placeholder={props.feedbackPlaceholder}
            onChange={e => handleFeedbackChange(e.target.value, selected.id)}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`cancel-survey-next flex w-full flex-col`}
      id={props.componentId}
      style={{ background: props.backgroundColor__limio_color }}
    >
      {showDialog && (
        <Confirmation
          onConfirm={() => handleCancel()}
          onCancel={() => setShowDialog(false)}
          heading={props.confirmationTitle}
          subheading={props.confirmationBody}
          confirmText={props.confirmationOk}
          cancelText={props.confirmationCancel}
          redirectUrl={props.redirectUrl}
        />
      )}
      <div className="cancel-survey-title flex w-100 justify-center text-2xl p-4">
        {props.title}
      </div>
      {props.subtitle && (
        <div className="cancel-survey-subtitle flex w-full text-xl justify-end pt-0 px-0 pb-4">
          {props.subtitle}
        </div>
      )}
      <div className="cancel-survey-selections flex w-full h-full justify-center shadow-sm">
        {props.reasons &&
          props.reasons.map((reason, index) => {
            const { id, label, buttonImage } = reason;

            const icon = buttonImage ? (
              <img src={buttonImage} alt={label} />
            ) : (
              icons[id]
            );

            return (
              <div
                key={JSON.stringify(reason) + index}
                className={clsx(
                  "cancel-survey-selection flex flex-col w-1/5 border-solid border-r-black/5 delay-200 transition-all grow shrink-0",
                  {
                    "selected-selection shadow-inner": selected?.id === id,
                  },
                  "hover:cursor-pointer hover:bg-black/[0.025]"
                )}
                onClick={() => onSelectClick(reason)}
              >
                {icon && (
                  <div className="cancel-survey-selection-icon flex w-20 h-20 my-4 mx-auto [&>svg]:w-full [&>svg]:h-full">
                    {icon}
                  </div>
                )}
                <div className="cancel-survey-selection-title flex flex-col justify-start p-4 text-center">
                  {label}
                </div>
              </div>
            );
          })}
      </div>
      {selected && (
        <div className="cancel-form-container w-full p-8">
          <div className="cancel-survey-form">{renderForm()}</div>
          <div className="cancel-button-group w-fit flex ml-auto text-indigo-700 transition-all delay-200 shrink border-b-[1px] border-transparent border-solid">
            <div
              className="cancel-form-button flex ml-4 pt-4 hover:border-b-[1px] hover:border-b-indigo-700 hover:border-solid hover:cursor-pointer"
              onClick={() => {
                window.location.href = props.goBackUrl;
              }}
            >
              Go Back
            </div>
            <div
              className={clsx(
                "cancel-form-button cancel-button",
                "flex ml-4 pt-4 text-red-600",
                "hover:border-b-[1px] hover:border-b-red-600 hover:border-solid hover:cursor-pointer"
              )}
              onClick={() => setShowDialog(true)}
            >
              Cancel My Subscription
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancelSurvey;
