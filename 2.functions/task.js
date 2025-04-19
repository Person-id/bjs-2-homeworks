function getArrayParams(...arrayElements) {
  let minValue = Infinity;
  let maxValue = -Infinity; 
  let sumElements = 0;
  let meanValue;
  for (let i = 0; i < arrayElements.length; i++) { 
    if (arrayElements[i] < minValue) {
      minValue = arrayElements[i];
    }
    if (arrayElements[i] > maxValue) {
      maxValue = arrayElements[i];
    }
    sumElements += arrayElements[i]; 
  }
  meanValue = Number((sumElements / arrayElements.length).toFixed(2));
  return { min: minValue, max: maxValue, avg: meanValue };
}

function summElementsWorker(...arrayElements) {
  let sumArrayElements = 0;
  if (arrayElements.length === 0) { 
    return 0; 
  }
    for (let i = 0; i < arrayElements.length; i++) {
      sumArrayElements += arrayElements[i];
    }
    return sumArrayElements;
}

function differenceMaxMinWorker(...arrayElements) {
  let maxValue = -Infinity;
  let minValue = Infinity;
  if (arrayElements.length === 0) { 
    return 0; 
  }
    for (let i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i] < minValue) {
        minValue = arrayElements[i];
      }
      if (arrayElements[i] > maxValue) {
        maxValue = arrayElements[i];
      }
    }
    return maxValue  - minValue; 
}

function differenceEvenOddWorker(...arrayElements) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arrayElements.length === 0) { 
    return 0; 
  }
    for (let i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i] % 2 === 0) {
        sumEvenElement += arrayElements[i];
      } else {
        sumOddElement += arrayElements[i];
      }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arrayElements) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arrayElements.length === 0) { 
    return 0; 
  }
    for (let i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i] % 2 === 0) {
        sumEvenElement += arrayElements[i];
        countEvenElement += 1;
      }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork (arrayOfData, funcWorker) {
  let maxWorkerResult = - Infinity;
  if (arrayOfData.length === 0) { 
    return 0;
  }
    for (let i = 0; i < arrayOfData.length; i++) {
      const resultFunc = funcWorker(...arrayOfData[i]);
      if (resultFunc > maxWorkerResult) {
        maxWorkerResult = resultFunc;
      }
    }
    return maxWorkerResult;
  }
