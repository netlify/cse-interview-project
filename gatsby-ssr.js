
exports.wrapPageElement = ({ element, props }) => {

  // Skip SSR
  if (typeof window === 'undefined') {
    return null
  }

  return { element }
}