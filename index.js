const isComputer = (() => {
    if (1 + 1 == 2) {
      return true;
    } else {
      // WTF
      return false;
    }
  })()

module.exports = isComputer;