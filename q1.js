/** 1 + 2 - 3 + 4 - 5...+-n = ?
 * 根據觀察的結果: 偶數為正數，奇數為負數，因為不確定末位是 +n 還是 -n，透過 n / 2 取得正負數
 * 偶數:
 * 1 + '( -1 ) + ( -1 ) ...' + n => 1 + (-1 * n) + n
 * 奇數:
 * 1 + '( -1 ) + ( -1 ) + ( -1 )'...n => 1 + ( -1 * n)
 * 因為偶數在等差中的項數會多出一項，所以再取得 -1 項數上除了去頭還需要去尾，所以當求得 -1 總數時除了首位的 1 還需要將末位的 n 加回來
 */

function calculate(n) {
  if (n % 2 === 0) {
    return 1 + ((n - 2) / 2) * -1 + n;
  } else {
    return (3 - n) / 2;
  }
}

const calc = calculate(10);

console.log(calc);
