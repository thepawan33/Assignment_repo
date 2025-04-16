function generateCandleFromValue(stock) {
  const close = stock.value;
  const change = parseFloat(stock.change);
  const open = +(close - change).toFixed(2);

  const high = +(Math.max(open, close) + Math.random() * 5).toFixed(2);
  const low = +(Math.min(open, close) - Math.random() * 5).toFixed(2);
  const volume = Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000;

  return {
    date: new Date().toISOString(), // 👈 AG Charts will render this nicely
    open,
    high,
    low,
    close,
    volume,
  };
}

export { generateCandleFromValue };
