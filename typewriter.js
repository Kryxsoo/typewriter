const sentence = (str) => {
  let delay = 0;
  for (const char of str) {
    setTimeout (() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
};

sentence("hello World");
