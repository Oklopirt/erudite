function base_score(letter) {
  var letters = {};
  letters["а"] = 1;
  letters["б"] = 3;
  letters["в"] = 2;
  letters["г"] = 3;
  letters["д"] = 2;
  letters["е"] = 1;
  letters["ё"] = 1;
  letters["ж"] = 5;
  letters["з"] = 5;
  letters["и"] = 1;
  letters["й"] = 2;
  letters["к"] = 2;
  letters["л"] = 2;
  letters["м"] = 2;
  letters["н"] = 1;
  letters["о"] = 1;
  letters["п"] = 2;
  letters["р"] = 2;
  letters["с"] = 2;
  letters["т"] = 2;
  letters["у"] = 3;
  letters["ф"] = 10;
  letters["х"] = 5;
  letters["ц"] = 10;
  letters["ч"] = 5;
  letters["ш"] = 10;
  letters["щ"] = 10;
  letters["ъ"] = 10;
  letters["ы"] = 5;
  letters["ь"] = 5;
  letters["э"] = 10;
  letters["ю"] = 10;
  letters["я"] = 3;

  return letters[letter];
}
function bonus(td) {
  var letter = td.textContent.split('')[0];
  var sub = td.getElementsByTagName('sub')[0];
  var score = sub.textContent;

  switch (base_score(letter)) {
    case parseInt(score):
      sub.innerText = base_score(letter) * 2;
      sub.style.color = 'green';
      break;
    case parseInt(score) / 2:
      sub.innerText = base_score(letter) * 3;
      sub.style.color = 'yellow';
      break;
    case parseInt(score) / 3:
      sub.innerText = base_score(letter);
      sub.style.color = 'black';
      break;
  }
}
function add_word(coefficient) {
  var subs = document.getElementsByTagName('sub');

  var word_score = 0;
  var score = 0;
  for (var i = 0; i < subs.length; i++) {
    score = parseInt(subs[i].textContent);
    word_score = word_score + score;
  }

  result_word = document.getElementsByName('result_word')[0];
  result_word.innerText = document.getElementsByName('source_word')[0].value + ': ' +  word_score * coefficient;
}
function cp() {
  tds = document.getElementsByName('letters');
  for (var i = 0; i < tds.length; i++) {
    tds[i].innerText = '';
    tds[i].style.display = 'none';
  }

  // find source input
  input = document.getElementsByName('source_word')[0];

  // lower case
  input.value = input.value.toLowerCase();
  // russian only
  var russian = /[^а-яА-ЯёЁ]/g
  input.value = input.value.replace(russian, '');

  // make array from word
  var letters = input.value.split('');

  // find output tds
  output_tds = document.getElementsByName('letters');

  // letters each
  for (var i = 1; i <= letters.length; i++) {
    // current td innerHTML = letter and letter score
    output_tds[i - 1].innerHTML = letters[i - 1] + '<sub>' + base_score(letters[i - 1]) + '</sub>';

    // show current td
    output_tds[i - 1].style.display = 'block';
  }
}