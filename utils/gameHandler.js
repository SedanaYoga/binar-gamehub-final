exports.findWinner = (p1, p2) => {
  const CHOICE_MAPPING = {
    R: {
      S: 1,
      P: -1,
      R: 0,
    },
    P: {
      R: 1,
      S: -1,
      P: 0,
    },
    S: {
      P: 1,
      R: -1,
      S: 0,
    },
  }
  return CHOICE_MAPPING[p1][p2]
}
