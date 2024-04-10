// @flow
import * as React from "react"
import { sanitizeString } from "@limio/utils/string";
import { formatDisplayPrice } from "@limio/utils/string";
import { Modal } from "flowbite-react";



export function ShowMoreInfoModal(props): React.Node {

const {showMoreInfoModal, setShowMoreInfoModal, item, formatBulletPoints, showImage} = props
const {
  display_name__limio,
  display_price__limio,
  price__limio,
  offer_features__limio,
  cta_text__limio,
} = item.data.attributes

return(
<>
  <Modal show={showMoreInfoModal} onClose={() => setShowMoreInfoModal(false)}>
    <Modal.Header className="mb-4 text-2xl font-semibold">{display_name__limio}</Modal.Header>
    <Modal.Body>
      {showImage && (
    <div className="flex flex-row justify-center">
    <div style={{maxWidth: "40%"}}>
      <img src={item.data.attachments[0].url} alt="modal-image" className="rounded-lg object-scale-down"/>
      </div>
      </div>
      )}
      <div className="flex justify-center items-baseline my-4">
              <span className="mr-2 text-3xl font-extrabold"
                    dangerouslySetInnerHTML={{ __html: sanitizeString(formatDisplayPrice(display_price__limio, [{currencyCode: price__limio[0].currencyCode, value: price__limio[0].value,}])) }}
              />
            </div>
       
            <ul role="list" className="mb-8 space-y-4 text-left">
                  {offer_features__limio && formatBulletPoints(offer_features__limio)}
              </ul>
    </Modal.Body>
    <Modal.Footer>
    <button
                onClick={() => setShowMoreInfoModal(false)}
                className="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-lg">
                Close
              </button>
    </Modal.Footer>
  </Modal>
  </>
)  
}
