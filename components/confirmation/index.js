// @flow
import type { Node } from "react";
import React, { useState } from "react";
import { LoadingSpinner } from "@limio/design-system";

type Props = {
  onConfirm: () => Promise<void> | void,
  onCancel: () => Promise<void> | void,
  heading: string,
  subheading: string,
  cancelText: string,
  confirmText: string,
  redirectUrl: string,
};

const Confirmation = ({
  onConfirm,
  onCancel,
  heading,
  subheading,
  confirmText,
  cancelText,
  redirectUrl,
}: Props): Node => {
  const [loading, setLoading] = useState(false);

  const confirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
    onCancel();
    window.location.href = redirectUrl;
  };

  const actions = [
    {
      label: cancelText,
      fn: onCancel,
    },
    {
      label: confirmText,
      fn: confirm,
    },
  ];

  return (
    <div className="flex absolute w-full h-full bg-black/5 left-0 top-0 flex-col justify-center z-10 p-12">
      <div className="flex flex-col bg-white w-full h-full p-6 my-0 mx-auto shadow-sm rounded lg:max-w-[750px] lg:h-auto">
        <div className="text-xl">{heading}</div>
        <div className="py-4 px-0">{subheading}</div>
        <div className="flex justify-end mt-8">
          {loading ? (
            <LoadingSpinner />
          ) : (
            actions.map(action => (
              <div
                className="ml-4 py-2 px-6 rounded-md transition-all duration-200 hover:bg-black/5 hover:cursor-pointer"
                onClick={() => action.fn()}
              >
                {action.label}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
