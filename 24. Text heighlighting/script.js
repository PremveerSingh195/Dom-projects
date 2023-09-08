const paragraph = document.getElementById('paragraph');
const words = paragraph.innerText.split(' ');

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.length > 8) {
    words[i] = `<span class="highlighted">${word}</span>`;
  }
}

const highlightedText = words.join(' ');
paragraph.innerHTML = highlightedText;