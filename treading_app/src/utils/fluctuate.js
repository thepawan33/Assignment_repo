const fluctuateIndexData = (prevValue, volatility = 100) => {
  const fluctuation = (Math.random() - 0.5) * 2 * volatility;
  const newValue = +(prevValue + fluctuation).toFixed(2);

  const change = +(newValue - prevValue).toFixed(2);

  const percentChange = +((change / prevValue) * 100).toFixed(2);

  return {
    value: newValue,
    change: change >= 0 ? `+${change.toFixed(2)}` : `${change.toFixed(2)}`,
    percent:
      percentChange >= 0
        ? `+${percentChange.toFixed(2)}%`
        : `${percentChange.toFixed(2)}%`,
    up: change >= 0,
  };
};

export { fluctuateIndexData };
