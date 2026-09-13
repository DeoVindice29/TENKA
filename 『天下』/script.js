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
  "aria.chooseBorderStyle": { en: "Choose theme color", id: "Pilih warna tema" },
  "aria.chooseScript": { en: "Choose a script", id: "Pilih aksara" },
  "aria.chooseScriptStudy": { en: "Choose a script to study", id: "Pilih aksara untuk belajar" },
  "profile.addNickname": { en: "+ Add nickname", id: "+ Tambah nickname" },
  "profile.nicknamePlaceholder": { en: "Your nickname...", id: "Nickname kamu..." },
  "titles.heading": { en: "Conquest Title Collection", id: "Koleksi Title penaklukkan" },
  "titles.hint": { en: "Complete every conquest ⚔️ to claim the title of Conqueror!", id: "Selesaikan setiap penaklukan ⚔️ untuk meraih gelar Penakluk!" },
  "appearance.language": { en: "Language", id: "Bahasa" },
  "borderStyle.heading": { en: "Theme Color", id: "Warna Tema" },
  "borderStyle.bw": { en: "Default", id: "Default" },
  "borderStyle.rainbow": { en: "Rainbow", id: "Pelangi" },
  "borderStyle.pink": { en: "Pink", id: "Pink" },
  "borderStyle.purple": { en: "Purple", id: "Ungu" },
  "borderStyle.cyan": { en: "Cyan", id: "Cyan" },
  "borderStyle.blue": { en: "Blue", id: "Biru" },
  "borderStyle.green": { en: "Green", id: "Hijau" },
  "borderStyle.yellow": { en: "Yellow", id: "Kuning" },
  "borderStyle.orange": { en: "Orange", id: "Oranye" },
  "borderStyle.rose": { en: "Red", id: "Merah" },
  "borderStyle.teal": { en: "Teal", id: "Toska" },
  "about.heading": { en: "About", id: "Tentang" },
  "about.summary": { en: "Noble Ranks", id: "Tingkatan Kebangsawanan" },
  "about.intro": { en: "Conquer every Chapter Trial to climb from commoner to emperor.", id: "Taklukkan tiap Chapter Trial untuk rangkak naik dari rakyat jelata sampai kaisar." },
  "feedback.heading": { en: "Send Feedback", id: "Kirim Masukan" },
  "feedback.placeholder": { en: "Got a suggestion, idea, or found a bug? Write it here...", id: "Ada saran, ide, atau nemu bug? Tulis di sini..." },
  "feedback.button": { en: "Send Feedback", id: "Kirim Masukan" },
  "feedback.subject": { en: "Feedback — Learning Japanese App", id: "Masukan — Learning Japanese App" },
  "feedback.bodyDefault": { en: "Write your feedback here...", id: "Tulis masukanmu di sini..." },
  "common.cancel": { en: "Cancel", id: "Batal" },
  "common.back": { en: "Back", id: "Kembali" },
  "common.backArmed": { en: "Sure? Click again to cancel", id: "Yakin? Klik lagi untuk batalkan" },
  "conquestModal.confirm": { en: "Start Conquering", id: "Mulai Menaklukkan" },
  "conquest.modeTitle": { en: "Conquer Mode", id: "Mode penaklukkan" },
  "conquest.conquered": { en: "Conquered", id: "Ditaklukkan" },
  "conquest.cancelConquest": { en: "Cancel Conquest", id: "Batalkan penaklukkan" },
  "conquest.startThisChapter": { en: "Start This Chapter", id: "Mulai Chapter Ini" },
  "conquest.desc": { en: "Conquer all of {label} at once — {count} questions, one mistake and it's over.", id: "Taklukkan seluruh {label} sekaligus — {count} soal, satu kali salah langsung gagal." },
  "conquest.lockNote": { en: "🔒 Conquer {lockLabel} first before you can conquer {label}.", id: "🔒 Taklukkan {lockLabel} dulu sebelum bisa menaklukkan {label}." },
  "conquest.modalTitleWithLabel": { en: "⚔️ Conquer {label}", id: "⚔️ Taklukkan {label}" },
  "start.studyFirst": { en: "Study First", id: "Belajar Dulu" },
  "start.studyScriptFirst": { en: "Study {label} First", id: "Belajar {label} Dulu" },
  "start.chooseTierFirst": { en: "Choose a tier first", id: "Pilih tingkatan dulu" },
  "levels.groupChapter": { en: "Chapter {n}", id: "Chapter {n}" },
  "levels.subTiers": { en: "sub-tiers", id: "sub-tier" },
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
  "quiz.next": { en: "Next", id: "Lanjut" },
  "quiz.seeResults": { en: "See Results", id: "Lihat Hasil" },
  "quiz.guessRomaji": { en: "Guess the romaji", id: "Tebak romaji" },
  "quiz.guessMeaning": { en: "Guess the meaning", id: "Tebak artinya" },
  "quiz.guessKanjiForm": { en: "Which kanji is it?", id: "Kanji yang mana?" },
  "quiz.kanjiFormBtn": { en: "Kanji", id: "Kanji" },
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
  "quiz.hiraganaLabel": { en: "Hiragana: {value}", id: "Hiragana: {value}" },
  "quiz.kanjiLabel": { en: "Kanji: {value}", id: "Kanji: {value}" },
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
  "learn.searchPlaceholder": { en: "Search word, reading, or meaning…", id: "Cari kata, cara baca, atau arti…" },
  "learn.searchResultsCount": { en: "{count} result(s) found", id: "{count} hasil ditemukan" },
  "learn.noResults": { en: "No matches for \"{query}\". Try a different word.", id: "Tidak ada yang cocok dengan \"{query}\". Coba kata lain." },
  "learn.usageNote": { en: "Notes", id: "Catatan" },
  "aria.learnSearch": { en: "Search this study set", id: "Cari di materi ini" },
  "aria.clearSearch": { en: "Clear search", id: "Bersihkan pencarian" },
  "aria.jumpToSection": { en: "Jump to {label}", id: "Lompat ke {label}" },
  "aria.backToTop": { en: "Back to top", id: "Kembali ke atas" },
  "aria.openFlashcards": { en: "Open Flashcards", id: "Buka Flashcard" },
  "flash.eyebrow": { en: "flashcard mode", id: "mode flashcard" },
  "flash.title": { en: "Flashcards", id: "Flashcard" },
  "flash.sub": { en: "Anki-style flip cards with built-in spaced repetition. Pick a deck below, or import your own .apkg file.", id: "Kartu balik ala Anki dengan pengulangan berjarak bawaan. Pilih deck di bawah, atau impor file .apkg milikmu sendiri." },
  "flash.builtinHeading": { en: "Built-in Decks", id: "Deck Bawaan" },
  "flash.myDecksHeading": { en: "My Imported Decks", id: "Deck Impor Saya" },
  "flash.noCustomDecks": { en: "No decks imported yet.", id: "Belum ada deck yang diimpor." },
  "flash.importBtn": { en: "Import .apkg Deck", id: "Impor Deck .apkg" },
  "flash.importHint": { en: "Your .apkg file is read entirely in your browser — nothing is uploaded anywhere. Only text fields are imported; images/audio embedded in the deck aren't shown.", id: "File .apkg kamu dibaca sepenuhnya di browser — tidak ada yang diunggah ke mana pun. Hanya field teks yang diimpor; gambar/audio di dalam deck tidak ditampilkan." },
  "flash.dueNow": { en: "due now", id: "jatuh tempo" },
  "flash.cards": { en: "cards", id: "kartu" },
  "flash.deleteDeck": { en: "Delete deck", id: "Hapus deck" },
  "flash.confirmDelete": { en: 'Delete the deck "{name}"? This can\'t be undone.', id: 'Hapus deck "{name}"? Ini tidak bisa dibatalkan.' },
  "flash.progress": { en: "Card {current}/{total} · {label}", id: "Kartu {current}/{total} · {label}" },
  "flash.again": { en: "Again", id: "Lagi" },
  "flash.hard": { en: "Hard", id: "Sulit" },
  "flash.good": { en: "Good", id: "Bagus" },
  "flash.easy": { en: "Easy", id: "Mudah" },
  "flash.showAnswer": { en: "Show Answer", id: "Tampilkan Jawaban" },
  "flash.restart": { en: "Restart Deck", id: "Ulangi Deck" },
  "flash.doneTitle": { en: "Deck complete for now!", id: "Deck selesai untuk sekarang!" },
  "flash.doneSub": { en: "You reviewed {count} card(s) from {label}.", id: "Kamu sudah mengulang {count} kartu dari {label}." },
  "flash.reviewAgain": { en: "Review This Deck Again", id: "Ulangi Deck Ini Lagi" },
  "flash.chooseAnother": { en: "Choose Another Deck", id: "Pilih Deck Lain" },
  "flash.importing": { en: "Reading your .apkg file…", id: "Membaca file .apkg kamu…" },
  "flash.importSuccess": { en: "✅ Imported \"{name}\" — {count} card(s) added.", id: "✅ \"{name}\" diimpor — {count} kartu ditambahkan." },
  "flash.importFailed": { en: "❌ Import failed: {msg}", id: "❌ Impor gagal: {msg}" },
  "flash.storageFull": { en: "not enough space in this browser's storage", id: "ruang penyimpanan browser ini tidak cukup" },
  "flash.studyThisAsFlashcards": { en: "Study This as Flashcards", id: "Belajar Ini Sebagai Flashcard" },
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
  "quiz.timerLabel": { en: "Timer", id: "Timer" },
  "quiz.timerOff": { en: "No Timer", id: "Tanpa Waktu" },
  "quiz.timeUpAnswerWas": { en: "⏰ Time's up! The answer was {answer}", id: "⏰ Waktu habis! Jawabannya {answer}" },
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
  "speedrunRecords.heading": { en: "Speedrun Records", id: "Rekor Speedrun" },
  "speedrunRecords.hint": { en: "Your fastest completed run for each conquered script.", id: "Waktu tercepatmu untuk tiap aksara yang sudah ditaklukkan." },
  "speedrunRecords.empty": { en: "Conquer a script ⚔️ to unlock Speedrun Mode for it.", id: "Taklukkan sebuah aksara ⚔️ untuk membuka Mode Speedrun-nya." },
  "speedrunRecords.notPlayedYet": { en: "Not run yet", id: "Belum pernah dicoba" },
  "speedrun.countdownGo": { en: "GO!", id: "MULAI!" },

  "matchMode.cardTitle": { en: "Match Mode", id: "Mode Match" },
  "matchMode.cardDesc": { en: "Match 4 characters with their romaji, round by round.", id: "Cocokkan 4 huruf dengan romaji-nya, ronde demi ronde." },
  "matchMode.instruction": { en: "Tap a character, then its matching romaji", id: "Ketuk sebuah huruf, lalu romaji yang cocok" },
  "matchMode.roundProgress": { en: "Round {current}/{total}", id: "Ronde {current}/{total}" },
  "matchMode.restart": { en: "Restart", id: "Ulangi" },
  "matchMode.playAgain": { en: "Play Again", id: "Main Lagi" },
  "matchMode.doneTitle": { en: "All matched!", id: "Semua cocok!" },
  "matchMode.doneSub": { en: "{pairs} pairs · {mistakes} mistakes · {time}", id: "{pairs} pasangan · {mistakes} kali salah · {time}" },

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

/* ---------------- theme color (whole-app hue theming) ----------------
   Memilih warna di sini men-tema-i SELURUH aplikasi: teks, border, tombol,
   sampai warna benar/salah (salah = warna kebalikan/komplementer dari benar).
   "Default" (dulu "Rainbow") = tampilan asli, tiap tombol dapat warna acak
   sendiri, tanpa override tema global. Mode terang/gelap cuma membedakan
   kecerahan — huenya tetap sama. */
const BORDER_STYLE_KEY = "tebakAksara_choiceBorderStyle_v1";
const borderStyleOptionsEl = document.getElementById("border-style-options");

const VALID_BORDER_STYLES = ["bw", "rainbow", "pink", "purple", "cyan", "blue", "green", "yellow", "orange", "rose", "teal"];
const THEME_HUES = { pink: 330, purple: 265, cyan: 189, blue: 217, green: 142, yellow: 42, orange: 24, rose: 5, teal: 175 };
const THEME_OVERRIDE_VARS = [
  "--paper", "--paper-dark", "--card", "--ink", "--ink-soft",
  "--indigo", "--indigo-deep", "--vermillion", "--gold", "--moss", "--line",
  "--quiz-correct", "--quiz-wrong", "--quiz-correct-fill", "--quiz-correct-fill-text",
  "--match-selecting", "--match-selecting-bg", "--match-selecting-text"
];

function getBorderStyle() {
  const stored = localStorage.getItem(BORDER_STYLE_KEY);
  return VALID_BORDER_STYLES.includes(stored) ? stored : "bw";
}

function hsl(h, s, l) { return `hsl(${((h % 360) + 360) % 360}, ${s}%, ${l}%)`; }
function hsla(h, s, l, a) { return `hsla(${((h % 360) + 360) % 360}, ${s}%, ${l}%, ${a})`; }

// tema "Default" — palet navy gelap + aksen biru-cyan & hijau mint, abu netral untuk kotak
// jawaban (tanpa tint warna acak seperti rainbow). Pilihan "single tap" di match mode
// ditampilkan sebagai outline (bg tetap gelap, border & teks jadi biru), bukan solid fill,
// biar terasa lebih clean & modern.
function buildBwVars(isDark) {
  return isDark ? {
    "--paper": "#10161D", "--paper-dark": "#0B0F14", "--card": "#1A222B",
    "--ink": "#EDF1F5", "--ink-soft": "#8A96A3",
    "--indigo": "#3EC6FF", "--indigo-deep": "#1FA8DE",
    "--vermillion": "#4C7CE8", "--gold": "#FFD166", "--moss": "#6EE7A0",
    "--line": "rgba(237, 241, 245, 0.09)",
    "--quiz-correct": "#10B981", "--quiz-wrong": "#F2685C",
    "--quiz-correct-fill": "#065F46", "--quiz-correct-fill-text": "#F2FBF6",
    "--match-selecting": "#3EC6FF", "--match-selecting-bg": "#1A222B", "--match-selecting-text": "#3EC6FF"
  } : {
    "--paper": "#EAF0F5", "--paper-dark": "#DCE6ED", "--card": "#F6FAFC",
    "--ink": "#16202A", "--ink-soft": "#55636F",
    "--indigo": "#0E8FC0", "--indigo-deep": "#0B6E97",
    "--vermillion": "#1D4ED8", "--gold": "#C98A1C", "--moss": "#2F9E5D",
    "--line": "rgba(22, 32, 42, 0.13)",
    "--quiz-correct": "#10B981", "--quiz-wrong": "#B23A2E",
    "--quiz-correct-fill": "#065F46", "--quiz-correct-fill-text": "#F2FBF6",
    "--match-selecting": "#0E8FC0", "--match-selecting-bg": "#F6FAFC", "--match-selecting-text": "#0E8FC0"
  };
}

function applyThemeColorOverrides(style) {
  const root = document.documentElement.style;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  if (style === "bw") {
    THEME_OVERRIDE_VARS.forEach(v => root.removeProperty(v));
    Object.entries(buildBwVars(isDark)).forEach(([key, val]) => root.setProperty(key, val));
    return;
  }

  if (style === "rainbow" || !THEME_HUES.hasOwnProperty(style)) {
    THEME_OVERRIDE_VARS.forEach(v => root.removeProperty(v));
    return;
  }
  const h = THEME_HUES[style];
  const wrong = h + 180; // "salah" pakai warna kebalikan/komplementer dari "benar"
  THEME_OVERRIDE_VARS.forEach(v => root.removeProperty(v));

  // aksen sekunder (vermillion/gold/moss) digeser lebih dekat ke hue utama supaya
  // tetap senada/analog dan gak kelihatan "belang" dibanding base color-nya.
  const vars = isDark ? {
    "--paper": hsl(h, 22, 12), "--paper-dark": hsl(h, 22, 15), "--card": hsl(h, 20, 17),
    "--ink": hsl(h, 14, 92), "--ink-soft": hsl(h, 14, 72),
    "--indigo": hsl(h, 75, 68), "--indigo-deep": hsl(h, 75, 78),
    "--vermillion": hsl(h + 12, 72, 64), "--gold": hsl(h + 28, 82, 66), "--moss": hsl(h + 45, 55, 60),
    "--line": hsla(h, 20, 85, 0.16),
    "--quiz-correct": hsl(h, 65, 60), "--quiz-wrong": hsl(wrong, 65, 62),
    "--quiz-correct-fill": hsl(h, 55, 26), "--match-selecting": hsl(h + 45, 55, 55)
  } : {
    "--paper": hsl(h, 22, 88), "--paper-dark": hsl(h, 25, 82), "--card": hsl(h, 28, 93),
    "--ink": hsl(h, 12, 15), "--ink-soft": hsl(h, 10, 38),
    "--indigo": hsl(h, 62, 42), "--indigo-deep": hsl(h, 66, 32),
    "--vermillion": hsl(h + 12, 70, 47), "--gold": hsl(h + 28, 75, 52), "--moss": hsl(h + 45, 45, 36),
    "--line": hsla(h, 20, 20, 0.16),
    "--quiz-correct": hsl(h, 58, 34), "--quiz-wrong": hsl(wrong, 58, 40),
    "--quiz-correct-fill": hsl(h, 55, 26), "--match-selecting": hsl(h + 45, 45, 38)
  };

  Object.entries(vars).forEach(([key, val]) => root.setProperty(key, val));
}

function applyBorderStyle(style) {
  document.documentElement.setAttribute("data-choice-border", style);
  borderStyleOptionsEl.querySelectorAll(".border-style-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-border-style") === style);
  });
  localStorage.setItem(BORDER_STYLE_KEY, style);
  applyThemeColorOverrides(style);
}
applyBorderStyle(getBorderStyle());
borderStyleOptionsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".border-style-btn");
  if (!btn) return;
  applyBorderStyle(btn.getAttribute("data-border-style"));
  if (typeof refreshMatchTileBorderColors === "function") refreshMatchTileBorderColors();
});

/* ---------------- theme (light / dark) ---------------- */
const themeToggle = document.getElementById("theme-toggle");
const themeSwitchInput = document.getElementById("theme-switch-input");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.setAttribute("aria-label", theme === "dark" ? t("aria.switchToLight") : t("aria.switchToDark"));
  themeSwitchInput.checked = theme === "dark";
  const themeLabel = document.getElementById("theme-toggle-label");
  themeLabel.textContent = theme === "dark" ? t("theme.dark") : t("theme.light");
  applyThemeColorOverrides(getBorderStyle()); // recompute hue theme di brightness mode baru
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
  if (!screenFlashDeck.classList.contains("hidden")) {
    renderFlashBuiltinDecks();
    renderFlashCustomDecks();
  }
  if (!screenFlashcard.classList.contains("hidden") && flashState.queue && flashState.queue.length) {
    renderCurrentFlashcard();
  }
  if (!screenMatch.classList.contains("hidden") && matchState) {
    matchProgressTextEl.textContent = t("matchMode.roundProgress", {
      current: matchState.roundIndex + 1,
      total: matchState.rounds.length
    });
    if (!matchDoneEl.classList.contains("hidden")) {
      matchDoneSubEl.textContent = t("matchMode.doneSub", {
        pairs: matchState.totalPairs,
        mistakes: matchState.mistakes,
        time: formatSpeedrunTime(matchState.elapsedMs || 0)
      });
    }
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
/* Sokuon (促音), Chōon (長音), Hatsuon (撥音) below are taught through real N5
   vocabulary instead of a bare character grid — same tuple shape as the
   Kotoba data: [word, reading, meaning, example, exampleSegments,
   exampleTranslation, kanjiWord, kanjiExample, usage]. */
const HIRAGANA_SOKUON_WORDS = [
  ["がっこう", "gakkou", { en: "school", id: "sekolah" }, "がっこうは たのしいです。",
    [["がっこう", "Gakkou"], ["は", "wa"], ["たのしい", "tanoshii"], ["です", "desu"]],
    { en: "School is fun.", id: "Sekolah itu menyenangkan." }, "学校", "学校は楽しいです。",
    { en: "Small っ before a consonant is a short held pause — read it by doubling the consonant that follows: っこ here is read \"kko\", not \"ko\".", id: "っ kecil sebelum konsonan berarti jeda singkat — dibaca dengan menggandakan konsonan sesudahnya: っこ di sini dibaca \"kko\", bukan \"ko\"." }],
  ["ざっし", "zasshi", { en: "magazine", id: "majalah" }, "あたらしい ざっしを かいました。",
    [["あたらしい", "Atarashii"], ["ざっし", "zasshi"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a new magazine.", id: "Saya membeli majalah baru." }, "雑誌", "新しい雑誌を買いました。",
    { en: "っし doubles the s-sound and is read \"sshi\", not \"shi\".", id: "っし menggandakan bunyi s dan dibaca \"sshi\", bukan \"shi\"." }],
  ["きっぷ", "kippu", { en: "ticket", id: "tiket" }, "でんしゃの きっぷを かいます。",
    [["でんしゃ", "Densha"], ["の", "no"], ["きっぷ", "kippu"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy a train ticket.", id: "Saya membeli tiket kereta." }, "切符", "電車の切符を買います。",
    { en: "っぷ doubles the p-sound and is read \"ppu\", not \"pu\".", id: "っぷ menggandakan bunyi p dan dibaca \"ppu\", bukan \"pu\"." }],
  ["みっつ", "mittsu", { en: "three (things)", id: "tiga (benda)" }, "りんごが みっつ あります。",
    [["りんご", "Ringo"], ["が", "ga"], ["みっつ", "mittsu"], ["あります", "arimasu"]],
    { en: "There are three apples.", id: "Ada tiga apel." }, "三つ", "りんごが三つあります。",
    { en: "っつ doubles the t-sound and is read \"ttsu\", not \"tsu\".", id: "っつ menggandakan bunyi t dan dibaca \"ttsu\", bukan \"tsu\"." }]
];
const HIRAGANA_CHOON_WORDS = [
  ["おかあさん", "okaasan", { en: "mother", id: "ibu" }, "わたしの おかあさんは やさしいです。",
    [["わたし", "Watashi"], ["の", "no"], ["おかあさん", "okaasan"], ["は", "wa"], ["やさしい", "yasashii"], ["です", "desu"]],
    { en: "My mother is kind.", id: "Ibu saya baik hati." }, "お母さん", "私のお母さんは優しいです。",
    { en: "The a-row lengthens by repeating the same vowel: あ + あ = \"aa\".", id: "Baris a dipanjangkan dengan mengulang vokal yang sama: あ + あ = \"aa\"." }],
  ["おにいさん", "oniisan", { en: "older brother", id: "kakak laki-laki" }, "おにいさんは がくせいです。",
    [["おにいさん", "Oniisan"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "My older brother is a student.", id: "Kakak laki-laki saya seorang murid." }, "お兄さん", "お兄さんは学生です。",
    { en: "The i-row lengthens by repeating the same vowel: い + い = \"ii\".", id: "Baris i dipanjangkan dengan mengulang vokal yang sama: い + い = \"ii\"." }],
  ["くうき", "kuuki", { en: "air", id: "udara" }, "このまちの くうきは きれいです。",
    [["この", "Kono"], ["まち", "machi"], ["の", "no"], ["くうき", "kuuki"], ["は", "wa"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "The air in this town is clean.", id: "Udara di kota ini bersih." }, "空気", "この町の空気はきれいです。",
    { en: "The u-row lengthens by repeating the same vowel: う + う = \"uu\".", id: "Baris u dipanjangkan dengan mengulang vokal yang sama: う + う = \"uu\"." }],
  ["せんせい", "sensei", { en: "teacher", id: "guru" }, "せんせいは にほんごを おしえます。",
    [["せんせい", "Sensei"], ["は", "wa"], ["にほんご", "nihongo"], ["を", "wo"], ["おしえます", "oshiemasu"]],
    { en: "The teacher teaches Japanese.", id: "Guru itu mengajar bahasa Jepang." }, "先生", "先生は日本語を教えます。",
    { en: "The e-row usually lengthens with い instead of え, read \"ei\" as in せんせい.", id: "Baris e biasanya dipanjangkan dengan い, bukan え lagi, dibaca \"ei\" seperti pada せんせい." }],
  ["とうきょう", "toukyou", { en: "Tokyo", id: "Tokyo" }, "わたしは とうきょうに いきます。",
    [["わたし", "Watashi"], ["は", "wa"], ["とうきょう", "Toukyou"], ["に", "ni"], ["いきます", "ikimasu"]],
    { en: "I'm going to Tokyo.", id: "Saya pergi ke Tokyo." }, "東京", "私は東京に行きます。",
    { en: "The o-row usually lengthens with う instead of お, read \"ou\" as in とうきょう.", id: "Baris o biasanya dipanjangkan dengan う, bukan お lagi, dibaca \"ou\" seperti pada とうきょう." }]
];
const HIRAGANA_HATSUON_WORDS = [
  ["さんぽ", "sanpo", { en: "walk / stroll", id: "jalan-jalan" }, "あさ さんぽを します。",
    [["あさ", "Asa"], ["さんぽ", "sanpo"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I take a walk in the morning.", id: "Saya jalan-jalan di pagi hari." }, "散歩", "朝散歩をします。",
    { en: "ん before p/b/m is pronounced like \"m\" — さんぽ sounds closer to \"sampo\".", id: "ん sebelum p/b/m dibaca seperti \"m\" — さんぽ terdengar seperti \"sampo\"." }],
  ["しんぶん", "shinbun", { en: "newspaper", id: "koran" }, "まいあさ しんぶんを よみます。",
    [["まいあさ", "Maiasa"], ["しんぶん", "shinbun"], ["を", "wo"], ["よみます", "yomimasu"]],
    { en: "I read the newspaper every morning.", id: "Saya membaca koran setiap pagi." }, "新聞", "毎朝新聞を読みます。",
    { en: "ん before b is also pronounced like \"m\" — しんぶん sounds closer to \"shimbun\".", id: "ん sebelum b juga dibaca seperti \"m\" — しんぶん terdengar seperti \"shimbun\"." }],
  ["かんたん", "kantan", { en: "easy / simple", id: "mudah" }, "このテストは かんたんです。",
    [["この", "Kono"], ["テスト", "tesuto"], ["は", "wa"], ["かんたん", "kantan"], ["です", "desu"]],
    { en: "This test is easy.", id: "Tes ini mudah." }, "簡単", "このテストは簡単です。",
    { en: "ん before n/t/d/s/z/r keeps a plain \"n\" sound, as in かんたん.", id: "ん sebelum n/t/d/s/z/r tetap dibaca \"n\" biasa, seperti pada かんたん." }],
  ["げんき", "genki", { en: "healthy / energetic", id: "sehat / bertenaga" }, "たなかさんは いつも げんきです。",
    [["たなかさん", "Tanaka-san"], ["は", "wa"], ["いつも", "itsumo"], ["げんき", "genki"], ["です", "desu"]],
    { en: "Mr./Ms. Tanaka is always energetic.", id: "Pak/Bu Tanaka selalu bertenaga." }, "元気", "田中さんはいつも元気です。",
    { en: "ん before k/g is pronounced like \"ng\" — げんき sounds closer to \"gengki\".", id: "ん sebelum k/g dibaca seperti \"ng\" — げんき terdengar seperti \"gengki\"." }],
  ["ほん", "hon", { en: "book", id: "buku" }, "これは わたしの ほんです。",
    [["これ", "Kore"], ["は", "wa"], ["わたし", "watashi"], ["の", "no"], ["ほん", "hon"], ["です", "desu"]],
    { en: "This is my book.", id: "Ini buku saya." }, "本", "これは私の本です。",
    { en: "At the end of a word (or before a vowel/y/w), ん stays a plain nasalized \"n\", as in ほん.", id: "Di akhir kata (atau sebelum vokal/y/w), ん tetap dibaca nasal \"n\" biasa, seperti pada ほん." }]
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
/* Sokuon (促音) in katakana — small ッ doubles the consonant that follows,
   same rule as hiragana っ. Very common in loanwords, so taught here through
   real everyday loanwords instead of a bare character grid. */
const KATAKANA_SOKUON_WORDS = [
  ["サッカー", "sakkaa", { en: "soccer", id: "sepak bola" }, "わたしは サッカーが すきです。",
    [["わたし", "Watashi"], ["は", "wa"], ["サッカー", "sakkaa"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like soccer.", id: "Saya suka sepak bola." }, "", "私はサッカーが好きです。",
    { en: "Small ッ before a consonant is a short held pause — double that consonant when reading it: ッカ here is read \"kka\".", id: "ッ kecil sebelum konsonan berarti jeda singkat — dibaca dengan menggandakan konsonan sesudahnya: ッカ di sini dibaca \"kka\"." }],
  ["クッキー", "kukkii", { en: "cookie", id: "kukis" }, "あまい クッキーを たべました。",
    [["あまい", "Amai"], ["クッキー", "kukkii"], ["を", "wo"], ["たべました", "tabemashita"]],
    { en: "I ate a sweet cookie.", id: "Saya makan kukis yang manis." }, "", "甘いクッキーを食べました。",
    { en: "ッキ doubles the k-sound and is read \"kki\", not \"ki\".", id: "ッキ menggandakan bunyi k dan dibaca \"kki\", bukan \"ki\"." }],
  ["ポケット", "poketto", { en: "pocket", id: "saku/kantong" }, "かぎは ポケットの なかに あります。",
    [["かぎ", "Kagi"], ["は", "wa"], ["ポケット", "poketto"], ["の", "no"], ["なか", "naka"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "The key is in the pocket.", id: "Kuncinya ada di dalam saku." }, "", "鍵はポケットの中にあります。",
    { en: "ット doubles the t-sound and is read \"tto\", not \"to\".", id: "ット menggandakan bunyi t dan dibaca \"tto\", bukan \"to\"." }],
  ["カップ", "kappu", { en: "cup", id: "cangkir" }, "コーヒーを カップに いれます。",
    [["コーヒー", "Koohii"], ["を", "wo"], ["カップ", "kappu"], ["に", "ni"], ["いれます", "iremasu"]],
    { en: "I pour coffee into the cup.", id: "Saya menuang kopi ke dalam cangkir." }, "", "コーヒーをカップに入れます。",
    { en: "ップ doubles the p-sound and is read \"ppu\", not \"pu\".", id: "ップ menggandakan bunyi p dan dibaca \"ppu\", bukan \"pu\"." }]
];
/* Chōonpu (長音符) — the dash ー marks a long vowel in katakana, unlike
   hiragana which doubles the vowel kana itself. Extremely common in
   loanwords, so taught here through real everyday loanwords. */
const KATAKANA_CHOONPU_WORDS = [
  ["コーヒー", "koohii", { en: "coffee", id: "kopi" }, "あさ コーヒーを のみます。",
    [["あさ", "Asa"], ["コーヒー", "koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee in the morning.", id: "Saya minum kopi di pagi hari." }, "", "朝コーヒーを飲みます。",
    { en: "ー after コ and ヒ extends the vowel sound — コーヒー is read \"koohii\", holding both long vowels.", id: "ー sesudah コ dan ヒ memanjangkan bunyi vokalnya — コーヒー dibaca \"koohii\", vokalnya ditahan lebih lama." }],
  ["ケーキ", "keeki", { en: "cake", id: "kue" }, "たんじょうびに ケーキを たべます。",
    [["たんじょうび", "Tanjoubi"], ["に", "ni"], ["ケーキ", "keeki"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat cake on my birthday.", id: "Saya makan kue di hari ulang tahun." }, "", "誕生日にケーキを食べます。",
    { en: "ー after ケ extends the e-sound — ケー is read \"kee\", not \"ke\".", id: "ー sesudah ケ memanjangkan bunyi e — ケー dibaca \"kee\", bukan \"ke\"." }],
  ["スーパー", "suupaa", { en: "supermarket", id: "supermarket" }, "スーパーで やさいを かいます。",
    [["スーパー", "Suupaa"], ["で", "de"], ["やさい", "yasai"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy vegetables at the supermarket.", id: "Saya membeli sayur di supermarket." }, "", "スーパーで野菜を買います。",
    { en: "ー appears twice here: ス→スー is \"suu\" and パ→パー is \"paa\".", id: "ー muncul dua kali di sini: ス→スー dibaca \"suu\" dan パ→パー dibaca \"paa\"." }],
  ["ノート", "nooto", { en: "notebook", id: "buku catatan" }, "ノートに なまえを かきます。",
    [["ノート", "Nooto"], ["に", "ni"], ["なまえ", "namae"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write my name in the notebook.", id: "Saya menulis nama saya di buku catatan." }, "", "ノートに名前を書きます。",
    { en: "ー after ノ extends the o-sound — ノー is read \"noo\", not \"no\".", id: "ー sesudah ノ memanjangkan bunyi o — ノー dibaca \"noo\", bukan \"no\"." }]
];
/* Hatsuon (撥音) in katakana — the nasal ン changes sound depending on what
   follows it, same rule as hiragana ん. Taught through common loanwords. */
const KATAKANA_HATSUON_WORDS = [
  ["サンプル", "sanpuru", { en: "sample", id: "sampel/contoh" }, "これは サンプルです。",
    [["これ", "Kore"], ["は", "wa"], ["サンプル", "sanpuru"], ["です", "desu"]],
    { en: "This is a sample.", id: "Ini adalah sampel." }, "", "",
    { en: "ン before p/b/m is pronounced like \"m\" — サンプル sounds closer to \"sampuru\".", id: "ン sebelum p/b/m dibaca seperti \"m\" — サンプル terdengar seperti \"sampuru\"." }],
  ["コンビニ", "konbini", { en: "convenience store", id: "convenience store" }, "コンビニで おにぎりを かいました。",
    [["コンビニ", "Konbini"], ["で", "de"], ["おにぎり", "onigiri"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a rice ball at the convenience store.", id: "Saya membeli onigiri di convenience store." }, "", "コンビニでおにぎりを買いました。",
    { en: "ン before b is also pronounced like \"m\" — コンビニ sounds closer to \"combini\".", id: "ン sebelum b juga dibaca seperti \"m\" — コンビニ terdengar seperti \"combini\"." }],
  ["アンテナ", "antena", { en: "antenna", id: "antena" }, "やねに アンテナが あります。",
    [["やね", "Yane"], ["に", "ni"], ["アンテナ", "antena"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is an antenna on the roof.", id: "Ada antena di atap." }, "", "屋根にアンテナがあります。",
    { en: "ン before n/t/d/s/z/r keeps a plain \"n\" sound, as in アンテナ.", id: "ン sebelum n/t/d/s/z/r tetap dibaca \"n\" biasa, seperti pada アンテナ." }],
  ["ハンカチ", "hankachi", { en: "handkerchief", id: "sapu tangan" }, "ハンカチで てを ふきます。",
    [["ハンカチ", "Hankachi"], ["で", "de"], ["て", "te"], ["を", "wo"], ["ふきます", "fukimasu"]],
    { en: "I wipe my hands with a handkerchief.", id: "Saya mengelap tangan dengan sapu tangan." }, "", "ハンカチで手を拭きます。",
    { en: "ン before k/g is pronounced like \"ng\" — ハンカチ has a soft nasal \"ng\" before the k.", id: "ン sebelum k/g dibaca seperti \"ng\" — ハンカチ punya bunyi nasal \"ng\" lembut sebelum k." }],
  ["パン", "pan", { en: "bread", id: "roti" }, "あさ パンを たべます。",
    [["あさ", "Asa"], ["パン", "pan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat bread in the morning.", id: "Saya makan roti di pagi hari." }, "", "朝パンを食べます。",
    { en: "At the end of a word (or before a vowel/y/w), ン stays a plain nasalized \"n\", as in パン.", id: "Di akhir kata (atau sebelum vokal/y/w), ン tetap dibaca nasal \"n\" biasa, seperti pada パン." }]
];
/* Tokushuon (特殊音) — extended katakana combinations invented to write
   foreign sounds the standard gojūon can't show on its own. This set covers
   the "W" group: ウ + small ィ/ェ/ォ for foreign wi/we/wo (distinct from the
   plain わ/を), taught through common loanwords. */
const KATAKANA_TOKUSHUON_W_WORDS = [
  ["ウィスキー", "wisukii", { en: "whiskey", id: "wiski" }, "ちちは ウィスキーが すきです。",
    [["ちち", "Chichi"], ["は", "wa"], ["ウィスキー", "wisukii"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "My father likes whiskey.", id: "Ayah saya suka wiski." }, "", "父はウィスキーが好きです。",
    { en: "ウィ combines ウ with a small ィ to write the foreign \"wi\" sound — something plain い alone can't show attached to a w-glide.", id: "ウィ menggabungkan ウ dengan ィ kecil untuk menulis bunyi asing \"wi\" — sesuatu yang tidak bisa ditunjukkan oleh い saja." }],
  ["ウェブ", "webu", { en: "web", id: "web" }, "この ウェブサイトは べんりです。",
    [["この", "Kono"], ["ウェブサイト", "webusaito"], ["は", "wa"], ["べんり", "benri"], ["です", "desu"]],
    { en: "This website is convenient.", id: "Situs web ini praktis." }, "", "このウェブサイトは便利です。",
    { en: "ウェ combines ウ with a small ェ to write the foreign \"we\" sound.", id: "ウェ menggabungkan ウ dengan ェ kecil untuk menulis bunyi asing \"we\"." }],
  ["ウォーキング", "wookingu", { en: "walking (exercise)", id: "jalan kaki (olahraga)" }, "まいあさ ウォーキングを します。",
    [["まいあさ", "Maiasa"], ["ウォーキング", "wookingu"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I go walking every morning.", id: "Saya jalan kaki setiap pagi." }, "", "毎朝ウォーキングをします。",
    { en: "ウォ combines ウ with a small ォ to write the foreign \"wo\" sound — different from the を particle.", id: "ウォ menggabungkan ウ dengan ォ kecil untuk menulis bunyi asing \"wo\" — berbeda dari partikel を." }]
];
/* Tokushuon (特殊音) — "F" group: フ + small ァ/ィ/ェ/ォ for foreign fa/fi/fe/fo
   sounds that the standard フ (fu) alone can't show. */
const KATAKANA_TOKUSHUON_F_WORDS = [
  ["ファミリー", "famirii", { en: "family", id: "keluarga" }, "これは わたしの ファミリーです。",
    [["これ", "Kore"], ["は", "wa"], ["わたし", "watashi"], ["の", "no"], ["ファミリー", "famirii"], ["です", "desu"]],
    { en: "This is my family.", id: "Ini keluarga saya." }, "", "これは私のファミリーです。",
    { en: "ファ combines フ with a small ァ to write the foreign \"fa\" sound.", id: "ファ menggabungkan フ dengan ァ kecil untuk menulis bunyi asing \"fa\"." }],
  ["フィルム", "firumu", { en: "film (camera)", id: "film (rol kamera)" }, "この カメラは フィルムを つかいます。",
    [["この", "Kono"], ["カメラ", "kamera"], ["は", "wa"], ["フィルム", "firumu"], ["を", "wo"], ["つかいます", "tsukaimasu"]],
    { en: "This camera uses film.", id: "Kamera ini menggunakan film (rol)." }, "", "このカメラはフィルムを使います。",
    { en: "フィ combines フ with a small ィ to write the foreign \"fi\" sound.", id: "フィ menggabungkan フ dengan ィ kecil untuk menulis bunyi asing \"fi\"." }],
  ["カフェ", "kafe", { en: "cafe", id: "kafe" }, "えきの まえに カフェが あります。",
    [["えき", "Eki"], ["の", "no"], ["まえ", "mae"], ["に", "ni"], ["カフェ", "kafe"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a cafe in front of the station.", id: "Ada kafe di depan stasiun." }, "", "駅の前にカフェがあります。",
    { en: "フェ combines フ with a small ェ to write the foreign \"fe\" sound.", id: "フェ menggabungkan フ dengan ェ kecil untuk menulis bunyi asing \"fe\"." }],
  ["フォーク", "fooku", { en: "fork", id: "garpu" }, "フォークで たべます。",
    [["フォーク", "Fooku"], ["で", "de"], ["たべます", "tabemasu"]],
    { en: "I eat with a fork.", id: "Saya makan dengan garpu." }, "", "フォークで食べます。",
    { en: "フォ combines フ with a small ォ to write the foreign \"fo\" sound.", id: "フォ menggabungkan フ dengan ォ kecil untuk menulis bunyi asing \"fo\"." }]
];
/* Tokushuon (特殊音) — "V" group: ウ+dakuten ヴ + small ァ/ィ/ェ/ォ (or ヴ alone
   for "vu") to write foreign v-sounds distinct from the b-row (バ/ビ/ブ/ベ/ボ). */
const KATAKANA_TOKUSHUON_V_WORDS = [
  ["ヴァイオリン", "vaiorin", { en: "violin", id: "biola" }, "あねは ヴァイオリンを ならいます。",
    [["あね", "Ane"], ["は", "wa"], ["ヴァイオリン", "vaiorin"], ["を", "wo"], ["ならいます", "naraimasu"]],
    { en: "My older sister is learning the violin.", id: "Kakak perempuan saya belajar biola." }, "", "姉はヴァイオリンを習います。",
    { en: "ヴァ combines ヴ (u + dakuten) with a small ァ to write the foreign \"va\" sound — distinct from バ (ba).", id: "ヴァ menggabungkan ヴ (u + dakuten) dengan ァ kecil untuk menulis bunyi asing \"va\" — berbeda dari バ (ba)." }],
  ["ヴィーナス", "viinasu", { en: "Venus", id: "Venus" }, "あの えは ヴィーナスの えです。",
    [["あの", "Ano"], ["え", "e"], ["は", "wa"], ["ヴィーナス", "viinasu"], ["の", "no"], ["え", "e"], ["です", "desu"]],
    { en: "That painting is of Venus.", id: "Lukisan itu adalah lukisan Venus." }, "", "あの絵はヴィーナスの絵です。",
    { en: "ヴィ combines ヴ with a small ィ to write the foreign \"vi\" sound — distinct from ビ (bi).", id: "ヴィ menggabungkan ヴ dengan ィ kecil untuk menulis bunyi asing \"vi\" — berbeda dari ビ (bi)." }],
  ["ヴェール", "veeru", { en: "veil", id: "kerudung/veil" }, "はなよめは ヴェールを つけています。",
    [["はなよめ", "Hanayome"], ["は", "wa"], ["ヴェール", "veeru"], ["を", "wo"], ["つけています", "tsuketeimasu"]],
    { en: "The bride is wearing a veil.", id: "Pengantin wanita mengenakan veil." }, "", "花嫁はヴェールをつけています。",
    { en: "ヴェ combines ヴ with a small ェ to write the foreign \"ve\" sound — distinct from ベ (be).", id: "ヴェ menggabungkan ヴ dengan ェ kecil untuk menulis bunyi asing \"ve\" — berbeda dari ベ (be)." }],
  ["ヴォーカル", "vookaru", { en: "vocal / singer", id: "vokalis" }, "かれは バンドの ヴォーカルです。",
    [["かれ", "Kare"], ["は", "wa"], ["バンド", "bando"], ["の", "no"], ["ヴォーカル", "vookaru"], ["です", "desu"]],
    { en: "He is the vocalist of the band.", id: "Dia adalah vokalis band tersebut." }, "", "彼はバンドのヴォーカルです。",
    { en: "ヴォ combines ヴ with a small ォ to write the foreign \"vo\" sound — distinct from ボ (bo).", id: "ヴォ menggabungkan ヴ dengan ォ kecil untuk menulis bunyi asing \"vo\" — berbeda dari ボ (bo)." }]
];
/* Tokushuon (特殊音) — "T & D" group: テ/デ + small ィ for foreign ti/di
   (distinct from ち/ji), and ト/ド + small ゥ for foreign tu/du (distinct
   from つ/zu). ドゥ is rarer than the other three, so its example word is
   less common in everyday speech. */
const KATAKANA_TOKUSHUON_TD_WORDS = [
  ["パーティー", "paatii", { en: "party", id: "pesta" }, "きんようびに パーティーが あります。",
    [["きんようび", "Kinyoubi"], ["に", "ni"], ["パーティー", "paatii"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There's a party on Friday.", id: "Ada pesta pada hari Jumat." }, "", "金曜日にパーティーがあります。",
    { en: "ティ combines テ with a small ィ to write the foreign \"ti\" sound — distinct from ち (chi).", id: "ティ menggabungkan テ dengan ィ kecil untuk menulis bunyi asing \"ti\" — berbeda dari ち (chi)." }],
  ["キャンディ", "kyandi", { en: "candy", id: "permen" }, "こどもは キャンディが すきです。",
    [["こども", "Kodomo"], ["は", "wa"], ["キャンディ", "kyandi"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "Children like candy.", id: "Anak-anak suka permen." }, "", "子供はキャンディが好きです。",
    { en: "ディ combines デ with a small ィ to write the foreign \"di\" sound — distinct from ぢ/じ (ji).", id: "ディ menggabungkan デ dengan ィ kecil untuk menulis bunyi asing \"di\" — berbeda dari ぢ/じ (ji)." }],
  ["タトゥー", "tatuu", { en: "tattoo", id: "tato" }, "かれは うでに タトゥーが あります。",
    [["かれ", "Kare"], ["は", "wa"], ["うで", "ude"], ["に", "ni"], ["タトゥー", "tatuu"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "He has a tattoo on his arm.", id: "Dia punya tato di lengannya." }, "", "彼は腕にタトゥーがあります。",
    { en: "トゥ combines ト with a small ゥ to write the foreign \"tu\" sound — distinct from つ (tsu).", id: "トゥ menggabungkan ト dengan ゥ kecil untuk menulis bunyi asing \"tu\" — berbeda dari つ (tsu)." }],
  ["ヒンドゥー", "hindu", { en: "Hindu", id: "Hindu" }, "インドには ヒンドゥーの じいんが たくさん あります。",
    [["インド", "Indo"], ["に", "ni"], ["は", "wa"], ["ヒンドゥー", "hindu"], ["の", "no"], ["じいん", "jiin"], ["が", "ga"], ["たくさん", "takusan"], ["あります", "arimasu"]],
    { en: "There are many Hindu temples in India.", id: "Di India ada banyak kuil Hindu." }, "", "インドにはヒンドゥーの寺院がたくさんあります。",
    { en: "ドゥ combines ド with a small ゥ to write the foreign \"du\" sound — rarer than the other three, but used in words like ヒンドゥー.", id: "ドゥ menggabungkan ド dengan ゥ kecil untuk menulis bunyi asing \"du\" — lebih jarang dari tiga lainnya, tapi dipakai di kata seperti ヒンドゥー." }]
];
/* Tokushuon (特殊音) — "Sh, Ch, J" group: シ/チ/ジ + small ェ for foreign
   she/che/je (distinct from せ/te/ze). */
const KATAKANA_TOKUSHUON_SHCHJ_WORDS = [
  ["シェフ", "shefu", { en: "chef", id: "koki" }, "あの レストランの シェフは ゆうめいです。",
    [["あの", "Ano"], ["レストラン", "resutoran"], ["の", "no"], ["シェフ", "shefu"], ["は", "wa"], ["ゆうめい", "yuumei"], ["です", "desu"]],
    { en: "The chef of that restaurant is famous.", id: "Koki di restoran itu terkenal." }, "", "あのレストランのシェフは有名です。",
    { en: "シェ combines シ with a small ェ to write the foreign \"she\" sound — distinct from せ (se).", id: "シェ menggabungkan シ dengan ェ kecil untuk menulis bunyi asing \"she\" — berbeda dari せ (se)." }],
  ["チェック", "chekku", { en: "check (verify)", id: "cek/memeriksa" }, "メールを チェックします。",
    [["メール", "Meeru"], ["を", "wo"], ["チェック", "chekku"], ["します", "shimasu"]],
    { en: "I check my email.", id: "Saya memeriksa email." }, "", "メールをチェックします。",
    { en: "チェ combines チ with a small ェ to write the foreign \"che\" sound — distinct from て (te).", id: "チェ menggabungkan チ dengan ェ kecil untuk menulis bunyi asing \"che\" — berbeda dari て (te)." }],
  ["ジェットコースター", "jettokoosutaa", { en: "roller coaster", id: "roller coaster" }, "ゆうえんちで ジェットコースターに のりました。",
    [["ゆうえんち", "Yuuenchi"], ["で", "de"], ["ジェットコースター", "jettokoosutaa"], ["に", "ni"], ["のりました", "norimashita"]],
    { en: "I rode the roller coaster at the amusement park.", id: "Saya naik roller coaster di taman hiburan." }, "", "遊園地でジェットコースターに乗りました。",
    { en: "ジェ combines ジ with a small ェ to write the foreign \"je\" sound — distinct from ぜ (ze).", id: "ジェ menggabungkan ジ dengan ェ kecil untuk menulis bunyi asing \"je\" — berbeda dari ぜ (ze)." }]
];
/* Tokushuon (特殊音) — "Ts" group: ツ + small ァ/ィ/ェ/ォ for foreign
   tsa/tsi/tse/tso (distinct from た/ち/せ/そ). ツィ and ツォ are rarer than
   ツァ and ツェ, showing up mostly in place names and loanwords. */
const KATAKANA_TOKUSHUON_TS_WORDS = [
  ["ピッツァ", "pittsua", { en: "pizza", id: "pizza" }, "こんばんは ピッツァを たべます。",
    [["こんばん", "Konban"], ["は", "wa"], ["ピッツァ", "pittsua"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I'll eat pizza tonight.", id: "Malam ini saya akan makan pizza." }, "", "今晩はピッツァを食べます。",
    { en: "ツァ combines ツ with a small ァ to write the foreign \"tsa\" sound — distinct from た (ta).", id: "ツァ menggabungkan ツ dengan ァ kecil untuk menulis bunyi asing \"tsa\" — berbeda dari た (ta)." }],
  ["ヴェネツィア", "venetsia", { en: "Venice", id: "Venesia" }, "らいねん ヴェネツィアへ いきます。",
    [["らいねん", "Rainen"], ["ヴェネツィア", "venetsia"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "Next year I'm going to Venice.", id: "Tahun depan saya akan pergi ke Venesia." }, "", "来年ヴェネツィアへ行きます。",
    { en: "ツィ combines ツ with a small ィ to write the foreign \"tsi\" sound — distinct from ち (chi).", id: "ツィ menggabungkan ツ dengan ィ kecil untuk menulis bunyi asing \"tsi\" — berbeda dari ち (chi)." }],
  ["ツェッペリン", "tsepperin", { en: "zeppelin (airship)", id: "zeppelin (pesawat udara)" }, "そらに ツェッペリンが みえます。",
    [["そら", "Sora"], ["に", "ni"], ["ツェッペリン", "tsepperin"], ["が", "ga"], ["みえます", "miemasu"]],
    { en: "I can see a zeppelin in the sky.", id: "Saya bisa melihat zeppelin di langit." }, "", "空にツェッペリンが見えます。",
    { en: "ツェ combines ツ with a small ェ to write the foreign \"tse\" sound — distinct from せ (se).", id: "ツェ menggabungkan ツ dengan ェ kecil untuk menulis bunyi asing \"tse\" — berbeda dari せ (se)." }],
  ["スケルツォ", "sukerutsuo", { en: "scherzo (music)", id: "skerzo (musik)" }, "この きょくは スケルツォです。",
    [["この", "Kono"], ["きょく", "kyoku"], ["は", "wa"], ["スケルツォ", "sukerutsuo"], ["です", "desu"]],
    { en: "This piece of music is a scherzo.", id: "Lagu ini adalah skerzo." }, "", "この曲はスケルツォです。",
    { en: "ツォ combines ツ with a small ォ to write the foreign \"tso\" sound — distinct from そ (so), rare but used in music terms like スケルツォ.", id: "ツォ menggabungkan ツ dengan ォ kecil untuk menulis bunyi asing \"tso\" — berbeda dari そ (so), jarang tapi dipakai di istilah musik seperti スケルツォ." }]
];
/* Tokushuon (特殊音) — "Other" group: a mixed set of rarer extended
   combinations from the official gairaigo table — イェ (ye), クァ/グァ
   (kwa/gwa), and デュ (dyu) — each distinct from its plain-kana neighbor
   (イエ/カ・ガ/ジュ). These are less common than the other Tokushuon groups,
   and some words are just as often spelled with the plain kana instead. */
const KATAKANA_TOKUSHUON_OTHER_WORDS = [
  ["イェルサレム", "yerusaremu", { en: "Jerusalem", id: "Yerusalem" }, "イェルサレムは ふるい まちです。",
    [["イェルサレム", "Yerusaremu"], ["は", "wa"], ["ふるい", "furui"], ["まち", "machi"], ["です", "desu"]],
    { en: "Jerusalem is an old city.", id: "Yerusalem adalah kota tua." }, "", "イェルサレムは古い町です。",
    { en: "イェ combines イ with a small ェ to write the foreign \"ye\" sound more precisely — though エルサレム (without イェ) is just as common.", id: "イェ menggabungkan イ dengan ェ kecil untuk menulis bunyi asing \"ye\" lebih tepat — meski エルサレム (tanpa イェ) juga sama umumnya." }],
  ["クァルテット", "kwarutetto", { en: "quartet", id: "kuartet" }, "あの バンドは クァルテットです。",
    [["あの", "Ano"], ["バンド", "bando"], ["は", "wa"], ["クァルテット", "kwarutetto"], ["です", "desu"]],
    { en: "That band is a quartet.", id: "Band itu adalah kuartet." }, "", "あのバンドはクァルテットです。",
    { en: "クァ combines ク with a small ァ to write the foreign \"kwa\" sound, keeping the w-glide that plain カ (ka) doesn't show.", id: "クァ menggabungkan ク dengan ァ kecil untuk menulis bunyi asing \"kwa\", mempertahankan bunyi w yang tidak ada di カ (ka) biasa." }],
  ["グァテマラ", "gwatemara", { en: "Guatemala", id: "Guatemala" }, "グァテマラに いきたいです。",
    [["グァテマラ", "Gwatemara"], ["に", "ni"], ["いきたい", "ikitai"], ["です", "desu"]],
    { en: "I want to go to Guatemala.", id: "Saya ingin pergi ke Guatemala." }, "", "グァテマラに行きたいです。",
    { en: "グァ combines グ with a small ァ to write the foreign \"gwa\" sound — distinct from ガ (ga).", id: "グァ menggabungkan グ dengan ァ kecil untuk menulis bunyi asing \"gwa\" — berbeda dari ガ (ga)." }],
  ["デュエット", "dyuetto", { en: "duet", id: "duet" }, "あねは デュエットを うたいます。",
    [["あね", "Ane"], ["は", "wa"], ["デュエット", "dyuetto"], ["を", "wo"], ["うたいます", "utaimasu"]],
    { en: "My older sister sings a duet.", id: "Kakak perempuan saya menyanyikan duet." }, "", "姉はデュエットを歌います。",
    { en: "デュ combines デ with a small ュ to write the foreign \"dyu\" sound — distinct from ジュ (ju).", id: "デュ menggabungkan デ dengan ュ kecil untuk menulis bunyi asing \"dyu\" — berbeda dari ジュ (ju)." }]
];

/* ---- Kanji N5 (char, reading-for-learning, meaning-for-quiz, kana-for-TTS) ----
   elemen ke-4 (kana) WAJIB diisi untuk kanji tunggal — TTS browser sering "menebak"
   cara baca sendiri kalau cuma dikasih 1 karakter kanji mentah (mis. 四 dibaca "shi"
   padahal yang diajarkan "yon", 七 dibaca "shichi" padahal "nana", 土 dibaca "do"
   padahal "tsuchi"). Dengan mengucapkan kana-nya langsung, audio selalu cocok teks.

   Kanji N5 dikelompokkan berdasarkan JLPT N5 Full Syllabus (100 Kanji), dipecah
   jadi 9 Chapter tematik — bukan lagi tier "Warrior→Immortal" acak. Pola ini
   (level JLPT -> beberapa Chapter tematik sebagai subtier) yang nanti dilanjutkan
   untuk N4, N3, N2, N1. */
const KANJI_N5_CH1 = [ // Chapter 1: Angka & Jumlah (14)
  ["一", "ichi", { en: "one (1)", id: "satu (1)" }, "いち"], ["二", "ni", { en: "two (2)", id: "dua (2)" }, "に"], ["三", "san", { en: "three (3)", id: "tiga (3)" }, "さん"], ["四", "yon", { en: "four (4)", id: "empat (4)" }, "よん"],
  ["五", "go", { en: "five (5)", id: "lima (5)" }, "ご"], ["六", "roku", { en: "six (6)", id: "enam (6)" }, "ろく"], ["七", "nana", { en: "seven (7)", id: "tujuh (7)" }, "なな"], ["八", "hachi", { en: "eight (8)", id: "delapan (8)" }, "はち"],
  ["九", "kyuu", { en: "nine (9)", id: "sembilan (9)" }, "きゅう"], ["十", "juu", { en: "ten (10)", id: "sepuluh (10)" }, "じゅう"], ["百", "hyaku", { en: "hundred (100)", id: "seratus (100)" }, "ひゃく"], ["千", "sen", { en: "thousand (1,000)", id: "seribu (1.000)" }, "せん"],
  ["万", "man", { en: "ten thousand (10,000)", id: "sepuluh ribu (10.000)" }, "まん"], ["円", "en", { en: "yen (currency)", id: "yen (mata uang)" }, "えん"]
];
const KANJI_N5_CH2 = [ // Chapter 2: Alam, Elemen & Cuaca (11)
  ["日", "hi / nichi", { en: "day / sun", id: "hari / matahari" }, "ひ"], ["月", "tsuki", { en: "moon / month", id: "bulan (langit) / bulan (kalender)" }, "つき"], ["木", "ki", { en: "tree / wood", id: "pohon / kayu" }, "き"], ["火", "hi / ka", { en: "fire", id: "api" }, "ひ"],
  ["水", "mizu", { en: "water", id: "air" }, "みず"], ["土", "tsuchi", { en: "earth / soil", id: "tanah" }, "つち"], ["金", "kin", { en: "gold / money", id: "emas / uang" }, "きん"], ["山", "yama", { en: "mountain", id: "gunung" }, "やま"],
  ["川", "kawa", { en: "river", id: "sungai" }, "かわ"], ["田", "ta", { en: "rice field", id: "sawah" }, "た"], ["天", "ten", { en: "heaven / sky", id: "langit / surga" }, "てん"]
];
const KANJI_N5_CH3 = [ // Chapter 3: Waktu & Musim (11)
  ["年", "toshi", { en: "year", id: "tahun" }, "とし"], ["時", "ji", { en: "time / o'clock", id: "waktu / jam" }, "じ"], ["分", "fun", { en: "minute / part", id: "menit / bagian" }, "ふん"], ["半", "han", { en: "half", id: "setengah" }, "はん"],
  ["午", "go", { en: "noon", id: "tengah hari" }, "ご"], ["前", "mae", { en: "before / front", id: "sebelum / depan" }, "まえ"], ["後", "ato", { en: "after / behind", id: "sesudah / belakang" }, "あと"], ["今", "ima", { en: "now", id: "sekarang" }, "いま"],
  ["朝", "asa", { en: "morning", id: "pagi" }, "あさ"], ["昼", "hiru", { en: "daytime / noon", id: "siang" }, "ひる"], ["夜", "yoru", { en: "night", id: "malam" }, "よる"]
];
const KANJI_N5_CH4 = [ // Chapter 4: Arah & Posisi (10)
  ["上", "ue", { en: "up / above", id: "atas" }, "うえ"], ["下", "shita", { en: "down / below", id: "bawah" }, "した"], ["左", "hidari", { en: "left", id: "kiri" }, "ひだり"], ["右", "migi", { en: "right", id: "kanan" }, "みぎ"],
  ["中", "naka", { en: "middle / inside", id: "tengah / dalam" }, "なか"], ["外", "soto", { en: "outside", id: "luar" }, "そと"], ["北", "kita", { en: "north", id: "utara" }, "きた"], ["南", "minami", { en: "south", id: "selatan" }, "みなみ"],
  ["東", "higashi", { en: "east", id: "timur" }, "ひがし"], ["西", "nishi", { en: "west", id: "barat" }, "にし"]
];
const KANJI_N5_CH5 = [ // Chapter 5: Manusia, Keluarga & Hubungan (12)
  ["人", "hito", { en: "person", id: "orang" }, "ひと"], ["男", "otoko", { en: "man", id: "laki-laki" }, "おとこ"], ["女", "onna", { en: "woman", id: "perempuan" }, "おんな"], ["子", "ko", { en: "child", id: "anak" }, "こ"],
  ["目", "me", { en: "eye", id: "mata" }, "め"], ["耳", "mimi", { en: "ear", id: "telinga" }, "みみ"], ["口", "kuchi", { en: "mouth", id: "mulut" }, "くち"], ["手", "te", { en: "hand", id: "tangan" }, "て"],
  ["足", "ashi", { en: "leg / foot", id: "kaki" }, "あし"], ["父", "chichi", { en: "father", id: "ayah" }, "ちち"], ["母", "haha", { en: "mother", id: "ibu" }, "はは"], ["友", "tomo", { en: "friend", id: "teman" }, "とも"]
];
const KANJI_N5_CH6 = [ // Chapter 6: Sifat, Ukuran & Warna (12)
  ["大", "ookii", { en: "big", id: "besar" }, "おおきい"], ["小", "chiisai", { en: "small", id: "kecil" }, "ちいさい"], ["高", "takai", { en: "tall / high / expensive", id: "tinggi / mahal" }, "たかい"], ["長", "nagai", { en: "long", id: "panjang" }, "ながい"],
  ["新", "atarashii", { en: "new", id: "baru" }, "あたらしい"], ["古", "furui", { en: "old (things)", id: "lama / kuno" }, "ふるい"], ["多", "ooi", { en: "many / much", id: "banyak" }, "おおい"], ["少", "sukunai", { en: "few / little", id: "sedikit" }, "すくない"],
  ["白", "shiroi", { en: "white", id: "putih" }, "しろい"], ["赤", "akai", { en: "red", id: "merah" }, "あかい"], ["青", "aoi", { en: "blue", id: "biru" }, "あおい"], ["気", "ki", { en: "spirit / feeling / air", id: "semangat / perasaan / udara" }, "き"]
];
const KANJI_N5_CH7 = [ // Chapter 7: Tempat, Bangunan & Transportasi (11)
  ["国", "kuni", { en: "country", id: "negara" }, "くに"], ["会", "kai", { en: "meeting / association", id: "pertemuan / perkumpulan" }, "かい"], ["社", "sha", { en: "company / shrine", id: "perusahaan / kuil" }, "しゃ"], ["校", "kou", { en: "school", id: "sekolah" }, "こう"],
  ["店", "mise", { en: "shop / store", id: "toko" }, "みせ"], ["駅", "eki", { en: "station", id: "stasiun" }, "えき"], ["電", "den", { en: "electricity", id: "listrik" }, "でん"], ["車", "kuruma", { en: "car / vehicle", id: "mobil / kendaraan" }, "くるま"],
  ["道", "michi", { en: "road / way", id: "jalan" }, "みち"], ["門", "mon", { en: "gate", id: "gerbang" }, "もん"], ["空", "sora", { en: "sky / empty", id: "langit / kosong" }, "そら"]
];
const KANJI_N5_CH8 = [ // Chapter 8: Kata Kerja Dasar & Aktivitas (10)
  ["行", "iku", { en: "go", id: "pergi" }, "いく"], ["来", "kuru", { en: "come", id: "datang" }, "くる"], ["出", "deru", { en: "go out / exit", id: "keluar" }, "でる"], ["入", "hairu", { en: "enter", id: "masuk" }, "はいる"],
  ["見", "ken", { en: "see", id: "lihat" }, "けん"], ["聞", "kiku", { en: "hear / listen", id: "mendengar" }, "きく"], ["食", "shoku", { en: "eat", id: "makan" }, "しょく"], ["飲", "in", { en: "drink", id: "minum" }, "いん"],
  ["書", "kaku", { en: "write", id: "menulis" }, "かく"], ["読", "yomu", { en: "read", id: "membaca" }, "よむ"]
];
const KANJI_N5_CH9 = [ // Chapter 9: Konsep Kehidupan & Kata Kerja Tambahan (9)
  ["買", "kau", { en: "buy", id: "membeli" }, "かう"], ["休", "yasumu", { en: "rest / holiday", id: "istirahat / libur" }, "やすむ"], ["立", "tatsu", { en: "stand", id: "berdiri" }, "たつ"], ["生", "sei", { en: "life / born", id: "hidup / lahir" }, "せい"],
  ["学", "gaku", { en: "study / learning", id: "belajar / ilmu" }, "がく"], ["花", "hana", { en: "flower", id: "bunga" }, "はな"], ["魚", "sakana", { en: "fish", id: "ikan" }, "さかな"], ["名", "na", { en: "name", id: "nama" }, "な"],
  ["何", "nani", { en: "what", id: "apa" }, "なに"]
];
const KANJI_N5_CHAPTERS = [KANJI_N5_CH1, KANJI_N5_CH2, KANJI_N5_CH3, KANJI_N5_CH4, KANJI_N5_CH5, KANJI_N5_CH6, KANJI_N5_CH7, KANJI_N5_CH8, KANJI_N5_CH9];
// reading lookup used only in Learn mode + as a quiz hint
const KANJI_READING = {};
KANJI_N5_CHAPTERS.forEach(ch => ch.forEach(([c, r]) => { KANJI_READING[c] = r; }));

/* ---- Basic Kotoba N5 (word-in-kana, romaji, meaning-for-quiz, contoh kalimat-in-kana,
   segments = contoh kalimat dipecah per-kata [kana, romaji], translation = arti kalimat) ----
   Sengaja ditulis full hiragana/katakana (tanpa kanji) supaya bisa langsung dibaca begitu
   Hiragana & Katakana sudah diTaklukkan — kanji-nya dipelajari terpisah di Chapter "Kanji N5".
   Kotoba N5 sekarang punya 7 Tier / 21 Sub-Tier (bukan lagi cuma tier1/2/3) — sama polanya
   dengan Kanji N5 (9 Chapter) & Bunpō N5 (15 Sub-Tier). */

// Sub-Tier 1.1: Kata Ganti Orang & Sapaan (4)
// Elemen ke-7 (opsional) = versi kanji dari kata, elemen ke-8 (opsional) = versi kanji dari
// contoh kalimat, elemen ke-9 (opsional) = catatan singkat "cara pakai" ({en,id}).
const KOTOBA_N5_CH1_1 = [
  ["わたし", "watashi", { en: "I / me", id: "saya / aku" }, "わたしは がくせいです。",
    [["わたし", "Watashi"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "I am a student.", id: "Saya adalah murid/siswa." }, "私", "私は学生です。",
    { en: "Neutral, common way to say 'I' — works in both formal and casual speech. Men sometimes use the more casual boku or ore instead.", id: "Kata ganti orang pertama yang netral & paling umum, dipakai formal maupun santai. Pria kadang pakai 僕(ぼく) atau 俺(おれ) yang lebih santai." }],
  ["あなた", "anata", { en: "you", id: "kamu" }, "あなたの なまえは なんですか。",
    [["あなた", "Anata"], ["の", "no"], ["なまえ", "namae"], ["は", "wa"], ["なん", "nan"], ["です", "desu"], ["か", "ka"]],
    { en: "What is your name?", id: "Siapa namamu?" }, "", "あなたの名前は何ですか。",
    { en: "Rarely used to address someone directly — it can sound distant. Japanese usually call people by name + -san instead.", id: "Jarang dipakai langsung ke lawan bicara karena terkesan berjarak. Orang Jepang lebih sering memanggil nama + さん." }],
  ["ひと", "hito", { en: "person", id: "orang" }, "あの ひとは だれですか。",
    [["あの", "Ano"], ["ひと", "hito"], ["は", "wa"], ["だれ", "dare"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person?", id: "Siapa orang itu?" }, "人", "あの人は誰ですか。",
    { en: "General, neutral word for 'person'. For a more polite tone, use かた (kata) below instead.", id: "Kata umum/netral untuk 'orang'. Untuk kesan lebih sopan, gunakan かた (kata) — lihat kosakata di bawah." }],
  ["せんせい", "sensei", { en: "teacher", id: "guru" }, "せんせいは とても やさしいです。",
    [["せんせい", "Sensei"], ["は", "wa"], ["とても", "totemo"], ["やさしい", "yasashii"], ["です", "desu"]],
    { en: "The teacher is very kind.", id: "Guru itu sangat baik." }, "先生", "先生はとても優しいです。",
    { en: "Used for teachers, doctors, or any respected expert — can also be used directly as a form of address, not just a job title.", id: "Dipakai untuk guru, dokter, atau siapa pun yang ahli/dihormati — juga bisa dipakai langsung sebagai sapaan, bukan cuma jabatan." }],
  ["かれ", "kare", { en: "he / him", id: "dia (laki-laki)" }, "かれは がくせいです。",
    [["かれ", "Kare"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "He is a student.", id: "Dia adalah murid/siswa." }, "彼", "彼は学生です。",
    { en: "Can mean 'he' or, casually, 'boyfriend' — context tells you which.", id: "Bisa berarti 'dia (laki-laki)' atau, secara santai, 'pacar (laki-laki)' — tergantung konteks kalimat." }],
  ["かのじょ", "kanojo", { en: "she / her", id: "dia (perempuan)" }, "かのじょは にほんじんです。",
    [["かのじょ", "Kanojo"], ["は", "wa"], ["にほんじん", "nihonjin"], ["です", "desu"]],
    { en: "She is Japanese.", id: "Dia orang Jepang." }, "彼女", "彼女は日本人です。",
    { en: "Like kare, this can mean 'she' or 'girlfriend' depending on context.", id: "Sama seperti かれ, bisa berarti 'dia (perempuan)' atau 'pacar (perempuan)' tergantung konteks." }],
  ["みなさん", "minasan", { en: "everyone", id: "semuanya / hadirin" }, "みなさん、おはようございます。",
    [["みなさん", "Minasan"], ["おはようございます", "ohayou gozaimasu"]],
    { en: "Good morning, everyone.", id: "Selamat pagi, semuanya." }, "皆さん", "皆さん、おはようございます。",
    { en: "Used to address a group of people at once, e.g. in front of a class or at a meeting.", id: "Dipakai untuk menyapa banyak orang sekaligus, mis. di depan kelas atau saat rapat." }],
  ["おはようございます", "ohayou gozaimasu", { en: "good morning", id: "selamat pagi" }, "せんせい、おはようございます。",
    [["せんせい", "Sensei"], ["おはようございます", "ohayou gozaimasu"]],
    { en: "Good morning, teacher.", id: "Selamat pagi, guru." }, "", "先生、おはようございます。",
    { en: "Polite form; with close friends or family you can just say 'ohayou' without 'gozaimasu'.", id: "Bentuk sopan/lengkap. Ke teman dekat atau keluarga cukup bilang 'おはよう' saja tanpa 'ございます'." }],
  ["こんにちは", "konnichiwa", { en: "hello / good afternoon", id: "halo / selamat siang" }, "たなかさん、こんにちは。",
    [["たなかさん", "Tanaka-san"], ["こんにちは", "konnichiwa"]],
    { en: "Hello, Mr./Ms. Tanaka.", id: "Halo, Tanaka-san." }, "", "田中さん、こんにちは。",
    { en: "Used during the daytime (roughly late morning to early evening) — not in the early morning or at night.", id: "Dipakai siang hari (kira-kira menjelang siang sampai sore). Tidak dipakai pagi-pagi sekali atau malam hari." }],
  ["こんばんは", "konbanwa", { en: "good evening", id: "selamat malam" }, "みなさん、こんばんは。",
    [["みなさん", "Minasan"], ["こんばんは", "konbanwa"]],
    { en: "Good evening, everyone.", id: "Selamat malam, semuanya." }, "", "皆さん、こんばんは。",
    { en: "An evening greeting — not for saying 'good night' when someone is about to sleep (that's oyasuminasai).", id: "Salam untuk sore/malam hari saat bertemu, bukan untuk 'selamat tidur' ketika seseorang akan tidur (itu pakai おやすみなさい)." }],
  ["さようなら", "sayounara", { en: "goodbye", id: "selamat tinggal / sampai jumpa" }, "せんせい、さようなら。",
    [["せんせい", "Sensei"], ["さようなら", "sayounara"]],
    { en: "Goodbye, teacher.", id: "Selamat tinggal, guru." }, "", "先生、さようなら。",
    { en: "Sounds fairly formal and final. For a casual goodbye to a friend, people more often say jaa ne or mata ne.", id: "Kesannya cukup formal/final. Untuk pisah santai ke teman, orang Jepang lebih sering pakai じゃあね atau またね." }],
  ["おやすみなさい", "oyasuminasai", { en: "good night", id: "selamat tidur" }, "おかあさん、おやすみなさい。",
    [["おかあさん", "Okaasan"], ["おやすみなさい", "oyasuminasai"]],
    { en: "Good night, mom.", id: "Selamat tidur, ibu." }, "", "お母さん、おやすみなさい。",
    { en: "Said right before going to sleep. The casual short form is just 'oyasumi'.", id: "Diucapkan tepat sebelum tidur. Bentuk santainya cukup 'おやすみ' saja." }],
  ["ありがとうございます", "arigatou gozaimasu", { en: "thank you", id: "terima kasih" }, "てつだって くれて、ありがとうございます。",
    [["てつだって", "Tetsudatte"], ["くれて", "kurete"], ["ありがとうございます", "arigatou gozaimasu"]],
    { en: "Thank you for helping me.", id: "Terima kasih sudah membantu saya." }, "", "手伝ってくれて、ありがとうございます。",
    { en: "Polite/formal form. The casual version among friends is just 'arigatou'.", id: "Bentuk sopan/formal. Ke teman dekat, bentuk santainya cukup 'ありがとう' saja." }],
  ["すみません", "sumimasen", { en: "excuse me / I'm sorry", id: "maaf / permisi" }, "すみません、いま なんじですか。",
    [["すみません", "Sumimasen"], ["いま", "ima"], ["なんじ", "nanji"], ["です", "desu"], ["か", "ka"]],
    { en: "Excuse me, what time is it now?", id: "Permisi, sekarang jam berapa?" }, "", "すみません、今何時ですか。",
    { en: "Very versatile — can mean 'sorry', 'excuse me' to get someone's attention, or even 'thank you' (implying you troubled them).", id: "Kata serbaguna: bisa berarti 'maaf', 'permisi' saat memanggil perhatian orang, atau bahkan 'terima kasih' (menyiratkan sudah merepotkan)." }],
  ["はじめまして", "hajimemashite", { en: "how do you do / nice to meet you", id: "salam kenal" }, "はじめまして、わたしは アリです。",
    [["はじめまして", "Hajimemashite"], ["わたし", "watashi"], ["は", "wa"], ["アリ", "Ari"], ["です", "desu"]],
    { en: "Nice to meet you, I am Ari.", id: "Salam kenal, saya Ari." }, "", "はじめまして、私はアリです。",
    { en: "Said only once, the very first time you meet someone — usually followed by your name and yoroshiku onegaishimasu.", id: "Diucapkan hanya sekali, saat pertama kali bertemu seseorang — biasanya diikuti nama & よろしくおねがいします." }],
  ["よろしくおねがいします", "yoroshiku onegaishimasu", { en: "please treat me well / nice to meet you", id: "mohon bantuannya / salam kenal" }, "どうぞ よろしく おねがいします。",
    [["どうぞ", "Douzo"], ["よろしく", "yoroshiku"], ["おねがいします", "onegaishimasu"]],
    { en: "Please treat me well.", id: "Mohon bantuannya." }, "", "どうぞよろしくお願いします。",
    { en: "An all-purpose phrase used when meeting someone, asking a favor, or closing a work arrangement — there's no exact one-word translation.", id: "Frasa serbaguna: dipakai saat berkenalan, minta tolong, atau menutup kesepakatan kerja sama — tidak ada padanan persis dalam bahasa Indonesia." }],
  ["わたしたち", "watashitachi", { en: "we / us", id: "kami / kita" }, "わたしたちは がくせいです。",
    [["わたしたち", "Watashitachi"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "We are students.", id: "Kami adalah murid/siswa." }, "私たち", "私たちは学生です。",
    { en: "Plural form of watashi, made by adding たち. A more casual male variant is bokutachi.", id: "Bentuk jamak dari わたし, dibuat dengan menambah たち. Versi santai untuk laki-laki: ぼくたち." }],
  ["かた", "kata", { en: "person (polite)", id: "orang (bentuk sopan dari hito)" }, "あの かたは どなたですか。",
    [["あの", "Ano"], ["かた", "kata"], ["は", "wa"], ["どなた", "donata"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person? (polite)", id: "Siapa orang itu? (sopan)" }, "方", "あの方はどなたですか。",
    { en: "The polite version of hito (person) — used to show respect toward the person being discussed.", id: "Versi sopan dari ひと (orang) — dipakai untuk menghormati orang yang sedang dibicarakan." }],
  ["さん", "-san", { en: "Mr. / Ms. / title of respect", id: "sapaan umum (Bpk/Ibu/Saudara)" }, "たなかさんは せんせいです。",
    [["たなかさん", "Tanaka-san"], ["は", "wa"], ["せんせい", "sensei"], ["です", "desu"]],
    { en: "Mr. Tanaka is a teacher.", id: "Pak Tanaka adalah guru." }, "", "田中さんは先生です。",
    { en: "A neutral, polite title attached after anyone's name — never attach it to your own name.", id: "Gelar sopan netral, ditempel setelah nama orang lain — jangan pernah dipakai untuk nama diri sendiri." }],
  ["くん", "-kun", { en: "suffix for boys / younger males", id: "sapaan untuk laki-laki (sebaya/lebih muda)" }, "たろうくんは がくせいです。",
    [["たろうくん", "Tarou-kun"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "Tarou is a student.", id: "Tarou adalah murid/siswa." }, "", "太郎くんは学生です。",
    { en: "Used for boys, peers, or male subordinates in casual settings — don't use it for someone senior to you.", id: "Dipakai untuk anak laki-laki, teman sebaya, atau bawahan laki-laki dalam suasana santai — jangan dipakai ke atasan." }],
  ["ちゃん", "-chan", { en: "affectionate suffix (children / women)", id: "sapaan akrab untuk anak-anak/wanita" }, "ゆきちゃんは かわいいです。",
    [["ゆきちゃん", "Yuki-chan"], ["は", "wa"], ["かわいい", "kawaii"], ["です", "desu"]],
    { en: "Yuki is cute.", id: "Yuki lucu/imut." }, "", "",
    { en: "An affectionate, 'cute' suffix — typically for small children, close female friends, or pets.", id: "Sapaan akrab/imut — biasanya untuk anak kecil, teman dekat perempuan, atau nama hewan peliharaan." }],
  ["じん", "-jin", { en: "nationality suffix (person from ~)", id: "akhiran kewarganegaraan" }, "わたしは インドネシアじんです。",
    [["わたし", "Watashi"], ["は", "wa"], ["インドネシアじん", "Indoneshiajin"], ["です", "desu"]],
    { en: "I am Indonesian.", id: "Saya orang Indonesia." }, "人", "私はインドネシア人です。",
    { en: "Attached right after a country name to state nationality, e.g. nihonjin (Japanese) or Indoneshiajin (Indonesian).", id: "Ditempel langsung setelah nama negara untuk menyebut kewarganegaraan, mis. にほんじん (orang Jepang), インドネシアじん (orang Indonesia)." }],
  ["ごめんなさい", "gomen nasai", { en: "I'm sorry", id: "maaf" }, "ごめんなさい、おそく なりました。",
    [["ごめんなさい", "Gomen nasai"], ["おそく", "osoku"], ["なりました", "narimashita"]],
    { en: "I'm sorry, I'm late.", id: "Maaf, saya terlambat." }, "", "ごめんなさい、遅くなりました。",
    { en: "More personal/casual than sumimasen — fits small mistakes with friends or family.", id: "Lebih personal/santai dibanding すみません — cocok untuk kesalahan kecil ke teman atau keluarga." }],
  ["いただきます", "itadakimasu", { en: "let's eat (said before a meal)", id: "selamat makan (sebelum makan)" }, "いただきます。",
    [["いただきます", "Itadakimasu"]],
    { en: "Let's eat. (said before a meal)", id: "Selamat makan. (diucapkan sebelum makan)" }, "", "",
    { en: "Said right before eating, as a small thanks to whoever prepared the food — even if it's just yourself.", id: "Diucapkan tepat sebelum mulai makan, sebagai ucapan terima kasih ke siapa pun yang menyiapkan makanan (bahkan diri sendiri)." }],
  ["ごちそうさまでした", "gochisousama deshita", { en: "thank you for the meal (said after eating)", id: "terima kasih atas makanannya (setelah makan)" }, "ごちそうさまでした。",
    [["ごちそうさまでした", "Gochisousama deshita"]],
    { en: "Thank you for the meal. (said after eating)", id: "Terima kasih atas makanannya. (setelah makan)" }, "", "",
    { en: "Said after finishing a meal. The casual short form is just 'gochisousama'.", id: "Diucapkan setelah selesai makan. Bentuk santainya cukup 'ごちそうさま' saja." }],
  ["いってきます", "itte kimasu", { en: "I'm off / see you later (leaving home)", id: "saya berangkat dulu" }, "いってきます！",
    [["いってきます", "Ittekimasu"]],
    { en: "I'm off! (leaving home)", id: "Saya berangkat dulu!" }, "", "行ってきます！",
    { en: "Said when leaving home or the office; the person staying behind replies with itterasshai.", id: "Diucapkan saat akan keluar rumah/kantor; dijawab dengan いってらっしゃい oleh orang yang tinggal." }],
  ["いってらっしゃい", "itterasshai", { en: "take care / see you later (to someone leaving)", id: "selamat jalan / hati-hati di jalan" }, "いってらっしゃい！",
    [["いってらっしゃい", "Itterasshai"]],
    { en: "Take care! (to someone leaving)", id: "Hati-hati di jalan!" }, "", "行ってらっしゃい！",
    { en: "The reply to ittekimasu — said to the person who is about to leave.", id: "Jawaban untuk いってきます — diucapkan ke orang yang akan pergi." }],
  ["ただいま", "tadaima", { en: "I'm home", id: "saya pulang / kembali" }, "ただいま！",
    [["ただいま", "Tadaima"]],
    { en: "I'm home!", id: "Saya pulang!" }, "", "",
    { en: "Said right when you arrive home; the person already there answers with okaerinasai.", id: "Diucapkan tepat saat baru sampai di rumah; dijawab dengan おかえりなさい oleh yang sudah ada di rumah." }],
  ["おかえりなさい", "okaerinasai", { en: "welcome home", id: "selamat datang kembali" }, "おかえりなさい！",
    [["おかえりなさい", "Okaerinasai"]],
    { en: "Welcome home!", id: "Selamat datang kembali!" }, "", "お帰りなさい！",
    { en: "The reply to tadaima — a warm welcome for someone who has just come home.", id: "Jawaban untuk ただいま — sambutan hangat untuk orang yang baru pulang." }]
];

// Sub-Tier 1.2: Keluarga & Hubungan (24)
const KOTOBA_N5_CH1_2 = [
  ["かぞく", "kazoku", { en: "family", id: "keluarga" }, "わたしの かぞくは よにんです。",
    [["わたし", "Watashi"], ["の", "no"], ["かぞく", "kazoku"], ["は", "wa"], ["よにん", "yonin"], ["です", "desu"]],
    { en: "My family has four people.", id: "Keluarga saya berjumlah empat orang." }, "家族", "私の家族は四人です。",
    { en: "General, neutral word for 'family' — used for your own family or families in general.", id: "Kata umum/netral untuk 'keluarga' — dipakai untuk keluarga sendiri maupun keluarga secara umum." }],
  ["ちち", "chichi", { en: "father (my own)", id: "ayah (sendiri)" }, "ちちは あさ はやく おきます。",
    [["ちち", "Chichi"], ["は", "wa"], ["あさ", "asa"], ["はやく", "hayaku"], ["おきます", "okimasu"]],
    { en: "My father wakes up early in the morning.", id: "Ayah saya bangun pagi-pagi sekali." }, "父", "父は朝早く起きます。",
    { en: "Humble form used only when talking about your own father to other people — never to call him directly, and never for someone else's father (use otousan for that).", id: "Bentuk merendah, dipakai hanya saat membicarakan ayah sendiri ke orang lain — tidak untuk memanggil beliau langsung, dan tidak untuk ayah orang lain (pakai おとうさん)." }],
  ["はは", "haha", { en: "mother (my own)", id: "ibu (sendiri)" }, "ははは りょうりが じょうずです。",
    [["はは", "Haha"], ["は", "wa"], ["りょうり", "ryouri"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "My mother is good at cooking.", id: "Ibu saya pandai memasak." }, "母", "母は料理が上手です。",
    { en: "Humble form used only when talking about your own mother to other people — never to call her directly, and never for someone else's mother (use okaasan for that).", id: "Bentuk merendah, dipakai hanya saat membicarakan ibu sendiri ke orang lain — tidak untuk memanggil beliau langsung, dan tidak untuk ibu orang lain (pakai おかあさん)." }],
  ["あに", "ani", { en: "older brother (my own)", id: "kakak laki-laki (sendiri)" }, "あには だいがくせいです。",
    [["あに", "Ani"], ["は", "wa"], ["だいがくせい", "daigakusei"], ["です", "desu"]],
    { en: "My older brother is a university student.", id: "Kakak laki-laki saya adalah mahasiswa." }, "兄", "兄は大学生です。",
    { en: "Humble form for your own older brother when talking to others; for someone else's older brother, use oniisan.", id: "Bentuk merendah untuk kakak laki-laki sendiri saat berbicara dengan orang lain; untuk kakak laki-laki orang lain, pakai おにいさん." }],
  ["あね", "ane", { en: "older sister (my own)", id: "kakak perempuan (sendiri)" }, "あねは びょういんで はたらいています。",
    [["あね", "Ane"], ["は", "wa"], ["びょういん", "byouin"], ["で", "de"], ["はたらいています", "hataraiteimasu"]],
    { en: "My older sister works at a hospital.", id: "Kakak perempuan saya bekerja di rumah sakit." }, "姉", "姉は病院で働いています。",
    { en: "Humble form for your own older sister when talking to others; for someone else's older sister, use oneesan.", id: "Bentuk merendah untuk kakak perempuan sendiri saat berbicara dengan orang lain; untuk kakak perempuan orang lain, pakai おねえさん." }],
  ["おとうと", "otouto", { en: "younger brother (my own)", id: "adik laki-laki (sendiri)" }, "おとうとは まだ こうこうせいです。",
    [["おとうと", "Otouto"], ["は", "wa"], ["まだ", "mada"], ["こうこうせい", "koukousei"], ["です", "desu"]],
    { en: "My younger brother is still a high school student.", id: "Adik laki-laki saya masih siswa SMA." }, "弟", "弟はまだ高校生です。",
    { en: "Plain form for your own younger brother — younger siblings aren't addressed with honorific titles the way older siblings are.", id: "Bentuk polos untuk adik laki-laki sendiri — adik tidak disapa dengan gelar hormat seperti kakak." }],
  ["いもうと", "imouto", { en: "younger sister (my own)", id: "adik perempuan (sendiri)" }, "いもうとは ピアノが じょうずです。",
    [["いもうと", "Imouto"], ["は", "wa"], ["ピアノ", "piano"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "My younger sister is good at piano.", id: "Adik perempuan saya pandai bermain piano." }, "妹", "妹はピアノが上手です。",
    { en: "Plain form for your own younger sister — used the same way as otouto for a younger brother.", id: "Bentuk polos untuk adik perempuan sendiri — dipakai sama seperti おとうと untuk adik laki-laki." }],
  ["かない", "kanai", { en: "wife (my own, formal)", id: "istri (sendiri)" }, "かないは りょうりが とくいです。",
    [["かない", "Kanai"], ["は", "wa"], ["りょうり", "ryouri"], ["が", "ga"], ["とくい", "tokui"], ["です", "desu"]],
    { en: "My wife is good at cooking.", id: "Istri saya pandai memasak." }, "家内", "家内は料理が得意です。",
    { en: "A somewhat old-fashioned, formal way a husband refers to his own wife, often in business or very polite settings.", id: "Cara agak lawas/formal seorang suami menyebut istrinya sendiri, sering dipakai dalam suasana bisnis atau sangat sopan." }],
  ["つま", "tsuma", { en: "wife (my own)", id: "istri (sendiri)" }, "つまと いっしょに かいものに いきます。",
    [["つま", "Tsuma"], ["と", "to"], ["いっしょに", "issho ni"], ["かいもの", "kaimono"], ["に", "ni"], ["いきます", "ikimasu"]],
    { en: "I go shopping together with my wife.", id: "Saya pergi belanja bersama istri saya." }, "妻", "妻と一緒に買い物に行きます。",
    { en: "The standard, neutral modern word for your own wife — more common today than kanai.", id: "Kata standar/netral modern untuk istri sendiri — lebih umum dipakai sekarang dibanding かない." }],
  ["おっと", "otto", { en: "husband (my own)", id: "suami (sendiri)" }, "おっとは かいしゃいんです。",
    [["おっと", "Otto"], ["は", "wa"], ["かいしゃいん", "kaishain"], ["です", "desu"]],
    { en: "My husband is a company employee.", id: "Suami saya adalah karyawan perusahaan." }, "夫", "夫は会社員です。",
    { en: "The standard, neutral modern word for your own husband — more common today than shujin.", id: "Kata standar/netral modern untuk suami sendiri — lebih umum dipakai sekarang dibanding しゅじん." }],
  ["しゅじん", "shujin", { en: "husband (my own, formal)", id: "suami (sendiri)" }, "しゅじんは まいあさ しちじに おきます。",
    [["しゅじん", "Shujin"], ["は", "wa"], ["まいあさ", "maiasa"], ["しちじ", "shichiji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "My husband wakes up at 7 every morning.", id: "Suami saya bangun jam 7 setiap pagi." }, "主人", "主人は毎朝七時に起きます。",
    { en: "A more traditional/formal word a wife uses for her own husband; it literally means 'master', which is why many now prefer otto.", id: "Kata yang lebih tradisional/formal, dipakai istri untuk suaminya sendiri; secara harfiah berarti 'tuan', sehingga banyak yang kini lebih suka pakai おっと." }],
  ["ごかぞく", "gokazoku", { en: "family (someone else's, polite)", id: "keluarga (orang lain, sopan)" }, "ごかぞくは なんにんですか。",
    [["ごかぞく", "Gokazoku"], ["は", "wa"], ["なんにん", "nannin"], ["です", "desu"], ["か", "ka"]],
    { en: "How many people are in your family?", id: "Keluarga Anda berjumlah berapa orang?" }, "ご家族", "ご家族は何人ですか。",
    { en: "The polite prefix go + kazoku, used when asking about or referring to someone else's family — never for your own.", id: "Awalan sopan ご + かぞく, dipakai saat menanyakan atau menyebut keluarga orang lain — tidak untuk keluarga sendiri." }],
  ["おとうさん", "otousan", { en: "father (someone else's / address form)", id: "ayah (orang lain/panggilan)" }, "たなかさんの おとうさんは せんせいです。",
    [["たなかさんの", "Tanaka-san no"], ["おとうさん", "otousan"], ["は", "wa"], ["せんせい", "sensei"], ["です", "desu"]],
    { en: "Mr. Tanaka's father is a teacher.", id: "Ayah Tanaka-san adalah seorang guru." }, "お父さん", "田中さんのお父さんは先生です。",
    { en: "Used to refer to someone else's father, and also to call or address your own father directly (e.g. at home).", id: "Dipakai untuk menyebut ayah orang lain, dan juga untuk memanggil/menyapa ayah sendiri secara langsung (mis. di rumah)." }],
  ["おかあさん", "okaasan", { en: "mother (someone else's / address form)", id: "ibu (orang lain/panggilan)" }, "おかあさん、これは なんですか。",
    [["おかあさん", "Okaasan"], ["これは", "kore wa"], ["なんですか", "nan desu ka"]],
    { en: "Mom, what is this?", id: "Ibu, ini apa?" }, "お母さん", "お母さん、これは何ですか。",
    { en: "Used to refer to someone else's mother, and also to call or address your own mother directly (e.g. at home).", id: "Dipakai untuk menyebut ibu orang lain, dan juga untuk memanggil/menyapa ibu sendiri secara langsung (mis. di rumah)." }],
  ["おにいさん", "oniisan", { en: "older brother (someone else's / address form)", id: "kakak laki-laki (orang lain/panggilan)" }, "おにいさんは サッカーが じょうずです。",
    [["おにいさん", "Oniisan"], ["は", "wa"], ["サッカー", "sakkaa"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "Your older brother is good at soccer.", id: "Kakak laki-laki Anda pandai bermain sepak bola." }, "お兄さん", "お兄さんはサッカーが上手です。",
    { en: "Used for someone else's older brother, and also to address your own older brother directly.", id: "Dipakai untuk kakak laki-laki orang lain, dan juga untuk menyapa kakak laki-laki sendiri secara langsung." }],
  ["おねえさん", "oneesan", { en: "older sister (someone else's / address form)", id: "kakak perempuan (orang lain/panggilan)" }, "おねえさんは やさしい ひとです。",
    [["おねえさん", "Oneesan"], ["は", "wa"], ["やさしい", "yasashii"], ["ひと", "hito"], ["です", "desu"]],
    { en: "Your older sister is a kind person.", id: "Kakak perempuan Anda orangnya baik." }, "お姉さん", "お姉さんは優しい人です。",
    { en: "Used for someone else's older sister, and also to address your own older sister directly.", id: "Dipakai untuk kakak perempuan orang lain, dan juga untuk menyapa kakak perempuan sendiri secara langsung." }],
  ["おとうとさん", "otoutosan", { en: "younger brother (someone else's, polite)", id: "adik laki-laki (orang lain)" }, "おとうとさんは いま だいがくせいですか。",
    [["おとうとさん", "Otoutosan"], ["は", "wa"], ["いま", "ima"], ["だいがくせい", "daigakusei"], ["です", "desu"], ["か", "ka"]],
    { en: "Is your younger brother a university student now?", id: "Apakah adik laki-laki Anda sekarang mahasiswa?" }, "弟さん", "弟さんは今大学生ですか。",
    { en: "Polite way to refer to someone else's younger brother — unlike older siblings, this is not used to address your own younger brother.", id: "Cara sopan menyebut adik laki-laki orang lain — berbeda dari kakak, ini tidak dipakai untuk menyapa adik laki-laki sendiri." }],
  ["いもうとさん", "imoutosan", { en: "younger sister (someone else's, polite)", id: "adik perempuan (orang lain)" }, "いもうとさんは なんさいですか。",
    [["いもうとさん", "Imoutosan"], ["は", "wa"], ["なんさい", "nansai"], ["です", "desu"], ["か", "ka"]],
    { en: "How old is your younger sister?", id: "Berapa umur adik perempuan Anda?" }, "妹さん", "妹さんは何歳ですか。",
    { en: "Polite way to refer to someone else's younger sister — not used to address your own younger sister.", id: "Cara sopan menyebut adik perempuan orang lain — tidak dipakai untuk menyapa adik perempuan sendiri." }],
  ["おくさん", "okusan", { en: "wife (someone else's, polite)", id: "istri (orang lain)" }, "おくさんは とても きれいです。",
    [["おくさん", "Okusan"], ["は", "wa"], ["とても", "totemo"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "Your wife is very pretty.", id: "Istri Anda sangat cantik." }, "奥さん", "奥さんはとてもきれいです。",
    { en: "Polite way to refer to someone else's wife — never used for your own wife.", id: "Cara sopan menyebut istri orang lain — tidak pernah dipakai untuk istri sendiri." }],
  ["ごしゅじん", "goshujin", { en: "husband (someone else's, polite)", id: "suami (orang lain)" }, "ごしゅじんの おしごとは なんですか。",
    [["ごしゅじんの", "Goshujin no"], ["おしごと", "oshigoto"], ["は", "wa"], ["なんですか", "nan desu ka"]],
    { en: "What is your husband's job?", id: "Apa pekerjaan suami Anda?" }, "ご主人", "ご主人のお仕事は何ですか。",
    { en: "Polite way to refer to someone else's husband — never used for your own husband.", id: "Cara sopan menyebut suami orang lain — tidak pernah dipakai untuk suami sendiri." }],
  ["ともだち", "tomodachi", { en: "friend", id: "teman" }, "ともだちと えいがを みます。",
    [["ともだち", "Tomodachi"], ["と", "to"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I watch a movie with a friend.", id: "Saya menonton film bersama teman." }, "友達", "友達と映画を見ます。",
    { en: "General, neutral word for 'friend', used for people of any age or gender.", id: "Kata umum/netral untuk 'teman', dipakai untuk siapa pun tanpa memandang usia atau gender." }],
  ["こども", "kodomo", { en: "child / children", id: "anak-anak / anak" }, "あの こどもは にわで あそんでいます。",
    [["あの", "Ano"], ["こども", "kodomo"], ["は", "wa"], ["にわ", "niwa"], ["で", "de"], ["あそんでいます", "asondeimasu"]],
    { en: "That child is playing in the yard.", id: "Anak itu sedang bermain di halaman." }, "子供", "あの子供は庭で遊んでいます。",
    { en: "Can refer to a specific child, children in general, or — depending on context — 'my child/children'.", id: "Bisa merujuk pada seorang anak tertentu, anak-anak secara umum, atau — tergantung konteks — 'anak saya'." }],
  ["きょうだい", "kyoudai", { en: "siblings", id: "saudara kandung" }, "きょうだいは さんにん います。",
    [["きょうだい", "Kyoudai"], ["は", "wa"], ["さんにん", "sannin"], ["います", "imasu"]],
    { en: "I have three siblings.", id: "Saya punya tiga saudara kandung." }, "兄弟", "兄弟は三人います。",
    { en: "Covers brothers and sisters together regardless of gender — used when talking about siblings as a group.", id: "Mencakup kakak/adik laki-laki maupun perempuan sekaligus — dipakai saat membicarakan saudara kandung secara umum." }],
  ["りょうしん", "ryoushin", { en: "parents", id: "orang tua" }, "りょうしんは いなかに すんでいます。",
    [["りょうしん", "Ryoushin"], ["は", "wa"], ["いなか", "inaka"], ["に", "ni"], ["すんでいます", "sundeimasu"]],
    { en: "My parents live in the countryside.", id: "Orang tua saya tinggal di desa/kampung halaman." }, "両親", "両親は田舎に住んでいます。",
    { en: "Neutral word for 'parents' (father and mother together), typically used for your own parents.", id: "Kata netral untuk 'orang tua' (ayah dan ibu sekaligus), biasanya dipakai untuk orang tua sendiri." }]
];

// Sub-Tier 1.3: Profesi & Peran (3)
const KOTOBA_N5_CH1_3 = [
  ["がくせい", "gakusei", { en: "student", id: "siswa / mahasiswa" }, "がくせいは まいにち がっこうへ いきます。",
    [["がくせい", "Gakusei"], ["は", "wa"], ["まいにち", "mainichi"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "The student goes to school every day.", id: "Siswa itu pergi ke sekolah setiap hari." }, "学生", "",
    { en: "General word for a student at any level (school or university). For a foreign student specifically, use ryuugakusei below.", id: "Kata umum untuk pelajar di jenjang apa pun (sekolah maupun kuliah). Untuk pelajar asing secara spesifik, gunakan りゅうがくせい di bawah." }],
  ["せんせい", "sensei", { en: "teacher / professor / doctor (respectful title)", id: "guru / dosen / dokter (sapaan hormat)" }, "せんせいは とても しんせつです。",
    [["せんせい", "Sensei"], ["は", "wa"], ["とても", "totemo"], ["しんせつです", "shinsetsu desu"]],
    { en: "The teacher is very kind.", id: "Guru itu sangat baik hati." }, "先生", "",
    { en: "A respectful title used for teachers, doctors, and other experts — never use it for your own job. For 'teacher' as a plain occupation, use kyoushi instead.", id: "Gelar hormat untuk guru, dokter, dan ahli lain — jangan pakai untuk menyebut pekerjaan diri sendiri. Untuk 'guru' sebagai profesi biasa, gunakan きょうし." }],
  ["きょうし", "kyoushi", { en: "teacher, instructor (as an occupation)", id: "guru / pengajar (sebagai profesi)" }, "あには きょうしです。",
    [["あに", "Ani"], ["は", "wa"], ["きょうしです", "kyoushi desu"]],
    { en: "My older brother is a teacher (by profession).", id: "Kakak laki-laki saya berprofesi sebagai guru." }, "教師", "",
    { en: "Used to state teaching as a job (e.g. self-introduction), unlike sensei which is a respectful title used to address or refer to someone.", id: "Dipakai untuk menyebut profesi mengajar (mis. saat memperkenalkan diri), berbeda dengan せんせい yang merupakan sapaan hormat kepada orang lain." }],
  ["かいしゃいん", "kaishain", { en: "company employee", id: "pegawai perusahaan / karyawan" }, "ちちは かいしゃいんです。",
    [["ちち", "Chichi"], ["は", "wa"], ["かいしゃいんです", "kaishain desu"]],
    { en: "My father is a company employee.", id: "Ayah saya adalah karyawan perusahaan." }, "会社員", "",
    { en: "The default, general word for a white-collar office worker — a very common self-introduction answer to 'what's your job?'", id: "Kata umum/default untuk pekerja kantoran — jawaban yang sangat umum saat memperkenalkan pekerjaan diri sendiri." }],
  ["しゃいん", "shain", { en: "employee (of a company)", id: "karyawan (perusahaan tertentu)" }, "かれは この かいしゃの しゃいんです。",
    [["かれ", "Kare"], ["は", "wa"], ["この", "kono"], ["かいしゃ", "kaisha"], ["の", "no"], ["しゃいんです", "shain desu"]],
    { en: "He is an employee of this company.", id: "Dia adalah karyawan perusahaan ini." }, "社員", "",
    { en: "Emphasizes belonging to a specific company (usually said with 'this/that company's shain'), while kaishain is the general job label.", id: "Menekankan keanggotaan pada perusahaan tertentu (biasanya diucapkan sebagai 'shain-nya perusahaan ini/itu'), sedangkan かいしゃいん adalah label pekerjaan yang lebih umum." }],
  ["ぎんこういん", "ginkouin", { en: "bank employee", id: "pegawai bank" }, "あねは ぎんこういんです。",
    [["あね", "Ane"], ["は", "wa"], ["ぎんこういんです", "ginkouin desu"]],
    { en: "My older sister is a bank employee.", id: "Kakak perempuan saya adalah pegawai bank." }, "銀行員", "",
    { en: "Follows the same pattern as kaishain: workplace (ginkou = bank) + in (member/staff) = someone who works there.", id: "Mengikuti pola yang sama seperti かいしゃいん: tempat kerja (ぎんこう = bank) + いん (anggota/staf) = orang yang bekerja di sana." }],
  ["いしゃ", "isha", { en: "doctor", id: "dokter" }, "あには いしゃです。",
    [["あに", "Ani"], ["は", "wa"], ["いしゃです", "isha desu"]],
    { en: "My older brother is a doctor.", id: "Kakak laki-laki saya adalah dokter." }, "医者", "",
    { en: "Used to state 'doctor' as an occupation. When speaking to or about a specific doctor respectfully, isha-sensei or just sensei is more common.", id: "Dipakai untuk menyebut 'dokter' sebagai profesi. Saat berbicara kepada/tentang seorang dokter secara hormat, lebih umum memakai isha-sensei atau cukup せんせい." }],
  ["けんきゅうしゃ", "kenkyuusha", { en: "researcher", id: "peneliti" }, "かのじょは だいがくの けんきゅうしゃです。",
    [["かのじょ", "Kanojo"], ["は", "wa"], ["だいがく", "daigaku"], ["の", "no"], ["けんきゅうしゃです", "kenkyuusha desu"]],
    { en: "She is a researcher at the university.", id: "Dia adalah peneliti di universitas." }, "研究者", "",
    { en: "Formed from kenkyuu (research) + -sha (person), a common suffix pattern for occupations — compare enjinia and bengoshi.", id: "Terbentuk dari けんきゅう (riset) + しゃ (orang), pola akhiran umum untuk nama profesi — bandingkan dengan エンジニア dan べんごし." }],
  ["エンジニア", "enjinia", { en: "engineer", id: "insinyur / engineer" }, "あには エンジニアです。",
    [["あに", "Ani"], ["は", "wa"], ["エンジニアです", "enjinia desu"]],
    { en: "My older brother is an engineer.", id: "Kakak laki-laki saya adalah seorang insinyur." }, "", "",
    { en: "A loanword from English, so it's written in katakana rather than kanji.", id: "Kata serapan dari bahasa Inggris, karena itu ditulis dengan katakana, bukan kanji." }],
  ["こうむいん", "koumuin", { en: "civil servant", id: "pegawai negeri sipil (PNS)" }, "ちちは こうむいんです。",
    [["ちち", "Chichi"], ["は", "wa"], ["こうむいんです", "koumuin desu"]],
    { en: "My father is a civil servant.", id: "Ayah saya adalah pegawai negeri sipil." }, "公務員", "",
    { en: "Covers government workers in general (local or national), not just office clerks — includes many public-sector jobs.", id: "Mencakup pekerja pemerintahan secara umum (daerah maupun nasional), bukan hanya staf administrasi — meliputi banyak jenis pekerjaan sektor publik." }],
  ["てんいん", "tenin", { en: "store clerk, shop employee", id: "pegawai / kasir toko" }, "てんいんに みちを ききました。",
    [["てんいん", "Tenin"], ["に", "ni"], ["みち", "michi"], ["を", "wo"], ["ききました", "kikimashita"]],
    { en: "I asked the store clerk for directions.", id: "Saya bertanya arah jalan kepada pegawai toko." }, "店員", "",
    { en: "Used to refer to a shop staff member you're interacting with, e.g. at a convenience store or restaurant.", id: "Dipakai untuk menyebut staf toko yang sedang berinteraksi dengan kita, mis. di minimarket atau restoran." }],
  ["りゅうがくせい", "ryuugakusei", { en: "international student", id: "pelajar / mahasiswa asing" }, "かのじょは にほんの りゅうがくせいです。",
    [["かのじょ", "Kanojo"], ["は", "wa"], ["にほん", "nihon"], ["の", "no"], ["りゅうがくせいです", "ryuugakusei desu"]],
    { en: "She is an international student in Japan.", id: "Dia adalah mahasiswa asing di Jepang." }, "留学生", "",
    { en: "Specifically means a student studying abroad — a more specific version of the general gakusei.", id: "Secara spesifik berarti pelajar yang belajar di luar negeri — bentuk lebih spesifik dari がくせい yang umum." }],
  ["おとな", "otona", { en: "adult", id: "orang dewasa" }, "おとなに なったら、なにを したいですか。",
    [["おとな", "Otona"], ["に", "ni"], ["なったら", "nattara"], ["なに", "nani"], ["を", "wo"], ["したい", "shitai"], ["ですか", "desu ka"]],
    { en: "What do you want to do when you become an adult?", id: "Kalau sudah menjadi orang dewasa, kamu ingin melakukan apa?" }, "大人", "",
    { en: "An age-category word (adult vs. child), not an occupation — the opposite of kodomo below.", id: "Kata kategori usia (dewasa vs. anak), bukan profesi — lawan kata dari こども di bawah." }],
  ["こども", "kodomo", { en: "child, children", id: "anak-anak" }, "こどもたちが こうえんで あそんでいます。",
    [["こどもたち", "Kodomo-tachi"], ["が", "ga"], ["こうえん", "kouen"], ["で", "de"], ["あそんでいます", "asondeimasu"]],
    { en: "The children are playing in the park.", id: "Anak-anak sedang bermain di taman." }, "子供", "",
    { en: "Add -tachi (kodomo-tachi) to explicitly mark plural, e.g. 'the children', as seen in the example sentence.", id: "Tambahkan -tachi (kodomotachi) untuk menandai bentuk jamak secara eksplisit, mis. 'anak-anak', seperti pada contoh kalimat." }],
  ["おとこのひと", "otoko no hito", { en: "man (adult male)", id: "laki-laki dewasa" }, "あの おとこのひとは だれですか。",
    [["あの", "Ano"], ["おとこのひと", "otoko no hito"], ["は", "wa"], ["だれですか", "dare desu ka"]],
    { en: "Who is that man?", id: "Siapa laki-laki itu?" }, "男の人", "",
    { en: "Literally 'male person' — a neutral, descriptive way to refer to a man whose name you don't know.", id: "Secara harfiah berarti 'orang laki-laki' — cara netral & deskriptif untuk menyebut laki-laki yang belum diketahui namanya." }],
  ["おんなのひと", "onna no hito", { en: "woman (adult female)", id: "perempuan dewasa" }, "あの おんなのひとは わたしの ははです。",
    [["あの", "Ano"], ["おんなのひと", "onna no hito"], ["は", "wa"], ["わたし", "watashi"], ["の", "no"], ["はは", "haha"], ["です", "desu"]],
    { en: "That woman is my mother.", id: "Perempuan itu adalah ibu saya." }, "女の人", "",
    { en: "Literally 'female person' — the counterpart to otoko no hito, used the same neutral, descriptive way.", id: "Secara harfiah berarti 'orang perempuan' — pasangan dari おとこのひと, dipakai dengan cara yang sama-sama netral & deskriptif." }],
  ["おとこのこ", "otoko no ko", { en: "boy", id: "anak laki-laki" }, "あの おとこのこは わたしの おとうとです。",
    [["あの", "Ano"], ["おとこのこ", "otoko no ko"], ["は", "wa"], ["わたし", "watashi"], ["の", "no"], ["おとうと", "otouto"], ["です", "desu"]],
    { en: "That boy is my younger brother.", id: "Anak laki-laki itu adalah adik laki-laki saya." }, "男の子", "",
    { en: "Swap hito (person/adult) for ko (child) to get the child version: otoko no hito → otoko no ko.", id: "Ganti hito (orang/dewasa) dengan ko (anak) untuk mendapat versi anak-anaknya: otoko no hito → otoko no ko." }],
  ["おんなのこ", "onna no ko", { en: "girl", id: "anak perempuan" }, "おんなのこが うたを うたっています。",
    [["おんなのこ", "Onna no ko"], ["が", "ga"], ["うた", "uta"], ["を", "wo"], ["うたっています", "utatteimasu"]],
    { en: "The girl is singing a song.", id: "Anak perempuan itu sedang menyanyikan lagu." }, "女の子", "",
    { en: "The child counterpart of onna no hito, following the same otoko/onna + hito/ko pattern.", id: "Versi anak-anak dari おんなのひと, mengikuti pola yang sama: otoko/onna + hito/ko." }],
  ["べんごし", "bengoshi", { en: "lawyer", id: "pengacara" }, "あねは べんごしです。",
    [["あね", "Ane"], ["は", "wa"], ["べんごしです", "bengoshi desu"]],
    { en: "My older sister is a lawyer.", id: "Kakak perempuan saya adalah seorang pengacara." }, "弁護士", "",
    { en: "Like isha and kyoushi, this can be stated on its own as a profession without needing a title like sensei.", id: "Seperti いしゃ dan きょうし, kata ini bisa langsung dipakai sebagai profesi tanpa perlu gelar seperti せんせい." }],
  ["かんごし", "kangoshi", { en: "nurse", id: "perawat" }, "びょういんに かんごしが たくさん います。",
    [["びょういん", "Byouin"], ["に", "ni"], ["かんごし", "kangoshi"], ["が", "ga"], ["たくさん", "takusan"], ["います", "imasu"]],
    { en: "There are many nurses in the hospital.", id: "Ada banyak perawat di rumah sakit." }, "看護師", "",
    { en: "Gender-neutral term for 'nurse' in modern Japanese, replacing the older kangofu (which specifically meant a female nurse).", id: "Istilah netral gender untuk 'perawat' dalam bahasa Jepang modern, menggantikan istilah lama kangofu (yang secara khusus berarti perawat perempuan)." }],
  ["かた", "kata", { en: "person (polite)", id: "orang (bentuk sopan)" }, "あの かたは だれですか。",
    [["あの", "Ano"], ["かた", "kata"], ["は", "wa"], ["だれですか", "dare desu ka"]],
    { en: "Who is that person?", id: "Siapa orang itu? (bentuk sopan)" }, "方", "",
    { en: "The polite/formal version of hito — use kata instead of hito when speaking respectfully, e.g. about a customer or elder.", id: "Versi sopan/formal dari hito — gunakan kata alih-alih hito saat berbicara dengan hormat, mis. tentang pelanggan atau orang yang lebih tua." }]
];

// Sub-Tier 2.1: Waktu Harian & Keterangan Waktu (5)
const KOTOBA_N5_CH2_1 = [
  ["いま", "ima", { en: "now", id: "sekarang" }, "いま なんじですか。",
    [["いま", "Ima"], ["なんじ", "nanji"], ["です", "desu"], ["か", "ka"]],
    { en: "What time is it now?", id: "Sekarang jam berapa?" }, "今"],
  ["きょう", "kyou", { en: "today", id: "hari ini" }, "きょうは とても あついです。",
    [["きょう", "Kyou"], ["は", "wa"], ["とても", "totemo"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "Today is very hot.", id: "Hari ini sangat panas." }, "今日"],
  ["あした", "ashita", { en: "tomorrow", id: "besok" }, "あした がっこうへ いきます。",
    [["あした", "Ashita"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I will go to school tomorrow.", id: "Besok saya akan pergi ke sekolah." }, "明日"],
  ["あさ", "asa", { en: "morning", id: "pagi" }, "あさ ろくじに おきます。",
    [["あさ", "Asa"], ["ろくじ", "rokuji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I wake up at six in the morning.", id: "Saya bangun jam enam pagi." }, "朝"],
  ["ばん", "ban", { en: "evening, night", id: "malam" }, "ばん じゅうじに ねます。",
    [["ばん", "Ban"], ["じゅうじ", "juuji"], ["に", "ni"], ["ねます", "nemasu"]],
    { en: "I sleep at 10 in the evening.", id: "Saya tidur jam 10 malam." }, "晩"]
];

// Sub-Tier 2.2: Hari, Bulan, & Jam (3)
const KOTOBA_N5_CH2_2 = [
  ["げつようび", "getsuyoubi", { en: "Monday", id: "hari Senin" }, "げつようびに がっこうへ いきます。",
    [["げつようび", "Getsuyoubi"], ["に", "ni"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school on Monday.", id: "Saya pergi ke sekolah hari Senin." }, "月曜日"],
  ["いちじかん", "ichijikan", { en: "one hour", id: "satu jam" }, "まいにち いちじかん べんきょうします。",
    [["まいにち", "Mainichi"], ["いちじかん", "ichijikan"], ["べんきょうします", "benkyoushimasu"]],
    { en: "I study for one hour every day.", id: "Saya belajar selama satu jam setiap hari." }, "一時間"],
  ["まいあさ", "maiasa", { en: "every morning", id: "setiap pagi" }, "まいあさ コーヒーを のみます。",
    [["まいあさ", "Maiasa"], ["コーヒー", "koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee every morning.", id: "Saya minum kopi setiap pagi." }, "毎朝"]
];

// Sub-Tier 2.3: Bilangan & Satuan Penghitung (4)
const KOTOBA_N5_CH2_3 = [
  ["ひとつ", "hitotsu", { en: "one (thing)", id: "satu (buah/benda)" }, "りんごを ひとつ ください。",
    [["りんご", "Ringo"], ["を", "wo"], ["ひとつ", "hitotsu"], ["ください", "kudasai"]],
    { en: "Please give me one apple.", id: "Tolong beri saya satu apel." }, "一つ"],
  ["ひとり", "hitori", { en: "one person / alone", id: "satu orang / sendirian" }, "きょうしつに ひとり います。",
    [["きょうしつ", "Kyoushitsu"], ["に", "ni"], ["ひとり", "hitori"], ["います", "imasu"]],
    { en: "There is one person in the classroom.", id: "Ada satu orang di dalam kelas." }, "一人"],
  ["ほん", "hon (counter)", { en: "counter for long, thin objects", id: "kata bantu bilangan untuk benda panjang/silinder" }, "ペンが にほん あります。",
    [["ペン", "Pen"], ["が", "ga"], ["にほん", "nihon"], ["あります", "arimasu"]],
    { en: "There are two pens.", id: "Ada dua pena." }, "本"],
  ["まい", "mai", { en: "counter for flat, thin objects", id: "kata bantu bilangan untuk benda tipis/datar" }, "かみが さんまい あります。",
    [["かみ", "Kami"], ["が", "ga"], ["さんまい", "sanmai"], ["あります", "arimasu"]],
    { en: "There are three sheets of paper.", id: "Ada tiga lembar kertas." }, "枚"]
];

// Sub-Tier 2.4: Frekuensi & Durasi (4)
const KOTOBA_N5_CH2_4 = [
  ["いつも", "itsumo", { en: "always", id: "selalu" }, "わたしは いつも コーヒーを のみます。",
    [["わたし", "Watashi"], ["は", "wa"], ["いつも", "itsumo"], ["コーヒー", "koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I always drink coffee.", id: "Saya selalu minum kopi." }, ""],
  ["ときどき", "tokidoki", { en: "sometimes", id: "kadang-kadang" }, "ときどき えいがを みます。",
    [["ときどき", "Tokidoki"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "Sometimes I watch a movie.", id: "Kadang-kadang saya menonton film." }, "時々"],
  ["たいてい", "taitei", { en: "usually, mostly", id: "biasanya, kebanyakan" }, "たいてい しちじに おきます。",
    [["たいてい", "Taitei"], ["しちじ", "shichiji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I usually wake up at 7.", id: "Biasanya saya bangun jam 7." }, ""],
  ["ぜんぜん", "zenzen", { en: "not at all (used with a negative)", id: "sama sekali tidak (dipakai dengan bentuk negatif)" }, "にほんごが ぜんぜん わかりません。",
    [["にほんご", "Nihongo"], ["が", "ga"], ["ぜんぜん", "zenzen"], ["わかりません", "wakarimasen"]],
    { en: "I don't understand Japanese at all.", id: "Saya sama sekali tidak mengerti bahasa Jepang." }, ""]
];

// Sub-Tier 3.1: Makanan & Minuman (5)
const KOTOBA_N5_CH3_1 = [
  ["ごはん", "gohan", { en: "cooked rice, meal", id: "nasi, makanan" }, "あさ ごはんを たべます。",
    [["あさ", "Asa"], ["ごはん", "gohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat breakfast.", id: "Saya makan makan siang/pagi." }, "ご飯"],
  ["みず", "mizu", { en: "water", id: "air" }, "みずを いっぱい のみます。",
    [["みず", "Mizu"], ["を", "wo"], ["いっぱい", "ippai"], ["のみます", "nomimasu"]],
    { en: "I drink a lot of water.", id: "Saya minum banyak air." }, "水"],
  ["おちゃ", "ocha", { en: "green tea", id: "teh" }, "あつい おちゃを どうぞ。",
    [["あつい", "Atsui"], ["おちゃ", "ocha"], ["を", "wo"], ["どうぞ", "douzo"]],
    { en: "Here is hot tea.", id: "Silakan, teh panasnya." }, "お茶"],
  ["さかな", "sakana", { en: "fish", id: "ikan" }, "さかなを たべます。",
    [["さかな", "Sakana"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat fish.", id: "Saya makan ikan." }, "魚"],
  ["にく", "niku", { en: "meat", id: "daging" }, "とり にくを かいます。",
    [["とり", "Tori"], ["にく", "niku"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy chicken meat.", id: "Saya membeli daging ayam." }, "肉"]
];

// Sub-Tier 3.2: Benda-benda Pribadi & Rumah (5)
const KOTOBA_N5_CH3_2 = [
  ["ほん", "hon", { en: "book", id: "buku" }, "この ほんは とても おもしろいです。",
    [["この", "Kono"], ["ほん", "hon"], ["は", "wa"], ["とても", "totemo"], ["おもしろい", "omoshiroi"], ["です", "desu"]],
    { en: "This book is very interesting.", id: "Buku ini sangat menarik." }, "本"],
  ["かばん", "kaban", { en: "bag", id: "tas" }, "あたらしい かばんを かいたいです。",
    [["あたらしい", "Atarashii"], ["かばん", "kaban"], ["を", "wo"], ["かいたい", "kaitai"], ["です", "desu"]],
    { en: "I want to buy a new bag.", id: "Saya ingin membeli tas baru." }, "鞄"],
  ["とけい", "tokei", { en: "clock, watch", id: "jam, arloji" }, "この とけいは たかいです。",
    [["この", "Kono"], ["とけい", "tokei"], ["は", "wa"], ["たかい", "takai"], ["です", "desu"]],
    { en: "This watch is expensive.", id: "Jam tangan ini mahal." }, "時計"],
  ["いえ", "ie", { en: "house", id: "rumah" }, "あの いえは とても おおきいです。",
    [["あの", "Ano"], ["いえ", "ie"], ["は", "wa"], ["とても", "totemo"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "That house is very big.", id: "Rumah itu sangat besar." }, "家"],
  ["いす", "isu", { en: "chair", id: "kursi" }, "いすに すわって ください。",
    [["いす", "Isu"], ["に", "ni"], ["すわって", "suwatte"], ["ください", "kudasai"]],
    { en: "Please sit on the chair.", id: "Tolong duduk di kursi." }, "椅子"]
];

// Sub-Tier 3.3: Pakaian & Aksesori (4)
const KOTOBA_N5_CH3_3 = [
  ["ふく", "fuku", { en: "clothes", id: "pakaian, baju" }, "あたらしい ふくを かいました。",
    [["あたらしい", "Atarashii"], ["ふく", "fuku"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought new clothes.", id: "Saya membeli baju baru." }, "服"],
  ["くつ", "kutsu", { en: "shoes", id: "sepatu" }, "くろい くつを はいています。",
    [["くろい", "Kuroi"], ["くつ", "kutsu"], ["を", "wo"], ["はいています", "haiteimasu"]],
    { en: "I am wearing black shoes.", id: "Saya memakai sepatu hitam." }, "靴"],
  ["かさ", "kasa", { en: "umbrella", id: "payung" }, "あめが ふっているから かさを さします。",
    [["あめ", "Ame"], ["が", "ga"], ["ふっているから", "futteirukara"], ["かさ", "kasa"], ["を", "wo"], ["さします", "sashimasu"]],
    { en: "I open an umbrella because it is raining.", id: "Saya memakai payung karena sedang hujan." }, "傘"],
  ["シャツ", "shatsu", { en: "shirt", id: "kemeja" }, "あたらしい シャツを かいました。",
    [["あたらしい", "Atarashii"], ["シャツ", "shatsu"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a new shirt.", id: "Saya membeli kemeja baru." }, ""]
];

// Sub-Tier 4.1: Lokasi & Fasilitas Publik (4)
const KOTOBA_N5_CH4_1 = [
  ["がっこう", "gakkou", { en: "school", id: "sekolah" }, "がっこうは とても おおきいです。",
    [["がっこう", "Gakkou"], ["は", "wa"], ["とても", "totemo"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "The school is very big.", id: "Sekolahnya sangat besar." }, "学校"],
  ["えき", "eki", { en: "station", id: "stasiun" }, "えきまで あるいて いきます。",
    [["えき", "Eki"], ["まで", "made"], ["あるいて", "aruite"], ["いきます", "ikimasu"]],
    { en: "I walk to the station.", id: "Saya berjalan kaki ke stasiun." }, "駅"],
  ["みせ", "mise", { en: "shop, store", id: "toko" }, "あの みせは ちいさいです。",
    [["あの", "Ano"], ["みせ", "mise"], ["は", "wa"], ["ちいさい", "chiisai"], ["です", "desu"]],
    { en: "That shop is small.", id: "Toko itu kecil." }, "店"],
  ["としょかん", "toshokan", { en: "library", id: "perpustakaan" }, "としょかんで ほんを よみます。",
    [["としょかん", "Toshokan"], ["で", "de"], ["ほん", "hon"], ["を", "wo"], ["よみます", "yomimasu"]],
    { en: "I read books at the library.", id: "Saya membaca buku di perpustakaan." }, "図書館"]
];

// Sub-Tier 4.2: Arah & Posisi (5)
const KOTOBA_N5_CH4_2 = [
  ["うえ", "ue", { en: "up, on, top", id: "atas" }, "つくえの うえに ほんが あります。",
    [["つくえ", "Tsukue"], ["の", "no"], ["うえ", "ue"], ["に", "ni"], ["ほん", "hon"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a book on the desk.", id: "Ada buku di atas meja." }, "上"],
  ["した", "shita", { en: "under, below", id: "bawah" }, "いすの したに ねこが います。",
    [["いす", "Isu"], ["の", "no"], ["した", "shita"], ["に", "ni"], ["ねこ", "neko"], ["が", "ga"], ["います", "imasu"]],
    { en: "There is a cat under the chair.", id: "Ada kucing di bawah kursi." }, "下"],
  ["なか", "naka", { en: "inside", id: "dalam" }, "かばんの なかに さいふが あります。",
    [["かばん", "Kaban"], ["の", "no"], ["なか", "naka"], ["に", "ni"], ["さいふ", "saifu"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a wallet inside the bag.", id: "Ada dompet di dalam tas." }, "中"],
  ["みぎ", "migi", { en: "right side", id: "kanan" }, "みぎに まがってください。",
    [["みぎ", "Migi"], ["に", "ni"], ["まがってください", "magatte kudasai"]],
    { en: "Please turn right.", id: "Tolong belok kanan." }, "右"],
  ["ひだり", "hidari", { en: "left side", id: "kiri" }, "ひだりに ほんやが あります。",
    [["ひだり", "Hidari"], ["に", "ni"], ["ほんや", "hon'ya"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a bookstore on the left.", id: "Ada toko buku di sebelah kiri." }, "左"]
];

// Sub-Tier 4.3: Transportasi & Fitur Kota (4)
const KOTOBA_N5_CH4_3 = [
  ["でんしゃ", "densha", { en: "train", id: "kereta api" }, "でんしゃで いきます。",
    [["でんしゃ", "Densha"], ["で", "de"], ["いきます", "ikimasu"]],
    { en: "I go by train.", id: "Saya pergi menggunakan kereta." }, "電車"],
  ["くるま", "kuruma", { en: "car", id: "mobil" }, "くるまで がっこうへ いきます。",
    [["くるま", "Kuruma"], ["で", "de"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school by car.", id: "Saya pergi ke sekolah naik mobil." }, "車"],
  ["バス", "basu", { en: "bus", id: "bus" }, "バスで がっこうへ いきます。",
    [["バス", "Basu"], ["で", "de"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school by bus.", id: "Saya pergi ke sekolah naik bus." }, ""],
  ["みち", "michi", { en: "road, street", id: "jalan" }, "この みちは とても せまいです。",
    [["この", "Kono"], ["みち", "michi"], ["は", "wa"], ["とても", "totemo"], ["せまい", "semai"], ["です", "desu"]],
    { en: "This road is very narrow.", id: "Jalan ini sangat sempit." }, "道"]
];

// Sub-Tier 5.1: Aktivitas Dasar Harian (5)
const KOTOBA_N5_CH5_1 = [
  ["たべる", "taberu", { en: "eat", id: "makan" }, "あさごはんを たべます。",
    [["あさごはん", "Asagohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat breakfast.", id: "Saya makan sarapan." }, "食べる"],
  ["のむ", "nomu", { en: "drink", id: "minum" }, "コーヒーを のみます。",
    [["コーヒー", "Koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee.", id: "Saya minum kopi." }, "飲む"],
  ["みる", "miru", { en: "see / watch", id: "lihat / menonton" }, "えいがを みるのが すきです。",
    [["えいが", "Eiga"], ["を", "wo"], ["みる", "miru"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like watching movies.", id: "Saya suka menonton film." }, "見る"],
  ["きく", "kiku", { en: "listen / hear", id: "dengar" }, "おんがくを きくのが すきです。",
    [["おんがく", "Ongaku"], ["を", "wo"], ["きく", "kiku"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like listening to music.", id: "Saya suka mendengarkan musik." }, "聞く"],
  ["ねます", "nemasu", { en: "sleep (polite)", id: "tidur (sopan)" }, "まいばん じゅういちじに ねます。",
    [["まいばん", "Maiban"], ["じゅういちじ", "juuichiji"], ["に", "ni"], ["ねます", "nemasu"]],
    { en: "I sleep at eleven every night.", id: "Saya tidur jam sebelas setiap malam." }, "寝ます"]
];

// Sub-Tier 5.2: Perpindahan & Mobilisasi (4)
const KOTOBA_N5_CH5_2 = [
  ["いく", "iku", { en: "go", id: "pergi" }, "がっこうへ いきます。",
    [["がっこう", "Gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school.", id: "Saya pergi ke sekolah." }, "行く"],
  ["くる", "kuru", { en: "come", id: "datang" }, "ともだちが うちへ きます。",
    [["ともだち", "Tomodachi"], ["が", "ga"], ["うち", "uchi"], ["へ", "e"], ["きます", "kimasu"]],
    { en: "A friend is coming to my house.", id: "Teman datang ke rumah." }, "来る"],
  ["かえる", "kaeru", { en: "go home", id: "pulang" }, "はやく いえへ かえります。",
    [["はやく", "Hayaku"], ["いえ", "ie"], ["へ", "e"], ["かえります", "kaerimasu"]],
    { en: "I go home early.", id: "Saya pulang ke rumah lebih awal." }, "帰る"],
  ["あるく", "aruku", { en: "walk", id: "berjalan kaki" }, "まいあさ こうえんを あるきます。",
    [["まいあさ", "Maiasa"], ["こうえん", "kouen"], ["を", "wo"], ["あるきます", "arukimasu"]],
    { en: "I walk in the park every morning.", id: "Saya berjalan kaki di taman setiap pagi." }, "歩く"]
];

// Sub-Tier 5.3: Interaksi, Transaksi, & Kerja (4)
const KOTOBA_N5_CH5_3 = [
  ["はなす", "hanasu", { en: "speak", id: "bicara" }, "にほんごで はなします。",
    [["にほんご", "Nihongo"], ["で", "de"], ["はなします", "hanashimasu"]],
    { en: "I speak in Japanese.", id: "Saya berbicara dalam bahasa Jepang." }, "話す"],
  ["かく", "kaku", { en: "write", id: "tulis" }, "てがみを かきます。",
    [["てがみ", "Tegami"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write a letter.", id: "Saya menulis surat." }, "書く"],
  ["かう", "kau", { en: "buy", id: "beli" }, "あたらしい くつを かいます。",
    [["あたらしい", "Atarashii"], ["くつ", "kutsu"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy new shoes.", id: "Saya membeli sepatu baru." }, "買う"],
  ["はたらく", "hataraku", { en: "work", id: "bekerja" }, "ちちは ぎんこうで はたらいて います。",
    [["ちち", "Chichi"], ["は", "wa"], ["ぎんこう", "ginkou"], ["で", "de"], ["はたらいて", "hataraite"], ["います", "imasu"]],
    { en: "My father works at a bank.", id: "Ayah saya bekerja di bank." }, "働く"]
];

// Sub-Tier 6.1: Kata Sifat-i Deskriptif (4)
const KOTOBA_N5_CH6_1 = [
  ["おおきい", "ookii", { en: "big", id: "besar" }, "この いえは おおきいです。",
    [["この", "Kono"], ["いえ", "ie"], ["は", "wa"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "This house is big.", id: "Rumah ini besar." }, "大きい"],
  ["ちいさい", "chiisai", { en: "small", id: "kecil" }, "あの いぬは ちいさいです。",
    [["あの", "Ano"], ["いぬ", "inu"], ["は", "wa"], ["ちいさい", "chiisai"], ["です", "desu"]],
    { en: "That dog is small.", id: "Anjing itu kecil." }, "小さい"],
  ["たかい", "takai", { en: "tall / expensive", id: "tinggi / mahal" }, "この かばんは たかいです。",
    [["この", "Kono"], ["かばん", "kaban"], ["は", "wa"], ["たかい", "takai"], ["です", "desu"]],
    { en: "This bag is expensive.", id: "Tas ini mahal." }, "高い"],
  ["やすい", "yasui", { en: "cheap", id: "murah" }, "やおやの やさいは やすいです。",
    [["やおや", "Yaoya"], ["の", "no"], ["やさい", "yasai"], ["は", "wa"], ["やすい", "yasui"], ["です", "desu"]],
    { en: "The vegetables at the greengrocer are cheap.", id: "Sayuran di toko sayur itu murah." }, "安い"]
];

// Sub-Tier 6.2: Kata Sifat-i Cuaca & Sensori (4)
const KOTOBA_N5_CH6_2 = [
  ["あつい", "atsui", { en: "hot (weather/thing)", id: "panas" }, "きょうは とても あついです。",
    [["きょう", "Kyou"], ["は", "wa"], ["とても", "totemo"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "Today is very hot.", id: "Hari ini sangat panas." }, "暑い"],
  ["さむい", "samui", { en: "cold (weather)", id: "dingin (cuaca)" }, "きょうは さむいです。",
    [["きょう", "Kyou"], ["は", "wa"], ["さむい", "samui"], ["です", "desu"]],
    { en: "Today is cold.", id: "Hari ini dingin." }, "寒い"],
  ["おいしい", "oishii", { en: "delicious", id: "enak" }, "この りょうりは とても おいしいです。",
    [["この", "Kono"], ["りょうり", "ryouri"], ["は", "wa"], ["とても", "totemo"], ["おいしい", "oishii"], ["です", "desu"]],
    { en: "This dish is very delicious.", id: "Masakan ini sangat enak." }, "美味しい"],
  ["いたい", "itai", { en: "painful, hurts", id: "sakit (nyeri)" }, "おなかが いたいです。",
    [["おなか", "Onaka"], ["が", "ga"], ["いたい", "itai"], ["です", "desu"]],
    { en: "My stomach hurts.", id: "Perut saya sakit." }, "痛い"]
];

// Sub-Tier 6.3: Kata Sifat-na & Status (5)
const KOTOBA_N5_CH6_3 = [
  ["すき", "suki (na)", { en: "like", id: "suka" }, "わたしは すしが すきです。",
    [["わたし", "Watashi"], ["は", "wa"], ["すし", "sushi"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like sushi.", id: "Saya suka sushi." }, "好き"],
  ["きらい", "kirai", { en: "dislike, hated", id: "benci, tidak suka" }, "わたしは やさいが きらいです。",
    [["わたし", "Watashi"], ["は", "wa"], ["やさい", "yasai"], ["が", "ga"], ["きらい", "kirai"], ["です", "desu"]],
    { en: "I dislike vegetables.", id: "Saya tidak suka sayuran." }, "嫌い"],
  ["じょうず", "jouzu", { en: "skillful, good at", id: "pandai, jago" }, "かれは にほんごが じょうずです。",
    [["かれ", "Kare"], ["は", "wa"], ["にほんご", "nihongo"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "He is good at Japanese.", id: "Dia pandai bahasa Jepang." }, "上手"],
  ["きれい", "kirei (na)", { en: "pretty / clean", id: "cantik / bersih" }, "この はなは きれいです。",
    [["この", "Kono"], ["はな", "hana"], ["は", "wa"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "This flower is pretty.", id: "Bunga ini cantik." }, "綺麗"],
  ["げんき", "genki", { en: "healthy, energetic", id: "sehat, bersemangat" }, "そふは とても げんきです。",
    [["そふ", "Sofu"], ["は", "wa"], ["とても", "totemo"], ["げんき", "genki"], ["です", "desu"]],
    { en: "My grandfather is very healthy.", id: "Kakek saya sangat sehat." }, "元気"]
];

// Sub-Tier 7.1: Alam & Cuaca (5)
const KOTOBA_N5_CH7_1 = [
  ["てんき", "tenki", { en: "weather", id: "cuaca" }, "きょうの てんきは いいです。",
    [["きょう", "Kyou"], ["の", "no"], ["てんき", "tenki"], ["は", "wa"], ["いい", "ii"], ["です", "desu"]],
    { en: "Today's weather is nice.", id: "Cuaca hari ini bagus." }, "天気"],
  ["あめ", "ame", { en: "rain", id: "hujan" }, "きょうは あめが ふっています。",
    [["きょう", "Kyou"], ["は", "wa"], ["あめ", "ame"], ["が", "ga"], ["ふっています", "futteimasu"]],
    { en: "It is raining today.", id: "Hari ini sedang hujan." }, "雨"],
  ["やま", "yama", { en: "mountain", id: "gunung" }, "ふじさんに のぼりたいです。",
    [["ふじさん", "Fujisan"], ["に", "ni"], ["のぼりたい", "noboritai"], ["です", "desu"]],
    { en: "I want to climb Mt. Fuji.", id: "Saya ingin mendaki Gunung Fuji." }, "山"],
  ["かわ", "kawa", { en: "river", id: "sungai" }, "かわで さかなを つりました。",
    [["かわ", "Kawa"], ["で", "de"], ["さかな", "sakana"], ["を", "wo"], ["つりました", "tsurimashita"]],
    { en: "I caught fish in the river.", id: "Saya memancing ikan di sungai." }, "川"],
  ["そら", "sora", { en: "sky", id: "langit" }, "そらが とても きれいです。",
    [["そら", "Sora"], ["が", "ga"], ["とても", "totemo"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "The sky is very beautiful.", id: "Langitnya sangat indah." }, "空"]
];

// Sub-Tier 7.2: Warna (4)
const KOTOBA_N5_CH7_2 = [
  ["あか", "aka", { en: "red", id: "merah" }, "あかい かばんを かいました。",
    [["あかい", "Akai"], ["かばん", "kaban"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a red bag.", id: "Saya membeli tas merah." }, "赤"],
  ["あお", "ao", { en: "blue", id: "biru" }, "そらが あおいです。",
    [["そら", "Sora"], ["が", "ga"], ["あおい", "aoi"], ["です", "desu"]],
    { en: "The sky is blue.", id: "Langit berwarna biru." }, "青"],
  ["しろ", "shiro", { en: "white", id: "putih" }, "しろい シャツを きています。",
    [["しろい", "Shiroi"], ["シャツ", "shatsu"], ["を", "wo"], ["きています", "kiteimasu"]],
    { en: "I am wearing a white shirt.", id: "Saya memakai kemeja putih." }, "白"],
  ["くろ", "kuro", { en: "black", id: "hitam" }, "くろい ねこが います。",
    [["くろい", "Kuroi"], ["ねこ", "neko"], ["が", "ga"], ["います", "imasu"]],
    { en: "There is a black cat.", id: "Ada kucing hitam." }, "黒"]
];

// Sub-Tier 7.3: Kata Tanya & Kata Keterangan (5)
const KOTOBA_N5_CH7_3 = [
  ["どこ", "doko", { en: "where", id: "di mana" }, "としょかんは どこですか。",
    [["としょかん", "Toshokan"], ["は", "wa"], ["どこ", "doko"], ["です", "desu"], ["か", "ka"]],
    { en: "Where is the library?", id: "Di mana perpustakaan?" }, ""],
  ["いつ", "itsu", { en: "when", id: "kapan" }, "たんじょうびは いつですか。",
    [["たんじょうび", "Tanjoubi"], ["は", "wa"], ["いつ", "itsu"], ["です", "desu"], ["か", "ka"]],
    { en: "When is your birthday?", id: "Kapan ulang tahunmu?" }, ""],
  ["なに", "nani", { en: "what", id: "apa" }, "なにを していますか。",
    [["なに", "Nani"], ["を", "wo"], ["しています", "shiteimasu"], ["か", "ka"]],
    { en: "What are you doing?", id: "Apa yang sedang kamu lakukan?" }, "何"],
  ["とても", "totemo", { en: "very", id: "sangat" }, "これは とても むずかしいです。",
    [["これ", "Kore"], ["は", "wa"], ["とても", "totemo"], ["むずかしい", "muzukashii"], ["です", "desu"]],
    { en: "This is very difficult.", id: "Ini sangat sulit." }, ""],
  ["あまり", "amari", { en: "not very / not much (with negative)", id: "tidak terlalu / tidak begitu" }, "わたしは あまり さけを のみません。",
    [["わたし", "Watashi"], ["は", "wa"], ["あまり", "amari"], ["さけ", "sake"], ["を", "wo"], ["のみません", "nomimasen"]],
    { en: "I don't drink alcohol very much.", id: "Saya tidak terlalu minum sake/alkohol." }, ""]
];

// Sub-Tier 7.4: Kata Hubung & Sambungan (4)
const KOTOBA_N5_CH7_4 = [
  ["そして", "soshite", { en: "and, and then", id: "dan, lalu" }, "あさごはんを たべました。そして、がっこうへ いきました。",
    [["あさごはんを たべました。", "Asagohan wo tabemashita."], ["そして、", "Soshite,"], ["がっこうへ いきました。", "gakkou e ikimashita."]],
    { en: "I ate breakfast. And then, I went to school.", id: "Saya sarapan. Lalu, saya pergi ke sekolah." }, ""],
  ["でも", "demo", { en: "but, however", id: "tapi, tetapi" }, "あめでした。でも、こうえんへ いきました。",
    [["あめでした。", "Ame deshita."], ["でも、", "Demo,"], ["こうえんへ いきました。", "kouen e ikimashita."]],
    { en: "It was raining. But, I went to the park.", id: "Waktu itu hujan. Tapi, saya pergi ke taman." }, ""],
  ["だから", "dakara", { en: "so, therefore", id: "jadi, oleh karena itu" }, "あしたは テストです。だから、べんきょうします。",
    [["あしたは テストです。", "Ashita wa tesuto desu."], ["だから、", "Dakara,"], ["べんきょうします。", "benkyoushimasu."]],
    { en: "Tomorrow is a test. So, I will study.", id: "Besok ada ujian. Jadi, saya akan belajar." }, ""],
  ["それから", "sorekara", { en: "after that, and then", id: "setelah itu, lalu" }, "ばんごはんを たべました。それから、おふろに はいりました。",
    [["ばんごはんを たべました。", "Bangohan wo tabemashita."], ["それから、", "Sorekara,"], ["おふろに はいりました。", "ofuro ni hairimashita."]],
    { en: "I ate dinner. After that, I took a bath.", id: "Saya makan malam. Setelah itu, saya mandi (berendam)." }, ""]
];

// Sub-Tier 7.5: Kata Keterangan Derajat & Tata Bahasa (4)
const KOTOBA_N5_CH7_5 = [
  ["とても", "totemo", { en: "very", id: "sangat" }, "にほんごは とても おもしろいです。",
    [["にほんご", "Nihongo"], ["は", "wa"], ["とても", "totemo"], ["おもしろい", "omoshiroi"], ["です", "desu"]],
    { en: "Japanese is very interesting.", id: "Bahasa Jepang sangat menarik." }, ""],
  ["すこし", "sukoshi", { en: "a little, a bit", id: "sedikit" }, "にほんごが すこし わかります。",
    [["にほんご", "Nihongo"], ["が", "ga"], ["すこし", "sukoshi"], ["わかります", "wakarimasu"]],
    { en: "I understand a little Japanese.", id: "Saya mengerti sedikit bahasa Jepang." }, "少し"],
  ["たくさん", "takusan", { en: "a lot, many", id: "banyak" }, "こうえんに ひとが たくさん います。",
    [["こうえん", "Kouen"], ["に", "ni"], ["ひと", "hito"], ["が", "ga"], ["たくさん", "takusan"], ["います", "imasu"]],
    { en: "There are a lot of people in the park.", id: "Ada banyak orang di taman." }, ""],
  ["もう", "mou", { en: "already", id: "sudah" }, "しゅくだいは もう おわりました。",
    [["しゅくだい", "Shukudai"], ["は", "wa"], ["もう", "mou"], ["おわりました", "owarimashita"]],
    { en: "I have already finished my homework.", id: "PR saya sudah selesai." }, ""]
];

const KOTOBA_TIER_KEYS = ["tier1", "tier2", "tier3", "tier4", "tier5", "tier6", "tier7", "tier8", "tier9", "tier10", "tier11", "tier12", "tier13", "tier14", "tier15", "tier16", "tier17", "tier18", "tier19", "tier20", "tier21", "tier22", "tier23", "tier24"];
const KOTOBA_N5_CHAPTERS = [
  KOTOBA_N5_CH1_1, KOTOBA_N5_CH1_2, KOTOBA_N5_CH1_3,
  KOTOBA_N5_CH2_1, KOTOBA_N5_CH2_2, KOTOBA_N5_CH2_3, KOTOBA_N5_CH2_4,
  KOTOBA_N5_CH3_1, KOTOBA_N5_CH3_2, KOTOBA_N5_CH3_3,
  KOTOBA_N5_CH4_1, KOTOBA_N5_CH4_2, KOTOBA_N5_CH4_3,
  KOTOBA_N5_CH5_1, KOTOBA_N5_CH5_2, KOTOBA_N5_CH5_3,
  KOTOBA_N5_CH6_1, KOTOBA_N5_CH6_2, KOTOBA_N5_CH6_3,
  KOTOBA_N5_CH7_1, KOTOBA_N5_CH7_2, KOTOBA_N5_CH7_3, KOTOBA_N5_CH7_4, KOTOBA_N5_CH7_5
];
const KOTOBA_N5_LEVEL_META = [
  ...KOTOBA_TIER_KEYS.map((id, i) => ({ id, tier: i + 1, rank: "N5" })),
  { id: "all", tier: KOTOBA_TIER_KEYS.length, rank: "N5" }
];
const KOTOBA_N5_LEVEL_TEXT = {
  tier1: { title: { en: "Tier 1.1 — Personal Pronouns & Greetings", id: "Tier 1.1 — Kata Ganti Orang & Sapaan" }, sample: "わたし あなた こんにちは", desc: { en: "29 N5 vocabulary words.", id: "29 kosakata N5." } },
  tier2: { title: { en: "Tier 1.2 — Family & Relationships", id: "Tier 1.2 — Keluarga & Hubungan" }, sample: "かぞく ちち はは", desc: { en: "24 N5 vocabulary words.", id: "24 kosakata N5." } },
  tier3: { title: { en: "Tier 1.3 — Occupations & Roles", id: "Tier 1.3 — Profesi & Peran" }, sample: "がくせい かいしゃいん", desc: { en: "21 N5 vocabulary words.", id: "21 kosakata N5." } },
  tier4: { title: { en: "Tier 2.1 — Daily Time & Time Expressions", id: "Tier 2.1 — Waktu Harian & Keterangan Waktu" }, sample: "いま きょう あした", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier5: { title: { en: "Tier 2.2 — Days, Months, & Hours", id: "Tier 2.2 — Hari, Bulan, & Jam" }, sample: "げつようび いちじかん", desc: { en: "3 N5 vocabulary words.", id: "3 kosakata N5." } },
  tier6: { title: { en: "Tier 2.3 — Numbers & Counters", id: "Tier 2.3 — Bilangan & Satuan Penghitung" }, sample: "ひとつ ひとり まい", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier7: { title: { en: "Tier 2.4 — Frequency & Duration", id: "Tier 2.4 — Frekuensi & Durasi" }, sample: "いつも ときどき ぜんぜん", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier8: { title: { en: "Tier 3.1 — Food & Drinks", id: "Tier 3.1 — Makanan & Minuman" }, sample: "ごはん みず おちゃ", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier9: { title: { en: "Tier 3.2 — Personal Items & Home", id: "Tier 3.2 — Benda-benda Pribadi & Rumah" }, sample: "ほん かばん いす", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier10: { title: { en: "Tier 3.3 — Clothing & Accessories", id: "Tier 3.3 — Pakaian & Aksesori" }, sample: "ふく くつ かさ", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier11: { title: { en: "Tier 4.1 — Locations & Public Facilities", id: "Tier 4.1 — Lokasi & Fasilitas Publik" }, sample: "がっこう えき みせ", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier12: { title: { en: "Tier 4.2 — Direction & Position", id: "Tier 4.2 — Arah & Posisi" }, sample: "うえ した みぎ", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier13: { title: { en: "Tier 4.3 — Transportation & City Features", id: "Tier 4.3 — Transportasi & Fitur Kota" }, sample: "でんしゃ くるま バス", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier14: { title: { en: "Tier 5.1 — Basic Daily Activities", id: "Tier 5.1 — Aktivitas Dasar Harian" }, sample: "たべる のむ みる", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier15: { title: { en: "Tier 5.2 — Movement & Mobility", id: "Tier 5.2 — Perpindahan & Mobilisasi" }, sample: "いく くる かえる", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier16: { title: { en: "Tier 5.3 — Interaction, Transactions, & Work", id: "Tier 5.3 — Interaksi, Transaksi, & Kerja" }, sample: "はなす かく かう", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier17: { title: { en: "Tier 6.1 — Descriptive i-Adjectives", id: "Tier 6.1 — Kata Sifat-i Deskriptif" }, sample: "おおきい ちいさい", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier18: { title: { en: "Tier 6.2 — Weather & Sensory i-Adjectives", id: "Tier 6.2 — Kata Sifat-i Cuaca & Sensori" }, sample: "あつい さむい いたい", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier19: { title: { en: "Tier 6.3 — na-Adjectives & Status", id: "Tier 6.3 — Kata Sifat-na & Status" }, sample: "すき きらい げんき", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier20: { title: { en: "Tier 7.1 — Nature & Weather", id: "Tier 7.1 — Alam & Cuaca" }, sample: "てんき あめ やま", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier21: { title: { en: "Tier 7.2 — Colors", id: "Tier 7.2 — Warna" }, sample: "あか あお しろ", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier22: { title: { en: "Tier 7.3 — Question Words & Adverbs", id: "Tier 7.3 — Kata Tanya & Kata Keterangan" }, sample: "どこ いつ なに", desc: { en: "5 N5 vocabulary words.", id: "5 kosakata N5." } },
  tier23: { title: { en: "Tier 7.4 — Conjunctions & Connectors", id: "Tier 7.4 — Kata Hubung & Sambungan" }, sample: "そして でも だから", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  tier24: { title: { en: "Tier 7.5 — Adverbs & Modifiers", id: "Tier 7.5 — Kata Keterangan Derajat & Tata Bahasa" }, sample: "とても すこし たくさん", desc: { en: "4 N5 vocabulary words.", id: "4 kosakata N5." } },
  all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "せんせい あるく げんき", desc: { en: "All 165 N5 vocabulary words shuffled into one Chapter.", id: "Seluruh 165 kosakata N5 diacak menjadi satu Chapter." } }
};

// Kotoba N5 py 24 sub-tier (tier1..tier24) + "all" — kepanjangan kalau ditampilkan
// flat sekaligus, jadi dikelompokkan jadi Nested Accordion: 7 kelompok "Chapter"
// (masing-masing menaungi 3-5 sub-tier, total 24) + kartu "All Mixed" berdiri
// sendiri di luar kelompok manapun, jadi totalnya 8 tingkatan teratas.
// renderLevels() memakai array ini kalau script.groups ada; kalau tidak ada,
// script lain (hiragana/katakana/kanji/bunpō) tetap dirender flat seperti biasa.
const KOTOBA_TIER_GROUP_DEFS = [
  { tierKeys: ["tier1", "tier2", "tier3"], sample: "わたし かぞく がくせい",
    title: { en: "Chapter 1 — People & Relationships", id: "Chapter 1 — Orang & Hubungan" } },
  { tierKeys: ["tier4", "tier5", "tier6", "tier7"], sample: "いま げつようび ひとつ",
    title: { en: "Chapter 2 — Time & Numbers", id: "Chapter 2 — Waktu & Angka" } },
  { tierKeys: ["tier8", "tier9", "tier10"], sample: "ごはん ほん ふく",
    title: { en: "Chapter 3 — Things & Belongings", id: "Chapter 3 — Benda & Barang" } },
  { tierKeys: ["tier11", "tier12", "tier13"], sample: "がっこう うえ でんしゃ",
    title: { en: "Chapter 4 — Places & Direction", id: "Chapter 4 — Tempat & Arah" } },
  { tierKeys: ["tier14", "tier15", "tier16"], sample: "たべる いく はなす",
    title: { en: "Chapter 5 — Verbs & Actions", id: "Chapter 5 — Kata Kerja & Aktivitas" } },
  { tierKeys: ["tier17", "tier18", "tier19"], sample: "おおきい あつい すき",
    title: { en: "Chapter 6 — Adjectives", id: "Chapter 6 — Kata Sifat" } },
  { tierKeys: ["tier20", "tier21", "tier22", "tier23", "tier24"], sample: "てんき あか どこ",
    title: { en: "Chapter 7 — Nature, Colors & Grammar Words", id: "Chapter 7 — Alam, Warna & Kata Tata Bahasa" } }
];
const KOTOBA_TIER_GROUPS = KOTOBA_TIER_GROUP_DEFS.map((g, gi) => {
  const wordCount = g.tierKeys.reduce((sum, tk) => sum + KOTOBA_N5_CHAPTERS[KOTOBA_TIER_KEYS.indexOf(tk)].length, 0);
  return {
    id: "grp" + (gi + 1),
    chapterNum: gi + 1,
    tierKeys: g.tierKeys,
    title: g.title,
    sample: g.sample,
    desc: {
      en: `${wordCount} N5 vocabulary words across ${g.tierKeys.length} sub-tiers.`,
      id: `${wordCount} kosakata N5 dalam ${g.tierKeys.length} sub-tier.`
    }
  };
});
const KOTOBA_N5_LEARN = [
  { tierKey: "tier1", title: KOTOBA_N5_LEVEL_TEXT.tier1.title, desc: KOTOBA_N5_LEVEL_TEXT.tier1.desc, items: KOTOBA_N5_CH1_1 },
  { tierKey: "tier2", title: KOTOBA_N5_LEVEL_TEXT.tier2.title, desc: KOTOBA_N5_LEVEL_TEXT.tier2.desc, items: KOTOBA_N5_CH1_2 },
  { tierKey: "tier3", title: KOTOBA_N5_LEVEL_TEXT.tier3.title, desc: KOTOBA_N5_LEVEL_TEXT.tier3.desc, items: KOTOBA_N5_CH1_3 },
  { tierKey: "tier4", title: KOTOBA_N5_LEVEL_TEXT.tier4.title, desc: KOTOBA_N5_LEVEL_TEXT.tier4.desc, items: KOTOBA_N5_CH2_1 },
  { tierKey: "tier5", title: KOTOBA_N5_LEVEL_TEXT.tier5.title, desc: KOTOBA_N5_LEVEL_TEXT.tier5.desc, items: KOTOBA_N5_CH2_2 },
  { tierKey: "tier6", title: KOTOBA_N5_LEVEL_TEXT.tier6.title, desc: KOTOBA_N5_LEVEL_TEXT.tier6.desc, items: KOTOBA_N5_CH2_3 },
  { tierKey: "tier7", title: KOTOBA_N5_LEVEL_TEXT.tier7.title, desc: KOTOBA_N5_LEVEL_TEXT.tier7.desc, items: KOTOBA_N5_CH2_4 },
  { tierKey: "tier8", title: KOTOBA_N5_LEVEL_TEXT.tier8.title, desc: KOTOBA_N5_LEVEL_TEXT.tier8.desc, items: KOTOBA_N5_CH3_1 },
  { tierKey: "tier9", title: KOTOBA_N5_LEVEL_TEXT.tier9.title, desc: KOTOBA_N5_LEVEL_TEXT.tier9.desc, items: KOTOBA_N5_CH3_2 },
  { tierKey: "tier10", title: KOTOBA_N5_LEVEL_TEXT.tier10.title, desc: KOTOBA_N5_LEVEL_TEXT.tier10.desc, items: KOTOBA_N5_CH3_3 },
  { tierKey: "tier11", title: KOTOBA_N5_LEVEL_TEXT.tier11.title, desc: KOTOBA_N5_LEVEL_TEXT.tier11.desc, items: KOTOBA_N5_CH4_1 },
  { tierKey: "tier12", title: KOTOBA_N5_LEVEL_TEXT.tier12.title, desc: KOTOBA_N5_LEVEL_TEXT.tier12.desc, items: KOTOBA_N5_CH4_2 },
  { tierKey: "tier13", title: KOTOBA_N5_LEVEL_TEXT.tier13.title, desc: KOTOBA_N5_LEVEL_TEXT.tier13.desc, items: KOTOBA_N5_CH4_3 },
  { tierKey: "tier14", title: KOTOBA_N5_LEVEL_TEXT.tier14.title, desc: KOTOBA_N5_LEVEL_TEXT.tier14.desc, items: KOTOBA_N5_CH5_1 },
  { tierKey: "tier15", title: KOTOBA_N5_LEVEL_TEXT.tier15.title, desc: KOTOBA_N5_LEVEL_TEXT.tier15.desc, items: KOTOBA_N5_CH5_2 },
  { tierKey: "tier16", title: KOTOBA_N5_LEVEL_TEXT.tier16.title, desc: KOTOBA_N5_LEVEL_TEXT.tier16.desc, items: KOTOBA_N5_CH5_3 },
  { tierKey: "tier17", title: KOTOBA_N5_LEVEL_TEXT.tier17.title, desc: KOTOBA_N5_LEVEL_TEXT.tier17.desc, items: KOTOBA_N5_CH6_1 },
  { tierKey: "tier18", title: KOTOBA_N5_LEVEL_TEXT.tier18.title, desc: KOTOBA_N5_LEVEL_TEXT.tier18.desc, items: KOTOBA_N5_CH6_2 },
  { tierKey: "tier19", title: KOTOBA_N5_LEVEL_TEXT.tier19.title, desc: KOTOBA_N5_LEVEL_TEXT.tier19.desc, items: KOTOBA_N5_CH6_3 },
  { tierKey: "tier20", title: KOTOBA_N5_LEVEL_TEXT.tier20.title, desc: KOTOBA_N5_LEVEL_TEXT.tier20.desc, items: KOTOBA_N5_CH7_1 },
  { tierKey: "tier21", title: KOTOBA_N5_LEVEL_TEXT.tier21.title, desc: KOTOBA_N5_LEVEL_TEXT.tier21.desc, items: KOTOBA_N5_CH7_2 },
  { tierKey: "tier22", title: KOTOBA_N5_LEVEL_TEXT.tier22.title, desc: KOTOBA_N5_LEVEL_TEXT.tier22.desc, items: KOTOBA_N5_CH7_3 },
  { tierKey: "tier23", title: KOTOBA_N5_LEVEL_TEXT.tier23.title, desc: KOTOBA_N5_LEVEL_TEXT.tier23.desc, items: KOTOBA_N5_CH7_4 },
  { tierKey: "tier24", title: KOTOBA_N5_LEVEL_TEXT.tier24.title, desc: KOTOBA_N5_LEVEL_TEXT.tier24.desc, items: KOTOBA_N5_CH7_5 }
];

/* ---- Bunpō N5 — 100 pola, 6 Tier / 15 Sub-Tier (lihat bunpo-n5-100-tier.md) ---- */
/* Format tiap item SAMA seperti BUNPO_TIER1-3 sebelumnya:
   [pattern, contoh_kalimat, meaning{en,id}, romaji_segments, blank_version, translation{en,id}] */

// Sub-Tier 1.1: Predikat & Kalimat Dasar (7)
const BUNPO_N5_TIER1 = [
  ["〜は〜です", "私は学生です。", { en: "states that A is B", id: "menyatakan A adalah B" }, [["私", "Watashi"], ["は", "wa"], ["学生", "gakusei"], ["です。", "desu."]], "わたしは がくせい ....", { en: "I am a student.", id: "Saya adalah murid/siswa." }],
  ["〜は〜ではありません", "私は先生ではありません。", { en: "states that A is not B", id: "menyatakan A bukan B" }, [["私", "Watashi"], ["は", "wa"], ["先生", "sensei"], ["ではありません。", "dewa arimasen."]], "わたしは せんせい ....", { en: "I am not a teacher.", id: "Saya bukan guru." }],
  ["〜は〜でした", "昨日は休みでした。", { en: "A was B (past)", id: "A adalah B (lampau)" }, [["昨日", "Kinou"], ["は", "wa"], ["休み", "yasumi"], ["でした。", "deshita."]], "きのうは やすみ ....", { en: "Yesterday was a day off.", id: "Kemarin adalah hari libur." }],
  ["〜は〜ではありませんでした", "昨日は雨ではありませんでした。", { en: "A was not B (past)", id: "A bukan B (lampau)" }, [["昨日", "Kinou"], ["は", "wa"], ["雨", "ame"], ["ではありませんでした。", "dewa arimasen deshita."]], "きのうは あめ ....", { en: "Yesterday was not rainy.", id: "Kemarin tidak hujan." }],
  ["〜も", "私も学生です。", { en: "also / too", id: "juga" }, [["私", "Watashi"], ["も", "mo"], ["学生です。", "gakusei desu."]], "わたし ... がくせいです。", { en: "I am also a student.", id: "Saya juga murid/siswa." }],
  ["NのN", "これは私の本です。", { en: "indicates possession/description of a thing", id: "kepemilikan/keterangan benda" }, [["これ", "Kore"], ["は", "wa"], ["私の", "watashi no"], ["本です。", "hon desu."]], "これは わたし ... ほんです。", { en: "This is my book.", id: "Ini buku saya." }],
  ["NとN", "犬と猫がいます。", { en: "and (listing items exhaustively)", id: "dan (menyebut semua secara lengkap)" }, [["犬と", "Inu to"], ["猫が", "neko ga"], ["います。", "imasu."]], "いぬ ... ねこが います。", { en: "There is a dog and a cat.", id: "Ada anjing dan kucing." }],
];

// Sub-Tier 1.2: Partikel Utama (8)
const BUNPO_N5_TIER2 = [
  ["〜は", "私は日本人です。", { en: "topic particle", id: "partikel topik" }, [["私", "Watashi"], ["は", "wa"], ["日本人です。", "nihonjin desu."]], "わたし ... にほんじんです。", { en: "I am Japanese.", id: "Saya orang Jepang." }],
  ["〜が", "雨が降っています。", { en: "marks the sentence subject", id: "menandai subjek kalimat" }, [["雨", "Ame"], ["が", "ga"], ["降っています。", "futte imasu."]], "あめ ... ふっています。", { en: "It is raining.", id: "Sedang turun hujan." }],
  ["〜を", "水を飲みます。", { en: "marks the direct object", id: "menandai objek langsung" }, [["水", "Mizu"], ["を", "wo"], ["飲みます。", "nomimasu."]], "みず ... のみます。", { en: "I drink water.", id: "Saya minum air." }],
  ["〜に", "7時に起きます。", { en: "indicates time or destination", id: "menunjukkan waktu atau tujuan" }, [["7時", "Shichi-ji"], ["に", "ni"], ["起きます。", "okimasu."]], "しちじ ... おきます。", { en: "I wake up at 7 o'clock.", id: "Saya bangun jam 7." }],
  ["〜で", "電車で行きます。", { en: "indicates the place/means of doing something", id: "menunjukkan tempat/cara melakukan sesuatu" }, [["電車", "Densha"], ["で", "de"], ["行きます。", "ikimasu."]], "でんしゃ ... いきます。", { en: "I go by train.", id: "Saya pergi naik kereta." }],
  ["〜と", "友達と話します。", { en: "together with", id: "bersama dengan" }, [["友達", "Tomodachi"], ["と", "to"], ["話します。", "hanashimasu."]], "ともだち ... はなします。", { en: "I talk with my friend.", id: "Saya berbicara dengan teman." }],
  ["〜から", "9時から働きます。", { en: "from (starting point)", id: "dari (titik awal)" }, [["9時から", "Ku-ji kara"], ["働きます。", "hatarakimasu."]], "くじ ... はたらきます。", { en: "I work starting from 9 o'clock.", id: "Saya bekerja mulai dari jam 9." }],
  ["〜まで", "5時まで働きます。", { en: "until (end point)", id: "sampai (titik akhir)" }, [["5時まで", "Go-ji made"], ["働きます。", "hatarakimasu."]], "ごじ ... はたらきます。", { en: "I work until 5 o'clock.", id: "Saya bekerja sampai jam 5." }],
];

// Sub-Tier 2.1: Keberadaan (Ada/Tinggal) (7)
const BUNPO_N5_TIER3 = [
  ["〜があります", "机の上に本があります。", { en: "there is (inanimate)", id: "ada (benda mati)" }, [["机の上に", "Tsukue no ue ni"], ["本が", "hon ga"], ["あります。", "arimasu."]], "つくえの うえに ほんが ....", { en: "There is a book on the desk.", id: "Ada buku di atas meja." }],
  ["〜がいます", "公園に猫がいます。", { en: "there is (animate)", id: "ada (makhluk hidup)" }, [["公園に", "Kouen ni"], ["猫が", "neko ga"], ["います。", "imasu."]], "こうえんに ねこが ....", { en: "There is a cat in the park.", id: "Ada kucing di taman." }],
  ["場所に〜があります/います", "教室に学生がいます。", { en: "there is X at a place", id: "di suatu tempat ada X" }, [["教室に", "Kyoushitsu ni"], ["学生が", "gakusei ga"], ["います。", "imasu."]], "きょうしつに がくせいが ....", { en: "There are students in the classroom.", id: "Di kelas ada murid." }],
  ["Xは場所にあります/います", "猫は教室にいます。", { en: "X is located at that place", id: "X berada di tempat tsb" }, [["猫は", "Neko wa"], ["教室に", "kyoushitsu ni"], ["います。", "imasu."]], "ねこは きょうしつに ....", { en: "The cat is in the classroom.", id: "Kucingnya ada di kelas." }],
  ["〜に住んでいます", "東京に住んでいます。", { en: "living in", id: "tinggal di" }, [["東京に", "Toukyou ni"], ["住んでいます。", "sunde imasu."]], "とうきょう ....", { en: "I live in Tokyo.", id: "Saya tinggal di Tokyo." }],
  ["〜の中に／上に／下に", "箱の中に猫がいます。", { en: "inside/on top of/underneath", id: "di dalam/atas/bawah" }, [["箱の中に", "Hako no naka ni"], ["猫が", "neko ga"], ["います。", "imasu."]], "はこの なかに ねこが ....", { en: "There is a cat inside the box.", id: "Ada kucing di dalam kotak." }],
  ["〜の隣に／そばに／近くに", "駅の近くに店があります。", { en: "next to/near", id: "di sebelah/dekat" }, [["駅の近くに", "Eki no chikaku ni"], ["店が", "mise ga"], ["あります。", "arimasu."]], "えきの ちかくに みせが ....", { en: "There is a shop near the station.", id: "Ada toko dekat stasiun." }],
];

// Sub-Tier 2.2: Arah & Perpindahan (7)
const BUNPO_N5_TIER4 = [
  ["場所へ/に行きます・来ます・帰ります", "学校へ行きます。", { en: "go/come/return to a place", id: "pergi/datang/pulang ke" }, [["学校へ", "Gakkou e"], ["行きます。", "ikimasu."]], "がっこう ....", { en: "I go to school.", id: "Saya pergi ke sekolah." }],
  ["〜で行きます", "バスで行きます。", { en: "go by (means of transport)", id: "pergi dengan (alat transportasi)" }, [["バスで", "Basu de"], ["行きます。", "ikimasu."]], "バス ....", { en: "I go by bus.", id: "Saya pergi naik bis." }],
  ["〜から〜まで", "家から学校まで歩きます。", { en: "from...to (distance)", id: "dari...sampai (jarak)" }, [["家から", "Ie kara"], ["学校まで", "gakkou made"], ["歩きます。", "arukimasu."]], "いえから がっこうまで ....", { en: "I walk from home to school.", id: "Saya berjalan kaki dari rumah sampai sekolah." }],
  ["〜を渡ります", "橋を渡ります。", { en: "to cross", id: "menyeberang" }, [["橋を", "Hashi wo"], ["渡ります。", "watarimasu."]], "はし ....", { en: "I cross the bridge.", id: "Saya menyeberangi jembatan." }],
  ["〜を曲がります", "次の角を曲がります。", { en: "to turn", id: "belok" }, [["次の角を", "Tsugi no kado wo"], ["曲がります。", "magarimasu."]], "つぎの かどを ....", { en: "I turn at the next corner.", id: "Saya belok di tikungan berikutnya." }],
  ["〜をまっすぐ行きます", "この道をまっすぐ行きます。", { en: "go straight along", id: "jalan lurus" }, [["この道を", "Kono michi wo"], ["まっすぐ", "massugu"], ["行きます。", "ikimasu."]], "この みちを まっすぐ ....", { en: "I go straight along this road.", id: "Saya jalan lurus di jalan ini." }],
  ["〜に乗ります／〜を降ります", "バスに乗ります。", { en: "get on/get off a vehicle", id: "naik/turun kendaraan" }, [["バスに", "Basu ni"], ["乗ります。", "norimasu."]], "バス ....", { en: "I get on the bus.", id: "Saya naik bis." }],
];

// Sub-Tier 3.1: Bentuk Sopan (Masu Form) (6)
const BUNPO_N5_TIER5 = [
  ["V-masu", "毎日勉強します。", { en: "polite non-past positive", id: "bentuk sopan positif (sekarang/akan datang)" }, [["毎日", "Mainichi"], ["勉強します。", "benkyou shimasu."]], "まいにち ....", { en: "I study every day.", id: "Saya belajar setiap hari." }],
  ["V-masen", "今日は勉強しません。", { en: "polite negative", id: "bentuk sopan negatif" }, [["今日は", "Kyou wa"], ["勉強しません。", "benkyou shimasen."]], "きょうは ....", { en: "I will not study today.", id: "Hari ini saya tidak belajar." }],
  ["V-mashita", "昨日、映画を見ました。", { en: "polite past positive", id: "bentuk sopan lampau positif" }, [["昨日、", "Kinou,"], ["映画を", "eiga wo"], ["見ました。", "mimashita."]], "きのう、えいがを ....", { en: "I watched a movie yesterday.", id: "Kemarin saya menonton film." }],
  ["V-masen deshita", "昨日、行きませんでした。", { en: "polite past negative", id: "bentuk sopan lampau negatif" }, [["昨日、", "Kinou,"], ["行きませんでした。", "ikimasen deshita."]], "きのう、....", { en: "I didn't go yesterday.", id: "Kemarin saya tidak pergi." }],
  ["V-nagara", "音楽を聞きながら勉強します。", { en: "while doing", id: "sambil melakukan" }, [["音楽を", "Ongaku wo"], ["聞きながら", "kikinagara"], ["勉強します。", "benkyou shimasu."]], "おんがくを きき... べんきょうします。", { en: "I study while listening to music.", id: "Saya belajar sambil mendengarkan musik." }],
  ["V(masu-stem)に行きます/来ます", "デパートへ買い物に行きます。", { en: "go/come to do (purpose)", id: "pergi/datang untuk melakukan (tujuan)" }, [["デパートへ", "Depaato e"], ["買い物に", "kaimono ni"], ["行きます。", "ikimasu."]], "デパートへ かいものに ....", { en: "I go to the department store to shop.", id: "Saya pergi ke department store untuk belanja." }],
];

// Sub-Tier 3.2: Bentuk Te (Te Form) (8)
const BUNPO_N5_TIER6 = [
  ["V-teいます", "今、勉強しています。", { en: "doing right now / ongoing state", id: "sedang melakukan / kondisi berlanjut" }, [["今、", "Ima,"], ["勉強しています。", "benkyou shite imasu."]], "いま、べんきょう ....", { en: "I am studying right now.", id: "Sedang belajar sekarang." }],
  ["V-teください", "ここに座ってください。", { en: "please do", id: "tolong lakukan" }, [["ここに", "Koko ni"], ["座ってください。", "suwatte kudasai."]], "ここに ....", { en: "Please sit here.", id: "Tolong duduk di sini." }],
  ["V-teもいいです", "ここに座ってもいいです。", { en: "allowed to do", id: "boleh melakukan" }, [["ここに", "Koko ni"], ["座ってもいいです。", "suwattemo ii desu."]], "ここに ....", { en: "You may sit here.", id: "Boleh duduk di sini." }],
  ["V-teはいけません", "ここに座ってはいけません。", { en: "not allowed to do", id: "tidak boleh melakukan" }, [["ここに", "Koko ni"], ["座ってはいけません。", "suwatte wa ikemasen."]], "ここに ....", { en: "You must not sit here.", id: "Tidak boleh duduk di sini." }],
  ["V-teから", "手を洗ってから食べます。", { en: "after doing", id: "setelah melakukan" }, [["手を洗ってから", "Te wo aratte kara"], ["食べます。", "tabemasu."]], "てを あらって... たべます。", { en: "I eat after washing my hands.", id: "Saya makan setelah cuci tangan." }],
  ["V-te, V-te", "朝起きて、顔を洗います。", { en: "connecting two consecutive actions", id: "menyambung dua aksi berurutan" }, [["朝起きて、", "Asa okite,"], ["顔を", "kao wo"], ["洗います。", "araimasu."]], "あさ おきて、かおを ....", { en: "I wake up in the morning and wash my face.", id: "Saya bangun pagi lalu cuci muka." }],
  ["V-teみます", "この料理を食べてみます。", { en: "try doing", id: "coba melakukan" }, [["この料理を", "Kono ryouri wo"], ["食べてみます。", "tabete mimasu."]], "この りょうりを ....", { en: "I will try eating this dish.", id: "Saya akan coba makan masakan ini." }],
  ["V-teおきます", "明日のために準備しておきます。", { en: "do in advance (preparation)", id: "melakukan lebih dulu (persiapan)" }, [["明日のために", "Ashita no tame ni"], ["準備しておきます。", "junbi shite okimasu."]], "あしたの ために ....", { en: "I will prepare in advance for tomorrow.", id: "Saya akan menyiapkan lebih dulu untuk besok." }],
];

// Sub-Tier 3.3: Bentuk Nai (Nai Form) (7)
const BUNPO_N5_TIER7 = [
  ["V-nai", "明日は行かない。", { en: "dictionary-form negative", id: "bentuk negatif kamus" }, [["明日は", "Ashita wa"], ["行かない。", "ikanai."]], "あしたは ....", { en: "I won't go tomorrow.", id: "Besok saya tidak pergi." }],
  ["V-naiでください", "写真を撮らないでください。", { en: "please don't do", id: "tolong jangan lakukan" }, [["写真を", "Shashin wo"], ["撮らないでください。", "toranaide kudasai."]], "しゃしんを ....", { en: "Please don't take photos.", id: "Tolong jangan mengambil foto." }],
  ["V-nakerebaなりません", "薬を飲まなければなりません。", { en: "must do", id: "harus melakukan" }, [["薬を", "Kusuri wo"], ["飲まなければなりません。", "nomanakereba narimasen."]], "くすりを ....", { en: "I must take medicine.", id: "Saya harus minum obat." }],
  ["V-nakutemoいいです", "今日は勉強しなくてもいいです。", { en: "don't need to do", id: "tidak perlu melakukan" }, [["今日は", "Kyou wa"], ["勉強しなくてもいいです。", "benkyou shinakutemo ii desu."]], "きょうは ....", { en: "I don't need to study today.", id: "Hari ini saya tidak perlu belajar." }],
  ["V-naide", "朝ご飯を食べないで学校へ行きました。", { en: "without doing", id: "tanpa melakukan" }, [["朝ご飯を", "Asagohan wo"], ["食べないで", "tabenaide"], ["学校へ行きました。", "gakkou e ikimashita."]], "あさごはんを たべないで がっこうへ ....", { en: "I went to school without eating breakfast.", id: "Saya pergi ke sekolah tanpa makan pagi." }],
  ["V-naiほうがいいです", "たばこを吸わないほうがいいです。", { en: "better not to do", id: "lebih baik tidak melakukan" }, [["たばこを", "Tabako wo"], ["吸わないほうがいいです。", "suwanai hou ga ii desu."]], "たばこを ....", { en: "You'd better not smoke.", id: "Lebih baik tidak merokok." }],
  ["V-naiつもりです", "今年は旅行しないつもりです。", { en: "intend not to do", id: "berniat tidak melakukan" }, [["今年は", "Kotoshi wa"], ["旅行しないつもりです。", "ryokou shinai tsumori desu."]], "ことしは ....", { en: "I don't intend to travel this year.", id: "Saya berniat tidak bepergian tahun ini." }],
];

// Sub-Tier 3.4: Bentuk Kamus (Dictionary Form) (7)
const BUNPO_N5_TIER8 = [
  ["V-辞書形", "毎日日本語を勉強する。", { en: "plain non-past form", id: "bentuk polos non-lampau" }, [["毎日", "Mainichi"], ["日本語を", "nihongo wo"], ["勉強する。", "benkyou suru."]], "まいにち にほんごを ....", { en: "I study Japanese every day.", id: "Saya belajar bahasa Jepang setiap hari." }],
  ["V-る ことができます", "漢字を読むことができます。", { en: "can / able to do", id: "bisa/mampu melakukan" }, [["漢字を", "Kanji wo"], ["読むことができます。", "yomu koto ga dekimasu."]], "かんじを よむ ....", { en: "I can read kanji.", id: "Saya bisa membaca kanji." }],
  ["V-る こと", "本を読むことが好きです。", { en: "turns a verb into a noun", id: "menjadikan kata kerja sebagai kata benda" }, [["本を", "Hon wo"], ["読むことが", "yomu koto ga"], ["好きです。", "suki desu."]], "ほんを よむ ... すきです。", { en: "I like reading books.", id: "Saya suka membaca buku." }],
  ["V-る 前に", "寝る前に歯を磨きます。", { en: "before doing", id: "sebelum melakukan" }, [["寝る前に", "Neru mae ni"], ["歯を", "ha wo"], ["磨きます。", "migakimasu."]], "ねる ... はを みがきます。", { en: "I brush my teeth before sleeping.", id: "Saya menyikat gigi sebelum tidur." }],
  ["V-る つもりです", "来年日本へ行くつもりです。", { en: "intend to / plan to", id: "berniat/berencana" }, [["来年", "Rainen"], ["日本へ", "Nihon e"], ["行くつもりです。", "iku tsumori desu."]], "らいねん にほんへ いく ....", { en: "I plan to go to Japan next year.", id: "Saya berencana pergi ke Jepang tahun depan." }],
  ["V-る（polos）と思います", "明日雨が降ると思います。", { en: "I think / in my opinion", id: "menurut saya/saya pikir" }, [["明日", "Ashita"], ["雨が", "ame ga"], ["降ると思います。", "furu to omoimasu."]], "あした あめが ふる ....", { en: "I think it will rain tomorrow.", id: "Saya pikir besok akan hujan." }],
  ["V-る なら", "日本へ行くなら、京都もいいですよ。", { en: "if/when (topic conditional)", id: "kalau/jika (kondisional topik)" }, [["日本へ行くなら、", "Nihon e iku nara,"], ["京都もいいですよ。", "Kyouto mo ii desu yo."]], "にほんへ いく...、きょうとも いいですよ。", { en: "If you're going to Japan, Kyoto is also nice.", id: "Kalau mau pergi ke Jepang, Kyoto juga bagus." }],
];

// Sub-Tier 3.5: Bentuk Ta (Past Form) (7)
const BUNPO_N5_TIER9 = [
  ["V-た", "昨日映画を見た。", { en: "plain past form", id: "bentuk lampau polos" }, [["昨日", "Kinou"], ["映画を", "eiga wo"], ["見た。", "mita."]], "きのう えいがを ....", { en: "I watched a movie yesterday.", id: "Kemarin saya nonton film." }],
  ["V-た ことがあります", "日本へ行ったことがあります。", { en: "have done before", id: "pernah melakukan" }, [["日本へ", "Nihon e"], ["行ったことがあります。", "itta koto ga arimasu."]], "にほんへ ....", { en: "I have been to Japan before.", id: "Saya pernah pergi ke Jepang." }],
  ["V-た 後で", "食べた後で薬を飲みます。", { en: "after doing", id: "setelah melakukan" }, [["食べた後で", "Tabeta ato de"], ["薬を", "kusuri wo"], ["飲みます。", "nomimasu."]], "たべた ... くすりを のみます。", { en: "I take medicine after eating.", id: "Saya minum obat setelah makan." }],
  ["V-たり、V-たりします", "週末は本を読んだり、映画を見たりします。", { en: "doing things like...", id: "melakukan hal-hal seperti..." }, [["週末は", "Shuumatsu wa"], ["本を読んだり、", "hon wo yondari,"], ["映画を見たりします。", "eiga wo mitari shimasu."]], "しゅうまつは ほんを よんだり、えいがを みたり ....", { en: "On weekends I do things like read books and watch movies.", id: "Akhir pekan saya melakukan hal-hal seperti membaca buku dan menonton film." }],
  ["V-た ほうがいいです", "早く寝たほうがいいです。", { en: "you should do", id: "sebaiknya melakukan" }, [["早く", "Hayaku"], ["寝たほうが", "neta hou ga"], ["いいです。", "ii desu."]], "はやく ねた ... です。", { en: "You'd better sleep early.", id: "Lebih baik tidur lebih awal." }],
  ["V-たら", "雨が降ったら、行きません。", { en: "if/when/once (conditional)", id: "kalau/jika/ketika (kondisional)" }, [["雨が降ったら、", "Ame ga futtara,"], ["行きません。", "ikimasen."]], "あめが ふったら、....", { en: "If it rains, I won't go.", id: "Kalau hujan, saya tidak pergi." }],
  ["V-た まま", "電気をつけたまま寝ました。", { en: "remain in a state after doing", id: "dalam keadaan tetap setelah melakukan" }, [["電気をつけたまま", "Denki wo tsuketa mama"], ["寝ました。", "nemashita."]], "でんきを つけた まま ....", { en: "I fell asleep with the light left on.", id: "Saya tertidur dengan lampu tetap menyala." }],
];

// Sub-Tier 4.1: Kata Sifat-i (i-Adj) (6)
const BUNPO_N5_TIER10 = [
  ["Adj-i（polos）", "この家は大きいです。", { en: "base form", id: "bentuk dasar" }, [["この家は", "Kono ie wa"], ["大きいです。", "ookii desu."]], "この いえは ....", { en: "This house is big.", id: "Rumah ini besar." }],
  ["Adj-i-くないです", "この家は大きくないです。", { en: "negative", id: "negatif" }, [["この家は", "Kono ie wa"], ["大きくないです。", "ookikunai desu."]], "この いえは ....", { en: "This house is not big.", id: "Rumah ini tidak besar." }],
  ["Adj-i-かったです", "昨日は忙しかったです。", { en: "past positive", id: "lampau positif" }, [["昨日は", "Kinou wa"], ["忙しかったです。", "isogashikatta desu."]], "きのうは ....", { en: "Yesterday was busy.", id: "Kemarin sibuk." }],
  ["Adj-i-くなかったです", "昨日は忙しくなかったです。", { en: "past negative", id: "lampau negatif" }, [["昨日は", "Kinou wa"], ["忙しくなかったです。", "isogashikunakatta desu."]], "きのうは ....", { en: "Yesterday was not busy.", id: "Kemarin tidak sibuk." }],
  ["Adj-i-くて", "この店は安くておいしいです。", { en: "connecting (and)", id: "menyambung (dan)" }, [["この店は", "Kono mise wa"], ["安くて", "yasukute"], ["おいしいです。", "oishii desu."]], "この みせは やすくて ....", { en: "This shop is cheap and delicious.", id: "Toko ini murah dan enak." }],
  ["Adj-i-く + V", "早く起きます。", { en: "adverb form", id: "bentuk keterangan (adverbia)" }, [["早く", "Hayaku"], ["起きます。", "okimasu."]], "はやく ....", { en: "I wake up early.", id: "Saya bangun pagi-pagi." }],
];

// Sub-Tier 4.2: Kata Sifat-na (na-Adj) (6)
const BUNPO_N5_TIER11 = [
  ["Adj-na + です", "この町は静かです。", { en: "positive", id: "positif" }, [["この町は", "Kono machi wa"], ["静かです。", "shizuka desu."]], "この まちは ....", { en: "This town is quiet.", id: "Kota ini tenang." }],
  ["Adj-na + ではありません", "この町は静かではありません。", { en: "negative", id: "negatif" }, [["この町は", "Kono machi wa"], ["静かではありません。", "shizuka dewa arimasen."]], "この まちは ....", { en: "This town is not quiet.", id: "Kota ini tidak tenang." }],
  ["Adj-na + でした", "昨日のパーティーは賑やかでした。", { en: "past positive", id: "lampau positif" }, [["昨日のパーティーは", "Kinou no paatii wa"], ["賑やかでした。", "nigiyaka deshita."]], "きのうの ぱーてぃーは ....", { en: "Yesterday's party was lively.", id: "Pesta kemarin ramai." }],
  ["Adj-na + ではありませんでした", "昨日のパーティーは賑やかではありませんでした。", { en: "past negative", id: "lampau negatif" }, [["昨日のパーティーは", "Kinou no paatii wa"], ["賑やかではありませんでした。", "nigiyaka dewa arimasen deshita."]], "きのうの ぱーてぃーは ....", { en: "Yesterday's party was not lively.", id: "Pesta kemarin tidak ramai." }],
  ["Adj-na + で", "この町は静かで、きれいです。", { en: "connecting (and)", id: "menyambung (dan)" }, [["この町は", "Kono machi wa"], ["静かで、", "shizuka de,"], ["きれいです。", "kirei desu."]], "この まちは しずかで、....", { en: "This town is quiet and beautiful.", id: "Kota ini tenang dan indah." }],
  ["Adj-na + に + V", "静かに話します。", { en: "adverb form", id: "bentuk keterangan (adverbia)" }, [["静かに", "Shizuka ni"], ["話します。", "hanashimasu."]], "しずかに ....", { en: "I speak quietly.", id: "Saya berbicara dengan tenang." }],
];

// Sub-Tier 5.1: Keinginan & Ajakan (7)
const BUNPO_N5_TIER12 = [
  ["V-たいです", "日本へ行きたいです。", { en: "want to do", id: "ingin melakukan" }, [["日本へ", "Nihon e"], ["行きたいです。", "ikitai desu."]], "にほんへ ... です。", { en: "I want to go to Japan.", id: "Saya ingin pergi ke Jepang." }],
  ["V-たくないです", "今日は働きたくないです。", { en: "don't want to do", id: "tidak ingin melakukan" }, [["今日は", "Kyou wa"], ["働きたくないです。", "hatarakitakunai desu."]], "きょうは ....", { en: "I don't want to work today.", id: "Hari ini saya tidak ingin bekerja." }],
  ["〜がほしいです", "新しい車がほしいです。", { en: "want (a thing)", id: "ingin (benda)" }, [["新しい車が", "Atarashii kuruma ga"], ["ほしいです。", "hoshii desu."]], "あたらしい くるまが ....", { en: "I want a new car.", id: "Saya ingin mobil baru." }],
  ["V-ましょう", "一緒に食べましょう。", { en: "let's", id: "ayo/mari kita" }, [["一緒に", "Issho ni"], ["食べましょう。", "tabemashou."]], "いっしょに ....", { en: "Let's eat together.", id: "Ayo makan bersama-sama." }],
  ["V-ましょうか", "一緒に映画を見ましょうか。", { en: "shall we... / how about...", id: "bagaimana kalau kita.../mari saya..." }, [["一緒に", "Issho ni"], ["映画を", "eiga wo"], ["見ましょうか。", "mimashou ka."]], "いっしょに えいがを ....", { en: "Shall we watch a movie together?", id: "Bagaimana kalau kita nonton film bersama?" }],
  ["V-ませんか", "一緒に行きませんか。", { en: "would you like to...? (invitation)", id: "maukah kamu...? (ajakan)" }, [["一緒に", "Issho ni"], ["行きませんか。", "ikimasen ka."]], "いっしょに ....", { en: "Would you like to go together?", id: "Mau pergi bersama-sama?" }],
  ["V-なさい", "早く寝なさい。", { en: "do it! (gentle command)", id: "lakukan! (perintah halus)" }, [["早く", "Hayaku"], ["寝なさい。", "nenasai."]], "はやく ....", { en: "Go to sleep early!", id: "Cepat tidur!" }],
];

// Sub-Tier 5.2: Alasan & Perbandingan (7)
const BUNPO_N5_TIER13 = [
  ["〜から", "雨が降っているから、行きません。", { en: "because (reason)", id: "karena (alasan)" }, [["雨が降っているから、", "Ame ga futte iru kara,"], ["行きません。", "ikimasen."]], "あめが ふっているから、....", { en: "Because it's raining, I won't go.", id: "Karena sedang hujan, saya tidak pergi." }],
  ["〜ので", "雨なので、行きません。", { en: "because (softer/objective reason)", id: "karena (alasan lebih halus/objektif)" }, [["雨なので、", "Ame nanode,"], ["行きません。", "ikimasen."]], "あめ ...、いきません。", { en: "Because it's raining, I won't go.", id: "Karena hujan, saya tidak pergi." }],
  ["AはBより〜です", "私は犬より猫が好きです。", { en: "A is more ~ than B", id: "A lebih ~ daripada B" }, [["私は", "Watashi wa"], ["犬より", "inu yori"], ["猫が", "neko ga"], ["好きです。", "suki desu."]], "わたしは いぬより ねこが すきです。", { en: "I like cats more than dogs.", id: "Saya lebih suka kucing daripada anjing." }],
  ["AとBとどちらが〜ですか", "犬と猫とどちらが好きですか。", { en: "which is more ~, A or B?", id: "mana yang lebih ~, A atau B?" }, [["犬と猫と", "Inu to neko to"], ["どちらが", "dochira ga"], ["好きですか。", "suki desu ka."]], "いぬと ねこと どちらが すきですか。", { en: "Which do you like more, dogs or cats?", id: "Mana yang lebih kamu suka, anjing atau kucing?" }],
  ["〜の中で〜が一番〜です", "果物の中でりんごが一番好きです。", { en: "among ~, ~ is the most ~", id: "di antara ~, ~ paling ~" }, [["果物の中で", "Kudamono no naka de"], ["りんごが", "ringo ga"], ["一番好きです。", "ichiban suki desu."]], "くだものの なかで りんごが いちばん すきです。", { en: "Among fruits, I like apples the most.", id: "Di antara buah-buahan, saya paling suka apel." }],
  ["〜でしょう", "明日は晴れでしょう。", { en: "probably / likely", id: "mungkin/kemungkinan besar" }, [["明日は", "Ashita wa"], ["晴れでしょう。", "hare deshou."]], "あしたは はれ ....", { en: "It will probably be sunny tomorrow.", id: "Besok mungkin cerah." }],
  ["〜ほど〜ない", "今日は昨日ほど暑くないです。", { en: "not as ~ as (negative comparison)", id: "tidak se~ (perbandingan negatif)" }, [["今日は", "Kyou wa"], ["昨日ほど", "kinou hodo"], ["暑くないです。", "atsukunai desu."]], "きょうは きのうほど あつくないです。", { en: "Today is not as hot as yesterday.", id: "Hari ini tidak sepanas kemarin." }],
];

// Sub-Tier 6.1: Kata Tunjuk (Ko-So-A-Do) (5)
const BUNPO_N5_TIER14 = [
  ["これ／それ／あれ／どれ", "これは私の本です。", { en: "this/that/that over there/which (thing)", id: "ini/itu/itu (jauh)/yang mana (benda)" }, [["これは", "Kore wa"], ["私の本です。", "watashi no hon desu."]], "これは ....", { en: "This is my book.", id: "Ini buku saya." }],
  ["この／その／あの／どの + N", "この本は面白いです。", { en: "this/that/that over there/which N", id: "N ini/itu/itu (jauh)/yang mana" }, [["この本は", "Kono hon wa"], ["面白いです。", "omoshiroi desu."]], "この ほんは ....", { en: "This book is interesting.", id: "Buku ini menarik." }],
  ["ここ／そこ／あそこ／どこ", "教室はここです。", { en: "here/there/over there/where (place)", id: "di sini/situ/sana/mana (tempat)" }, [["教室は", "Kyoushitsu wa"], ["ここです。", "koko desu."]], "きょうしつは ....", { en: "The classroom is here.", id: "Kelasnya ada di sini." }],
  ["こちら／そちら／あちら／どちら", "お手洗いはあちらです。", { en: "this way/that way/that way over there/which way (polite)", id: "arah ini/itu/sana/mana (sopan)" }, [["お手洗いは", "Otearai wa"], ["あちらです。", "achira desu."]], "おてあらいは ....", { en: "The restroom is that way.", id: "Toiletnya ke arah sana." }],
  ["こんな／そんな／あんな／どんな + N", "どんな音楽が好きですか。", { en: "this kind of/that kind of/what kind of N", id: "N seperti ini/itu/itu/bagaimana" }, [["どんな音楽が", "Donna ongaku ga"], ["好きですか。", "suki desu ka."]], "どんな おんがくが すきですか。", { en: "What kind of music do you like?", id: "Musik seperti apa yang kamu suka?" }],
];

// Sub-Tier 6.2: Partikel Akhir & Penghubung Kalimat (5)
const BUNPO_N5_TIER15 = [
  ["〜か", "これは何ですか。", { en: "question particle", id: "partikel tanya" }, [["これ", "Kore"], ["は", "wa"], ["何ですか。", "nan desu ka."]], "これは なんです ....", { en: "What is this?", id: "Ini apa?" }],
  ["〜ね", "今日は暑いですね。", { en: "seeking agreement (\"isn't it?\")", id: "mencari persetujuan (\"ya kan?\")" }, [["今日", "Kyou"], ["は", "wa"], ["暑いですね。", "atsui desu ne."]], "きょうは あついです ....", { en: "It's hot today, isn't it?", id: "Hari ini panas, ya." }],
  ["〜よ", "もう6時ですよ。", { en: "emphasizes new information", id: "menegaskan info baru" }, [["もう", "Mou"], ["6時", "roku-ji"], ["ですよ。", "desu yo."]], "もう ろくじです ....", { en: "It's already 6 o'clock!", id: "Sudah jam 6, lho!" }],
  ["NやN", "机の上に本やノートがあります。", { en: "and so on (partial, non-exhaustive listing)", id: "dan lain-lain (menyebut sebagian, tidak lengkap)" }, [["机の上に", "Tsukue no ue ni"], ["本やノートが", "hon ya nooto ga"], ["あります。", "arimasu."]], "つくえの うえに ほんや のーとが あります。", { en: "There are things like books and notebooks on the desk.", id: "Di atas meja ada buku, buku catatan, dan lain-lain." }],
  ["そして／それから／でも／しかし", "宿題をしました。それから、寝ました。", { en: "then/after that/but/however (sentence connector)", id: "kemudian/lalu/tapi/namun (penghubung antarkalimat)" }, [["宿題をしました。", "Shukudai wo shimashita."], ["それから、", "Sorekara,"], ["寝ました。", "nemashita."]], "しゅくだいを しました。それから、ねました。", { en: "I did my homework. After that, I went to sleep.", id: "Saya mengerjakan PR. Setelah itu, saya tidur." }],
];

const BUNPO_N5_TIER_KEYS = ["tier1", "tier2", "tier3", "tier4", "tier5", "tier6", "tier7", "tier8", "tier9", "tier10", "tier11", "tier12", "tier13", "tier14", "tier15"];
const BUNPO_N5_CHAPTERS = [BUNPO_N5_TIER1, BUNPO_N5_TIER2, BUNPO_N5_TIER3, BUNPO_N5_TIER4, BUNPO_N5_TIER5, BUNPO_N5_TIER6, BUNPO_N5_TIER7, BUNPO_N5_TIER8, BUNPO_N5_TIER9, BUNPO_N5_TIER10, BUNPO_N5_TIER11, BUNPO_N5_TIER12, BUNPO_N5_TIER13, BUNPO_N5_TIER14, BUNPO_N5_TIER15];
const BUNPO_N5_LEVEL_META = [
  ...BUNPO_N5_TIER_KEYS.map((id, i) => ({ id, tier: i + 1, rank: "N5" })),
  { id: "all", tier: BUNPO_N5_TIER_KEYS.length, rank: "N5" }
];

const BUNPO_N5_LEVEL_TEXT = {
  tier1: { title: { en: "Tier 1.1 — Predicate & Basic Sentences", id: "Tier 1.1 — Predikat & Kalimat Dasar" }, sample: "〜は〜です", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier2: { title: { en: "Tier 1.2 — Main Particles", id: "Tier 1.2 — Partikel Utama" }, sample: "〜は", desc: { en: "8 N5 grammar patterns.", id: "8 pola tata bahasa N5." } },
  tier3: { title: { en: "Tier 2.1 — Existence (There is / Living)", id: "Tier 2.1 — Keberadaan (Ada/Tinggal)" }, sample: "〜があります", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier4: { title: { en: "Tier 2.2 — Direction & Movement", id: "Tier 2.2 — Arah & Perpindahan" }, sample: "場所へ/に行きます・来ます・帰ります", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier5: { title: { en: "Tier 3.1 — Polite Form (Masu Form)", id: "Tier 3.1 — Bentuk Sopan (Masu Form)" }, sample: "V-masu", desc: { en: "6 N5 grammar patterns.", id: "6 pola tata bahasa N5." } },
  tier6: { title: { en: "Tier 3.2 — Te Form", id: "Tier 3.2 — Bentuk Te (Te Form)" }, sample: "V-teいます", desc: { en: "8 N5 grammar patterns.", id: "8 pola tata bahasa N5." } },
  tier7: { title: { en: "Tier 3.3 — Nai Form", id: "Tier 3.3 — Bentuk Nai (Nai Form)" }, sample: "V-nai", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier8: { title: { en: "Tier 3.4 — Dictionary Form", id: "Tier 3.4 — Bentuk Kamus (Dictionary Form)" }, sample: "V-辞書形", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier9: { title: { en: "Tier 3.5 — Past Form (Ta Form)", id: "Tier 3.5 — Bentuk Ta (Past Form)" }, sample: "V-た", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier10: { title: { en: "Tier 4.1 — i-Adjectives", id: "Tier 4.1 — Kata Sifat-i (i-Adj)" }, sample: "Adj-i（polos）", desc: { en: "6 N5 grammar patterns.", id: "6 pola tata bahasa N5." } },
  tier11: { title: { en: "Tier 4.2 — na-Adjectives", id: "Tier 4.2 — Kata Sifat-na (na-Adj)" }, sample: "Adj-na + です", desc: { en: "6 N5 grammar patterns.", id: "6 pola tata bahasa N5." } },
  tier12: { title: { en: "Tier 5.1 — Wants & Invitations", id: "Tier 5.1 — Keinginan & Ajakan" }, sample: "V-たいです", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier13: { title: { en: "Tier 5.2 — Reasons & Comparisons", id: "Tier 5.2 — Alasan & Perbandingan" }, sample: "〜から", desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." } },
  tier14: { title: { en: "Tier 6.1 — Demonstratives (Ko-So-A-Do)", id: "Tier 6.1 — Kata Tunjuk (Ko-So-A-Do)" }, sample: "これ／それ／あれ／どれ", desc: { en: "5 N5 grammar patterns.", id: "5 pola tata bahasa N5." } },
  tier15: { title: { en: "Tier 6.2 — Sentence-final Particles & Connectors", id: "Tier 6.2 — Partikel Akhir & Penghubung Kalimat" }, sample: "〜か", desc: { en: "5 N5 grammar patterns.", id: "5 pola tata bahasa N5." } },
  all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "〜たいです", desc: { en: "All 100 N5 grammar patterns shuffled into one Chapter.", id: "Seluruh 100 pola bunpō N5 diacak menjadi satu Chapter." } }
};

const BUNPO_N5_LEARN = [
  { tierKey: "tier1", title: { en: "Tier 1.1 — Predicate & Basic Sentences", id: "Tier 1.1 — Predikat & Kalimat Dasar" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER1 },
  { tierKey: "tier2", title: { en: "Tier 1.2 — Main Particles", id: "Tier 1.2 — Partikel Utama" }, desc: { en: "8 N5 grammar patterns.", id: "8 pola tata bahasa N5." }, items: BUNPO_N5_TIER2 },
  { tierKey: "tier3", title: { en: "Tier 2.1 — Existence (There is / Living)", id: "Tier 2.1 — Keberadaan (Ada/Tinggal)" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER3 },
  { tierKey: "tier4", title: { en: "Tier 2.2 — Direction & Movement", id: "Tier 2.2 — Arah & Perpindahan" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER4 },
  { tierKey: "tier5", title: { en: "Tier 3.1 — Polite Form (Masu Form)", id: "Tier 3.1 — Bentuk Sopan (Masu Form)" }, desc: { en: "6 N5 grammar patterns.", id: "6 pola tata bahasa N5." }, items: BUNPO_N5_TIER5 },
  { tierKey: "tier6", title: { en: "Tier 3.2 — Te Form", id: "Tier 3.2 — Bentuk Te (Te Form)" }, desc: { en: "8 N5 grammar patterns.", id: "8 pola tata bahasa N5." }, items: BUNPO_N5_TIER6 },
  { tierKey: "tier7", title: { en: "Tier 3.3 — Nai Form", id: "Tier 3.3 — Bentuk Nai (Nai Form)" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER7 },
  { tierKey: "tier8", title: { en: "Tier 3.4 — Dictionary Form", id: "Tier 3.4 — Bentuk Kamus (Dictionary Form)" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER8 },
  { tierKey: "tier9", title: { en: "Tier 3.5 — Past Form (Ta Form)", id: "Tier 3.5 — Bentuk Ta (Past Form)" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER9 },
  { tierKey: "tier10", title: { en: "Tier 4.1 — i-Adjectives", id: "Tier 4.1 — Kata Sifat-i (i-Adj)" }, desc: { en: "6 N5 grammar patterns.", id: "6 pola tata bahasa N5." }, items: BUNPO_N5_TIER10 },
  { tierKey: "tier11", title: { en: "Tier 4.2 — na-Adjectives", id: "Tier 4.2 — Kata Sifat-na (na-Adj)" }, desc: { en: "6 N5 grammar patterns.", id: "6 pola tata bahasa N5." }, items: BUNPO_N5_TIER11 },
  { tierKey: "tier12", title: { en: "Tier 5.1 — Wants & Invitations", id: "Tier 5.1 — Keinginan & Ajakan" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER12 },
  { tierKey: "tier13", title: { en: "Tier 5.2 — Reasons & Comparisons", id: "Tier 5.2 — Alasan & Perbandingan" }, desc: { en: "7 N5 grammar patterns.", id: "7 pola tata bahasa N5." }, items: BUNPO_N5_TIER13 },
  { tierKey: "tier14", title: { en: "Tier 6.1 — Demonstratives (Ko-So-A-Do)", id: "Tier 6.1 — Kata Tunjuk (Ko-So-A-Do)" }, desc: { en: "5 N5 grammar patterns.", id: "5 pola tata bahasa N5." }, items: BUNPO_N5_TIER14 },
  { tierKey: "tier15", title: { en: "Tier 6.2 — Sentence-final Particles & Connectors", id: "Tier 6.2 — Partikel Akhir & Penghubung Kalimat" }, desc: { en: "5 N5 grammar patterns.", id: "5 pola tata bahasa N5." }, items: BUNPO_N5_TIER15 },
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
// Kanji dikelompokkan per level JLPT (N5 dulu; N4→N1 menyusul), bukan lagi
// tier "Warrior→Immortal" — subtier di dalamnya adalah 9 Chapter tematik N5.
const KANJI_TIER_KEYS = ["tier1", "tier2", "tier3", "tier4", "tier5", "tier6", "tier7", "tier8", "tier9"];
const KANJI_LEVEL_META = [
  ...KANJI_TIER_KEYS.map((id, i) => ({ id, tier: i + 1, rank: "N5" })),
  { id: "all", tier: KANJI_TIER_KEYS.length, rank: "N5" }
];

const SCRIPTS = {
  hiragana: {
    key: "hiragana", label: "Hiragana", tabGlyph: "あ", quizType: "romaji", quizLabelKey: "quiz.guessRomaji",
    data: { tier1: HIRAGANA_TIER1, tier2: HIRAGANA_TIER2, tier3: HIRAGANA_TIER3 },
    levelText: {
      tier1: { title: { en: "Basic", id: "Dasar" }, type: { en: "Gojūon", id: "Gojūon" }, sample: "あ い う", desc: { en: "Gojūon — the 46 core characters from a to n.", id: "Gojūon — 46 karakter inti dari a sampai n." } },
      tier2: { title: { en: "Dotted", id: "Bertitik" }, type: { en: "Dakuten & Handakuten", id: "Dakuten & Handakuten" }, sample: "が ざ ぱ", desc: { en: "Dakuten & handakuten: ga, za, da, ba, pa.", id: "Dakuten & handakuten: ga, za, da, ba, pa." } },
      tier3: { title: { en: "Combined", id: "Gabungan" }, type: { en: "Yōon", id: "Yōon" }, sample: "きゃ しゅ", desc: { en: "Yōon — small combinations like kya, sha, cho.", id: "Yōon — kombinasi kecil seperti kya, sha, cho." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, type: { en: "Mixed", id: "Campuran" }, sample: "ん づ りょ", desc: { en: "All hiragana characters shuffled into one Chapter.", id: "Seluruh karakter hiragana diacak menjadi satu Chapter." } }
    },
    learnSections: [
      { tierKey: "tier1", title: { en: "Gojūon — Basic", id: "Gojūon — Dasar" }, desc: { en: "The 46 core characters. This is the foundation you need to memorize first.", id: "46 karakter inti. Ini fondasi yang wajib dihafal duluan." }, rows: GOJUON_HIRAGANA.tier1 },
      { tierKey: "tier2", title: { en: "Dakuten & Handakuten — Dotted", id: "Dakuten & Handakuten — Bertitik" }, desc: { en: "A double mark (゛) or small circle (゜) changes how the character is read.", id: "Tanda titik dua (゛) atau lingkaran kecil (゜) mengubah cara baca." }, rows: GOJUON_HIRAGANA.tier2 },
      { tierKey: "tier3", title: { en: "Yōon — Combined", id: "Yōon — Gabungan" }, desc: { en: "A consonant + small ゃゅょ, read together as one syllable.", id: "Konsonan + ゃゅょ kecil yang dibaca sebagai satu suku kata." }, rows: GOJUON_HIRAGANA.tier3 },
      { tierKey: "sokuon", title: { en: "Sokuon — Small っ", id: "Sokuon — っ Kecil" }, desc: { en: "A small っ before a consonant means a short held pause — double that consonant when reading it, e.g. がっこう (gakkou), きって (kitte).", id: "っ kecil sebelum konsonan berarti jeda singkat — konsonan berikutnya dibaca ganda, contoh: がっこう (gakkou), きって (kitte)." }, items: HIRAGANA_SOKUON_WORDS },
      { tierKey: "choon", title: { en: "Chōon — Long Vowel", id: "Chōon — Vokal Panjang" }, desc: { en: "A long vowel sound made by doubling the vowel. The a/i/u rows usually double the same kana; the e/o rows usually lengthen with い / う instead, e.g. おかあさん (okaasan), おにいさん (oniisan), くうき (kuuki), せんせい (sensei), とうきょう (toukyou).", id: "Bunyi vokal panjang yang dibuat dengan menggandakan vokalnya. Baris a/i/u biasanya menggandakan kana yang sama; baris e/o biasanya dipanjangkan dengan い / う, contoh: おかあさん (okaasan), おにいさん (oniisan), くうき (kuuki), せんせい (sensei), とうきょう (toukyou)." }, items: HIRAGANA_CHOON_WORDS },
      { tierKey: "hatsuon", title: { en: "Hatsuon — Nasal ん", id: "Hatsuon — ん Nasal" }, desc: { en: "ん shifts its sound depending on what comes right after it — like \"m\" before m/b/p, like \"n\" before n/t/d/s/z/r, like \"ng\" before k/g, and a plain nasalized n before a vowel/y/w or at the end of a word.", id: "ん berubah bunyinya tergantung huruf sesudahnya — seperti \"m\" sebelum m/b/p, seperti \"n\" sebelum n/t/d/s/z/r, seperti \"ng\" sebelum k/g, dan tetap bunyi n nasal biasa sebelum vokal/y/w atau di akhir kata." }, items: HIRAGANA_HATSUON_WORDS }
    ]
  },
  katakana: {
    key: "katakana", label: "Katakana", tabGlyph: "ア", quizType: "romaji", quizLabelKey: "quiz.guessRomaji",
    data: { tier1: KATAKANA_TIER1, tier2: KATAKANA_TIER2, tier3: KATAKANA_TIER3 },
    levelText: {
      tier1: { title: { en: "Basic", id: "Dasar" }, type: { en: "Gojūon", id: "Gojūon" }, sample: "ア イ ウ", desc: { en: "The 46 core katakana characters, from a to n.", id: "46 karakter inti katakana, dari a sampai n." } },
      tier2: { title: { en: "Dotted", id: "Bertitik" }, type: { en: "Dakuten & Handakuten", id: "Dakuten & Handakuten" }, sample: "ガ ザ パ", desc: { en: "Katakana dakuten & handakuten: ga, za, da, ba, pa.", id: "Dakuten & handakuten katakana: ga, za, da, ba, pa." } },
      tier3: { title: { en: "Combined", id: "Gabungan" }, type: { en: "Yōon", id: "Yōon" }, sample: "キャ シュ", desc: { en: "Katakana yōon — small combinations like kya, sha, cho.", id: "Yōon katakana — kombinasi kecil seperti kya, sha, cho." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, type: { en: "Mixed", id: "Campuran" }, sample: "ン ヅ リョ", desc: { en: "All katakana characters shuffled into one Chapter.", id: "Seluruh karakter katakana diacak menjadi satu Chapter." } }
    },
    learnSections: [
      { tierKey: "tier1", title: { en: "Gojūon — Basic", id: "Gojūon — Dasar" }, desc: { en: "The 46 core katakana characters, mostly used for loanwords and foreign names.", id: "46 karakter inti katakana, biasanya dipakai untuk kata serapan asing dan nama." }, rows: GOJUON_KATAKANA.tier1 },
      { tierKey: "tier2", title: { en: "Dakuten & Handakuten — Dotted", id: "Dakuten & Handakuten — Bertitik" }, desc: { en: "Just like hiragana, the dot marks change how the consonant is read.", id: "Sama seperti hiragana, tanda titik mengubah cara baca konsonannya." }, rows: GOJUON_KATAKANA.tier2 },
      { tierKey: "tier3", title: { en: "Yōon — Combined", id: "Yōon — Gabungan" }, desc: { en: "A consonant + small ャュョ, read together as one syllable.", id: "Konsonan + ャュョ kecil, dibaca sebagai satu suku kata." }, rows: GOJUON_KATAKANA.tier3 },
      { tierKey: "sokuon", title: { en: "Sokuon — Small ッ", id: "Sokuon — ッ Kecil" }, desc: { en: "A small ッ before a consonant means a short held pause — double that consonant when reading it, e.g. サッカー (sakkaa), ポケット (poketto). Very common in loanwords.", id: "ッ kecil sebelum konsonan berarti jeda singkat — konsonan berikutnya dibaca ganda, contoh: サッカー (sakkaa), ポケット (poketto). Sangat umum di kata serapan asing." }, items: KATAKANA_SOKUON_WORDS },
      { tierKey: "choonpu", title: { en: "Chōonpu — Long Vowel Mark", id: "Chōonpu — Tanda Vokal Panjang" }, desc: { en: "The dash ー lengthens the vowel that comes right before it — unlike hiragana, katakana doesn't double the vowel kana, e.g. コーヒー (koohii), ケーキ (keeki). Extremely common in loanwords.", id: "Tanda garis ー memanjangkan vokal tepat sebelumnya — berbeda dari hiragana, katakana tidak menggandakan kana vokalnya, contoh: コーヒー (koohii), ケーキ (keeki). Sangat umum di kata serapan asing." }, items: KATAKANA_CHOONPU_WORDS },
      { tierKey: "hatsuon", title: { en: "Hatsuon — Nasal ン", id: "Hatsuon — ン Nasal" }, desc: { en: "ン shifts its sound depending on what comes right after it — like \"m\" before p/b/m, like \"n\" before n/t/d/s/z/r, like \"ng\" before k/g, and a plain nasalized n before a vowel/y/w or at the end of a word.", id: "ン berubah bunyinya tergantung huruf sesudahnya — seperti \"m\" sebelum p/b/m, seperti \"n\" sebelum n/t/d/s/z/r, seperti \"ng\" sebelum k/g, dan tetap bunyi n nasal biasa sebelum vokal/y/w atau di akhir kata." }, items: KATAKANA_HATSUON_WORDS },
      { tierKey: "tokushuonW", title: { en: "Tokushuon — W", id: "Tokushuon — W" }, desc: { en: "Extended katakana invented to write foreign sounds — ウ + small ィ/ェ/ォ for the \"wi/we/wo\" sounds, distinct from the plain わ/を, e.g. ウィスキー (wisukii), ウェブ (webu), ウォーキング (wookingu).", id: "Katakana tambahan yang dibuat untuk menulis bunyi asing — ウ + ィ/ェ/ォ kecil untuk bunyi \"wi/we/wo\", berbeda dari わ/を biasa, contoh: ウィスキー (wisukii), ウェブ (webu), ウォーキング (wookingu)." }, items: KATAKANA_TOKUSHUON_W_WORDS },
      { tierKey: "tokushuonF", title: { en: "Tokushuon — F", id: "Tokushuon — F" }, desc: { en: "Extended katakana invented to write foreign sounds — フ + small ァ/ィ/ェ/ォ for the \"fa/fi/fe/fo\" sounds that plain フ (fu) alone can't show, e.g. ファミリー (famirii), フィルム (firumu), カフェ (kafe), フォーク (fooku).", id: "Katakana tambahan yang dibuat untuk menulis bunyi asing — フ + ァ/ィ/ェ/ォ kecil untuk bunyi \"fa/fi/fe/fo\" yang tidak bisa ditunjukkan フ (fu) biasa, contoh: ファミリー (famirii), フィルム (firumu), カフェ (kafe), フォーク (fooku)." }, items: KATAKANA_TOKUSHUON_F_WORDS },
      { tierKey: "tokushuonV", title: { en: "Tokushuon — V", id: "Tokushuon — V" }, desc: { en: "Extended katakana invented to write foreign sounds — ヴ (u + dakuten) + small ァ/ィ/ェ/ォ for the \"va/vi/ve/vo\" sounds, distinct from the b-row バ/ビ/ブ/ベ/ボ, e.g. ヴァイオリン (vaiorin), ヴィーナス (viinasu), ヴェール (veeru), ヴォーカル (vookaru).", id: "Katakana tambahan yang dibuat untuk menulis bunyi asing — ヴ (u + dakuten) + ァ/ィ/ェ/ォ kecil untuk bunyi \"va/vi/ve/vo\", berbeda dari deret b: バ/ビ/ブ/ベ/ボ, contoh: ヴァイオリン (vaiorin), ヴィーナス (viinasu), ヴェール (veeru), ヴォーカル (vookaru)." }, items: KATAKANA_TOKUSHUON_V_WORDS },
      { tierKey: "tokushuonTD", title: { en: "Tokushuon — T & D", id: "Tokushuon — T & D" }, desc: { en: "Extended katakana invented to write foreign sounds — テ/デ + small ィ for \"ti/di\" (distinct from ち/ji), and ト/ド + small ゥ for \"tu/du\" (distinct from つ/zu), e.g. パーティー (paatii), キャンディ (kyandi), タトゥー (tatuu), ヒンドゥー (hindu).", id: "Katakana tambahan yang dibuat untuk menulis bunyi asing — テ/デ + ィ kecil untuk \"ti/di\" (berbeda dari ち/ji), dan ト/ド + ゥ kecil untuk \"tu/du\" (berbeda dari つ/zu), contoh: パーティー (paatii), キャンディ (kyandi), タトゥー (tatuu), ヒンドゥー (hindu)." }, items: KATAKANA_TOKUSHUON_TD_WORDS },
      { tierKey: "tokushuonShChJ", title: { en: "Tokushuon — Sh, Ch, J", id: "Tokushuon — Sh, Ch, J" }, desc: { en: "Extended katakana invented to write foreign sounds — シ/チ/ジ + small ェ for \"she/che/je\", distinct from せ/te/ze, e.g. シェフ (shefu), チェック (chekku), ジェットコースター (jettokoosutaa).", id: "Katakana tambahan yang dibuat untuk menulis bunyi asing — シ/チ/ジ + ェ kecil untuk \"she/che/je\", berbeda dari せ/te/ze, contoh: シェフ (shefu), チェック (chekku), ジェットコースター (jettokoosutaa)." }, items: KATAKANA_TOKUSHUON_SHCHJ_WORDS },
      { tierKey: "tokushuonTs", title: { en: "Tokushuon — Ts", id: "Tokushuon — Ts" }, desc: { en: "Extended katakana invented to write foreign sounds — ツ + small ァ/ィ/ェ/ォ for \"tsa/tsi/tse/tso\", distinct from た/ち/せ/そ, e.g. ピッツァ (pittsua), ヴェネツィア (venetsia), ツェッペリン (tsepperin), スケルツォ (sukerutsuo).", id: "Katakana tambahan yang dibuat untuk menulis bunyi asing — ツ + ァ/ィ/ェ/ォ kecil untuk \"tsa/tsi/tse/tso\", berbeda dari た/ち/せ/そ, contoh: ピッツァ (pittsua), ヴェネツィア (venetsia), ツェッペリン (tsepperin), スケルツォ (sukerutsuo)." }, items: KATAKANA_TOKUSHUON_TS_WORDS },
      { tierKey: "tokushuonOther", title: { en: "Tokushuon — Other", id: "Tokushuon — Lainnya" }, desc: { en: "A mixed set of rarer extended katakana — イェ (ye), クァ/グァ (kwa/gwa), and デュ (dyu) — each distinct from its plain-kana neighbor, e.g. イェルサレム (yerusaremu), クァルテット (kwarutetto), グァテマラ (gwatemara), デュエット (dyuetto).", id: "Kumpulan katakana tambahan yang lebih jarang — イェ (ye), クァ/グァ (kwa/gwa), dan デュ (dyu) — masing-masing berbeda dari kana polos di sebelahnya, contoh: イェルサレム (yerusaremu), クァルテット (kwarutetto), グァテマラ (gwatemara), デュエット (dyuetto)." }, items: KATAKANA_TOKUSHUON_OTHER_WORDS }
    ]
  },
  kanji: {
    key: "kanji", label: "Kanji N5", tabGlyph: "漢", quizType: "meaning",
    quizLabelKey: "quiz.guessMeaning", quizLabelRomajiKey: "quiz.guessRomaji", hasVariants: true,
    // "kanjiForm": tipe soal ke-4 khusus Kanji N5 — kebalikan dari "romaji"/"meaning":
    // yang ditunjukkan adalah bacaan hiragana-nya (dari dataKana), dan yang harus
    // ditebak adalah kanji mana yang tepat untuk bacaan tersebut (pilihan jawabannya
    // berupa karakter kanji, bukan romaji/arti).
    quizLabelKeys: { meaning: "quiz.guessMeaning", romaji: "quiz.guessRomaji", kanjiForm: "quiz.guessKanjiForm" },
    extraLabelKeys: { meaning: "quiz.romajiLabel", romaji: "quiz.meaningLabel", kanjiForm: "quiz.meaningLabel" },
    variantButtons: [
      { key: "meaning", icon: "🈺", i18nKey: "quiz.meaning" },
      { key: "romaji", icon: "🔤", label: "Romaji" },
      { key: "kanjiForm", icon: "🈶", i18nKey: "quiz.kanjiFormBtn" },
      { key: "both", icon: "🎲", i18nKey: "quiz.mixed" }
    ],
    // Kanji punya 9 subtier (Chapter N5, bukan lagi cuma tier1/2/3) — levelMeta
    // custom ini dipakai renderLevels() sebagai pengganti LEVEL_META global.
    tierKeys: KANJI_TIER_KEYS,
    levelMeta: KANJI_LEVEL_META,
    data: Object.fromEntries(KANJI_TIER_KEYS.map((tk, i) => [tk, KANJI_N5_CHAPTERS[i].map(([c, , m]) => [c, tf(m)])])),
    dataRomaji: Object.fromEntries(KANJI_TIER_KEYS.map((tk, i) => [tk, KANJI_N5_CHAPTERS[i].map(([c, r]) => [c, primaryReading(r)])])),
    // dataKana: bacaan hiragana tiap kanji (elemen ke-4 di KANJI_N5_CH*), ditampilkan
    // sebagai furigana pendamping di feedback kuis setelah user menjawab.
    dataKana: Object.fromEntries(KANJI_TIER_KEYS.map((tk, i) => [tk, KANJI_N5_CHAPTERS[i].map(([c, , , k]) => [c, k])])),
    levelText: {
      tier1: { title: { en: "Chapter 1 — Numbers & Counting", id: "Chapter 1 — Angka & Jumlah" }, sample: "一 二 十", desc: { en: "14 kanji: numbers and counting.", id: "14 kanji: angka dan hitungan." } },
      tier2: { title: { en: "Chapter 2 — Nature, Elements & Weather", id: "Chapter 2 — Alam, Elemen & Cuaca" }, sample: "日 山 天", desc: { en: "11 kanji: nature and the elements.", id: "11 kanji: alam dan unsur-unsurnya." } },
      tier3: { title: { en: "Chapter 3 — Time & Seasons", id: "Chapter 3 — Waktu & Musim" }, sample: "年 朝 夜", desc: { en: "11 kanji: time of day and calendar words.", id: "11 kanji: waktu dalam sehari dan kalender." } },
      tier4: { title: { en: "Chapter 4 — Direction & Position", id: "Chapter 4 — Arah & Posisi" }, sample: "上 東 西", desc: { en: "10 kanji: directions and positions.", id: "10 kanji: arah dan posisi." } },
      tier5: { title: { en: "Chapter 5 — People, Family & Relationships", id: "Chapter 5 — Manusia, Keluarga & Hubungan" }, sample: "人 父 友", desc: { en: "12 kanji: people, family, and body parts.", id: "12 kanji: orang, keluarga, dan anggota tubuh." } },
      tier6: { title: { en: "Chapter 6 — Traits, Size & Colors", id: "Chapter 6 — Sifat, Ukuran & Warna" }, sample: "大 高 青", desc: { en: "12 kanji: traits, sizes, and colors.", id: "12 kanji: sifat, ukuran, dan warna." } },
      tier7: { title: { en: "Chapter 7 — Places, Buildings & Transportation", id: "Chapter 7 — Tempat, Bangunan & Transportasi" }, sample: "国 駅 空", desc: { en: "11 kanji: places, buildings, and transportation.", id: "11 kanji: tempat, bangunan, dan transportasi." } },
      tier8: { title: { en: "Chapter 8 — Basic Verbs & Activities", id: "Chapter 8 — Kata Kerja Dasar & Aktivitas" }, sample: "行 見 読", desc: { en: "10 kanji: basic everyday verbs.", id: "10 kanji: kata kerja dasar sehari-hari." } },
      tier9: { title: { en: "Chapter 9 — Life Concepts & More Verbs", id: "Chapter 9 — Konsep Kehidupan & Kata Kerja Tambahan" }, sample: "買 学 花", desc: { en: "9 kanji: everyday life concepts and more verbs.", id: "9 kanji: konsep kehidupan sehari-hari dan kata kerja tambahan." } },
      all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "一 学 会", desc: { en: "All 100 N5 kanji shuffled into one Chapter.", id: "Seluruh 100 kanji N5 diacak menjadi satu Chapter." } }
    },
    learnCards: [
      { tierKey: "tier1", title: { en: "Chapter 1 — Numbers & Counting", id: "Chapter 1 — Angka & Jumlah" }, desc: { en: "14 kanji: numbers and counting.", id: "14 kanji: angka dan hitungan." }, items: KANJI_N5_CH1 },
      { tierKey: "tier2", title: { en: "Chapter 2 — Nature, Elements & Weather", id: "Chapter 2 — Alam, Elemen & Cuaca" }, desc: { en: "11 kanji: nature and the elements.", id: "11 kanji: alam dan unsur-unsurnya." }, items: KANJI_N5_CH2 },
      { tierKey: "tier3", title: { en: "Chapter 3 — Time & Seasons", id: "Chapter 3 — Waktu & Musim" }, desc: { en: "11 kanji: time of day and calendar words.", id: "11 kanji: waktu dalam sehari dan kalender." }, items: KANJI_N5_CH3 },
      { tierKey: "tier4", title: { en: "Chapter 4 — Direction & Position", id: "Chapter 4 — Arah & Posisi" }, desc: { en: "10 kanji: directions and positions.", id: "10 kanji: arah dan posisi." }, items: KANJI_N5_CH4 },
      { tierKey: "tier5", title: { en: "Chapter 5 — People, Family & Relationships", id: "Chapter 5 — Manusia, Keluarga & Hubungan" }, desc: { en: "12 kanji: people, family, and body parts.", id: "12 kanji: orang, keluarga, dan anggota tubuh." }, items: KANJI_N5_CH5 },
      { tierKey: "tier6", title: { en: "Chapter 6 — Traits, Size & Colors", id: "Chapter 6 — Sifat, Ukuran & Warna" }, desc: { en: "12 kanji: traits, sizes, and colors.", id: "12 kanji: sifat, ukuran, dan warna." }, items: KANJI_N5_CH6 },
      { tierKey: "tier7", title: { en: "Chapter 7 — Places, Buildings & Transportation", id: "Chapter 7 — Tempat, Bangunan & Transportasi" }, desc: { en: "11 kanji: places, buildings, and transportation.", id: "11 kanji: tempat, bangunan, dan transportasi." }, items: KANJI_N5_CH7 },
      { tierKey: "tier8", title: { en: "Chapter 8 — Basic Verbs & Activities", id: "Chapter 8 — Kata Kerja Dasar & Aktivitas" }, desc: { en: "10 kanji: basic everyday verbs.", id: "10 kanji: kata kerja dasar sehari-hari." }, items: KANJI_N5_CH8 },
      { tierKey: "tier9", title: { en: "Chapter 9 — Life Concepts & More Verbs", id: "Chapter 9 — Konsep Kehidupan & Kata Kerja Tambahan" }, desc: { en: "9 kanji: everyday life concepts and more verbs.", id: "9 kanji: konsep kehidupan sehari-hari dan kata kerja tambahan." }, items: KANJI_N5_CH9 }
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
    // Kotoba N5 sekarang punya 7 Tier / 21 Sub-Tier (bukan lagi cuma tier1/2/3) —
    // tierKeys + levelMeta custom ini dipakai renderLevels() sebagai pengganti
    // LEVEL_META global, sama persis seperti pola yang dipakai Kanji N5 (9 Chapter)
    // & Bunpō N5 (15 Sub-Tier).
    tierKeys: KOTOBA_TIER_KEYS,
    levelMeta: KOTOBA_N5_LEVEL_META,
    // groups: dipakai renderLevels() utk nge-render 24 sub-tier di atas sebagai
    // Nested Accordion (7 Chapter + kartu "All Mixed" berdiri sendiri = 8).
    groups: KOTOBA_TIER_GROUPS,
    data: Object.fromEntries(KOTOBA_TIER_KEYS.map((tk, i) => [tk, KOTOBA_N5_CHAPTERS[i].map(([c, , m]) => [c, tf(m)])])),
    dataRomaji: Object.fromEntries(KOTOBA_TIER_KEYS.map((tk, i) => [tk, KOTOBA_N5_CHAPTERS[i].map(([c, r]) => [c, r])])),
    // dataKanji: bentuk kanji tiap kata (elemen ke-7 di KOTOBA_N5_CHAPTERS, "" kalau
    // katanya memang biasa ditulis kana saja), ditampilkan sebagai info tambahan
    // di feedback kuis setelah user menjawab.
    dataKanji: Object.fromEntries(KOTOBA_TIER_KEYS.map((tk, i) => [tk, KOTOBA_N5_CHAPTERS[i].map(([c, , , , , , k]) => [c, k || ""])])),
    levelText: KOTOBA_N5_LEVEL_TEXT,
    learnVocab: KOTOBA_N5_LEARN
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
    // Bunpō N5 sekarang 100 pola / 15 sub-tier (bukan 36 pola / 3 tier lagi) —
    // tierKeys + levelMeta custom ini dipakai renderLevels() sebagai pengganti
    // LEVEL_META global, sama persis seperti pola yang dipakai Kanji N5 (9 Chapter).
    tierKeys: BUNPO_N5_TIER_KEYS,
    levelMeta: BUNPO_N5_LEVEL_META,
    data: Object.fromEntries(BUNPO_N5_TIER_KEYS.map((tk, i) => [tk, BUNPO_N5_CHAPTERS[i].map(([c, , m]) => [c, tf(m)])])),
    // dataKalimat: soal "Kalimat" — [contoh_kalimat, pola] per tingkatan. Tidak
    // perlu di-resolve ulang tiap ganti bahasa karena isinya murni bahasa Jepang.
    dataKalimat: Object.fromEntries(BUNPO_N5_TIER_KEYS.map((tk, i) => [tk, BUNPO_N5_CHAPTERS[i].map(([c, ex]) => [ex, c])])),
    // dataKalimatBlank: sama seperti dataKalimat tapi soalnya versi romaji
    // tanpa kanji dengan partikel/pola-nya dikosongkan "..." — dipakai khusus
    // sebagai teks SOAL mode "Tebak Partikel!" supaya jawabannya (kanji/pola)
    // tidak kebocoran. dataKalimat aslinya tetap dipakai buat info "extra"
    // (contoh kalimat lengkap) yang muncul setelah jawab soal mode "Fungsi".
    dataKalimatBlank: Object.fromEntries(BUNPO_N5_TIER_KEYS.map((tk, i) => [tk, BUNPO_N5_CHAPTERS[i].map(([c, , , , blank]) => [blank, c])])),
    levelText: BUNPO_N5_LEVEL_TEXT,
    learnGrammar: BUNPO_N5_LEARN
  }
};

// build the "all" (Kaisar) pool for every script — pakai s.tierKeys kalau
// script itu punya jumlah subtier custom (mis. Kanji N5 = 9 Chapter),
// selain itu default ke tier1/2/3 seperti sebelumnya.
Object.values(SCRIPTS).forEach(s => {
  const tks = s.tierKeys || ["tier1", "tier2", "tier3"];
  const cat = (obj) => tks.reduce((acc, tk) => acc.concat(obj[tk]), []);
  s.data.all = cat(s.data);
  if (s.dataRomaji) {
    s.dataRomaji.all = cat(s.dataRomaji);
  }
  if (s.dataKana) {
    s.dataKana.all = cat(s.dataKana);
  }
  if (s.dataKanji) {
    s.dataKanji.all = cat(s.dataKanji);
  }
  if (s.dataKalimat) {
    s.dataKalimat.all = cat(s.dataKalimat);
  }
  if (s.dataKalimatBlank) {
    s.dataKalimatBlank.all = cat(s.dataKalimatBlank);
  }
});

// dipindah ke sini (dari dekat definisi renderProfile) karena renderProfile ->
// renderSpeedrunRecords butuh SCRIPTS, yang baru selesai dibangun di titik ini.
renderProfile();
renderTitleCollection();
renderSpeedrunRecords();

// kanji/kotoba/bunpo punya "arti" (meaning) yang disimpan sebagai {en,id} di data
// mentahnya (KANJI_TIER*/KOTOBA_TIER*/BUNPO_N5_TIER*) supaya bisa diresolve ulang
// tiap kali bahasa diganti — tanpa ini, arti/fungsi di quiz & tabel belajar akan
// tetap dalam bahasa lama sampai halaman di-reload. Dipanggil sekali di awal
// (lewat mapping .map(...) di atas) dan lagi setiap kali applyLanguage() jalan.
function rebuildMeaningPools() {
  SCRIPTS.kanji.data = Object.fromEntries(KANJI_TIER_KEYS.map((tk, i) => [tk, KANJI_N5_CHAPTERS[i].map(([c, , m]) => [c, tf(m)])]));
  SCRIPTS.kotoba.data = Object.fromEntries(KOTOBA_TIER_KEYS.map((tk, i) => [tk, KOTOBA_N5_CHAPTERS[i].map(([c, , m]) => [c, tf(m)])]));
  SCRIPTS.bunpo.data = Object.fromEntries(BUNPO_N5_TIER_KEYS.map((tk, i) => [tk, BUNPO_N5_CHAPTERS[i].map(([c, , m]) => [c, tf(m)])]));
  [SCRIPTS.kanji, SCRIPTS.kotoba, SCRIPTS.bunpo].forEach(s => {
    const tks = s.tierKeys || ["tier1", "tier2", "tier3"];
    s.data.all = tks.reduce((acc, tk) => acc.concat(s.data[tk]), []);
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
  section.items.forEach(([word, reading, meaning, example, exampleSegments, exampleTranslation, kanjiWord, kanjiExample, usage]) => {
    const card = document.createElement("div");
    card.className = "grammar-card vocab-card";
    const kanjiWordHtml = kanjiWord ? `<span class="vocab-kanji">${kanjiWord}</span>` : "";
    const mainHtml = `
      <div class="vocab-main">
        <button type="button" class="vocab-word-btn" data-speak="${word}" aria-label="${t("learn.listenPronunciation", { text: word, reading: reading })}">
          <span class="vocab-word-stack">
            ${kanjiWordHtml}
            <span class="grammar-pattern vocab-word">${word}</span>
          </span>
          <span class="cell-audio-icon">🔊</span>
        </button>
        <span class="vocab-reading">${reading}</span>
        <span class="grammar-meaning">${tf(meaning)}</span>
      </div>
    `;
    const usageHtml = usage ? `
      <div class="vocab-usage">
        <span class="vocab-usage-label">${t("learn.usageNote")}</span>
        <p class="vocab-usage-text">${tf(usage)}</p>
      </div>
    ` : "";
    const segmentsHtml = Array.isArray(exampleSegments)
      ? exampleSegments.map(([seg, rom]) => `
          <button type="button" class="segment-chip" data-speak="${seg}" aria-label="${t("learn.listenSegment", { seg, rom })}">
            <span class="seg-jp">${seg}</span>
            <span class="seg-romaji">${rom}</span>
          </button>`).join("")
      : "";
    const kanjiExampleHtml = kanjiExample ? `<span class="vocab-example-kanji">${kanjiExample}</span>` : "";
    const exampleHtml = example ? `
      <div class="vocab-example-block">
        <div class="grammar-example-row">
          <div class="vocab-example-stack">
            ${kanjiExampleHtml}
            <span class="grammar-example">${example}</span>
          </div>
          <button type="button" class="speak-btn" data-speak="${example}" aria-label="${t("learn.listenExample")}">🔊</button>
        </div>
        <div class="grammar-segments">${segmentsHtml}</div>
        ${exampleTranslation ? `<span class="vocab-example-translation">${tf(exampleTranslation)}</span>` : ""}
      </div>
    ` : "";
    card.innerHTML = `<div class="vocab-top">${mainHtml}${usageHtml}</div>${exampleHtml}`;
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

// khusus Kotoba: 24 sub-tier vocab (KOTOBA_N5_LEARN) kepanjangan kalau
// ditampilkan flat sekaligus di layar Belajar, jadi dikelompokkan jadi
// accordion 7 Chapter — persis pengelompokan (KOTOBA_TIER_GROUPS) yang sudah
// dipakai renderLevels() di Mode Kuis, biar konsisten & user yang udah kenal
// struktur Chapter-nya dari situ langsung familiar di sini juga.
function renderLearnAccordionGroups(script) {
  const wrap = document.createElement("div");
  wrap.className = "learn-accordion";
  const sectionsByTierKey = Object.fromEntries(script.learnVocab.map(s => [s.tierKey, s]));
  const allHeaders = [];

  script.groups.forEach(group => {
    const groupEl = document.createElement("div");
    groupEl.className = "tier-group";

    const header = document.createElement("button");
    header.type = "button";
    header.className = "tier-group-header";
    header.setAttribute("aria-expanded", "false");
    header.innerHTML = `
      <span class="tier-group-chapter">${t("levels.groupChapter", { n: group.chapterNum })}</span>
      <span class="tier-group-kana">${group.sample}</span>
      <span class="tier-group-text">
        <span class="tier-group-title">${tf(group.title).replace(/^Chapter\s*\d+\s*—\s*/i, "")}</span>
        <span class="tier-group-desc">${tf(group.desc)}</span>
      </span>
      <span class="tier-group-caret" aria-hidden="true"></span>
    `;

    const panelWrap = document.createElement("div");
    panelWrap.className = "tier-group-panel-wrap";
    const panel = document.createElement("div");
    panel.className = "tier-group-panel learn-group-content";
    group.tierKeys.forEach(tk => {
      const section = sectionsByTierKey[tk];
      if (section) panel.appendChild(renderVocabTables(section));
    });
    panelWrap.appendChild(panel);

    // sama kaya accordion Mode Kuis: cuma 1 Chapter yang bisa kebuka sekaligus.
    header.addEventListener("click", () => {
      const willOpen = !header.classList.contains("open");
      allHeaders.forEach(h => {
        h.classList.remove("open");
        h.setAttribute("aria-expanded", "false");
        h.nextElementSibling.classList.remove("open");
      });
      if (willOpen) {
        header.classList.add("open");
        header.setAttribute("aria-expanded", "true");
        panelWrap.classList.add("open");
      }
    });

    groupEl.appendChild(header);
    groupEl.appendChild(panelWrap);
    wrap.appendChild(groupEl);
    allHeaders.push(header);
  });

  return wrap;
}

function renderLearnTables(scriptKey) {
  currentLearnScript = scriptKey;
  const script = SCRIPTS[scriptKey];
  const wrap = document.getElementById("learn-tables");
  wrap.innerHTML = "";
  if (script.learnSections) {
    script.learnSections.forEach(section => {
      wrap.appendChild(section.rows ? renderGojuonTables(section) : renderVocabTables(section));
    });
  } else if (script.learnVocab && script.groups) {
    wrap.appendChild(renderLearnAccordionGroups(script));
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
  const learnFlashBtn = document.getElementById("btn-learn-flashcards");
  if (learnFlashBtn) learnFlashBtn.classList.toggle("hidden", scriptKey !== "kotoba" && scriptKey !== "kanji");
  setupLearnSearchAndNav(scriptKey);
}

/* ---------------- learn mode: search + quick nav + scroll-to-top ---------------- */
let learnSearchQuery = "";
let learnSearchNavEnabled = false;
const LEARN_SEARCH_NAV_SCRIPTS = ["hiragana", "katakana", "kotoba", "bunpo", "kanji"];

function learnSectionLabel(sectionEl) {
  const titleEl = sectionEl.querySelector(".learn-section-title");
  if (!titleEl || !titleEl.childNodes.length) return "";
  return titleEl.childNodes[0].textContent.trim();
}

function setupLearnSearchAndNav(scriptKey) {
  const tablesWrap = document.getElementById("learn-tables");
  const toolbarEl = document.getElementById("learn-toolbar");
  const chipsWrap = document.getElementById("learn-nav-chips");
  const noResultsEl = document.getElementById("learn-search-no-results");
  learnSearchNavEnabled = LEARN_SEARCH_NAV_SCRIPTS.includes(scriptKey);

  chipsWrap.innerHTML = "";

  if (!learnSearchNavEnabled) {
    toolbarEl.classList.add("hidden");
    chipsWrap.classList.add("hidden");
    noResultsEl.classList.add("hidden");
    updateLearnScrollTopVisibility();
    return;
  }

  toolbarEl.classList.remove("hidden");

  const sections = tablesWrap.querySelectorAll(".learn-section");
  if (sections.length > 1) {
    chipsWrap.classList.remove("hidden");
    sections.forEach((sectionEl, idx) => {
      sectionEl.id = `learn-sec-${scriptKey}-${idx}`;
      const label = learnSectionLabel(sectionEl) || `#${idx + 1}`;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "learn-nav-chip";
      chip.dataset.target = sectionEl.id;
      chip.textContent = label;
      chip.setAttribute("aria-label", t("aria.jumpToSection", { label }));
      chip.addEventListener("click", () => {
        // kalau section ini dinaungi accordion Chapter yang lagi ketutup (Kotoba),
        // buka dulu Chapter-nya (perilaku sama kaya klik manual header — cuma 1
        // yang kebuka), baru scroll setelah animasi buka-nya (.25s) kelar, biar
        // posisi scroll-nya udah pas sesuai tinggi akhir panelnya.
        const parentGroup = sectionEl.closest(".tier-group");
        let justOpened = false;
        if (parentGroup) {
          const header = parentGroup.querySelector(".tier-group-header");
          const panelWrap = parentGroup.querySelector(".tier-group-panel-wrap");
          if (header && panelWrap && !header.classList.contains("open")) {
            document.querySelectorAll("#learn-tables .tier-group-header.open").forEach(h => {
              h.classList.remove("open");
              h.setAttribute("aria-expanded", "false");
              h.nextElementSibling.classList.remove("open");
            });
            header.classList.add("open");
            header.setAttribute("aria-expanded", "true");
            panelWrap.classList.add("open");
            justOpened = true;
          }
        }
        if (justOpened) {
          setTimeout(() => sectionEl.scrollIntoView({ behavior: "smooth", block: "start" }), 260);
        } else {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      chipsWrap.appendChild(chip);
    });
  } else {
    chipsWrap.classList.add("hidden");
  }

  applyLearnSearch();
  updateLearnScrollTopVisibility();
}

function applyLearnSearch() {
  if (!learnSearchNavEnabled) return;
  const tablesWrap = document.getElementById("learn-tables");
  const statusEl = document.getElementById("learn-search-status");
  const noResultsEl = document.getElementById("learn-search-no-results");
  const clearBtn = document.getElementById("learn-search-clear");
  if (!tablesWrap) return;

  const query = learnSearchQuery.trim().toLowerCase();
  clearBtn.classList.toggle("hidden", !learnSearchQuery);

  const sections = tablesWrap.querySelectorAll(".learn-section");
  let totalMatches = 0;

  sections.forEach(sectionEl => {
    const items = sectionEl.querySelectorAll(".kana-cell.filled, .kanji-cell, .grammar-card");
    let sectionMatches = 0;
    items.forEach(item => {
      const isMatch = !query || item.textContent.toLowerCase().includes(query);
      item.classList.toggle("no-match", !isMatch);
      if (isMatch) { sectionMatches++; totalMatches++; }
    });
    // gojūon tables also have a row label (e.g. "K", "S", "T") that sits
    // outside the .kana-cell selector above — without this, searching hides
    // the empty/mismatched cells but leaves that leftover label floating.
    sectionEl.querySelectorAll(".kana-row").forEach(rowEl => {
      const filledCells = rowEl.querySelectorAll(".kana-cell.filled");
      const rowHasMatch = Array.from(filledCells).some(cell => !cell.classList.contains("no-match"));
      rowEl.classList.toggle("no-match", filledCells.length > 0 && !rowHasMatch);
    });
    const sectionHasItems = items.length > 0;
    sectionEl.classList.toggle("no-match", sectionHasItems && sectionMatches === 0);
    const chip = document.querySelector(`.learn-nav-chip[data-target="${sectionEl.id}"]`);
    if (chip) chip.classList.toggle("no-match", sectionHasItems && sectionMatches === 0);
  });

  if (query) {
    statusEl.textContent = t("learn.searchResultsCount", { count: totalMatches });
    statusEl.classList.remove("hidden");
    if (totalMatches === 0) {
      noResultsEl.textContent = t("learn.noResults", { query: learnSearchQuery.trim() });
      noResultsEl.classList.remove("hidden");
    } else {
      noResultsEl.classList.add("hidden");
    }
  } else {
    statusEl.classList.add("hidden");
    noResultsEl.classList.add("hidden");
  }

  // khusus tabel yang dikelompokkan jadi accordion (Kotoba): pas ada pencarian,
  // otomatis buka tiap Chapter yang punya hasil cocok — bisa lebih dari satu
  // kebuka sekaligus di sini (beda dari klik manual yang cuma 1 kebuka) biar
  // semua hasil pencarian kelihatan. Pas pencarian dikosongkan lagi, balikin
  // semua Chapter ke kondisi tertutup seperti semula.
  tablesWrap.querySelectorAll(".tier-group").forEach(groupEl => {
    const header = groupEl.querySelector(".tier-group-header");
    const panelWrap = groupEl.querySelector(".tier-group-panel-wrap");
    if (!header || !panelWrap) return;
    const hasMatch = !!query && !!groupEl.querySelector(".learn-section:not(.no-match)");
    header.classList.toggle("open", hasMatch);
    header.setAttribute("aria-expanded", String(hasMatch));
    panelWrap.classList.toggle("open", hasMatch);
  });
}

function resetLearnSearch() {
  learnSearchQuery = "";
  const input = document.getElementById("learn-search-input");
  if (input) input.value = "";
  applyLearnSearch();
}

const learnSearchInputEl = document.getElementById("learn-search-input");
const learnSearchClearEl = document.getElementById("learn-search-clear");
if (learnSearchInputEl) {
  learnSearchInputEl.addEventListener("input", () => {
    learnSearchQuery = learnSearchInputEl.value;
    applyLearnSearch();
  });
}
if (learnSearchClearEl) {
  learnSearchClearEl.addEventListener("click", () => {
    resetLearnSearch();
    learnSearchInputEl.focus();
  });
}

/* desktop mouse users: wheel scroll + click-drag support for the horizontally
   scrolling tier chip strip (touch devices already scroll it natively) */
(function setupLearnChipsDesktopScroll() {
  const chipsWrap = document.getElementById("learn-nav-chips");
  if (!chipsWrap) return;
  let isDown = false;
  let dragged = false;
  let startX = 0;
  let startScroll = 0;

  chipsWrap.addEventListener("wheel", (e) => {
    if (e.deltaY === 0) return;
    chipsWrap.scrollLeft += e.deltaY;
    e.preventDefault();
  }, { passive: false });

  chipsWrap.addEventListener("mousedown", (e) => {
    isDown = true;
    dragged = false;
    startX = e.pageX;
    startScroll = chipsWrap.scrollLeft;
    chipsWrap.classList.add("dragging");
  });
  window.addEventListener("mouseup", () => {
    isDown = false;
    chipsWrap.classList.remove("dragging");
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const dx = e.pageX - startX;
    if (Math.abs(dx) > 4) dragged = true;
    chipsWrap.scrollLeft = startScroll - dx;
  });
  chipsWrap.addEventListener("click", (e) => {
    if (dragged) {
      e.stopPropagation();
      e.preventDefault();
      dragged = false;
    }
  }, true);
})();

/* back-to-top button — only relevant on the long Kotoba / Bunpō / Kanji lists */
function updateLearnScrollTopVisibility() {
  const btn = document.getElementById("btn-learn-scrolltop");
  const screenEl = document.getElementById("screen-learn");
  if (!btn || !screenEl) return;
  const isLearnVisible = !screenEl.classList.contains("hidden");
  const shouldShow = isLearnVisible && learnSearchNavEnabled && window.scrollY > 400;
  btn.classList.toggle("hidden", !shouldShow);
}
window.addEventListener("scroll", updateLearnScrollTopVisibility, { passive: true });
const btnLearnScrollTop = document.getElementById("btn-learn-scrolltop");
if (btnLearnScrollTop) {
  btnLearnScrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
const btnMatchMode = document.getElementById("btn-match-mode");

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

  // Match Mode: cuma tersedia utk Hiragana & Katakana — sama seperti Hard mode.
  // Tetap butuh sebuah tingkatan (tier) dipilih dulu di bawah sebelum aktif.
  btnMatchMode.classList.toggle("hidden", !supportsHard);
  btnMatchMode.disabled = true;

  // script.levelMeta (mis. Kanji N5 dgn 9 Chapter) menggantikan LEVEL_META
  // global kalau ada — jumlah titik "tier-dots" ikut menyesuaikan panjangnya.
  const levelMeta = script.levelMeta || LEVEL_META;
  const dotCount = Math.max(...levelMeta.map(m => m.tier));

  // buildLevelCard(): bikin satu <button class="level-card"> — dipakai baik utk
  // render flat (script lain) maupun dinaungi di dalam accordion (Kotoba).
  function buildLevelCard(meta) {
    const info = script.levelText[meta.id];
    const card = document.createElement("button");
    card.className = "level-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    // Kanji (9 Chapter), Bunpō (15 sub-tier), & Kotoba (24 sub-tier) rank-nya
    // selalu "N5" jadi tier-dots ga informatif (apalagi Kotoba — bisa jadi 24
    // bulet kecil berjejer) — label "Chapter N"/"Tier X.Y" dipindah ke atas
    // gantiin tier-dots (N5 tetap ditampilkan), sisa judulnya tetap di posisi
    // h3 semula.
    const kanjiTitleText = tf(info.title);
    const kanjiDashIdx = kanjiTitleText.indexOf("—");
    const kanjiChapterLabel = kanjiDashIdx >= 0 ? kanjiTitleText.slice(0, kanjiDashIdx).trim() : kanjiTitleText;
    const kanjiTitleRest = kanjiDashIdx >= 0 ? kanjiTitleText.slice(kanjiDashIdx + 1).trim() : "";
    const usesChapterLabel = scriptKey === "kanji" || scriptKey === "bunpo" || scriptKey === "kotoba";
    // Hiragana & Katakana: bukan lagi rank "Warrior→Immortal" + buletan tier-dots —
    // label kecilnya diganti nama jenis kananya sendiri (Gojūon, Dakuten & Handakuten, Yōon, Campuran).
    const usesTypeLabel = scriptKey === "hiragana" || scriptKey === "katakana";
    card.innerHTML = usesChapterLabel ? `
      <span class="tier">
        <span class="tier-chapter-label">${kanjiChapterLabel}</span>
        ${meta.rank}
      </span>
      <span class="kana-sample">${info.sample}</span>
      <h3>${kanjiTitleRest}</h3>
      <p>${tf(info.desc)}</p>
    ` : usesTypeLabel ? `
      <span class="tier">
        <span class="tier-chapter-label">${tf(info.type)}</span>
      </span>
      <span class="kana-sample">${info.sample}</span>
      <h3>${tf(info.title)}</h3>
      <p>${tf(info.desc)}</p>
    ` : `
      <span class="tier">
        <span class="tier-dots">${Array.from({ length: dotCount }, (_, i) => i + 1).map(n => `<span class="${n <= meta.tier ? 'filled' : ''}"></span>`).join("")}</span>
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
      if (supportsHard) btnMatchMode.disabled = false;
      renderRangePicker(scriptKey, meta.id);
      // kalau kartu ini ada di dalam sebuah accordion group, tandai headernya
      // "has-selected" biar keliatan meski panelnya lagi ketutup.
      const parentGroup = card.closest(".tier-group");
      if (parentGroup) {
        document.querySelectorAll(".tier-group.has-selected").forEach(g => g.classList.remove("has-selected"));
        parentGroup.classList.add("has-selected");
      } else {
        document.querySelectorAll(".tier-group.has-selected").forEach(g => g.classList.remove("has-selected"));
      }
    });
    return card;
  }

  levelsEl.classList.toggle("levels--accordion", !!script.groups);

  if (script.groups) {
    // ===== Nested Accordion (khusus Kotoba): 7 Chapter (nampung 24 sub-tier
    // total) + 1 kartu "All Mixed" berdiri sendiri di luar kelompok = 8 tingkatan
    // teratas. Cuma 1 kelompok yang bisa kebuka dalam satu waktu.
    const metaByTierKey = Object.fromEntries(levelMeta.map(m => [m.id, m]));
    const allHeaders = [];

    script.groups.forEach(group => {
      const groupEl = document.createElement("div");
      groupEl.className = "tier-group";
      groupEl.dataset.groupId = group.id;

      const header = document.createElement("button");
      header.type = "button";
      header.className = "tier-group-header";
      header.setAttribute("aria-expanded", "false");
      header.innerHTML = `
        <span class="tier-group-chapter">${t("levels.groupChapter", { n: group.chapterNum })}</span>
        <span class="tier-group-kana">${group.sample}</span>
        <span class="tier-group-text">
          <span class="tier-group-title">${tf(group.title).replace(/^Chapter\s*\d+\s*—\s*/i, "")}</span>
          <span class="tier-group-desc">${tf(group.desc)}</span>
        </span>
        <span class="tier-group-count">${group.tierKeys.length} ${t("levels.subTiers")}</span>
        <span class="tier-group-caret" aria-hidden="true"></span>
      `;

      const panelWrap = document.createElement("div");
      panelWrap.className = "tier-group-panel-wrap";
      const panel = document.createElement("div");
      panel.className = "tier-group-panel";
      const subgrid = document.createElement("div");
      subgrid.className = "tier-group-subgrid";
      group.tierKeys.forEach(tk => {
        const meta = metaByTierKey[tk];
        if (meta) subgrid.appendChild(buildLevelCard(meta));
      });
      panel.appendChild(subgrid);
      panelWrap.appendChild(panel);

      header.addEventListener("click", () => {
        const willOpen = !header.classList.contains("open");
        allHeaders.forEach(h => {
          h.classList.remove("open");
          h.setAttribute("aria-expanded", "false");
          h.nextElementSibling.classList.remove("open");
        });
        if (willOpen) {
          header.classList.add("open");
          header.setAttribute("aria-expanded", "true");
          panelWrap.classList.add("open");
        }
      });

      groupEl.appendChild(header);
      groupEl.appendChild(panelWrap);
      levelsEl.appendChild(groupEl);
      allHeaders.push(header);
    });

    // "All Mixed" — bagian dari 8 tingkatan teratas, tapi berdiri sendiri (bukan
    // grup yang bisa dibuka-tutup) karena tidak menaungi sub-tier apapun.
    const allMeta = metaByTierKey.all;
    if (allMeta) {
      const allCard = buildLevelCard(allMeta);
      allCard.classList.add("level-card-all");
      levelsEl.appendChild(allCard);
    }
  } else {
    // ===== render flat (Hiragana, Katakana, Kanji, Bunpō) — tidak berubah.
    levelMeta.forEach(meta => levelsEl.appendChild(buildLevelCard(meta)));
  }

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
  document.getElementById("quiz-variant-btn-c"),
  document.getElementById("quiz-variant-btn-d")
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
      ? `<span data-i18n="${cfg.i18nKey}">${t(cfg.i18nKey)}</span>`
      : `${cfg.label}`;
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

/* ---------------- timer per soal: tanpa waktu / 3 / 5 / 10 detik ---------------- */
let selectedTimerSeconds = 0; // 0 = tanpa timer
document.querySelectorAll(".timer-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".timer-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTimerSeconds = parseInt(btn.dataset.timer, 10) || 0;
  });
});

const questionTimerEl = document.getElementById("question-timer");
const questionTimerValueEl = document.getElementById("question-timer-value");
let questionTimerInterval = null;
let questionTimerDeadline = 0;

function clearQuestionTimer() {
  clearInterval(questionTimerInterval);
  questionTimerInterval = null;
  questionTimerEl.classList.add("hidden");
  questionTimerEl.classList.remove("urgent");
}

// begitu waktu habis, jawaban otomatis dianggap salah (timedOut = true di handleAnswer).
function startQuestionTimer(seconds, current) {
  questionTimerDeadline = Date.now() + seconds * 1000;
  questionTimerEl.classList.remove("hidden");
  questionTimerEl.classList.remove("urgent");
  questionTimerValueEl.textContent = seconds;
  clearInterval(questionTimerInterval);
  questionTimerInterval = setInterval(() => {
    const remainingMs = questionTimerDeadline - Date.now();
    const remaining = Math.max(0, Math.ceil(remainingMs / 1000));
    questionTimerValueEl.textContent = remaining;
    questionTimerEl.classList.toggle("urgent", remaining <= 1);
    if (remainingMs <= 0) {
      clearQuestionTimer();
      handleAnswer(null, null, current, true);
    }
  }, 100);
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
  if (conquestIconEl) conquestIconEl.classList.toggle("is-conquered", isConquered);
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
  resetLearnSearch();
  renderLearnTables(currentScript);
  window.scrollTo({ top: 0, behavior: "instant" });
});
btnLearnBack.addEventListener("click", () => {
  screenLearnEl.classList.add("hidden");
  screenStart.classList.remove("hidden");
  resetLearnSearch();
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
const streakFlameEl = document.getElementById("streak-flame");
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
    // kotoba / kanji: bisa soal "arti", "romaji", "kanjiForm" (khusus kanji), atau "campuran"
    const meaningPool = usesAllPool ? script.data.all : script.data[mode];
    const romajiPool = usesAllPool ? script.dataRomaji.all : script.dataRomaji[mode];
    wrongPools = { meaning: meaningPool, romaji: romajiPool };
    pool = meaningPool;

    // bacaan/tulisan tambahan yang ditampilkan bareng feedback jawaban:
    // Kanji N5 -> furigana hiragananya, Basic Kotoba -> tulisan kanjinya.
    const extraReadingPool = scriptKey === "kanji"
      ? (usesAllPool ? script.dataKana.all : script.dataKana[mode])
      : scriptKey === "kotoba"
        ? (usesAllPool ? script.dataKanji.all : script.dataKanji[mode])
        : null;

    // kanjiForm: kebalikan dari "meaning"/"romaji" — soal = bacaan hiragananya
    // (dataKana), jawaban = karakter kanji yang tepat. Item pool-nya [kana, kanji]
    // (kebalikan urutan dataKana yang aslinya [kanji, kana]), supaya struktur
    // [soal, jawaban] konsisten dengan pool lain & buildChoices() otomatis
    // menyingkirkan kanji lain yang kebetulan punya bacaan sama (mis. 日/火 = "hi")
    // dari pilihan pengecoh, karena identitas soal (kana)-nya bakal sama juga.
    const kanjiFormPool = scriptKey === "kanji"
      ? (usesAllPool ? script.dataKana.all : script.dataKana[mode]).map(([c, k]) => [k, c])
      : null;
    if (kanjiFormPool) wrongPools.kanjiForm = kanjiFormPool;

    // tipe soal yang ikut diacak kalau user pilih "Campuran" — Kanji N5 punya 3
    // (arti/romaji/kanjiForm), Basic Kotoba cuma 2 (arti/romaji).
    const variantTypePool = kanjiFormPool ? ["meaning", "romaji", "kanjiForm"] : ["meaning", "romaji"];

    // Basic Kotoba di Mode Penaklukan & Speedrun: tipe soal dikunci ke "arti" (meaning)
    // saja, tidak ikut pengaturan selectedQuizVariant milik user.
    const forceKotobaMeaning = scriptKey === "kotoba" && (isConquest || isSpeedrun);

    const indices = shuffle(computeRangeIndices(meaningPool.length, usesAllPool));
    queue = indices.map(i => {
      const type = forceKotobaMeaning
        ? "meaning"
        : selectedQuizVariant === "both"
          ? variantTypePool[Math.floor(Math.random() * variantTypePool.length)]
          : selectedQuizVariant;
      const src = type === "romaji" ? romajiPool : type === "kanjiForm" ? kanjiFormPool : meaningPool;
      // simpan juga sisi "lainnya" (kalau soalnya arti, simpan romaji-nya, dan
      // sebaliknya) supaya bisa ditunjukkan begitu user selesai jawab soal ini.
      // Untuk kanjiForm, sisi "lainnya" yang ditampilkan = arti + romaji-nya
      // (furigana-nya sendiri percuma ditampilkan lagi, karena itu sudah jadi soalnya).
      const extra = type === "kanjiForm" || type === "romaji" ? meaningPool[i][1] : romajiPool[i][1];
      const extraReading = type === "kanjiForm" ? romajiPool[i][1] : (extraReadingPool ? extraReadingPool[i][1] : null);
      return [src[i][0], src[i][1], type, extra, extraReading];
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
    // Mode Speedrun sudah punya jam-nya sendiri (race clock) — timer per-soal
    // (3/5/10 detik) dari pengaturan umum sengaja tidak dipakai di sini supaya
    // tidak dobel tekanan waktu. Speedrun = SELALU tanpa timer per-soal.
    timerSeconds: isSpeedrun ? 0 : selectedTimerSeconds,
    conquestPhaseBoundaries, conquestPhaseIndex: 0,
    index: 0, score: 0, streak: 0, maxStreak: 0, missed: [], results: [],
    rankIndexBefore: getRankIndex(),
    conquest: isConquest, conquestFailed: false,
    speedrun: isSpeedrun, speedrunStart: isSpeedrun ? Date.now() : null, speedrunElapsedMs: 0,
    speedrunMistakes: 0, speedrunFailed: false,
    // khusus speedrun: kunci input mode "hard" pakai flag ini (bukan attribute
    // readOnly) — lihat catatan panjang di handleAnswer() soal kenapa.
    answerLocked: false
  };
  cancelArmed = false;
  clearTimeout(cancelTimer);
  clearSpeedrunAutoNext();
  clearQuestionTimer();
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

// dotsEl (id="dots") sekarang cuma nampilin teks "posisi/total" (angka polos),
// bukan lagi deretan bulatan — lebih ringkas & gampang dibaca sekilas.
function renderDots() {
  let indices;
  if (state.conquestPhaseBoundaries) {
    const b = state.conquestPhaseBoundaries;
    const start = b[state.conquestPhaseIndex], end = b[state.conquestPhaseIndex + 1];
    indices = [];
    for (let i = start; i < end; i++) indices.push(i);
  } else {
    indices = state.queue.map((_, i) => i);
  }
  const position = indices.indexOf(state.index) + 1;
  dotsEl.textContent = `${position}/${indices.length}`;
}

function renderQuestion() {
  clearQuestionTimer();
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
    // readOnly (bukan disabled) supaya elemen tidak kehilangan fokus di
    // browser mobile — disabled pada input yang sedang fokus otomatis
    // memaksa blur, dan itu yang bikin keyboard virtual turun-naik tiap
    // soal. Dengan readOnly, fokus (dan keyboard-nya) tetap terjaga.
    hardInputEl.readOnly = false;
    hardInputEl.className = "hard-input";
    state.answerLocked = false;
    btnHardSubmit.disabled = false;
    hardInputEl.focus();
  } else {
    hardInputRow.classList.add("hidden");
    choicesEl.classList.remove("hidden");
    const count = state.difficulty === "medium" ? 8 : 4;
    const options = buildChoices(current, state.wrongPools[current[2]], count);
    choicesEl.classList.toggle("choices-2col", count === 8);
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
  if (state.timerSeconds > 0) startQuestionTimer(state.timerSeconds, current);
}

function updateStreakUI() {
  streakCountEl.textContent = state.streak;
  // makin panjang streak-nya, makin banyak api-nya: 1 api (1-2), 2 api (3-5),
  // 3 api (6+) — biar makin kelihatan "on fire" pas streak-nya makin tinggi.
  const flameCount = state.streak >= 6 ? 3 : state.streak >= 3 ? 2 : state.streak >= 1 ? 1 : 0;
  if (streakFlameEl) streakFlameEl.textContent = "🔥".repeat(flameCount);
  streakEl.classList.toggle("show", state.streak >= 1);
}

let speedrunAutoNextTimer = null;
function clearSpeedrunAutoNext() {
  clearTimeout(speedrunAutoNextTimer);
  speedrunAutoNextTimer = null;
}

function handleAnswer(chosen, btn, current, timedOut = false) {
  clearSpeedrunAutoNext();
  clearQuestionTimer();
  document.querySelectorAll("button.choice").forEach(b => b.disabled = true);
  btnHardSubmit.disabled = true;
  // Mode Speedrun: kunci input pakai flag JS (answerLocked), BUKAN attribute
  // readOnly. Di iOS Safari, readOnly=true pada input yang lagi fokus langsung
  // menutup keyboard virtual walau fokusnya sendiri tidak hilang — dan begitu
  // ketutup, .focus() program pas soal berikutnya muncul (apalagi lewat
  // auto-lanjut Speedrun yang sama sekali tidak ada tap tombol) tidak akan
  // membuka keyboard itu lagi, jadi soal berikutnya kelihatan seperti "mode
  // biasa" tanpa keyboard. Makanya khusus Speedrun, elemen dibiarkan tetap
  // fokus & "writable" dari soal pertama sampai selesai — hanya dikunci
  // secara logic (lihat listener input/keydown/klik jawab di bawah & the
  // beforeinput guard). Mode lain (biasa/conquest) tetap pakai readOnly
  // seperti semula karena di sana selalu ada tap tombol Next manual sebelum
  // soal berikutnya, jadi keyboard-nya aman kebuka lagi.
  if (state.speedrun) {
    state.answerLocked = true;
    hardInputEl.classList.add("locked");
  } else {
    hardInputEl.readOnly = true;
  }
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
    if (timedOut) feedbackEl.textContent = t("quiz.timeUpAnswerWas", { answer: current[1] });
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
    let extraText = t(extraKey, { value: current[3] });
    // tambahan: furigana hiragana utk Kanji N5, atau tulisan kanji utk Basic
    // Kotoba (current[4]) — muncul bareng info romaji/arti di atas.
    if (current[4]) {
      const readingKey = current[2] === "kanjiForm"
        ? "quiz.romajiLabel"
        : state.script === "kanji" ? "quiz.hiraganaLabel" : "quiz.kanjiLabel";
      extraText += "\n" + t(readingKey, { value: current[4] });
    }
    feedbackExtraEl.textContent = extraText;
    feedbackExtraEl.classList.remove("hidden");
  }

  nextBtn.classList.remove("hidden");
  if ((state.conquest && state.conquestFailed) || (state.speedrun && state.speedrunFailed)) {
    nextBtn.textContent = t("quiz.seeResults");
  } else {
    nextBtn.textContent = state.index === state.queue.length - 1 ? t("quiz.seeResults") : t("quiz.next");
  }
  // Jangan pindahkan fokus ke tombol Next kalau lagi mode ketik (hard) — kalau
  // dipindah, input yang lagi fokus ikut ke-blur dan keyboard virtual di HP
  // jadi turun tiap kali jawaban dikirim, lalu naik lagi pas soal berikutnya
  // muncul (hardInputEl.focus() di renderQuestion). Biarkan fokus tetap di
  // input; shortcut Enter/Space ke Next tetap jalan lewat listener global.
  if (state.difficulty !== "hard") nextBtn.focus();

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

// true kalau input mode "hard" lagi dikunci (sudah dijawab, nunggu lanjut ke
// soal berikutnya) — Speedrun pakai flag answerLocked (lihat catatan di
// handleAnswer()), mode lain pakai attribute readOnly seperti semula.
function isHardInputLocked() {
  return state.speedrun ? state.answerLocked : hardInputEl.readOnly;
}

btnHardSubmit.addEventListener("click", () => {
  if (isHardInputLocked()) return;
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
  if (state.speedrun && !state.answerLocked) {
    const current = state.queue[state.index];
    const typed = hardInputEl.value.trim().toLowerCase();
    if (typed !== "" && typed === String(current[1]).trim().toLowerCase()) {
      handleAnswer(hardInputEl.value, null, current);
    }
  }
});
hardInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (isHardInputLocked()) return; // sudah dijawab — biarkan "nyambung" ke listener "Enter = lanjut soal"
    e.preventDefault();
    e.stopPropagation(); // jangan sampai keydown ini juga kepick up listener "Enter = lanjut soal"
    btnHardSubmit.click();
  }
});
hardInputEl.addEventListener("beforeinput", (e) => {
  // Speedrun sengaja TIDAK pakai readOnly (lihat catatan di handleAnswer()),
  // jadi blokir manual di sini supaya user tidak bisa lanjut ngetik selagi
  // jawaban lagi dikunci/ditampilkan, menunggu auto-lanjut ke soal berikutnya.
  if (state.speedrun && state.answerLocked) e.preventDefault();
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
  clearQuestionTimer();
  stopSpeedrunTimer();
  speedrunTimerEl.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenResults.classList.add("hidden");
  screenStart.classList.remove("hidden");
  renderProfile();
});

function goToNextQuestion() {
  clearSpeedrunAutoNext();
  clearQuestionTimer();
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

/* =========================================================
   FLASHCARDS — Anki-style flip-card study mode, built in.
   Covers Basic Kotoba + Kanji N5 out of the box, plus lets
   users import their own .apkg deck (parsed 100% client-side
   with JSZip + sql.js, loaded lazily from CDN on first use —
   nothing is ever uploaded anywhere). A lightweight SM-2-ish
   algorithm schedules reviews per card via localStorage, same
   spirit as real Anki (again/hard/good/easy).
   ========================================================= */
function escapeHtml(str) {
  return String(str == null ? "" : str).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ---- per-card spaced-repetition state (localStorage) ---- */
const FLASH_SRS_KEY = "tebakAksara_flashSRS_v1";
const FLASH_DAY_MS = 24 * 60 * 60 * 1000;
function getFlashSRS() {
  try { return JSON.parse(localStorage.getItem(FLASH_SRS_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveFlashSRS(all) {
  try { localStorage.setItem(FLASH_SRS_KEY, JSON.stringify(all)); } catch (e) { /* storage full — non-fatal */ }
}
function getCardState(all, id) {
  return all[id] || { ef: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 };
}
function rateFlashCard(cardId, rating) {
  const all = getFlashSRS();
  const st = getCardState(all, cardId);
  const now = Date.now();
  if (rating === "again") {
    st.lapses = (st.lapses || 0) + 1;
    st.reps = 0;
    st.interval = 0;
    st.ef = Math.max(1.3, st.ef - 0.2);
    st.due = now;
  } else if (rating === "hard") {
    st.ef = Math.max(1.3, st.ef - 0.15);
    st.interval = st.reps === 0 ? 1 : Math.max(1, Math.round(st.interval * 1.2));
    st.reps += 1;
    st.due = now + st.interval * FLASH_DAY_MS;
  } else if (rating === "good") {
    st.interval = st.reps === 0 ? 1 : Math.max(1, Math.round(st.interval * st.ef));
    st.reps += 1;
    st.due = now + st.interval * FLASH_DAY_MS;
  } else if (rating === "easy") {
    st.ef = Math.min(3.2, st.ef + 0.15);
    st.interval = st.reps === 0 ? 4 : Math.max(1, Math.round(st.interval * st.ef * 1.3));
    st.reps += 1;
    st.due = now + st.interval * FLASH_DAY_MS;
  }
  st.lastRating = rating;
  st.lastReviewed = now;
  all[cardId] = st;
  saveFlashSRS(all);
  return st;
}

/* ---- custom (.apkg-imported) decks (localStorage) ---- */
const FLASH_CUSTOM_DECKS_KEY = "tebakAksara_flashCustomDecks_v1";
function getCustomDecks() {
  try { return JSON.parse(localStorage.getItem(FLASH_CUSTOM_DECKS_KEY)) || []; }
  catch (e) { return []; }
}
function saveCustomDecks(decks) {
  try { localStorage.setItem(FLASH_CUSTOM_DECKS_KEY, JSON.stringify(decks)); return true; }
  catch (e) { return false; }
}
function addCustomDeck(name, cards) {
  const decks = getCustomDecks();
  const id = "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  decks.push({ id, name, cards, createdAt: Date.now() });
  return saveCustomDecks(decks) ? id : null;
}
function deleteCustomDeck(id) {
  saveCustomDecks(getCustomDecks().filter(d => d.id !== id));
  const srs = getFlashSRS();
  let changed = false;
  Object.keys(srs).forEach(k => {
    if (k.indexOf(`custom:${id}:`) === 0) { delete srs[k]; changed = true; }
  });
  if (changed) saveFlashSRS(srs);
}

/* ---- card content builders (resolved live so language switches work) ---- */
function kotobaTierArr(tierKey) {
  const i = KOTOBA_TIER_KEYS.indexOf(tierKey);
  return i >= 0 ? KOTOBA_N5_CHAPTERS[i] : KOTOBA_N5_CH1_1;
}
function kanjiTierArr(tierKey) {
  const i = KANJI_TIER_KEYS.indexOf(tierKey);
  return i >= 0 ? KANJI_N5_CHAPTERS[i] : KANJI_N5_CH1;
}
function kotobaCardContent(tierKey, idx) {
  const item = kotobaTierArr(tierKey)[idx];
  if (!item) return { front: "", back: "" };
  const [kana, romaji, meaning, example, segments, translation, kanji, exampleKanji] = item;
  const exRomaji = (segments || []).map(s => s[1]).join(" ");
  const showExKanji = exampleKanji && exampleKanji !== example;
  const front = `
    <div class="fc-kana">${escapeHtml(kana)}</div>`;
  const back = `
    <div class="fc-kana fc-kana-sm" data-speak="${escapeHtml(kana)}">${escapeHtml(kana)}<span class="fc-audio-icon">🔊</span></div>
    <div class="fc-romaji">${escapeHtml(romaji)}</div>
    <hr>
    <div class="fc-meaning">${escapeHtml(tf(meaning))}</div>
    ${kanji ? `<div class="fc-kanji-form">${escapeHtml(kanji)}</div>` : ""}
    ${showExKanji ? `<div class="fc-example-kanji" data-speak="${escapeHtml(exampleKanji)}">${escapeHtml(exampleKanji)}<span class="fc-audio-icon">🔊</span></div>` : ""}
    ${example ? `<div class="fc-example" data-speak="${escapeHtml(example)}">${escapeHtml(example)}<span class="fc-audio-icon">🔊</span></div>` : ""}
    ${exRomaji ? `<div class="fc-example-sub">${escapeHtml(exRomaji)}</div>` : ""}
    ${translation ? `<div class="fc-translation">${escapeHtml(tf(translation))}</div>` : ""}`;
  return { front, back };
}
function kanjiCardContent(tierKey, idx) {
  const item = kanjiTierArr(tierKey)[idx];
  if (!item) return { front: "", back: "" };
  const [char, reading, meaning, kana] = item;
  const front = `<div class="fc-kanji-char">${escapeHtml(char)}</div>`;
  const back = `
    <div class="fc-kanji-char fc-kanji-char-sm">${escapeHtml(char)}</div>
    <hr>
    <div class="fc-reading">${escapeHtml(reading)}</div>
    ${kana ? `<div class="fc-kana-reading" data-speak="${escapeHtml(kana)}">${escapeHtml(kana)}<span class="fc-audio-icon">🔊</span></div>` : ""}
    <div class="fc-meaning">${escapeHtml(tf(meaning))}</div>`;
  return { front, back };
}
function customCardContent(deckId, idx) {
  const deck = getCustomDecks().find(d => d.id === deckId);
  const c = deck && deck.cards[idx];
  if (!c) return { front: "", back: "" };
  const toHtml = (s) => escapeHtml(s).split("\n").join("<br>");
  return {
    front: `<div class="fc-custom-text">${toHtml(c.front)}</div>`,
    back: `<div class="fc-custom-text">${toHtml(c.back)}</div>`
  };
}
function getCardContent(desc) {
  if (desc.kind === "kotoba") return kotobaCardContent(desc.tierKey, desc.idx);
  if (desc.kind === "kanji") return kanjiCardContent(desc.tierKey, desc.idx);
  if (desc.kind === "custom") return customCardContent(desc.deckId, desc.idx);
  return { front: "", back: "" };
}

/* ---- deck descriptor -> list of card ids/refs ---- */
function buildDeckCardDescriptors(deckRef) {
  if (deckRef.kind === "custom") {
    const deck = getCustomDecks().find(d => d.id === deckRef.deckId);
    if (!deck) return [];
    return deck.cards.map((_, idx) => ({ id: `custom:${deck.id}:${idx}`, kind: "custom", deckId: deck.id, idx }));
  }
  const allTierKeys = SCRIPTS[deckRef.kind].tierKeys || ["tier1", "tier2", "tier3"];
  const tierKeys = deckRef.tierKey === "all" ? allTierKeys : [deckRef.tierKey];
  const out = [];
  tierKeys.forEach(tk => {
    const arr = deckRef.kind === "kotoba" ? kotobaTierArr(tk) : kanjiTierArr(tk);
    arr.forEach((_, idx) => out.push({ id: `${deckRef.kind}:${tk}:${idx}`, kind: deckRef.kind, tierKey: tk, idx }));
  });
  return out;
}
function deckDueSummary(descs) {
  const all = getFlashSRS();
  const now = Date.now();
  let due = 0;
  descs.forEach(d => {
    const st = all[d.id];
    if (!st || st.due <= now) due++;
  });
  return { total: descs.length, due };
}

/* ---- .apkg import (JSZip + sql.js, both lazy-loaded from CDN) ---- */
function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load " + src));
    document.head.appendChild(s);
  });
}
async function ensureJSZip() {
  if (window.JSZip) return;
  await loadExternalScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");
}
let sqlJsInstancePromise = null;
function getSqlJsInstance() {
  if (!sqlJsInstancePromise) {
    sqlJsInstancePromise = (async () => {
      if (!window.initSqlJs) {
        await loadExternalScript("https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js");
      }
      return window.initSqlJs({
        locateFile: (file) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
      });
    })();
  }
  return sqlJsInstancePromise;
}
function stripAnkiHTML(html) {
  if (!html) return "";
  let s = String(html);
  s = s.replace(/<style[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/\[sound:[^\]]*\]/gi, "");
  s = s.replace(/<img[^>]*>/gi, " 🖼️ ");
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<\/(p|div|li|tr)>/gi, "\n");
  s = s.replace(/<[^>]+>/g, "");
  const ta = document.createElement("textarea");
  ta.innerHTML = s;
  s = ta.value;
  s = s.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  return s;
}
function renderClozeFront(text) { return text.replace(/\{\{c\d+::(.*?)(::.*?)?\}\}/g, "[...]"); }
function renderClozeBack(text) { return text.replace(/\{\{c\d+::(.*?)(::.*?)?\}\}/g, "$1"); }

async function parseApkgFile(file) {
  await ensureJSZip();
  if (!window.JSZip) throw new Error("Couldn't load the .apkg reader (JSZip) — check your connection.");
  const zip = await window.JSZip.loadAsync(file);
  const dbEntry = zip.file("collection.anki21") || zip.file("collection.anki2") || zip.file("collection.anki21b");
  if (!dbEntry) throw new Error("This doesn't look like a valid .apkg file (no collection database found inside).");
  const dbBuf = await dbEntry.async("uint8array");

  const SQL = await getSqlJsInstance();
  if (!SQL) throw new Error("Couldn't load the SQLite reader (sql.js) — check your connection.");
  const db = new SQL.Database(dbBuf);
  let cards = [];
  try {
    const colRes = db.exec("SELECT models FROM col LIMIT 1");
    if (!colRes.length) throw new Error("This .apkg file has no readable collection data.");
    const models = JSON.parse(colRes[0].values[0][0]);

    const notesRes = db.exec("SELECT mid, flds FROM notes");
    const rows = notesRes.length ? notesRes[0].values : [];
    rows.forEach(([mid, flds]) => {
      const model = models[String(mid)];
      const fieldValues = String(flds).split("\x1f");
      const isCloze = model && /cloze/i.test(model.name || "");
      let front, back;
      if (isCloze) {
        const raw = stripAnkiHTML(fieldValues[0] || "");
        front = renderClozeFront(raw);
        back = renderClozeBack(raw);
        const extra = stripAnkiHTML(fieldValues[1] || "");
        if (extra) back += "\n\n" + extra;
      } else {
        front = stripAnkiHTML(fieldValues[0] || "");
        back = fieldValues.slice(1).map(stripAnkiHTML).filter(Boolean).join("\n\n");
        if (!back) back = front;
      }
      if (front.trim()) cards.push({ front: front.trim(), back: (back || "").trim() });
    });
  } finally {
    db.close();
  }
  if (!cards.length) throw new Error("No readable cards were found in this deck.");
  return { name: file.name.replace(/\.apkg$/i, ""), cards };
}

/* ---- screens & session state ---- */
const screenFlashDeck = document.getElementById("screen-flashdeck");
const screenFlashcard = document.getElementById("screen-flashcard");
const flashcardsToggleBtn = document.getElementById("flashcards-toggle");
const flashcardStageEl = document.getElementById("flashcard-stage");
const flashcardEl = document.getElementById("flashcard");
const flashcardInnerEl = document.getElementById("flashcard-inner");
const flashDotsEl = document.getElementById("flash-dots");
const flashProgressTextEl = document.getElementById("flash-progress-text");
const flashShowAnswerBtn = document.getElementById("flash-show-answer-btn");
const flashRateRowEl = document.getElementById("flash-rate-row");
const flashDoneEl = document.getElementById("flash-done");
const flashDoneSubEl = document.getElementById("flash-done-sub");

const FLASH_BUILTIN_DECK_DEFS = [
  // Kotoba N5 sekarang punya 21 Sub-Tier (bukan cuma tier1-3) + "all"
  ...KOTOBA_TIER_KEYS.map(tierKey => ({ kind: "kotoba", tierKey })),
  { kind: "kotoba", tierKey: "all" },
  // Kanji N5 sekarang punya 9 Chapter (bukan cuma tier1-3) + "all"
  ...KANJI_TIER_KEYS.map(tierKey => ({ kind: "kanji", tierKey })),
  { kind: "kanji", tierKey: "all" }
];

let flashState = { deckRef: null, deckLabel: "", queue: [], index: 0, total: 0, ratedCount: 0 };

function hideAllMainScreens() {
  [screenStart, screenLearnEl, screenConquestStory, screenQuiz, screenResults, screenFlashDeck, screenFlashcard, screenMatch]
    .forEach(s => s && s.classList.add("hidden"));
}

/* ---------------- mode match (cocokkan 4 huruf & romaji tiap ronde) ---------------- */
// Hanya utk Hiragana & Katakana. Berbeda dari mode kuis biasa: bukan pilihan
// ganda, tapi mencocokkan (tap-tap) 4 pasang [huruf, romaji] sekaligus tiap
// ronde. Pool soalnya diambil langsung dari tier yg sedang dipilih user di
// start screen (script.data[mode]) — tidak dipengaruhi pengaturan
// difficulty/quiz-variant/range yg dipakai mode kuis biasa, karena mode ini
// memang berdiri sendiri.
const screenMatch = document.getElementById("screen-match");
const btnMatchBack = document.getElementById("btn-match-back");
const btnMatchRestart = document.getElementById("btn-match-restart");
const matchProgressTextEl = document.getElementById("match-progress-text");
const matchMistakesCountEl = document.getElementById("match-mistakes-count");
const matchBoardEl = document.getElementById("match-board");
const matchColKanaEl = document.getElementById("match-col-kana");
const matchColRomajiEl = document.getElementById("match-col-romaji");
const matchDoneEl = document.getElementById("match-done");
const matchDoneSubEl = document.getElementById("match-done-sub");
const btnMatchPlayAgain = document.getElementById("btn-match-play-again");
const btnMatchChooseAnother = document.getElementById("btn-match-choose-another");

let matchState = null;

// pecah seluruh pasangan [huruf, romaji] milik satu tier jadi beberapa ronde
// isi 4 pasang, teracak. Kalau sisa terakhir cuma 1 pasang (trivial banget —
// tinggal tap 2 ubin doang), gabungkan ke ronde sebelumnya biar tetap seru.
function buildMatchRounds(pairs) {
  const shuffled = shuffle(pairs);
  const rounds = [];
  for (let i = 0; i < shuffled.length; i += 4) {
    rounds.push(shuffled.slice(i, i + 4));
  }
  if (rounds.length > 1 && rounds[rounds.length - 1].length === 1) {
    const last = rounds.pop();
    rounds[rounds.length - 1] = rounds[rounds.length - 1].concat(last);
  }
  return rounds;
}

function startMatchGame(scriptKey, mode) {
  if (!mode) return; // belum pilih tingkatan
  const script = SCRIPTS[scriptKey];
  const pairs = script.data[mode];

  matchState = {
    scriptKey,
    mode,
    rounds: buildMatchRounds(pairs),
    roundIndex: 0,
    roundMatched: 0,
    totalPairs: pairs.length,
    mistakes: 0,
    selectedKana: null,
    selectedRomaji: null,
    startTime: Date.now()
  };

  hideAllMainScreens();
  screenMatch.classList.remove("hidden");
  matchDoneEl.classList.add("hidden");
  matchBoardEl.classList.remove("hidden");
  matchMistakesCountEl.textContent = "0";
  renderMatchRound();
  window.scrollTo({ top: 0, behavior: "instant" });
}

// palet warna border rainbow — sama seperti yg dipakai pilihan ganda
const MATCH_RB_COLORS = ["--rb-pink", "--rb-cyan", "--rb-purple", "--rb-orange", "--rb-green", "--rb-yellow", "--rb-blue", "--rb-rose", "--rb-teal"];

// kasih tiap ubin warna border sendiri2 (diacak) biar ubin yg bersebelahan
// (kolom kana & romaji) gak collision kebagian warna yg sama kayak dulu
// (dulu warnanya cuma ngikut posisi nth-child per kolom).
function applyMatchTileBorderColors(tiles) {
  if (getBorderStyle() !== "rainbow") {
    tiles.forEach(tile => { tile.style.removeProperty("--tile-rainbow"); });
    return;
  }
  const pool = [];
  while (pool.length < tiles.length) {
    pool.push(...shuffle(MATCH_RB_COLORS));
  }
  const colors = shuffle(pool.slice(0, tiles.length));
  tiles.forEach((tile, i) => {
    tile.style.setProperty("--tile-rainbow", `var(${colors[i]})`);
  });
}

// panggil ulang kalau setting border style diganti sementara layar match lagi kebuka
function refreshMatchTileBorderColors() {
  if (screenMatch.classList.contains("hidden")) return;
  applyMatchTileBorderColors(Array.from(matchBoardEl.querySelectorAll(".match-tile")));
}

function renderMatchRound() {
  const round = matchState.rounds[matchState.roundIndex];
  matchState.roundMatched = 0;
  matchState.selectedKana = null;
  matchState.selectedRomaji = null;

  matchProgressTextEl.textContent = t("matchMode.roundProgress", {
    current: matchState.roundIndex + 1,
    total: matchState.rounds.length
  });

  const kanaOrder = shuffle(round.map((_, i) => i));
  const romajiOrder = shuffle(round.map((_, i) => i));

  matchColKanaEl.innerHTML = "";
  matchColRomajiEl.innerHTML = "";

  const allTiles = [];

  kanaOrder.forEach(pairIndex => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "match-tile";
    tile.textContent = round[pairIndex][0];
    tile.addEventListener("click", () => handleMatchTileClick(tile, "kana", pairIndex));
    matchColKanaEl.appendChild(tile);
    allTiles.push(tile);
  });

  romajiOrder.forEach(pairIndex => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "match-tile";
    tile.textContent = round[pairIndex][1];
    tile.addEventListener("click", () => handleMatchTileClick(tile, "romaji", pairIndex));
    matchColRomajiEl.appendChild(tile);
    allTiles.push(tile);
  });

  applyMatchTileBorderColors(allTiles);
}

function handleMatchTileClick(tile, side, pairIndex) {
  if (tile.disabled) return;
  const selKey = side === "kana" ? "selectedKana" : "selectedRomaji";
  const otherKey = side === "kana" ? "selectedRomaji" : "selectedKana";

  // klik ulang ubin yg sama = batalkan pilihan
  if (matchState[selKey] && matchState[selKey].tile === tile) {
    tile.classList.remove("selected");
    matchState[selKey] = null;
    return;
  }

  if (matchState[selKey]) matchState[selKey].tile.classList.remove("selected");
  tile.classList.add("selected");
  matchState[selKey] = { tile, pairIndex };

  const other = matchState[otherKey];
  if (!other) return;

  if (other.pairIndex === pairIndex) {
    // cocok!
    tile.classList.remove("selected");
    other.tile.classList.remove("selected");
    tile.classList.add("matched");
    other.tile.classList.add("matched");
    tile.disabled = true;
    other.tile.disabled = true;
    matchState.selectedKana = null;
    matchState.selectedRomaji = null;
    matchState.roundMatched++;

    if (matchState.roundMatched === matchState.rounds[matchState.roundIndex].length) {
      setTimeout(advanceMatchRound, 550);
    }
  } else {
    // salah — getar sebentar lalu balik netral
    matchState.mistakes++;
    matchMistakesCountEl.textContent = matchState.mistakes;
    tile.classList.add("wrong");
    other.tile.classList.add("wrong");
    const tileRef = tile, otherRef = other.tile;
    matchState.selectedKana = null;
    matchState.selectedRomaji = null;
    setTimeout(() => {
      tileRef.classList.remove("selected", "wrong");
      otherRef.classList.remove("selected", "wrong");
    }, 420);
  }
}

function advanceMatchRound() {
  matchState.roundIndex++;
  if (matchState.roundIndex >= matchState.rounds.length) {
    finishMatchGame();
  } else {
    renderMatchRound();
  }
}

function finishMatchGame() {
  matchState.elapsedMs = Date.now() - matchState.startTime;
  matchBoardEl.classList.add("hidden");
  matchDoneEl.classList.remove("hidden");
  matchDoneSubEl.textContent = t("matchMode.doneSub", {
    pairs: matchState.totalPairs,
    mistakes: matchState.mistakes,
    time: formatSpeedrunTime(matchState.elapsedMs)
  });
}

function exitMatchGame() {
  screenMatch.classList.add("hidden");
  screenStart.classList.remove("hidden");
  renderProfile();
}

btnMatchMode.addEventListener("click", () => {
  if (btnMatchMode.disabled) return;
  startMatchGame(currentScript, state.mode);
});
btnMatchBack.addEventListener("click", exitMatchGame);
btnMatchChooseAnother.addEventListener("click", exitMatchGame);
btnMatchRestart.addEventListener("click", () => startMatchGame(matchState.scriptKey, matchState.mode));
btnMatchPlayAgain.addEventListener("click", () => startMatchGame(matchState.scriptKey, matchState.mode));

function renderFlashBuiltinDecks() {
  const wrap = document.getElementById("flash-builtin-decks");
  wrap.innerHTML = "";
  FLASH_BUILTIN_DECK_DEFS.forEach(defn => {
    const script = SCRIPTS[defn.kind];
    const meta = script.levelText[defn.tierKey];
    const descs = buildDeckCardDescriptors(defn);
    const stat = deckDueSummary(descs);
    const label = `${script.label} — ${tf(meta.title)}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "flash-deck-card";
    btn.innerHTML = `
      <span class="flash-deck-glyph">${script.tabGlyph}</span>
      <span class="flash-deck-info">
        <span class="flash-deck-name">${escapeHtml(label)}</span>
        <span class="flash-deck-count">${stat.total} ${t(defn.kind === "kotoba" ? "learn.words" : "learn.characters")} · <b>${stat.due}</b> ${t("flash.dueNow")}</span>
      </span>
      <span class="flash-deck-arrow">→</span>`;
    btn.addEventListener("click", () => startFlashcardSession(defn, label));
    wrap.appendChild(btn);
  });
}

function renderFlashCustomDecks() {
  const wrap = document.getElementById("flash-custom-decks");
  const emptyHint = document.getElementById("flash-no-custom");
  wrap.innerHTML = "";
  const decks = getCustomDecks();
  emptyHint.classList.toggle("hidden", decks.length > 0);
  decks.forEach(deck => {
    const descs = buildDeckCardDescriptors({ kind: "custom", deckId: deck.id });
    const stat = deckDueSummary(descs);
    const row = document.createElement("div");
    row.className = "flash-deck-card flash-deck-custom";
    row.innerHTML = `
      <button type="button" class="flash-deck-main">
        <span class="flash-deck-glyph">📦</span>
        <span class="flash-deck-info">
          <span class="flash-deck-name">${escapeHtml(deck.name)}</span>
          <span class="flash-deck-count">${stat.total} ${t("flash.cards")} · <b>${stat.due}</b> ${t("flash.dueNow")}</span>
        </span>
        <span class="flash-deck-arrow">→</span>
      </button>
      <button type="button" class="flash-deck-delete" aria-label="${t("flash.deleteDeck")}">🗑️</button>`;
    row.querySelector(".flash-deck-main").addEventListener("click", () =>
      startFlashcardSession({ kind: "custom", deckId: deck.id }, deck.name));
    row.querySelector(".flash-deck-delete").addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(t("flash.confirmDelete", { name: deck.name }))) {
        deleteCustomDeck(deck.id);
        renderFlashCustomDecks();
      }
    });
    wrap.appendChild(row);
  });
}

function openFlashDeckPicker() {
  hideAllMainScreens();
  screenFlashDeck.classList.remove("hidden");
  renderFlashBuiltinDecks();
  renderFlashCustomDecks();
  document.getElementById("flash-import-status").textContent = "";
  document.getElementById("flash-import-status").className = "flash-import-status";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function startFlashcardSession(deckRef, label, forceAll) {
  const all = buildDeckCardDescriptors(deckRef);
  if (!all.length) return;
  const srs = getFlashSRS();
  const now = Date.now();
  let queue = forceAll ? all.slice() : all.filter(d => { const st = srs[d.id]; return !st || st.due <= now; });
  if (!queue.length) queue = all.slice();
  queue = shuffle(queue.slice());
  flashState = { deckRef, deckLabel: label, queue, index: 0, total: queue.length, ratedCount: 0 };
  hideAllMainScreens();
  screenFlashcard.classList.remove("hidden");
  flashcardStageEl.classList.remove("hidden");
  flashDoneEl.classList.add("hidden");
  renderCurrentFlashcard();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function updateFlashProgress() {
  flashProgressTextEl.textContent = t("flash.progress", {
    current: flashState.index + 1, total: flashState.total, label: flashState.deckLabel
  });
  flashDotsEl.innerHTML = "";
  const cap = 24;
  const n = Math.min(flashState.total, cap);
  for (let i = 0; i < n; i++) {
    const dot = document.createElement("span");
    dot.className = "dot" + (i < flashState.index ? " done" : i === flashState.index ? " current" : "");
    flashDotsEl.appendChild(dot);
  }
}

function renderCurrentFlashcard() {
  if (flashState.index >= flashState.queue.length) {
    showFlashDone();
    return;
  }
  const desc = flashState.queue[flashState.index];
  const content = getCardContent(desc);
  document.getElementById("flashcard-front").innerHTML = content.front;
  document.getElementById("flashcard-back").innerHTML = content.back;
  flashcardInnerEl.classList.remove("flipped");
  flashRateRowEl.classList.add("hidden");
  flashShowAnswerBtn.classList.remove("hidden");
  updateFlashProgress();
}

function revealFlashAnswer() {
  if (flashState.index >= flashState.queue.length) return;
  if (flashcardInnerEl.classList.contains("flipped")) return;
  flashcardInnerEl.classList.add("flipped");
  flashShowAnswerBtn.classList.add("hidden");
  flashRateRowEl.classList.remove("hidden");
}
flashShowAnswerBtn.addEventListener("click", revealFlashAnswer);

function showFlashDone() {
  flashcardStageEl.classList.add("hidden");
  flashShowAnswerBtn.classList.add("hidden");
  flashRateRowEl.classList.add("hidden");
  flashDotsEl.innerHTML = "";
  flashProgressTextEl.textContent = "";
  flashDoneSubEl.textContent = t("flash.doneSub", { count: flashState.ratedCount, label: flashState.deckLabel });
  flashDoneEl.classList.remove("hidden");
}

flashRateRowEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".flash-rate-btn");
  if (!btn) return;
  const rating = btn.dataset.rating;
  const desc = flashState.queue[flashState.index];
  rateFlashCard(desc.id, rating);
  flashState.ratedCount++;
  if (rating === "again") {
    const reinsertAt = Math.min(flashState.queue.length, flashState.index + 4);
    flashState.queue.splice(reinsertAt, 0, desc);
    flashState.total = flashState.queue.length;
  }
  flashState.index++;
  renderCurrentFlashcard();
});

document.getElementById("btn-flashdeck-back").addEventListener("click", () => {
  hideAllMainScreens();
  screenStart.classList.remove("hidden");
});
document.getElementById("btn-flashcard-back").addEventListener("click", openFlashDeckPicker);
document.getElementById("btn-flashcard-restart").addEventListener("click", () => {
  if (flashState.deckRef) startFlashcardSession(flashState.deckRef, flashState.deckLabel, true);
});
document.getElementById("btn-flash-review-again").addEventListener("click", () => {
  if (flashState.deckRef) startFlashcardSession(flashState.deckRef, flashState.deckLabel, true);
});
document.getElementById("btn-flash-choose-another").addEventListener("click", openFlashDeckPicker);
flashcardsToggleBtn.addEventListener("click", openFlashDeckPicker);

const btnLearnFlashcards = document.getElementById("btn-learn-flashcards");
btnLearnFlashcards.addEventListener("click", () => {
  const kind = currentLearnScript;
  if (kind !== "kotoba" && kind !== "kanji") return;
  const meta = SCRIPTS[kind].levelText.all;
  startFlashcardSession({ kind, tierKey: "all" }, `${SCRIPTS[kind].label} — ${tf(meta.title)}`);
});

/* ---- .apkg import wiring ---- */
const btnFlashImport = document.getElementById("btn-flash-import");
const flashApkgInput = document.getElementById("flash-apkg-input");
btnFlashImport.addEventListener("click", () => flashApkgInput.click());
flashApkgInput.addEventListener("change", async () => {
  const file = flashApkgInput.files && flashApkgInput.files[0];
  flashApkgInput.value = "";
  if (!file) return;
  const statusEl = document.getElementById("flash-import-status");
  btnFlashImport.disabled = true;
  statusEl.textContent = t("flash.importing");
  statusEl.className = "flash-import-status pending";
  try {
    const { name, cards } = await parseApkgFile(file);
    const id = addCustomDeck(name, cards);
    if (!id) throw new Error(t("flash.storageFull"));
    statusEl.textContent = t("flash.importSuccess", { count: cards.length, name });
    statusEl.className = "flash-import-status ok";
    renderFlashCustomDecks();
  } catch (err) {
    statusEl.textContent = t("flash.importFailed", { msg: (err && err.message) || String(err) });
    statusEl.className = "flash-import-status err";
  } finally {
    btnFlashImport.disabled = false;
  }
});

/* ---------------- init ---------------- */
document.documentElement.setAttribute("lang", LANG);
applyStaticTranslations();
document.querySelectorAll(".lang-btn").forEach(b => {
  b.classList.toggle("active", b.dataset.lang === LANG);
});
document.querySelector('#script-tabs .script-tab[data-script="hiragana"]').classList.add("active");
document.querySelector('#learn-script-tabs .script-tab[data-script="hiragana"]').classList.add("active");
renderLevels("hiragana");