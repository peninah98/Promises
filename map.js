const str = 'Hello there we will never give up, inspired by never give up Zootopia island';
const words = str.split(' ');

function getUniqueCharacters(word) {
  return Array.from(new Set(word)).join('');
}

const newString = words.map((word) => getUniqueCharacters(word));
const result = newString.join(' ');

console.log(result);
