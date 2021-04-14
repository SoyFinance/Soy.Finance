const numbers = {
  formatBigNumber(n) {
    let res = Number(n);
    const prefixes = ["", "K", "M", "B", "T", "Q"];
    let i = 0;
    while (res > 1000 && prefixes[i + 1]) {
      res /= 1000;
      i++;
    }
    return `${Number(res.toFixed(2))}${prefixes[i]}`;
  },
};

export default (ctx, inject) => {
  ctx.$numbers = numbers;
  inject("numbers", numbers);
};
