export const calculateTotal = (logs) => {
  return logs.reduce((sum, log) => sum + log.amount, 0);
};
