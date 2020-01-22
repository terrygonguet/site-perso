export const formatter = new Intl.NumberFormat("FR-fr", {
  style: "currency",
  currency: "EUR",
})

/**
 * Returns a promise wich resolves with an Image
 * @param {string} src
 * @returns {Promise<HTMLImageElement>}
 */
export function getUISprite(src) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}
