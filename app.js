function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareQuestion(raw) {
  const entries = Object.entries(raw.options).filter(([, text]) => text && text.trim());
  const shuffled = shuffle(entries);
  return {
    id: raw.id,
    category: raw.category,
    question: raw.question,
    options: shuffled.map(([letter, text]) => ({ letter, text })),
    correctLetter: raw.correct,
    correctText: raw.options[raw.correct],
  };
}

const state = {
  questions: [],
  index: 0,
  score: 0,
  answered: false,
};

const screens = {
  start: document.getElementById("screen-start"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result"),
};

const els = {
  questionCount: document.getElementById("question-count"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  category: document.getElementById("category"),
  question: document.getElementById("question"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  nextBtn: document.getElementById("btn-next"),
  startBtn: document.getElementById("btn-start"),
  restartBtn: document.getElementById("btn-restart"),
  scoreValue: document.getElementById("score-value"),
  totalValue: document.getElementById("total-value"),
  resultMessage: document.getElementById("result-message"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function startQuiz() {
  state.questions = shuffle(QUESTIONS_RAW).map(prepareQuestion);
  state.index = 0;
  state.score = 0;
  els.questionCount.textContent = state.questions.length;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.index];
  const total = state.questions.length;
  const current = state.index + 1;
  const pct = ((current - 1) / total) * 100;

  state.answered = false;
  els.progressFill.style.width = `${pct}%`;
  els.progressText.textContent = `Pytanie ${current} z ${total}`;
  els.category.textContent = q.category;
  els.question.textContent = q.question;
  els.feedback.classList.add("hidden");
  els.feedback.className = "feedback hidden";
  els.nextBtn.classList.add("hidden");

  els.options.innerHTML = "";
  q.options.forEach(({ letter, text }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.dataset.letter = letter;
    btn.innerHTML = `<span class="option-letter">${letter}</span><span>${escapeHtml(text)}</span>`;
    btn.addEventListener("click", () => selectAnswer(letter, btn));
    els.options.appendChild(btn);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function selectAnswer(letter, btn) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.index];
  const isCorrect = letter === q.correctLetter;

  if (isCorrect) state.score++;

  document.querySelectorAll(".option").forEach((opt) => {
    opt.disabled = true;
    const l = opt.dataset.letter;
    if (l === q.correctLetter) opt.classList.add("correct");
    else if (l === letter && !isCorrect) opt.classList.add("wrong");
  });

  els.feedback.classList.remove("hidden");
  els.feedback.classList.add(isCorrect ? "correct" : "incorrect");
  els.feedback.innerHTML = isCorrect
    ? "<strong>Poprawnie!</strong>"
    : `<strong>Niepoprawnie.</strong> Prawidłowa odpowiedź: <strong>${q.correctLetter}</strong> — ${escapeHtml(q.correctText)}`;

  els.nextBtn.classList.remove("hidden");
  els.nextBtn.textContent =
    state.index < state.questions.length - 1 ? "Następne pytanie" : "Zobacz wynik";
}

function nextQuestion() {
  state.index++;
  if (state.index >= state.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);

  els.scoreValue.textContent = state.score;
  els.totalValue.textContent = total;

  if (pct === 100) els.resultMessage.textContent = "Doskonale! Wszystkie odpowiedzi poprawne.";
  else if (pct >= 80) els.resultMessage.textContent = "Świetny wynik! Kontynuuj naukę.";
  else if (pct >= 60) els.resultMessage.textContent = "Nieźle — warto powtórzyć trudniejsze tematy.";
  else els.resultMessage.textContent = "Powtórz materiał i spróbuj jeszcze raz.";

  showScreen("result");
}

els.startBtn.addEventListener("click", startQuiz);
els.restartBtn.addEventListener("click", startQuiz);
els.nextBtn.addEventListener("click", nextQuestion);
