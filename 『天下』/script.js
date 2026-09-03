/* =========================================================
   LANGUAGE / I18N — English (default) & Indonesian
   ========================================================= */
const LANG_KEY = "tebakAksara_lang_v1";

const I18N = {
  "aria.openSettings": { en: "Open settings", id: "Buka pengaturan" },
  "aria.closeSettings": { en: "Close settings", id: "Tutup pengaturan" },
  "aria.changePhoto": { en: "Change profile photo", id: "Ganti foto profil" },
  "aria.setNickname": { en: "Set your nickname", id: "Atur nickname kamu" },
  "aria.chooseLanguage": { en: "Choose language", id: "Pilih bahasa" },
  "aria.chooseScript": { en: "Choose a script", id: "Pilih aksara" },
  "aria.chooseScriptStudy": { en: "Choose a script to study", id: "Pilih aksara untuk belajar" },
  "profile.addNickname": { en: "+ Add nickname", id: "+ Tambah nickname" },
  "profile.nicknamePlaceholder": { en: "Your nickname...", id: "Nickname kamu..." },
  "titles.heading": { en: "🏅 Conquest Title Collection", id: "🏅 Koleksi Title penaklukkan" },
  "titles.hint": { en: "Complete every conquest ⚔️ to claim the title of Conqueror!", id: "Selesaikan setiap penaklukan ⚔️ untuk meraih gelar Penakluk!" },
  "appearance.language": { en: "Language", id: "Bahasa" },
  "about.heading": { en: "About", id: "Tentang" },
  "about.summary": { en: "👑 Noble Ranks", id: "👑 Tingkatan Kebangsawanan" },
  "about.intro": { en: "Conquer every Chapter Trial to climb from commoner to emperor.", id: "Taklukkan tiap Chapter Trial untuk rangkak naik dari rakyat jelata sampai kaisar." },
  "feedback.heading": { en: "Send Feedback", id: "Kirim Masukan" },
  "feedback.placeholder": { en: "Got a suggestion, idea, or found a bug? Write it here...", id: "Ada saran, ide, atau nemu bug? Tulis di sini..." },
  "feedback.button": { en: "✉️ Send Feedback", id: "✉️ Kirim Masukan" },
  "feedback.subject": { en: "Feedback — Learning Japanese App", id: "Masukan — Learning Japanese App" },
  "feedback.bodyDefault": { en: "Write your feedback here...", id: "Tulis masukanmu di sini..." },
  "common.cancel": { en: "Cancel", id: "Batal" },
  "common.back": { en: "← Back", id: "← Kembali" },
  "common.backArmed": { en: "Sure? Click again to cancel", id: "Yakin? Klik lagi untuk batalkan" },
  "conquestModal.confirm": { en: "Start Conquering", id: "Mulai Menaklukkan" },
  "conquest.modeTitle": { en: "Conquer Mode", id: "Mode penaklukkan" },
  "conquest.conquered": { en: "✓ Conquered", id: "✓ Ditaklukkan" },
  "conquest.cancelConquest": { en: "← Cancel Conquest", id: "← Batalkan penaklukkan" },
  "conquest.startThisChapter": { en: "⚔️ Start This Chapter", id: "⚔️ Mulai Chapter Ini" },
  "conquest.desc": { en: "Conquer all of {label} at once — {count} questions, one mistake and it's over.", id: "Taklukkan seluruh {label} sekaligus — {count} soal, satu kali salah langsung gagal." },
  "conquest.lockNote": { en: "🔒 Conquer {lockLabel} first before you can conquer {label}.", id: "🔒 Taklukkan {lockLabel} dulu sebelum bisa menaklukkan {label}." },
  "conquest.modalTitleWithLabel": { en: "⚔️ Conquer {label}", id: "⚔️ Taklukkan {label}" },
  "start.studyFirst": { en: "📖 Study First", id: "📖 Belajar Dulu" },
  "start.studyScriptFirst": { en: "📖 Study {label} First", id: "📖 Belajar {label} Dulu" },
  "start.chooseTierFirst": { en: "Choose a tier first", id: "Pilih tingkatan dulu" },
  "start.startCount": { en: "Start — {title} ({count} Questions)", id: "Mulai — {title} ({count} Soal)" },
  "start.startRandomCount": { en: "Start — {title} ({count} Random Questions)", id: "Mulai — {title} ({count} Soal Acak)" },
  "quiz.typeLabel": { en: "Question Type", id: "Tipe Soal" },
  "quiz.meaning": { en: "Meaning", id: "Arti" },
  "quiz.mixed": { en: "Mixed", id: "Campuran" },
  "quiz.difficultyLabel": { en: "Difficulty", id: "Tingkat Kesulitan" },
  "quiz.choices4": { en: "4 choices", id: "4 pilihan" },
  "quiz.choices8": { en: "8 choices", id: "8 pilihan" },
  "quiz.typeItYourself": { en: "type it yourself", id: "ketik sendiri" },
  "quiz.hardHint": { en: "🔥 Hard is only available for Hiragana & Katakana.", id: "🔥 Hard cuma tersedia untuk Hiragana & Katakana." },
  "quiz.streak": { en: "streak", id: "beruntun" },
  "quiz.typeRomajiPlaceholder": { en: "Type the romaji here...", id: "Ketik romaji-nya di sini..." },
  "quiz.answer": { en: "Answer", id: "Jawab" },
  "quiz.next": { en: "Next →", id: "Lanjut →" },
  "quiz.seeResults": { en: "See Results →", id: "Lihat Hasil →" },
  "quiz.guessRomaji": { en: "Guess the romaji", id: "Tebak romaji" },
  "quiz.guessMeaning": { en: "Guess the meaning", id: "Tebak artinya" },
  "quiz.guessFunction": { en: "Guess the function", id: "Tebak fungsinya" },
  "quiz.guessKalimat": { en: "Guess the Particle!", id: "Tebak Partikel!" },
  "quiz.function": { en: "Function", id: "Fungsi" },
  "quiz.kalimat": { en: "Particle", id: "Partikel" },
  "quiz.conquerLabel": { en: "⚔️ Conquer — {label} · Question {current}/{total}", id: "⚔️ penaklukkan — {label} · Soal {current}/{total}" },
  "quiz.chapterLabel": { en: "⚔️ {phaseLabel} · Question {current}/{total}", id: "⚔️ {phaseLabel} · Soal {current}/{total}" },
  "quiz.correct": { en: "Correct!", id: "Tepat!" },
  "quiz.failedAnswerWas": { en: 'Failed — the answer was "{answer}"', id: 'Gagal — jawabannya "{answer}"' },
  "quiz.missedAnswerWas": { en: 'Missed — the answer was "{answer}"', id: 'Meleset — jawabannya "{answer}"' },
  "quiz.meaningLabel": { en: "Meaning: {value}", id: "Arti: {value}" },
  "quiz.romajiLabel": { en: "Romaji: {value}", id: "Romaji: {value}" },
  "quiz.functionLabel": { en: "Function: {value}", id: "Fungsi: {value}" },
  "quiz.kalimatLabel": { en: "Example: {value}", id: "Kalimat: {value}" },
  "quiz.fillAnswerFirst": { en: "Fill in your answer before continuing.", id: "Isi dulu jawabannya sebelum lanjut." },
  "range.label": { en: "Question Range", id: "Rentang Soal" },
  "range.chooseRange": { en: "Choose Range", id: "Pilih Rentang" },
  "range.random": { en: "Random", id: "Acak" },
  "range.from": { en: "From", id: "Dari" },
  "range.to": { en: "To", id: "Sampai" },
  "range.randomCountLabel": { en: "Number of questions (picked randomly from this whole tier)", id: "Jumlah soal (diambil acak dari seluruh tingkatan ini)" },
  "range.all": { en: "All ({n})", id: "seluruh ({n})" },
  "range.randomHint": { en: "🎲 {count} random questions picked from {total} total in this tier", id: "🎲 {count} soal acak dipilih dari total {total} soal di tingkatan ini" },
  "range.oneSelected": { en: "1 question selected ({from})", id: "1 soal terpilih ({from})" },
  "range.manySelected": { en: "{count} questions selected ({from} → {to})", id: "{count} soal terpilih ({from} → {to})" },
  "learn.eyebrow": { en: "study mode", id: "mode belajar" },
  "learn.title": { en: "Character Tables", id: "Tabel Aksara" },
  "learn.sub": { en: "Memorize the shape and reading of each character before starting a Trial. Choose a script below.", id: "Hafalkan dulu bentuk dan cara baca tiap karakter sebelum mulai Trial. Pilih aksaranya di bawah." },
  "learn.readyStart": { en: "Ready — Start Trial", id: "Sudah Siap — Mulai Trial" },
  "learn.characters": { en: "characters", id: "karakter" },
  "learn.words": { en: "words", id: "kata" },
  "learn.patterns": { en: "patterns", id: "pola" },
  "learn.listenPronunciation": { en: "Listen to {text}, read {reading}", id: "Dengar ucapan {text}, dibaca {reading}" },
  "learn.listenExample": { en: "Listen to the example sentence", id: "Dengar kalimat contoh" },
  "learn.listenSegment": { en: "Listen to {seg}, read {rom}", id: "Dengar {seg}, dibaca {rom}" },
  "results.correct": { en: "correct", id: "tepat" },
  "results.accuracy": { en: "Accuracy {acc}%", id: "Akurasi {acc}%" },
  "results.bestStreak": { en: " · best streak {n}", id: " · beruntun terbaik {n}" },
  "results.needsPractice": { en: "Needs practice", id: "Perlu diulang" },
  "results.failureReason": { en: "Reasons for failure", id: "Penyebab kegagalan" },
  "results.retrySet": { en: "Retry This Set", id: "Ulangi Set Ini" },
  "results.tryAgainFromStart": { en: "⚔️ Try Again From Start", id: "⚔️ Coba Lagi dari Awal" },
  "results.conquerAgain": { en: "⚔️ Conquer Again", id: "⚔️ Taklukkan Lagi" },
  "results.greetConquestFail": { en: "Keep going, {name}! 💪", id: "Semangat, {name}! 💪" },
  "results.greetConquestSuccess": { en: "Perfect, {name}! 🏆", id: "Sempurna, {name}! 🏆" },
  "results.greetPerfect": { en: "Perfect, {name}! 🎉", id: "Sempurna, {name}! 🎉" },
  "results.greetAlmost": { en: "Almost perfect, {name}! Just a bit more.", id: "Hampir sempurna, {name}! Sedikit lagi." },
  "results.greetDecent": { en: "Not bad, {name}! Keep practicing.", id: "Lumayan, {name}! Terus berlatih ya." },
  "results.greetKeepGoing": { en: "Keep going, {name}! Try again, take it slow.", id: "Semangat, {name}! Coba lagi pelan-pelan." },
  "results.conquestFailBanner": { en: "💀 <b>Conquest Failed</b> — missed{phaseNote} (question {current} of {total}). {label} isn't conquered yet, try again from the start!", id: "💀 <b>penaklukkan Gagal</b> — meleset{phaseNote} (soal ke-{current} dari {total}). {label} belum takluk, coba lagi dari awal!" },
  "results.conquestFailPhaseNote": { en: " in {phase}", id: " di {phase}" },
  "results.conquestSuccessOpening": { en: "🏆 <b>Conquest Successful!</b> {epilogue}", id: "🏆 <b>penaklukkan Berhasil!</b> {epilogue}" },
  "results.conquestSuccessOpeningPlain": { en: "🏆 <b>Conquest Successful!</b> You've officially conquered all of {label}!", id: "🏆 <b>penaklukkan Berhasil!</b> Kamu resmi menaklukkan seluruh {label}!" },
  "results.newTitleEarned": { en: " New title earned: <b>{emoji} {title}</b> — check your collection in Settings.", id: " Title baru didapat: <b>{emoji} {title}</b> — cek koleksimu di Settings." },
  "results.knightCeremony": { en: " <br><br>⚔️ <b>Knighting Ceremony!</b> You've fully conquered Hiragana and Katakana — the Knight Captain lays his sword on both your shoulders before the whole town. From today you officially hold the title <b>{emoji} {title} ({subtitle})</b>!", id: " <br><br>⚔️ <b>Upacara Pengangkatan Ksatria!</b> Hiragana dan Katakana sudah kau taklukkan sepenuhnya — Kapten Ksatria meletakkan pedangnya di kedua bahumu di hadapan seluruh warga kota. Mulai hari ini kau resmi menyandang gelar <b>{emoji} {title} ({subtitle})</b>!" },
  "results.rankUp": { en: " Your rank rose to <b>{emoji} {title} ({subtitle})</b>", id: " Tingkatanmu naik menjadi <b>{emoji} {title} ({subtitle})</b>" },
  "results.rankUpPlain": { en: "Your rank rose! You are now <b>{emoji} {title} ({subtitle})</b>", id: "Tingkatanmu naik! Sekarang kamu adalah <b>{emoji} {title} ({subtitle})</b>" },
  "profile.highestN5": { en: "Highest N5 rank reached — {emoji} {title} unlocks once N4 material arrives.", id: "Tingkatan N5 tertinggi tercapai — {emoji} {title} akan terbuka begitu materi N4 hadir." },
  "profile.nextRank": { en: "{req} and rise to {emoji} {title}", id: "{req} untuk naik menjadi {emoji} {title}" },
  "profile.highestReached": { en: "Highest rank reached — take the throne, Emperor! 👑", id: "Tingkatan tertinggi tercapai — bertahtalah, Emperor! 👑" },
  "rank.comingSoon": { en: "Coming soon", id: "Segera hadir" },
  "learnCta.study": { en: "Study {label} First", id: "Belajar {label} Dulu" },
  "theme.light": { en: "Light Mode", id: "Mode Terang" },
  "theme.dark": { en: "Dark Mode", id: "Mode Gelap" },
  "aria.switchToLight": { en: "Switch to light mode", id: "Ganti ke mode terang" },
  "aria.switchToDark": { en: "Switch to dark mode", id: "Ganti ke mode gelap" },
  "conquest.cardTitleWithLabel": { en: "Conquer {label}", id: "Taklukkan {label}" },
  "conquestStory.eyebrowStart": { en: "⚔️ The Knight's Trial begins", id: "⚔️ Ujian Ksatria dimulai" },
  "conquestStory.eyebrowFinal": { en: "⚔️ Final chapter", id: "⚔️ Chapter terakhir" },
  "conquestStory.eyebrowNext": { en: "⚔️ Next chapter", id: "⚔️ Chapter berikutnya" },
  "conquestStory.titleWithScript": { en: "{label} — {script}", id: "{label} — {script}" },
  "conquestStory.diffLabel": { en: "🔥 type your own answer", id: "🔥 ketik jawaban sendiri" },
  "conquestStory.meta": { en: "{count} questions in this Chapter · {diff} · one mistake and the whole conquest fails.", id: "{count} soal di Chapter ini · {diff} · satu kali salah, seluruh penaklukkan gagal." },
  "conquestModal.threePhaseIntro": { en: "This isn't an ordinary trial — this is the Knight's Trial. Conquering {label} is split into 3 story Chapters (basic → dotted → combined), {count} questions in total.", id: "Ini bukan trial biasa — ini Ujian Ksatria. penaklukkan {label} terbagi menjadi 3 Chapter cerita (dasar → bertitik → gabungan), total {count} soal." },
  "conquestModal.rule.typeOnly": { en: "In <b>every Chapter</b>, you must <b>type your own</b> answer — there's no multiple choice at all.", id: "Di <b>seluruh Chapter</b>, kamu harus <b>mengetik sendiri</b> jawabannya — tidak ada pilihan ganda sama sekali." },
  "conquestModal.rule.oneWrongFails": { en: "Get <b>even one</b> answer wrong and the conquest instantly <b>FAILS</b>.", id: "Salah <b>satu saja</b> jawaban, penaklukkan langsung <b>GAGAL</b>." },
  "conquestModal.rule.failRestartChapter": { en: "If you fail, you'll have to start over from Chapter 1.", id: "Kalau gagal, kamu harus mengulang lagi dari Chapter 1." },
  "conquestModal.rule.becomeKnightSolo": { en: "Conquer this fully and you'll officially be <b>knighted (騎士)</b> — both the Hiragana &amp; Katakana trials complete!", id: "Taklukkan ini sampai tuntas dan kamu akan resmi <b>diangkat menjadi Knight (騎士)</b> — ujian Hiragana &amp; Katakana lunas keduanya!" },
  "conquestModal.rule.becomeKnightBoth": { en: "Conquer both Hiragana &amp; Katakana to officially be <b>knighted (騎士)</b>.", id: "Taklukkan Hiragana &amp; Katakana keduanya untuk resmi <b>diangkat menjadi Knight (騎士)</b>." },
  "conquestModal.singleIntro": { en: "You'll face all {count} {label} questions at once, shuffled.", id: "Kamu akan menghadapi seluruh {count} soal {label} sekaligus, diacak." },
  "conquestModal.rule.allAtOnce": { en: "All questions for this script will be shuffled and shown all at once, <b>without breaks</b>.", id: "seluruh soal aksara ini akan diacak dan ditampilkan sekaligus, <b>tanpa dipotong</b>." },
  "conquestModal.rule.failRestartFirst": { en: "If you fail, you'll have to start over from the first question.", id: "Kalau gagal, kamu harus mengulang lagi dari soal pertama." },

  "speedrun.cardTitleWithLabel": { en: "Speedrun {label}", id: "Speedrun {label}" },
  "speedrun.descNoRecord": { en: "Race through all {count} {label} questions as fast as you can — no record yet.", id: "Balapan menjawab seluruh {count} soal {label} secepat mungkin — belum ada record." },
  "speedrun.descWithRecord": { en: "Race through all {count} {label} questions as fast as you can — your best: <b>{time}</b>.", id: "Balapan menjawab seluruh {count} soal {label} secepat mungkin — rekormu: <b>{time}</b>." },
  "speedrun.modalTitleWithLabel": { en: "⚡ Speedrun {label}", id: "⚡ Speedrun {label}" },
  "speedrun.confirm": { en: "Ready?", id: "Siap?" },
  "speedrun.intro": { en: "You'll face all {count} {label} questions at once, shuffled — type the answer yourself, timed from the moment the countdown ends.", id: "Kamu akan menghadapi seluruh {count} soal {label} sekaligus, diacak — ketik sendiri jawabannya, waktu berjalan begitu hitung mundur selesai." },
  "speedrun.rule.timed": { en: "A timer runs the whole way through — answer as fast as you can!", id: "Timer berjalan dari awal sampai akhir — jawab secepat mungkin!" },
  "speedrun.rule.mistakesCost": { en: "Get more than 3 wrong and the run instantly fails.", id: "Salah lebih dari 3 kali, run langsung gagal." },
  "speedrun.rule.recordSaved": { en: "Only your fastest completed run is saved as your personal record.", id: "Hanya waktu tercepatmu yang berhasil diselesaikan yang disimpan sebagai record pribadimu." },
  "speedrun.rule.autoNext": { en: "Correct answer auto-advances to the next question — no need to press Enter.", id: "Jawaban benar otomatis lanjut ke soal berikutnya — nggak perlu pencet Enter." },
  "quiz.speedrunLabel": { en: "⚡ Speedrun — {label} · Question {current}/{total}", id: "⚡ Speedrun — {label} · Soal {current}/{total}" },
  "results.speedrunTime": { en: "Time: {time}", id: "Waktu: {time}" },
  "results.speedrunNewRecord": { en: "⚡ <b>New Record!</b> You finished {label} in <b>{time}</b>.", id: "⚡ <b>Rekor Baru!</b> Kamu menyelesaikan {label} dalam <b>{time}</b>." },
  "results.speedrunFirstRecord": { en: "⚡ <b>First record set!</b> You finished {label} in <b>{time}</b>.", id: "⚡ <b>Rekor pertama tercatat!</b> Kamu menyelesaikan {label} dalam <b>{time}</b>." },
  "results.speedrunNoRecord": { en: "You finished {label} in <b>{time}</b> — your best is still {best}.", id: "Kamu menyelesaikan {label} dalam <b>{time}</b> — rekor terbaikmu masih {best}." },
  "results.speedrunFailBanner": { en: "💀 <b>Speedrun Failed</b> — too many mistakes (question {current} of {total}). Try again!", id: "💀 <b>Speedrun Gagal</b> — kebanyakan salah (soal ke-{current} dari {total}). Coba lagi!" },
  "results.speedrunAgain": { en: "⚡ Speedrun Again", id: "⚡ Speedrun Lagi" },
  "speedrunRecords.heading": { en: "⚡ Speedrun Records", id: "⚡ Rekor Speedrun" },
  "speedrunRecords.hint": { en: "Your fastest completed run for each conquered script.", id: "Waktu tercepatmu untuk tiap aksara yang sudah ditaklukkan." },
  "speedrunRecords.empty": { en: "Conquer a script ⚔️ to unlock Speedrun Mode for it.", id: "Taklukkan sebuah aksara ⚔️ untuk membuka Mode Speedrun-nya." },
  "speedrunRecords.notPlayedYet": { en: "Not run yet", id: "Belum pernah dicoba" },
  "speedrun.countdownGo": { en: "GO!", id: "MULAI!" }
};

function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return (stored === "id" || stored === "en") ? stored : "en";
}
let LANG = getLang();
function setLang(lang) {
  LANG = (lang === "id") ? "id" : "en";
  localStorage.setItem(LANG_KEY, LANG);
}

function t(key, vars) {
  const entry = I18N[key];
  let str = entry ? (entry[LANG] || entry.en) : key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.split(`{${k}}`).join(vars[k]);
    });
  }
  return str;
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
}

const speechSupported = "speechSynthesis" in window;
let jaVoice = null;
function pickJaVoice() {
  if (!speechSupported) return;
  const voices = speechSynthesis.getVoices();
  jaVoice = voices.find(v => v.lang === "ja-JP") || voices.find(v => v.lang && v.lang.startsWith("ja")) || null;
}
if (speechSupported) {
  pickJaVoice();
  speechSynthesis.addEventListener("voiceschanged", pickJaVoice);

  // iOS Safari & some Android WebViews suspend the speech engine after a
  // period of inactivity, and it needs to be "unlocked" by a real user
  // gesture before it will ever produce sound. Nudge it once on the very
  // first tap/click anywhere in the app so later data-speak calls work.
  let speechUnlocked = false;
  const unlockSpeech = () => {
    if (speechUnlocked) return;
    speechUnlocked = true;
    try {
      speechSynthesis.resume();
      const primer = new SpeechSynthesisUtterance("");
      primer.volume = 0;
      speechSynthesis.speak(primer);
    } catch (err) { /* no-op */ }
  };
  document.addEventListener("pointerdown", unlockSpeech, { once: true, capture: true });

  // Some mobile browsers auto-pause the engine ~15s in; keep it alive.
  setInterval(() => {
    if (speechSynthesis.speaking) {
      speechSynthesis.pause();
      speechSynthesis.resume();
    }
  }, 10000);
}

let speakRequestId = 0;

function clearSpeakingHighlight() {
  document.querySelectorAll(".speaking").forEach(b => b.classList.remove("speaking"));
}

function speakJapanese(text, btn) {
  if (!speechSupported || !text) return;
  const requestId = ++speakRequestId;

  clearSpeakingHighlight();
  if (btn) btn.classList.add("speaking");

  // IMPORTANT: speak() must run synchronously inside the user-gesture
  // handler (no setTimeout/await before it) or mobile Safari silently
  // drops the audio with no error at all.
  speechSynthesis.cancel();
  speechSynthesis.resume();
  if (!jaVoice) pickJaVoice();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP";
  if (jaVoice) utter.voice = jaVoice;
  utter.rate = 0.85;
  utter.onend = () => { if (requestId === speakRequestId && btn) btn.classList.remove("speaking"); };
  utter.onerror = () => { if (requestId === speakRequestId && btn) btn.classList.remove("speaking"); };
  speechSynthesis.speak(utter);
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-speak]");
  if (!el) return;
  e.preventDefault();
  e.stopPropagation();
  speakJapanese(el.getAttribute("data-speak"), el);
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const el = e.target.closest("[data-speak]");
  if (!el) return;
  e.preventDefault();
  speakJapanese(el.getAttribute("data-speak"), el);
});

/* ---------------- theme ---------------- */
const themeToggle = document.getElementById("theme-toggle");
const themeSwitchInput = document.getElementById("theme-switch-input");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", theme === "dark" ? t("aria.switchToLight") : t("aria.switchToDark"));
  themeSwitchInput.checked = theme === "dark";
  const themeLabel = document.getElementById("theme-toggle-label");
  themeLabel.textContent = theme === "dark" ? t("theme.dark") : t("theme.light");
}
applyTheme(prefersDark ? "dark" : "light");

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}
themeToggle.addEventListener("click", toggleTheme);
themeSwitchInput.addEventListener("change", () => applyTheme(themeSwitchInput.checked ? "dark" : "light"));

/* ---------------- settings panel ---------------- */
const settingsBtn = document.getElementById("settings-toggle");
const settingsOverlay = document.getElementById("settings-overlay");
const settingsClose = document.getElementById("settings-close");
const fontSelect = document.getElementById("font-select");
const fontPreview = document.getElementById("font-preview");

const FONT_STACKS = {
  noto: `"Noto Sans JP", "Hiragino Sans", sans-serif`,
  bizud: `"BIZ UDGothic", "Hiragino Sans", sans-serif`,
  zenmaru: `"Zen Maru Gothic", "Hiragino Sans", sans-serif`,
  mplusrounded: `"M PLUS Rounded 1c", "Hiragino Sans", sans-serif`,
  klee: `"Klee One", "Hiragino Mincho ProN", serif`,
  mincho: `"Shippori Mincho", "Hiragino Mincho ProN", serif`
};

function applyFont(key) {
  const stack = FONT_STACKS[key] || FONT_STACKS.noto;
  document.documentElement.style.setProperty("--kana-font", stack);
  fontPreview.style.fontFamily = stack;
  fontSelect.value = key;
}
applyFont("noto");

function openSettings() {
  settingsOverlay.classList.add("open");
  settingsOverlay.setAttribute("aria-hidden", "false");
  settingsClose.focus();
}
function closeSettings() {
  settingsOverlay.classList.remove("open");
  settingsOverlay.setAttribute("aria-hidden", "true");
  settingsBtn.focus();
}
settingsBtn.addEventListener("click", openSettings);
settingsClose.addEventListener("click", closeSettings);
settingsOverlay.addEventListener("click", (e) => {
  if (e.target === settingsOverlay) closeSettings();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && settingsOverlay.classList.contains("open")) closeSettings();
});
fontSelect.addEventListener("change", () => applyFont(fontSelect.value));

/* ---------------- language ---------------- */
const langOptionsEl = document.getElementById("lang-options");
function applyLanguage(lang) {
  setLang(lang);
  document.documentElement.setAttribute("lang", LANG);
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === LANG);
  });
  applyStaticTranslations();
  rebuildLocalizedContent();
  refreshVisibleScreenText();
}
if (langOptionsEl) {
  langOptionsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    applyLanguage(btn.dataset.lang);
  });
}

function rebuildLocalizedContent() {
  rebuildMeaningPools();
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  renderProfile();
  renderNickname();
  renderTitleCollection();
  updateScriptConquestBadges();
  if (conquestOverlay.classList.contains("open")) openConquestOverlay();
}

function refreshVisibleScreenText() {
  if (!screenStart.classList.contains("hidden")) {
    renderLevels(currentScript);
  }
  if (!screenLearnEl.classList.contains("hidden")) {
    renderLearnTables(currentLearnScript);
  }
  if (!screenConquestStory.classList.contains("hidden") && state.conquestPhaseBoundaries) {
    renderConquestStory(state.conquestPhaseIndex);
  }
  if (!screenQuiz.classList.contains("hidden") && state.queue && state.queue.length) {
    renderQuestion();
  }
  if (!screenResults.classList.contains("hidden") && state.queue && state.queue.length) {
    renderResults();
  }
}


const RANK_KEY = "tebakAksara_rank_v1";
const PHOTO_KEY = "tebakAksara_photo_v1";
const ConquerY_KEY = "tebakAksara_Conquery_v1";
const NICKNAME_KEY = "tebakAksara_nickname_v1";

const RANK_LEVELS = [
  { title: "Commoner", subtitle: "平民", emoji: "🌾", req: "The starting point of your journey." },
  { title: "Knight", subtitle: "騎士", emoji: "⚔️", req: "Conquer all of Hiragana & Katakana." },
  { title: "Baron", subtitle: "男爵", emoji: "🎗️", req: "Conquer all N5 Basic Kotoba." },
  { title: "Viscount", subtitle: "子爵", emoji: "📯", req: "Understand all N5 Bunpō." },
  { title: "Count", subtitle: "伯爵", emoji: "🏛️", req: "Conquer all N5 Kanji." },
  { title: "Marquis", subtitle: "侯爵", emoji: "🏯", req: "Conquer all N5 material — Hiragana, Katakana, Basic Kotoba, Bunpō, and Kanji." },
  { title: "Duke", subtitle: "公爵", emoji: "🦅", req: "Conquer all N4 material.", locked: true },
  { title: "Archduke", subtitle: "大公", emoji: "🌟", req: "Conquer all N3 material.", locked: true },
  { title: "King", subtitle: "国王", emoji: "🏵️", req: "Conquer all N2 material.", locked: true },
  { title: "Emperor", subtitle: "天皇", emoji: "👑", req: "Conquer all N1 material.", locked: true }
];
const RANK_REQ_ID = {
  "The starting point of your journey.": "Titik awal perjalananmu.",
  "Conquer all of Hiragana & Katakana.": "Taklukkan seluruh Hiragana & Katakana.",
  "Conquer all N5 Basic Kotoba.": "Taklukkan seluruh Basic Kotoba N5.",
  "Understand all N5 Bunpō.": "Pahami seluruh Bunpō N5.",
  "Conquer all N5 Kanji.": "Taklukkan seluruh Kanji N5.",
  "Conquer all N5 material — Hiragana, Katakana, Basic Kotoba, Bunpō, and Kanji.": "Taklukkan seluruh materi N5 — Hiragana, Katakana, Basic Kotoba, Bunpō, dan Kanji.",
  "Conquer all N4 material.": "Taklukkan seluruh materi N4.",
  "Conquer all N3 material.": "Taklukkan seluruh materi N3.",
  "Conquer all N2 material.": "Taklukkan seluruh materi N2.",
  "Conquer all N1 material.": "Taklukkan seluruh materi N1."
};
function loc(str) {
  return LANG === "id" ? (RANK_REQ_ID[str] || str) : str;
}

function tf(entry) {
  if (entry == null) return "";
  if (typeof entry === "string") return entry;
  return entry[LANG] || entry.en || entry.id || "";
}

function getRankIndex() {
  return parseInt(localStorage.getItem(RANK_KEY) || "0", 10) || 0;
}
function setRankIndex(i) {
  localStorage.setItem(RANK_KEY, String(i));
}

/* ---- penguasaan per-aksara: Chapter "Kaisar" (all) yang sudah dituntaskan ---- */
function getConquery() {
  try { return JSON.parse(localStorage.getItem(ConquerY_KEY) || "{}"); }
  catch (e) { return {}; }
}
function markScriptConquered(scriptKey) {
  const m = getConquery();
  if (!m[scriptKey]) {
    m[scriptKey] = true;
    localStorage.setItem(ConquerY_KEY, JSON.stringify(m));
  }
}
function computeRankIndex() {
  const m = getConquery();
  let idx = 0;
  if (m.hiragana && m.katakana) idx = 1; // Knight
  if (idx >= 1 && m.kotoba) idx = 2; // Baron
  if (idx >= 2 && m.bunpo) idx = 3; // Viscount
  if (idx >= 3 && m.kanji) idx = 4; // Count
  if (idx >= 4) idx = 5; // Marquis — seluruh N5 tuntas
  return idx;
}
// dipanggil setelah menuntaskan Chapter "Kaisar" pada sebuah aksara
function promoteIfHigher(scriptKey, mode) {
  if (mode === "all") markScriptConquered(scriptKey);
  const computed = computeRankIndex();
  if (computed > getRankIndex()) {
    setRankIndex(computed);
    return true;
  }
  return false;
}

/* =========================================================
   KOLEKSI TITLE — title khusus per aksara, didapat dari Mode penaklukkan
   ========================================================= */
const TITLES_KEY = "tebakAksara_titles_v1";

const CONQUEST_TITLES = {
  hiragana: { title: "Hiragana Conqueror", emoji: "あ" },
  katakana: { title: "Katakana Conqueror", emoji: "ア" },
  kotoba: { title: "Basic Kotoba Conqueror", emoji: "語" },
  bunpo: { title: "Bunpō Conqueror", emoji: "文" },
  kanji: { title: "Kanji N5 Conqueror", emoji: "漢" }
};

// cerita sederhana buat Mode penaklukkan 3 Chapter — cuma dipakai utk Hiragana & Katakana,
// masing-masing Chapter dipetakan ke tier1 (dasar) / tier2 (bertitik) / tier3 (gabungan).
// cerita satu kesatuan: Hiragana = Ujian Ksatria Tahap Pertama (desa asal),
// Katakana = Ujian Ksatria Tahap Kedua (kota pelabuhan) — menuntaskan keduanya
// resmi mengangkat pemain menjadi Knight (騎士), sesuai RANK_LEVELS[1].
const CONQUEST_STORY = {
  hiragana: {
    epilogue: "The magistrate stamps his official seal on your letter of recommendation. The First Trial of Knighthood is complete — you're officially recognized as ready to move on to the Second Trial in the port city, where Katakana awaits.",
    phases: [
      {
        label: "Chapter 1 — The Village Hall Gate",
        text: "⚔️ Since childhood you've only heard stories of the Imperial Knights from travelers passing through your village. Today, an envoy from the Knights' Hall has finally opened enrollment for new students. The first requirement: prove you can read and write all 46 basic Hiragana characters yourself in front of the village hall scribe — no cheat sheets, no multiple choice, purely from memory."
      },
      {
        label: "Chapter 2 — The Spy's Cipher",
        text: "🎉 The village hall scribe nods, satisfied — your name is recorded as a candidate student! But before handing over the letter of recommendation, he produces a scroll of cipher text full of dotted and small-circled characters (dakuten & handakuten) seized from an enemy spy. \"If you can read this cipher,\" he says, \"you're worthy of becoming a knight's apprentice.\" Write out each sound yourself."
      },
      {
        label: "Chapter 3 — The Magistrate's Decree",
        text: "✨ You've cracked the cipher. Before long, the local magistrate arrives bearing an official decree full of combined yōon characters — きゃ, しゅ, ちょ — to test you directly. This is the final trial before you may set off for the port city for the Second Trial of Knighthood."
      }
    ]
  },
  katakana: {
    epilogue: "The Knight Captain sheathes his sword and lays it on both your shoulders. \"Rise, Knight.\" That very night, before torchlight and the crash of harbor waves, you're officially made an Imperial Knight — two trials, Hiragana and Katakana, fully conquered.",
    phases: [
      {
        label: "Chapter 1 — The Harbor Gate",
        text: "⚔️ Armed with the magistrate's letter of recommendation, you arrive at a port city bustling with foreign ships and Katakana signboards. The gate officer, a knight-in-training, challenges you to read all 46 basic katakana characters one by one — no options, just write your own answers."
      },
      {
        label: "Chapter 2 — The Foreign Ship's Cargo Manifest",
        text: "🎉 The gate opens! But at the dock, a foreign merchant hands you a cargo manifest full of dakuten & handakuten dotted item names mixed with foreign accents. \"If you want to be a knight,\" he says, \"you must be able to read this without a single misspelling.\" Write out each answer yourself."
      },
      {
        label: "Chapter 3 — The Knight Captain's Decree",
        text: "✨ You've successfully read the entire cargo manifest. At the harbor watchtower, the Knight Captain himself steps in to test you with foreign combined yōon characters — kya, shu, cho — as the final trial. If you pass, the title of Knight will be officially bestowed this very night."
      }
    ]
  }
};
const CONQUEST_STORY_ID = {
  hiragana: {
    epilogue: "Bupati membubuhkan cap resminya pada surat rekomendasimu. Ujian Ksatria Tahap Pertama tuntas — kau resmi diakui layak melangkah ke Ujian Tahap Kedua di kota pelabuhan, tempat Katakana menanti.",
    phases: [
      "⚔️ Sejak kecil kau hanya mendengar cerita tentang Ksatria Kekaisaran dari para musafir yang singgah di desamu. Hari ini, utusan Balai Ksatria akhirnya membuka pendaftaran murid baru. Syarat pertama: buktikan kau bisa membaca dan menulis sendiri 46 aksara dasar Hiragana di hadapan penulis balai desa — tanpa contekan, tanpa pilihan ganda, murni dari ingatanmu.",
      "🎉 Penulis balai desa mengangguk puas — namamu dicatat sebagai calon murid! Tapi sebelum surat rekomendasi diserahkan, ia menyodorkan gulungan sandi berisi huruf-huruf bertitik dan berlingkar kecil (dakuten & handakuten) yang disita dari mata-mata musuh. \"Kalau kau bisa membaca sandi ini,\" katanya, \"kau pantas menjadi murid ksatria.\" Tuliskan sendiri setiap bunyinya.",
      "✨ Sandi berhasil kau pecahkan. Tak lama, Bupati setempat datang membawa titah resmi penuh aksara gabungan yōon — きゃ, しゅ, ちょ — untuk mengujimu langsung. Ini ujian pemungkas sebelum kau boleh berangkat ke kota pelabuhan untuk Ujian Ksatria Tahap Kedua."
    ],
    phaseLabels: ["Chapter 1 — Gerbang Balai Desa", "Chapter 2 — Sandi Sang Mata-Mata", "Chapter 3 — Titah Sang Bupati"]
  },
  katakana: {
    epilogue: "Kapten Ksatria menyarungkan pedangnya dan meletakkannya di kedua bahumu. \"Bangkitlah, Ksatria.\" Malam itu juga, di hadapan obor dan derap ombak pelabuhan, kau resmi diangkat menmenjadi Ksatria Kekaisaran — dua ujian, Hiragana dan Katakana, telah kau taklukkan sepenuhnya.",
    phases: [
      "⚔️ Berbekal surat rekomendasi dari Bupati, kau tiba di kota pelabuhan yang ramai oleh kapal asing dan papan nama beraksara Katakana. Petugas gerbang, seorang ksatria magang, menantangmu membaca 46 aksara dasar katakana satu per satu — tanpa pilihan, langsung tulis jawabanmu sendiri.",
      "🎉 Gerbang terbuka! Namun di dermaga, seorang saudagar asing menyerahkan daftar muatan kapal penuh nama barang bertitik dakuten & handakuten yang bercampur logat asing. \"Kalau kau mau menjadi ksatria,\" katanya, \"kau harus bisa baca ini tanpa salah eja.\" Tuliskan sendiri setiap jawabanmu.",
      "✨ Seluruh daftar muatan berhasil kau baca. Di menara pengawas pelabuhan, Kapten Ksatria sendiri turun tangan mengujimu dengan aksara gabungan yōon asing — kya, shu, cho — sebagai ujian pemungkas. Kalau kau lulus, gelar Ksatria akan resmi disematkan malam ini juga."
    ],
    phaseLabels: ["Chapter 1 — Gerbang Pelabuhan", "Chapter 2 — Daftar Muatan Kapal Asing", "Chapter 3 — Titah Sang Kapten Ksatria"]
  }
};
// returns the localized conquest story object for a script, matching CONQUEST_STORY's shape
function getLocalizedConquestStory(scriptKey) {
  if (LANG !== "id") return CONQUEST_STORY[scriptKey];
  const en = CONQUEST_STORY[scriptKey];
  const idv = CONQUEST_STORY_ID[scriptKey];
  return {
    epilogue: idv.epilogue,
    phases: en.phases.map((p, i) => ({ label: idv.phaseLabels[i], text: idv.phases[i] }))
  };
}

// urutan wajib Mode penaklukkan: tiap aksara harus ditaklukkan berurutan,
// tidak bisa lompat (mis. Katakana harus menunggu Hiragana takluk dulu).
const CONQUEST_ORDER = Object.keys(CONQUEST_TITLES);
// return key aksara prasyarat yang belum ditaklukkan, atau null kalau sudah boleh.
function getConquestLockReason(scriptKey) {
  const idx = CONQUEST_ORDER.indexOf(scriptKey);
  if (idx <= 0) return null;
  const earned = getConqueredTitles();
  for (let i = 0; i < idx; i++) {
    if (!earned[CONQUEST_ORDER[i]]) return CONQUEST_ORDER[i];
  }
  return null;
}

function getConqueredTitles() {
  try { return JSON.parse(localStorage.getItem(TITLES_KEY) || "{}"); }
  catch (e) { return {}; }
}
// menandai sebuah aksara sebagai sudah ditaklukkan; return true kalau title-nya baru didapat
function earnConquestTitle(scriptKey) {
  const t = getConqueredTitles();
  if (!t[scriptKey]) {
    t[scriptKey] = true;
    localStorage.setItem(TITLES_KEY, JSON.stringify(t));
    return true;
  }
  return false;
}

function renderTitleCollection() {
  const el = document.getElementById("title-collection");
  if (!el) return;
  const earned = getConqueredTitles();
  el.innerHTML = Object.keys(CONQUEST_TITLES).map(key => {
    const ct = CONQUEST_TITLES[key];
    const has = !!earned[key];
    return `
      <div class="title-badge ${has ? 'earned' : 'locked'}">
        <span class="title-badge-emoji">${has ? ct.emoji : '🔒'}</span>
        <span class="title-badge-name">${has ? ct.title : '???'}</span>
      </div>`;
  }).join("");
}

// menandai script-tab yang aksaranya sudah ditaklukkan (start screen)
function updateScriptConquestBadges() {
  const earned = getConqueredTitles();
  document.querySelectorAll('#script-tabs .script-tab').forEach(btn => {
    btn.classList.toggle('conquered', !!earned[btn.dataset.script]);
  });
}

/* =========================================================
   MODE SPEEDRUN — dibuka per-aksara begitu Mode penaklukkan (conquest)
   untuk aksara itu berhasil ditaklukkan. Rekor waktu tercepat (ms)
   disimpan per-aksara di localStorage.
   ========================================================= */
const SPEEDRUN_KEY = "tebakAksara_speedrun_v1";

function getSpeedrunRecords() {
  try { return JSON.parse(localStorage.getItem(SPEEDRUN_KEY) || "{}"); }
  catch (e) { return {}; }
}
function getSpeedrunBest(scriptKey) {
  const r = getSpeedrunRecords();
  return typeof r[scriptKey] === "number" ? r[scriptKey] : null;
}
// simpan waktu (ms) kalau ini lebih cepat dari rekor sebelumnya (atau rekor pertama).
// return { isNewRecord, prevBest (ms|null) }
function saveSpeedrunTime(scriptKey, timeMs) {
  const r = getSpeedrunRecords();
  const prevBest = typeof r[scriptKey] === "number" ? r[scriptKey] : null;
  const isNewRecord = prevBest === null || timeMs < prevBest;
  if (isNewRecord) {
    r[scriptKey] = timeMs;
    localStorage.setItem(SPEEDRUN_KEY, JSON.stringify(r));
  }
  return { isNewRecord, prevBest };
}
function formatSpeedrunTime(ms) {
  if (typeof ms !== "number") return null;
  const totalCs = Math.floor(ms / 10);
  const minutes = Math.floor(totalCs / 6000);
  const seconds = Math.floor((totalCs % 6000) / 100);
  const cs = totalCs % 100;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
}

// daftar rekor speedrun, ditampilkan di panel Settings tepat di bawah kartu Profile.
// hanya menampilkan aksara yang sudah ditaklukkan (speedrun-nya baru terbuka setelah itu).
function renderSpeedrunRecords() {
  const el = document.getElementById("speedrun-records");
  if (!el) return;
  const earned = getConqueredTitles();
  const conqueredKeys = Object.keys(CONQUEST_TITLES).filter(key => !!earned[key]);
  if (conqueredKeys.length === 0) {
    el.innerHTML = `<p class="speedrun-records-empty">${t("speedrunRecords.empty")}</p>`;
    return;
  }
  el.innerHTML = conqueredKeys.map(key => {
    const ct = CONQUEST_TITLES[key];
    const script = SCRIPTS[key];
    const best = getSpeedrunBest(key);
    const timeText = best !== null ? formatSpeedrunTime(best) : t("speedrunRecords.notPlayedYet");
    return `
      <div class="speedrun-record-row">
        <span class="speedrun-record-emoji">${ct.emoji}</span>
        <span class="speedrun-record-label">${script ? script.label : key}</span>
        <span class="speedrun-record-time ${best === null ? "no-record" : ""}">${timeText}</span>
      </div>`;
  }).join("");
}

const profileEmojiEl = document.getElementById("profile-emoji");
const profileTitleEl = document.getElementById("profile-title");
const profileSubtitleEl = document.getElementById("profile-subtitle");
const profileDotsEl = document.getElementById("profile-dots");
const profileNextEl = document.getElementById("profile-next");

function renderProfile() {
  const idx = getRankIndex();
  const rank = RANK_LEVELS[idx];
  const next = RANK_LEVELS[idx + 1];
  profileEmojiEl.textContent = rank.emoji;
  profileTitleEl.textContent = rank.title;
  profileSubtitleEl.textContent = rank.subtitle;
  profileDotsEl.innerHTML = RANK_LEVELS.map((_, i) => `<span class="${i <= idx ? 'filled' : ''}"></span>`).join("");
  if (next && next.locked) {
    profileNextEl.textContent = t("profile.highestN5", { emoji: next.emoji, title: next.title });
  } else if (next) {
    profileNextEl.textContent = t("profile.nextRank", { req: loc(next.req), emoji: next.emoji, title: next.title });
  } else {
    profileNextEl.textContent = t("profile.highestReached");
  }
  renderRankLadder(idx);
  renderSpeedrunRecords();
}

/* ---- daftar tingkatan kebangsawanan di panel About ---- */
function renderRankLadder(idx) {
  const el = document.getElementById("rank-ladder");
  if (!el) return;
  el.innerHTML = RANK_LEVELS.map((r, i) => {
    const status = r.locked ? "locked" : (i < idx ? "done" : i === idx ? "current" : "todo");
    const soon = r.locked ? `<span class="rank-soon">${t("rank.comingSoon")}</span>` : "";
    return `
      <li class="rank-item ${status}">
        <span class="rank-emoji">${r.emoji}</span>
        <span class="rank-body">
          <span class="rank-name">${r.title} <span class="rank-jp">${r.subtitle}</span></span>
          <span class="rank-req">${loc(r.req)}</span>
        </span>
        ${soon}
      </li>`;
  }).join("");
}

/* ---- foto profil ---- */
const avatarImgEl = document.getElementById("profile-avatar-img");
const avatarPlaceholderEl = document.getElementById("profile-avatar-placeholder");
const avatarBtn = document.getElementById("profile-avatar-btn");
const photoInput = document.getElementById("profile-photo-input");

function renderAvatar() {
  const dataUrl = localStorage.getItem(PHOTO_KEY);
  if (dataUrl) {
    avatarImgEl.src = dataUrl;
    avatarImgEl.classList.remove("hidden");
    avatarPlaceholderEl.classList.add("hidden");
  } else {
    avatarImgEl.classList.add("hidden");
    avatarPlaceholderEl.classList.remove("hidden");
  }
}
renderAvatar();

avatarBtn.addEventListener("click", () => photoInput.click());
photoInput.addEventListener("change", () => {
  const file = photoInput.files && photoInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem(PHOTO_KEY, reader.result);
    renderAvatar();
  };
  reader.readAsDataURL(file);
});

/* ---- nickname profil ---- */
function getNickname() {
  return (localStorage.getItem(NICKNAME_KEY) || "").trim();
}
function setNickname(name) {
  localStorage.setItem(NICKNAME_KEY, name);
}

const nicknameBtnEl = document.getElementById("profile-nickname-btn");
const nicknameTextEl = document.getElementById("profile-nickname-text");
const nicknameInputEl = document.getElementById("profile-nickname-input");

function renderNickname() {
  const name = getNickname();
  nicknameTextEl.textContent = name || t("profile.addNickname");
  nicknameBtnEl.classList.toggle("has-name", !!name);
}
renderNickname();

function openNicknameEditor() {
  nicknameInputEl.value = getNickname();
  nicknameBtnEl.classList.add("hidden");
  nicknameInputEl.classList.remove("hidden");
  nicknameInputEl.focus();
  nicknameInputEl.select();
}
function commitNickname() {
  const val = nicknameInputEl.value.trim().slice(0, 18);
  setNickname(val);
  nicknameInputEl.classList.add("hidden");
  nicknameBtnEl.classList.remove("hidden");
  renderNickname();
}
nicknameBtnEl.addEventListener("click", openNicknameEditor);
nicknameInputEl.addEventListener("blur", commitNickname);
nicknameInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    nicknameInputEl.blur();
  } else if (e.key === "Escape") {
    nicknameInputEl.value = getNickname();
    nicknameInputEl.blur();
  }
});

/* =========================================================
   DATA — Hiragana, Katakana, Kanji N5
   ========================================================= */

/* ---- Hiragana ---- */
const HIRAGANA_TIER1 = [
  ["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
  ["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
  ["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
  ["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
  ["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"],
  ["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"],
  ["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
  ["や", "ya"], ["ゆ", "yu"], ["よ", "yo"],
  ["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"],
  ["わ", "wa"], ["を", "wo"], ["ん", "n"]
];
const HIRAGANA_TIER2 = [
  ["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"],
  ["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"],
  ["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"],
  ["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"],
  ["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]
];
const HIRAGANA_TIER3 = [
  ["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"],
  ["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"],
  ["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"],
  ["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"],
  ["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"],
  ["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"],
  ["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"],
  ["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"],
  ["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"],
  ["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"],
  ["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]
];
const GOJUON_HIRAGANA = {
  tier1: [
    { label: "", cols: 5, chars: [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]] },
    { label: "k", cols: 5, chars: [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]] },
    { label: "s", cols: 5, chars: [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]] },
    { label: "t", cols: 5, chars: [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]] },
    { label: "n", cols: 5, chars: [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]] },
    { label: "h", cols: 5, chars: [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]] },
    { label: "m", cols: 5, chars: [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]] },
    { label: "y", cols: 5, chars: [["や", "ya"], null, ["ゆ", "yu"], null, ["よ", "yo"]] },
    { label: "r", cols: 5, chars: [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]] },
    { label: "w", cols: 5, chars: [["わ", "wa"], null, null, null, ["を", "wo"]] },
    { label: "n", cols: 5, chars: [["ん", "n"], null, null, null, null] }
  ],
  tier2: [
    { label: "g", cols: 5, chars: [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]] },
    { label: "z", cols: 5, chars: [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]] },
    { label: "d", cols: 5, chars: [["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"]] },
    { label: "b", cols: 5, chars: [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]] },
    { label: "p", cols: 5, chars: [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]] }
  ],
  tier3: [
    { label: "ky", cols: 3, chars: [["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"]] },
    { label: "sh", cols: 3, chars: [["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"]] },
    { label: "ch", cols: 3, chars: [["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"]] },
    { label: "ny", cols: 3, chars: [["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"]] },
    { label: "hy", cols: 3, chars: [["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"]] },
    { label: "my", cols: 3, chars: [["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"]] },
    { label: "ry", cols: 3, chars: [["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"]] },
    { label: "gy", cols: 3, chars: [["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"]] },
    { label: "j", cols: 3, chars: [["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"]] },
    { label: "by", cols: 3, chars: [["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"]] },
    { label: "py", cols: 3, chars: [["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]] }
  ]
};

/* ---- Katakana ---- */
const KATAKANA_TIER1 = [
  ["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"],
  ["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"],
  ["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"],
  ["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"],
  ["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"],
  ["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"],
  ["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"],
  ["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"],
  ["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"],
  ["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]
];
const KATAKANA_TIER2 = [
  ["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"],
  ["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"],
  ["ダ", "da"], ["ヂ", "ji"], ["ヅ", "zu"], ["デ", "de"], ["ド", "do"],
  ["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"],
  ["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"]
];
const KATAKANA_TIER3 = [
  ["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"],
  ["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"],
  ["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"],
  ["ニャ", "nya"], ["ニュ", "nyu"], ["ニョ", "nyo"],
  ["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"],
  ["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"],
  ["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"],
  ["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"],
  ["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"],
  ["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"],
  ["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"]
];
const GOJUON_KATAKANA = {
  tier1: [
    { label: "", cols: 5, chars: [["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"]] },
    { label: "k", cols: 5, chars: [["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"]] },
    { label: "s", cols: 5, chars: [["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"]] },
    { label: "t", cols: 5, chars: [["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"]] },
    { label: "n", cols: 5, chars: [["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"]] },
    { label: "h", cols: 5, chars: [["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"]] },
    { label: "m", cols: 5, chars: [["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"]] },
    { label: "y", cols: 5, chars: [["ヤ", "ya"], null, ["ユ", "yu"], null, ["ヨ", "yo"]] },
    { label: "r", cols: 5, chars: [["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"]] },
    { label: "w", cols: 5, chars: [["ワ", "wa"], null, null, null, ["ヲ", "wo"]] },
    { label: "n", cols: 5, chars: [["ン", "n"], null, null, null, null] }
  ],
  tier2: [
    { label: "g", cols: 5, chars: [["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"]] },
    { label: "z", cols: 5, chars: [["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"]] },
    { label: "d", cols: 5, chars: [["ダ", "da"], ["ヂ", "ji"], ["ヅ", "zu"], ["デ", "de"], ["ド", "do"]] },
    { label: "b", cols: 5, chars: [["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"]] },
    { label: "p", cols: 5, chars: [["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"]] }
  ],
  tier3: [
    { label: "ky", cols: 3, chars: [["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"]] },
    { label: "sh", cols: 3, chars: [["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"]] },
    { label: "ch", cols: 3, chars: [["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"]] },
    { label: "ny", cols: 3, chars: [["ニャ", "nya"], ["ニュ", "nyu"], ["ニョ", "nyo"]] },
    { label: "hy", cols: 3, chars: [["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"]] },
    { label: "my", cols: 3, chars: [["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"]] },
    { label: "ry", cols: 3, chars: [["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"]] },
    { label: "gy", cols: 3, chars: [["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"]] },
    { label: "j", cols: 3, chars: [["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"]] },
    { label: "by", cols: 3, chars: [["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"]] },
    { label: "py", cols: 3, chars: [["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"]] }
  ]
};

/* ---- Kanji N5 (char, reading-for-learning, meaning-for-quiz, kana-for-TTS) ----
   elemen ke-4 (kana) WAJIB diisi untuk kanji tunggal — TTS browser sering "menebak"
   cara baca sendiri kalau cuma dikasih 1 karakter kanji mentah (mis. 四 dibaca "shi"
   padahal yang diajarkan "yon", 七 dibaca "shichi" padahal "nana", 土 dibaca "do"
   padahal "tsuchi"). Dengan mengucapkan kana-nya langsung, audio selalu cocok teks. */
const KANJI_TIER1 = [
  ["一", "ichi", { en: "one (1)", id: "satu (1)" }, "いち"], ["二", "ni", { en: "two (2)", id: "dua (2)" }, "に"], ["三", "san", { en: "three (3)", id: "tiga (3)" }, "さん"], ["四", "yon", { en: "four (4)", id: "empat (4)" }, "よん"],
  ["五", "go", { en: "five (5)", id: "lima (5)" }, "ご"], ["六", "roku", { en: "six (6)", id: "enam (6)" }, "ろく"], ["七", "nana", { en: "seven (7)", id: "tujuh (7)" }, "なな"], ["八", "hachi", { en: "eight (8)", id: "delapan (8)" }, "はち"],
  ["九", "kyuu", { en: "nine (9)", id: "sembilan (9)" }, "きゅう"], ["十", "juu", { en: "ten (10)", id: "sepuluh (10)" }, "じゅう"], ["人", "hito", { en: "person", id: "orang" }, "ひと"], ["日", "hi / nichi", { en: "day / sun", id: "hari / matahari" }, "ひ"],
  ["月", "tsuki", { en: "moon / month", id: "bulan (langit) / bulan (kalender)" }, "つき"], ["火", "hi / ka", { en: "fire", id: "api" }, "ひ"], ["水", "mizu", { en: "water", id: "air" }, "みず"], ["木", "ki", { en: "tree / wood", id: "pohon / kayu" }, "き"]
];
const KANJI_TIER2 = [
  ["金", "kin", { en: "gold / money", id: "emas / uang" }, "きん"], ["土", "tsuchi", { en: "earth / soil", id: "tanah" }, "つち"], ["年", "toshi", { en: "year", id: "tahun" }, "とし"], ["本", "hon", { en: "book / origin", id: "buku / asal" }, "ほん"],
  ["中", "naka", { en: "middle / inside", id: "tengah / dalam" }, "なか"], ["大", "ookii", { en: "big", id: "besar" }, "おおきい"], ["小", "chiisai", { en: "small", id: "kecil" }, "ちいさい"], ["上", "ue", { en: "up / above", id: "atas" }, "うえ"],
  ["下", "shita", { en: "down / below", id: "bawah" }, "した"], ["左", "hidari", { en: "left", id: "kiri" }, "ひだり"], ["右", "migi", { en: "right", id: "kanan" }, "みぎ"], ["山", "yama", { en: "mountain", id: "gunung" }, "やま"],
  ["川", "kawa", { en: "river", id: "sungai" }, "かわ"], ["田", "ta", { en: "rice field", id: "sawah" }, "た"], ["女", "onna", { en: "woman", id: "perempuan" }, "おんな"], ["男", "otoko", { en: "man", id: "laki-laki" }, "おとこ"]
];
const KANJI_TIER3 = [
  ["子", "ko", { en: "child", id: "anak" }, "こ"], ["学", "gaku", { en: "study / learning", id: "belajar / ilmu" }, "がく"], ["校", "kou", { en: "school", id: "sekolah" }, "こう"], ["先", "sen", { en: "before / previous", id: "sebelum / sebelumnya" }, "せん"],
  ["生", "sei", { en: "life / born", id: "hidup / lahir" }, "せい"], ["私", "watashi", { en: "I / me", id: "saya / aku" }, "わたし"], ["今", "ima", { en: "now", id: "sekarang" }, "いま"], ["何", "nani", { en: "what", id: "apa" }, "なに"],
  ["時", "ji", { en: "time / o'clock", id: "waktu / jam" }, "じ"], ["分", "fun", { en: "minute / part", id: "menit / bagian" }, "ふん"], ["半", "han", { en: "half", id: "setengah" }, "はん"], ["週", "shuu", { en: "week", id: "minggu" }, "しゅう"],
  ["毎", "mai", { en: "every", id: "setiap" }, "まい"], ["食", "shoku", { en: "eat", id: "makan" }, "しょく"], ["飲", "in", { en: "drink", id: "minum" }, "いん"], ["見", "ken", { en: "see", id: "lihat" }, "けん"]
];
// reading lookup used only in Learn mode + as a quiz hint
const KANJI_READING = {};
[...KANJI_TIER1, ...KANJI_TIER2, ...KANJI_TIER3].forEach(([c, r]) => { KANJI_READING[c] = r; });

/* ---- Basic Kotoba N5 (word-in-kana, romaji, meaning-for-quiz, contoh kalimat-in-kana,
   segments = contoh kalimat dipecah per-kata [kana, romaji], translation = arti kalimat) ----
   Sengaja ditulis full hiragana/katakana (tanpa kanji) supaya bisa langsung dibaca begitu
   Hiragana & Katakana sudah diTaklukkan — kanji-nya dipelajari terpisah di Chapter "Kanji N5". */
const KOTOBA_TIER1 = [
  ["わたし", "watashi", { en: "I / me", id: "saya / aku" }, "わたしは がくせいです。",
    [["わたし", "Watashi"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "I am a student.", id: "Saya adalah murid/siswa." }],
  ["あなた", "anata", { en: "you", id: "kamu" }, "あなたの なまえは なんですか。",
    [["あなた", "Anata"], ["の", "no"], ["なまえ", "namae"], ["は", "wa"], ["なん", "nan"], ["です", "desu"], ["か", "ka"]],
    { en: "What is your name?", id: "Siapa namamu?" }],
  ["せんせい", "sensei", { en: "teacher", id: "guru" }, "せんせいは とても やさしいです。",
    [["せんせい", "Sensei"], ["は", "wa"], ["とても", "totemo"], ["やさしい", "yasashii"], ["です", "desu"]],
    { en: "The teacher is very kind.", id: "Guru itu sangat baik." }],
  ["がくせい", "gakusei", { en: "student", id: "murid / siswa" }, "がくせいは まいにち べんきょうします。",
    [["がくせい", "Gakusei"], ["は", "wa"], ["まいにち", "mainichi"], ["べんきょう", "benkyou"], ["します", "shimasu"]],
    { en: "Students study every day.", id: "Murid belajar setiap hari." }],
  ["がっこう", "gakkou", { en: "school", id: "sekolah" }, "がっこうは とても おおきいです。",
    [["がっこう", "Gakkou"], ["は", "wa"], ["とても", "totemo"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "The school is very big.", id: "Sekolahnya sangat besar." }],
  ["かいしゃ", "kaisha", { en: "company", id: "perusahaan" }, "ちちは かいしゃで はたらきます。",
    [["ちち", "Chichi"], ["は", "wa"], ["かいしゃ", "kaisha"], ["で", "de"], ["はたらきます", "hatarakimasu"]],
    { en: "My father works at a company.", id: "Ayah saya bekerja di perusahaan." }],
  ["いえ", "ie", { en: "house", id: "rumah" }, "わたしの いえは えきの ちかくです。",
    [["わたし", "Watashi"], ["の", "no"], ["いえ", "ie"], ["は", "wa"], ["えき", "eki"], ["の", "no"], ["ちかく", "chikaku"], ["です", "desu"]],
    { en: "My house is near the station.", id: "Rumah saya dekat stasiun." }],
  ["ともだち", "tomodachi", { en: "friend", id: "teman" }, "ともだちと えいがを みます。",
    [["ともだち", "Tomodachi"], ["と", "to"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I watch a movie with a friend.", id: "Saya menonton film bersama teman." }],
  ["かぞく", "kazoku", { en: "family", id: "keluarga" }, "わたしの かぞくは よにんです。",
    [["わたし", "Watashi"], ["の", "no"], ["かぞく", "kazoku"], ["は", "wa"], ["よにん", "yonin"], ["です", "desu"]],
    { en: "My family has four people.", id: "Keluarga saya berjumlah empat orang." }],
  ["ちち", "chichi", { en: "father (my own)", id: "ayah (sendiri)" }, "ちちは あさ はやく おきます。",
    [["ちち", "Chichi"], ["は", "wa"], ["あさ", "asa"], ["はやく", "hayaku"], ["おきます", "okimasu"]],
    { en: "My father wakes up early in the morning.", id: "Ayah saya bangun pagi-pagi sekali." }],
  ["はは", "haha", { en: "mother (my own)", id: "ibu (sendiri)" }, "ははは りょうりが じょうずです。",
    [["はは", "Haha"], ["は", "wa"], ["りょうり", "ryouri"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "My mother is good at cooking.", id: "Ibu saya pandai memasak." }],
  ["こども", "kodomo", { en: "child", id: "anak" }, "こどもたちは こうえんで あそびます。",
    [["こどもたち", "Kodomotachi"], ["は", "wa"], ["こうえん", "kouen"], ["で", "de"], ["あそびます", "asobimasu"]],
    { en: "The children play at the park.", id: "Anak-anak bermain di taman." }],
  ["なまえ", "namae", { en: "name", id: "nama" }, "あなたの なまえを おしえてください。",
    [["あなた", "Anata"], ["の", "no"], ["なまえ", "namae"], ["を", "wo"], ["おしえて", "oshiete"], ["ください", "kudasai"]],
    { en: "Please tell me your name.", id: "Tolong beritahu saya namamu." }],
  ["でんわ", "denwa", { en: "telephone", id: "telepon" }, "でんわで はなしましょう。",
    [["でんわ", "Denwa"], ["で", "de"], ["はなしましょう", "hanashimashou"]],
    { en: "Let's talk on the phone.", id: "Ayo kita bicara lewat telepon." }],
  ["くるま", "kuruma", { en: "car", id: "mobil" }, "くるまで がっこうへ いきます。",
    [["くるま", "Kuruma"], ["で", "de"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school by car.", id: "Saya pergi ke sekolah naik mobil." }],
  ["ほん", "hon", { en: "book", id: "buku" }, "この ほんは とても おもしろいです。",
    [["この", "Kono"], ["ほん", "hon"], ["は", "wa"], ["とても", "totemo"], ["おもしろい", "omoshiroi"], ["です", "desu"]],
    { en: "This book is very interesting.", id: "Buku ini sangat menarik." }],
  ["みず", "mizu", { en: "water", id: "air" }, "みずを いっぱい のみます。",
    [["みず", "Mizu"], ["を", "wo"], ["いっぱい", "ippai"], ["のみます", "nomimasu"]],
    { en: "I drink a lot of water.", id: "Saya minum banyak air." }],
  ["たべもの", "tabemono", { en: "food", id: "makanan" }, "すきな たべものは なんですか。",
    [["すきな", "Sukina"], ["たべもの", "tabemono"], ["は", "wa"], ["なん", "nan"], ["です", "desu"], ["か", "ka"]],
    { en: "What food do you like?", id: "Makanan apa yang kamu suka?" }],
  ["のみもの", "nomimono", { en: "drink", id: "minum" }, "のみものは なにに しますか。",
    [["のみもの", "Nomimono"], ["は", "wa"], ["なに", "nani"], ["に", "ni"], ["します", "shimasu"], ["か", "ka"]],
    { en: "What will you have to drink?", id: "Mau minum apa?" }],
  ["てんき", "tenki", { en: "weather", id: "cuaca" }, "きょうの てんきは いいです。",
    [["きょう", "Kyou"], ["の", "no"], ["てんき", "tenki"], ["は", "wa"], ["いい", "ii"], ["です", "desu"]],
    { en: "Today's weather is nice.", id: "Cuaca hari ini bagus." }],
  ["きょう", "kyou", { en: "today", id: "hari ini" }, "きょうは とても あついです。",
    [["きょう", "Kyou"], ["は", "wa"], ["とても", "totemo"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "Today is very hot.", id: "Hari ini sangat panas." }],
  ["いぬ", "inu", { en: "dog", id: "anjing" }, "いぬと さんぽします。",
    [["いぬ", "Inu"], ["と", "to"], ["さんぽ", "sanpo"], ["します", "shimasu"]],
    { en: "I take a walk with the dog.", id: "Saya jalan-jalan bersama anjing." }],
  ["ねこ", "neko", { en: "cat", id: "kucing" }, "ねこが いすの うえに います。",
    [["ねこ", "Neko"], ["が", "ga"], ["いす", "isu"], ["の", "no"], ["うえ", "ue"], ["に", "ni"], ["います", "imasu"]],
    { en: "The cat is on the chair.", id: "Kucing itu ada di atas kursi." }],
  ["テレビ", "terebi", { en: "television", id: "televisi" }, "よる テレビを みます。",
    [["よる", "Yoru"], ["テレビ", "terebi"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I watch TV at night.", id: "Saya menonton TV di malam hari." }]
];
const KOTOBA_TIER2 = [
  ["たべる", "taberu", { en: "eat", id: "makan" }, "あさごはんを たべます。",
    [["あさごはん", "Asagohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat breakfast.", id: "Saya makan sarapan." }],
  ["のむ", "nomu", { en: "drink", id: "minum" }, "コーヒーを のみます。",
    [["コーヒー", "Koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee.", id: "Saya minum kopi." }],
  ["みる", "miru", { en: "see / watch", id: "lihat / menonton" }, "えいがを みるのが すきです。",
    [["えいが", "Eiga"], ["を", "wo"], ["みる", "miru"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like watching movies.", id: "Saya suka menonton film." }],
  ["きく", "kiku", { en: "listen / hear", id: "dengar" }, "おんがくを きくのが すきです。",
    [["おんがく", "Ongaku"], ["を", "wo"], ["きく", "kiku"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like listening to music.", id: "Saya suka mendengarkan musik." }],
  ["はなす", "hanasu", { en: "speak", id: "bicara" }, "にほんごで はなします。",
    [["にほんご", "Nihongo"], ["で", "de"], ["はなします", "hanashimasu"]],
    { en: "I speak in Japanese.", id: "Saya berbicara dalam bahasa Jepang." }],
  ["いく", "iku", { en: "go", id: "pergi" }, "がっこうへ いきます。",
    [["がっこう", "Gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school.", id: "Saya pergi ke sekolah." }],
  ["くる", "kuru", { en: "come", id: "datang" }, "ともだちが うちへ きます。",
    [["ともだち", "Tomodachi"], ["が", "ga"], ["うち", "uchi"], ["へ", "e"], ["きます", "kimasu"]],
    { en: "A friend is coming to my house.", id: "Teman datang ke rumah." }],
  ["かえる", "kaeru", { en: "go home", id: "pulang" }, "はやく いえへ かえります。",
    [["はやく", "Hayaku"], ["いえ", "ie"], ["へ", "e"], ["かえります", "kaerimasu"]],
    { en: "I go home early.", id: "Saya pulang ke rumah lebih awal." }],
  ["かう", "kau", { en: "buy", id: "beli" }, "あたらしい くつを かいます。",
    [["あたらしい", "Atarashii"], ["くつ", "kutsu"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy new shoes.", id: "Saya membeli sepatu baru." }],
  ["よむ", "yomu", { en: "read", id: "baca" }, "ほんを よむのが すきです。",
    [["ほん", "Hon"], ["を", "wo"], ["よむ", "yomu"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like reading books.", id: "Saya suka membaca buku." }],
  ["かく", "kaku", { en: "write", id: "tulis" }, "てがみを かきます。",
    [["てがみ", "Tegami"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write a letter.", id: "Saya menulis surat." }],
  ["ねる", "neru", { en: "sleep", id: "tidur" }, "よる はやく ねます。",
    [["よる", "Yoru"], ["はやく", "hayaku"], ["ねます", "nemasu"]],
    { en: "I go to sleep early at night.", id: "Saya tidur lebih awal di malam hari." }],
  ["おきる", "okiru", { en: "wake up", id: "bangun" }, "まいあさ ろくじに おきます。",
    [["まいあさ", "Maiasa"], ["ろくじ", "rokuji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I wake up at six every morning.", id: "Saya bangun jam enam setiap pagi." }],
  ["わかる", "wakaru", { en: "understand", id: "mengerti" }, "にほんごが すこし わかります。",
    [["にほんご", "Nihongo"], ["が", "ga"], ["すこし", "sukoshi"], ["わかります", "wakarimasu"]],
    { en: "I understand a little Japanese.", id: "Saya mengerti sedikit bahasa Jepang." }],
  ["おおきい", "ookii", { en: "big", id: "besar" }, "この いえは おおきいです。",
    [["この", "Kono"], ["いえ", "ie"], ["は", "wa"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "This house is big.", id: "Rumah ini besar." }],
  ["ちいさい", "chiisai", { en: "small", id: "kecil" }, "あの いぬは ちいさいです。",
    [["あの", "Ano"], ["いぬ", "inu"], ["は", "wa"], ["ちいさい", "chiisai"], ["です", "desu"]],
    { en: "That dog is small.", id: "Anjing itu kecil." }],
  ["たかい", "takai", { en: "tall / expensive", id: "tinggi / mahal" }, "この かばんは たかいです。",
    [["この", "Kono"], ["かばん", "kaban"], ["は", "wa"], ["たかい", "takai"], ["です", "desu"]],
    { en: "This bag is expensive.", id: "Tas ini mahal." }],
  ["やすい", "yasui", { en: "cheap", id: "murah" }, "やおやの やさいは やすいです。",
    [["やおや", "Yaoya"], ["の", "no"], ["やさい", "yasai"], ["は", "wa"], ["やすい", "yasui"], ["です", "desu"]],
    { en: "The vegetables at the greengrocer are cheap.", id: "Sayuran di toko sayur itu murah." }],
  ["あたらしい", "atarashii", { en: "new", id: "baru" }, "あたらしい くるまが ほしいです。",
    [["あたらしい", "Atarashii"], ["くるま", "kuruma"], ["が", "ga"], ["ほしい", "hoshii"], ["です", "desu"]],
    { en: "I want a new car.", id: "Saya ingin mobil baru." }],
  ["ふるい", "furui", { en: "old", id: "lama / tua" }, "これは ふるい たてものです。",
    [["これ", "Kore"], ["は", "wa"], ["ふるい", "furui"], ["たてもの", "tatemono"], ["です", "desu"]],
    { en: "This is an old building.", id: "Ini adalah bangunan tua." }],
  ["いい", "ii", { en: "good", id: "bagus" }, "きょうは いい てんきですね。",
    [["きょう", "Kyou"], ["は", "wa"], ["いい", "ii"], ["てんき", "tenki"], ["です", "desu"], ["ね", "ne"]],
    { en: "The weather is nice today, isn't it?", id: "Cuaca hari ini bagus, ya?" }],
  ["たのしい", "tanoshii", { en: "fun", id: "menyenangkan" }, "りょこうは とても たのしかったです。",
    [["りょこう", "Ryokou"], ["は", "wa"], ["とても", "totemo"], ["たのしかった", "tanoshikatta"], ["です", "desu"]],
    { en: "The trip was a lot of fun.", id: "Perjalanannya sangat menyenangkan." }],
  ["きれい", "kirei (na)", { en: "pretty / clean", id: "cantik / bersih" }, "この はなは きれいです。",
    [["この", "Kono"], ["はな", "hana"], ["は", "wa"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "This flower is pretty.", id: "Bunga ini cantik." }],
  ["すき", "suki (na)", { en: "like", id: "suka" }, "わたしは すしが すきです。",
    [["わたし", "Watashi"], ["は", "wa"], ["すし", "sushi"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like sushi.", id: "Saya suka sushi." }]
];
const KOTOBA_TIER3 = [
  ["えき", "eki", { en: "station", id: "stasiun" }, "えきまで あるいて いきます。",
    [["えき", "Eki"], ["まで", "made"], ["あるいて", "aruite"], ["いきます", "ikimasu"]],
    { en: "I walk to the station.", id: "Saya berjalan kaki ke stasiun." }],
  ["びょういん", "byouin", { en: "hospital", id: "rumah sakit" }, "びょういんで くすりを もらいます。",
    [["びょういん", "Byouin"], ["で", "de"], ["くすり", "kusuri"], ["を", "wo"], ["もらいます", "moraimasu"]],
    { en: "I get medicine at the hospital.", id: "Saya mendapat obat di rumah sakit." }],
  ["ぎんこう", "ginkou", { en: "bank", id: "bank" }, "ぎんこうで おかねを おろします。",
    [["ぎんこう", "Ginkou"], ["で", "de"], ["おかね", "okane"], ["を", "wo"], ["おろします", "oroshimasu"]],
    { en: "I withdraw money at the bank.", id: "Saya menarik uang di bank." }],
  ["ゆうびんきょく", "yuubinkyoku", { en: "post office", id: "kantor pos" }, "ゆうびんきょくで きってを かいます。",
    [["ゆうびんきょく", "Yuubinkyoku"], ["で", "de"], ["きって", "kitte"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy stamps at the post office.", id: "Saya membeli perangko di kantor pos." }],
  ["としょかん", "toshokan", { en: "library", id: "perpustakaan" }, "としょかんで ほんを よみます。",
    [["としょかん", "Toshokan"], ["で", "de"], ["ほん", "hon"], ["を", "wo"], ["よみます", "yomimasu"]],
    { en: "I read books at the library.", id: "Saya membaca buku di perpustakaan." }],
  ["こうえん", "kouen", { en: "park", id: "taman" }, "こうえんで さんぽします。",
    [["こうえん", "Kouen"], ["で", "de"], ["さんぽ", "sanpo"], ["します", "shimasu"]],
    { en: "I take a walk in the park.", id: "Saya jalan-jalan di taman." }],
  ["えいが", "eiga", { en: "movie", id: "film" }, "しゅうまつに えいがを みます。",
    [["しゅうまつ", "Shuumatsu"], ["に", "ni"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I watch a movie on the weekend.", id: "Saya menonton film di akhir pekan." }],
  ["おんがく", "ongaku", { en: "music", id: "musik" }, "おんがくを きくのが たのしいです。",
    [["おんがく", "Ongaku"], ["を", "wo"], ["きく", "kiku"], ["の", "no"], ["が", "ga"], ["たのしい", "tanoshii"], ["です", "desu"]],
    { en: "Listening to music is fun.", id: "Mendengarkan musik itu menyenangkan." }],
  ["しごと", "shigoto", { en: "job / work", id: "pekerjaan" }, "しごとは なんじに おわりますか。",
    [["しごと", "Shigoto"], ["は", "wa"], ["なんじ", "nanji"], ["に", "ni"], ["おわります", "owarimasu"], ["か", "ka"]],
    { en: "What time does work end?", id: "Jam berapa pekerjaan selesai?" }],
  ["やすみ", "yasumi", { en: "holiday / rest", id: "libur / istirahat" }, "あしたは やすみです。",
    [["あした", "Ashita"], ["は", "wa"], ["やすみ", "yasumi"], ["です", "desu"]],
    { en: "Tomorrow is a day off.", id: "Besok libur." }],
  ["あさ", "asa", { en: "morning", id: "pagi" }, "あさ ろくじに おきます。",
    [["あさ", "Asa"], ["ろくじ", "rokuji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I wake up at six in the morning.", id: "Saya bangun jam enam pagi." }],
  ["ひる", "hiru", { en: "noon", id: "siang" }, "ひるに ごはんを たべます。",
    [["ひる", "Hiru"], ["に", "ni"], ["ごはん", "gohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat a meal at noon.", id: "Saya makan siang." }],
  ["よる", "yoru", { en: "night", id: "malam" }, "よるは しずかです。",
    [["よる", "Yoru"], ["は", "wa"], ["しずか", "shizuka"], ["です", "desu"]],
    { en: "The night is quiet.", id: "Malam hari itu sunyi." }],
  ["あした", "ashita", { en: "tomorrow", id: "besok" }, "あした がっこうへ いきます。",
    [["あした", "Ashita"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I will go to school tomorrow.", id: "Besok saya akan pergi ke sekolah." }],
  ["きのう", "kinou", { en: "yesterday", id: "kemarin" }, "きのう えいがを みました。",
    [["きのう", "Kinou"], ["えいが", "eiga"], ["を", "wo"], ["みました", "mimashita"]],
    { en: "I watched a movie yesterday.", id: "Kemarin saya menonton film." }],
  ["いま", "ima", { en: "now", id: "sekarang" }, "いま なんじですか。",
    [["いま", "Ima"], ["なんじ", "nanji"], ["です", "desu"], ["か", "ka"]],
    { en: "What time is it now?", id: "Sekarang jam berapa?" }],
  ["どこ", "doko", { en: "where", id: "di mana" }, "としょかんは どこですか。",
    [["としょかん", "Toshokan"], ["は", "wa"], ["どこ", "doko"], ["です", "desu"], ["か", "ka"]],
    { en: "Where is the library?", id: "Di mana perpustakaan?" }],
  ["だれ", "dare", { en: "who", id: "siapa" }, "あのひとは だれですか。",
    [["あの", "Ano"], ["ひと", "hito"], ["は", "wa"], ["だれ", "dare"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person?", id: "Siapa orang itu?" }],
  ["いつ", "itsu", { en: "when", id: "kapan" }, "たんじょうびは いつですか。",
    [["たんじょうび", "Tanjoubi"], ["は", "wa"], ["いつ", "itsu"], ["です", "desu"], ["か", "ka"]],
    { en: "When is your birthday?", id: "Kapan ulang tahunmu?" }],
  ["なぜ", "naze", { en: "why", id: "kenapa / mengapa" }, "なぜ がっこうを やすみましたか。",
    [["なぜ", "Naze"], ["がっこう", "gakkou"], ["を", "wo"], ["やすみました", "yasumimashita"], ["か", "ka"]],
    { en: "Why did you miss school?", id: "Kenapa kamu tidak masuk sekolah?" }],
  ["おはよう", "ohayou", { en: "good morning", id: "selamat pagi" }, "おはよう ございます。",
    [["おはよう", "Ohayou"], ["ございます", "gozaimasu"]],
    { en: "Good morning.", id: "Selamat pagi." }],
  ["こんにちは", "konnichiwa", { en: "good afternoon / hello", id: "selamat siang / halo" }, "こんにちは、げんきですか。",
    [["こんにちは", "Konnichiwa"], ["げんき", "genki"], ["です", "desu"], ["か", "ka"]],
    { en: "Hello, how are you?", id: "Halo, apa kabar?" }],
  ["ありがとう", "arigatou", { en: "thank you", id: "terima kasih" }, "てつだって くれて ありがとう。",
    [["てつだって", "Tetsudatte"], ["くれて", "kurete"], ["ありがとう", "arigatou"]],
    { en: "Thank you for helping me.", id: "Terima kasih sudah membantu." }],
  ["すみません", "sumimasen", { en: "excuse me / sorry", id: "permisi / maaf" }, "すみません、といれは どこですか。",
    [["すみません", "Sumimasen"], ["といれ", "toire"], ["は", "wa"], ["どこ", "doko"], ["です", "desu"], ["か", "ka"]],
    { en: "Excuse me, where is the toilet?", id: "Permisi, di mana toilet?" }]
];

/* ---- Bunpō N5 (pattern, example sentence, function/meaning-for-quiz) ---- */
/* 4th element = romaji broken into segments: [[jp_text, romaji], ...] so it's easy to learn & can be spoken one at a time */
/* 5th element = "blank" — versi hiragana/katakana TANPA kanji dengan
   partikel/pola-nya diganti "..." supaya bisa dipakai sebagai soal
   "Tebak Partikel!" (mis. "わたし ... がくせい ...."), tanpa membocorkan
   jawabannya lewat kanji. */
/* 6th element = terjemahan contoh kalimatnya (bukan arti pola-nya), dipakai
   di mode Belajar supaya user tau arti kalimat contohnya, sama kayak di
   Kotoba Dasar. */
const BUNPO_TIER1 = [
  ["〜は〜です", "私は学生です。", { en: "states that A is B", id: "menyatakan A adalah B" }, [["私", "Watashi"], ["は", "wa"], ["学生", "gakusei"], ["です。", "desu."]], "わたし ... がくせい ....", { en: "I am a student.", id: "Saya adalah murid/siswa." }],
  ["〜が", "雨が降っています。", { en: "marks the sentence subject", id: "menandai subjek kalimat" }, [["雨", "Ame"], ["が", "ga"], ["降っています。", "futte imasu."]], "あめ ... ふっています。", { en: "It is raining.", id: "Sedang turun hujan." }],
  ["〜を", "水を飲みます。", { en: "marks the direct object", id: "menandai objek langsung" }, [["水", "Mizu"], ["を", "wo"], ["飲みます。", "nomimasu."]], "みず ... のみます。", { en: "I drink water.", id: "Saya minum air." }],
  ["〜に", "7時に起きます。", { en: "indicates time or destination", id: "menunjukkan waktu atau tujuan" }, [["7時", "Shichi-ji"], ["に", "ni"], ["起きます。", "okimasu."]], "しちじ ... おきます。", { en: "I wake up at 7 o'clock.", id: "Saya bangun jam 7." }],
  ["〜で", "電車で行きます。", { en: "indicates the place/means of doing something", id: "menunjukkan tempat/cara melakukan sesuatu" }, [["電車", "Densha"], ["で", "de"], ["行きます。", "ikimasu."]], "でんしゃ ... いきます。", { en: "I go by train.", id: "Saya pergi naik kereta." }],
  ["〜と", "友達と話します。", { en: "and / together with", id: "dan / bersama dengan" }, [["友達", "Tomodachi"], ["と", "to"], ["話します。", "hanashimasu."]], "ともだち ... はなします。", { en: "I talk with my friend.", id: "Saya berbicara dengan teman." }],
  ["〜も", "私も学生です。", { en: "also / too", id: "juga" }, [["私", "Watashi"], ["も", "mo"], ["学生です。", "gakusei desu."]], "わたし ... がくせいです。", { en: "I am also a student.", id: "Saya juga murid/siswa." }],
  ["〜の", "これは私の本です。", { en: "indicates possession", id: "menunjukkan kepemilikan" }, [["これ", "Kore"], ["は", "wa"], ["私の", "watashi no"], ["本です。", "hon desu."]], "これは わたし ... ほんです。", { en: "This is my book.", id: "Ini buku saya." }],
  ["〜へ", "学校へ行きます。", { en: "toward / in the direction of", id: "menuju / ke arah" }, [["学校", "Gakkou"], ["へ", "e"], ["行きます。", "ikimasu."]], "がっこう ... いきます。", { en: "I go to school.", id: "Saya pergi ke sekolah." }],
  ["〜か", "これは何ですか。", { en: "question particle", id: "partikel tanya" }, [["これ", "Kore"], ["は", "wa"], ["何ですか。", "nan desu ka."]], "これは なんです ....", { en: "What is this?", id: "Ini apa?" }],
  ["〜ね", "今日は暑いですね。", { en: "seeking agreement, roughly 'isn't it?'", id: "mencari persetujuan, kira-kira 'bukan?'" }, [["今日", "Kyou"], ["は", "wa"], ["暑いですね。", "atsui desu ne."]], "きょうは あついです ....", { en: "It's hot today, isn't it?", id: "Hari ini panas, ya." }],
  ["〜よ", "もう6時ですよ。", { en: "emphasizes new information", id: "menegaskan informasi baru" }, [["もう", "Mou"], ["6時", "roku-ji"], ["ですよ。", "desu yo."]], "もう ろくじです ....", { en: "It's already 6 o'clock!", id: "Sudah jam 6, lho!" }]
];
const BUNPO_TIER2 = [
  ["〜ませんか", "一緒に行きませんか。", { en: "inviting, 'would you like to...?'", id: "mengajak, 'mau...?'" }, [["一緒に", "Issho ni"], ["行きませんか。", "ikimasen ka."]], "いっしょに ....", { en: "Would you like to go together?", id: "Mau pergi bersama-sama?" }],
  ["〜ましょう", "一緒に食べましょう。", { en: "let's / shall we", id: "ayo / mari kita" }, [["一緒に", "Issho ni"], ["食べましょう。", "tabemashou."]], "いっしょに ....", { en: "Let's eat together.", id: "Ayo makan bersama-sama." }],
  ["〜たい", "日本へ行きたいです。", { en: "want to do something", id: "ingin melakukan sesuatu" }, [["日本へ", "Nihon e"], ["行きたいです。", "ikitai desu."]], "にほんへ ... です。", { en: "I want to go to Japan.", id: "Saya ingin pergi ke Jepang." }],
  ["〜ないでください", "写真を撮らないでください。", { en: "please don't do", id: "tolong jangan lakukan" }, [["写真を", "Shashin wo"], ["撮らないでください。", "toranaide kudasai."]], "しゃしんを ....", { en: "Please don't take photos.", id: "Tolong jangan mengambil foto." }],
  ["〜てください", "ここに座ってください。", { en: "please do", id: "tolong lakukan" }, [["ここに", "Koko ni"], ["座ってください。", "suwatte kudasai."]], "ここに ....", { en: "Please sit here.", id: "Tolong duduk di sini." }],
  ["〜ています", "今、勉強しています。", { en: "doing right now (progressive)", id: "sedang dilakukan (progresif)" }, [["今、", "Ima,"], ["勉強しています。", "benkyou shite imasu."]], "いま、べんきょう ....", { en: "I am studying right now.", id: "Sedang belajar sekarang." }],
  ["〜ました", "昨日、映画を見ました。", { en: "past tense, positive", id: "bentuk lampau, positif" }, [["昨日、", "Kinou,"], ["映画を", "eiga wo"], ["見ました。", "mimashita."]], "きのう、えいがを ....", { en: "I watched a movie yesterday.", id: "Kemarin saya menonton film." }],
  ["〜ませんでした", "昨日、行きませんでした。", { en: "past tense, negative", id: "bentuk lampau, negatif" }, [["昨日、", "Kinou,"], ["行きませんでした。", "ikimasen deshita."]], "きのう、....", { en: "I didn't go yesterday.", id: "Kemarin saya tidak pergi." }],
  ["〜から〜まで", "9時から5時まで働きます。", { en: "from...to", id: "dari...sampai" }, [["9時から", "Ku-ji kara"], ["5時まで", "go-ji made"], ["働きます。", "hatarakimasu."]], "くじ ... ごじ ... はたらきます。", { en: "I work from 9 to 5.", id: "Saya bekerja dari jam 9 sampai jam 5." }],
  ["〜より", "犬より猫が好きです。", { en: "compared to", id: "dibandingkan dengan" }, [["犬より", "Inu yori"], ["猫が", "neko ga"], ["好きです。", "suki desu."]], "いぬ ... ねこが すきです。", { en: "I like cats more than dogs.", id: "Saya lebih suka kucing daripada anjing." }],
  ["〜ほうがいい", "早く寝たほうがいいです。", { en: "better to do", id: "lebih baik melakukan" }, [["早く", "Hayaku"], ["寝たほうが", "neta hou ga"], ["いいです。", "ii desu."]], "はやく ねた ... です。", { en: "You'd better sleep early.", id: "Lebih baik tidur lebih awal." }],
  ["〜てもいいです", "ここに座ってもいいです。", { en: "allowed to do", id: "boleh melakukan" }, [["ここに", "Koko ni"], ["座ってもいいです。", "suwattemo ii desu."]], "ここに ....", { en: "You may sit here.", id: "Boleh duduk di sini." }]
];
const BUNPO_TIER3 = [
  ["〜なければなりません", "薬を飲まなければなりません。", { en: "must do", id: "harus melakukan" }, [["薬を", "Kusuri wo"], ["飲まなければなりません。", "nomanakereba narimasen."]], "くすりを ....", { en: "I must take medicine.", id: "Saya harus minum obat." }],
  ["〜前に", "寝る前に歯を磨きます。", { en: "before doing", id: "sebelum melakukan" }, [["寝る前に", "Neru mae ni"], ["歯を", "ha wo"], ["磨きます。", "migakimasu."]], "ねる ... はを みがきます。", { en: "I brush my teeth before sleeping.", id: "Saya menyikat gigi sebelum tidur." }],
  ["〜後で", "食べた後で薬を飲みます。", { en: "after doing", id: "setelah melakukan" }, [["食べた後で", "Tabeta ato de"], ["薬を", "kusuri wo"], ["飲みます。", "nomimasu."]], "たべた ... くすりを のみます。", { en: "I take medicine after eating.", id: "Saya minum obat setelah makan." }],
  ["〜ながら", "音楽を聞きながら勉強します。", { en: "while doing", id: "sambil melakukan" }, [["音楽を", "Ongaku wo"], ["聞きながら", "kikinagara"], ["勉強します。", "benkyou shimasu."]], "おんがくを きき... べんきょうします。", { en: "I study while listening to music.", id: "Saya belajar sambil mendengarkan musik." }],
  ["〜ので", "雨なので、行きません。", { en: "because (reason)", id: "karena (alasan)" }, [["雨なので、", "Ame nanode,"], ["行きません。", "ikimasen."]], "あめ ...、いきません。", { en: "Because it's raining, I won't go.", id: "Karena hujan, saya tidak pergi." }],
  ["〜のに", "勉強したのに、忘れました。", { en: "even though / despite", id: "meskipun / walaupun" }, [["勉強したのに、", "Benkyou shita noni,"], ["忘れました。", "wasuremashita."]], "べんきょうした ...、わすれました。", { en: "Even though I studied, I forgot.", id: "Meskipun sudah belajar, saya lupa." }],
  ["〜と思います", "明日雨が降ると思います。", { en: "I think / in my opinion", id: "menurut saya / saya pikir" }, [["明日", "Ashita"], ["雨が", "ame ga"], ["降ると思います。", "furu to omoimasu."]], "あした あめが ふる ....", { en: "I think it will rain tomorrow.", id: "Saya pikir besok akan hujan." }],
  ["〜と言いました", "先生は明日休むと言いました。", { en: "said that", id: "mengatakan bahwa" }, [["先生は", "Sensei wa"], ["明日", "ashita"], ["休むと言いました。", "yasumu to iimashita."]], "せんせいは あした やすむ ....", { en: "The teacher said they would be off tomorrow.", id: "Guru bilang besok akan libur." }],
  ["〜ことができます", "漢字を読むことができます。", { en: "can / is able to do", id: "bisa / mampu melakukan" }, [["漢字を", "Kanji wo"], ["読むことができます。", "yomu koto ga dekimasu."]], "かんじを よむ ....", { en: "I can read kanji.", id: "Saya bisa membaca kanji." }],
  ["〜つもりです", "来年日本へ行くつもりです。", { en: "intend to / plan to", id: "berniat / berencana" }, [["来年", "Rainen"], ["日本へ", "Nihon e"], ["行くつもりです。", "iku tsumori desu."]], "らいねん にほんへ いく ....", { en: "I plan to go to Japan next year.", id: "Saya berencana pergi ke Jepang tahun depan." }],
  ["〜でしょう", "明日は晴れでしょう。", { en: "probably / likely", id: "mungkin / kemungkinan besar" }, [["明日は", "Ashita wa"], ["晴れでしょう。", "hare deshou."]], "あしたは はれ ....", { en: "It will probably be sunny tomorrow.", id: "Besok mungkin cerah." }],
  ["〜すぎる", "食べすぎました。", { en: "too much (excessive)", id: "terlalu banyak (berlebihan)" }, [["食べすぎました。", "Tabesugimashita."]], "たべ ....", { en: "I ate too much.", id: "Saya makan terlalu banyak." }]
];

/* =========================================================
   SCRIPTS registry — generalizes hiragana / katakana / kanji
   ========================================================= */
// beberapa kanji punya 2 cara baca sekaligus (mis. "hi / nichi") — untuk soal
// quest "Tebak romaji" kita ambil bacaan utama (sebelum " / ") sebagai jawaban.
function primaryReading(str) {
  return str.includes(" / ") ? str.split(" / ")[0].trim() : str;
}
const LEVEL_META = [
  { id: "tier1", tier: 1, rank: "Warrior" },
  { id: "tier2", tier: 2, rank: "Epic" },
  { id: "tier3", tier: 3, rank: "Mythical" },
  { id: "all", tier: 4, rank: "Immortal" }
];

const SCRIPTS = {
  hiragana: {
    key: "hiragana", label: "Hiragana", tabGlyph: "あ", quizType: "romaji", quizLabelKey: "quiz.guessRomaji",
    data: { tier1: HIRAGANA_TIER1, tier2: HIRAGANA_TIER2, tier3: HIRAGANA_TIER3 },
    levelText: {
      tier1: { title: { en: "Basic", id: "Dasar" }, sample: "あ い う", desc: { en: "Gojūon — the 46 core characters from a to n.", id: "Gojūon — 46 karakter inti dari a sampai n." } },
      tier2: { title: { en: "Dotted", id: "Bertitik" }, sample: "が ざ ぱ", desc: { en: "Dakuten & handakuten: ga, za, da, ba, pa.", id: "Dakuten & handakuten: ga, za, da, ba, pa." } },
      tier3: { title: { en: "Combined", id: "Gabungan" }, sample: "きゃ しゅ", desc: { en: "Yōon — small combinations like kya, sha, cho.", id: "Yōon — kombinasi kecil seperti kya, sha, cho." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "ん づ りょ", desc: { en: "All hiragana characters shuffled into one Chapter.", id: "Seluruh karakter hiragana diacak menjadi satu Chapter." } }
    },
    learnSections: [
      { tierKey: "tier1", title: { en: "Gojūon — Basic", id: "Gojūon — Dasar" }, desc: { en: "The 46 core characters. This is the foundation you need to memorize first.", id: "46 karakter inti. Ini fondasi yang wajib dihafal duluan." }, rows: GOJUON_HIRAGANA.tier1 },
      { tierKey: "tier2", title: { en: "Dakuten & Handakuten — Dotted", id: "Dakuten & Handakuten — Bertitik" }, desc: { en: "A double mark (゛) or small circle (゜) changes how the character is read.", id: "Tanda titik dua (゛) atau lingkaran kecil (゜) mengubah cara baca." }, rows: GOJUON_HIRAGANA.tier2 },
      { tierKey: "tier3", title: { en: "Yōon — Combined", id: "Yōon — Gabungan" }, desc: { en: "A consonant + small ゃゅょ, read together as one syllable.", id: "Konsonan + ゃゅょ kecil yang dibaca sebagai satu suku kata." }, rows: GOJUON_HIRAGANA.tier3 }
    ]
  },
  katakana: {
    key: "katakana", label: "Katakana", tabGlyph: "ア", quizType: "romaji", quizLabelKey: "quiz.guessRomaji",
    data: { tier1: KATAKANA_TIER1, tier2: KATAKANA_TIER2, tier3: KATAKANA_TIER3 },
    levelText: {
      tier1: { title: { en: "Basic", id: "Dasar" }, sample: "ア イ ウ", desc: { en: "The 46 core katakana characters, from a to n.", id: "46 karakter inti katakana, dari a sampai n." } },
      tier2: { title: { en: "Dotted", id: "Bertitik" }, sample: "ガ ザ パ", desc: { en: "Katakana dakuten & handakuten: ga, za, da, ba, pa.", id: "Dakuten & handakuten katakana: ga, za, da, ba, pa." } },
      tier3: { title: { en: "Combined", id: "Gabungan" }, sample: "キャ シュ", desc: { en: "Katakana yōon — small combinations like kya, sha, cho.", id: "Yōon katakana — kombinasi kecil seperti kya, sha, cho." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "ン ヅ リョ", desc: { en: "All katakana characters shuffled into one Chapter.", id: "Seluruh karakter katakana diacak menjadi satu Chapter." } }
    },
    learnSections: [
      { tierKey: "tier1", title: { en: "Gojūon — Basic", id: "Gojūon — Dasar" }, desc: { en: "The 46 core katakana characters, mostly used for loanwords and foreign names.", id: "46 karakter inti katakana, biasanya dipakai untuk kata serapan asing dan nama." }, rows: GOJUON_KATAKANA.tier1 },
      { tierKey: "tier2", title: { en: "Dakuten & Handakuten — Dotted", id: "Dakuten & Handakuten — Bertitik" }, desc: { en: "Just like hiragana, the dot marks change how the consonant is read.", id: "Sama seperti hiragana, tanda titik mengubah cara baca konsonannya." }, rows: GOJUON_KATAKANA.tier2 },
      { tierKey: "tier3", title: { en: "Yōon — Combined", id: "Yōon — Gabungan" }, desc: { en: "A consonant + small ャュョ, read together as one syllable.", id: "Konsonan + ャュョ kecil, dibaca sebagai satu suku kata." }, rows: GOJUON_KATAKANA.tier3 }
    ]
  },
  kanji: {
    key: "kanji", label: "Kanji N5", tabGlyph: "漢", quizType: "meaning",
    quizLabelKey: "quiz.guessMeaning", quizLabelRomajiKey: "quiz.guessRomaji", hasVariants: true,
    quizLabelKeys: { meaning: "quiz.guessMeaning", romaji: "quiz.guessRomaji" },
    extraLabelKeys: { meaning: "quiz.romajiLabel", romaji: "quiz.meaningLabel" },
    variantButtons: [
      { key: "meaning", icon: "🈺", i18nKey: "quiz.meaning" },
      { key: "romaji", icon: "🔤", label: "Romaji" },
      { key: "both", icon: "🎲", i18nKey: "quiz.mixed" }
    ],
    data: {
      tier1: KANJI_TIER1.map(([c, , m]) => [c, tf(m)]),
      tier2: KANJI_TIER2.map(([c, , m]) => [c, tf(m)]),
      tier3: KANJI_TIER3.map(([c, , m]) => [c, tf(m)])
    },
    dataRomaji: {
      tier1: KANJI_TIER1.map(([c, r]) => [c, primaryReading(r)]),
      tier2: KANJI_TIER2.map(([c, r]) => [c, primaryReading(r)]),
      tier3: KANJI_TIER3.map(([c, r]) => [c, primaryReading(r)])
    },
    levelText: {
      tier1: { title: { en: "Numbers & Nature", id: "Angka & Alam" }, sample: "一 二 日", desc: { en: "16 basic kanji: numbers and elements of nature.", id: "16 kanji dasar: angka dan unsur alam." } },
      tier2: { title: { en: "Size & Direction", id: "Ukuran & Arah" }, sample: "大 小 上", desc: { en: "16 kanji: size, direction, and family.", id: "16 kanji: ukuran, arah, dan keluarga." } },
      tier3: { title: { en: "School & Time", id: "Sekolah & Waktu" }, sample: "学 校 今", desc: { en: "16 kanji: school, time, and daily activities.", id: "16 kanji: sekolah, waktu, dan kegiatan sehari-hari." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "私 何 見", desc: { en: "All 48 N5 kanji shuffled into one Chapter.", id: "Seluruh 48 kanji N5 diacak menjadi satu Chapter." } }
    },
    learnCards: [
      { tierKey: "tier1", title: { en: "Numbers & Nature", id: "Angka & Alam" }, desc: { en: "16 basic kanji: numbers and elements of nature.", id: "16 kanji dasar: angka dan unsur alam." }, items: KANJI_TIER1 },
      { tierKey: "tier2", title: { en: "Size & Direction", id: "Ukuran & Arah" }, desc: { en: "16 kanji: size, direction, and family.", id: "16 kanji: ukuran, arah, dan keluarga." }, items: KANJI_TIER2 },
      { tierKey: "tier3", title: { en: "School & Time", id: "Sekolah & Waktu" }, desc: { en: "16 kanji: school, time, and daily activities.", id: "16 kanji: sekolah, waktu, dan kegiatan sehari-hari." }, items: KANJI_TIER3 }
    ]
  },
  kotoba: {
    key: "kotoba", label: "Basic Kotoba", tabGlyph: "語", quizType: "meaning",
    quizLabelKey: "quiz.guessMeaning", quizLabelRomajiKey: "quiz.guessRomaji", hasVariants: true,
    quizLabelKeys: { meaning: "quiz.guessMeaning", romaji: "quiz.guessRomaji" },
    extraLabelKeys: { meaning: "quiz.romajiLabel", romaji: "quiz.meaningLabel" },
    variantButtons: [
      { key: "meaning", icon: "🈺", i18nKey: "quiz.meaning" },
      { key: "romaji", icon: "🔤", label: "Romaji" },
      { key: "both", icon: "🎲", i18nKey: "quiz.mixed" }
    ],
    data: {
      tier1: KOTOBA_TIER1.map(([c, , m]) => [c, tf(m)]),
      tier2: KOTOBA_TIER2.map(([c, , m]) => [c, tf(m)]),
      tier3: KOTOBA_TIER3.map(([c, , m]) => [c, tf(m)])
    },
    dataRomaji: {
      tier1: KOTOBA_TIER1.map(([c, r]) => [c, r]),
      tier2: KOTOBA_TIER2.map(([c, r]) => [c, r]),
      tier3: KOTOBA_TIER3.map(([c, r]) => [c, r])
    },
    levelText: {
      tier1: { title: { en: "Nouns", id: "Kata Benda" }, sample: "わたし がっこう ともだち", desc: { en: "24 N5 vocabulary words (kana only, no kanji): people, places, and everyday objects, each with an example sentence.", id: "24 kosakata N5 (kana, tanpa kanji): orang, tempat, dan benda sehari-hari, lengkap dengan contoh kalimat." } },
      tier2: { title: { en: "Verbs & Adjectives", id: "Kerja & Sifat" }, sample: "たべる おおきい すき", desc: { en: "24 N5 vocabulary words (kana only, no kanji): verbs, -i adjectives, and -na adjectives, each with an example sentence.", id: "24 kosakata N5 (kana, tanpa kanji): kata kerja, kata sifat -i, dan kata sifat -na, lengkap dengan contoh kalimat." } },
      tier3: { title: { en: "Time & Expressions", id: "Waktu & Ekspresi" }, sample: "えき あした ありがとう", desc: { en: "24 N5 vocabulary words (kana only, no kanji): places, time, question words, and greetings/expressions, each with an example sentence.", id: "24 kosakata N5 (kana, tanpa kanji): tempat, waktu, kata tanya, dan ekspresi/salam, lengkap dengan contoh kalimat." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "しごと あたらしい かえる", desc: { en: "All 72 N5 vocabulary words shuffled into one Chapter.", id: "Seluruh 72 kosakata N5 diacak menjadi satu Chapter." } }
    },
    learnVocab: [
      { tierKey: "tier1", title: { en: "Nouns — Everyday Life", id: "Kata Benda — Sehari-hari" }, desc: { en: "24 basic N5 vocabulary words (full kana, no kanji): people, family, places, and everyday objects — each word comes with an example sentence.", id: "24 kosakata dasar N5 (full kana, tanpa kanji): orang, keluarga, tempat, dan benda sehari-hari — tiap kata disertai contoh kalimat." }, items: KOTOBA_TIER1 },
      { tierKey: "tier2", title: { en: "Verbs & Adjectives", id: "Kata Kerja & Kata Sifat" }, desc: { en: "24 N5 vocabulary words (full kana, no kanji): verbs, -i adjectives, and -na adjectives — each word comes with an example sentence.", id: "24 kosakata N5 (full kana, tanpa kanji): kata kerja, kata sifat -i, dan kata sifat -na — tiap kata disertai contoh kalimat." }, items: KOTOBA_TIER2 },
      { tierKey: "tier3", title: { en: "Places, Time & Expressions", id: "Tempat, Waktu & Ekspresi" }, desc: { en: "24 N5 vocabulary words (full kana, no kanji): places, time, question words, and greetings/expressions — each word comes with an example sentence.", id: "24 kosakata N5 (full kana, tanpa kanji): tempat, waktu, kata tanya, dan ekspresi/salam — tiap kata disertai contoh kalimat." }, items: KOTOBA_TIER3 }
    ]
  },
  bunpo: {
    key: "bunpo", label: "Bunpō", tabGlyph: "文", quizType: "meaning", quizLabelKey: "quiz.guessFunction",
    // "hasVariants" + "variantMode: sentence" mengaktifkan mode soal ke-2 khusus
    // Bunpō, "Kalimat" — kebalikan dari "Fungsi": bukannya menunjukkan pola lalu
    // menebak fungsinya, di sini yang ditunjukkan adalah contoh kalimatnya, dan
    // yang harus ditebak adalah pola/partikel mana yang cocok dipakai di situ.
    hasVariants: true, variantMode: "sentence",
    quizLabelKeys: { meaning: "quiz.guessFunction", kalimat: "quiz.guessKalimat" },
    extraLabelKeys: { meaning: "quiz.kalimatLabel", kalimat: "quiz.functionLabel" },
    variantButtons: [
      { key: "meaning", icon: "🈺", i18nKey: "quiz.function" },
      { key: "kalimat", icon: "📝", i18nKey: "quiz.kalimat" },
      { key: "both", icon: "🎲", i18nKey: "quiz.mixed" }
    ],
    data: {
      tier1: BUNPO_TIER1.map(([c, , m]) => [c, tf(m)]),
      tier2: BUNPO_TIER2.map(([c, , m]) => [c, tf(m)]),
      tier3: BUNPO_TIER3.map(([c, , m]) => [c, tf(m)])
    },
    // dataKalimat: soal "Kalimat" — [contoh_kalimat, pola] per tingkatan. Tidak
    // perlu di-resolve ulang tiap ganti bahasa karena isinya murni bahasa Jepang.
    dataKalimat: {
      tier1: BUNPO_TIER1.map(([c, ex]) => [ex, c]),
      tier2: BUNPO_TIER2.map(([c, ex]) => [ex, c]),
      tier3: BUNPO_TIER3.map(([c, ex]) => [ex, c])
    },
    // dataKalimatBlank: sama seperti dataKalimat tapi soalnya versi romaji
    // tanpa kanji dengan partikel/pola-nya dikosongkan "..." — dipakai khusus
    // sebagai teks SOAL mode "Tebak Partikel!" supaya jawabannya (kanji/pola)
    // tidak kebocoran. dataKalimat aslinya tetap dipakai buat info "extra"
    // (contoh kalimat lengkap) yang muncul setelah jawab soal mode "Fungsi".
    dataKalimatBlank: {
      tier1: BUNPO_TIER1.map(([c, , , , blank]) => [blank, c]),
      tier2: BUNPO_TIER2.map(([c, , , , blank]) => [blank, c]),
      tier3: BUNPO_TIER3.map(([c, , , , blank]) => [blank, c])
    },
    levelText: {
      tier1: { title: { en: "Basic Particles", id: "Partikel Dasar" }, sample: "〜は 〜が 〜を", desc: { en: "12 essential N5 particles you need to Conquer.", id: "12 partikel dasar N5 yang wajib diTaklukkan." } },
      tier2: { title: { en: "Sentence Patterns", id: "Pola Kalimat" }, sample: "〜たい 〜てください", desc: { en: "12 N5 sentence patterns for everyday conversation.", id: "12 pola kalimat N5 untuk percakapan sehari-hari." } },
      tier3: { title: { en: "Advanced Structures", id: "Struktur Lanjutan" }, sample: "〜ながら 〜ので", desc: { en: "12 advanced N5 grammar structures.", id: "12 struktur tata bahasa N5 tingkat lanjut." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "〜つもりです", desc: { en: "All 36 N5 grammar patterns shuffled into one Chapter.", id: "Seluruh 36 pola bunpō N5 diacak menjadi satu Chapter." } }
    },
    learnGrammar: [
      { tierKey: "tier1", title: { en: "Basic Particles", id: "Partikel Dasar" }, desc: { en: "12 essential N5 particles you need to Conquer.", id: "12 partikel dasar N5 yang wajib diTaklukkan." }, items: BUNPO_TIER1 },
      { tierKey: "tier2", title: { en: "Sentence Patterns", id: "Pola Kalimat" }, desc: { en: "12 N5 sentence patterns for everyday conversation.", id: "12 pola kalimat N5 untuk percakapan sehari-hari." }, items: BUNPO_TIER2 },
      { tierKey: "tier3", title: { en: "Advanced Structures", id: "Struktur Lanjutan" }, desc: { en: "12 advanced N5 grammar structures.", id: "12 struktur tata bahasa N5 tingkat lanjut." }, items: BUNPO_TIER3 }
    ]
  }
};

// build the "all" (Kaisar) pool for every script
Object.values(SCRIPTS).forEach(s => {
  s.data.all = [...s.data.tier1, ...s.data.tier2, ...s.data.tier3];
  if (s.dataRomaji) {
    s.dataRomaji.all = [...s.dataRomaji.tier1, ...s.dataRomaji.tier2, ...s.dataRomaji.tier3];
  }
  if (s.dataKalimat) {
    s.dataKalimat.all = [...s.dataKalimat.tier1, ...s.dataKalimat.tier2, ...s.dataKalimat.tier3];
  }
  if (s.dataKalimatBlank) {
    s.dataKalimatBlank.all = [...s.dataKalimatBlank.tier1, ...s.dataKalimatBlank.tier2, ...s.dataKalimatBlank.tier3];
  }
});

// dipindah ke sini (dari dekat definisi renderProfile) karena renderProfile ->
// renderSpeedrunRecords butuh SCRIPTS, yang baru selesai dibangun di titik ini.
renderProfile();
renderTitleCollection();
renderSpeedrunRecords();

// kanji/kotoba/bunpo punya "arti" (meaning) yang disimpan sebagai {en,id} di data
// mentahnya (KANJI_TIER*/KOTOBA_TIER*/BUNPO_TIER*) supaya bisa diresolve ulang
// tiap kali bahasa diganti — tanpa ini, arti/fungsi di quiz & tabel belajar akan
// tetap dalam bahasa lama sampai halaman di-reload. Dipanggil sekali di awal
// (lewat mapping .map(...) di atas) dan lagi setiap kali applyLanguage() jalan.
function rebuildMeaningPools() {
  SCRIPTS.kanji.data = {
    tier1: KANJI_TIER1.map(([c, , m]) => [c, tf(m)]),
    tier2: KANJI_TIER2.map(([c, , m]) => [c, tf(m)]),
    tier3: KANJI_TIER3.map(([c, , m]) => [c, tf(m)])
  };
  SCRIPTS.kotoba.data = {
    tier1: KOTOBA_TIER1.map(([c, , m]) => [c, tf(m)]),
    tier2: KOTOBA_TIER2.map(([c, , m]) => [c, tf(m)]),
    tier3: KOTOBA_TIER3.map(([c, , m]) => [c, tf(m)])
  };
  SCRIPTS.bunpo.data = {
    tier1: BUNPO_TIER1.map(([c, , m]) => [c, tf(m)]),
    tier2: BUNPO_TIER2.map(([c, , m]) => [c, tf(m)]),
    tier3: BUNPO_TIER3.map(([c, , m]) => [c, tf(m)])
  };
  [SCRIPTS.kanji, SCRIPTS.kotoba, SCRIPTS.bunpo].forEach(s => {
    s.data.all = [...s.data.tier1, ...s.data.tier2, ...s.data.tier3];
  });
}

// rentang soal: indeks (inklusif) di dalam pool tingkatan yang sedang dipilih,
// diatur lewat dropdown "Dari" — "Sampai". Direset tiap kali user pilih tingkatan baru.
let selectedRangeFrom = 0;
let selectedRangeTo = 0;
let rangeMode = "manual"; // "manual" (pilih dari-sampai) | "random" (jumlah soal acak)
let selectedRandomCount = 5;
let selectedQuizVariant = "meaning"; // "meaning" | "romaji" | "both" — hanya berlaku utk script ber-hasVariants
let selectedDifficulty = "easy"; // "easy" (4 pilihan) | "medium" (8 pilihan) | "hard" (ketik sendiri — hiragana/katakana saja)
let currentScript = "hiragana"; // script currently shown on the start screen
let currentLearnScript = "hiragana"; // script currently shown in Learn mode

/* ---------------- state ---------------- */
let state = {
  script: null,
  mode: null,
  pool: [],
  queue: [],
  index: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  missed: [],
  results: [],
  rankIndexBefore: 0,
  conquest: false,
  conquestFailed: false
};

/* ---------------- helpers ---------------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// indeks soal yg dipakai dari sebuah pool, sesuai mode rentang yg aktif:
// seluruh pool (penaklukkan/speedrun), rentang manual "Dari"—"Sampai", atau
// sejumlah `selectedRandomCount` indeks acak. Dipakai bareng oleh semua script
// ber-hasVariants (kanji/kotoba/bunpo) supaya logikanya tidak diulang 2-3x.
function computeRangeIndices(length, usesAllPool) {
  if (usesAllPool) return Array.from({ length }, (_, i) => i);
  if (rangeMode === "random") {
    const count = Math.min(selectedRandomCount, length);
    return shuffle(Array.from({ length }, (_, i) => i)).slice(0, count);
  }
  const from = Math.max(0, Math.min(selectedRangeFrom, length - 1));
  const to = Math.max(from, Math.min(selectedRangeTo, length - 1));
  const indices = [];
  for (let i = from; i <= to; i++) indices.push(i);
  return indices;
}

function buildChoices(correct, pool, count = 4) {
  const wrongPool = pool.filter(p => p[0] !== correct[0]);
  // hilangkan duplikat jawaban (mis. dua kanji beda yg kebetulan sama bacaannya)
  const uniqueWrongs = [...new Map(wrongPool.map(p => [p[1], p])).values()].filter(p => p[1] !== correct[1]);
  const wrongs = shuffle(uniqueWrongs).slice(0, count - 1).map(p => p[1]);
  return shuffle([correct[1], ...wrongs]);
}

/* ---------------- render: learn tables (hiragana/katakana) ---------------- */
function renderGojuonTables(section) {
  const wrap = document.createElement("div");
  const total = section.rows.reduce((sum, r) => sum + r.chars.filter(Boolean).length, 0);
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${tf(section.title)} <span class="count">${total} ${t("learn.characters")}</span></h2>
    <p class="learn-section-desc">${tf(section.desc)}</p>
  `;
  const table = document.createElement("div");
  table.className = "kana-table";
  section.rows.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = `kana-row cols-${row.cols}`;
    const labelEl = document.createElement("div");
    labelEl.className = "kana-row-label";
    labelEl.textContent = row.label;
    rowEl.appendChild(labelEl);
    row.chars.forEach(pair => {
      const cell = document.createElement("div");
      if (pair) {
        cell.className = "kana-cell filled speakable";
        cell.setAttribute("data-speak", pair[0]);
        cell.setAttribute("role", "button");
        cell.setAttribute("tabindex", "0");
        cell.setAttribute("aria-label", t("learn.listenPronunciation", { text: pair[0], reading: pair[1] }));
        cell.innerHTML = `<span class="k">${pair[0]}</span><span class="r">${pair[1]}</span><span class="cell-audio-icon">🔊</span>`;
      } else {
        cell.className = "kana-cell empty";
      }
      rowEl.appendChild(cell);
    });
    table.appendChild(rowEl);
  });
  sectionEl.appendChild(table);
  wrap.appendChild(sectionEl);
  return wrap;
}

function renderKanjiTables(section) {
  const wrap = document.createElement("div");
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${tf(section.title)} <span class="count">${section.items.length} ${t("learn.characters")}</span></h2>
    <p class="learn-section-desc">${tf(section.desc)}</p>
  `;
  const grid = document.createElement("div");
  grid.className = "kanji-grid";
  section.items.forEach(([char, reading, meaning, kana]) => {
    const cell = document.createElement("div");
    cell.className = "kanji-cell";
    cell.setAttribute("data-speak", kana || char);
    cell.setAttribute("role", "button");
    cell.setAttribute("tabindex", "0");
    cell.setAttribute("aria-label", t("learn.listenPronunciation", { text: char, reading: reading }));
    cell.innerHTML = `
      <span class="kj">${char}</span>
      <span class="kj-reading">${reading}</span>
      <span class="kj-meaning">${tf(meaning)}</span>
      <span class="cell-audio-icon">🔊</span>
    `;
    grid.appendChild(cell);
  });
  sectionEl.appendChild(grid);
  wrap.appendChild(sectionEl);
  return wrap;
}

function renderVocabTables(section) {
  const wrap = document.createElement("div");
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${tf(section.title)} <span class="count">${section.items.length} ${t("learn.words")}</span></h2>
    <p class="learn-section-desc">${tf(section.desc)}</p>
  `;
  const list = document.createElement("div");
  list.className = "grammar-list vocab-list";
  section.items.forEach(([word, reading, meaning, example, exampleSegments, exampleTranslation]) => {
    const card = document.createElement("div");
    card.className = "grammar-card vocab-card";
    const wordRow = `
      <button type="button" class="vocab-word-btn" data-speak="${word}" aria-label="${t("learn.listenPronunciation", { text: word, reading: reading })}">
        <span class="grammar-pattern vocab-word">${word}</span>
        <span class="cell-audio-icon">🔊</span>
      </button>
      <span class="vocab-reading">${reading}</span>
      <span class="grammar-meaning">${tf(meaning)}</span>
    `;
    const segmentsHtml = Array.isArray(exampleSegments)
      ? exampleSegments.map(([seg, rom]) => `
          <button type="button" class="segment-chip" data-speak="${seg}" aria-label="${t("learn.listenSegment", { seg, rom })}">
            <span class="seg-jp">${seg}</span>
            <span class="seg-romaji">${rom}</span>
          </button>`).join("")
      : "";
    const exampleHtml = example ? `
      <div class="grammar-example-row">
        <span class="grammar-example">${example}</span>
        <button type="button" class="speak-btn" data-speak="${example}" aria-label="${t("learn.listenExample")}">🔊</button>
      </div>
      <div class="grammar-segments">${segmentsHtml}</div>
      ${exampleTranslation ? `<span class="vocab-example-translation">${tf(exampleTranslation)}</span>` : ""}
    ` : "";
    card.innerHTML = wordRow + exampleHtml;
    list.appendChild(card);
  });
  sectionEl.appendChild(list);
  wrap.appendChild(sectionEl);
  return wrap;
}

function renderGrammarCards(section) {
  const wrap = document.createElement("div");
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${tf(section.title)} <span class="count">${section.items.length} ${t("learn.patterns")}</span></h2>
    <p class="learn-section-desc">${tf(section.desc)}</p>
  `;
  const list = document.createElement("div");
  list.className = "grammar-list";
  section.items.forEach(([pattern, example, meaning, segments, , exampleTranslation]) => {
    const card = document.createElement("div");
    card.className = "grammar-card";
    const segmentsHtml = Array.isArray(segments)
      ? segments.map(([seg, rom]) => `
          <button type="button" class="segment-chip" data-speak="${seg}" aria-label="${t("learn.listenSegment", { seg, rom })}">
            <span class="seg-jp">${seg}</span>
            <span class="seg-romaji">${rom}</span>
          </button>`).join("")
      : "";
    card.innerHTML = `
      <span class="grammar-pattern">${pattern}</span>
      <span class="grammar-meaning">${tf(meaning)}</span>
      <div class="grammar-example-row">
        <span class="grammar-example">${example}</span>
        <button type="button" class="speak-btn" data-speak="${example}" aria-label="${t("learn.listenExample")}">🔊</button>
      </div>
      <div class="grammar-segments">${segmentsHtml}</div>
      ${exampleTranslation ? `<span class="vocab-example-translation">${tf(exampleTranslation)}</span>` : ""}
    `;
    list.appendChild(card);
  });
  sectionEl.appendChild(list);
  wrap.appendChild(sectionEl);
  return wrap;
}

function renderLearnTables(scriptKey) {
  currentLearnScript = scriptKey;
  const script = SCRIPTS[scriptKey];
  const wrap = document.getElementById("learn-tables");
  wrap.innerHTML = "";
  if (script.learnSections) {
    script.learnSections.forEach(section => {
      wrap.appendChild(renderGojuonTables(section));
    });
  } else if (script.learnVocab) {
    script.learnVocab.forEach(section => {
      wrap.appendChild(renderVocabTables(section));
    });
  } else if (script.learnGrammar) {
    script.learnGrammar.forEach(section => {
      wrap.appendChild(renderGrammarCards(section));
    });
  } else if (script.learnCards) {
    script.learnCards.forEach(section => {
      wrap.appendChild(renderKanjiTables(section));
    });
  }
  document.querySelectorAll("#learn-script-tabs .script-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.script === scriptKey);
  });
}

document.querySelectorAll("#learn-script-tabs .script-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    renderLearnTables(btn.dataset.script);
    window.scrollTo({ top: 0, behavior: "instant" });
  });
});

/* ---------------- render: start screen levels ---------------- */
const levelsEl = document.getElementById("levels");
const startBtn = document.getElementById("btn-start");
const btnOpenLearn = document.getElementById("btn-open-learn");

function renderLevels(scriptKey) {
  currentScript = scriptKey;
  const script = SCRIPTS[scriptKey];
  levelsEl.innerHTML = "";
  state.mode = null;
  startBtn.disabled = true;
  startBtn.textContent = t("start.chooseTierFirst");
  btnOpenLearn.textContent = t("start.studyScriptFirst", { label: script.label });
  quizVariantPickerEl.classList.toggle("hidden", !script.hasVariants);
  if (script.hasVariants) renderVariantButtons(script);
  rangePickerEl.classList.add("hidden");

  const supportsHard = scriptKey === "hiragana" || scriptKey === "katakana";
  const hardBtn = document.querySelector('.difficulty-btn[data-difficulty="hard"]');
  hardBtn.disabled = !supportsHard;
  difficultyHintEl.classList.toggle("hidden", supportsHard);
  if (!supportsHard && selectedDifficulty === "hard") {
    setDifficulty("easy");
  }

  LEVEL_META.forEach(meta => {
    const info = script.levelText[meta.id];
    const card = document.createElement("button");
    card.className = "level-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    card.innerHTML = `
      <span class="tier">
        <span class="tier-dots">${[1, 2, 3, 4].map(n => `<span class="${n <= meta.tier ? 'filled' : ''}"></span>`).join("")}</span>
        ${meta.rank}
      </span>
      <span class="kana-sample">${info.sample}</span>
      <h3>${tf(info.title)}</h3>
      <p>${tf(info.desc)}</p>
    `;
    card.addEventListener("click", () => {
      document.querySelectorAll(".level-card").forEach(c => { c.classList.remove("selected"); c.setAttribute("aria-pressed", "false"); });
      card.classList.add("selected");
      card.setAttribute("aria-pressed", "true");
      state.mode = meta.id;
      startBtn.disabled = false;
      renderRangePicker(scriptKey, meta.id);
    });
    levelsEl.appendChild(card);
  });

  updateConquestCard(scriptKey);
}

document.querySelectorAll("#script-tabs .script-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#script-tabs .script-tab").forEach(b => b.classList.toggle("active", b === btn));
    renderLevels(btn.dataset.script);
  });
});

startBtn.addEventListener("click", () => startQuiz(currentScript, state.mode));

/* ---------------- rentang soal (dari karakter X sampai Y) ---------------- */
const rangePickerEl = document.getElementById("range-picker");
const rangeHintEl = document.getElementById("range-hint");

const rangeDdConfig = {
  from: {
    dd: document.getElementById("range-from-dd"),
    trigger: document.getElementById("range-from-trigger"),
    list: document.getElementById("range-from-list"),
    kanaEl: document.getElementById("range-from-kana"),
    subEl: document.getElementById("range-from-sub")
  },
  to: {
    dd: document.getElementById("range-to-dd"),
    trigger: document.getElementById("range-to-trigger"),
    list: document.getElementById("range-to-list"),
    kanaEl: document.getElementById("range-to-kana"),
    subEl: document.getElementById("range-to-sub")
  }
};
let currentRangeItems = []; // [{kana, romaji, arti, batch}] utk tingkatan yg sedang aktif di picker

// ambil info tampilan (kana/romaji/arti) utk index ke-i pada tingkatan tertentu —
// beda script py struktur data beda: hiragana/katakana cuma py romaji, bunpo cuma
// py arti, kotoba/kanji py keduanya (dari data + dataRomaji terpisah).
function getRangeItemInfo(scriptKey, modeId, i) {
  const script = SCRIPTS[scriptKey];
  const kana = script.data[modeId][i][0];
  if (script.dataRomaji) {
    return { kana, romaji: script.dataRomaji[modeId][i][1], arti: script.data[modeId][i][1] };
  }
  if (script.quizType === "meaning") {
    return { kana, romaji: "", arti: script.data[modeId][i][1] };
  }
  return { kana, romaji: script.data[modeId][i][1], arti: "" };
}

// batch selang-seling: hiragana/katakana pakai grup baris tabel gojūon asli
// (mis. "a-i-u-e-o" satu batch), script lain (kotoba/bunpō/kanji) dikelompokkan
// tiap 4 item berurutan supaya tetap ada variasi warna walau tanpa tabel baris.
function getBatchSizes(scriptKey, modeId) {
  const isKana = scriptKey === "hiragana" || scriptKey === "katakana";
  if (isKana) {
    const gojuon = scriptKey === "hiragana" ? GOJUON_HIRAGANA : GOJUON_KATAKANA;
    const tiers = modeId === "all" ? ["tier1", "tier2", "tier3"] : [modeId];
    const sizes = [];
    tiers.forEach(t => {
      gojuon[t].forEach(row => {
        const n = row.chars.filter(Boolean).length;
        if (n > 0) sizes.push(n);
      });
    });
    return sizes;
  }
  const total = SCRIPTS[scriptKey].data[modeId].length;
  const sizes = [];
  for (let remaining = total; remaining > 0; remaining -= 4) sizes.push(Math.min(4, remaining));
  return sizes;
}

function buildBatchIndexArray(sizes) {
  const arr = [];
  sizes.forEach((size, batchIdx) => {
    for (let k = 0; k < size; k++) arr.push(batchIdx);
  });
  return arr;
}

function renderRangeOptionsHtml() {
  return currentRangeItems.map((item, i) => {
    const batchClass = item.batch % 2 === 0 ? "batch-a" : "batch-b";
    const romajiHtml = item.romaji ? `<span class="range-opt-romaji">${item.romaji}</span>` : "";
    const artiHtml = item.arti ? `<span class="range-opt-arti">${item.arti}</span>` : "";
    return `
      <li class="range-option ${batchClass}" role="option" data-index="${i}">
        <span class="range-opt-kana">${item.kana}</span>
        ${romajiHtml}
        ${artiHtml}
      </li>`;
  }).join("");
}

function closeRangeDropdown(key) {
  const cfg = rangeDdConfig[key];
  cfg.list.classList.add("hidden");
  cfg.trigger.setAttribute("aria-expanded", "false");
}
function closeAllRangeDropdowns() {
  closeRangeDropdown("from");
  closeRangeDropdown("to");
}
function openRangeDropdown(key) {
  closeAllRangeDropdowns();
  const cfg = rangeDdConfig[key];
  cfg.list.classList.remove("hidden");
  cfg.trigger.setAttribute("aria-expanded", "true");
  const activeEl = cfg.list.querySelector(".range-option.active");
  if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
}

function updateRangeTrigger(key, index) {
  const cfg = rangeDdConfig[key];
  const item = currentRangeItems[index];
  cfg.kanaEl.textContent = item.kana;
  cfg.subEl.textContent = item.romaji || item.arti || "";
  cfg.list.querySelectorAll(".range-option").forEach(li => {
    li.classList.toggle("active", parseInt(li.dataset.index, 10) === index);
  });
}

function selectRangeIndex(key, index) {
  if (key === "from") {
    selectedRangeFrom = index;
    if (selectedRangeFrom > selectedRangeTo) selectedRangeTo = selectedRangeFrom;
  } else {
    selectedRangeTo = index;
    if (selectedRangeTo < selectedRangeFrom) selectedRangeFrom = selectedRangeTo;
  }
  updateRangeTrigger("from", selectedRangeFrom);
  updateRangeTrigger("to", selectedRangeTo);
  updateRangeHint();
}

["from", "to"].forEach(key => {
  const cfg = rangeDdConfig[key];
  cfg.trigger.addEventListener("click", () => {
    const isOpen = cfg.trigger.getAttribute("aria-expanded") === "true";
    if (isOpen) closeRangeDropdown(key); else openRangeDropdown(key);
  });
  cfg.list.addEventListener("click", (e) => {
    const li = e.target.closest(".range-option");
    if (!li) return;
    selectRangeIndex(key, parseInt(li.dataset.index, 10));
    closeRangeDropdown(key);
  });
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".range-dd")) closeAllRangeDropdowns();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllRangeDropdowns();
});

// isi ulang kedua dropdown "Dari"/"Sampai" sesuai urutan karakter di tingkatan
// yang baru dipilih, lalu reset rentang ke seluruh tingkatan itu (awal - akhir).
function renderRangePicker(scriptKey, modeId) {
  const pool = SCRIPTS[scriptKey].data[modeId];
  const batchIdxArr = buildBatchIndexArray(getBatchSizes(scriptKey, modeId));
  currentRangeItems = pool.map((_, i) => ({
    ...getRangeItemInfo(scriptKey, modeId, i),
    batch: batchIdxArr[i] ?? 0
  }));

  const optionsHtml = renderRangeOptionsHtml();
  rangeDdConfig.from.list.innerHTML = optionsHtml;
  rangeDdConfig.to.list.innerHTML = optionsHtml;
  closeAllRangeDropdowns();

  selectedRangeFrom = 0;
  selectedRangeTo = pool.length - 1;
  updateRangeTrigger("from", selectedRangeFrom);
  updateRangeTrigger("to", selectedRangeTo);
  rangePickerEl.classList.remove("hidden");

  // tingkatan baru dipilih -> selalu kembali ke mode "Pilih Rentang" biar tidak
  // membingungkan, dan siapkan ulang daftar opsi jumlah soal utk mode Acak.
  setRangeMode("manual");
  renderRandomCountOptions(pool.length);

  updateRangeHint();
}

/* ---- mode "Acak": pilih jumlah soal (5, 10, 15, ...) diambil random dari seluruh tingkatan ---- */
const rangeModeToggleEl = document.getElementById("range-mode-toggle");
const rangeRowEl = document.getElementById("range-row");
const rangeRandomEl = document.getElementById("range-random");
const rangeRandomOptionsEl = document.getElementById("range-random-options");

function setRangeMode(mode) {
  rangeMode = mode;
  document.querySelectorAll(".range-mode-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.rangeMode === mode);
  });
  rangeRowEl.classList.toggle("hidden", mode !== "manual");
  rangeRandomEl.classList.toggle("hidden", mode !== "random");
}
rangeModeToggleEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".range-mode-btn");
  if (!btn) return;
  setRangeMode(btn.dataset.rangeMode);
  updateRangeHint();
});

// opsi kelipatan 5 sampai total soal tingkatan ini, selalu diakhiri "seluruh".
function renderRandomCountOptions(totalCount) {
  const steps = [];
  for (let n = 5; n < totalCount; n += 5) steps.push(n);
  steps.push(totalCount);
  if (!steps.includes(selectedRandomCount)) selectedRandomCount = steps[0];
  rangeRandomOptionsEl.innerHTML = steps.map(n => {
    const label = n === totalCount ? t("range.all", { n }) : String(n);
    return `<button type="button" class="range-count-btn ${n === selectedRandomCount ? 'active' : ''}" data-count="${n}">${label}</button>`;
  }).join("");
}
rangeRandomOptionsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".range-count-btn");
  if (!btn) return;
  selectedRandomCount = parseInt(btn.dataset.count, 10);
  rangeRandomOptionsEl.querySelectorAll(".range-count-btn").forEach(b => {
    b.classList.toggle("active", b === btn);
  });
  updateRangeHint();
});

function updateRangeHint() {
  if (!state.mode) return;
  const info = SCRIPTS[currentScript].levelText[state.mode];
  const title = tf(info.title);

  if (rangeMode === "random") {
    const total = currentRangeItems.length;
    const count = Math.min(selectedRandomCount, total);
    rangeHintEl.textContent = t("range.randomHint", { count, total });
    startBtn.textContent = t("start.startRandomCount", { title, count });
    return;
  }

  const count = selectedRangeTo - selectedRangeFrom + 1;
  const fromLabel = currentRangeItems[selectedRangeFrom].kana;
  const toLabel = currentRangeItems[selectedRangeTo].kana;
  rangeHintEl.textContent = count === 1
    ? t("range.oneSelected", { from: fromLabel })
    : t("range.manySelected", { count, from: fromLabel, to: toLabel });
  startBtn.textContent = t("start.startCount", { title, count });
}

/* ---------------- tipe soal: arti / romaji / campuran (atau fungsi / kalimat utk Bunpō) ---------------- */
const quizVariantPickerEl = document.getElementById("quiz-variant-picker");
const quizVariantBtnEls = [
  document.getElementById("quiz-variant-btn-a"),
  document.getElementById("quiz-variant-btn-b"),
  document.getElementById("quiz-variant-btn-c")
];
document.querySelectorAll(".quiz-variant-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".quiz-variant-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedQuizVariant = btn.dataset.variant;
  });
});

// isi ulang label/ikon/nilai tombol pilihan tipe soal sesuai script yg dipilih
// (mis. kanji/kotoba pakai Romaji/Arti/Campuran, sedangkan Bunpō pakai
// Fungsi/Kalimat/Campuran) — dipanggil tiap kali tab aksara diganti.
function renderVariantButtons(script) {
  const config = (script && script.variantButtons) || [];
  quizVariantBtnEls.forEach((btn, i) => {
    if (!btn) return;
    const cfg = config[i];
    if (!cfg) { btn.classList.add("hidden"); return; }
    btn.classList.remove("hidden");
    btn.dataset.variant = cfg.key;
    btn.innerHTML = cfg.i18nKey
      ? `${cfg.icon} <span data-i18n="${cfg.i18nKey}">${t(cfg.i18nKey)}</span>`
      : `${cfg.icon} ${cfg.label}`;
    btn.classList.toggle("active", i === 0);
  });
  selectedQuizVariant = config[0] ? config[0].key : "meaning";
}

/* ---------------- tingkat kesulitan: easy / medium / hard ---------------- */
const difficultyHintEl = document.getElementById("difficulty-hint");
document.querySelectorAll(".difficulty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    document.querySelectorAll(".difficulty-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDifficulty = btn.dataset.difficulty;
  });
});
function setDifficulty(value) {
  selectedDifficulty = value;
  document.querySelectorAll(".difficulty-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.difficulty === value);
  });
}

/* ---------------- mode penaklukkan (conquest) ---------------- */
const btnConquest = document.getElementById("btn-conquest");
const conquestOverlay = document.getElementById("conquest-overlay");
const conquestModalText = document.getElementById("conquest-modal-text");
const conquestModalRulesEl = document.getElementById("conquest-modal-rules");
const btnConquestCancel = document.getElementById("btn-conquest-cancel");
const btnConquestConfirm = document.getElementById("btn-conquest-confirm");
const conquestDescEl = document.getElementById("conquest-desc");
const conquestStatusEl = document.getElementById("conquest-status");
const conquestLockNoteEl = document.getElementById("conquest-lock-note");
const conquestTitleTextEl = document.getElementById("conquest-title-text");

const conquestIconEl = document.getElementById("conquest-icon");

function updateConquestCard(scriptKey) {
  const script = SCRIPTS[scriptKey];
  const total = script.data.all.length;
  const isConquered = !!getConqueredTitles()[scriptKey];

  // begitu sebuah aksara berhasil ditaklukkan, kartu Mode penaklukkan-nya
  // berubah menjadi Mode Speedrun — status "✓ Conquered" tidak perlu lagi
  // ditampilkan karena ikon & warna kartu sudah menandakannya.
  btnConquest.classList.toggle("speedrun-mode", isConquered);
  if (conquestIconEl) conquestIconEl.textContent = isConquered ? "⚡" : "⚔️";
  if (conquestStatusEl) conquestStatusEl.classList.toggle("hidden", !isConquered);

  if (isConquered) {
    conquestTitleTextEl.textContent = t("speedrun.cardTitleWithLabel", { label: script.label });
    const best = getSpeedrunBest(scriptKey);
    conquestDescEl.innerHTML = best !== null
      ? t("speedrun.descWithRecord", { label: `<b>${script.label}</b>`, count: `<span>${total}</span>`, time: formatSpeedrunTime(best) })
      : t("speedrun.descNoRecord", { label: `<b>${script.label}</b>`, count: `<span>${total}</span>` });
  } else {
    conquestTitleTextEl.textContent = t("conquest.cardTitleWithLabel", { label: script.label });
    conquestDescEl.innerHTML = t("conquest.desc", {
      label: `<b>${script.label}</b>`,
      count: `<span>${total}</span>`
    });
  }

  const lockKey = getConquestLockReason(scriptKey);
  btnConquest.classList.toggle("locked", !!lockKey);
  btnConquest.disabled = !!lockKey;
  if (lockKey) {
    conquestLockNoteEl.textContent = t("conquest.lockNote", { lockLabel: SCRIPTS[lockKey].label, label: script.label });
    conquestLockNoteEl.classList.remove("hidden");
  } else {
    conquestLockNoteEl.classList.add("hidden");
  }
  updateScriptConquestBadges();
}

function openConquestOverlay() {
  if (getConquestLockReason(currentScript)) return; // locked — button is already disabled too
  const script = SCRIPTS[currentScript];
  const total = script.data.all.length;
  const isConquered = !!getConqueredTitles()[currentScript];

  if (isConquered) {
    // aksara ini sudah ditaklukkan — kartu & modal-nya sekarang untuk Mode Speedrun.
    document.getElementById("conquest-modal-title").textContent = t("speedrun.modalTitleWithLabel", { label: script.label });
    conquestModalText.textContent = t("speedrun.intro", { count: total, label: script.label });
    const rules = [
      t("speedrun.rule.timed"),
      t("speedrun.rule.mistakesCost"),
      t("speedrun.rule.autoNext"),
      t("speedrun.rule.recordSaved")
    ];
    conquestModalRulesEl.innerHTML = rules.map(r => `<li>${r}</li>`).join("");
    btnConquestConfirm.textContent = t("speedrun.confirm");
    btnConquestConfirm.classList.remove("danger");
  } else {
    const isThreePhase = currentScript === "hiragana" || currentScript === "katakana";
    const bothConquered = !!getConqueredTitles().hiragana && !!getConqueredTitles().katakana;

    document.getElementById("conquest-modal-title").textContent = t("conquest.modalTitleWithLabel", { label: script.label });

    let rules;
    if (isThreePhase) {
      conquestModalText.textContent = t("conquestModal.threePhaseIntro", { label: script.label, count: total });
      rules = [
        t("conquestModal.rule.typeOnly"),
        t("conquestModal.rule.oneWrongFails"),
        t("conquestModal.rule.failRestartChapter"),
        currentScript === "katakana" && !bothConquered
          ? t("conquestModal.rule.becomeKnightSolo")
          : t("conquestModal.rule.becomeKnightBoth")
      ];
    } else {
      conquestModalText.textContent = t("conquestModal.singleIntro", { count: total, label: script.label });
      rules = [
        t("conquestModal.rule.allAtOnce"),
        t("conquestModal.rule.oneWrongFails"),
        t("conquestModal.rule.failRestartFirst")
      ];
    }
    conquestModalRulesEl.innerHTML = rules.map(r => `<li>${r}</li>`).join("");
    btnConquestConfirm.textContent = t("conquestModal.confirm");
    btnConquestConfirm.classList.add("danger");
  }

  conquestOverlay.classList.add("open");
  conquestOverlay.setAttribute("aria-hidden", "false");
  btnConquestConfirm.focus();
}
function closeConquestOverlay() {
  conquestOverlay.classList.remove("open");
  conquestOverlay.setAttribute("aria-hidden", "true");
  btnConquest.focus();
}
btnConquest.addEventListener("click", openConquestOverlay);
btnConquestCancel.addEventListener("click", closeConquestOverlay);
conquestOverlay.addEventListener("click", (e) => {
  if (e.target === conquestOverlay) closeConquestOverlay();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && conquestOverlay.classList.contains("open")) closeConquestOverlay();
});
btnConquestConfirm.addEventListener("click", () => {
  if (getConquestLockReason(currentScript)) { closeConquestOverlay(); return; }
  const isConquered = !!getConqueredTitles()[currentScript];
  closeConquestOverlay();
  if (isConquered) {
    startSpeedrunCountdown(currentScript);
  } else {
    startQuiz(currentScript, "conquest");
  }
});

/* ---------------- speedrun "ready?" countdown (3-2-1-GO) ---------------- */
const speedrunCountdownOverlay = document.getElementById("speedrun-countdown-overlay");
const speedrunCountdownNumberEl = document.getElementById("speedrun-countdown-number");
let speedrunCountdownTimer = null;

function startSpeedrunCountdown(scriptKey) {
  clearTimeout(speedrunCountdownTimer);  const steps = ["3", "2", "1", t("speedrun.countdownGo")];
  let i = 0;

  speedrunCountdownOverlay.classList.add("open");
  speedrunCountdownOverlay.setAttribute("aria-hidden", "false");

  const showStep = () => {
    const label = steps[i];
    speedrunCountdownNumberEl.textContent = label;
    speedrunCountdownNumberEl.classList.toggle("go", i === steps.length - 1);
    speedrunCountdownNumberEl.classList.remove("tick");
    void speedrunCountdownNumberEl.offsetWidth; // restart animasi tiap tick
    speedrunCountdownNumberEl.classList.add("tick");
    i++;
    if (i < steps.length) {
      speedrunCountdownTimer = setTimeout(showStep, 1000);
    } else {
      speedrunCountdownTimer = setTimeout(() => {
        speedrunCountdownOverlay.classList.remove("open");
        speedrunCountdownOverlay.setAttribute("aria-hidden", "true");
        speedrunCountdownNumberEl.classList.remove("go", "tick");
        startQuiz(scriptKey, "speedrun");
      }, 1000);
    }
  };
  showStep();
}

speedrunCountdownOverlay.addEventListener("click", () => {
  // klik di mana saja membatalkan hitung mundur & kembali seperti semula.
  clearTimeout(speedrunCountdownTimer);
  speedrunCountdownOverlay.classList.remove("open");
  speedrunCountdownOverlay.setAttribute("aria-hidden", "true");
  speedrunCountdownNumberEl.classList.remove("go", "tick");
});

/* ---------------- learn screen navigation ---------------- */
const screenLearnEl = document.getElementById("screen-learn");
const btnLearnBack = document.getElementById("btn-learn-back");
const btnLearnToQuiz = document.getElementById("btn-learn-to-quiz");
const screenStart = document.getElementById("screen-start");

btnOpenLearn.addEventListener("click", () => {
  screenStart.classList.add("hidden");
  screenLearnEl.classList.remove("hidden");
  renderLearnTables(currentScript);
  window.scrollTo({ top: 0, behavior: "instant" });
});
btnLearnBack.addEventListener("click", () => {
  screenLearnEl.classList.add("hidden");
  screenStart.classList.remove("hidden");
});
btnLearnToQuiz.addEventListener("click", () => {
  screenLearnEl.classList.add("hidden");
  screenStart.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
});

/* ---------------- quiz flow ---------------- */
const screenQuiz = document.getElementById("screen-quiz");
const screenResults = document.getElementById("screen-results");
const dotsEl = document.getElementById("dots");
const streakEl = document.getElementById("streak");
const streakCountEl = document.getElementById("streak-count");
const stampEl = document.getElementById("stamp");
const kanaCharEl = document.getElementById("kana-char");
const choicesEl = document.getElementById("choices");
const hardInputRow = document.getElementById("hard-input-row");
const hardInputEl = document.getElementById("hard-input");
const btnHardSubmit = document.getElementById("btn-hard-submit");
const feedbackEl = document.getElementById("feedback");
const feedbackExtraEl = document.getElementById("feedback-extra");
const nextBtn = document.getElementById("btn-next");
const quizModeLabelEl = document.getElementById("quiz-mode-label");
const speedrunTimerEl = document.getElementById("speedrun-timer");
const speedrunTimerValueEl = document.getElementById("speedrun-timer-value");
let speedrunInterval = null;

function startSpeedrunTimer() {
  clearInterval(speedrunInterval);
  if (!state.speedrun) {
    speedrunTimerEl.classList.add("hidden");
    return;
  }
  speedrunTimerEl.classList.remove("hidden");
  speedrunTimerValueEl.textContent = formatSpeedrunTime(0);
  speedrunInterval = setInterval(() => {
    speedrunTimerValueEl.textContent = formatSpeedrunTime(Date.now() - state.speedrunStart);
  }, 100);
}
function stopSpeedrunTimer() {
  clearInterval(speedrunInterval);
  speedrunInterval = null;
  if (state.speedrun && state.speedrunStart) {
    state.speedrunElapsedMs = Date.now() - state.speedrunStart;
  }
}
const screenConquestStory = document.getElementById("screen-conquest-story");
const conquestStoryEyebrowEl = document.getElementById("conquest-story-eyebrow");
const conquestStoryTitleEl = document.getElementById("conquest-story-title");
const conquestStoryTextEl = document.getElementById("conquest-story-text");
const conquestStoryMetaEl = document.getElementById("conquest-story-meta");
const btnConquestStoryContinue = document.getElementById("btn-conquest-story-continue");

// Mode penaklukkan 3 Chapter: setiap Chapter (Hiragana maupun Katakana) selalu
// mode "hard" — user mengetik sendiri jawabannya, tanpa pilihan ganda sama sekali.
function getConquestPhaseDifficulty(_phaseIdx) {
  return "hard";
}

function startQuiz(scriptKey, mode) {
  const script = SCRIPTS[scriptKey];
  const isConquest = mode === "conquest";
  const isSpeedrun = mode === "speedrun";
  // speedrun: sama seperti penaklukkan dari sisi soal (seluruh materi aksara
  // sekaligus), tapi tanpa gagal-instan & tanpa cerita Chapter — cuma dikejar waktu.
  const usesAllPool = isConquest || isSpeedrun;
  // Mode penaklukkan 3 Chapter (cerita) cuma utk Hiragana & Katakana — tier1/tier2/tier3
  // berturut-turut menjadi Chapter 1/2/3, masih satu penaklukkan (1x salah = gagal seluruh).
  const isThreePhaseConquest = isConquest && (scriptKey === "hiragana" || scriptKey === "katakana");

  let pool, queue, wrongPools;
  let conquestPhaseBoundaries = null;

  if (script.hasVariants && script.variantMode === "sentence") {
    // bunpo: dua tipe soal —
    // "meaning" (Fungsi): tunjukkan polanya, tebak fungsinya (seperti semula)
    // "kalimat" (Kalimat): tunjukkan contoh kalimatnya, tebak pola/partikel mana
    // yang cocok dipakai di situ — kebalikan dari "meaning"
    const meaningPool = usesAllPool ? script.data.all : script.data[mode];
    const kalimatPool = usesAllPool ? script.dataKalimat.all : script.dataKalimat[mode];
    // kalimatBlankPool: versi romaji-tanpa-kanji dari kalimatPool (partikel/pola
    // dikosongkan "...") — dipakai sebagai teks SOAL "Tebak Partikel!" supaya
    // jawabannya tidak kebocoran. kalimatPool aslinya tetap dipakai apa adanya
    // buat "extra" (contoh kalimat lengkap, muncul setelah jawab soal "Fungsi").
    const kalimatBlankPool = usesAllPool ? script.dataKalimatBlank.all : script.dataKalimatBlank[mode];
    wrongPools = { meaning: meaningPool, kalimat: kalimatPool };
    pool = meaningPool;

    const indices = shuffle(computeRangeIndices(meaningPool.length, usesAllPool));
    queue = indices.map(i => {
      const type = selectedQuizVariant === "both"
        ? (Math.random() < 0.5 ? "meaning" : "kalimat")
        : selectedQuizVariant;
      return type === "kalimat"
        // soal = kalimat contoh (versi blank, tanpa kanji), jawaban = pola/partikelnya, extra = fungsinya
        ? [kalimatBlankPool[i][0], kalimatPool[i][1], type, meaningPool[i][1]]
        // soal = pola, jawaban = fungsinya, extra = kalimat contoh lengkap
        : [meaningPool[i][0], meaningPool[i][1], type, kalimatPool[i][0]];
    });
  } else if (script.hasVariants) {
    // kotoba / kanji: bisa soal "arti", "romaji", atau "campuran" keduanya
    const meaningPool = usesAllPool ? script.data.all : script.data[mode];
    const romajiPool = usesAllPool ? script.dataRomaji.all : script.dataRomaji[mode];
    wrongPools = { meaning: meaningPool, romaji: romajiPool };
    pool = meaningPool;

    // Basic Kotoba di Mode Penaklukan & Speedrun: tipe soal dikunci ke "arti" (meaning)
    // saja, tidak ikut pengaturan selectedQuizVariant milik user.
    const forceKotobaMeaning = scriptKey === "kotoba" && (isConquest || isSpeedrun);

    const indices = shuffle(computeRangeIndices(meaningPool.length, usesAllPool));
    queue = indices.map(i => {
      const type = forceKotobaMeaning
        ? "meaning"
        : selectedQuizVariant === "both"
          ? (Math.random() < 0.5 ? "meaning" : "romaji")
          : selectedQuizVariant;
      const src = type === "romaji" ? romajiPool : meaningPool;
      // simpan juga sisi "lainnya" (kalau soalnya arti, simpan romaji-nya, dan
      // sebaliknya) supaya bisa ditunjukkan begitu user selesai jawab soal ini.
      const extra = type === "romaji" ? meaningPool[i][1] : romajiPool[i][1];
      return [src[i][0], src[i][1], type, extra];
    });
  } else if (isThreePhaseConquest) {
    const t1 = shuffle(script.data.tier1), t2 = shuffle(script.data.tier2), t3 = shuffle(script.data.tier3);
    pool = script.data.all;
    wrongPools = { romaji: pool };
    queue = [...t1, ...t2, ...t3].map(p => [p[0], p[1], "romaji"]);
    conquestPhaseBoundaries = [0, t1.length, t1.length + t2.length, t1.length + t2.length + t3.length];
  } else {
    // hiragana / katakana: hanya tebak romaji, seperti semula
    pool = usesAllPool ? script.data.all : script.data[mode];
    wrongPools = { romaji: pool };
    // di luar penaklukkan/speedrun: mode manual pakai rentang "Dari"—"Sampai", mode acak
    // mengambil sejumlah `selectedRandomCount` karakter random dari seluruh tingkatan.
    let rangePool;
    if (usesAllPool) {
      rangePool = pool;
    } else if (rangeMode === "random") {
      const count = Math.min(selectedRandomCount, pool.length);
      rangePool = shuffle(pool).slice(0, count);
    } else {
      const from = Math.max(0, Math.min(selectedRangeFrom, pool.length - 1));
      const to = Math.max(from, Math.min(selectedRangeTo, pool.length - 1));
      rangePool = pool.slice(from, to + 1);
    }
    queue = shuffle(rangePool).map(p => [p[0], p[1], "romaji"]);
  }

  const supportsHard = scriptKey === "hiragana" || scriptKey === "katakana";
  // penaklukkan 3 Chapter selalu pakai progresi kesulitan otomatis per Chapter.
  // Speedrun sekarang pakai mode hard (ketik jawaban) supaya lebih menantang &
  // auto-lanjut pas jawaban benar terasa jelas manfaatnya — tapi cuma utk aksara
  // yang memang mendukung hard (Hiragana/Katakana); selain itu tetap fallback easy.
  // Basic Kotoba di Mode Penaklukan & Speedrun: tingkat kesulitan dikunci ke "medium",
  // tidak ikut pengaturan selectedDifficulty milik user maupun aturan hard/easy default speedrun.
  const forceKotobaMedium = scriptKey === "kotoba" && (isConquest || isSpeedrun);

  const difficulty = forceKotobaMedium
    ? "medium"
    : isThreePhaseConquest
      ? getConquestPhaseDifficulty(0)
      : isSpeedrun ? (supportsHard ? "hard" : "easy")
        : (selectedDifficulty === "hard" && !supportsHard) ? "easy" : selectedDifficulty;

  state = {
    script: scriptKey, mode, pool, wrongPools,
    queue,
    difficulty,
    conquestPhaseBoundaries, conquestPhaseIndex: 0,
    index: 0, score: 0, streak: 0, maxStreak: 0, missed: [], results: [],
    rankIndexBefore: getRankIndex(),
    conquest: isConquest, conquestFailed: false,
    speedrun: isSpeedrun, speedrunStart: isSpeedrun ? Date.now() : null, speedrunElapsedMs: 0,
    speedrunMistakes: 0, speedrunFailed: false
  };
  cancelArmed = false;
  clearTimeout(cancelTimer);
  clearSpeedrunAutoNext();
  btnCancel.textContent = t("common.back");
  btnCancel.classList.remove("armed");
  screenStart.classList.add("hidden");
  screenResults.classList.add("hidden");

  if (isThreePhaseConquest) {
    screenQuiz.classList.add("hidden");
    renderConquestStory(0);
  } else {
    screenConquestStory.classList.add("hidden");
    screenQuiz.classList.remove("hidden");
    screenQuiz.classList.toggle("conquest-active", isConquest);
    screenQuiz.classList.toggle("speedrun-active", isSpeedrun);
    renderDots();
    renderQuestion();
  }
  startSpeedrunTimer();
}

function renderConquestStory(phaseIndex) {
  const script = SCRIPTS[state.script];
  const story = getLocalizedConquestStory(state.script);
  const phase = story.phases[phaseIndex];
  const boundaries = state.conquestPhaseBoundaries;
  const phaseLen = boundaries[phaseIndex + 1] - boundaries[phaseIndex];

  state.conquestPhaseIndex = phaseIndex;
  state.difficulty = getConquestPhaseDifficulty(phaseIndex);
  const isFinalPhase = phaseIndex === story.phases.length - 1;
  const diffLabel = t("conquestStory.diffLabel");
  conquestStoryEyebrowEl.textContent = phaseIndex === 0
    ? t("conquestStory.eyebrowStart")
    : isFinalPhase ? t("conquestStory.eyebrowFinal") : t("conquestStory.eyebrowNext");
  conquestStoryTitleEl.textContent = t("conquestStory.titleWithScript", { label: phase.label, script: script.label });
  conquestStoryTextEl.textContent = phase.text;
  conquestStoryMetaEl.textContent = t("conquestStory.meta", { count: phaseLen, diff: diffLabel });

  screenQuiz.classList.add("hidden");
  screenResults.classList.add("hidden");
  screenConquestStory.classList.remove("hidden");
  btnConquestStoryContinue.focus();
}

btnConquestStoryContinue.addEventListener("click", () => {
  screenConquestStory.classList.add("hidden");
  screenQuiz.classList.remove("hidden");
  screenQuiz.classList.toggle("conquest-active", true);
  renderDots();
  renderQuestion();
});
document.getElementById("btn-conquest-story-back").addEventListener("click", () => {
  screenConquestStory.classList.add("hidden");
  screenStart.classList.remove("hidden");
  renderProfile();
});

function renderDots() {
  dotsEl.innerHTML = "";
  let indices;
  if (state.conquestPhaseBoundaries) {
    const b = state.conquestPhaseBoundaries;
    const start = b[state.conquestPhaseIndex], end = b[state.conquestPhaseIndex + 1];
    indices = [];
    for (let i = start; i < end; i++) indices.push(i);
  } else {
    indices = state.queue.map((_, i) => i);
  }
  indices.forEach(i => {
    const d = document.createElement("span");
    d.className = "dot";
    if (i === state.index) d.classList.add("current");
    if (state.results[i] === true) d.classList.add("correct");
    if (state.results[i] === false) d.classList.add("wrong");
    dotsEl.appendChild(d);
  });
}

function renderQuestion() {
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback-text";
  feedbackExtraEl.textContent = "";
  feedbackExtraEl.classList.add("hidden");
  nextBtn.classList.add("hidden");

  const script = SCRIPTS[state.script];
  const current = state.queue[state.index];

  if (state.conquest) {
    if (state.conquestPhaseBoundaries) {
      const b = state.conquestPhaseBoundaries;
      const phaseIdx = state.conquestPhaseIndex;
      const qInPhase = state.index - b[phaseIdx] + 1;
      const phaseLen = b[phaseIdx + 1] - b[phaseIdx];
      const phaseLabel = getLocalizedConquestStory(state.script).phases[phaseIdx].label;
      quizModeLabelEl.textContent = t("quiz.chapterLabel", { phaseLabel, current: qInPhase, total: phaseLen });
    } else {
      quizModeLabelEl.textContent = t("quiz.conquerLabel", { label: script.label, current: state.index + 1, total: state.queue.length });
    }
  } else if (state.speedrun) {
    quizModeLabelEl.textContent = t("quiz.speedrunLabel", { label: script.label, current: state.index + 1, total: state.queue.length });
  } else if (script.hasVariants) {
    const labelKey = (script.quizLabelKeys && script.quizLabelKeys[current[2]])
      || (current[2] === "romaji" ? script.quizLabelRomajiKey : script.quizLabelKey);
    quizModeLabelEl.textContent = t(labelKey);
  } else {
    quizModeLabelEl.textContent = t(script.quizLabelKey);
  }

  kanaCharEl.textContent = current[0];
  stampEl.classList.toggle("kanji-stamp", script.quizType === "meaning");
  // kata (kotoba/kanji/bunpō) selalu pakai kartu lebar "long-text" biar tidak
  // meluber dari lingkaran cap — lingkaran hanya untuk 1 karakter kana/kanji tunggal.
  const isWordStamp = script.quizType === "meaning" || current[0].length > 6;
  stampEl.classList.toggle("long-text", isWordStamp);
  if (isWordStamp) {
    const len = current[0].length;
    // makin panjang katanya, makin kecil hurufnya, supaya tetap rapi & pas di kartu.
    const size = len <= 3 ? 34 : len <= 5 ? 28 : len <= 7 ? 23 : len <= 10 ? 19 : 16;
    kanaCharEl.style.fontSize = `clamp(${size - 8}px, ${(size * 0.26).toFixed(1)}vw, ${size + 6}px)`;
  } else {
    kanaCharEl.style.fontSize = "";
  }
  stampEl.classList.remove("pop");
  void stampEl.offsetWidth;
  stampEl.classList.add("pop");

  if (state.difficulty === "hard") {
    // mode hard: user ketik sendiri jawabannya, tanpa pilihan ganda
    choicesEl.classList.add("hidden");
    choicesEl.innerHTML = "";
    hardInputRow.classList.remove("hidden");
    hardInputEl.value = "";
    hardInputEl.disabled = false;
    hardInputEl.className = "hard-input";
    btnHardSubmit.disabled = false;
    hardInputEl.focus();
  } else {
    hardInputRow.classList.add("hidden");
    choicesEl.classList.remove("hidden");
    const count = state.difficulty === "medium" ? 8 : 4;
    const options = buildChoices(current, state.wrongPools[current[2]], count);
    choicesEl.innerHTML = "";
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleAnswer(opt, btn, current));
      choicesEl.appendChild(btn);
    });
  }

  renderDots();
  updateStreakUI();
}

function updateStreakUI() {
  streakCountEl.textContent = state.streak;
  streakEl.classList.toggle("show", state.streak >= 2);
}

let speedrunAutoNextTimer = null;
function clearSpeedrunAutoNext() {
  clearTimeout(speedrunAutoNextTimer);
  speedrunAutoNextTimer = null;
}

function handleAnswer(chosen, btn, current) {
  clearSpeedrunAutoNext();
  document.querySelectorAll("button.choice").forEach(b => b.disabled = true);
  hardInputEl.disabled = true;
  btnHardSubmit.disabled = true;
  const isCorrect = String(chosen).trim().toLowerCase() === String(current[1]).trim().toLowerCase();

  document.querySelectorAll("button.choice").forEach(b => {
    if (b.textContent === current[1]) b.classList.add("correct");
  });

  if (isCorrect) {
    state.score++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    feedbackEl.textContent = t("quiz.correct");
    feedbackEl.classList.add("correct");
    if (state.difficulty === "hard") hardInputEl.classList.add("correct");
  } else {
    if (btn) btn.classList.add("wrong");
    if (state.difficulty === "hard") hardInputEl.classList.add("wrong");
    state.streak = 0;
    state.missed.push(current);
    if (state.conquest) {
      state.conquestFailed = true;
      feedbackEl.textContent = t("quiz.failedAnswerWas", { answer: current[1] });
    } else if (state.speedrun) {
      state.speedrunMistakes++;
      if (state.speedrunMistakes > 3) {
        state.speedrunFailed = true;
        feedbackEl.textContent = t("quiz.failedAnswerWas", { answer: current[1] });
      } else {
        feedbackEl.textContent = t("quiz.missedAnswerWas", { answer: current[1] });
      }
    } else {
      feedbackEl.textContent = t("quiz.missedAnswerWas", { answer: current[1] });
    }
    feedbackEl.classList.add("wrong");
  }
  state.results[state.index] = isCorrect;
  renderDots();
  updateStreakUI();

  // show the "other side" (e.g. meaning if this was a romaji question, romaji if
  // this was a meaning question; or the example sentence/function for Bunpō's
  // Kalimat mode) before moving on — Kotoba, Kanji & Bunpō only.
  if (current[3]) {
    const script = SCRIPTS[state.script];
    const extraKey = (script.extraLabelKeys && script.extraLabelKeys[current[2]])
      || (current[2] === "romaji" ? "quiz.meaningLabel" : "quiz.romajiLabel");
    feedbackExtraEl.textContent = t(extraKey, { value: current[3] });
    feedbackExtraEl.classList.remove("hidden");
  }

  nextBtn.classList.remove("hidden");
  if ((state.conquest && state.conquestFailed) || (state.speedrun && state.speedrunFailed)) {
    nextBtn.textContent = t("quiz.seeResults");
  } else {
    nextBtn.textContent = state.index === state.queue.length - 1 ? t("quiz.seeResults") : t("quiz.next");
  }
  nextBtn.focus();

  // Mode Speedrun: jawaban BENAR langsung lanjut otomatis ke soal berikutnya
  // tanpa perlu pencet Enter/klik Next — biar makin ngebut. Jawaban salah tetap
  // butuh konfirmasi manual (biar sempat lihat jawaban yang benar).
  if (isCorrect && state.speedrun) {
    speedrunAutoNextTimer = setTimeout(() => {
      speedrunAutoNextTimer = null;
      goToNextQuestion();
    }, 350);
  }
}

btnHardSubmit.addEventListener("click", () => {
  if (hardInputEl.disabled) return;
  if (hardInputEl.value.trim() === "") {
    feedbackEl.textContent = t("quiz.fillAnswerFirst");
    feedbackEl.className = "feedback-text warn";
    hardInputEl.classList.remove("wrong");
    hardInputEl.classList.remove("shake-empty");
    void hardInputEl.offsetWidth;
    hardInputEl.classList.add("shake-empty");
    hardInputEl.focus();
    return;
  }
  const current = state.queue[state.index];
  handleAnswer(hardInputEl.value, null, current);
});
hardInputEl.addEventListener("input", () => {
  // hapus peringatan "isi dulu" begitu user mulai mengetik lagi
  if (feedbackEl.classList.contains("warn")) {
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback-text";
  }
  // Mode Speedrun: begitu ketikan user sudah persis sama dengan jawaban yang
  // benar, langsung submit otomatis — tanpa perlu pencet Enter atau klik Jawab
  // sama sekali, biar makin ngebut.
  if (state.speedrun && !hardInputEl.disabled) {
    const current = state.queue[state.index];
    const typed = hardInputEl.value.trim().toLowerCase();
    if (typed !== "" && typed === String(current[1]).trim().toLowerCase()) {
      handleAnswer(hardInputEl.value, null, current);
    }
  }
});
hardInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    e.stopPropagation(); // jangan sampai keydown ini juga kepick up listener "Enter = lanjut soal"
    if (!hardInputEl.disabled) btnHardSubmit.click();
  }
});

document.getElementById("btn-restart-quiz").addEventListener("click", () => {
  startQuiz(state.script, state.mode);
});

const btnCancel = document.getElementById("btn-cancel");
let cancelArmed = false;
let cancelTimer = null;

btnCancel.addEventListener("click", () => {
  if (!cancelArmed) {
    cancelArmed = true;
    btnCancel.textContent = t("common.backArmed");
    btnCancel.classList.add("armed");
    clearTimeout(cancelTimer);
    cancelTimer = setTimeout(() => {
      cancelArmed = false;
      btnCancel.textContent = t("common.back");
      btnCancel.classList.remove("armed");
    }, 3000);
    return;
  }
  clearTimeout(cancelTimer);
  cancelArmed = false;
  btnCancel.textContent = t("common.back");
  btnCancel.classList.remove("armed");
  clearSpeedrunAutoNext();
  stopSpeedrunTimer();
  speedrunTimerEl.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenResults.classList.add("hidden");
  screenStart.classList.remove("hidden");
  renderProfile();
});

function goToNextQuestion() {
  clearSpeedrunAutoNext();
  if ((state.conquest && state.conquestFailed) || (state.speedrun && state.speedrunFailed)) {
    renderResults();
    return;
  }
  state.index++;
  if (state.index >= state.queue.length) {
    renderResults();
    return;
  }
  // penaklukkan 3 Chapter: begitu masuk indeks awal Chapter baru, tampilkan dulu
  // layar cerita transisinya sebelum lanjut ke soal berikutnya.
  if (state.conquestPhaseBoundaries) {
    const nextPhaseIdx = state.conquestPhaseBoundaries.indexOf(state.index);
    if (nextPhaseIdx > 0 && nextPhaseIdx < state.conquestPhaseBoundaries.length - 1) {
      renderConquestStory(nextPhaseIdx);
      return;
    }
  }
  renderQuestion();
}

nextBtn.addEventListener("click", goToNextQuestion);

/* keyboard shortcuts 1-4 for choices, enter/space for next */
document.addEventListener("keydown", (e) => {
  if (screenQuiz.classList.contains("hidden")) return;
  if (settingsOverlay.classList.contains("open")) return;
  if (["1", "2", "3", "4"].includes(e.key)) {
    const btns = document.querySelectorAll("button.choice");
    const idx = parseInt(e.key, 10) - 1;
    if (btns[idx] && !btns[idx].disabled) btns[idx].click();
  } else if ((e.key === "Enter" || e.key === " ") && !nextBtn.classList.contains("hidden")) {
    e.preventDefault();
    nextBtn.click();
  }
});

/* ---------------- results ---------------- */
const promoBannerEl = document.getElementById("promo-banner");
const resGreetEl = document.getElementById("res-greet");
const btnResultsLearn = document.getElementById("btn-results-learn");

function renderResults() {
  stopSpeedrunTimer();
  speedrunTimerEl.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenResults.classList.remove("hidden");

  const resScoreEl = document.getElementById("res-score");
  const scoreText = `${state.score}/${state.queue.length}`;
  resScoreEl.textContent = scoreText;
  resScoreEl.className = "num";
  if (scoreText.length >= 5) {
    resScoreEl.classList.add(`len-${Math.min(scoreText.length, 8)}`);
  }
  const acc = Math.round((state.score / state.queue.length) * 100);
  const streakNote = state.maxStreak >= 3 ? t("results.bestStreak", { n: state.maxStreak }) : "";
  document.getElementById("res-acc").textContent = t("results.accuracy", { acc }) + streakNote;

  const nickname = getNickname();
  if (nickname) {
    let greet;
    if (state.conquest) {
      // conquest: success = automatically 100% (one mistake = fail), so praise either way.
      greet = state.conquestFailed ? t("results.greetConquestFail", { name: nickname }) : t("results.greetConquestSuccess", { name: nickname });
    } else if (acc === 100) {
      greet = t("results.greetPerfect", { name: nickname });
    } else if (acc >= 80) {
      greet = t("results.greetAlmost", { name: nickname });
    } else if (acc >= 50) {
      greet = t("results.greetDecent", { name: nickname });
    } else {
      greet = t("results.greetKeepGoing", { name: nickname });
    }
    resGreetEl.textContent = greet;
    resGreetEl.classList.remove("hidden");
  } else {
    resGreetEl.classList.add("hidden");
  }

  const missedWrap = document.getElementById("res-missed-wrap");
  const missedEl = document.getElementById("res-missed");
  const missedTitleEl = document.querySelector(".missed-title");
  missedEl.innerHTML = "";
  if (state.missed.length === 0) {
    missedWrap.classList.add("hidden");
  } else {
    missedWrap.classList.remove("hidden");
    if (missedTitleEl) missedTitleEl.textContent = state.conquest ? t("results.failureReason") : t("results.needsPractice");
    state.missed.forEach(m => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.innerHTML = `<span class="k">${m[0]}</span><span class="r">${m[1]}</span>`;
      missedEl.appendChild(chip);
    });
  }

  const retryBtn = document.getElementById("btn-retry");
  retryBtn.classList.remove("hidden");
  promoBannerEl.classList.remove("conquest-success", "conquest-fail");

  if (state.conquest) {
    const script = SCRIPTS[state.script];
    if (state.conquestFailed) {
      const phaseNote = state.conquestPhaseBoundaries
        ? t("results.conquestFailPhaseNote", { phase: getLocalizedConquestStory(state.script).phases[state.conquestPhaseIndex].label })
        : "";
      promoBannerEl.innerHTML = t("results.conquestFailBanner", { phaseNote, current: state.index + 1, total: state.queue.length, label: script.label });
      promoBannerEl.classList.add("conquest-fail");
      promoBannerEl.classList.remove("hidden");
      retryBtn.textContent = t("results.tryAgainFromStart");
      btnResultsLearn.classList.remove("hidden");
    } else {
      btnResultsLearn.classList.add("hidden");
      const promoted = promoteIfHigher(state.script, "all");
      const newTitle = earnConquestTitle(state.script);
      const opening = state.conquestPhaseBoundaries
        ? t("results.conquestSuccessOpening", { epilogue: getLocalizedConquestStory(state.script).epilogue })
        : t("results.conquestSuccessOpeningPlain", { label: script.label });
      let msg = opening;
      if (newTitle) {
        const ct = CONQUEST_TITLES[state.script];
        msg += t("results.newTitleEarned", { emoji: ct.emoji, title: ct.title });
      }
      if (promoted) {
        const rank = RANK_LEVELS[getRankIndex()];
        if (rank.title === "Knight") {
          msg += t("results.knightCeremony", { emoji: rank.emoji, title: rank.title, subtitle: rank.subtitle });
        } else {
          msg += t("results.rankUp", { emoji: rank.emoji, title: rank.title, subtitle: rank.subtitle });
        }
      }
      promoBannerEl.innerHTML = msg;
      promoBannerEl.classList.add("conquest-success");
      promoBannerEl.classList.remove("hidden");
      // aksara ini sudah takluk — kartunya sudah berubah jadi Mode Speedrun,
      // jadi tombol "Taklukkan Lagi" tidak relevan lagi di sini.
      retryBtn.classList.add("hidden");
      renderTitleCollection();
      updateScriptConquestBadges();
    }
  } else if (state.speedrun) {
    btnResultsLearn.classList.add("hidden");
    retryBtn.textContent = t("results.speedrunAgain");
    const script = SCRIPTS[state.script];
    if (state.speedrunFailed) {
      promoBannerEl.innerHTML = t("results.speedrunFailBanner", { current: state.index + 1, total: state.queue.length });
      promoBannerEl.classList.add("conquest-fail");
      promoBannerEl.classList.remove("hidden");
      renderSpeedrunRecords();
    } else {
      const timeText = formatSpeedrunTime(state.speedrunElapsedMs);
      const { isNewRecord, prevBest } = saveSpeedrunTime(state.script, state.speedrunElapsedMs);
      let msg = t("results.speedrunTime", { time: timeText }) + " — ";
      if (isNewRecord && prevBest === null) {
        msg = t("results.speedrunFirstRecord", { label: script.label, time: timeText });
        promoBannerEl.classList.add("conquest-success");
      } else if (isNewRecord) {
        msg = t("results.speedrunNewRecord", { label: script.label, time: timeText });
        promoBannerEl.classList.add("conquest-success");
      } else {
        msg = t("results.speedrunNoRecord", { label: script.label, time: timeText, best: formatSpeedrunTime(prevBest) });
      }
      promoBannerEl.innerHTML = msg;
      promoBannerEl.classList.remove("hidden");
      renderSpeedrunRecords();
    }
  } else {
    btnResultsLearn.classList.add("hidden");
    retryBtn.textContent = t("results.retrySet");
    const promoted = promoteIfHigher(state.script, state.mode);
    if (promoted) {
      const rank = RANK_LEVELS[getRankIndex()];
      promoBannerEl.innerHTML = t("results.rankUpPlain", { emoji: rank.emoji, title: rank.title, subtitle: rank.subtitle });
      promoBannerEl.classList.remove("hidden");
    } else {
      promoBannerEl.classList.add("hidden");
    }
  }

  renderProfile();
}

document.getElementById("btn-retry").addEventListener("click", () => startQuiz(state.script, state.mode));
document.getElementById("btn-change").addEventListener("click", () => {
  screenResults.classList.add("hidden");
  screenStart.classList.remove("hidden");
});
btnResultsLearn.addEventListener("click", () => {
  screenResults.classList.add("hidden");
  screenLearnEl.classList.remove("hidden");
  renderLearnTables(state.script);
  window.scrollTo({ top: 0, behavior: "instant" });
});

/* ---------------- kirim masukan (email) ---------------- */
const feedbackTextEl = document.getElementById("feedback-text");
const btnSendFeedback = document.getElementById("btn-send-feedback");
if (btnSendFeedback) {
  btnSendFeedback.addEventListener("click", () => {
    const msg = (feedbackTextEl.value || "").trim();
    const subject = encodeURIComponent(t("feedback.subject"));
    const body = encodeURIComponent(msg || t("feedback.bodyDefault"));
    window.location.href = `mailto:ferlisuganda29@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ---------------- init ---------------- */
document.documentElement.setAttribute("lang", LANG);
applyStaticTranslations();
document.querySelectorAll(".lang-btn").forEach(b => {
  b.classList.toggle("active", b.dataset.lang === LANG);
});
document.querySelector('#script-tabs .script-tab[data-script="hiragana"]').classList.add("active");
document.querySelector('#learn-script-tabs .script-tab[data-script="hiragana"]').classList.add("active");
renderLevels("hiragana");