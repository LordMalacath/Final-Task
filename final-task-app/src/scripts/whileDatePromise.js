const delayExecution = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export const whileDatePromise = async (expDate, delay, callBack) => {
  let currentDate = Date.now();
  while (currentDate < expDate) {
    await delayExecution(delay);
    currentDate += delay
  }

  return callBack()
}
