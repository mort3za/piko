export const supportsBigInt = typeof BigInt === "function";

export const formatCompact = (number: number): string => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(number);
};
