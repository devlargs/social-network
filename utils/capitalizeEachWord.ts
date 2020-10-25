const capitalizeEachWord = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map((i: string) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(" ");

export default capitalizeEachWord;
