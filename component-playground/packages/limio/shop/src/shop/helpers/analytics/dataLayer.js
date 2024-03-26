//@flow
export type FormSubmitEvent = {
  name: "form.formSubmit",
  form: {
    name: string,
    category: string,
    error?: string,
    data?: any,

    // i'm not sure why this isn't an array
    fields: {
      name: string,
      value: string,
    },
  },
};

type DataEvent = FormSubmitEvent | any;

export function sendDataLayerEvent(event: DataEvent) {
  if (
    window.limio &&
    window.limio.dataLayer &&
    window.limio.dataLayer._handlers
  ) {
    for (const handler of window.limio.dataLayer._handlers) {
      try {
        handler(event);
      } catch (err) {
        // not sure there is much we can do
      }
    }
  }
}
