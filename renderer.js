const irregularVerbs = require('./verbs.js');

let currentVerbIndex = 0;
let shuffledVerbs = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadNextVerb() {
  const verb = shuffledVerbs[currentVerbIndex];
  document.getElementById('verb-base').textContent = verb.base;
  document.getElementById('past').value = '';
  document.getElementById('pastParticiple').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('next-button').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  shuffledVerbs = shuffle(irregularVerbs); // Mélanger les verbes
  loadNextVerb(); // Charger le premier verbe

  const quizForm = document.getElementById('quiz-form');
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const verb = shuffledVerbs[currentVerbIndex];
    const userPast = document.getElementById('past').value.trim().toLowerCase();
    const userPastParticiple = document.getElementById('pastParticiple').value.trim().toLowerCase();

    let feedback = '';

    if (verb.past.includes(userPast) && verb.pastParticiple.includes(userPastParticiple)) {
      feedback = 'Correct !';
    } else {
      feedback = `Incorrect. Le prétérit est "${verb.past.join(', ')}" et le participe passé est "${verb.pastParticiple.join(', ')}".`;
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('next-button').style.display = 'block'; // Montrer le bouton Suivant
  });

  document.getElementById('next-button').addEventListener('click', () => {
    currentVerbIndex = (currentVerbIndex + 1) % shuffledVerbs.length; // Passer au verbe suivant
    loadNextVerb();
  });
});
