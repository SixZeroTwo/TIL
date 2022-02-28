function camelize(str) {
  return str
    .split('-').reduce((sum, current, index) => {
      let firstChar = current[0]
      if (index === 0) {
        return sum + current
      }
      else {
        return sum + firstChar.toUpperCase() + current.slice(1)
      }
    }, '')
}
console.log(camelize('mother-fucker-bitch'));