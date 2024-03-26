// just the stuff that we use at limio packaged for the browser
import sha256 from "crypto-js/sha256.js"
import sha1 from "crypto-js/sha1.js"
import Base64 from "crypto-js/enc-base64.js"
import Utf8 from "crypto-js/enc-utf8.js"

export function sha256Hex(string) {
  return sha256(string).toString()
}

export function sha1Hex(string) {
  return sha1(string).toString()
}

export function base64Encode(str) {
  return Base64.stringify(Utf8.parse(str))
}
