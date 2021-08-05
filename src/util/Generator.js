const resultsArray = [];
const calculateRows = (amount, duration, intrestRate) => {
  let a = amount; 
  let n = duration*12;
  let r = intrestRate/100/12;
  let rate = intrestRate/100;
  let b = 1+r;
  let p = a/((Math.pow(b, n)-1)/(Math.pow(b, n)*r));
  let paying = p.toFixed(2)
  const monthlyIntrestRate = Math.pow((1+rate), (1/12)) - 1;
  let saldo = amount; 
  let intrest;
  let kapitaal;
  resultsArray.length = 0;
  for (let i = 0; i < n; i++) {
    intrest = (saldo*intrestRate/100/12).toFixed(2);
    kapitaal = (p - intrest).toFixed(2);
    saldo -= kapitaal; 
    let result = {
      nr: i+1, 
      teBetalen: paying,
      intrest: intrest,
      kapitaal: kapitaal,
      saldo: saldo.toFixed(2)
    }
    resultsArray.push(result);
  }
}

module.exports = {calculateRows, resultsArray}
