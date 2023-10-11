export default function isPossiblePalindrome(num: number): boolean {
  const digits = String(num);
  if (digits.length === 1) {
    return true;
  }

  const digitCounts = new Map<string, number>();
  for (const digit of digits) {
    digitCounts.set(digit, (digitCounts.get(digit) ?? 0) + 1);
  }

  let oddCount = 0;
  for (const count of digitCounts.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}
