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
  "quiz.usageNote": { en: "Note: {value}", id: "Catatan: {value}" },
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
    "--quiz-correct-fill": "#14475D", "--quiz-correct-fill-text": "#CFEFFC",
    "--match-selecting": "#3EC6FF", "--match-selecting-bg": "#1A222B", "--match-selecting-text": "#3EC6FF"
  } : {
    "--paper": "#EAF0F5", "--paper-dark": "#DCE6ED", "--card": "#F6FAFC",
    "--ink": "#16202A", "--ink-soft": "#55636F",
    "--indigo": "#0E8FC0", "--indigo-deep": "#0B6E97",
    "--vermillion": "#1D4ED8", "--gold": "#C98A1C", "--moss": "#2F9E5D",
    "--line": "rgba(22, 32, 42, 0.13)",
    "--quiz-correct": "#10B981", "--quiz-wrong": "#B23A2E",
    "--quiz-correct-fill": "#1D5B72", "--quiz-correct-fill-text": "#ECF9FE",
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

/* ---------------- sembunyikan tombol Flashcard & Settings pas kuis/flashcard ---------------- */
// .top-controls (tombol Flashcard + Settings) posisinya "fixed" nempel di
// pojok kanan-atas LAYAR MANAPUN — termasuk pas lagi ngerjain Kuis (biasa/
// Conquest/Speedrun, semuanya satu #screen-quiz yang sama), layar cerita
// Chapter Conquest, Match Mode (#screen-match), & layar Flashcard (deck
// picker #screen-flashdeck / study #screen-flashcard), yang bisa ganggu fokus &
// rawan kepencet gak sengaja pas lagi jawab soal/nyocokin ubin. Tombol
// flashcard-nya sendiri juga redundan pas udah di dalam flashcard mode —
// kedua layar itu udah punya tombol "Back" sendiri buat keluar, jadi ikonnya
// gak perlu ditampilin dobel. Disembunyikan otomatis lewat MutationObserver
// yang mantengin class "hidden" di kelima layar itu, biar gak perlu nambahin
// baris manual di tiap tempat mereka ditampilkan/disembunyikan (startQuiz,
// goToNextQuestion, renderConquestStory, renderResults, startMatchGame,
// openFlashDeckPicker, startFlashcardSession, tombol Back, dll — titik
// togglenya banyak banget, gampang ada yang kelewat kalau manual).
const topControlsEl = document.querySelector(".top-controls");
function updateTopControlsVisibility() {
  if (!topControlsEl) return;
  const quizEl = document.getElementById("screen-quiz");
  const conquestStoryEl = document.getElementById("screen-conquest-story");
  const matchEl = document.getElementById("screen-match");
  const flashDeckEl = document.getElementById("screen-flashdeck");
  const flashcardEl = document.getElementById("screen-flashcard");
  const inQuiz = (quizEl && !quizEl.classList.contains("hidden"))
    || (conquestStoryEl && !conquestStoryEl.classList.contains("hidden"))
    || (matchEl && !matchEl.classList.contains("hidden"))
    || (flashDeckEl && !flashDeckEl.classList.contains("hidden"))
    || (flashcardEl && !flashcardEl.classList.contains("hidden"));
  topControlsEl.classList.toggle("hidden", inQuiz);
}
["screen-quiz", "screen-conquest-story", "screen-match", "screen-flashdeck", "screen-flashcard"].forEach(id => {
  const el = document.getElementById(id);
  if (el) new MutationObserver(updateTopControlsVisibility).observe(el, { attributes: true, attributeFilter: ["class"] });
});
updateTopControlsVisibility();

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

// Sub-Tier 1.1: Kata Ganti Orang & Sapaan
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
    { en: "General, neutral word for 'person'. For a more polite tone, use かた (kata) instead.", id: "Kata umum/netral untuk 'orang'. Untuk kesan lebih sopan, gunakan かた (kata)." }],
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
    { en: "Good night, mom.", id: "Selamat tidur, ibu." }, "お休みなさい", "お母さん、お休みなさい。",
    { en: "Said right before going to sleep. The casual short form is just 'oyasumi'.", id: "Diucapkan tepat sebelum tidur. Bentuk santainya cukup 'おやすみ' saja." }],
  ["ありがとうございます", "arigatou gozaimasu", { en: "thank you", id: "terima kasih" }, "てつだって くれて、ありがとうございます。",
    [["てつだって", "Tetsudatte"], ["くれて", "kurete"], ["ありがとうございます", "arigatou gozaimasu"]],
    { en: "Thank you for helping me.", id: "Terima kasih sudah membantu saya." }, "", "手伝ってくれて、ありがとうございます。",
    { en: "Polite/formal form. The casual version among friends is just 'arigatou'.", id: "Bentuk sopan/formal. Ke teman dekat, bentuk santainya cukup 'ありがとう' saja." }],
  ["すみません", "sumimasen", { en: "excuse me / I'm sorry", id: "maaf / permisi" }, "すみません、いま なんじですか。",
    [["すみません", "Sumimasen"], ["いま", "ima"], ["なんじ", "nanji"], ["です", "desu"], ["か", "ka"]],
    { en: "Excuse me, what time is it now?", id: "Permisi, sekarang jam berapa?" }, "済みません", "済みません、今何時ですか。",
    { en: "Very versatile — can mean 'sorry', 'excuse me' to get someone's attention, or even 'thank you' (implying you troubled them).", id: "Kata serbaguna: bisa berarti 'maaf', 'permisi' saat memanggil perhatian orang, atau bahkan 'terima kasih' (menyiratkan sudah merepotkan)." }],
  ["はじめまして", "hajimemashite", { en: "how do you do / nice to meet you", id: "salam kenal" }, "はじめまして、わたしは アリです。",
    [["はじめまして", "Hajimemashite"], ["わたし", "watashi"], ["は", "wa"], ["アリ", "Ari"], ["です", "desu"]],
    { en: "Nice to meet you, I am Ari.", id: "Salam kenal, saya Ari." }, "初めまして", "初めまして、私はアリです。",
    { en: "Said only once, the very first time you meet someone — usually followed by your name and yoroshiku onegaishimasu.", id: "Diucapkan hanya sekali, saat pertama kali bertemu seseorang — biasanya diikuti nama & よろしくおねがいします." }],
  ["よろしくおねがいします", "yoroshiku onegaishimasu", { en: "please treat me well / nice to meet you", id: "mohon bantuannya / salam kenal" }, "どうぞ よろしく おねがいします。",
    [["どうぞ", "Douzo"], ["よろしく", "yoroshiku"], ["おねがいします", "onegaishimasu"]],
    { en: "Please treat me well.", id: "Mohon bantuannya." }, "よろしくお願いします", "どうぞよろしくお願いします。",
    { en: "An all-purpose phrase used when meeting someone, asking a favor, or closing a work arrangement — there's no exact one-word translation.", id: "Frasa serbaguna: dipakai saat berkenalan, minta tolong, atau menutup kesepakatan kerja sama — tidak ada padanan persis dalam bahasa Indonesia." }],
  ["わたしたち", "watashitachi", { en: "we / us", id: "kami / kita" }, "わたしたちは がくせいです。",
    [["わたしたち", "Watashitachi"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "We are students.", id: "Kami adalah murid/siswa." }, "私たち", "私たちは学生です。",
    { en: "Plural form of watashi, made by adding たち. A more casual male variant is bokutachi.", id: "Bentuk jamak dari わたし, dibuat dengan menambah たち. Versi santai untuk laki-laki: ぼくたち." }],
  ["かた", "kata", { en: "person (polite)", id: "orang (bentuk sopan dari hito)" }, "あの かたは どなたですか。",
    [["あの", "Ano"], ["かた", "kata"], ["は", "wa"], ["どなた", "donata"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person? (polite)", id: "Siapa orang itu? (sopan)" }, "方", "あの方はどなたですか。",
    { en: "The polite version of hito (person) — used instead of hito to show respect toward the person being discussed, e.g. a customer or an elder.", id: "Versi sopan dari ひと (orang) — dipakai alih-alih ひと untuk menghormati orang yang sedang dibicarakan, misalnya pelanggan atau orang yang lebih tua." }],
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
    { en: "Let's eat. (said before a meal)", id: "Selamat makan. (diucapkan sebelum makan)" }, "頂きます", "頂きます。",
    { en: "Said right before eating, as a small thanks to whoever prepared the food — even if it's just yourself.", id: "Diucapkan tepat sebelum mulai makan, sebagai ucapan terima kasih ke siapa pun yang menyiapkan makanan (bahkan diri sendiri)." }],
  ["ごちそうさまでした", "gochisousama deshita", { en: "thank you for the meal (said after eating)", id: "terima kasih atas makanannya (setelah makan)" }, "ごちそうさまでした。",
    [["ごちそうさまでした", "Gochisousama deshita"]],
    { en: "Thank you for the meal. (said after eating)", id: "Terima kasih atas makanannya. (setelah makan)" }, "ご馳走様でした", "ご馳走様でした。",
    { en: "Said after finishing a meal. The casual short form is just 'gochisousama'.", id: "Diucapkan setelah selesai makan. Bentuk santainya cukup 'ごちそうさま' saja." }],
  ["いってきます", "itte kimasu", { en: "I'm off / see you later (leaving home)", id: "saya berangkat dulu" }, "いってきます！",
    [["いってきます", "Ittekimasu"]],
    { en: "I'm off! (leaving home)", id: "Saya berangkat dulu!" }, "行ってきます", "行ってきます！",
    { en: "Said when leaving home or the office; the person staying behind replies with itterasshai.", id: "Diucapkan saat akan keluar rumah/kantor; dijawab dengan いってらっしゃい oleh orang yang tinggal." }],
  ["いってらっしゃい", "itterasshai", { en: "take care / see you later (to someone leaving)", id: "selamat jalan / hati-hati di jalan" }, "いってらっしゃい！",
    [["いってらっしゃい", "Itterasshai"]],
    { en: "Take care! (to someone leaving)", id: "Hati-hati di jalan!" }, "行ってらっしゃい", "行ってらっしゃい！",
    { en: "The reply to ittekimasu — said to the person who is about to leave.", id: "Jawaban untuk いってきます — diucapkan ke orang yang akan pergi." }],
  ["ただいま", "tadaima", { en: "I'm home", id: "saya pulang / kembali" }, "ただいま！",
    [["ただいま", "Tadaima"]],
    { en: "I'm home!", id: "Saya pulang!" }, "", "",
    { en: "Said right when you arrive home; the person already there answers with okaerinasai.", id: "Diucapkan tepat saat baru sampai di rumah; dijawab dengan おかえりなさい oleh yang sudah ada di rumah." }],
  ["おかえりなさい", "okaerinasai", { en: "welcome home", id: "selamat datang kembali" }, "おかえりなさい！",
    [["おかえりなさい", "Okaerinasai"]],
    { en: "Welcome home!", id: "Selamat datang kembali!" }, "お帰りなさい", "お帰りなさい！",
    { en: "The reply to tadaima — a warm welcome for someone who has just come home.", id: "Jawaban untuk ただいま — sambutan hangat untuk orang yang baru pulang." }],

  // -- Tambahan: kata ganti orang & orang-orang --
  ["あのひと", "ano hito", { en: "that person", id: "orang itu" }, "あのひとは せんせいですか。",
    [["あの", "Ano"], ["ひと", "hito"], ["は", "wa"], ["せんせい", "sensei"], ["です", "desu"], ["か", "ka"]],
    { en: "Is that person a teacher?", id: "Apakah orang itu guru?" }, "あの人", "あの人は先生ですか。",
    { en: "Combines ano (that, far) with hito (person) to point at someone away from both speaker and listener. For a more polite tone, swap hito for kata.", id: "Gabungan あの (itu, jauh) dan ひと (orang) untuk menunjuk orang yang jauh dari pembicara maupun lawan bicara. Untuk kesan lebih sopan, ganti ひと dengan かた." }],
  ["あのかた", "ano kata", { en: "that person (polite)", id: "beliau / orang itu (bentuk sopan)" }, "あのかたは たなかせんせいです。",
    [["あの", "Ano"], ["かた", "kata"], ["は", "wa"], ["たなかせんせい", "Tanaka-sensei"], ["です", "desu"]],
    { en: "That person (polite) is Mr./Ms. Tanaka, the teacher.", id: "Beliau adalah guru Tanaka." }, "あの方", "あの方は田中先生です。",
    { en: "The polite counterpart of ano hito, built from ano (that, far) plus kata (person, polite). Used to show respect toward someone being discussed, such as an elder or guest.", id: "Padanan sopan dari あの人, dibentuk dari あの (itu, jauh) plus かた (orang, sopan). Dipakai untuk menunjukkan rasa hormat pada orang yang dibicarakan, misalnya orang tua atau tamu." }],
  ["かれら", "karera", { en: "they / them", id: "mereka" }, "かれらは がくせいです。",
    [["かれら", "Karera"], ["は", "wa"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "They are students.", id: "Mereka adalah murid/siswa." }, "彼ら", "彼らは学生です。",
    { en: "Plural form of kare (he), made by adding ra. Mainly used for groups that include males or mixed/general groups — less common than minna or naming people directly in casual speech.", id: "Bentuk jamak dari かれ (dia laki-laki), dibuat dengan menambah ら. Terutama dipakai untuk kelompok berisi laki-laki atau kelompok campuran/umum — kurang umum dibanding みんな atau menyebut nama langsung dalam percakapan santai." }],
  ["だれ", "dare", { en: "who", id: "siapa" }, "あのひとは だれですか。",
    [["あの", "Ano"], ["ひと", "hito"], ["は", "wa"], ["だれ", "dare"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person?", id: "Siapa orang itu?" }, "誰", "あの人は誰ですか。",
    { en: "A basic question word asking about identity. For a more polite way to ask, use donata instead.", id: "Kata tanya dasar untuk menanyakan identitas seseorang. Untuk versi lebih sopan, gunakan どなた." }],
  ["どなた", "donata", { en: "who (polite)", id: "siapa (bentuk sopan)" }, "どなたですか。",
    [["どなた", "Donata"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is it? (polite)", id: "Siapa ya? (sopan)" }, "", "",
    { en: "The polite version of dare — commonly used when answering the door or phone, or addressing someone you don't know well.", id: "Versi sopan dari だれ — umum dipakai saat menjawab pintu, telepon, atau menyapa orang yang belum akrab." }],
  ["みんな", "minna", { en: "everyone (casual)", id: "semuanya (santai)" }, "みんな、げんき？",
    [["みんな", "Minna"], ["げんき", "genki"]],
    { en: "Is everyone doing well?", id: "Semuanya sehat?" }, "皆", "皆、元気？",
    { en: "A casual, everyday version of minasan — used with friends and family, while minasan fits more formal settings like speeches.", id: "Versi santai/sehari-hari dari みなさん — dipakai ke teman dan keluarga, sementara みなさん lebih cocok untuk situasi formal seperti pidato." }],

  // -- Tambahan: kata tunjuk benda, tempat, arah (ko-so-a-do) --
  ["これ", "kore", { en: "this (thing)", id: "ini (benda)" }, "これは なんですか。",
    [["これ", "Kore"], ["は", "wa"], ["なん", "nan"], ["です", "desu"], ["か", "ka"]],
    { en: "What is this?", id: "Ini apa?" }, "", "",
    { en: "Points to something close to the speaker. Part of the kore/sore/are/dore set — kore (near me), sore (near you), are (far from both), dore (which).", id: "Menunjuk benda yang dekat dengan pembicara. Bagian dari kelompok kore/sore/are/dore — kore (dekat saya), sore (dekat kamu), are (jauh dari keduanya), dore (yang mana)." }],
  ["それ", "sore", { en: "that (thing, near you)", id: "itu (benda, dekat lawan bicara)" }, "それは わたしの ほんです。",
    [["それ", "Sore"], ["は", "wa"], ["わたし", "watashi"], ["の", "no"], ["ほん", "hon"], ["です", "desu"]],
    { en: "That is my book.", id: "Itu buku saya." }, "", "",
    { en: "Used for something near the listener rather than the speaker — if it's far from both of you, use are instead.", id: "Dipakai untuk benda yang dekat dengan lawan bicara, bukan pembicara — kalau jauh dari keduanya, gunakan あれ." }],
  ["あれ", "are", { en: "that (thing, over there)", id: "itu (benda, jauh dari keduanya)" }, "あれは がっこうです。",
    [["あれ", "Are"], ["は", "wa"], ["がっこう", "gakkou"], ["です", "desu"]],
    { en: "That over there is a school.", id: "Itu di sana adalah sekolah." }, "", "",
    { en: "Points at something far from both the speaker and listener, often still visible in the distance.", id: "Menunjuk benda yang jauh dari pembicara maupun lawan bicara, biasanya masih terlihat dari kejauhan." }],
  ["どれ", "dore", { en: "which (one)", id: "yang mana" }, "あなたの かばんは どれですか。",
    [["あなた", "Anata"], ["の", "no"], ["かばん", "kaban"], ["は", "wa"], ["どれ", "dore"], ["です", "desu"], ["か", "ka"]],
    { en: "Which one is your bag?", id: "Tas kamu yang mana?" }, "", "",
    { en: "Asks someone to pick one option out of three or more choices that are all visible.", id: "Dipakai untuk menanyakan pilihan dari tiga pilihan atau lebih yang semuanya terlihat." }],
  ["この", "kono", { en: "this ~ (+ noun)", id: "~ ini (+ kata benda)" }, "この ほんは おもしろいです。",
    [["この", "Kono"], ["ほん", "hon"], ["は", "wa"], ["おもしろい", "omoshiroi"], ["です", "desu"]],
    { en: "This book is interesting.", id: "Buku ini menarik." }, "", "",
    { en: "Always attaches directly before a noun, unlike kore which stands alone — e.g. kono hon (this book), never kono by itself.", id: "Selalu menempel langsung di depan kata benda, berbeda dari これ yang berdiri sendiri — mis. この本 (buku ini), tidak pernah この sendirian." }],
  ["その", "sono", { en: "that ~ (+ noun, near you)", id: "~ itu (+ kata benda, dekat lawan bicara)" }, "その ペンを ください。",
    [["その", "Sono"], ["ペン", "pen"], ["を", "wo"], ["ください", "kudasai"]],
    { en: "Please give me that pen.", id: "Tolong berikan pena itu." }, "", "",
    { en: "Modifies a noun that is near the listener, e.g. sono pen (that pen you're holding).", id: "Menerangkan kata benda yang dekat dengan lawan bicara, mis. そのペン (pena itu yang kamu pegang)." }],
  ["あの", "ano", { en: "that ~ over there (+ noun)", id: "~ itu di sana (+ kata benda)" }, "あの やまは たかいです。",
    [["あの", "Ano"], ["やま", "yama"], ["は", "wa"], ["たかい", "takai"], ["です", "desu"]],
    { en: "That mountain over there is tall.", id: "Gunung itu di sana tinggi." }, "", "",
    { en: "Points at a noun that's far from both speaker and listener — the same ano used in ano hito and ano kata.", id: "Menunjuk kata benda yang jauh dari pembicara maupun lawan bicara — あの yang sama seperti pada あの人 dan あの方." }],
  ["どの", "dono", { en: "which ~ (+ noun)", id: "~ yang mana (+ kata benda)" }, "どの せんせいが すきですか。",
    [["どの", "Dono"], ["せんせい", "sensei"], ["が", "ga"], ["すき", "suki"], ["です", "desu"], ["か", "ka"]],
    { en: "Which teacher do you like?", id: "Guru yang mana yang kamu suka?" }, "", "",
    { en: "Asks the listener to specify one noun out of several, e.g. dono sensei (which teacher).", id: "Meminta lawan bicara memilih satu kata benda dari beberapa pilihan, mis. どの先生 (guru yang mana)." }],
  ["ここ", "koko", { en: "here", id: "di sini" }, "ここは がっこうです。",
    [["ここ", "Koko"], ["は", "wa"], ["がっこう", "gakkou"], ["です", "desu"]],
    { en: "This place is a school.", id: "Di sini adalah sekolah." }, "", "",
    { en: "Refers to a place near the speaker. Part of the koko/soko/asoko/doko place set.", id: "Merujuk tempat yang dekat dengan pembicara. Bagian dari kelompok tempat koko/soko/asoko/doko." }],
  ["そこ", "soko", { en: "there (near you)", id: "di situ (dekat lawan bicara)" }, "でんわは そこに あります。",
    [["でんわ", "Denwa"], ["は", "wa"], ["そこ", "soko"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "The phone is over there (near you).", id: "Teleponnya ada di situ." }, "", "",
    { en: "Refers to a place near the listener rather than the speaker.", id: "Merujuk tempat yang dekat dengan lawan bicara, bukan pembicara." }],
  ["あそこ", "asoko", { en: "over there", id: "di sana" }, "としょかんは あそこです。",
    [["としょかん", "Toshokan"], ["は", "wa"], ["あそこ", "asoko"], ["です", "desu"]],
    { en: "The library is over there.", id: "Perpustakaannya ada di sana." }, "", "",
    { en: "Refers to a place far from both speaker and listener, but still visible or generally known.", id: "Merujuk tempat yang jauh dari pembicara maupun lawan bicara, tapi masih terlihat atau diketahui bersama." }],
  ["どこ", "doko", { en: "where", id: "di mana" }, "トイレは どこですか。",
    [["トイレ", "Toire"], ["は", "wa"], ["どこ", "doko"], ["です", "desu"], ["か", "ka"]],
    { en: "Where is the restroom?", id: "Di mana toiletnya?" }, "", "",
    { en: "Asks about a location. Also appears later as part of a wider question-word set alongside itsu (when) and nani (what).", id: "Menanyakan lokasi/tempat. Juga muncul lagi nanti sebagai bagian dari kelompok kata tanya bersama いつ (kapan) dan なに (apa)." }],
  ["こちら", "kochira", { en: "this way / this direction (polite)", id: "sebelah sini / arah sini (sopan)" }, "こちらへ どうぞ。",
    [["こちら", "Kochira"], ["へ", "e"], ["どうぞ", "douzo"]],
    { en: "This way, please.", id: "Silakan ke sebelah sini." }, "", "",
    { en: "A polite way to indicate direction — also used to politely mean 'this person' when introducing someone, e.g. kochira wa Tanaka-san desu.", id: "Cara sopan untuk menunjuk arah — juga dipakai sebagai bentuk sopan dari 'orang ini' saat memperkenalkan seseorang, mis. こちらは田中さんです。" }],
  ["そちら", "sochira", { en: "that way (near you, polite)", id: "sebelah situ / arah situ (sopan)" }, "そちらは あついですか。",
    [["そちら", "Sochira"], ["は", "wa"], ["あつい", "atsui"], ["です", "desu"], ["か", "ka"]],
    { en: "Is it hot over there (where you are)?", id: "Di sebelah situ panas ya?" }, "", "",
    { en: "The polite direction word for a place near the listener — often used when asking about the other person's location, e.g. on the phone.", id: "Kata arah sopan untuk tempat dekat lawan bicara — sering dipakai saat menanyakan lokasi lawan bicara, misalnya lewat telepon." }],
  ["あちら", "achira", { en: "that way (over there, polite)", id: "sebelah sana / arah sana (sopan)" }, "おてあらいは あちらです。",
    [["おてあらい", "Otearai"], ["は", "wa"], ["あちら", "achira"], ["です", "desu"]],
    { en: "The restroom is that way.", id: "Toiletnya di sebelah sana." }, "", "",
    { en: "The polite direction word for a place far from both speaker and listener — commonly heard from staff giving directions.", id: "Kata arah sopan untuk tempat yang jauh dari pembicara maupun lawan bicara — sering didengar dari staf yang menunjukkan arah." }],
  ["どちら", "dochira", { en: "which way / which one (polite)", id: "arah mana / yang mana (sopan)" }, "おくには どちらですか。",
    [["おくに", "Okuni"], ["は", "wa"], ["どちら", "dochira"], ["です", "desu"], ["か", "ka"]],
    { en: "Which country are you from? (polite)", id: "Anda berasal dari negara mana? (sopan)" }, "", "",
    { en: "The polite version of dore/doko — used to politely ask 'which one' or 'where', commonly in okuni wa dochira desu ka? (where are you from?).", id: "Versi sopan dari どれ/どこ — dipakai untuk bertanya 'yang mana' atau 'di mana' secara sopan, umum pada kalimat お国はどちらですか (Anda berasal dari mana?)." }],

  // -- Tambahan: sapaan & ungkapan dasar --
  ["どういたしまして", "dou itashimashite", { en: "you're welcome", id: "sama-sama" }, "どういたしまして。",
    [["どういたしまして", "Dou itashimashite"]],
    { en: "You're welcome.", id: "Sama-sama." }, "", "",
    { en: "The standard reply to arigatou gozaimasu. In casual speech it's often skipped entirely or replaced with a simple iie (not at all).", id: "Jawaban standar untuk ありがとうございます. Dalam percakapan santai sering dilewati begitu saja atau diganti dengan いいえ (tidak, sama sekali tidak)." }],
  ["はい", "hai", { en: "yes / okay", id: "ya / baik" }, "はい、そうです。",
    [["はい", "Hai"], ["そう", "sou"], ["です", "desu"]],
    { en: "Yes, that's right.", id: "Ya, benar." }, "", "",
    { en: "Used to agree, confirm, or show you're listening — also said when answering a roll call or handing something over politely.", id: "Dipakai untuk menyetujui, mengonfirmasi, atau menunjukkan sedang menyimak — juga diucapkan saat absen atau memberikan sesuatu secara sopan." }],
  ["いいえ", "iie", { en: "no / not at all", id: "tidak / bukan" }, "いいえ、ちがいます。",
    [["いいえ", "Iie"], ["ちがいます", "chigaimasu"]],
    { en: "No, that's not right.", id: "Tidak, itu salah/bukan." }, "", "",
    { en: "The standard way to disagree or deny something politely — also used humbly to deflect a compliment.", id: "Cara standar untuk menyangkal atau menolak sesuatu secara sopan — juga dipakai secara merendah untuk menanggapi pujian." }],
  ["なまえ", "namae", { en: "name", id: "nama" }, "おなまえは なんですか。",
    [["おなまえ", "Onamae"], ["は", "wa"], ["なん", "nan"], ["です", "desu"], ["か", "ka"]],
    { en: "What is your name?", id: "Siapa nama Anda?" }, "名前", "お名前は何ですか。",
    { en: "Often used with the polite prefix o- (onamae) when asking someone else's name; drop the o- when talking about your own.", id: "Sering dipakai dengan awalan sopan お (おなまえ) saat menanyakan nama orang lain; awalan お dihilangkan untuk nama sendiri." }]
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
  ["きょうだい", "kyoudai", { en: "siblings", id: "saudara kandung" }, "きょうだいは さんにん います。",
    [["きょうだい", "Kyoudai"], ["は", "wa"], ["さんにん", "sannin"], ["います", "imasu"]],
    { en: "I have three siblings.", id: "Saya punya tiga saudara kandung." }, "兄弟", "兄弟は三人います。",
    { en: "Covers brothers and sisters together regardless of gender — used when talking about siblings as a group.", id: "Mencakup kakak/adik laki-laki maupun perempuan sekaligus — dipakai saat membicarakan saudara kandung secara umum." }],
  ["りょうしん", "ryoushin", { en: "parents", id: "orang tua" }, "りょうしんは いなかに すんでいます。",
    [["りょうしん", "Ryoushin"], ["は", "wa"], ["いなか", "inaka"], ["に", "ni"], ["すんでいます", "sundeimasu"]],
    { en: "My parents live in the countryside.", id: "Orang tua saya tinggal di desa/kampung halaman." }, "両親", "両親は田舎に住んでいます。",
    { en: "Neutral word for 'parents' (father and mother together), typically used for your own parents.", id: "Kata netral untuk 'orang tua' (ayah dan ibu sekaligus), biasanya dipakai untuk orang tua sendiri." }],

  // -- Tambahan: anak & hubungan luar --
  ["こども", "kodomo", { en: "child / children", id: "anak / anak-anak" }, "あの こどもは げんきです。",
    [["あの", "Ano"], ["こども", "kodomo"], ["は", "wa"], ["げんき", "genki"], ["です", "desu"]],
    { en: "That child is energetic.", id: "Anak itu ceria/sehat." }, "子供", "あの子供は元気です。",
    { en: "A neutral, common word for 'child' — often written as a mix of kanji and hiragana (kodomo) to avoid an overly formal look.", id: "Kata umum/netral untuk 'anak' — sering ditulis campuran kanji dan hiragana (子ども) supaya tidak terlalu formal terkesan." }],
  ["おこさん", "okosan", { en: "child (someone else's, polite)", id: "anak (orang lain, sopan)" }, "おこさんは なんさいですか。",
    [["おこさん", "Okosan"], ["は", "wa"], ["なんさい", "nansai"], ["です", "desu"], ["か", "ka"]],
    { en: "How old is your child?", id: "Berapa umur anak Anda?" }, "お子さん", "お子さんは何歳ですか。",
    { en: "The polite way to refer to someone else's child — built from the honorific o + ko (child) + san.", id: "Cara sopan menyebut anak orang lain — dibentuk dari awalan hormat お + こ (anak) + さん." }],
  ["せいと", "seito", { en: "student / pupil", id: "murid / siswa" }, "この がっこうには せいとが おおいです。",
    [["この", "Kono"], ["がっこう", "gakkou"], ["には", "niwa"], ["せいと", "seito"], ["が", "ga"], ["おおい", "ooi"], ["です", "desu"]],
    { en: "This school has many students.", id: "Sekolah ini banyak muridnya." }, "生徒", "この学校には生徒が多いです。",
    { en: "Typically used for students in elementary through high school; for university students, use gakusei instead.", id: "Biasanya dipakai untuk murid SD sampai SMA; untuk mahasiswa, gunakan 学生." }],
  ["がくせい", "gakusei", { en: "student (university) / pupil", id: "mahasiswa / pelajar" }, "わたしは だいがくの がくせいです。",
    [["わたし", "Watashi"], ["は", "wa"], ["だいがく", "daigaku"], ["の", "no"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "I am a university student.", id: "Saya adalah mahasiswa." }, "学生", "私は大学の学生です。",
    { en: "A general word for 'student' that can apply at any level, though it's most often used for university students specifically.", id: "Kata umum untuk 'pelajar/siswa' yang bisa dipakai di segala jenjang, tapi paling sering dipakai khusus untuk mahasiswa." }],
  ["せんせい", "sensei", { en: "teacher / instructor", id: "guru / pengajar" }, "たなかせんせいは にほんごの せんせいです。",
    [["たなかせんせい", "Tanaka-sensei"], ["は", "wa"], ["にほんご", "nihongo"], ["の", "no"], ["せんせい", "sensei"], ["です", "desu"]],
    { en: "Mr./Ms. Tanaka is a Japanese teacher.", id: "Tanaka-sensei adalah guru bahasa Jepang." }, "先生", "田中先生は日本語の先生です。",
    { en: "Used both as a title attached after someone's name (like -san) and as a standalone word for 'teacher' — also used for doctors and other respected professionals.", id: "Dipakai baik sebagai gelar setelah nama seseorang (seperti さん) maupun sebagai kata berdiri sendiri untuk 'guru' — juga dipakai untuk dokter dan profesi terhormat lainnya." }],
  ["りゅうがくせい", "ryuugakusei", { en: "international student / exchange student", id: "pelajar asing / mahasiswa pertukaran" }, "かのじょは にほんの りゅうがくせいです。",
    [["かのじょ", "Kanojo"], ["は", "wa"], ["にほん", "nihon"], ["の", "no"], ["りゅうがくせい", "ryuugakusei"], ["です", "desu"]],
    { en: "She is an international student in Japan.", id: "Dia adalah pelajar asing di Jepang." }, "留学生", "彼女は日本の留学生です。",
    { en: "Built from ryuugaku (studying abroad) plus sei (student) — refers to a student studying in a foreign country.", id: "Dibentuk dari 留学 (belajar di luar negeri) plus 生 (pelajar) — merujuk pelajar yang sedang belajar di negara asing." }]
];

// Sub-Tier 1.3: Profesi & Peran (3)
const KOTOBA_N5_CH1_3 = [
  ["がくせい", "gakusei", { en: "student", id: "siswa / mahasiswa" }, "がくせいは まいにち がっこうへ いきます。",
    [["がくせい", "Gakusei"], ["は", "wa"], ["まいにち", "mainichi"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "The student goes to school every day.", id: "Siswa itu pergi ke sekolah setiap hari." }, "学生", "",
    { en: "General word for a student at any level (school or university). For a foreign student specifically, the more specific word is ryuugakusei.", id: "Kata umum untuk pelajar di jenjang apa pun (sekolah maupun kuliah). Untuk pelajar asing secara spesifik, ada kata yang lebih spesifik yaitu りゅうがくせい." }],
  ["せんせい", "sensei", { en: "teacher / professor / doctor (respectful title)", id: "guru / dosen / dokter (sapaan hormat)" }, "せんせいは とても やさしいです。",
    [["せんせい", "Sensei"], ["は", "wa"], ["とても", "totemo"], ["やさしい", "yasashii"], ["です", "desu"]],
    { en: "The teacher is very kind.", id: "Guru itu sangat baik." }, "先生", "先生はとても優しいです。",
    { en: "A respectful title for teachers, doctors, or other experts — can be used directly as a form of address, not just a job title. Never use it to refer to your own job; for 'teacher' as a plain occupation, use kyoushi instead.", id: "Gelar hormat untuk guru, dokter, atau ahli lain — bisa dipakai langsung sebagai sapaan, bukan cuma sebagai jabatan. Jangan pakai untuk menyebut pekerjaan diri sendiri; untuk 'guru' sebagai profesi biasa, gunakan きょうし." }],
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
    { en: "An age-category word (adult vs. child), not an occupation — the opposite of kodomo (child).", id: "Kata kategori usia (dewasa vs. anak), bukan profesi — lawan kata dari こども (anak)." }],
  ["こども", "kodomo", { en: "child, children", id: "anak-anak" }, "あの こどもは にわで あそんでいます。",
    [["あの", "Ano"], ["こども", "kodomo"], ["は", "wa"], ["にわ", "niwa"], ["で", "de"], ["あそんでいます", "asondeimasu"]],
    { en: "That child is playing in the yard.", id: "Anak itu sedang bermain di halaman." }, "子供", "あの子供は庭で遊んでいます。",
    { en: "Can refer to a specific child, children in general, or — depending on context — 'my child/children'. Add -tachi (kodomotachi) to mark the plural explicitly, e.g. kodomotachi ('the children').", id: "Bisa merujuk pada seorang anak tertentu, anak-anak secara umum, atau — tergantung konteks — 'anak saya'. Tambahkan -tachi (kodomotachi) untuk menandai bentuk jamak secara eksplisit, misalnya kodomotachi ('anak-anak')." }],
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

  // -- Tambahan: profesi & sebutan orang --
  ["けいかん", "keikan", { en: "police officer", id: "polisi" }, "あそこに けいかんが います。",
    [["あそこ", "Asoko"], ["に", "ni"], ["けいかん", "keikan"], ["が", "ga"], ["います", "imasu"]],
    { en: "There is a police officer over there.", id: "Di sana ada polisi." }, "警官", "あそこに警官がいます。",
    { en: "A common, everyday word for a police officer; the more formal/official term is keisatsukan.", id: "Kata umum sehari-hari untuk polisi; istilah yang lebih formal/resmi adalah けいさつかん." }],
  ["せいと", "seito", { en: "student, pupil (junior/senior high)", id: "murid (SMP/SMA)" }, "この クラスには せいとが さんじゅうにん います。",
    [["この", "Kono"], ["クラス", "kurasu"], ["には", "niwa"], ["せいと", "seito"], ["が", "ga"], ["さんじゅうにん", "sanjuunin"], ["います", "imasu"]],
    { en: "This class has 30 students.", id: "Kelas ini ada 30 murid." }, "生徒", "このクラスには生徒が三十人います。",
    { en: "Used for students below university level, especially junior high and high school; university students are gakusei instead.", id: "Dipakai untuk murid di bawah jenjang kuliah, terutama SMP dan SMA; mahasiswa disebut がくせい." }],
  ["かた", "kata", { en: "person (polite)", id: "orang (bentuk sopan dari hito)" }, "あの かたは どなたですか。",
    [["あの", "Ano"], ["かた", "kata"], ["は", "wa"], ["どなた", "donata"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person? (polite)", id: "Siapa orang itu? (sopan)" }, "方", "あの方はどなたですか。",
    { en: "The polite counterpart of hito — used instead of hito to show respect toward the person being discussed, e.g. a customer or an elder.", id: "Padanan sopan dari ひと — dipakai alih-alih ひと untuk menghormati orang yang sedang dibicarakan, misalnya pelanggan atau orang yang lebih tua." }],
  ["ひと", "hito", { en: "person", id: "orang" }, "あの ひとは だれですか。",
    [["あの", "Ano"], ["ひと", "hito"], ["は", "wa"], ["だれ", "dare"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person?", id: "Siapa orang itu?" }, "人", "あの人は誰ですか。",
    { en: "General, neutral word for 'person'. For a more polite tone, use kata instead.", id: "Kata umum/netral untuk 'orang'. Untuk kesan lebih sopan, gunakan かた." }],
  ["みなさん", "minasan", { en: "everyone", id: "semuanya / hadirin" }, "みなさん、おはようございます。",
    [["みなさん", "Minasan"], ["おはようございます", "ohayou gozaimasu"]],
    { en: "Good morning, everyone.", id: "Selamat pagi, semuanya." }, "皆さん", "皆さん、おはようございます。",
    { en: "Used to address a group of people at once, e.g. in front of a class or at a meeting.", id: "Dipakai untuk menyapa banyak orang sekaligus, mis. di depan kelas atau saat rapat." }],
  ["しごと", "shigoto", { en: "job / work", id: "pekerjaan" }, "わたしの しごとは せんせいです。",
    [["わたし", "Watashi"], ["の", "no"], ["しごと", "shigoto"], ["は", "wa"], ["せんせい", "sensei"], ["です", "desu"]],
    { en: "My job is teacher.", id: "Pekerjaan saya adalah guru." }, "仕事", "私の仕事は先生です。",
    { en: "A general word for job, occupation, or task — different from hataraku, the verb 'to work'.", id: "Kata umum untuk pekerjaan atau tugas — berbeda dari はたらく (kata kerja 'bekerja')." }],
  ["にほんご", "nihongo", { en: "Japanese (language)", id: "bahasa Jepang" }, "わたしは にほんごを べんきょうします。",
    [["わたし", "Watashi"], ["は", "wa"], ["にほんご", "nihongo"], ["を", "wo"], ["べんきょうします", "benkyou shimasu"]],
    { en: "I study Japanese.", id: "Saya belajar bahasa Jepang." }, "日本語", "私は日本語を勉強します。",
    { en: "Made of nihon (Japan) + go (language) — the same go ending marks other language names, e.g. eigo (English).", id: "Terdiri dari にほん (Jepang) + ご (bahasa) — akhiran ご yang sama dipakai untuk nama bahasa lain, mis. えいご (bahasa Inggris)." }],
  ["えいご", "eigo", { en: "English (language)", id: "bahasa Inggris" }, "かのじょは えいごが じょうずです。",
    [["かのじょ", "Kanojo"], ["は", "wa"], ["えいご", "eigo"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "She is good at English.", id: "Dia pintar bahasa Inggris." }, "英語", "彼女は英語が上手です。",
    { en: "Ei comes from the kanji for 'England' — the same go ending marks a language name, as in nihongo (Japanese).", id: "えい berasal dari kanji untuk 'Inggris' — akhiran ご yang sama menandai nama bahasa, seperti pada にほんご (bahasa Jepang)." }]
];

// Sub-Tier 2.1: Waktu Harian & Keterangan Waktu (5)
const KOTOBA_N5_CH2_1 = [
  ["いま", "ima", { en: "now", id: "sekarang" }, "いま なんじですか。",
    [["いま", "Ima"], ["なんじ", "nanji"], ["です", "desu"], ["か", "ka"]],
    { en: "What time is it now?", id: "Sekarang jam berapa?" }, "今", "今何時ですか。",
    { en: "Often paired with なんじ (what time) or used alone to mean 'right now', contrasting with the past or the future.", id: "Sering dipakai bersama なんじ (jam berapa) atau berdiri sendiri untuk 'sekarang', berlawanan dengan waktu lampau atau masa depan." }],
  ["きょう", "kyou", { en: "today", id: "hari ini" }, "きょうは とても あついです。",
    [["きょう", "Kyou"], ["は", "wa"], ["とても", "totemo"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "Today is very hot.", id: "Hari ini sangat panas." }, "今日", "今日はとても暑いです。",
    { en: "The kanji 今日 has a special reading here (kyou) — it does not follow the usual readings of 今 (ima) or 日 (hi/nichi).", id: "Kanji 今日 memiliki bacaan khusus di sini (kyou) — tidak mengikuti bacaan biasa dari 今 (ima) atau 日 (hi/nichi)." }],
  ["あした", "ashita", { en: "tomorrow", id: "besok" }, "あした がっこうへ いきます。",
    [["あした", "Ashita"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I will go to school tomorrow.", id: "Besok saya akan pergi ke sekolah." }, "明日", "明日学校へ行きます。",
    { en: "A more formal/written alternative is あす (asu); あした is the common spoken form.", id: "Alternatif yang lebih formal/tulisan adalah あす (asu); あした adalah bentuk lisan yang umum dipakai." }],
  ["きのう", "kinou", { en: "yesterday", id: "kemarin" }, "きのう えいがを みました。",
    [["きのう", "Kinou"], ["えいが", "eiga"], ["を", "wo"], ["みました", "mimashita"]],
    { en: "I watched a movie yesterday.", id: "Saya menonton film kemarin." }, "昨日", "昨日映画を見ました。",
    { en: "Just like きょう and あした, the kanji 昨日 has a special reading here rather than following regular kanji readings.", id: "Sama seperti きょう dan あした, kanji 昨日 punya bacaan khusus di sini, bukan mengikuti bacaan kanji biasa." }],
  ["あさって", "asatte", { en: "the day after tomorrow", id: "lusa" }, "あさって にほんへ いきます。",
    [["あさって", "Asatte"], ["にほん", "nihon"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I will go to Japan the day after tomorrow.", id: "Saya akan pergi ke Jepang lusa." }, "明後日", "明後日日本へ行きます。",
    { en: "Pairs with おととい (the day before yesterday) — together they extend the today/tomorrow/yesterday timeline one more day in each direction.", id: "Berpasangan dengan おととい (kemarin lusa) — bersama-sama memperluas garis waktu hari ini/besok/kemarin satu hari lagi di setiap arah." }],
  ["おととい", "ototoi", { en: "the day before yesterday", id: "kemarin lusa" }, "おととい あめが ふりました。",
    [["おととい", "Ototoi"], ["あめ", "ame"], ["が", "ga"], ["ふりました", "furimashita"]],
    { en: "It rained the day before yesterday.", id: "Hujan turun kemarin lusa." }, "一昨日", "一昨日雨が降りました。",
    { en: "Used less often in daily conversation than きのう or あした, but still commonly tested at N5 level.", id: "Lebih jarang dipakai dalam percakapan harian dibanding きのう atau あした, tapi masih sering muncul di ujian N5." }],
  ["あさ", "asa", { en: "morning", id: "pagi" }, "あさ ろくじに おきます。",
    [["あさ", "Asa"], ["ろくじ", "rokuji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I wake up at six in the morning.", id: "Saya bangun jam enam pagi." }, "朝", "朝六時に起きます。",
    { en: "Combine with まい for まいあさ (every morning), or with けさ for 'this morning'.", id: "Gabungkan dengan まい untuk まいあさ (setiap pagi), atau lihat けさ untuk 'pagi ini'." }],
  ["ひる", "hiru", { en: "noon, daytime", id: "siang, tengah hari" }, "ひるに ごはんを たべます。",
    [["ひる", "Hiru"], ["に", "ni"], ["ごはん", "gohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat lunch at noon.", id: "Saya makan siang pada tengah hari." }, "昼", "昼にご飯を食べます。",
    { en: "Appears in ひるごはん (lunch, literally 'noon meal') and ひるやすみ (lunch break).", id: "Muncul dalam ひるごはん (makan siang, secara harfiah 'makanan tengah hari') dan ひるやすみ (istirahat siang)." }],
  ["ばん", "ban", { en: "evening, night", id: "malam" }, "ばん じゅうじに ねます。",
    [["ばん", "Ban"], ["じゅうじ", "juuji"], ["に", "ni"], ["ねます", "nemasu"]],
    { en: "I sleep at 10 in the evening.", id: "Saya tidur jam 10 malam." }, "晩", "晩十時に寝ます。",
    { en: "Overlaps with よる (night), but ばん is usually tied to specific time words like こんばん (tonight) or まいばん (every night); よる is the more general term.", id: "Bertumpang tindih dengan よる (malam), tapi ばん biasanya terikat pada kata waktu spesifik seperti こんばん (malam ini) atau まいばん (setiap malam); よる adalah istilah yang lebih umum." }],
  ["よる", "yoru", { en: "night", id: "malam" }, "よる べんきょうします。",
    [["よる", "Yoru"], ["べんきょうします", "benkyoushimasu"]],
    { en: "I study at night.", id: "Saya belajar pada malam hari." }, "夜", "夜勉強します。",
    { en: "The general word for 'night', usable on its own without a specific time word attached.", id: "Kata umum untuk 'malam', bisa dipakai sendiri tanpa kata waktu spesifik yang menempel." }],
  ["ゆうがた", "yuugata", { en: "evening, dusk", id: "sore, petang" }, "ゆうがた さんぽを します。",
    [["ゆうがた", "Yuugata"], ["さんぽ", "sanpo"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I take a walk in the evening.", id: "Saya berjalan-jalan pada sore/petang hari." }, "夕方", "夕方散歩をします。",
    { en: "Refers to the dusk period between afternoon and night, roughly when the sun is setting.", id: "Merujuk pada waktu senja antara sore dan malam, kira-kira saat matahari terbenam." }],
  ["けさ", "kesa", { en: "this morning", id: "tadi pagi" }, "けさ はやく おきました。",
    [["けさ", "Kesa"], ["はやく", "hayaku"], ["おきました", "okimashita"]],
    { en: "I woke up early this morning.", id: "Saya bangun pagi-pagi sekali tadi pagi." }, "今朝", "今朝早く起きました。",
    { en: "A fixed reading combining 今 (this/now) and 朝 (morning) — it does not simply follow the まい + あさ pattern used for まいあさ.", id: "Bacaan baku yang menggabungkan 今 (ini/sekarang) dan 朝 (pagi) — bukan sekadar mengikuti pola まい + あさ seperti pada まいあさ." }],
  ["こんばん", "konban", { en: "tonight", id: "malam ini" }, "こんばん パーティーが あります。",
    [["こんばん", "Konban"], ["パーティー", "paatii"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a party tonight.", id: "Ada pesta malam ini." }, "今晩", "今晩パーティーがあります。",
    { en: "Also appears in the greeting こんばんは (good evening) — note the extra は there marks it as a set greeting, not this word alone.", id: "Juga muncul pada salam こんばんは (selamat malam) — perhatikan は tambahan di sana menandai itu salam baku, bukan kata ini sendiri." }],
  ["まいにち", "mainichi", { en: "every day", id: "setiap hari" }, "まいにち にほんごを べんきょうします。",
    [["まいにち", "Mainichi"], ["にほんご", "nihongo"], ["を", "wo"], ["べんきょうします", "benkyoushimasu"]],
    { en: "I study Japanese every day.", id: "Saya belajar bahasa Jepang setiap hari." }, "毎日", "毎日日本語を勉強します。",
    { en: "まい (every) attaches to many time words: まいあさ (every morning), まいばん (every night), まいしゅう (every week).", id: "まい (setiap) bisa ditempelkan ke banyak kata waktu: まいあさ (setiap pagi), まいばん (setiap malam), まいしゅう (setiap minggu)." }],
  ["まいばん", "maiban", { en: "every night", id: "setiap malam" }, "まいばん にじかん テレビを みます。",
    [["まいばん", "Maiban"], ["にじかん", "nijikan"], ["テレビ", "terebi"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I watch TV for two hours every night.", id: "Saya menonton TV selama dua jam setiap malam." }, "毎晩", "毎晩二時間テレビを見ます。",
    { en: "Built from まい (every) + ばん (night) — the same pattern as まいあさ and まいにち.", id: "Dibentuk dari まい (setiap) + ばん (malam) — pola yang sama seperti まいあさ dan まいにち." }],
  ["ゆうべ", "yuube", { en: "last night", id: "tadi malam" }, "ゆうべ あめが ふりました。",
    [["ゆうべ", "Yuube"], ["あめ", "ame"], ["が", "ga"], ["ふりました", "furimashita"]],
    { en: "It rained last night.", id: "Hujan turun tadi malam." }, "夕べ", "夕べ雨が降りました。",
    { en: "Refers specifically to last night (a fixed point in the past), unlike よる which just means 'night' in general.", id: "Merujuk khusus pada tadi malam (titik waktu tertentu di masa lampau), berbeda dari よる yang hanya berarti 'malam' secara umum." }],

  // -- Tambahan: setiap pagi, AM/PM, & keterangan waktu relatif --
  ["まいあさ", "maiasa", { en: "every morning", id: "setiap pagi" }, "まいあさ ジョギングを します。",
    [["まいあさ", "Maiasa"], ["ジョギング", "jogingu"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I go jogging every morning.", id: "Saya jogging setiap pagi." }, "毎朝", "毎朝ジョギングをします。",
    { en: "Built from mai (every) + asa (morning) — the same pattern as mainichi and maiban.", id: "Dibentuk dari まい (setiap) + あさ (pagi) — pola yang sama seperti まいにち dan まいばん." }],
  ["ごぜん", "gozen", { en: "AM, morning (before noon)", id: "AM / pagi-siang (sebelum jam 12 siang)" }, "かいぎは ごぜん くじからです。",
    [["かいぎ", "Kaigi"], ["は", "wa"], ["ごぜん", "gozen"], ["くじ", "kuji"], ["から", "kara"], ["です", "desu"]],
    { en: "The meeting is from 9 AM.", id: "Rapatnya mulai jam 9 pagi." }, "午前", "会議は午前九時からです。",
    { en: "Attaches before a clock time to specify AM, e.g. gozen kuji (9 AM) — its opposite is gogo (PM).", id: "Ditempel sebelum jam untuk menandai AM, mis. 午前九時 (jam 9 pagi) — kebalikannya adalah 午後 (PM)." }],
  ["ごご", "gogo", { en: "PM, afternoon (after noon)", id: "PM / siang-malam (setelah jam 12 siang)" }, "がっこうは ごご さんじに おわります。",
    [["がっこう", "Gakkou"], ["は", "wa"], ["ごご", "gogo"], ["さんじ", "sanji"], ["に", "ni"], ["おわります", "owarimasu"]],
    { en: "School ends at 3 PM.", id: "Sekolah berakhir jam 3 sore." }, "午後", "学校は午後三時に終わります。",
    { en: "The counterpart to gozen — attaches before a clock time to specify PM, e.g. gogo sanji (3 PM).", id: "Pasangan dari 午前 — ditempel sebelum jam untuk menandai PM, mis. 午後三時 (jam 3 sore)." }],
  ["いつ", "itsu", { en: "when", id: "kapan" }, "たんじょうびは いつですか。",
    [["たんじょうび", "Tanjoubi"], ["は", "wa"], ["いつ", "itsu"], ["です", "desu"], ["か", "ka"]],
    { en: "When is your birthday?", id: "Kapan ulang tahunmu?" }, "", "",
    { en: "A basic question word asking about time — has no common kanji form and is almost always written in hiragana.", id: "Kata tanya dasar untuk menanyakan waktu — tidak punya bentuk kanji umum dan hampir selalu ditulis dalam hiragana." }],
  ["いつも", "itsumo", { en: "always, usually", id: "selalu, biasanya" }, "わたしは いつも ろくじに おきます。",
    [["わたし", "Watashi"], ["は", "wa"], ["いつも", "itsumo"], ["ろくじ", "rokuji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I always wake up at six.", id: "Saya selalu bangun jam enam." }, "", "",
    { en: "Describes a habitual, unchanging routine — built from itsu (when) plus mo (also/even), literally 'at any time'.", id: "Menjelaskan kebiasaan/rutinitas tetap — dibentuk dari いつ (kapan) plus も (juga/bahkan), secara harfiah 'di waktu kapan pun'." }],
  ["ときどき", "tokidoki", { en: "sometimes, occasionally", id: "kadang-kadang" }, "ときどき えいがを みます。",
    [["ときどき", "Tokidoki"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I sometimes watch movies.", id: "Saya kadang-kadang menonton film." }, "時々", "時々映画を見ます。",
    { en: "Sits in the middle of the frequency scale — less often than itsumo (always) but more than never.", id: "Berada di tengah skala frekuensi, lebih jarang dari いつも (selalu) tapi lebih sering dari tidak pernah." }],
  ["あとで", "atode", { en: "later, afterwards", id: "nanti" }, "あとで でんわします。",
    [["あとで", "Atode"], ["でんわします", "denwa shimasu"]],
    { en: "I'll call you later.", id: "Saya akan menelepon nanti." }, "後で", "後で電話します。",
    { en: "Points to an unspecified moment after now — often used when postponing an action to sometime later today.", id: "Menunjuk waktu tak tentu setelah sekarang — sering dipakai saat menunda tindakan sampai nanti hari ini." }],
  ["もうすぐ", "mousugu", { en: "soon, almost time", id: "sebentar lagi" }, "もうすぐ なつやすみです。",
    [["もうすぐ", "Mousugu"], ["なつやすみ", "natsuyasumi"], ["です", "desu"]],
    { en: "Summer vacation is coming soon.", id: "Sebentar lagi libur musim panas." }, "", "",
    { en: "Combines mou (already) with sugu (soon) to emphasize that something is very close in time.", id: "Menggabungkan もう (sudah) dengan すぐ (segera) untuk menekankan sesuatu yang sangat dekat waktunya." }],
  ["すぐに", "suguni", { en: "right away, immediately", id: "segera" }, "すぐに きて ください。",
    [["すぐに", "Suguni"], ["きて", "kite"], ["ください", "kudasai"]],
    { en: "Please come right away.", id: "Tolong segera datang." }, "", "",
    { en: "Emphasizes immediacy from the moment of speaking, unlike mousugu which looks slightly ahead to a near-future moment.", id: "Menekankan kesegeraan sejak saat berbicara, berbeda dari もうすぐ yang melihat sedikit ke depan menuju momen mendekat." }],
  ["まだ", "mada", { en: "still / not yet", id: "masih / belum" }, "まだ たべていません。",
    [["まだ", "Mada"], ["たべていません", "tabeteimasen"]],
    { en: "I haven't eaten yet.", id: "Saya belum makan." }, "", "",
    { en: "With an affirmative verb it means 'still' (mada nemui desu — still sleepy); with a negative verb it means 'not yet' (mada tabeteimasen — haven't eaten yet).", id: "Dengan kata kerja afirmatif berarti 'masih' (mada nemui desu — masih ngantuk); dengan kata kerja negatif berarti 'belum' (mada tabeteimasen — belum makan)." }],
  ["もう", "mou", { en: "already", id: "sudah" }, "もう ごはんを たべました。",
    [["もう", "Mou"], ["ごはん", "gohan"], ["を", "wo"], ["たべました", "tabemashita"]],
    { en: "I already ate.", id: "Saya sudah makan." }, "", "",
    { en: "Marks a completed action or a change of state — the opposite pairing to mada (not yet) when asking about completion, e.g. mou tabemashita ka? (have you eaten already?).", id: "Menandai tindakan yang sudah selesai atau perubahan keadaan — berpasangan berlawanan dengan まだ (belum) saat menanyakan apakah sudah selesai, mis. もう食べましたか (apakah sudah makan?)." }],
  ["やすみ", "yasumi", { en: "day off / rest / holiday", id: "hari libur / istirahat" }, "あしたは やすみです。",
    [["あした", "Ashita"], ["は", "wa"], ["やすみ", "yasumi"], ["です", "desu"]],
    { en: "Tomorrow is a day off.", id: "Besok libur." }, "休み", "明日は休みです。",
    { en: "The noun form of the verb yasumu (to rest) — used for holidays, days off work or school, or a short break.", id: "Bentuk kata benda dari kata kerja やすむ (beristirahat) — dipakai untuk hari libur, cuti kerja/sekolah, atau jeda istirahat." }]
];

// Sub-Tier 2.2: Hari, Bulan, & Jam (26)
const KOTOBA_N5_CH2_2 = [
  ["げつようび", "getsuyoubi", { en: "Monday", id: "hari Senin" }, "げつようびに がっこうへ いきます。",
    [["げつようび", "Getsuyoubi"], ["に", "ni"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school on Monday.", id: "Saya pergi ke sekolah hari Senin." }, "月曜日", "月曜日に学校へ行きます。",
    { en: "曜日 (youbi) means 'day of the week' — every day name ends with this, e.g. かようび (Tuesday), すいようび (Wednesday).", id: "曜日 (youbi) berarti 'hari dalam seminggu' — semua nama hari diakhiri dengan ini, misalnya かようび (Selasa), すいようび (Rabu)." }],
  ["かようび", "kayoubi", { en: "Tuesday", id: "hari Selasa" }, "かようびに テストが あります。",
    [["かようび", "Kayoubi"], ["に", "ni"], ["テスト", "tesuto"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a test on Tuesday.", id: "Ada tes hari Selasa." }, "火曜日", "火曜日にテストがあります。",
    { en: "The kanji 火 (fire) gives the か sound here; linking day names to the classical elements can help with memorization.", id: "Kanji 火 (api) memberi bunyi か di sini; mengaitkan nama hari dengan elemen klasik bisa membantu menghafal." }],
  ["すいようび", "suiyoubi", { en: "Wednesday", id: "hari Rabu" }, "すいようびは やすみです。",
    [["すいようび", "Suiyoubi"], ["は", "wa"], ["やすみ", "yasumi"], ["です", "desu"]],
    { en: "Wednesday is a day off.", id: "Hari Rabu adalah hari libur." }, "水曜日", "水曜日は休みです。",
    { en: "水 (water) gives the す sound here — the same kanji seen in みず (water).", id: "水 (air) memberi bunyi す di sini — kanji yang sama seperti pada みず (air)." }],
  ["もくようび", "mokuyoubi", { en: "Thursday", id: "hari Kamis" }, "もくようびに としょかんへ いきます。",
    [["もくようび", "Mokuyoubi"], ["に", "ni"], ["としょかん", "toshokan"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the library on Thursday.", id: "Saya pergi ke perpustakaan hari Kamis." }, "木曜日", "木曜日に図書館へ行きます。",
    { en: "木 (tree/wood) gives the もく sound here — the same kanji seen in き (tree).", id: "木 (pohon/kayu) memberi bunyi もく di sini — kanji yang sama seperti pada き (pohon)." }],
  ["きんようび", "kinyoubi", { en: "Friday", id: "hari Jumat" }, "きんようびに パーティーが あります。",
    [["きんようび", "Kinyoubi"], ["に", "ni"], ["パーティー", "paatii"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a party on Friday.", id: "Ada pesta hari Jumat." }, "金曜日", "金曜日にパーティーがあります。",
    { en: "金 (gold/money) gives きん here — many people look forward to きんようび as the last day before the weekend.", id: "金 (emas/uang) memberi bunyi きん di sini — banyak orang menantikan きんようび sebagai hari terakhir sebelum akhir pekan." }],
  ["どようび", "doyoubi", { en: "Saturday", id: "hari Sabtu" }, "どようびは いつも いえに います。",
    [["どようび", "Doyoubi"], ["は", "wa"], ["いつも", "itsumo"], ["いえ", "ie"], ["に", "ni"], ["います", "imasu"]],
    { en: "On Saturdays I am always at home.", id: "Hari Sabtu saya selalu di rumah." }, "土曜日", "土曜日はいつも家にいます。",
    { en: "土 (earth/soil) gives ど here; どようび and にちようび together make up the weekend (しゅうまつ).", id: "土 (tanah) memberi bunyi ど di sini; どようび dan にちようび bersama membentuk akhir pekan (しゅうまつ)." }],
  ["にちようび", "nichiyoubi", { en: "Sunday", id: "hari Minggu" }, "にちようびに かぞくと でかけます。",
    [["にちようび", "Nichiyoubi"], ["に", "ni"], ["かぞく", "kazoku"], ["と", "to"], ["でかけます", "dekakemasu"]],
    { en: "On Sunday I go out with my family.", id: "Hari Minggu saya keluar bersama keluarga." }, "日曜日", "日曜日に家族と出かけます。",
    { en: "日 (day/sun) gives にち here, the same kanji used in きょう (今日) and まいにち (毎日).", id: "日 (hari/matahari) memberi bunyi にち di sini, kanji yang sama dengan yang dipakai pada きょう (今日) dan まいにち (毎日)." }],
  ["なんようび", "nanyoubi", { en: "what day of the week", id: "hari apa" }, "きょうは なんようびですか。",
    [["きょう", "Kyou"], ["は", "wa"], ["なんようび", "nanyoubi"], ["です", "desu"], ["か", "ka"]],
    { en: "What day of the week is today?", id: "Hari ini hari apa?" }, "何曜日", "今日は何曜日ですか。",
    { en: "なん (何) means 'what/how many' and combines with many counters, e.g. なんじ (what time), なんがつ (what month).", id: "なん (何) berarti 'apa/berapa' dan bisa digabung dengan banyak kata bantu bilangan, misalnya なんじ (jam berapa), なんがつ (bulan apa)." }],
  ["いちじかん", "ichijikan", { en: "one hour", id: "satu jam" }, "まいにち いちじかん べんきょうします。",
    [["まいにち", "Mainichi"], ["いちじかん", "ichijikan"], ["べんきょうします", "benkyoushimasu"]],
    { en: "I study for one hour every day.", id: "Saya belajar selama satu jam setiap hari." }, "一時間", "毎日一時間勉強します。",
    { en: "A specific duration count formed with いち (1) + じかん (hour); compare with the more generic じかん (time).", id: "Hitungan durasi spesifik yang dibentuk dari いち (1) + じかん (jam); bandingkan dengan じかん (waktu) yang lebih umum." }],
  ["じかん", "jikan", { en: "time, hours", id: "waktu, jam" }, "じかんが ありません。",
    [["じかん", "Jikan"], ["が", "ga"], ["ありません", "arimasen"]],
    { en: "I don't have time.", id: "Saya tidak punya waktu." }, "時間", "時間がありません。",
    { en: "じかん means 'time' in general, while いちじかん, にじかん, etc. count a specific number of hours.", id: "じかん berarti 'waktu' secara umum, sedangkan いちじかん, にじかん, dst. menghitung jumlah jam tertentu." }],
  ["ふん", "fun", { en: "minute", id: "menit" }, "ごふん まって ください。",
    [["ごふん", "Gofun"], ["まって", "matte"], ["ください", "kudasai"]],
    { en: "Please wait five minutes.", id: "Tolong tunggu lima menit." }, "分", "五分待ってください。",
    { en: "Pronounced ぷん after certain numbers (いっぷん, さんぷん, よんぷん, etc.) instead of ふん — listen for the pattern when counting.", id: "Diucapkan ぷん setelah bilangan tertentu (いっぷん, さんぷん, よんぷん, dst.) bukan ふん — perhatikan polanya saat menghitung." }],
  ["びょう", "byou", { en: "second", id: "detik" }, "じゅうびょう まって ください。",
    [["じゅうびょう", "Juubyou"], ["まって", "matte"], ["ください", "kudasai"]],
    { en: "Please wait ten seconds.", id: "Tolong tunggu sepuluh detik." }, "秒", "十秒待ってください。",
    { en: "The smallest common time unit taught at N5, after ふん (minute) and じかん (hour).", id: "Satuan waktu terkecil yang umum diajarkan di N5, setelah ふん (menit) dan じかん (jam)." }],
  ["まいあさ", "maiasa", { en: "every morning", id: "setiap pagi" }, "まいあさ コーヒーを のみます。",
    [["まいあさ", "Maiasa"], ["コーヒー", "koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee every morning.", id: "Saya minum kopi setiap pagi." }, "毎朝", "毎朝コーヒーを飲みます。",
    { en: "Built from まい (every) + あさ (morning) — the same pattern as まいばん (every night) and まいにち (every day).", id: "Dibentuk dari まい (setiap) + あさ (pagi) — pola yang sama seperti まいばん (setiap malam) dan まいにち (setiap hari)." }],
  ["いちがつ", "ichigatsu", { en: "January", id: "bulan Januari" }, "いちがつは さむいです。",
    [["いちがつ", "Ichigatsu"], ["は", "wa"], ["さむい", "samui"], ["です", "desu"]],
    { en: "January is cold.", id: "Bulan Januari dingin." }, "一月", "一月は寒いです。",
    { en: "Months are simply number + がつ, except for the irregular readings on April (4), July (7), and September (9).", id: "Nama bulan hanyalah bilangan + がつ, kecuali bacaan tidak beraturan pada bulan April (4), Juli (7), dan September (9)." }],
  ["にがつ", "nigatsu", { en: "February", id: "bulan Februari" }, "にがつに にほんへ いきます。",
    [["にがつ", "Nigatsu"], ["に", "ni"], ["にほん", "nihon"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I will go to Japan in February.", id: "Saya akan pergi ke Jepang bulan Februari." }, "二月", "二月に日本へ行きます。",
    { en: "Regular pattern: に (2) + がつ (month) — most months simply follow number + がつ.", id: "Pola beraturan: に (2) + がつ (bulan) — kebanyakan bulan hanya mengikuti bilangan + がつ." }],
  ["さんがつ", "sangatsu", { en: "March", id: "bulan Maret" }, "さんがつに がっこうを そつぎょうします。",
    [["さんがつ", "Sangatsu"], ["に", "ni"], ["がっこう", "gakkou"], ["を", "wo"], ["そつぎょうします", "sotsugyoushimasu"]],
    { en: "I will graduate from school in March.", id: "Saya akan lulus sekolah bulan Maret." }, "三月", "三月に学校を卒業します。",
    { en: "In Japan, the school year typically ends in March and starts in April.", id: "Di Jepang, tahun ajaran biasanya berakhir bulan Maret dan mulai bulan April." }],
  ["しがつ", "shigatsu", { en: "April", id: "bulan April" }, "しがつに あたらしい がっこうが はじまります。",
    [["しがつ", "Shigatsu"], ["に", "ni"], ["あたらしい", "atarashii"], ["がっこう", "gakkou"], ["が", "ga"], ["はじまります", "hajimarimasu"]],
    { en: "The new school year starts in April.", id: "Tahun ajaran baru dimulai bulan April." }, "四月", "四月に新しい学校が始まります。",
    { en: "Irregular reading: April uses し, not よん, unlike the number 4 used elsewhere.", id: "Bacaan tidak beraturan: bulan April memakai し, bukan よん, berbeda dari bilangan 4 yang dipakai di tempat lain." }],
  ["ごがつ", "gogatsu", { en: "May", id: "bulan Mei" }, "ごがつは あたたかいです。",
    [["ごがつ", "Gogatsu"], ["は", "wa"], ["あたたかい", "atatakai"], ["です", "desu"]],
    { en: "May is warm.", id: "Bulan Mei hangat." }, "五月", "五月は暖かいです。",
    { en: "Regular pattern again: ご (5) + がつ.", id: "Pola beraturan lagi: ご (5) + がつ." }],
  ["ろくがつ", "rokugatsu", { en: "June", id: "bulan Juni" }, "ろくがつに あめが よく ふります。",
    [["ろくがつ", "Rokugatsu"], ["に", "ni"], ["あめ", "ame"], ["が", "ga"], ["よく", "yoku"], ["ふります", "furimasu"]],
    { en: "It rains a lot in June.", id: "Hujan sering turun bulan Juni." }, "六月", "六月に雨がよく降ります。",
    { en: "June falls within Japan's rainy season (つゆ).", id: "Bulan Juni termasuk dalam musim hujan Jepang (つゆ)." }],
  ["しちがつ", "shichigatsu", { en: "July", id: "bulan Juli" }, "しちがつに なつやすみが はじまります。",
    [["しちがつ", "Shichigatsu"], ["に", "ni"], ["なつやすみ", "natsuyasumi"], ["が", "ga"], ["はじまります", "hajimarimasu"]],
    { en: "Summer vacation starts in July.", id: "Libur musim panas dimulai bulan Juli." }, "七月", "七月に夏休みが始まります。",
    { en: "Irregular reading: July uses しち, not なな, for the number 7.", id: "Bacaan tidak beraturan: bulan Juli memakai しち, bukan なな, untuk bilangan 7." }],
  ["はちがつ", "hachigatsu", { en: "August", id: "bulan Agustus" }, "はちがつは いちばん あついです。",
    [["はちがつ", "Hachigatsu"], ["は", "wa"], ["いちばん", "ichiban"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "August is the hottest.", id: "Bulan Agustus paling panas." }, "八月", "八月は一番暑いです。",
    { en: "Regular pattern: はち (8) + がつ.", id: "Pola beraturan: はち (8) + がつ." }],
  ["くがつ", "kugatsu", { en: "September", id: "bulan September" }, "くがつに がっこうが はじまります。",
    [["くがつ", "Kugatsu"], ["に", "ni"], ["がっこう", "gakkou"], ["が", "ga"], ["はじまります", "hajimarimasu"]],
    { en: "School starts in September.", id: "Sekolah dimulai bulan September." }, "九月", "九月に学校が始まります。",
    { en: "Irregular reading: September uses く, not きゅう, for the number 9.", id: "Bacaan tidak beraturan: bulan September memakai く, bukan きゅう, untuk bilangan 9." }],
  ["じゅうがつ", "juugatsu", { en: "October", id: "bulan Oktober" }, "じゅうがつに おまつりが あります。",
    [["じゅうがつ", "Juugatsu"], ["に", "ni"], ["おまつり", "omatsuri"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a festival in October.", id: "Ada festival bulan Oktober." }, "十月", "十月にお祭りがあります。",
    { en: "Regular pattern: じゅう (10) + がつ.", id: "Pola beraturan: じゅう (10) + がつ." }],
  ["じゅういちがつ", "juuichigatsu", { en: "November", id: "bulan November" }, "じゅういちがつは すずしいです。",
    [["じゅういちがつ", "Juuichigatsu"], ["は", "wa"], ["すずしい", "suzushii"], ["です", "desu"]],
    { en: "November is cool.", id: "Bulan November sejuk." }, "十一月", "十一月は涼しいです。",
    { en: "Formed by combining じゅういち (11) + がつ, following the same regular pattern as most months.", id: "Dibentuk dengan menggabungkan じゅういち (11) + がつ, mengikuti pola beraturan yang sama seperti kebanyakan bulan." }],
  ["じゅうにがつ", "juunigatsu", { en: "December", id: "bulan Desember" }, "じゅうにがつに くにへ かえります。",
    [["じゅうにがつ", "Juunigatsu"], ["に", "ni"], ["くに", "kuni"], ["へ", "e"], ["かえります", "kaerimasu"]],
    { en: "I will return to my country in December.", id: "Saya akan pulang ke negara saya bulan Desember." }, "十二月", "十二月に国へ帰ります。",
    { en: "The last month of the year — formed regularly from じゅうに (12) + がつ.", id: "Bulan terakhir dalam setahun — dibentuk secara beraturan dari じゅうに (12) + がつ." }],
  ["なんがつ", "nangatsu", { en: "what month", id: "bulan apa" }, "たんじょうびは なんがつですか。",
    [["たんじょうび", "Tanjoubi"], ["は", "wa"], ["なんがつ", "nangatsu"], ["です", "desu"], ["か", "ka"]],
    { en: "What month is your birthday?", id: "Bulan apa ulang tahunmu?" }, "何月", "誕生日は何月ですか。",
    { en: "Like なんようび, this combines なん (what) directly with the counter がつ.", id: "Seperti なんようび, kata ini menggabungkan なん (apa) langsung dengan kata bantu bilangan がつ." }],

  // -- Tambahan: siklus bulan (ini/lalu/depan/setiap) --
  ["こんげつ", "kongetsu", { en: "this month", id: "bulan ini" }, "こんげつは いそがしいです。",
    [["こんげつ", "Kongetsu"], ["は", "wa"], ["いそがしい", "isogashii"], ["です", "desu"]],
    { en: "This month is busy.", id: "Bulan ini sibuk." }, "今月", "今月は忙しいです。",
    { en: "Built from kon (this/now) + getsu (month) — follows the same pattern as its weekly and yearly counterparts, konshuu and kotoshi.", id: "Dibentuk dari こん (ini/sekarang) + げつ (bulan) — mengikuti pola yang sama seperti pasangannya di minggu dan tahun, こんしゅう dan ことし." }],
  ["せんげつ", "sengetsu", { en: "last month", id: "bulan lalu" }, "せんげつ りょこうを しました。",
    [["せんげつ", "Sengetsu"], ["りょこう", "ryokou"], ["を", "wo"], ["しました", "shimashita"]],
    { en: "I traveled last month.", id: "Saya bepergian bulan lalu." }, "先月", "先月旅行をしました。",
    { en: "Sen (previous) attaches to time words to mean 'last ~' — compare senshuu (last week).", id: "せん (sebelumnya) ditempel pada kata waktu untuk berarti 'yang lalu' — bandingkan dengan せんしゅう (minggu lalu)." }],
  ["らいげつ", "raigetsu", { en: "next month", id: "bulan depan" }, "らいげつ にほんへ いきます。",
    [["らいげつ", "Raigetsu"], ["にほん", "nihon"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I will go to Japan next month.", id: "Saya akan pergi ke Jepang bulan depan." }, "来月", "来月日本へ行きます。",
    { en: "Rai (next/coming) attaches to time words to mean 'next ~' — compare raishuu (next week) and rainen (next year).", id: "らい (depan/mendatang) ditempel pada kata waktu untuk berarti '~ depan' — bandingkan dengan らいしゅう (minggu depan) dan らいねん (tahun depan)." }],
  ["まいつき", "maitsuki", { en: "every month", id: "setiap bulan" }, "まいつき ほんを かいます。",
    [["まいつき", "Maitsuki"], ["ほん", "hon"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy a book every month.", id: "Saya membeli buku setiap bulan." }, "毎月", "毎月本を買います。",
    { en: "Can also be read maigetsu — both are correct, though maitsuki is the more common spoken reading.", id: "Bisa juga dibaca まいげつ — keduanya benar, tapi まいつき lebih umum dipakai dalam percakapan." }],

  // -- Tambahan: jam, menit, durasi, & kata tanyanya --
  ["いちじ", "ichiji", { en: "1 o'clock (~ji = o'clock counter)", id: "jam 1 (~ji = kata bantu bilangan jam)" }, "いま いちじです。",
    [["いま", "Ima"], ["いちじ", "ichiji"], ["です", "desu"]],
    { en: "It is 1 o'clock now.", id: "Sekarang jam 1." }, "一時", "今一時です。",
    { en: "~ji attaches to a number to state the time on the clock, e.g. niji (2 o'clock), sanji (3 o'clock) — don't confuse this with ~jikan, which counts a duration in hours instead.", id: "~じ ditempel pada bilangan untuk menyatakan jam di arloji, mis. にじ (jam 2), さんじ (jam 3) — jangan bingung dengan ~じかん, yang menghitung durasi dalam jam." }],
  ["なんじ", "nanji", { en: "what time", id: "jam berapa" }, "いま なんじですか。",
    [["いま", "Ima"], ["なんじ", "nanji"], ["です", "desu"], ["か", "ka"]],
    { en: "What time is it now?", id: "Sekarang jam berapa?" }, "何時", "今何時ですか。",
    { en: "Combines nan (what) with the ~ji clock counter — one of the most common questions in daily conversation.", id: "Menggabungkan なん (apa) dengan kata bantu bilangan jam ~じ — salah satu pertanyaan paling umum dalam percakapan sehari-hari." }],
  ["なんぷん", "nanpun", { en: "how many minutes, what minute", id: "berapa menit / menit berapa" }, "いま なんじ なんぷんですか。",
    [["いま", "Ima"], ["なんじ", "nanji"], ["なんぷん", "nanpun"], ["です", "desu"], ["か", "ka"]],
    { en: "What time is it right now (hour and minute)?", id: "Sekarang jam berapa menit berapa?" }, "何分", "今何時何分ですか。",
    { en: "Pairs with nanji to ask for the exact time down to the minute — note the pun sound rather than fun after nan.", id: "Berpasangan dengan なんじ untuk menanyakan waktu tepat hingga menitnya — perhatikan bunyi ぷん bukan ふん setelah なん." }],
  ["はん", "han", { en: "half (past), 30 minutes", id: "setengah / 30 menit" }, "いま くじ はんです。",
    [["いま", "Ima"], ["くじ", "kuji"], ["はん", "han"], ["です", "desu"]],
    { en: "It is now half past nine.", id: "Sekarang jam setengah sepuluh (jam 9 lewat 30 menit)." }, "半", "今九時半です。",
    { en: "Attaches after a clock hour to mean 'thirty minutes past', e.g. kuji han (9:30) — note this differs from the Indonesian 'setengah', which counts toward the next hour.", id: "Ditempel setelah jam untuk berarti 'lewat tiga puluh menit', mis. くじはん (jam 9:30) — perhatikan ini berbeda dari 'setengah' dalam bahasa Indonesia yang menghitung menuju jam berikutnya." }],
  ["なんじかん", "nanjikan", { en: "how many hours", id: "berapa jam" }, "まいにち なんじかん べんきょうしますか。",
    [["まいにち", "Mainichi"], ["なんじかん", "nanjikan"], ["べんきょうします", "benkyoushimasu"], ["か", "ka"]],
    { en: "How many hours do you study every day?", id: "Setiap hari kamu belajar berapa jam?" }, "何時間", "毎日何時間勉強しますか。",
    { en: "Asks about a duration in hours, unlike nanji which asks for a specific clock time — compare ichijikan (one hour).", id: "Menanyakan durasi dalam jam, berbeda dari なんじ yang menanyakan jam pada arloji — bandingkan dengan いちじかん (satu jam)." }],
  ["ごろ", "goro", { en: "around, about (a point in time)", id: "kira-kira / sekitar (jam/waktu)" }, "しちじごろ いえに つきます。",
    [["しちじごろ", "Shichiji goro"], ["いえ", "ie"], ["に", "ni"], ["つきます", "tsukimasu"]],
    { en: "I'll arrive home around 7 o'clock.", id: "Saya akan tiba di rumah sekitar jam 7." }, "頃", "七時頃家に着きます。",
    { en: "Attaches after a specific point in time (a clock hour, a date) to mean 'around' that point — for a span/duration instead, use gurai.", id: "Ditempel setelah titik waktu tertentu (jam, tanggal) untuk berarti 'sekitar' titik itu — untuk durasi/rentang, gunakan ぐらい." }],
  ["ぐらい", "gurai", { en: "about, approximately (a duration or amount)", id: "kira-kira / sekitar (durasi/jumlah)" }, "にじかんぐらい かかります。",
    [["にじかんぐらい", "Nijikan gurai"], ["かかります", "kakarimasu"]],
    { en: "It takes about two hours.", id: "Kira-kira memakan waktu dua jam." }, "", "",
    { en: "Attaches after an amount or duration (not a specific clock point) to mean 'roughly' — also written/pronounced kurai; goro is used for a specific point in time instead.", id: "Ditempel setelah jumlah atau durasi (bukan titik waktu tertentu) untuk berarti 'kurang lebih' — juga ditulis/diucapkan くらい; untuk titik waktu tertentu gunakan ごろ." }],
  ["まえ", "mae", { en: "before, minus (in time expressions)", id: "sebelum / kurang (dalam keterangan waktu)" }, "くじ ごふん まえです。",
    [["くじ", "Kuji"], ["ごふん", "gofun"], ["まえ", "mae"], ["です", "desu"]],
    { en: "It is five minutes before nine (8:55).", id: "Sekarang kurang 5 menit jam 9 (jam 8:55)." }, "前", "九時五分前です。",
    { en: "Placed after a number of minutes and before the target hour to mean 'X minutes before' that hour — the opposite is sugi (past).", id: "Diletakkan setelah jumlah menit dan sebelum jam target untuk berarti 'kurang X menit' dari jam itu — kebalikannya adalah すぎ (lewat)." }],
  ["すぎ", "sugi", { en: "past, after (in time expressions)", id: "lewat (dalam keterangan waktu)" }, "くじ ごふん すぎです。",
    [["くじ", "Kuji"], ["ごふん", "gofun"], ["すぎ", "sugi"], ["です", "desu"]],
    { en: "It is five minutes past nine (9:05).", id: "Sekarang jam 9 lewat 5 menit (jam 9:05)." }, "過ぎ", "九時五分過ぎです。",
    { en: "Placed after a number of minutes and the hour to mean 'X minutes past' that hour — the opposite of mae (before).", id: "Diletakkan setelah jumlah menit dan jam untuk berarti 'lewat X menit' dari jam itu — kebalikan dari まえ (sebelum)." }],
  ["から", "kara", { en: "from (a point in time or place)", id: "dari (jam/waktu atau tempat)" }, "がっこうは くじからです。",
    [["がっこう", "Gakkou"], ["は", "wa"], ["くじ", "kuji"], ["から", "kara"], ["です", "desu"]],
    { en: "School is from 9 o'clock.", id: "Sekolah dimulai dari jam 9." }, "", "",
    { en: "Marks the starting point of a time range or a place — very often paired with made (until) to state a full range, e.g. kuji kara sanji made (from 9 to 3).", id: "Menandai titik awal suatu rentang waktu atau tempat — sangat sering dipasangkan dengan まで (sampai) untuk menyatakan rentang penuh, mis. くじから さんじまで (dari jam 9 sampai jam 3)." }],
  ["まで", "made", { en: "until, up to (a point in time or place)", id: "sampai (jam/waktu atau tempat)" }, "がっこうは さんじまでです。",
    [["がっこう", "Gakkou"], ["は", "wa"], ["さんじ", "sanji"], ["まで", "made"], ["です", "desu"]],
    { en: "School is until 3 o'clock.", id: "Sekolah berlangsung sampai jam 3." }, "", "",
    { en: "Marks the ending point of a time range or a place — pairs with kara (from) to state a complete range.", id: "Menandai titik akhir suatu rentang waktu atau tempat — berpasangan dengan から (dari) untuk menyatakan rentang penuh." }],

  // -- Tambahan: siklus minggu --
  ["こんしゅう", "konshuu", { en: "this week", id: "minggu ini" }, "こんしゅうは いそがしいです。",
    [["こんしゅう", "Konshuu"], ["は", "wa"], ["いそがしい", "isogashii"], ["です", "desu"]],
    { en: "This week is busy.", id: "Minggu ini sibuk." }, "今週", "今週は忙しいです。",
    { en: "Follows the same kon (this) + shuu (week) pattern as kongetsu (this month) and kotoshi (this year).", id: "Mengikuti pola こん (ini) + しゅう (minggu) yang sama seperti こんげつ (bulan ini) dan ことし (tahun ini)." }],
  ["せんしゅう", "senshuu", { en: "last week", id: "minggu lalu" }, "せんしゅう ともだちに あいました。",
    [["せんしゅう", "Senshuu"], ["ともだち", "tomodachi"], ["に", "ni"], ["あいました", "aimashita"]],
    { en: "I met a friend last week.", id: "Saya bertemu teman minggu lalu." }, "先週", "先週友達に会いました。",
    { en: "Sen (previous) + shuu (week) — compare sengetsu (last month).", id: "せん (sebelumnya) + しゅう (minggu) — bandingkan dengan せんげつ (bulan lalu)." }],
  ["らいしゅう", "raishuu", { en: "next week", id: "minggu depan" }, "らいしゅう テストが あります。",
    [["らいしゅう", "Raishuu"], ["テスト", "tesuto"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a test next week.", id: "Ada tes minggu depan." }, "来週", "来週テストがあります。",
    { en: "Rai (next) + shuu (week) — compare raigetsu (next month) and rainen (next year).", id: "らい (depan) + しゅう (minggu) — bandingkan dengan らいげつ (bulan depan) dan らいねん (tahun depan)." }],
  ["まいしゅう", "maishuu", { en: "every week", id: "setiap minggu" }, "まいしゅう にほんごの クラスが あります。",
    [["まいしゅう", "Maishuu"], ["にほんご", "nihongo"], ["の", "no"], ["クラス", "kurasu"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a Japanese class every week.", id: "Ada kelas bahasa Jepang setiap minggu." }, "毎週", "毎週日本語のクラスがあります。",
    { en: "Mai (every) + shuu (week) — same pattern as mainichi and maigetsu.", id: "まい (setiap) + しゅう (minggu) — pola yang sama seperti まいにち dan まいげつ." }],
  ["いっしゅうかん", "isshuukan", { en: "one week (duration, ~shuukan = week counter)", id: "satu minggu (durasi, ~週間 = kata bantu bilangan minggu)" }, "なつやすみは いっしゅうかんです。",
    [["なつやすみ", "Natsuyasumi"], ["は", "wa"], ["いっしゅうかんです", "isshuukan desu"]],
    { en: "Summer vacation is one week.", id: "Libur musim panas adalah satu minggu." }, "一週間", "夏休みは一週間です。",
    { en: "~shuukan attaches to a number to count a duration in weeks, e.g. nishuukan (two weeks) — don't confuse with youbi, which names a specific day.", id: "~週間 ditempel pada bilangan untuk menghitung durasi dalam minggu, mis. にしゅうかん (dua minggu) — jangan bingung dengan ようび, yang menyebut hari tertentu." }],

  // -- Tambahan: siklus tahun --
  ["ことし", "kotoshi", { en: "this year", id: "tahun ini" }, "ことし にじゅっさいに なります。",
    [["ことし", "Kotoshi"], ["にじゅっさい", "nijussai"], ["に", "ni"], ["なります", "narimasu"]],
    { en: "I will turn 20 years old this year.", id: "Tahun ini saya akan berusia 20 tahun." }, "今年", "今年二十歳になります。",
    { en: "An irregular reading — it does not simply follow the kon (this) + nen (year) pattern used elsewhere.", id: "Bacaan tidak beraturan — tidak sekadar mengikuti pola こん (ini) + ねん (tahun) yang dipakai di tempat lain." }],
  ["きょねん", "kyonen", { en: "last year", id: "tahun lalu" }, "きょねん にほんへ いきました。",
    [["きょねん", "Kyonen"], ["にほん", "nihon"], ["へ", "e"], ["いきました", "ikimashita"]],
    { en: "I went to Japan last year.", id: "Saya pergi ke Jepang tahun lalu." }, "去年", "去年日本へ行きました。",
    { en: "Uses kyo (past) instead of the regular sen prefix used for senshuu/sengetsu — an irregular but common exception.", id: "Memakai きょ (lampau) bukan awalan せん yang biasa dipakai pada せんしゅう/せんげつ — pengecualian tidak beraturan tapi umum dipakai." }],
  ["らいねん", "rainen", { en: "next year", id: "tahun depan" }, "らいねん だいがくに はいります。",
    [["らいねん", "Rainen"], ["だいがく", "daigaku"], ["に", "ni"], ["はいります", "hairimasu"]],
    { en: "I will enter university next year.", id: "Tahun depan saya akan masuk kuliah." }, "来年", "来年大学に入ります。",
    { en: "Rai (next) + nen (year) — follows the same regular pattern as raishuu and raigetsu.", id: "らい (depan) + ねん (tahun) — mengikuti pola beraturan yang sama seperti らいしゅう dan らいげつ." }],
  ["さらいねん", "sarainen", { en: "the year after next", id: "2 tahun lagi / lusa tahun" }, "さらいねん にほんに かえります。",
    [["さらいねん", "Sarainen"], ["にほん", "nihon"], ["に", "ni"], ["かえります", "kaerimasu"]],
    { en: "I will return to Japan the year after next.", id: "2 tahun lagi saya akan kembali ke Jepang." }, "再来年", "再来年日本に帰ります。",
    { en: "Sa (again) attaches before rainen to push one more year into the future, the same way asatte extends ashita by one more day.", id: "さ (lagi) ditempel sebelum らいねん untuk mendorong satu tahun lebih jauh ke depan, sama seperti あさって memperpanjang あした satu hari lagi." }],
  ["まいとし", "maitoshi", { en: "every year", id: "setiap tahun" }, "まいとし かぞくと りょこうします。",
    [["まいとし", "Maitoshi"], ["かぞく", "kazoku"], ["と", "to"], ["りょこうします", "ryokoushimasu"]],
    { en: "I travel with my family every year.", id: "Saya bepergian bersama keluarga setiap tahun." }, "毎年", "毎年家族と旅行します。",
    { en: "Can also be read mainen — both readings are correct, though maitoshi is more common in casual speech.", id: "Bisa juga dibaca まいねん — kedua bacaan benar, tapi まいとし lebih umum dipakai dalam percakapan santai." }],
  ["いちねん", "ichinen", { en: "one year (~nen = year counter)", id: "satu tahun (~年 = kata bantu bilangan tahun)" }, "にほんに いちねん います。",
    [["にほん", "Nihon"], ["に", "ni"], ["いちねん", "ichinen"], ["います", "imasu"]],
    { en: "I will be in Japan for one year.", id: "Saya akan berada di Jepang selama satu tahun." }, "一年", "日本に一年います。",
    { en: "~nen attaches to a number to count a span of years, e.g. ninen (two years), sannen (three years).", id: "~年 ditempel pada bilangan untuk menghitung rentang tahun, mis. にねん (dua tahun), さんねん (tiga tahun)." }],
  ["なんねん", "nannen", { en: "what year / how many years", id: "tahun berapa / berapa tahun" }, "にほんに なんねん いましたか。",
    [["にほん", "Nihon"], ["に", "ni"], ["なんねん", "nannen"], ["いました", "imashita"], ["か", "ka"]],
    { en: "How many years were you in Japan?", id: "Berapa tahun kamu berada di Jepang?" }, "何年", "日本に何年いましたか。",
    { en: "Combines nan (what/how many) with the ~nen year counter — can ask either a calendar year or a duration in years depending on context.", id: "Menggabungkan なん (apa/berapa) dengan kata bantu bilangan tahun ~年 — bisa menanyakan tahun kalender atau durasi dalam tahun tergantung konteks." }]
];

// Sub-Tier 2.3: Bilangan & Satuan Penghitung (35)
const KOTOBA_N5_CH2_3 = [
  ["ひとつ", "hitotsu", { en: "one (thing)", id: "satu (buah/benda)" }, "りんごを ひとつ ください。",
    [["りんご", "Ringo"], ["を", "wo"], ["ひとつ", "hitotsu"], ["ください", "kudasai"]],
    { en: "Please give me one apple.", id: "Tolong beri saya satu apel." }, "一つ", "りんごを一つください。",
    { en: "These native Japanese numbers (ひとつ, ふたつ...) count objects generally, unlike Sino-Japanese numbers (いち, に...) used for math or with specific counters like ほん and まい.", id: "Bilangan asli Jepang ini (ひとつ, ふたつ, dst.) menghitung benda secara umum, berbeda dari bilangan Sino-Jepang (いち, に, dst.) yang dipakai untuk matematika atau bersama kata bantu bilangan seperti ほん dan まい." }],
  ["ふたつ", "futatsu", { en: "two (things)", id: "dua (buah/benda)" }, "みかんを ふたつ かいました。",
    [["みかん", "Mikan"], ["を", "wo"], ["ふたつ", "futatsu"], ["かいました", "kaimashita"]],
    { en: "I bought two oranges.", id: "Saya membeli dua jeruk mandarin." }, "二つ", "みかんを二つ買いました。",
    { en: "This series (ひとつ〜とお) is irregular; from 11 onward Japanese switches back to じゅういち, じゅうに, etc. instead of continuing the つ pattern.", id: "Rangkaian ini (ひとつ〜とお) tidak beraturan; dari 11 ke atas bahasa Jepang beralih kembali ke じゅういち, じゅうに, dst. dan tidak melanjutkan pola つ." }],
  ["みっつ", "mittsu", { en: "three (things)", id: "tiga (buah/benda)" }, "たまごが みっつ あります。",
    [["たまご", "Tamago"], ["が", "ga"], ["みっつ", "mittsu"], ["あります", "arimasu"]],
    { en: "There are three eggs.", id: "Ada tiga telur." }, "三つ", "卵が三つあります。",
    { en: "Small っ appears here — みっつ is read with a short doubled consonant, \"mittsu\".", id: "っ kecil muncul di sini — みっつ dibaca dengan konsonan ganda pendek, \"mittsu\"." }],
  ["よっつ", "yottsu", { en: "four (things)", id: "empat (buah/benda)" }, "おかしを よっつ たべました。",
    [["おかし", "Okashi"], ["を", "wo"], ["よっつ", "yottsu"], ["たべました", "tabemashita"]],
    { en: "I ate four sweets.", id: "Saya makan empat camilan." }, "四つ", "お菓子を四つ食べました。",
    { en: "Uses よ (not し or よん) as the base for 4 in this native-number series.", id: "Memakai よ (bukan し atau よん) sebagai dasar untuk angka 4 dalam rangkaian bilangan asli ini." }],
  ["いつつ", "itsutsu", { en: "five (things)", id: "lima (buah/benda)" }, "えんぴつを いつつ もっています。",
    [["えんぴつ", "Enpitsu"], ["を", "wo"], ["いつつ", "itsutsu"], ["もっています", "motteimasu"]],
    { en: "I have five pencils.", id: "Saya punya lima pensil." }, "五つ", "鉛筆を五つ持っています。",
    { en: "The halfway point of the series — ひとつ, ふたつ, みっつ, よっつ, いつつ all end in つ.", id: "Titik tengah rangkaian ini — ひとつ, ふたつ, みっつ, よっつ, いつつ semuanya diakhiri つ." }],
  ["むっつ", "muttsu", { en: "six (things)", id: "enam (buah/benda)" }, "いすが むっつ あります。",
    [["いす", "Isu"], ["が", "ga"], ["むっつ", "muttsu"], ["あります", "arimasu"]],
    { en: "There are six chairs.", id: "Ada enam kursi." }, "六つ", "椅子が六つあります。",
    { en: "Another small っ word — read as \"muttsu\", with a short doubled consonant.", id: "Kata lain dengan っ kecil — dibaca \"muttsu\", dengan konsonan ganda pendek." }],
  ["ななつ", "nanatsu", { en: "seven (things)", id: "tujuh (buah/benda)" }, "ほしが ななつ みえます。",
    [["ほし", "Hoshi"], ["が", "ga"], ["ななつ", "nanatsu"], ["みえます", "miemasu"]],
    { en: "I can see seven stars.", id: "Saya bisa melihat tujuh bintang." }, "七つ", "星が七つ見えます。",
    { en: "Uses なな (not しち) as the base for 7 in this native-number series.", id: "Memakai なな (bukan しち) sebagai dasar untuk angka 7 dalam rangkaian bilangan asli ini." }],
  ["やっつ", "yattsu", { en: "eight (things)", id: "delapan (buah/benda)" }, "クッキーを やっつ つくりました。",
    [["クッキー", "Kukkii"], ["を", "wo"], ["やっつ", "yattsu"], ["つくりました", "tsukurimashita"]],
    { en: "I made eight cookies.", id: "Saya membuat delapan kukis." }, "八つ", "クッキーを八つ作りました。",
    { en: "Another small っ word — read \"yattsu\".", id: "Kata lain dengan っ kecil — dibaca \"yattsu\"." }],
  ["ここのつ", "kokonotsu", { en: "nine (things)", id: "sembilan (buah/benda)" }, "つくえの うえに はこが ここのつ あります。",
    [["つくえ", "Tsukue"], ["の", "no"], ["うえ", "ue"], ["に", "ni"], ["はこ", "hako"], ["が", "ga"], ["ここのつ", "kokonotsu"], ["あります", "arimasu"]],
    { en: "There are nine boxes on the desk.", id: "Ada sembilan kotak di atas meja." }, "九つ", "机の上に箱が九つあります。",
    { en: "The longest word in this series — uses こ (not きゅう or く) as the base for 9.", id: "Kata paling panjang dalam rangkaian ini — memakai こ (bukan きゅう atau く) sebagai dasar untuk angka 9." }],
  ["とお", "too", { en: "ten (things)", id: "sepuluh (buah/benda)" }, "りんごが とお あります。",
    [["りんご", "Ringo"], ["が", "ga"], ["とお", "too"], ["あります", "arimasu"]],
    { en: "There are ten apples.", id: "Ada sepuluh apel." }, "十", "りんごが十あります。",
    { en: "The last word in this native-number series — counting then switches to じゅういち (11), じゅうに (12), etc., dropping the つ ending.", id: "Kata terakhir dalam rangkaian bilangan asli ini — hitungan selanjutnya beralih ke じゅういち (11), じゅうに (12), dst., tanpa akhiran つ lagi." }],
  ["ほん", "hon (counter)", { en: "counter for long, thin objects", id: "kata bantu bilangan untuk benda panjang/silinder" }, "ペンが にほん あります。",
    [["ペン", "Pen"], ["が", "ga"], ["にほん", "nihon"], ["あります", "arimasu"]],
    { en: "There are two pens.", id: "Ada dua pena." }, "本", "ペンが二本あります。",
    { en: "Changes sound depending on the number before it: いっぽん, にほん, さんぼん — listen for the pattern.", id: "Bunyinya berubah sesuai bilangan di depannya: いっぽん, にほん, さんぼん — perhatikan polanya." }],
  ["まい", "mai", { en: "counter for flat, thin objects", id: "kata bantu bilangan untuk benda tipis/datar" }, "かみが さんまい あります。",
    [["かみ", "Kami"], ["が", "ga"], ["さんまい", "sanmai"], ["あります", "arimasu"]],
    { en: "There are three sheets of paper.", id: "Ada tiga lembar kertas." }, "枚", "紙が三枚あります。",
    { en: "Used for flat things like paper, tickets, stamps, and photographs.", id: "Dipakai untuk benda tipis/datar seperti kertas, tiket, perangko, dan foto." }],
  ["ひとり", "hitori", { en: "one person, alone", id: "satu orang, sendirian" }, "きょうしつに ひとり います。",
    [["きょうしつ", "Kyoushitsu"], ["に", "ni"], ["ひとり", "hitori"], ["います", "imasu"]],
    { en: "There is one person in the classroom.", id: "Ada satu orang di dalam kelas." }, "一人", "教室に一人います。",
    { en: "Can also mean 'alone' by itself, e.g. ひとりで いきます (I go alone).", id: "Bisa juga berarti 'sendirian' dengan sendirinya, misalnya ひとりで いきます (Saya pergi sendirian)." }],
  ["ふたり", "futari", { en: "two people", id: "dua orang" }, "きょうしつに ふたり います。",
    [["きょうしつ", "Kyoushitsu"], ["に", "ni"], ["ふたり", "futari"], ["います", "imasu"]],
    { en: "There are two people in the classroom.", id: "Ada dua orang di dalam kelas." }, "二人", "教室に二人います。",
    { en: "ひとり (1 person) and ふたり (2 people) are irregular; from 3 people onward the pattern becomes number + にん.", id: "ひとり (1 orang) dan ふたり (2 orang) tidak beraturan; dari 3 orang ke atas polanya menjadi bilangan + にん." }],
  ["さんにん", "sannin", { en: "three people", id: "tiga orang" }, "きょうだいは さんにん います。",
    [["きょうだい", "Kyoudai"], ["は", "wa"], ["さんにん", "sannin"], ["います", "imasu"]],
    { en: "I have three siblings.", id: "Saya punya tiga saudara." }, "三人", "兄弟は三人います。",
    { en: "From here on, most person counts are regular: よにん (4), ごにん (5), and so on — just number + にん.", id: "Dari sini, kebanyakan hitungan orang beraturan: よにん (4), ごにん (5), dan seterusnya — cukup bilangan + にん." }],
  ["なんにん", "nannin", { en: "how many people", id: "berapa orang" }, "かぞくは なんにんですか。",
    [["かぞく", "Kazoku"], ["は", "wa"], ["なんにん", "nannin"], ["です", "desu"], ["か", "ka"]],
    { en: "How many people are in your family?", id: "Keluargamu ada berapa orang?" }, "何人", "家族は何人ですか。",
    { en: "なん (what/how many) + にん (people counter) — a common question pattern, similar to なんじ and なんがつ.", id: "なん (apa/berapa) + にん (kata bantu bilangan orang) — pola pertanyaan umum, mirip なんじ dan なんがつ." }],
  ["さつ", "satsu", { en: "counter for bound books", id: "kata bantu bilangan untuk buku" }, "ほんを さんさつ かいました。",
    [["ほん", "Hon"], ["を", "wo"], ["さんさつ", "sansatsu"], ["かいました", "kaimashita"]],
    { en: "I bought three books.", id: "Saya membeli tiga buku." }, "冊", "本を三冊買いました。",
    { en: "Used for anything bound like a book: novels, magazines, notebooks, and dictionaries.", id: "Dipakai untuk apa pun yang berbentuk buku terjilid: novel, majalah, buku catatan, dan kamus." }],
  ["だい", "dai", { en: "counter for machines and vehicles", id: "kata bantu bilangan untuk mesin/kendaraan" }, "くるまが にだい あります。",
    [["くるま", "Kuruma"], ["が", "ga"], ["にだい", "nidai"], ["あります", "arimasu"]],
    { en: "There are two cars.", id: "Ada dua mobil." }, "台", "車が二台あります。",
    { en: "Used for machines and vehicles: cars, bicycles, computers, and televisions.", id: "Dipakai untuk mesin dan kendaraan: mobil, sepeda, komputer, dan televisi." }],
  ["ひき", "hiki", { en: "counter for small animals", id: "kata bantu bilangan untuk hewan kecil" }, "ねこが にひき います。",
    [["ねこ", "Neko"], ["が", "ga"], ["にひき", "nihiki"], ["います", "imasu"]],
    { en: "There are two cats.", id: "Ada dua kucing." }, "匹", "猫が二匹います。",
    { en: "Changes sound with certain numbers: いっぴき, にひき, さんびき — the same shifting pattern as ほん.", id: "Bunyinya berubah dengan bilangan tertentu: いっぴき, にひき, さんびき — pola perubahan yang sama seperti ほん." }],
  ["かい", "kai", { en: "counter for times, occurrences", id: "kata bantu bilangan untuk kali/frekuensi" }, "にほんへ にかい いきました。",
    [["にほん", "Nihon"], ["へ", "e"], ["にかい", "nikai"], ["いきました", "ikimashita"]],
    { en: "I have been to Japan twice.", id: "Saya sudah pergi ke Jepang dua kali." }, "回", "日本へ二回行きました。",
    { en: "Counts how many times something happens. Note: the floor counter かい (階, as in 二階 'second floor') is a different word that happens to sound the same.", id: "Menghitung berapa kali sesuatu terjadi. Catatan: kata bantu bilangan lantai かい (階, seperti pada 二階 'lantai dua') adalah kata berbeda yang kebetulan berbunyi sama." }],
  ["こ", "ko", { en: "general counter for small objects", id: "kata bantu bilangan umum untuk benda kecil" }, "あめを ごこ かいました。",
    [["あめ", "Ame"], ["を", "wo"], ["ごこ", "goko"], ["かいました", "kaimashita"]],
    { en: "I bought five candies.", id: "Saya membeli lima permen." }, "個", "飴を五個買いました。",
    { en: "A general-purpose counter for small, roughly round or compact objects — often used when a more specific counter isn't known.", id: "Kata bantu bilangan serbaguna untuk benda kecil yang bentuknya bulat atau kompak — sering dipakai saat kata bantu bilangan yang lebih spesifik tidak diketahui." }],
  ["はい", "hai", { en: "counter for cupfuls, glassfuls", id: "kata bantu bilangan untuk cangkir/gelas" }, "コーヒーを いっぱい のみました。",
    [["コーヒー", "Koohii"], ["を", "wo"], ["いっぱい", "ippai"], ["のみました", "nomimashita"]],
    { en: "I drank one cup of coffee.", id: "Saya minum satu cangkir kopi." }, "杯", "コーヒーを一杯飲みました。",
    { en: "Changes sound depending on the number: いっぱい, にはい, さんばい — the same shifting pattern seen in ほん and ひき.", id: "Bunyinya berubah sesuai bilangan: いっぱい, にはい, さんばい — pola perubahan yang sama seperti pada ほん dan ひき." }],
  ["いくつ", "ikutsu", { en: "how many (things), what age", id: "berapa (buah) / berapa usia" }, "りんごは いくつ ありますか。",
    [["りんご", "Ringo"], ["は", "wa"], ["いくつ", "ikutsu"], ["あります", "arimasu"], ["か", "ka"]],
    { en: "How many apples are there?", id: "Ada berapa apel?" }, "", "りんごはいくつありますか。",
    { en: "Often used to ask someone's age politely: おいくつですか (How old are you?).", id: "Sering dipakai untuk menanyakan usia secara sopan: おいくつですか (Berapa usia Anda?)." }],
  ["ちゃく", "chaku", { en: "counter for suits, sets of clothing", id: "kata bantu bilangan untuk pakaian (setel)" }, "シャツを にちゃく かいました。",
    [["シャツ", "Shatsu"], ["を", "wo"], ["にちゃく", "nichaku"], ["かいました", "kaimashita"]],
    { en: "I bought two shirts.", id: "Saya membeli dua kemeja." }, "着", "シャツを二着買いました。",
    { en: "Counts full garments like shirts, jackets, and suits — not for shoes or accessories.", id: "Menghitung pakaian utuh seperti kemeja, jaket, dan setelan — bukan untuk sepatu atau aksesori." }],
  ["そく", "soku", { en: "counter for pairs (shoes, socks)", id: "kata bantu bilangan untuk pasangan (sepatu, kaus kaki)" }, "くつを いっそく かいました。",
    [["くつ", "Kutsu"], ["を", "wo"], ["いっそく", "issoku"], ["かいました", "kaimashita"]],
    { en: "I bought one pair of shoes.", id: "Saya membeli sepasang sepatu." }, "足", "靴を一足買いました。",
    { en: "Changes sound with some numbers: いっそく, にそく, さんぞく — the same shifting pattern as ほん and ひき.", id: "Bunyinya berubah dengan bilangan tertentu: いっそく, にそく, さんぞく — pola perubahan yang sama seperti ほん dan ひき." }],
  ["かい", "kai (floor)", { en: "counter for floors of a building", id: "kata bantu bilangan untuk lantai bangunan" }, "わたしの へやは さんがいに あります。",
    [["わたし", "Watashi"], ["の", "no"], ["へや", "heya"], ["は", "wa"], ["さんがい", "sangai"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "My room is on the third floor.", id: "Kamar saya ada di lantai tiga." }, "階", "私の部屋は三階にあります。",
    { en: "Same kana as かい (回, 'times') but a different kanji and meaning — this かい counts floors, with sound changes like さんがい, よんかい.", id: "Kana-nya sama dengan かい (回, 'kali') tapi kanji dan artinya beda — かい ini menghitung lantai, dengan perubahan bunyi seperti さんがい, よんかい." }],
  ["ばん", "ban", { en: "counter for numbers, order, turn", id: "kata bantu bilangan untuk nomor/urutan, giliran" }, "わたしは いちばんに なりました。",
    [["わたし", "Watashi"], ["は", "wa"], ["いちばん", "ichiban"], ["に", "ni"], ["なりました", "narimashita"]],
    { en: "I became number one.", id: "Saya menjadi nomor satu." }, "番", "私は一番になりました。",
    { en: "Used for numbered items like seats and platforms; いちばん also commonly means 'the most/best'.", id: "Dipakai untuk hal-hal bernomor seperti kursi dan peron; いちばん juga umum berarti 'paling/nomor satu'." }],
  ["ばんめ", "banme", { en: "the ...-th (ordinal number)", id: "yang ke-... (urutan)" }, "わたしは れつの さんばんめに います。",
    [["わたし", "Watashi"], ["は", "wa"], ["れつ", "retsu"], ["の", "no"], ["さんばんめ", "sanbanme"], ["に", "ni"], ["います", "imasu"]],
    { en: "I am third in the line.", id: "Saya berada di urutan ketiga dalam antrean." }, "番目", "私は列の三番目にいます。",
    { en: "Adds め to ばん to form an ordinal — turns 'number three' (さんばん) into 'the third (one)' (さんばんめ).", id: "Menambahkan め pada ばん membentuk bilangan urutan — mengubah 'nomor tiga' (さんばん) menjadi 'yang ketiga' (さんばんめ)." }],
  ["なんまい", "nanmai", { en: "how many sheets, flat objects", id: "berapa lembar" }, "かみが なんまい いりますか。",
    [["かみ", "Kami"], ["が", "ga"], ["なんまい", "nanmai"], ["いります", "irimasu"], ["か", "ka"]],
    { en: "How many sheets of paper do you need?", id: "Berapa lembar kertas yang Anda perlukan?" }, "何枚", "紙が何枚いりますか。",
    { en: "何 (nan-) attaches to counters to ask 'how many' — the same pattern as なんにん, here paired with まい for flat objects.", id: "何 (なん-) menempel pada kata bantu bilangan untuk bertanya 'berapa' — pola yang sama seperti なんにん, di sini dipasangkan dengan まい untuk benda tipis/datar." }],
  ["ゼロ", "zero", { en: "zero", id: "nol" }, "てんすうは ゼロでした。",
    [["てんすう", "Tensuu"], ["は", "wa"], ["ゼロ", "zero"], ["でした", "deshita"]],
    { en: "The score was zero.", id: "Skornya nol." }, "", "点数はゼロでした。",
    { en: "零 (rei) is the kanji reading, but ゼロ (from English 'zero') is more common in everyday speech.", id: "零 (れい) adalah cara baca kanjinya, tapi ゼロ (dari bahasa Inggris 'zero') lebih umum dipakai dalam percakapan sehari-hari." }],
  ["ひゃく", "hyaku", { en: "hundred", id: "ratus / ratusan" }, "これは ひゃくえんです。",
    [["これ", "Kore"], ["は", "wa"], ["ひゃくえん", "hyakuen"], ["です", "desu"]],
    { en: "This is 100 yen.", id: "Ini seratus yen." }, "百", "これは百円です。",
    { en: "Sound changes with certain numbers: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800) — listen carefully to these shifts.", id: "Bunyinya berubah dengan bilangan tertentu: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800) — perhatikan perubahan ini baik-baik." }],
  ["せん", "sen", { en: "thousand", id: "ribu / ribuan" }, "これは せんえんです。",
    [["これ", "Kore"], ["は", "wa"], ["せんえん", "sen'en"], ["です", "desu"]],
    { en: "This is 1,000 yen.", id: "Ini seribu yen." }, "千", "これは千円です。",
    { en: "Sound changes for some numbers: さんぜん (3,000), はっせん (8,000) — the ん and small っ shifts follow set patterns.", id: "Bunyinya berubah untuk bilangan tertentu: さんぜん (3.000), はっせん (8.000) — perubahan ん dan っ kecil mengikuti pola tertentu." }],
  ["まん", "man", { en: "ten thousand (10,000)", id: "puluh ribu (10.000)" }, "これは いちまんえんです。",
    [["これ", "Kore"], ["は", "wa"], ["いちまんえん", "ichiman'en"], ["です", "desu"]],
    { en: "This is 10,000 yen.", id: "Ini sepuluh ribu yen." }, "万", "これは一万円です。",
    { en: "Japanese counts large numbers in units of 万 (10,000) rather than thousands — 100,000 is じゅうまん, not 'hyaku-sen'.", id: "Bahasa Jepang menghitung bilangan besar dalam satuan 万 (10.000), bukan ribuan — 100.000 adalah じゅうまん, bukan 'hyaku-sen'." }],
  ["ぜんぶ", "zenbu", { en: "all, everything", id: "semuanya" }, "これを ぜんぶ たべました。",
    [["これ", "Kore"], ["を", "wo"], ["ぜんぶ", "zenbu"], ["たべました", "tabemashita"]],
    { en: "I ate all of this.", id: "Saya makan semuanya." }, "全部", "これを全部食べました。",
    { en: "Used to say 'all/everything' of a group or amount, often placed right before the verb.", id: "Dipakai untuk menyatakan 'semua/seluruhnya' dari sebuah kelompok atau jumlah, biasanya diletakkan tepat sebelum kata kerja." }],
  ["だけ", "dake", { en: "only, just", id: "hanya / cuma" }, "これだけ ください。",
    [["これ", "Kore"], ["だけ", "dake"], ["ください", "kudasai"]],
    { en: "Please give me only this.", id: "Tolong beri saya ini saja." }, "", "これだけください。",
    { en: "A particle attached right after a noun or amount to mean 'only/just that much' — e.g. ひとつだけ (just one).", id: "Partikel yang menempel tepat setelah kata benda atau jumlah untuk berarti 'hanya/cuma sebanyak itu' — misalnya ひとつだけ (hanya satu)." }]
];

// Sub-Tier 2.4: Frekuensi & Durasi (21)
const KOTOBA_N5_CH2_4 = [
  ["いつも", "itsumo", { en: "always", id: "selalu" }, "わたしは いつも コーヒーを のみます。",
    [["わたし", "Watashi"], ["は", "wa"], ["いつも", "itsumo"], ["コーヒー", "koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I always drink coffee.", id: "Saya selalu minum kopi." }, "", "私はいつもコーヒーを飲みます。",
    { en: "Sits at the top of the frequency scale (100%) and pairs with a positive verb — usually written in kana since its kanji (何時も) is rarely used in modern writing.", id: "Berada di puncak skala frekuensi (100%) dan dipasangkan dengan bentuk kata kerja positif — biasanya ditulis dengan kana karena kanjinya (何時も) jarang dipakai dalam tulisan modern." }],
  ["よく", "yoku", { en: "often, well", id: "sering, dengan baik" }, "わたしは よく えいがを みます。",
    [["わたし", "Watashi"], ["は", "wa"], ["よく", "yoku"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I often watch movies.", id: "Saya sering menonton film." }, "", "私はよく映画を見ます。",
    { en: "Sits just below いつも on the frequency scale (about 70–80%). Context matters: よく also doubles as the adverb form of いい/よい, meaning \"well\" or \"skillfully\".", id: "Berada tepat di bawah いつも pada skala frekuensi (sekitar 70–80%). Konteks penting: よく juga berfungsi sebagai bentuk kata keterangan dari いい/よい, yang berarti \"dengan baik\" atau \"terampil\"." }],
  ["ときどき", "tokidoki", { en: "sometimes", id: "kadang-kadang" }, "ときどき えいがを みます。",
    [["ときどき", "Tokidoki"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "Sometimes I watch a movie.", id: "Kadang-kadang saya menonton film." }, "時々", "時々映画を見ます。",
    { en: "The 々 is a repeater mark showing that the kanji before it (時) is read twice — sits mid-scale (about 30–50%), between よく and たまに.", id: "々 adalah tanda pengulang yang menunjukkan kanji sebelumnya (時) dibaca dua kali — berada di tengah skala (sekitar 30–50%), di antara よく dan たまに." }],
  ["たまに", "tamani", { en: "occasionally, once in a while", id: "kadang-kadang, sesekali" }, "たまに えいがを みます。",
    [["たまに", "Tamani"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I occasionally watch a movie.", id: "Saya sesekali menonton film." }, "", "たまに映画を見ます。",
    { en: "Lower on the frequency scale than ときどき (roughly 10–20%) — closer to \"once in a while\" than \"sometimes\". Usually written in kana.", id: "Lebih rendah dari ときどき pada skala frekuensi (sekitar 10–20%) — lebih dekat ke makna \"sesekali\" daripada \"kadang-kadang\". Biasanya ditulis dengan kana." }],
  ["たいてい", "taitei", { en: "usually, mostly", id: "biasanya, kebanyakan" }, "たいてい しちじに おきます。",
    [["たいてい", "Taitei"], ["しちじ", "shichiji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I usually wake up at 7.", id: "Biasanya saya bangun jam 7." }, "", "たいてい七時に起きます。",
    { en: "Has a kanji form (大抵) but it's rarely written that way — kana is standard. Describes what happens in most cases, allowing for occasional exceptions.", id: "Memiliki bentuk kanji (大抵) tapi jarang ditulis demikian — kana adalah bentuk standar. Menjelaskan apa yang biasanya terjadi, dengan kemungkinan pengecualian sesekali." }],
  ["ぜんぜん", "zenzen", { en: "not at all (used with a negative)", id: "sama sekali tidak (dipakai dengan bentuk negatif)" }, "にほんごが ぜんぜん わかりません。",
    [["にほんご", "Nihongo"], ["が", "ga"], ["ぜんぜん", "zenzen"], ["わかりません", "wakarimasen"]],
    { en: "I don't understand Japanese at all.", id: "Saya sama sekali tidak mengerti bahasa Jepang." }, "全然", "日本語が全然分かりません。",
    { en: "Sits at the bottom of the frequency/degree scale (0%) and must be followed by a negative verb — using it with a positive verb is a common learner mistake.", id: "Berada di dasar skala frekuensi/derajat (0%) dan harus diikuti oleh kata kerja bentuk negatif — memakainya dengan kata kerja positif adalah kesalahan umum pelajar." }],
  ["まだ", "mada", { en: "still, not yet", id: "masih, belum" }, "わたしは まだ がくせいです。",
    [["わたし", "Watashi"], ["は", "wa"], ["まだ", "mada"], ["がくせい", "gakusei"], ["です", "desu"]],
    { en: "I am still a student.", id: "Saya masih seorang pelajar." }, "", "私はまだ学生です。",
    { en: "Has two related meanings depending on the verb: \"still\" with a positive verb (まだ学生です), and \"not yet\" with a negative one (まだ食べません).", id: "Memiliki dua makna terkait tergantung kata kerjanya: \"masih\" dengan kata kerja positif (まだ学生です), dan \"belum\" dengan kata kerja negatif (まだ食べません)." }],
  ["すぐ", "sugu", { en: "right away, immediately", id: "segera, langsung" }, "わたしは すぐ いきます。",
    [["わたし", "Watashi"], ["は", "wa"], ["すぐ", "sugu"], ["いきます", "ikimasu"]],
    { en: "I will go right away.", id: "Saya akan pergi segera." }, "", "私はすぐ行きます。",
    { en: "Often appears as すぐに without changing the meaning much — describes an action happening with almost no delay.", id: "Sering muncul sebagai すぐに tanpa mengubah makna secara signifikan — menjelaskan tindakan yang terjadi hampir tanpa jeda." }],
  ["もうすぐ", "mousugu", { en: "soon, almost time", id: "sebentar lagi, hampir waktunya" }, "なつやすみは もうすぐです。",
    [["なつやすみ", "Natsuyasumi"], ["は", "wa"], ["もうすぐ", "mousugu"], ["です", "desu"]],
    { en: "Summer vacation is coming soon.", id: "Libur musim panas sebentar lagi." }, "", "夏休みはもうすぐです。",
    { en: "Built from もう (already) + すぐ (right away) — describes something that is about to happen very shortly.", id: "Dibentuk dari もう (sudah) + すぐ (segera) — menjelaskan sesuatu yang akan segera terjadi sebentar lagi." }],
  ["あまり", "amari", { en: "not very, not much (used with a negative)", id: "tidak begitu / jarang (diikuti kalimat negatif)" }, "にほんごが あまり わかりません。",
    [["にほんご", "Nihongo"], ["が", "ga"], ["あまり", "amari"], ["わかりません", "wakarimasen"]],
    { en: "I don't understand Japanese very well.", id: "Saya tidak begitu mengerti bahasa Jepang." }, "", "日本語があまり分かりません。",
    { en: "Sits between たまに and ぜんぜん on the frequency/degree scale — must be followed by a negative verb, similar to ぜんぜん but milder.", id: "Berada di antara たまに dan ぜんぜん pada skala frekuensi/derajat — harus diikuti kata kerja bentuk negatif, mirip ぜんぜん tapi lebih ringan." }],
  ["もういちど", "mou ichido", { en: "once more, again", id: "sekali lagi" }, "もういちど いってください。",
    [["もういちど", "Mou ichido"], ["いって", "itte"], ["ください", "kudasai"]],
    { en: "Please say it once more.", id: "Tolong katakan sekali lagi." }, "もう一度", "もう一度言ってください。",
    { en: "Built from もう (again) + 一度 (one time) — a common phrase when asking someone to repeat something.", id: "Dibentuk dari もう (lagi) + 一度 (satu kali) — ungkapan umum saat meminta seseorang mengulangi sesuatu." }],
  ["ずっと", "zutto", { en: "continuously, the whole time; by far", id: "terus-menerus / sepanjang waktu" }, "きのうから ずっと あめです。",
    [["きのう", "Kinou"], ["から", "kara"], ["ずっと", "zutto"], ["あめ", "ame"], ["です", "desu"]],
    { en: "It has been raining continuously since yesterday.", id: "Sejak kemarin hujan terus-menerus." }, "", "昨日からずっと雨です。",
    { en: "Also used to emphasize a comparison, meaning 'by far' — e.g. こちらのほうがずっといいです (this one is much better).", id: "Juga dipakai untuk menegaskan perbandingan, berarti 'jauh lebih' — misalnya こちらのほうがずっといいです (yang ini jauh lebih bagus)." }],
  ["しばらく", "shibaraku", { en: "for a while, for some time", id: "sebentar / untuk beberapa saat" }, "しばらく まってください。",
    [["しばらく", "Shibaraku"], ["まって", "matte"], ["ください", "kudasai"]],
    { en: "Please wait for a while.", id: "Tolong tunggu sebentar." }, "", "しばらく待ってください。",
    { en: "Describes a stretch of time that isn't precisely defined — longer than ちょっと but vague about exactly how long.", id: "Menjelaskan rentang waktu yang tidak ditentukan secara pasti — lebih lama dari ちょっと tapi tidak jelas berapa lama persisnya." }],
  ["ちょっと", "chotto", { en: "a little, for a moment", id: "sebentar / sedikit" }, "ちょっと まってください。",
    [["ちょっと", "Chotto"], ["まって", "matte"], ["ください", "kudasai"]],
    { en: "Please wait a moment.", id: "Tolong tunggu sebentar." }, "", "ちょっと待ってください。",
    { en: "Very versatile — can mean a small amount, a short time, or soften a request/refusal, e.g. ちょっと… (well, that's a bit difficult...).", id: "Sangat serbaguna — bisa berarti jumlah sedikit, waktu singkat, atau memperhalus permintaan/penolakan, misalnya ちょっと… (wah, itu agak sulit...)." }],
  ["ゆっくり", "yukkuri", { en: "slowly, leisurely", id: "pelan-pelan / santai" }, "もっと ゆっくり はなしてください。",
    [["もっと", "Motto"], ["ゆっくり", "yukkuri"], ["はなして", "hanashite"], ["ください", "kudasai"]],
    { en: "Please speak more slowly.", id: "Tolong bicara lebih pelan." }, "", "もっとゆっくり話してください。",
    { en: "Describes doing something without rushing — also used for relaxing, e.g. うちで ゆっくり します (I'll relax at home).", id: "Menjelaskan melakukan sesuatu tanpa terburu-buru — juga dipakai untuk bersantai, misalnya うちで ゆっくり します (Saya akan bersantai di rumah)." }],
  ["だんだん", "dandan", { en: "gradually, little by little", id: "lama-kelamaan / berangsur-angsur" }, "てんきが だんだん あたたかく なります。",
    [["てんき", "Tenki"], ["が", "ga"], ["だんだん", "dandan"], ["あたたかく", "atatakaku"], ["なります", "narimasu"]],
    { en: "The weather is gradually getting warmer.", id: "Cuaca lama-kelamaan menjadi hangat." }, "", "天気がだんだん暖かくなります。",
    { en: "Describes a gradual change over time, usually paired with なる (become) to show something shifting step by step.", id: "Menjelaskan perubahan yang bertahap dari waktu ke waktu, biasanya dipasangkan dengan なる (menjadi) untuk menunjukkan sesuatu yang berubah sedikit demi sedikit." }],
  ["はじめに", "hajime ni / hajimete", { en: "first, at the beginning / for the first time", id: "pertama-tama, awalnya / untuk pertama kali" }, "はじめに じこしょうかいを します。",
    [["はじめに", "Hajime ni"], ["じこしょうかい", "jikoshoukai"], ["を", "wo"], ["します", "shimasu"]],
    { en: "First, I'll introduce myself.", id: "Pertama-tama, saya akan memperkenalkan diri." }, "初めに", "初めに自己紹介をします。",
    { en: "はじめに (初めに) means 'first, to begin with' when listing steps, while the related 初めて (hajimete) means 'for the first time' an experience happens — e.g. 初めて日本へ行きました (I went to Japan for the first time).", id: "はじめに (初めに) berarti 'pertama-tama, untuk memulai' saat menjelaskan langkah-langkah, sedangkan bentuk terkait 初めて (hajimete) berarti 'untuk pertama kalinya' sebuah pengalaman terjadi — misalnya 初めて日本へ行きました (Saya pergi ke Jepang untuk pertama kalinya)." }],
  ["さいごに", "saigo ni", { en: "lastly, finally", id: "terakhir" }, "さいごに しつもんが あります。",
    [["さいごに", "Saigo ni"], ["しつもん", "shitsumon"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "Lastly, I have a question.", id: "Terakhir, saya punya pertanyaan." }, "最後に", "最後に質問があります。",
    { en: "The opposite of はじめに — marks the final item or step in a sequence.", id: "Kebalikan dari はじめに — menandai hal atau langkah terakhir dalam sebuah urutan." }],
  ["あいだ", "-no aida", { en: "during, while, between", id: "selama / selang waktu" }, "なつやすみの あいだ、りょこうしました。",
    [["なつやすみ", "Natsuyasumi"], ["の", "no"], ["あいだ", "aida"], ["りょこうしました", "ryokoushimashita"]],
    { en: "During summer vacation, I traveled.", id: "Selama libur musim panas, saya bepergian." }, "間", "夏休みの間、旅行しました。",
    { en: "Attaches to a noun with の to mark a span of time (or space) something happens within — e.g. しごとのあいだ (during work).", id: "Menempel pada kata benda dengan の untuk menandai rentang waktu (atau ruang) tempat sesuatu terjadi — misalnya しごとのあいだ (selama bekerja)." }],
  ["どのくらい", "donokurai / donogurai", { en: "how long, how much", id: "berapa lama / berapa banyak" }, "にほんに どのくらい いましたか。",
    [["にほん", "Nihon"], ["に", "ni"], ["どのくらい", "donokurai"], ["いました", "imashita"], ["か", "ka"]],
    { en: "How long were you in Japan?", id: "Berapa lama Anda berada di Jepang?" }, "", "日本にどのくらいいましたか。",
    { en: "どのぐらい is an equally common variant with the same meaning — used to ask about duration, distance, or amount.", id: "どのぐらい adalah variasi yang sama umum dengan arti sama — dipakai untuk menanyakan durasi, jarak, atau jumlah." }],
  ["ぐらい", "-gurai / -kurai", { en: "about, approximately", id: "kira-kira / sekitar" }, "いちじかんぐらい かかります。",
    [["いちじかん", "Ichijikan"], ["ぐらい", "gurai"], ["かかります", "kakarimasu"]],
    { en: "It takes about one hour.", id: "Memakan waktu sekitar satu jam." }, "", "一時間ぐらいかかります。",
    { en: "くらい is an equally common variant — attaches after a quantity or duration to mean 'approximately' that much.", id: "くらい adalah variasi yang sama umum dipakainya — menempel setelah jumlah atau durasi untuk berarti 'kira-kira' sebanyak itu." }]
];

// Sub-Tier 3.1: Makanan & Minuman (36)
const KOTOBA_N5_CH3_1 = [
  ["ごはん", "gohan", { en: "cooked rice, meal", id: "nasi, makanan" }, "あさ ごはんを たべます。",
    [["あさ", "Asa"], ["ごはん", "gohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat breakfast.", id: "Saya makan sarapan." }, "ご飯", "朝ご飯を食べます。",
    { en: "Means both \"cooked rice\" and, more broadly, \"a meal\" — combines with time words to form あさごはん (breakfast), ひるごはん (lunch), and ばんごはん (dinner).", id: "Berarti \"nasi yang sudah dimasak\" sekaligus, secara lebih luas, \"makanan/santapan\" — digabung dengan kata waktu menjadi あさごはん (sarapan), ひるごはん (makan siang), dan ばんごはん (makan malam)." }],
  ["みず", "mizu", { en: "water", id: "air" }, "みずを いっぱい のみます。",
    [["みず", "Mizu"], ["を", "wo"], ["いっぱい", "ippai"], ["のみます", "nomimasu"]],
    { en: "I drink a lot of water.", id: "Saya minum banyak air." }, "水", "水をいっぱい飲みます。",
    { en: "Here いっぱい means \"a lot\" — a different word from the counter いっぱい (\"one cupful\") seen with はい; context tells them apart.", id: "Di sini いっぱい berarti \"banyak\" — kata berbeda dari kata bantu bilangan いっぱい (\"satu gelas/cangkir\") yang dipakai bersama はい; konteks yang membedakannya." }],
  ["おちゃ", "ocha", { en: "green tea", id: "teh" }, "あつい おちゃを どうぞ。",
    [["あつい", "Atsui"], ["おちゃ", "ocha"], ["を", "wo"], ["どうぞ", "douzo"]],
    { en: "Here is hot tea.", id: "Silakan, teh panasnya." }, "お茶", "熱いお茶をどうぞ。",
    { en: "The お is a polite prefix attached to ちゃ (tea) — dropping it and saying just ちゃ sounds blunt, so おちゃ is the standard, everyday form.", id: "お adalah awalan sopan yang menempel pada ちゃ (teh) — jika dihilangkan dan hanya bilang ちゃ terdengar kasar, jadi おちゃ adalah bentuk standar sehari-hari." }],
  ["ぎゅうにゅう", "gyuunyuu", { en: "milk", id: "susu" }, "まいあさ ぎゅうにゅうを のみます。",
    [["まいあさ", "Maiasa"], ["ぎゅうにゅう", "gyuunyuu"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink milk every morning.", id: "Saya minum susu setiap pagi." }, "牛乳", "毎朝牛乳を飲みます。",
    { en: "Built from 牛 (cow) + 乳 (milk). ミルク, from English \"milk\", is also common in casual speech, especially for coffee milk or baby formula.", id: "Dibentuk dari 牛 (sapi) + 乳 (susu). ミルク, dari bahasa Inggris \"milk\", juga umum dipakai secara santai, terutama untuk kopi susu atau susu bayi." }],
  ["おさけ", "osake", { en: "alcohol, sake", id: "minuman beralkohol" }, "わたしは おさけを のみません。",
    [["わたし", "Watashi"], ["は", "wa"], ["おさけ", "osake"], ["を", "wo"], ["のみません", "nomimasen"]],
    { en: "I don't drink alcohol.", id: "Saya tidak minum minuman beralkohol." }, "お酒", "私はお酒を飲みません。",
    { en: "Refers to alcoholic drinks broadly, not only Japanese rice wine. The お is a polite prefix, the same pattern as おちゃ and おかし.", id: "Merujuk pada minuman beralkohol secara umum, bukan hanya arak beras Jepang. お adalah awalan sopan, pola yang sama seperti おちゃ dan おかし." }],
  ["さかな", "sakana", { en: "fish", id: "ikan" }, "さかなを たべます。",
    [["さかな", "Sakana"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat fish.", id: "Saya makan ikan." }, "魚", "魚を食べます。",
    { en: "Refers to fish both as food and as the living animal — a staple protein in Japanese cuisine alongside にく (meat).", id: "Merujuk pada ikan baik sebagai makanan maupun sebagai hewan hidup — sumber protein utama dalam masakan Jepang bersama にく (daging)." }],
  ["にく", "niku", { en: "meat", id: "daging" }, "とり にくを かいます。",
    [["とり", "Tori"], ["にく", "niku"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy chicken meat.", id: "Saya membeli daging ayam." }, "肉", "鶏肉を買います。",
    { en: "Combines with animal names to specify a type of meat: とりにく (鶏肉, chicken), ぶたにく (豚肉, pork), and ぎゅうにく (牛肉, beef).", id: "Digabung dengan nama hewan untuk menentukan jenis daging: とりにく (鶏肉, ayam), ぶたにく (豚肉, babi), dan ぎゅうにく (牛肉, sapi)." }],
  ["たまご", "tamago", { en: "egg", id: "telur" }, "あさ たまごを たべます。",
    [["あさ", "Asa"], ["たまご", "tamago"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat eggs in the morning.", id: "Saya makan telur di pagi hari." }, "卵", "朝卵を食べます。",
    { en: "卵 is the common kanji for eggs generally; some dishes use 玉子 instead for cooked/prepared eggs like たまごやき (omelette), though both are read the same.", id: "卵 adalah kanji umum untuk telur secara umum; beberapa hidangan memakai 玉子 untuk telur yang sudah diolah seperti たまごやき (telur dadar), meski keduanya dibaca sama." }],
  ["くだもの", "kudamono", { en: "fruit", id: "buah-buahan" }, "くだものが すきです。",
    [["くだもの", "Kudamono"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like fruit.", id: "Saya suka buah." }, "果物", "果物が好きです。",
    { en: "A general, collective word for fruit — specific fruits like りんご (apple) and みかん (mandarin orange) all fall under this category.", id: "Kata umum dan kolektif untuk buah-buahan — buah tertentu seperti りんご (apel) dan みかん (jeruk mandarin) termasuk dalam kategori ini." }],
  ["おかし", "okashi", { en: "sweets, snacks", id: "kue, camilan manis" }, "こどもは おかしが すきです。",
    [["こども", "Kodomo"], ["は", "wa"], ["おかし", "okashi"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "Children like sweets.", id: "Anak-anak suka kue/camilan manis." }, "お菓子", "子供はお菓子が好きです。",
    { en: "The お is a polite/softening prefix, the same pattern as おちゃ. Covers cookies, candy, and other snack-type treats collectively.", id: "お adalah awalan sopan/pelembut, pola yang sama seperti おちゃ. Mencakup kue kering, permen, dan camilan manis lain secara umum." }],
  ["たべもの", "tabemono", { en: "food", id: "makanan" }, "にほんの たべものが すきです。",
    [["にほん", "Nihon"], ["の", "no"], ["たべもの", "tabemono"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like Japanese food.", id: "Saya suka makanan Jepang." }, "食べ物", "日本の食べ物が好きです。",
    { en: "Built from たべる (to eat) + もの (thing) — a general word for \"food\", paired with its counterpart のみもの (drinks).", id: "Dibentuk dari たべる (makan) + もの (benda/hal) — kata umum untuk \"makanan\", berpasangan dengan lawannya のみもの (minuman)." }],
  ["のみもの", "nomimono", { en: "drink, beverage", id: "minuman" }, "なにか のみものを ください。",
    [["なにか", "Nanika"], ["のみもの", "nomimono"], ["を", "wo"], ["ください", "kudasai"]],
    { en: "Please give me something to drink.", id: "Tolong beri saya sesuatu untuk diminum." }, "飲み物", "何か飲み物をください。",
    { en: "Built from のむ (to drink) + もの (thing) — the drink counterpart to たべもの (food).", id: "Dibentuk dari のむ (minum) + もの (benda/hal) — pasangan dari たべもの (makanan) untuk kategori minuman." }],
  ["あさごはん", "asagohan", { en: "breakfast", id: "sarapan" }, "まいあさ あさごはんを たべます。",
    [["まいあさ", "Maiasa"], ["あさごはん", "asagohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat breakfast every morning.", id: "Saya makan sarapan setiap pagi." }, "朝ご飯", "毎朝朝ご飯を食べます。",
    { en: "Combines あさ (morning) + ごはん (meal) — the same pattern gives ひるごはん (lunch) and ばんごはん (dinner).", id: "Gabungan dari あさ (pagi) + ごはん (makanan) — pola yang sama membentuk ひるごはん (makan siang) dan ばんごはん (makan malam)." }],
  ["ひるごはん", "hirugohan", { en: "lunch", id: "makan siang" }, "じゅうにじに ひるごはんを たべます。",
    [["じゅうにじ", "Juuniji"], ["に", "ni"], ["ひるごはん", "hirugohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat lunch at 12 o'clock.", id: "Saya makan siang jam 12." }, "昼ご飯", "十二時に昼ご飯を食べます。",
    { en: "Combines ひる (midday) + ごはん (meal). ランチ, from English \"lunch\", is also common in casual speech.", id: "Gabungan dari ひる (siang hari) + ごはん (makanan). ランチ, dari bahasa Inggris \"lunch\", juga umum dipakai secara santai." }],
  ["ばんごはん", "bangohan", { en: "dinner", id: "makan malam" }, "しちじに ばんごはんを たべます。",
    [["しちじ", "Shichiji"], ["に", "ni"], ["ばんごはん", "bangohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat dinner at 7 o'clock.", id: "Saya makan malam jam 7." }, "晩ご飯", "七時に晩ご飯を食べます。",
    { en: "Combines ばん (evening) + ごはん (meal). ゆうごはん (夕ご飯), using ゆう (evening) instead of ばん, is a common alternative.", id: "Gabungan dari ばん (malam) + ごはん (makanan). ゆうごはん (夕ご飯), memakai ゆう (petang/malam) sebagai ganti ばん, adalah alternatif yang umum dipakai." }],
  ["パン", "pan", { en: "bread", id: "roti" }, "あさ パンを たべます。",
    [["あさ", "Asa"], ["パン", "pan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat bread in the morning.", id: "Saya makan roti di pagi hari." }, "", "朝パンを食べます。",
    { en: "A loanword from Portuguese (pão), not English — one of the oldest loanwords in Japanese, dating to the 16th century.", id: "Kata serapan dari bahasa Portugis (pão), bukan bahasa Inggris — salah satu kata serapan tertua dalam bahasa Jepang, sejak abad ke-16." }],
  ["ぎゅうにく", "gyuuniku", { en: "beef", id: "daging sapi" }, "ぎゅうにくを かいました。",
    [["ぎゅうにく", "Gyuuniku"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought beef.", id: "Saya membeli daging sapi." }, "牛肉", "牛肉を買いました。",
    { en: "Built from 牛 (cow) + 肉 (meat) — the same pattern gives とりにく (鶏肉, chicken) and ぶたにく (豚肉, pork).", id: "Dibentuk dari 牛 (sapi) + 肉 (daging) — pola yang sama membentuk とりにく (鶏肉, ayam) dan ぶたにく (豚肉, babi)." }],
  ["ぶたにく", "butaniku", { en: "pork", id: "daging babi" }, "ぶたにくは たべません。",
    [["ぶたにく", "Butaniku"], ["は", "wa"], ["たべません", "tabemasen"]],
    { en: "I don't eat pork.", id: "Saya tidak makan daging babi." }, "豚肉", "豚肉は食べません。",
    { en: "Built from 豚 (pig) + 肉 (meat) — commonly shortened to ぶた in casual speech.", id: "Dibentuk dari 豚 (babi) + 肉 (daging) — sering disingkat jadi ぶた dalam percakapan santai." }],
  ["とりにく", "toriniku", { en: "chicken (meat)", id: "daging ayam" }, "ゆうべ とりにくを たべました。",
    [["ゆうべ", "Yuube"], ["とりにく", "toriniku"], ["を", "wo"], ["たべました", "tabemashita"]],
    { en: "I ate chicken last night.", id: "Saya makan daging ayam semalam." }, "鶏肉", "夕べ鶏肉を食べました。",
    { en: "Built from 鶏 (chicken/bird) + 肉 (meat); チキン, from English 'chicken', is also common, especially for fried or Western-style dishes.", id: "Dibentuk dari 鶏 (ayam) + 肉 (daging); チキン, dari bahasa Inggris 'chicken', juga umum dipakai, terutama untuk hidangan goreng atau bergaya Barat." }],
  ["やさい", "yasai", { en: "vegetable", id: "sayuran" }, "やさいを たくさん たべます。",
    [["やさい", "Yasai"], ["を", "wo"], ["たくさん", "takusan"], ["たべます", "tabemasu"]],
    { en: "I eat a lot of vegetables.", id: "Saya makan banyak sayuran." }, "野菜", "野菜をたくさん食べます。",
    { en: "A general, collective word for vegetables — the plant-based counterpart to にく (meat) and さかな (fish).", id: "Kata umum dan kolektif untuk sayuran — pasangan berbasis tumbuhan dari にく (daging) dan さかな (ikan)." }],
  ["さとう", "satou", { en: "sugar", id: "gula" }, "コーヒーに さとうを いれます。",
    [["コーヒー", "Koohii"], ["に", "ni"], ["さとう", "satou"], ["を", "wo"], ["いれます", "iremasu"]],
    { en: "I put sugar in my coffee.", id: "Saya memasukkan gula ke dalam kopi saya." }, "砂糖", "コーヒーに砂糖を入れます。",
    { en: "A basic cooking and seasoning ingredient — often paired with しお (salt) when listing pantry staples.", id: "Bahan dasar memasak dan penyedap — sering disebut berpasangan dengan しお (garam) saat menyebutkan bahan dapur pokok." }],
  ["しお", "shio", { en: "salt", id: "garam" }, "スープに しおを いれすぎました。",
    [["スープ", "Suupu"], ["に", "ni"], ["しお", "shio"], ["を", "wo"], ["いれすぎました", "iresugimashita"]],
    { en: "I put too much salt in the soup.", id: "Saya memasukkan terlalu banyak garam ke dalam sup." }, "塩", "スープに塩を入れすぎました。",
    { en: "One of the most basic seasonings — paired with さとう (sugar) and しょうゆ (soy sauce) as core pantry items.", id: "Salah satu bumbu paling dasar — disebut berpasangan dengan さとう (gula) dan しょうゆ (kecap asin) sebagai bahan dapur pokok." }],
  ["りょうり", "ryouri", { en: "cooking, cuisine, dish", id: "masakan / memasak" }, "にほん りょうりが すきです。",
    [["にほん", "Nihon"], ["りょうり", "ryouri"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like Japanese cuisine.", id: "Saya suka masakan Jepang." }, "料理", "日本料理が好きです。",
    { en: "Can mean a dish, a cuisine, or the act of cooking itself — combines with する to mean 'to cook' (りょうりをする).", id: "Bisa berarti sebuah hidangan, jenis masakan, atau kegiatan memasak itu sendiri — digabung dengan する menjadi 'memasak' (りょうりをする)." }],
  ["べんとう", "bentou", { en: "boxed meal, packed lunch", id: "bekal makanan" }, "まいにち べんとうを つくります。",
    [["まいにち", "Mainichi"], ["べんとう", "bentou"], ["を", "wo"], ["つくります", "tsukurimasu"]],
    { en: "I make a boxed lunch every day.", id: "Saya membuat bekal makanan setiap hari." }, "弁当", "毎日弁当を作ります。",
    { en: "A meal packed in a portable box, commonly bought at convenience stores (コンビニ) or made at home for school and work.", id: "Makanan yang dikemas dalam kotak portabel, umumnya dibeli di minimarket (コンビニ) atau dibuat sendiri di rumah untuk sekolah dan kerja." }],
  ["ケーキ", "keeki", { en: "cake", id: "kue tar / cake" }, "たんじょうびに ケーキを たべます。",
    [["たんじょうび", "Tanjoubi"], ["に", "ni"], ["ケーキ", "keeki"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat cake on my birthday.", id: "Saya makan kue tar saat ulang tahun saya." }, "", "誕生日にケーキを食べます。",
    { en: "A loanword from English 'cake' — commonly paired with たんじょうび (birthday) or クリスマス (Christmas).", id: "Kata serapan dari bahasa Inggris 'cake' — sering disebut bersama たんじょうび (ulang tahun) atau クリスマス (Natal)." }],
  ["カレー", "karee", { en: "curry", id: "kare" }, "こんばんは カレーを つくります。",
    [["こんばん", "Konban"], ["は", "wa"], ["カレー", "karee"], ["を", "wo"], ["つくります", "tsukurimasu"]],
    { en: "Tonight I'll make curry.", id: "Malam ini saya akan membuat kare." }, "", "今晩カレーを作ります。",
    { en: "Japanese curry (カレーライス when served with rice) is milder and thicker than Indian curry — one of the most popular home-cooked dishes in Japan.", id: "Kare Jepang (カレーライス saat disajikan dengan nasi) lebih ringan dan kental dibanding kare India — salah satu hidangan rumahan paling populer di Jepang." }],
  ["そば", "soba", { en: "soba noodles", id: "mie soba" }, "ひるごはんに そばを たべました。",
    [["ひるごはん", "Hirugohan"], ["に", "ni"], ["そば", "soba"], ["を", "wo"], ["たべました", "tabemashita"]],
    { en: "I ate soba for lunch.", id: "Saya makan mie soba untuk makan siang." }, "蕎麦", "昼ご飯にそばを食べました。",
    { en: "Thin noodles made from buckwheat flour, usually written in kana since the kanji (蕎麦) is uncommon in everyday writing.", id: "Mie tipis yang dibuat dari tepung soba (buckwheat), biasanya ditulis dengan kana karena kanjinya (蕎麦) jarang dipakai dalam tulisan sehari-hari." }],
  ["ラーメン", "raamen", { en: "ramen", id: "ramen" }, "あつい ラーメンが たべたいです。",
    [["あつい", "Atsui"], ["ラーメン", "raamen"], ["が", "ga"], ["たべたい", "tabetai"], ["です", "desu"]],
    { en: "I want to eat hot ramen.", id: "Saya ingin makan ramen panas." }, "", "熱いラーメンが食べたいです。",
    { en: "Wheat noodles served in broth — originally from China but now one of Japan's most iconic dishes, usually written in katakana.", id: "Mie gandum yang disajikan dalam kuah — awalnya dari Tiongkok tapi kini jadi salah satu hidangan paling ikonik Jepang, biasanya ditulis dengan katakana." }],
  ["バター", "bataa", { en: "butter", id: "mentega" }, "パンに バターを ぬります。",
    [["パン", "Pan"], ["に", "ni"], ["バター", "bataa"], ["を", "wo"], ["ぬります", "nurimasu"]],
    { en: "I spread butter on bread.", id: "Saya mengoleskan mentega pada roti." }, "", "パンにバターを塗ります。",
    { en: "A loanword from English 'butter' — commonly used with パン (bread) or in baking.", id: "Kata serapan dari bahasa Inggris 'butter' — umum dipakai bersama パン (roti) atau dalam memanggang kue." }],
  ["こうちゃ", "koucha", { en: "black tea", id: "teh hitam" }, "あさは いつも こうちゃを のみます。",
    [["あさ", "Asa"], ["は", "wa"], ["いつも", "itsumo"], ["こうちゃ", "koucha"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I always drink black tea in the morning.", id: "Saya selalu minum teh hitam di pagi hari." }, "紅茶", "朝はいつも紅茶を飲みます。",
    { en: "紅 (red) + 茶 (tea) — refers to Western-style black tea, distinct from おちゃ (green tea), Japan's default tea.", id: "紅 (merah) + 茶 (teh) — merujuk pada teh hitam bergaya Barat, berbeda dari おちゃ (teh hijau), teh standar di Jepang." }],
  ["ジュース", "juusu", { en: "juice", id: "jus" }, "オレンジジュースを ください。",
    [["オレンジジュース", "Orenji juusu"], ["を", "wo"], ["ください", "kudasai"]],
    { en: "Please give me orange juice.", id: "Tolong beri saya jus jeruk." }, "", "オレンジジュースをください。",
    { en: "A loanword from English 'juice' — can refer to fruit juice or, more broadly in casual speech, any soft drink.", id: "Kata serapan dari bahasa Inggris 'juice' — bisa berarti jus buah atau, secara lebih luas dalam percakapan santai, minuman ringan apa pun." }],
  ["コーヒー", "koohii", { en: "coffee", id: "kopi" }, "まいあさ コーヒーを のみます。",
    [["まいあさ", "Maiasa"], ["コーヒー", "koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee every morning.", id: "Saya minum kopi setiap pagi." }, "", "毎朝コーヒーを飲みます。",
    { en: "A loanword from Dutch koffie, now the standard word for coffee — one of the most common drinks ordered at a きっさてん (cafe).", id: "Kata serapan dari bahasa Belanda koffie, kini jadi kata standar untuk kopi — salah satu minuman paling umum dipesan di きっさてん (kafe)." }],
  ["ビール", "biiru", { en: "beer", id: "bir" }, "つめたい ビールが のみたいです。",
    [["つめたい", "Tsumetai"], ["ビール", "biiru"], ["が", "ga"], ["のみたい", "nomitai"], ["です", "desu"]],
    { en: "I want to drink cold beer.", id: "Saya ingin minum bir dingin." }, "", "冷たいビールが飲みたいです。",
    { en: "A loanword from Dutch bier — one specific type of お酒 (alcoholic drink), the broader category word.", id: "Kata serapan dari bahasa Belanda bier — salah satu jenis spesifik dari お酒 (minuman beralkohol), kata kategori yang lebih luas." }],
  ["メニュー", "menyuu", { en: "menu", id: "menu" }, "メニューを みせてください。",
    [["メニュー", "Menyuu"], ["を", "wo"], ["みせて", "misete"], ["ください", "kudasai"]],
    { en: "Please show me the menu.", id: "Tolong tunjukkan menunya." }, "", "メニューを見せてください。",
    { en: "A loanword from English 'menu' — commonly used when ordering at a restaurant.", id: "Kata serapan dari bahasa Inggris 'menu' — umum dipakai saat memesan di restoran." }],
  ["スプーン", "supuun", { en: "spoon", id: "sendok" }, "スプーンを ひとつ ください。",
    [["スプーン", "Supuun"], ["を", "wo"], ["ひとつ", "hitotsu"], ["ください", "kudasai"]],
    { en: "Please give me one spoon.", id: "Tolong beri saya satu sendok." }, "", "スプーンを一つください。",
    { en: "A loanword from English 'spoon' — commonly used alongside フォーク (fork) for Western-style meals.", id: "Kata serapan dari bahasa Inggris 'spoon' — umum dipakai bersama フォーク (garpu) untuk hidangan bergaya Barat." }],
  ["フォーク", "fooku", { en: "fork", id: "garpu" }, "フォークで たべます。",
    [["フォーク", "Fooku"], ["で", "de"], ["たべます", "tabemasu"]],
    { en: "I eat with a fork.", id: "Saya makan dengan garpu." }, "", "フォークで食べます。",
    { en: "A loanword from English 'fork' — paired with スプーン (spoon) and ナイフ (knife) for Western-style table settings.", id: "Kata serapan dari bahasa Inggris 'fork' — dipasangkan dengan スプーン (sendok) dan ナイフ (pisau) untuk perlengkapan makan bergaya Barat." }]
];

// Sub-Tier 3.2: Benda-benda Pribadi & Rumah (47)
const KOTOBA_N5_CH3_2 = [
  ["ほん", "hon", { en: "book", id: "buku" }, "この ほんは とても おもしろいです。",
    [["この", "Kono"], ["ほん", "hon"], ["は", "wa"], ["とても", "totemo"], ["おもしろい", "omoshiroi"], ["です", "desu"]],
    { en: "This book is very interesting.", id: "Buku ini sangat menarik." }, "本", "この本はとても面白いです。",
    { en: "The same kanji 本 also appears as the counter root in ほん, used for counting long cylindrical objects like bottles and pencils — a different function from the noun \"book\".", id: "Kanji yang sama, 本, juga muncul sebagai akar kata bantu bilangan ほん, dipakai untuk menghitung benda panjang seperti botol dan pensil — fungsi berbeda dari kata benda \"buku\"." }],
  ["かばん", "kaban", { en: "bag", id: "tas" }, "あたらしい かばんを かいたいです。",
    [["あたらしい", "Atarashii"], ["かばん", "kaban"], ["を", "wo"], ["かいたい", "kaitai"], ["です", "desu"]],
    { en: "I want to buy a new bag.", id: "Saya ingin membeli tas baru." }, "鞄", "新しい鞄を買いたいです。",
    { en: "The kanji 鞄 is fairly complex and often skipped in casual writing — かばん is commonly written in kana even by native speakers.", id: "Kanji 鞄 cukup rumit dan sering dilewati dalam tulisan santai — かばん umum ditulis dengan kana bahkan oleh penutur asli." }],
  ["とけい", "tokei", { en: "clock, watch", id: "jam, arloji" }, "この とけいは たかいです。",
    [["この", "Kono"], ["とけい", "tokei"], ["は", "wa"], ["たかい", "takai"], ["です", "desu"]],
    { en: "This watch is expensive.", id: "Jam tangan ini mahal." }, "時計", "この時計は高いです。",
    { en: "Combines 時 (time) + 計 (measure/gauge) — the same 時 appears in じかん (time) and なんじ (what time).", id: "Gabungan dari 時 (waktu) + 計 (alat ukur) — 時 yang sama muncul pada じかん (waktu) dan なんじ (jam berapa)." }],
  ["いえ", "ie", { en: "house", id: "rumah" }, "あの いえは とても おおきいです。",
    [["あの", "Ano"], ["いえ", "ie"], ["は", "wa"], ["とても", "totemo"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "That house is very big.", id: "Rumah itu sangat besar." }, "家", "あの家はとても大きいです。",
    { en: "うち is a common alternative meaning \"house/home\", often used specifically for one's own home, while いえ can refer to any house in general.", id: "うち adalah alternatif umum yang berarti \"rumah\", sering dipakai khusus untuk rumah sendiri, sedangkan いえ bisa merujuk ke rumah mana saja secara umum." }],
  ["いす", "isu", { en: "chair", id: "kursi" }, "いすに すわって ください。",
    [["いす", "Isu"], ["に", "ni"], ["すわって", "suwatte"], ["ください", "kudasai"]],
    { en: "Please sit on the chair.", id: "Tolong duduk di kursi." }, "椅子", "椅子に座ってください。",
    { en: "椅子 contains two kanji beyond the N5 list, so the word is almost always written in kana (いす) in everyday use.", id: "椅子 mengandung dua kanji di luar daftar N5, sehingga kata ini hampir selalu ditulis dengan kana (いす) dalam pemakaian sehari-hari." }],
  ["つくえ", "tsukue", { en: "desk", id: "meja belajar/kerja" }, "つくえで べんきょうします。",
    [["つくえ", "Tsukue"], ["で", "de"], ["べんきょうします", "benkyoushimasu"]],
    { en: "I study at the desk.", id: "Saya belajar di meja." }, "机", "机で勉強します。",
    { en: "Refers specifically to a desk used for study or office work — distinct from テーブル, which is a general dining or living-room table.", id: "Merujuk khusus pada meja untuk belajar atau kerja kantor — berbeda dari テーブル, yang merupakan meja makan atau ruang tamu secara umum." }],
  ["テーブル", "teeburu", { en: "table", id: "meja makan/tamu" }, "テーブルの うえに コーヒーが あります。",
    [["テーブル", "Teeburu"], ["の", "no"], ["うえ", "ue"], ["に", "ni"], ["コーヒー", "koohii"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is coffee on the table.", id: "Ada kopi di atas meja." }, "", "テーブルの上にコーヒーがあります。",
    { en: "Borrowed from English \"table\" — used for a dining or living-room table, while つくえ specifically refers to a desk.", id: "Serapan dari bahasa Inggris \"table\" — dipakai untuk meja makan atau ruang tamu, sedangkan つくえ khusus merujuk pada meja belajar/kerja." }],
  ["まど", "mado", { en: "window", id: "jendela" }, "まどを あけて ください。",
    [["まど", "Mado"], ["を", "wo"], ["あけて", "akete"], ["ください", "kudasai"]],
    { en: "Please open the window.", id: "Tolong buka jendelanya." }, "窓", "窓を開けてください。",
    { en: "Uses the てform + ください pattern to make a polite request — the same structure also works with ドア (door).", id: "Memakai pola bentuk-te + ください untuk membuat permintaan sopan — pola yang sama juga berlaku untuk ドア (pintu)." }],
  ["ドア", "doa", { en: "door", id: "pintu" }, "ドアを しめて ください。",
    [["ドア", "Doa"], ["を", "wo"], ["しめて", "shimete"], ["ください", "kudasai"]],
    { en: "Please close the door.", id: "Tolong tutup pintunya." }, "", "ドアを閉めてください。",
    { en: "Borrowed from English \"door\". The native word 戸 (と) also exists but is less common for modern Western-style doors.", id: "Serapan dari bahasa Inggris \"door\". Kata asli 戸 (と) juga ada tapi kurang umum untuk pintu bergaya Barat modern." }],
  ["へや", "heya", { en: "room", id: "kamar, ruangan" }, "わたしの へやは ちいさいです。",
    [["わたし", "Watashi"], ["の", "no"], ["へや", "heya"], ["は", "wa"], ["ちいさい", "chiisai"], ["です", "desu"]],
    { en: "My room is small.", id: "Kamar saya kecil." }, "部屋", "私の部屋は小さいです。",
    { en: "Combines 部 (section/part) + 屋 (house/shop) — the same 屋 appears in shop names like ほんや (本屋, bookstore) and やおや (vegetable store).", id: "Gabungan dari 部 (bagian) + 屋 (rumah/toko) — 屋 yang sama muncul pada nama toko seperti ほんや (本屋, toko buku) dan やおや (toko sayur)." }],
  ["ベッド", "beddo", { en: "bed", id: "tempat tidur, kasur" }, "ベッドで ねます。",
    [["ベッド", "Beddo"], ["で", "de"], ["ねます", "nemasu"]],
    { en: "I sleep on the bed.", id: "Saya tidur di kasur." }, "", "ベッドで寝ます。",
    { en: "Borrowed from English \"bed\" — traditional Japanese homes instead use ふとん (a floor futon), so both words are common depending on the room's style.", id: "Serapan dari bahasa Inggris \"bed\" — rumah tradisional Jepang memakai ふとん (kasur lantai) sebagai gantinya, jadi keduanya umum dipakai tergantung gaya ruangan." }],
  ["でんわ", "denwa", { en: "telephone", id: "telepon" }, "でんわを かけます。",
    [["でんわ", "Denwa"], ["を", "wo"], ["かけます", "kakemasu"]],
    { en: "I make a phone call.", id: "Saya menelepon." }, "電話", "電話をかけます。",
    { en: "Combines 電 (electric) + 話 (speech/talk) — the same 電 appears in でんき (electricity) and でんしゃ (train).", id: "Gabungan dari 電 (listrik) + 話 (bicara) — 電 yang sama muncul pada でんき (listrik) dan でんしゃ (kereta listrik)." }],
  ["テレビ", "terebi", { en: "television", id: "televisi" }, "まいばん テレビを みます。",
    [["まいばん", "Maiban"], ["テレビ", "terebi"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I watch TV every night.", id: "Saya menonton TV setiap malam." }, "", "毎晩テレビを見ます。",
    { en: "Shortened from English \"television\" — one of many abbreviated loanwords in Japanese, similar to パソコン (personal computer).", id: "Disingkat dari bahasa Inggris \"television\" — salah satu dari banyak kata serapan yang dipersingkat dalam bahasa Jepang, mirip パソコン (komputer pribadi)." }],
  ["カメラ", "kamera", { en: "camera", id: "kamera" }, "あたらしい カメラを かいました。",
    [["あたらしい", "Atarashii"], ["カメラ", "kamera"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a new camera.", id: "Saya membeli kamera baru." }, "", "新しいカメラを買いました。",
    { en: "Borrowed from English \"camera\" — a standard katakana loanword with no common native Japanese equivalent.", id: "Serapan dari bahasa Inggris \"camera\" — kata serapan katakana standar tanpa padanan asli bahasa Jepang yang umum." }],
  ["れいぞうこ", "reizouko", { en: "refrigerator", id: "kulkas" }, "ぎゅうにゅうは れいぞうこに あります。",
    [["ぎゅうにゅう", "Gyuunyuu"], ["は", "wa"], ["れいぞうこ", "reizouko"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "The milk is in the refrigerator.", id: "Susunya ada di dalam kulkas." }, "冷蔵庫", "牛乳は冷蔵庫にあります。",
    { en: "Combines 冷 (cold) + 蔵 (storage) + 庫 (warehouse) — a longer compound, but one of the most common everyday nouns at N5.", id: "Gabungan dari 冷 (dingin) + 蔵 (penyimpanan) + 庫 (gudang) — kata majemuk yang lebih panjang, tapi termasuk kata benda sehari-hari paling umum di level N5." }],
  ["えんぴつ", "enpitsu", { en: "pencil", id: "pensil" }, "えんぴつで かいて ください。",
    [["えんぴつ", "Enpitsu"], ["で", "de"], ["かいて", "kaite"], ["ください", "kudasai"]],
    { en: "Please write with a pencil.", id: "Tolong tulis dengan pensil." }, "鉛筆", "鉛筆で書いてください。",
    { en: "Uses で to mark the tool used for an action — the same particle pattern used for ペン and other instruments.", id: "Memakai partikel で untuk menandai alat yang dipakai dalam suatu tindakan — pola partikel yang sama dipakai untuk ペン dan alat lainnya." }],
  ["ペン", "pen", { en: "pen", id: "pulpen" }, "ペンで なまえを かきます。",
    [["ペン", "Pen"], ["で", "de"], ["なまえ", "namae"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write my name with a pen.", id: "Saya menulis nama saya dengan pulpen." }, "", "ペンで名前を書きます。",
    { en: "Borrowed from English \"pen\" — unlike えんぴつ (pencil), ペン ink cannot be erased, an important distinction in classroom or form instructions.", id: "Serapan dari bahasa Inggris \"pen\" — berbeda dari えんぴつ (pensil), tinta ペン tidak bisa dihapus, perbedaan penting dalam instruksi kelas atau formulir." }],
  ["かみ", "kami", { en: "paper", id: "kertas" }, "かみに なまえを かいて ください。",
    [["かみ", "Kami"], ["に", "ni"], ["なまえ", "namae"], ["を", "wo"], ["かいて", "kaite"], ["ください", "kudasai"]],
    { en: "Please write your name on the paper.", id: "Tolong tulis nama Anda di kertas." }, "紙", "紙に名前を書いてください。",
    { en: "かみ is also the pronunciation of 髪 (hair) and 神 (god) — different words that happen to sound alike, distinguished by context and kanji.", id: "かみ juga merupakan cara baca dari 髪 (rambut) dan 神 (dewa) — kata berbeda yang kebetulan terdengar sama, dibedakan lewat konteks dan kanji." }],
  ["かぎ", "kagi", { en: "key", id: "kunci" }, "かぎを なくしました。",
    [["かぎ", "Kagi"], ["を", "wo"], ["なくしました", "nakushimashita"]],
    { en: "I lost my key.", id: "Saya kehilangan kunci saya." }, "鍵", "鍵をなくしました。",
    { en: "Used for both physical keys and the act of locking something, as in かぎを かける (to lock, lit. \"to hang a key\").", id: "Dipakai untuk kunci fisik maupun tindakan mengunci sesuatu, seperti pada かぎを かける (mengunci, harfiah \"menggantung kunci\")." }],
  ["さいふ", "saifu", { en: "wallet", id: "dompet" }, "さいふは かばんの なかに あります。",
    [["さいふ", "Saifu"], ["は", "wa"], ["かばん", "kaban"], ["の", "no"], ["なか", "naka"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "My wallet is inside my bag.", id: "Dompet saya ada di dalam tas." }, "財布", "財布は鞄の中にあります。",
    { en: "Combines 財 (wealth/money) + 布 (cloth) — early wallets were cloth pouches, and the kanji still reflects that origin.", id: "Gabungan dari 財 (kekayaan/uang) + 布 (kain) — dompet zaman dahulu berupa kantung kain, dan kanjinya masih mencerminkan asal-usul itu." }],
  ["じしょ", "jisho", { en: "dictionary", id: "kamus" }, "じしょで ことばを しらべます。",
    [["じしょ", "Jisho"], ["で", "de"], ["ことば", "kotoba"], ["を", "wo"], ["しらべます", "shirabemasu"]],
    { en: "I look up words in a dictionary.", id: "Saya mencari kata di kamus." }, "辞書", "辞書で言葉を調べます。",
    { en: "Combines 辞 (words/speech) + 書 (writing/book) — an essential tool alongside a textbook (きょうかしょ) for language study.", id: "Gabungan dari 辞 (kata/ucapan) + 書 (tulisan/buku) — alat penting selain buku pelajaran (きょうかしょ) untuk belajar bahasa." }],
  ["ざっし", "zasshi", { en: "magazine", id: "majalah" }, "えきで ざっしを かいました。",
    [["えき", "Eki"], ["で", "de"], ["ざっし", "zasshi"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a magazine at the station.", id: "Saya membeli majalah di stasiun." }, "雑誌", "駅で雑誌を買いました。",
    { en: "Refers to a periodical publication — distinct from ほん (book), which usually means a single, complete work.", id: "Merujuk pada publikasi berkala — berbeda dari ほん (buku), yang biasanya berarti satu karya utuh." }],
  ["しんぶん", "shinbun", { en: "newspaper", id: "surat kabar / koran" }, "まいあさ しんぶんを よみます。",
    [["まいあさ", "Maiasa"], ["しんぶん", "shinbun"], ["を", "wo"], ["よみます", "yomimasu"]],
    { en: "I read the newspaper every morning.", id: "Saya membaca koran setiap pagi." }, "新聞", "毎朝新聞を読みます。",
    { en: "Combines 新 (new) + 聞 (hear/ask) — the same 聞 appears in きく (to listen/ask).", id: "Gabungan dari 新 (baru) + 聞 (mendengar/bertanya) — 聞 yang sama muncul pada きく (mendengar/bertanya)." }],
  ["ノート", "nooto", { en: "notebook", id: "buku catatan" }, "ノートに かいて ください。",
    [["ノート", "Nooto"], ["に", "ni"], ["かいて", "kaite"], ["ください", "kudasai"]],
    { en: "Please write it in your notebook.", id: "Tolong tulis di buku catatan." }, "", "ノートに書いてください。",
    { en: "A loanword from English 'note' — refers to a notebook, not a single note; a common item in every student's bag.", id: "Kata serapan dari bahasa Inggris 'note' — merujuk pada buku catatan, bukan secarik catatan; barang umum di tas setiap pelajar." }],
  ["てちょう", "techou", { en: "pocket notebook, planner", id: "buku agenda / buku saku" }, "てちょうに よていを かきます。",
    [["てちょう", "Techou"], ["に", "ni"], ["よてい", "yotei"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write my schedule in my planner.", id: "Saya menulis jadwal saya di buku agenda." }, "手帳", "手帳に予定を書きます。",
    { en: "Combines 手 (hand) + 帳 (notebook/register) — a small notebook typically carried for schedules and notes, distinct from a school ノート.", id: "Gabungan dari 手 (tangan) + 帳 (buku catatan) — buku kecil yang biasa dibawa untuk jadwal dan catatan, berbeda dari ノート sekolah." }],
  ["てがみ", "tegami", { en: "letter", id: "surat" }, "ともだちに てがみを かきました。",
    [["ともだち", "Tomodachi"], ["に", "ni"], ["てがみ", "tegami"], ["を", "wo"], ["かきました", "kakimashita"]],
    { en: "I wrote a letter to my friend.", id: "Saya menulis surat kepada teman saya." }, "手紙", "友達に手紙を書きました。",
    { en: "Combines 手 (hand) + 紙 (paper) — literally 'hand paper', a word for a written letter.", id: "Gabungan dari 手 (tangan) + 紙 (kertas) — secara harfiah 'kertas tangan', kata untuk surat tulisan tangan." }],
  ["きって", "kitte", { en: "postage stamp", id: "prangko" }, "きってを さんまい かいました。",
    [["きって", "Kitte"], ["を", "wo"], ["さんまい", "sanmai"], ["かいました", "kaimashita"]],
    { en: "I bought three postage stamps.", id: "Saya membeli tiga prangko." }, "切手", "切手を三枚買いました。",
    { en: "Counted with まい since it's a flat, thin object — combines 切 (cut) + 手 (hand), an old term for a hand-cut ticket.", id: "Dihitung dengan まい karena benda tipis dan datar — gabungan dari 切 (potong) + 手 (tangan), istilah lama untuk tiket yang dipotong tangan." }],
  ["はがき", "hagaki", { en: "postcard", id: "kartu pos" }, "りょこうさきから はがきを おくりました。",
    [["りょこうさき", "Ryokousaki"], ["から", "kara"], ["はがき", "hagaki"], ["を", "wo"], ["おくりました", "okurimashita"]],
    { en: "I sent a postcard from my travel destination.", id: "Saya mengirim kartu pos dari tempat wisata." }, "葉書", "旅行先から葉書を送りました。",
    { en: "Usually written in kana since its kanji (葉書) is uncommon in everyday writing — a card sent without an envelope.", id: "Biasanya ditulis dengan kana karena kanjinya (葉書) jarang dipakai dalam tulisan sehari-hari — kartu yang dikirim tanpa amplop." }],
  ["ボールペン", "boorupen", { en: "ballpoint pen", id: "ballpoint" }, "ボールペンで かいて ください。",
    [["ボールペン", "Boorupen"], ["で", "de"], ["かいて", "kaite"], ["ください", "kudasai"]],
    { en: "Please write with a ballpoint pen.", id: "Tolong tulis dengan ballpoint." }, "", "ボールペンで書いてください。",
    { en: "From English 'ball(point) pen' — a more specific term than the general ペン, which can also refer to fountain pens or markers.", id: "Dari bahasa Inggris 'ball(point) pen' — istilah lebih spesifik dibanding ペン secara umum, yang juga bisa merujuk pada pena tinta atau spidol." }],
  ["けしゴム", "keshigomu", { en: "eraser", id: "penghapus" }, "けしゴムを かして ください。",
    [["けしゴム", "Keshigomu"], ["を", "wo"], ["かして", "kashite"], ["ください", "kudasai"]],
    { en: "Please lend me an eraser.", id: "Tolong pinjami saya penghapus." }, "消しゴム", "消しゴムを貸してください。",
    { en: "A hybrid word: 消し (from けす, 'to erase') + ゴム (from Dutch 'gom', rubber) — a good example of Japanese mixing native and loanword parts.", id: "Kata gabungan: 消し (dari けす, 'menghapus') + ゴム (dari bahasa Belanda 'gom', karet) — contoh bagus percampuran unsur asli dan serapan dalam bahasa Jepang." }],
  ["かさ", "kasa", { en: "umbrella", id: "payung" }, "あめだから かさを もって いきます。",
    [["あめ", "Ame"], ["だから", "dakara"], ["かさ", "kasa"], ["を", "wo"], ["もって", "motte"], ["いきます", "ikimasu"]],
    { en: "Since it's raining, I'll bring an umbrella.", id: "Karena hujan, saya akan membawa payung." }, "傘", "雨だから傘を持って行きます。",
    { en: "The kanji 傘 visually resembles an open umbrella — counted with ほん, the counter for long, cylindrical objects when closed.", id: "Kanji 傘 secara visual menyerupai payung yang terbuka — dihitung dengan ほん, kata bantu bilangan untuk benda panjang silinder saat tertutup." }],
  ["ふとん", "futon", { en: "Japanese floor mattress, bedding", id: "kasur lipat ala Jepang" }, "よる ふとんを しきます。",
    [["よる", "Yoru"], ["ふとん", "futon"], ["を", "wo"], ["しきます", "shikimasu"]],
    { en: "I lay out the futon at night.", id: "Saya menggelar futon di malam hari." }, "布団", "夜布団を敷きます。",
    { en: "A traditional Japanese bedding set laid directly on tatami flooring and folded away during the day — distinct from a Western-style ベッド.", id: "Seperangkat kasur tradisional Jepang yang digelar langsung di atas lantai tatami dan dilipat kembali di siang hari — berbeda dari ベッド bergaya Barat." }],
  ["でんき", "denki", { en: "electricity, light", id: "listrik / lampu" }, "でんきを けして ください。",
    [["でんき", "Denki"], ["を", "wo"], ["けして", "keshite"], ["ください", "kudasai"]],
    { en: "Please turn off the light.", id: "Tolong matikan lampunya." }, "電気", "電気を消してください。",
    { en: "Means both 'electricity' in general and, colloquially, 'the light' in a room — the same 電 appears in でんわ (telephone) and でんしゃ (train).", id: "Berarti 'listrik' secara umum dan, secara sehari-hari, 'lampu' dalam ruangan — 電 yang sama muncul pada でんわ (telepon) dan でんしゃ (kereta)." }],
  ["ストーブ", "sutoobu", { en: "heater", id: "pemanas ruangan" }, "さむいから ストーブを つけます。",
    [["さむい", "Samui"], ["から", "kara"], ["ストーブ", "sutoobu"], ["を", "wo"], ["つけます", "tsukemasu"]],
    { en: "Since it's cold, I turn on the heater.", id: "Karena dingin, saya menyalakan pemanas ruangan." }, "", "寒いからストーブをつけます。",
    { en: "From English 'stove' — in Japanese it refers to a room heater, not a cooking stove, so context matters when translating.", id: "Dari bahasa Inggris 'stove' — dalam bahasa Jepang berarti pemanas ruangan, bukan kompor masak, jadi konteks penting saat menerjemahkan." }],
  ["スリッパ", "surippa", { en: "slippers", id: "sandal rumah" }, "いえの なかで スリッパを はきます。",
    [["いえ", "Ie"], ["の", "no"], ["なか", "naka"], ["で", "de"], ["スリッパ", "surippa"], ["を", "wo"], ["はきます", "hakimasu"]],
    { en: "I wear slippers inside the house.", id: "Saya memakai sandal rumah di dalam rumah." }, "", "家の中でスリッパを履きます。",
    { en: "From English 'slipper(s)' — commonly used indoors in Japan after taking off outdoor くつ (shoes) at the entrance.", id: "Dari bahasa Inggris 'slipper(s)' — umum dipakai di dalam ruangan di Jepang setelah melepas くつ (sepatu luar) di pintu masuk." }],
  ["せっけん", "sekken", { en: "soap", id: "sabun" }, "せっけんで てを あらいます。",
    [["せっけん", "Sekken"], ["で", "de"], ["て", "te"], ["を", "wo"], ["あらいます", "araimasu"]],
    { en: "I wash my hands with soap.", id: "Saya mencuci tangan dengan sabun." }, "石鹸", "石鹸で手を洗います。",
    { en: "The kanji 石鹸 (literally 'stone alkali') is complex and rarely handwritten — せっけん is usually written in kana in everyday use.", id: "Kanji 石鹸 (harfiah 'alkali batu') rumit dan jarang ditulis tangan — せっけん biasanya ditulis dengan kana dalam pemakaian sehari-hari." }],
  ["タオル", "taoru", { en: "towel", id: "handuk" }, "タオルで かおを ふきます。",
    [["タオル", "Taoru"], ["で", "de"], ["かお", "kao"], ["を", "wo"], ["ふきます", "fukimasu"]],
    { en: "I wipe my face with a towel.", id: "Saya mengelap wajah saya dengan handuk." }, "", "タオルで顔を拭きます。",
    { en: "From English 'towel' — commonly found near a sink or bath, and a common item to bring when visiting someone's home.", id: "Dari bahasa Inggris 'towel' — umum ditemukan di dekat wastafel atau kamar mandi, dan barang umum yang dibawa saat berkunjung ke rumah orang." }],
  ["はこ", "hako", { en: "box", id: "kotak / dus" }, "はこの なかに ケーキが あります。",
    [["はこ", "Hako"], ["の", "no"], ["なか", "naka"], ["に", "ni"], ["ケーキ", "keeki"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is cake inside the box.", id: "Ada kue di dalam kotak." }, "箱", "箱の中にケーキがあります。",
    { en: "A general word for a box or case of any material — used for anything from a shoebox to a gift box.", id: "Kata umum untuk kotak atau wadah dari bahan apa pun — dipakai untuk apa pun mulai dari kotak sepatu hingga kotak hadiah." }],
  ["さら", "sara", { en: "plate, dish", id: "piring" }, "さらを あらいます。",
    [["さら", "Sara"], ["を", "wo"], ["あらいます", "araimasu"]],
    { en: "I wash the dishes.", id: "Saya mencuci piring." }, "皿", "皿を洗います。",
    { en: "Counted with まい since it's a flat object — the same counter used for paper and other thin, flat items.", id: "Dihitung dengan まい karena benda tipis dan datar — kata bantu bilangan yang sama dipakai untuk kertas dan benda tipis lainnya." }],
  ["コップ", "koppu", { en: "cup, glass", id: "gelas" }, "コップに みずを いれます。",
    [["コップ", "Koppu"], ["に", "ni"], ["みず", "mizu"], ["を", "wo"], ["いれます", "iremasu"]],
    { en: "I pour water into the glass.", id: "Saya menuangkan air ke dalam gelas." }, "", "コップに水を入れます。",
    { en: "From Dutch 'kop' — usually refers to a plain glass or cup for cold drinks, distinct from ちゃわん used for tea or rice.", id: "Dari bahasa Belanda 'kop' — biasanya merujuk pada gelas polos untuk minuman dingin, berbeda dari ちゃわん yang dipakai untuk teh atau nasi." }],
  ["ちゃわん", "chawan", { en: "rice bowl, teacup", id: "mangkok nasi / cangkir teh" }, "ちゃわんに ごはんを いれます。",
    [["ちゃわん", "Chawan"], ["に", "ni"], ["ごはん", "gohan"], ["を", "wo"], ["いれます", "iremasu"]],
    { en: "I put rice in the bowl.", id: "Saya menaruh nasi di mangkok." }, "茶碗", "茶碗にご飯を入れます。",
    { en: "Literally 'tea bowl' (茶 + 碗), but in modern use most often refers to a rice bowl — context tells whether it's for rice or tea.", id: "Secara harfiah 'mangkok teh' (茶 + 碗), tapi dalam pemakaian modern paling sering berarti mangkok nasi — konteks yang menentukan apakah untuk nasi atau teh." }],
  ["ケータイ", "keetai", { en: "cell phone", id: "HP / telepon genggam" }, "ケータイで でんわを かけます。",
    [["ケータイ", "Keetai"], ["で", "de"], ["でんわ", "denwa"], ["を", "wo"], ["かけます", "kakemasu"]],
    { en: "I make a phone call with my cell phone.", id: "Saya menelepon dengan HP saya." }, "携帯", "携帯で電話をかけます。",
    { en: "Short for 携帯電話 (portable telephone) — ケータイ is the everyday spoken form, while 携帯 alone is more common in writing.", id: "Singkatan dari 携帯電話 (telepon genggam) — ケータイ adalah bentuk lisan sehari-hari, sedangkan 携帯 saja lebih umum dalam tulisan." }],
  ["ラジオ", "rajio", { en: "radio", id: "radio" }, "くるまで ラジオを ききます。",
    [["くるま", "Kuruma"], ["で", "de"], ["ラジオ", "rajio"], ["を", "wo"], ["ききます", "kikimasu"]],
    { en: "I listen to the radio in the car.", id: "Saya mendengarkan radio di dalam mobil." }, "", "車でラジオを聞きます。",
    { en: "From English 'radio' — pairs with きく (to listen), the same verb used for music and other audio.", id: "Dari bahasa Inggris 'radio' — berpasangan dengan きく (mendengar), kata kerja yang sama dipakai untuk musik dan audio lainnya." }],
  ["パソコン", "pasokon", { en: "personal computer, laptop", id: "komputer / laptop" }, "パソコンで レポートを かきます。",
    [["パソコン", "Pasokon"], ["で", "de"], ["レポート", "repooto"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write my report on my computer.", id: "Saya menulis laporan saya di komputer." }, "", "パソコンでレポートを書きます。",
    { en: "Shortened from English 'personal computer' — one of many abbreviated loanwords in Japanese, similar to テレビ (television).", id: "Disingkat dari bahasa Inggris 'personal computer' — salah satu dari banyak kata serapan yang dipersingkat dalam bahasa Jepang, mirip テレビ (televisi)." }],
  ["エアコン", "eakon", { en: "air conditioner", id: "AC" }, "あついから エアコンを つけます。",
    [["あつい", "Atsui"], ["から", "kara"], ["エアコン", "eakon"], ["を", "wo"], ["つけます", "tsukemasu"]],
    { en: "Since it's hot, I turn on the air conditioner.", id: "Karena panas, saya menyalakan AC." }, "", "暑いからエアコンをつけます。",
    { en: "Shortened from English 'air conditioner' — the opposite-season counterpart to ストーブ (heater).", id: "Disingkat dari bahasa Inggris 'air conditioner' — pasangan musim sebaliknya dari ストーブ (pemanas)." }],
  ["おかね", "okane", { en: "money", id: "uang" }, "おかねが あまり ありません。",
    [["おかね", "Okane"], ["が", "ga"], ["あまり", "amari"], ["ありません", "arimasen"]],
    { en: "I don't have much money.", id: "Saya tidak punya banyak uang." }, "お金", "お金があまりありません。",
    { en: "The お is a polite prefix attached to かね (money) — the same softening pattern as おちゃ and おかし.", id: "お adalah awalan sopan yang menempel pada かね (uang) — pola pelembut yang sama seperti おちゃ dan おかし." }],
  ["にもつ", "nimotsu", { en: "luggage, baggage, package", id: "barang bawaan / paket" }, "にもつが おおくて おもいです。",
    [["にもつ", "Nimotsu"], ["が", "ga"], ["おおくて", "ookute"], ["おもい", "omoi"], ["です", "desu"]],
    { en: "My luggage is a lot and heavy.", id: "Barang bawaan saya banyak dan berat." }, "荷物", "荷物が多くて重いです。",
    { en: "Combines 荷 (load/cargo) + 物 (thing) — refers to belongings being carried, shipped, or checked in for travel.", id: "Gabungan dari 荷 (muatan) + 物 (benda) — merujuk pada barang bawaan yang dibawa, dikirim, atau dicheck-in untuk perjalanan." }],
  ["しゅみ", "shumi", { en: "hobby", id: "hobi" }, "わたしの しゅみは しゃしんです。",
    [["わたし", "Watashi"], ["の", "no"], ["しゅみ", "shumi"], ["は", "wa"], ["しゃしん", "shashin"], ["です", "desu"]],
    { en: "My hobby is photography.", id: "Hobi saya adalah fotografi." }, "趣味", "私の趣味は写真です。",
    { en: "A common question in self-introductions is shumi wa nan desu ka? (what's your hobby?).", id: "Pertanyaan umum saat perkenalan diri: しゅみは なんですか (apa hobimu?)." }],
  ["おんがく", "ongaku", { en: "music", id: "musik" }, "おんがくを きくのが すきです。",
    [["おんがく", "Ongaku"], ["を", "wo"], ["きく", "kiku"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like listening to music.", id: "Saya suka mendengarkan musik." }, "音楽", "音楽を聞くのが好きです。",
    { en: "Combines 音 (sound) + 楽 (enjoyment) — pairs naturally with the verb kiku (listen) as in this example.", id: "Gabungan dari 音 (suara) + 楽 (kesenangan) — sering dipasangkan dengan kata kerja きく (mendengar) seperti pada contoh ini." }],
  ["うた", "uta", { en: "song", id: "lagu" }, "この うたが だいすきです。",
    [["この", "Kono"], ["うた", "uta"], ["が", "ga"], ["だいすき", "daisuki"], ["です", "desu"]],
    { en: "I really love this song.", id: "Saya sangat suka lagu ini." }, "歌", "この歌が大好きです。",
    { en: "The noun form of the verb utau (to sing) — shares its kanji 歌 with かしゅ (singer, lit. 'song master').", id: "Bentuk kata benda dari kata kerja うたう (menyanyi) — berbagi kanji 歌 dengan かしゅ (penyanyi, secara harfiah 'ahli lagu')." }],
  ["しゃしん", "shashin", { en: "photo, photograph", id: "foto" }, "かぞくの しゃしんを とります。",
    [["かぞく", "Kazoku"], ["の", "no"], ["しゃしん", "shashin"], ["を", "wo"], ["とります", "torimasu"]],
    { en: "I take a photo of my family.", id: "Saya mengambil foto keluarga." }, "写真", "家族の写真を撮ります。",
    { en: "Pairs with the verb toru (to take), not utsusu, when talking about taking a picture: shashin wo toru.", id: "Berpasangan dengan kata kerja とる (mengambil), bukan うつす, saat membahas mengambil gambar: しゃしんを とる." }],
  ["スポーツ", "supootsu", { en: "sports", id: "olahraga" }, "スポーツを するのが すきです。",
    [["スポーツ", "Supootsu"], ["を", "wo"], ["する", "suru"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like playing sports.", id: "Saya suka berolahraga." }, "", "スポーツをするのが好きです。",
    { en: "A loanword from English 'sports' — combined with suru (to do) for playing/doing a sport in general.", id: "Kata serapan dari bahasa Inggris 'sports' — dipasangkan dengan する (melakukan) untuk berolahraga secara umum." }]
];

// Sub-Tier 3.3: Pakaian & Aksesori (21)
const KOTOBA_N5_CH3_3 = [
  ["ふく", "fuku", { en: "clothes", id: "pakaian, baju" }, "あたらしい ふくを かいました。",
    [["あたらしい", "Atarashii"], ["ふく", "fuku"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought new clothes.", id: "Saya membeli baju baru." }, "服", "新しい服を買いました。",
    { en: "A general word for clothing overall — specific garments like シャツ (shirt) and ズボン (pants) are all types of ふく.", id: "Kata umum untuk pakaian secara keseluruhan — pakaian tertentu seperti シャツ (kemeja) dan ズボン (celana) semuanya termasuk ふく." }],
  ["シャツ", "shatsu", { en: "shirt", id: "kemeja" }, "あたらしい シャツを かいました。",
    [["あたらしい", "Atarashii"], ["シャツ", "shatsu"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a new shirt.", id: "Saya membeli kemeja baru." }, "", "新しいシャツを買いました。",
    { en: "From English \"shirt\". Pairs with きる, the verb for things worn on the upper body — the same verb used for most jackets and sweaters.", id: "Dari bahasa Inggris \"shirt\". Berpasangan dengan きる, kata kerja untuk benda yang dipakai di tubuh bagian atas — kata kerja yang sama dipakai untuk kebanyakan jaket dan sweater." }],
  ["セーター", "seetaa", { en: "sweater", id: "sweater" }, "さむいから セーターを きます。",
    [["さむい", "Samui"], ["から", "kara"], ["セーター", "seetaa"], ["を", "wo"], ["きます", "kimasu"]],
    { en: "I wear a sweater because it's cold.", id: "Saya memakai sweater karena dingin." }, "", "寒いからセーターを着ます。",
    { en: "From English \"sweater\". Also pairs with きる since it covers the upper body, the same verb pattern as シャツ.", id: "Dari bahasa Inggris \"sweater\". Juga berpasangan dengan きる karena menutupi tubuh bagian atas, pola kata kerja yang sama seperti シャツ." }],
  ["コート", "kooto", { en: "coat", id: "mantel" }, "ふゆは コートを きます。",
    [["ふゆ", "Fuyu"], ["は", "wa"], ["コート", "kooto"], ["を", "wo"], ["きます", "kimasu"]],
    { en: "I wear a coat in winter.", id: "Saya memakai mantel di musim dingin." }, "", "冬はコートを着ます。",
    { en: "From English \"coat\" — worn over other clothes, so it also pairs with きる, like a shirt or sweater.", id: "Dari bahasa Inggris \"coat\" — dipakai di atas pakaian lain, jadi juga berpasangan dengan きる, seperti kemeja atau sweater." }],
  ["くつ", "kutsu", { en: "shoes", id: "sepatu" }, "くろい くつを はいています。",
    [["くろい", "Kuroi"], ["くつ", "kutsu"], ["を", "wo"], ["はいています", "haiteimasu"]],
    { en: "I am wearing black shoes.", id: "Saya memakai sepatu hitam." }, "靴", "黒い靴を履いています。",
    { en: "Uses はく, not きる, as the verb for things worn on the legs or feet — pants, skirts, and shoes all pair with はく.", id: "Memakai はく, bukan きる, sebagai kata kerja untuk benda yang dipakai di kaki atau tungkai — celana, rok, dan sepatu semuanya berpasangan dengan はく." }],
  ["ズボン", "zubon", { en: "pants, trousers", id: "celana panjang" }, "くろい ズボンを はいています。",
    [["くろい", "Kuroi"], ["ズボン", "zubon"], ["を", "wo"], ["はいています", "haiteimasu"]],
    { en: "I am wearing black pants.", id: "Saya memakai celana hitam." }, "", "黒いズボンを履いています。",
    { en: "Borrowed from French \"jupon\", not English. Like くつ, it pairs with はく since it's worn on the legs.", id: "Serapan dari bahasa Prancis \"jupon\", bukan bahasa Inggris. Seperti くつ, berpasangan dengan はく karena dipakai di tungkai." }],
  ["スカート", "sukaato", { en: "skirt", id: "rok" }, "あたらしい スカートを かいました。",
    [["あたらしい", "Atarashii"], ["スカート", "sukaato"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a new skirt.", id: "Saya membeli rok baru." }, "", "新しいスカートを買いました。",
    { en: "From English \"skirt\" — also pairs with はく, following the same leg-wear pattern as ズボン and くつ.", id: "Dari bahasa Inggris \"skirt\" — juga berpasangan dengan はく, mengikuti pola pakaian tungkai yang sama seperti ズボン dan くつ." }],
  ["くつした", "kutsushita", { en: "socks", id: "kaus kaki" }, "しろい くつしたを はいています。",
    [["しろい", "Shiroi"], ["くつした", "kutsushita"], ["を", "wo"], ["はいています", "haiteimasu"]],
    { en: "I am wearing white socks.", id: "Saya memakai kaus kaki putih." }, "靴下", "白い靴下を履いています。",
    { en: "Literally combines 靴 (shoe) + 下 (below/under) — socks are what go \"under the shoe\". Also pairs with the verb はく.", id: "Secara harfiah gabungan dari 靴 (sepatu) + 下 (di bawah) — kaus kaki adalah yang dipakai \"di bawah sepatu\". Juga berpasangan dengan kata kerja はく." }],
  ["ぼうし", "boushi", { en: "hat, cap", id: "topi" }, "あかい ぼうしを かぶっています。",
    [["あかい", "Akai"], ["ぼうし", "boushi"], ["を", "wo"], ["かぶっています", "kabutteimasu"]],
    { en: "I am wearing a red hat.", id: "Saya memakai topi merah." }, "帽子", "赤い帽子をかぶっています。",
    { en: "Uses かぶる, a third distinct \"wearing\" verb reserved specifically for things worn on the head.", id: "Memakai かぶる, kata kerja \"memakai\" ketiga yang khusus dipakai untuk benda yang dikenakan di kepala." }],
  ["めがね", "megane", { en: "glasses", id: "kacamata" }, "めがねを かけています。",
    [["めがね", "Megane"], ["を", "wo"], ["かけています", "kaketeimasu"]],
    { en: "I am wearing glasses.", id: "Saya memakai kacamata." }, "眼鏡", "眼鏡をかけています。",
    { en: "Uses かける as its own verb, distinct from きる/はく/かぶる — a fourth \"wearing\" verb reserved mainly for glasses.", id: "Memakai かける sebagai kata kerjanya sendiri, berbeda dari きる/はく/かぶる — kata kerja \"memakai\" keempat yang khusus dipakai terutama untuk kacamata." }],
  ["ネクタイ", "nekutai", { en: "necktie", id: "dasi" }, "あおい ネクタイを しめています。",
    [["あおい", "Aoi"], ["ネクタイ", "nekutai"], ["を", "wo"], ["しめています", "shimeteimasu"]],
    { en: "I am wearing a blue necktie.", id: "Saya memakai dasi biru." }, "", "青いネクタイを締めています。",
    { en: "From English \"necktie\" — pairs with しめる (to tighten/fasten), yet another distinct \"wearing\" verb used for ties and belts.", id: "Dari bahasa Inggris \"necktie\" — berpasangan dengan しめる (mengencangkan/mengikat), kata kerja \"memakai\" lain lagi yang dipakai untuk dasi dan ikat pinggang." }],
  ["てぶくろ", "tebukuro", { en: "gloves", id: "sarung tangan" }, "さむいから てぶくろを します。",
    [["さむい", "Samui"], ["から", "kara"], ["てぶくろ", "tebukuro"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I wear gloves because it's cold.", id: "Saya memakai sarung tangan karena dingin." }, "手袋", "寒いから手袋をします。",
    { en: "Combines 手 (hand) + 袋 (bag/pouch). For small accessories like gloves, する is often used as a simpler catch-all verb instead of a specific one.", id: "Gabungan dari 手 (tangan) + 袋 (kantung). Untuk aksesori kecil seperti sarung tangan, する sering dipakai sebagai kata kerja umum yang lebih sederhana." }],
  ["かさ", "kasa", { en: "umbrella", id: "payung" }, "あめが ふっているから かさを さします。",
    [["あめ", "Ame"], ["が", "ga"], ["ふっているから", "futteirukara"], ["かさ", "kasa"], ["を", "wo"], ["さします", "sashimasu"]],
    { en: "I open an umbrella because it is raining.", id: "Saya memakai payung karena sedang hujan." }, "傘", "雨が降っているから傘をさします。",
    { en: "Uses さす, a unique verb specifically for opening/holding an umbrella — not shared with any other clothing item.", id: "Memakai さす, kata kerja unik yang khusus untuk membuka/memegang payung — tidak dipakai bersama untuk barang pakaian lain." }],
  ["きもの", "kimono", { en: "kimono, traditional Japanese clothing", id: "kimono, pakaian tradisional Jepang" }, "まつりで きものを きます。",
    [["まつり", "Matsuri"], ["で", "de"], ["きもの", "kimono"], ["を", "wo"], ["きます", "kimasu"]],
    { en: "I wear a kimono at the festival.", id: "Saya memakai kimono di festival." }, "着物", "祭りで着物を着ます。",
    { en: "Literally means \"a thing to wear\" (着る + 物), though in modern Japanese it specifically refers to traditional Japanese clothing.", id: "Secara harfiah berarti \"benda untuk dipakai\" (着る + 物), meski dalam bahasa Jepang modern kata ini merujuk khusus pada pakaian tradisional Jepang." }],
  ["Tシャツ", "tii shatsu", { en: "T-shirt", id: "kaos oblong / T-shirt" }, "なつは Tシャツを きます。",
    [["なつ", "Natsu"], ["は", "wa"], ["Tシャツ", "T-shatsu"], ["を", "wo"], ["きます", "kimasu"]],
    { en: "I wear a T-shirt in summer.", id: "Saya memakai kaos oblong di musim panas." }, "", "夏はTシャツを着ます。",
    { en: "Combines the letter 'T' (for its shape) with シャツ (shirt) — a simple, short-sleeved shirt without a collar, paired with きる like other upper-body clothing.", id: "Gabungan huruf 'T' (karena bentuknya) dengan シャツ (kemeja) — kemeja lengan pendek sederhana tanpa kerah, berpasangan dengan きる seperti pakaian tubuh bagian atas lainnya." }],
  ["うわぎ", "uwagi", { en: "jacket, outerwear", id: "jaket / jas / pakaian luar" }, "さむいから うわぎを きます。",
    [["さむい", "Samui"], ["から", "kara"], ["うわぎ", "uwagi"], ["を", "wo"], ["きます", "kimasu"]],
    { en: "I wear a jacket because it's cold.", id: "Saya memakai jaket karena dingin." }, "上着", "寒いから上着を着ます。",
    { en: "Combines 上 (upper/outer) + 着 (wear) — a general term for any outer garment worn over a shirt, whether a jacket, blazer, or coat.", id: "Gabungan dari 上 (atas/luar) + 着 (memakai) — istilah umum untuk pakaian luar apa pun yang dipakai di atas kemeja, baik jaket, blazer, maupun mantel." }],
  ["スリッパ", "surippa", { en: "slippers", id: "sandal rumah" }, "へやの なかで スリッパを はきます。",
    [["へや", "Heya"], ["の", "no"], ["なか", "naka"], ["で", "de"], ["スリッパ", "surippa"], ["を", "wo"], ["はきます", "hakimasu"]],
    { en: "I wear slippers in the room.", id: "Saya memakai sandal rumah di dalam kamar." }, "", "部屋の中でスリッパを履きます。",
    { en: "From English 'slipper(s)' — like other footwear, it pairs with はく, not きる, since it's worn on the feet.", id: "Dari bahasa Inggris 'slipper(s)' — seperti alas kaki lainnya, berpasangan dengan はく, bukan きる, karena dipakai di kaki." }],
  ["ポケット", "poketto", { en: "pocket", id: "saku / kantong baju" }, "ポケットに かぎを いれました。",
    [["ポケット", "Poketto"], ["に", "ni"], ["かぎ", "kagi"], ["を", "wo"], ["いれました", "iremashita"]],
    { en: "I put the key in my pocket.", id: "Saya memasukkan kunci ke dalam saku." }, "", "ポケットに鍵を入れました。",
    { en: "From English 'pocket' — a part of a garment, not an item worn on its own, often used with いれる (to put in).", id: "Dari bahasa Inggris 'pocket' — bagian dari pakaian, bukan barang yang dipakai sendiri, sering dipakai dengan いれる (memasukkan)." }],
  ["ゆびわ", "yubiwa", { en: "ring", id: "cincin" }, "きんの ゆびわを しています。",
    [["きん", "Kin"], ["の", "no"], ["ゆびわ", "yubiwa"], ["を", "wo"], ["しています", "shiteimasu"]],
    { en: "I am wearing a gold ring.", id: "Saya memakai cincin emas." }, "指輪", "金の指輪をしています。",
    { en: "Combines 指 (finger) + 輪 (ring/loop) — small accessories like this are often paired with する rather than a specific wearing verb.", id: "Gabungan dari 指 (jari) + 輪 (lingkaran/cincin) — aksesori kecil seperti ini sering berpasangan dengan する daripada kata kerja memakai yang khusus." }],
  ["ボタン", "botan", { en: "button", id: "kancing baju" }, "シャツの ボタンを とめます。",
    [["シャツ", "Shatsu"], ["の", "no"], ["ボタン", "botan"], ["を", "wo"], ["とめます", "tomemasu"]],
    { en: "I fasten the button of the shirt.", id: "Saya mengancingkan kancing kemeja." }, "", "シャツのボタンを留めます。",
    { en: "From English 'button' — also used more broadly for any push-button, such as an elevator or appliance button.", id: "Dari bahasa Inggris 'button' — juga dipakai lebih luas untuk tombol apa pun, seperti tombol lift atau alat elektronik." }],
  ["ハンカチ", "hankachi", { en: "handkerchief", id: "saputangan" }, "ハンカチで てを ふきます。",
    [["ハンカチ", "Hankachi"], ["で", "de"], ["て", "te"], ["を", "wo"], ["ふきます", "fukimasu"]],
    { en: "I wipe my hands with a handkerchief.", id: "Saya mengelap tangan saya dengan saputangan." }, "", "ハンカチで手を拭きます。",
    { en: "From English 'handkerchief' — a small cloth carried for wiping hands or sweat, commonly kept in a ポケット (pocket) or カバン (bag).", id: "Dari bahasa Inggris 'handkerchief' — kain kecil yang dibawa untuk mengelap tangan atau keringat, biasa disimpan di ポケット (saku) atau カバン (tas)." }]
];

// Sub-Tier 4.1: Lokasi & Fasilitas Publik (16)
const KOTOBA_N5_CH4_1 = [
  ["がっこう", "gakkou", { en: "school", id: "sekolah" }, "がっこうは とても おおきいです。",
    [["がっこう", "Gakkou"], ["は", "wa"], ["とても", "totemo"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "The school is very big.", id: "Sekolahnya sangat besar." }, "学校", "学校はとても大きいです。",
    { en: "Combines 学 (study/learning) + 校 (school building) — the same 学 appears in がくせい (student) and だいがく (university).", id: "Gabungan dari 学 (belajar) + 校 (bangunan sekolah) — 学 yang sama muncul pada がくせい (pelajar) dan だいがく (universitas)." }],
  ["だいがく", "daigaku", { en: "university", id: "universitas" }, "だいがくで にほんごを べんきょうします。",
    [["だいがく", "Daigaku"], ["で", "de"], ["にほんご", "nihongo"], ["を", "wo"], ["べんきょうします", "benkyoushimasu"]],
    { en: "I study Japanese at university.", id: "Saya belajar bahasa Jepang di universitas." }, "大学", "大学で日本語を勉強します。",
    { en: "Combines 大 (big) + 学 (study) — one step up from がっこう (school), reserved specifically for higher education.", id: "Gabungan dari 大 (besar) + 学 (belajar) — satu tingkat di atas がっこう (sekolah), khusus untuk pendidikan tinggi." }],
  ["としょかん", "toshokan", { en: "library", id: "perpustakaan" }, "としょかんで ほんを よみます。",
    [["としょかん", "Toshokan"], ["で", "de"], ["ほん", "hon"], ["を", "wo"], ["よみます", "yomimasu"]],
    { en: "I read books at the library.", id: "Saya membaca buku di perpustakaan." }, "図書館", "図書館で本を読みます。",
    { en: "Combines 図書 (books/library materials) + 館 (large building/hall) — the same 館 appears in えいがかん (movie theater).", id: "Gabungan dari 図書 (bahan pustaka) + 館 (gedung besar/aula) — 館 yang sama muncul pada えいがかん (bioskop)." }],
  ["えき", "eki", { en: "station", id: "stasiun" }, "えきまで あるいて いきます。",
    [["えき", "Eki"], ["まで", "made"], ["あるいて", "aruite"], ["いきます", "ikimasu"]],
    { en: "I walk to the station.", id: "Saya berjalan kaki ke stasiun." }, "駅", "駅まで歩いて行きます。",
    { en: "まで marks the destination or endpoint of an action (\"up to/as far as\") — different from に or へ, which mark direction.", id: "まで menandai tujuan atau titik akhir suatu tindakan (\"sampai\") — berbeda dari に atau へ, yang menandai arah." }],
  ["みせ", "mise", { en: "shop, store", id: "toko" }, "あの みせは ちいさいです。",
    [["あの", "Ano"], ["みせ", "mise"], ["は", "wa"], ["ちいさい", "chiisai"], ["です", "desu"]],
    { en: "That shop is small.", id: "Toko itu kecil." }, "店", "あの店は小さいです。",
    { en: "A general word for any shop — often combines as the suffix ~や (屋) in specific shop names like ほんや (bookstore) and やおや (greengrocer).", id: "Kata umum untuk toko apa pun — sering digabung sebagai akhiran ~や (屋) pada nama toko tertentu seperti ほんや (toko buku) dan やおや (toko sayur)." }],
  ["デパート", "depaato", { en: "department store", id: "department store" }, "デパートで ふくを かいます。",
    [["デパート", "Depaato"], ["で", "de"], ["ふく", "fuku"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy clothes at the department store.", id: "Saya membeli baju di department store." }, "", "デパートで服を買います。",
    { en: "Shortened from English \"department store\" — a large, multi-floor shop, distinct from スーパー (a supermarket for daily groceries).", id: "Disingkat dari bahasa Inggris \"department store\" — toko besar bertingkat, berbeda dari スーパー (supermarket untuk belanja harian)." }],
  ["やおや", "yaoya", { en: "vegetable store, greengrocer", id: "toko sayur" }, "やおやで やさいを かいます。",
    [["やおや", "Yaoya"], ["で", "de"], ["やさい", "yasai"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy vegetables at the greengrocer.", id: "Saya membeli sayur di toko sayur." }, "八百屋", "八百屋で野菜を買います。",
    { en: "Literally \"800 shop\" (八百 + 屋) — an old expression for \"many kinds\", reflecting the wide variety of produce originally sold there.", id: "Secara harfiah \"toko 800\" (八百 + 屋) — ungkapan lama untuk \"beragam jenis\", mencerminkan banyaknya jenis hasil bumi yang dulu dijual di sana." }],
  ["レストラン", "resutoran", { en: "restaurant", id: "restoran" }, "レストランで ばんごはんを たべます。",
    [["レストラン", "Resutoran"], ["で", "de"], ["ばんごはん", "bangohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat dinner at a restaurant.", id: "Saya makan malam di restoran." }, "", "レストランで晩ご飯を食べます。",
    { en: "From English \"restaurant\" — a general word for any eatery, unlike more specific words such as きっさてん (café).", id: "Dari bahasa Inggris \"restaurant\" — kata umum untuk tempat makan mana pun, berbeda dari kata lebih spesifik seperti きっさてん (kafe)." }],
  ["きっさてん", "kissaten", { en: "coffee shop, café", id: "kedai kopi, kafe" }, "きっさてんで コーヒーを のみます。",
    [["きっさてん", "Kissaten"], ["で", "de"], ["コーヒー", "koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee at a café.", id: "Saya minum kopi di kafe." }, "喫茶店", "喫茶店でコーヒーを飲みます。",
    { en: "A traditional Japanese-style café, often quieter and more old-fashioned than a modern カフェ (from English \"cafe\").", id: "Kafe bergaya Jepang tradisional, biasanya lebih tenang dan bernuansa lama dibanding カフェ modern (dari bahasa Inggris \"cafe\")." }],
  ["びょういん", "byouin", { en: "hospital", id: "rumah sakit" }, "びょういんへ いきます。",
    [["びょういん", "Byouin"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the hospital.", id: "Saya pergi ke rumah sakit." }, "病院", "病院へ行きます。",
    { en: "Combines 病 (illness) + 院 (institution) — the same 病 appears in びょうき (sickness).", id: "Gabungan dari 病 (sakit) + 院 (lembaga/institusi) — 病 yang sama muncul pada びょうき (penyakit)." }],
  ["やっきょく", "yakkyoku", { en: "pharmacy", id: "apotek" }, "やっきょくで くすりを かいます。",
    [["やっきょく", "Yakkyoku"], ["で", "de"], ["くすり", "kusuri"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy medicine at the pharmacy.", id: "Saya membeli obat di apotek." }, "薬局", "薬局で薬を買います。",
    { en: "Combines 薬 (medicine) + 局 (bureau/office) — the same 局 appears in ゆうびんきょく (post office).", id: "Gabungan dari 薬 (obat) + 局 (kantor/biro) — 局 yang sama muncul pada ゆうびんきょく (kantor pos)." }],
  ["ぎんこう", "ginkou", { en: "bank", id: "bank" }, "ぎんこうへ いきます。",
    [["ぎんこう", "Ginkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the bank.", id: "Saya pergi ke bank." }, "銀行", "銀行へ行きます。",
    { en: "Combines 銀 (silver) + 行 (go/travel, also used as a suffix for institutions) — an old association between silver and currency.", id: "Gabungan dari 銀 (perak) + 行 (pergi, juga dipakai sebagai akhiran untuk lembaga) — keterkaitan lama antara perak dan mata uang." }],
  ["ゆうびんきょく", "yuubinkyoku", { en: "post office", id: "kantor pos" }, "ゆうびんきょくで きってを かいます。",
    [["ゆうびんきょく", "Yuubinkyoku"], ["で", "de"], ["きって", "kitte"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy stamps at the post office.", id: "Saya membeli perangko di kantor pos." }, "郵便局", "郵便局で切手を買います。",
    { en: "One of the longer N5 compound words: 郵便 (mail/postal service) + 局 (bureau), the same 局 as やっきょく.", id: "Salah satu kata majemuk N5 yang lebih panjang: 郵便 (layanan pos) + 局 (kantor/biro), 局 yang sama seperti pada やっきょく." }],
  ["こうばん", "kouban", { en: "police box", id: "pos polisi" }, "こうばんで みちを ききます。",
    [["こうばん", "Kouban"], ["で", "de"], ["みち", "michi"], ["を", "wo"], ["ききます", "kikimasu"]],
    { en: "I ask for directions at the police box.", id: "Saya menanyakan arah di pos polisi." }, "交番", "交番で道を聞きます。",
    { en: "A small neighborhood police post unique to Japan, commonly used by both locals and travelers to ask for directions.", id: "Pos polisi kecil di lingkungan warga yang khas Jepang, umum dipakai warga lokal maupun wisatawan untuk menanyakan arah." }],
  ["こうえん", "kouen", { en: "park", id: "taman" }, "こうえんで あそびます。",
    [["こうえん", "Kouen"], ["で", "de"], ["あそびます", "asobimasu"]],
    { en: "I play at the park.", id: "Saya bermain di taman." }, "公園", "公園で遊びます。",
    { en: "Combines 公 (public) + 園 (garden) — the same 園 appears in ようちえん (kindergarten).", id: "Gabungan dari 公 (umum) + 園 (taman/kebun) — 園 yang sama muncul pada ようちえん (taman kanak-kanak)." }],
  ["ホテル", "hoteru", { en: "hotel", id: "hotel" }, "ホテルに とまります。",
    [["ホテル", "Hoteru"], ["に", "ni"], ["とまります", "tomarimasu"]],
    { en: "I stay at a hotel.", id: "Saya menginap di hotel." }, "", "ホテルに泊まります。",
    { en: "From English \"hotel\" — pairs with とまる (to stay overnight), a useful verb for travel situations.", id: "Dari bahasa Inggris \"hotel\" — berpasangan dengan とまる (menginap), kata kerja yang berguna untuk situasi bepergian." }],
  ["たいしかん", "taishikan", { en: "embassy", id: "kedutaan besar" }, "たいしかんは えきの ちかくに あります。",
    [["たいしかん", "Taishikan"], ["は", "wa"], ["えき", "eki"], ["の", "no"], ["ちかく", "chikaku"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "The embassy is near the station.", id: "Kedutaan besar itu ada di dekat stasiun." }, "大使館", "大使館は駅の近くにあります。",
    { en: "Combines 大使 (ambassador) + 館 (large building) — the same 館 appears in としょかん (library) and びじゅつかん (art museum).", id: "Gabungan dari 大使 (duta besar) + 館 (gedung besar) — 館 yang sama muncul pada としょかん (perpustakaan) dan びじゅつかん (museum seni)." }],
  ["びじゅつかん", "bijutsukan", { en: "art museum", id: "museum seni" }, "にちようびに びじゅつかんへ いきます。",
    [["にちようび", "Nichiyoubi"], ["に", "ni"], ["びじゅつかん", "bijutsukan"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the art museum on Sunday.", id: "Saya pergi ke museum seni pada hari Minggu." }, "美術館", "日曜日に美術館へ行きます。",
    { en: "Combines 美術 (fine art) + 館 (building) — for history or science museums Japanese uses はくぶつかん instead.", id: "Gabungan dari 美術 (seni rupa) + 館 (gedung) — untuk museum sejarah atau sains, bahasa Jepang memakai はくぶつかん." }],
  ["プール", "puuru", { en: "swimming pool", id: "kolam renang" }, "なつは プールで およぎます。",
    [["なつ", "Natsu"], ["は", "wa"], ["プール", "puuru"], ["で", "de"], ["およぎます", "oyogimasu"]],
    { en: "I swim in the pool in summer.", id: "Di musim panas saya berenang di kolam renang." }, "", "夏はプールで泳ぎます。",
    { en: "From English (pool) — the particle で marks the place where an action happens, so プールで means the swimming takes place there.", id: "Dari bahasa Inggris (pool) — partikel で menandai tempat berlangsungnya suatu aktivitas, jadi プールで berarti berenangnya dilakukan di sana." }],
  ["かいしゃ", "kaisha", { en: "company, office", id: "perusahaan, kantor" }, "ちちは かいしゃで はたらいて います。",
    [["ちち", "Chichi"], ["は", "wa"], ["かいしゃ", "kaisha"], ["で", "de"], ["はたらいて", "hataraite"], ["います", "imasu"]],
    { en: "My father works at a company.", id: "Ayah saya bekerja di sebuah perusahaan." }, "会社", "父は会社で働いています。",
    { en: "Combines 会 (meet) + 社 (company) — add いん (member) to get かいしゃいん, a company employee.", id: "Gabungan dari 会 (berkumpul) + 社 (perusahaan) — tambahkan いん (anggota) menjadi かいしゃいん, karyawan perusahaan." }],
  ["スーパー", "suupaa", { en: "supermarket", id: "supermarket" }, "スーパーで たまごを かいました。",
    [["スーパー", "Suupaa"], ["で", "de"], ["たまご", "tamago"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought eggs at the supermarket.", id: "Saya membeli telur di supermarket." }, "", "スーパーで卵を買いました。",
    { en: "Clipped from English (supermarket) — Japanese often shortens long loanwords this way, as in デパート and パソコン.", id: "Dipendekkan dari bahasa Inggris (supermarket) — bahasa Jepang sering memangkas kata serapan panjang seperti ini, sama seperti デパート dan パソコン." }],
  ["えいがかん", "eigakan", { en: "movie theater, cinema", id: "bioskop" }, "ともだちと えいがかんへ いきます。",
    [["ともだち", "Tomodachi"], ["と", "to"], ["えいがかん", "eigakan"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the cinema with a friend.", id: "Saya pergi ke bioskop bersama teman." }, "映画館", "友達と映画館へ行きます。",
    { en: "Combines 映画 (movie) + 館 (building) — と here marks the person you do something together with.", id: "Gabungan dari 映画 (film) + 館 (gedung) — と di sini menandai orang yang menemani kita melakukan sesuatu." }],
  ["くうこう", "kuukou", { en: "airport", id: "bandara" }, "くうこうまで タクシーで いきます。",
    [["くうこう", "Kuukou"], ["まで", "made"], ["タクシー", "takushii"], ["で", "de"], ["いきます", "ikimasu"]],
    { en: "I go to the airport by taxi.", id: "Saya pergi ke bandara naik taksi." }, "空港", "空港までタクシーで行きます。",
    { en: "Combines 空 (sky) + 港 (port), literally a sky port — 空 is read そら when it stands alone meaning sky.", id: "Gabungan dari 空 (langit) + 港 (pelabuhan), secara harfiah pelabuhan langit — 空 dibaca そら bila berdiri sendiri dengan arti langit." }],
  ["バスてい", "basutei", { en: "bus stop", id: "halte bus" }, "バスていで バスを まちます。",
    [["バスてい", "Basutei"], ["で", "de"], ["バス", "basu"], ["を", "wo"], ["まちます", "machimasu"]],
    { en: "I wait for the bus at the bus stop.", id: "Saya menunggu bus di halte bus." }, "バス停", "バス停でバスを待ちます。",
    { en: "A hybrid of the loanword バス and the kanji 停 (to stop) — katakana plus kanji compounds like this are common in modern Japanese.", id: "Gabungan kata serapan バス dan kanji 停 (berhenti) — kata majemuk katakana plus kanji seperti ini umum dalam bahasa Jepang modern." }],
  ["ちゅうしゃじょう", "chuushajou", { en: "parking lot", id: "tempat parkir" }, "ちゅうしゃじょうは たてものの うしろに あります。",
    [["ちゅうしゃじょう", "Chuushajou"], ["は", "wa"], ["たてもの", "tatemono"], ["の", "no"], ["うしろ", "ushiro"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "The parking lot is behind the building.", id: "Tempat parkir ada di belakang gedung." }, "駐車場", "駐車場は建物の後ろにあります。",
    { en: "Combines 駐車 (parking a car) + 場 (place) — the same 場 marks a designated spot in のりば, a boarding point.", id: "Gabungan dari 駐車 (memarkir mobil) + 場 (tempat) — 場 yang sama menandai tempat khusus pada のりば, tempat naik kendaraan." }],
  ["まち", "machi", { en: "town", id: "kota kecil" }, "この まちは とても しずかです。",
    [["この", "Kono"], ["まち", "machi"], ["は", "wa"], ["とても", "totemo"], ["しずか", "shizuka"], ["です", "desu"]],
    { en: "This town is very quiet.", id: "Kota ini sangat tenang." }, "町", "この町はとても静かです。",
    { en: "町 is a town or neighborhood — smaller and more local in feel than し (city).", id: "町 berarti kota kecil atau lingkungan tempat tinggal — terasa lebih kecil dan lokal dibandingkan し (kota madya)." }],
  ["し", "shi", { en: "city", id: "kota madya" }, "よこはましに すんで います。",
    [["よこはまし", "Yokohama-shi"], ["に", "ni"], ["すんで", "sunde"], ["います", "imasu"]],
    { en: "I live in Yokohama City.", id: "Saya tinggal di Kota Yokohama." }, "市", "横浜市に住んでいます。",
    { en: "市 attaches to a place name as the administrative unit city, as in よこはまし — one rank above まち (town).", id: "市 ditempelkan pada nama tempat sebagai satuan wilayah kota, seperti よこはまし — satu tingkat di atas まち (kota kecil)." }],
  ["くに", "kuni", { en: "country", id: "negara" }, "わたしの くには インドネシアです。",
    [["わたし", "Watashi"], ["の", "no"], ["くに", "kuni"], ["は", "wa"], ["インドネシア", "Indoneshia"], ["です", "desu"]],
    { en: "My country is Indonesia.", id: "Negara saya adalah Indonesia." }, "国", "私の国はインドネシアです。",
    { en: "国 is read くに on its own but こく in compounds such as がいこく (foreign country) and ちゅうごく (China).", id: "国 dibaca くに bila berdiri sendiri, tetapi こく pada kata majemuk seperti がいこく (luar negeri) dan ちゅうごく (Tiongkok)." }],
  ["がいこく", "gaikoku", { en: "foreign country, abroad", id: "luar negeri" }, "らいねん がいこくへ いきたいです。",
    [["らいねん", "Rainen"], ["がいこく", "gaikoku"], ["へ", "e"], ["いきたい", "ikitai"], ["です", "desu"]],
    { en: "I want to go abroad next year.", id: "Tahun depan saya ingin pergi ke luar negeri." }, "外国", "来年外国へ行きたいです。",
    { en: "Combines 外 (outside) + 国 (country) — add じん to get がいこくじん, a person from abroad.", id: "Gabungan dari 外 (luar) + 国 (negara) — tambahkan じん menjadi がいこくじん, orang asing." }]
];

// Sub-Tier 4.2: Arah & Posisi (11)
const KOTOBA_N5_CH4_2 = [
  ["うえ", "ue", { en: "up, on, top", id: "atas" }, "つくえの うえに ほんが あります。",
    [["つくえ", "Tsukue"], ["の", "no"], ["うえ", "ue"], ["に", "ni"], ["ほん", "hon"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a book on the desk.", id: "Ada buku di atas meja." }, "上", "机の上に本があります。",
    { en: "上 pairs with 手 in じょうず (skilled, lit. \"good at the top\") — its counterpart した (below) similarly appears in へた (unskilled).", id: "上 berpasangan dengan 手 pada じょうず (mahir, secara harfiah \"bagus di atas\") — pasangannya した (bawah) juga muncul pada へた (tidak mahir)." }],
  ["した", "shita", { en: "under, below", id: "bawah" }, "いすの したに ねこが います。",
    [["いす", "Isu"], ["の", "no"], ["した", "shita"], ["に", "ni"], ["ねこ", "neko"], ["が", "ga"], ["います", "imasu"]],
    { en: "There is a cat under the chair.", id: "Ada kucing di bawah kursi." }, "下", "椅子の下に猫がいます。",
    { en: "下 follows the same pairing pattern as うえ: it appears in へた (unskilled, lit. \"poor at the bottom\"), the opposite of じょうず (skilled).", id: "下 mengikuti pola pasangan yang sama seperti うえ: muncul pada へた (tidak mahir, secara harfiah \"buruk di bawah\"), lawan dari じょうず (mahir)." }],
  ["なか", "naka", { en: "inside", id: "dalam" }, "かばんの なかに さいふが あります。",
    [["かばん", "Kaban"], ["の", "no"], ["なか", "naka"], ["に", "ni"], ["さいふ", "saifu"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a wallet inside the bag.", id: "Ada dompet di dalam tas." }, "中", "鞄の中に財布があります。",
    { en: "中 is read なか here but often becomes ちゅう in compounds, such as べんきょうちゅう (in the middle of studying) or にほんじゅう (throughout Japan).", id: "中 dibaca なか di sini, tetapi sering menjadi ちゅう pada kata majemuk, seperti べんきょうちゅう (sedang belajar) atau にほんじゅう (di seluruh Jepang)." }],
  ["みぎ", "migi", { en: "right side", id: "kanan" }, "みぎに まがってください。",
    [["みぎ", "Migi"], ["に", "ni"], ["まがってください", "magatte kudasai"]],
    { en: "Please turn right.", id: "Tolong belok kanan." }, "右", "右に曲がってください。",
    { en: "右 combines with がわ (側, side) to form みぎがわ (right side) — the same pattern also forms ひだりがわ (left side) from ひだり.", id: "右 digabung dengan がわ (側, sisi) membentuk みぎがわ (sisi kanan) — pola yang sama juga membentuk ひだりがわ (sisi kiri) dari ひだり." }],
  ["ひだり", "hidari", { en: "left side", id: "kiri" }, "ひだりに ほんやが あります。",
    [["ひだり", "Hidari"], ["に", "ni"], ["ほんや", "hon'ya"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a bookstore on the left.", id: "Ada toko buku di sebelah kiri." }, "左", "左に本屋があります。",
    { en: "左 pairs with みぎ as a fixed direction set, and also combines with がわ (側, side) to form ひだりがわ (left side).", id: "左 berpasangan dengan みぎ sebagai satu set arah baku, dan juga digabung dengan がわ (側, sisi) membentuk ひだりがわ (sisi kiri)." }],
  ["そと", "soto", { en: "outside", id: "luar" }, "いえの そとに いぬが います。",
    [["いえ", "Ie"], ["の", "no"], ["そと", "soto"], ["に", "ni"], ["いぬ", "inu"], ["が", "ga"], ["います", "imasu"]],
    { en: "There is a dog outside the house.", id: "Ada anjing di luar rumah." }, "外", "家の外に犬がいます。",
    { en: "そと/なか forms a spatial opposite pair just like うえ/した — 外 is read そと here but がい in compounds such as がいこく (foreign country).", id: "そと/なか membentuk pasangan lawan kata posisi seperti うえ/した — 外 dibaca そと di sini, tetapi がい pada kata majemuk seperti がいこく (negara asing)." }],
  ["まえ", "mae", { en: "front, before", id: "depan, sebelum" }, "えきの まえに ぎんこうが あります。",
    [["えき", "Eki"], ["の", "no"], ["まえ", "mae"], ["に", "ni"], ["ぎんこう", "ginkou"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a bank in front of the station.", id: "Ada bank di depan stasiun." }, "前", "駅の前に銀行があります。",
    { en: "前 covers both spatial \"front\" and temporal \"before\", as in ごぜん (a.m., lit. \"before noon\") — its opposite うしろ (behind) only has a spatial meaning.", id: "前 mencakup makna posisi \"depan\" maupun waktu \"sebelum\", seperti pada ごぜん (pagi/AM, secara harfiah \"sebelum tengah hari\") — lawannya うしろ (belakang) hanya bermakna posisi." }],
  ["うしろ", "ushiro", { en: "behind, back", id: "belakang" }, "がっこうの うしろに こうえんが あります。",
    [["がっこう", "Gakkou"], ["の", "no"], ["うしろ", "ushiro"], ["に", "ni"], ["こうえん", "kouen"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a park behind the school.", id: "Ada taman di belakang sekolah." }, "後ろ", "学校の後ろに公園があります。",
    { en: "The okurigana ろ is required for this reading — 後 alone is usually read あと (after) or ご (as in ごご, afternoon).", id: "Okurigana ろ wajib dipakai untuk bacaan ini — 後 sendiri biasanya dibaca あと (sesudah) atau ご (seperti pada ごご, sore)." }],
  ["となり", "tonari", { en: "next to, neighboring", id: "sebelah" }, "わたしの いえの となりに としょかんが あります。",
    [["わたし", "Watashi"], ["の", "no"], ["いえ", "ie"], ["の", "no"], ["となり", "tonari"], ["に", "ni"], ["としょかん", "toshokan"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a library next to my house.", id: "Ada perpustakaan di sebelah rumah saya." }, "隣", "私の家の隣に図書館があります。",
    { en: "となり specifically means directly adjacent (like a neighboring house), while ちかく broadly means \"in the vicinity\" without requiring direct contact.", id: "となり secara khusus berarti bersebelahan langsung (seperti rumah tetangga), sedangkan ちかく lebih umum berarti \"di sekitar\" tanpa harus bersentuhan langsung." }],
  ["ちかく", "chikaku", { en: "near, vicinity", id: "dekat" }, "えきの ちかくに スーパーが あります。",
    [["えき", "Eki"], ["の", "no"], ["ちかく", "chikaku"], ["に", "ni"], ["スーパー", "suupaa"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a supermarket near the station.", id: "Ada supermarket di dekat stasiun." }, "近く", "駅の近くにスーパーがあります。",
    { en: "近く comes from the i-adjective ちかい (near) turned into a place noun — the same pattern forms とおく (far away) from とおい (far).", id: "近く berasal dari kata sifat-i ちかい (dekat) yang diubah menjadi kata benda tempat — pola yang sama membentuk とおく (jauh) dari とおい (jauh)." }],
  ["あいだ", "aida", { en: "between, among", id: "antara" }, "がっこうと えきの あいだに こうえんが あります。",
    [["がっこう", "Gakkou"], ["と", "to"], ["えき", "eki"], ["の", "no"], ["あいだ", "aida"], ["に", "ni"], ["こうえん", "kouen"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a park between the school and the station.", id: "Ada taman di antara sekolah dan stasiun." }, "間", "学校と駅の間に公園があります。",
    { en: "間 is read あいだ here but becomes かん in time-duration words like にじかん (two hours) and じかん (time).", id: "間 dibaca あいだ di sini, tetapi menjadi かん pada kata durasi waktu seperti にじかん (dua jam) dan じかん (waktu)." }],
  ["よこ", "yoko", { en: "side, beside", id: "samping" }, "テレビの よこに とけいが あります。",
    [["テレビ", "Terebi"], ["の", "no"], ["よこ", "yoko"], ["に", "ni"], ["とけい", "tokei"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a clock beside the TV.", id: "Ada jam di samping televisi." }, "横", "テレビの横に時計があります。",
    { en: "よこ is the horizontal side of something, while となり is used for two things of the same kind lined up next to each other.", id: "よこ menunjuk sisi horizontal suatu benda, sedangkan となり dipakai untuk dua benda sejenis yang berjajar." }],
  ["そば", "soba", { en: "near, right beside", id: "dekat, di sisi" }, "えきの そばに ぎんこうが あります。",
    [["えき", "Eki"], ["の", "no"], ["そば", "soba"], ["に", "ni"], ["ぎんこう", "ginkou"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a bank right by the station.", id: "Ada bank tepat di dekat stasiun." }, "", "駅のそばに銀行があります。",
    { en: "そば means very close by — nearer in feel than ちかく. Note it is a homophone of そば, the buckwheat noodles.", id: "そば berarti sangat berdekatan — terasa lebih dekat daripada ちかく. Perhatikan kata ini sebunyi dengan そば, mi soba." }],
  ["むこう", "mukou", { en: "over there, the other side", id: "seberang, di sana" }, "みちの むこうに こうえんが あります。",
    [["みち", "Michi"], ["の", "no"], ["むこう", "mukou"], ["に", "ni"], ["こうえん", "kouen"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a park across the road.", id: "Ada taman di seberang jalan." }, "向こう", "道の向こうに公園があります。",
    { en: "Points to the far side of something or a distant spot — it comes from the verb むかう, to face or head toward.", id: "Menunjuk sisi seberang suatu benda atau tempat yang jauh — berasal dari kata kerja むかう, menghadap atau menuju." }]
];

// Sub-Tier 4.3: Transportasi & Fitur Kota (4)
const KOTOBA_N5_CH4_3 = [
  ["でんしゃ", "densha", { en: "train", id: "kereta api" }, "でんしゃで いきます。",
    [["でんしゃ", "Densha"], ["で", "de"], ["いきます", "ikimasu"]],
    { en: "I go by train.", id: "Saya pergi menggunakan kereta." }, "電車", "電車で行きます。",
    { en: "Combines 電 (electricity) + 車 (vehicle) — the same 車 appears in じてんしゃ (bicycle, lit. \"self-turning vehicle\") and じどうしゃ (automobile).", id: "Gabungan dari 電 (listrik) + 車 (kendaraan) — 車 yang sama muncul pada じてんしゃ (sepeda, secara harfiah \"kendaraan yang berputar sendiri\") dan じどうしゃ (mobil)." }],
  ["くるま", "kuruma", { en: "car", id: "mobil" }, "くるまで がっこうへ いきます。",
    [["くるま", "Kuruma"], ["で", "de"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school by car.", id: "Saya pergi ke sekolah naik mobil." }, "車", "車で学校へ行きます。",
    { en: "車 alone is read くるま, a native Japanese word — but in compounds like でんしゃ (train, above) or じどうしゃ (automobile) it switches to the on'yomi reading しゃ.", id: "車 sendiri dibaca くるま, kata asli bahasa Jepang — tetapi pada kata majemuk seperti でんしゃ (kereta, di atas) atau じどうしゃ (mobil) berubah menjadi bacaan on'yomi しゃ." }],
  ["バス", "basu", { en: "bus", id: "bus" }, "バスで がっこうへ いきます。",
    [["バス", "Basu"], ["で", "de"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school by bus.", id: "Saya pergi ke sekolah naik bus." }, "", "バスで学校へ行きます。",
    { en: "From English \"bus\" — this loanword has no kanji form, distinguishing it from native/kanji vehicle words like でんしゃ (train) and くるま (car).", id: "Dari bahasa Inggris \"bus\" — kata serapan ini tidak punya bentuk kanji, berbeda dari kata kendaraan asli/berkanji seperti でんしゃ (kereta) dan くるま (mobil)." }],
  ["みち", "michi", { en: "road, street", id: "jalan" }, "この みちは とても せまいです。",
    [["この", "Kono"], ["みち", "michi"], ["は", "wa"], ["とても", "totemo"], ["せまい", "semai"], ["です", "desu"]],
    { en: "This road is very narrow.", id: "Jalan ini sangat sempit." }, "道", "この道はとても狭いです。",
    { en: "道 also appears in どうろ (roadway) and ほっかいどう (Hokkaido) — a versatile kanji for \"path\" or \"way\", including abstract senses like one's path in life.", id: "道 juga muncul pada どうろ (jalan raya) dan ほっかいどう (Hokkaido) — kanji serbaguna untuk \"jalan\" atau \"cara\", termasuk makna abstrak seperti jalan hidup seseorang." }],
  ["ちかてつ", "chikatetsu", { en: "subway", id: "kereta bawah tanah" }, "ちかてつで かいしゃへ いきます。",
    [["ちかてつ", "Chikatetsu"], ["で", "de"], ["かいしゃ", "kaisha"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the office by subway.", id: "Saya pergi ke kantor naik kereta bawah tanah." }, "地下鉄", "地下鉄で会社へ行きます。",
    { en: "Combines 地下 (underground) + 鉄 (iron, short for 鉄道 railway) — で marks the means of transport.", id: "Gabungan dari 地下 (bawah tanah) + 鉄 (besi, singkatan dari 鉄道 rel kereta) — で menandai sarana transportasi yang dipakai." }],
  ["れっしゃ", "ressha", { en: "train (long-distance)", id: "kereta api" }, "れっしゃで きょうとへ いきました。",
    [["れっしゃ", "Ressha"], ["で", "de"], ["きょうと", "Kyouto"], ["へ", "e"], ["いきました", "ikimashita"]],
    { en: "I went to Kyoto by train.", id: "Saya pergi ke Kyoto naik kereta api." }, "列車", "列車で京都へ行きました。",
    { en: "Combines 列 (row, line) + 車 (vehicle) — used for longer-distance trains, while でんしゃ is the everyday commuter train.", id: "Gabungan dari 列 (barisan) + 車 (kendaraan) — dipakai untuk kereta jarak jauh, sedangkan でんしゃ adalah kereta komuter sehari-hari." }],
  ["タクシー", "takushii", { en: "taxi", id: "taksi" }, "あめですから タクシーで かえります。",
    [["あめ", "Ame"], ["です", "desu"], ["から", "kara"], ["タクシー", "takushii"], ["で", "de"], ["かえります", "kaerimasu"]],
    { en: "It is raining, so I will go home by taxi.", id: "Karena hujan, saya pulang naik taksi." }, "", "雨ですからタクシーで帰ります。",
    { en: "から placed after a full clause means because, giving the reason for the action that follows.", id: "から yang diletakkan setelah satu klausa utuh berarti karena, memberi alasan bagi tindakan sesudahnya." }],
  ["じてんしゃ", "jitensha", { en: "bicycle", id: "sepeda" }, "まいあさ じてんしゃで がっこうへ いきます。",
    [["まいあさ", "Maiasa"], ["じてんしゃ", "jitensha"], ["で", "de"], ["がっこう", "gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school by bicycle every morning.", id: "Setiap pagi saya pergi ke sekolah naik sepeda." }, "自転車", "毎朝自転車で学校へ行きます。",
    { en: "Combines 自 (self) + 転 (turn) + 車 (vehicle) — literally a self-turning vehicle.", id: "Gabungan dari 自 (sendiri) + 転 (berputar) + 車 (kendaraan) — secara harfiah kendaraan yang berputar sendiri." }],
  ["ひこうき", "hikouki", { en: "airplane", id: "pesawat terbang" }, "ひこうきで にほんへ いきます。",
    [["ひこうき", "Hikouki"], ["で", "de"], ["にほん", "Nihon"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to Japan by plane.", id: "Saya pergi ke Jepang naik pesawat." }, "飛行機", "飛行機で日本へ行きます。",
    { en: "Combines 飛 (fly) + 行 (go) + 機 (machine) — literally a flying machine.", id: "Gabungan dari 飛 (terbang) + 行 (pergi) + 機 (mesin) — secara harfiah mesin yang terbang." }],
  ["ふね", "fune", { en: "ship, boat", id: "kapal laut" }, "ふねで しまへ いきます。",
    [["ふね", "Fune"], ["で", "de"], ["しま", "shima"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the island by boat.", id: "Saya pergi ke pulau naik kapal." }, "船", "船で島へ行きます。",
    { en: "Just like でんしゃ and バス, the vehicle you travel in is marked with で, while へ marks the direction you head toward.", id: "Sama seperti でんしゃ dan バス, kendaraan yang ditumpangi ditandai で, sedangkan へ menandai arah tujuan." }],
  ["はし", "hashi", { en: "bridge", id: "jembatan" }, "あの はしは とても ながいです。",
    [["あの", "Ano"], ["はし", "hashi"], ["は", "wa"], ["とても", "totemo"], ["ながい", "nagai"], ["です", "desu"]],
    { en: "That bridge is very long.", id: "Jembatan itu sangat panjang." }, "橋", "あの橋はとても長いです。",
    { en: "はし is also the reading for 箸 (chopsticks) and 端 (edge) — the pitch accent differs, and the kanji keeps them apart in writing.", id: "はし juga merupakan bacaan untuk 箸 (sumpit) dan 端 (ujung) — aksen nadanya berbeda, dan kanjinya yang membedakan dalam tulisan." }],
  ["かど", "kado", { en: "corner", id: "tikungan, sudut jalan" }, "つぎの かどを みぎに まがって ください。",
    [["つぎ", "Tsugi"], ["の", "no"], ["かど", "kado"], ["を", "wo"], ["みぎ", "migi"], ["に", "ni"], ["まがって", "magatte"], ["ください", "kudasai"]],
    { en: "Please turn right at the next corner.", id: "Tolong belok kanan di tikungan berikutnya." }, "角", "次の角を右に曲がってください。",
    { en: "を here marks the place you pass through or turn at — a special use of を with movement verbs like まがる and わたる.", id: "を di sini menandai tempat yang dilewati atau dibeloki — penggunaan khusus を bersama kata kerja gerak seperti まがる dan わたる." }],
  ["しんごう", "shingou", { en: "traffic light", id: "lampu lalu lintas" }, "しんごうが あおに なりました。",
    [["しんごう", "Shingou"], ["が", "ga"], ["あお", "ao"], ["に", "ni"], ["なりました", "narimashita"]],
    { en: "The traffic light turned green.", id: "Lampu lalu lintasnya berubah hijau." }, "信号", "信号が青になりました。",
    { en: "Japanese calls the green light あお (blue) — a historical usage from a time when あお covered both blue and green.", id: "Bahasa Jepang menyebut lampu hijau dengan あお (biru) — kebiasaan lama dari masa ketika あお mencakup biru sekaligus hijau." }],
  ["のりば", "noriba", { en: "boarding point, stand", id: "tempat naik kendaraan" }, "タクシーのりばは えきの まえに あります。",
    [["タクシーのりば", "Takushii-noriba"], ["は", "wa"], ["えき", "eki"], ["の", "no"], ["まえ", "mae"], ["に", "ni"], ["あります", "arimasu"]],
    { en: "The taxi stand is in front of the station.", id: "Tempat naik taksi ada di depan stasiun." }, "乗り場", "タクシー乗り場は駅の前にあります。",
    { en: "From のる (to board) + ば (place) — attach it after a vehicle name, as in バスのりば.", id: "Dari のる (naik kendaraan) + ば (tempat) — ditempelkan setelah nama kendaraan, seperti バスのりば." }],
  ["いりぐち", "iriguchi", { en: "entrance", id: "pintu masuk" }, "いりぐちは あちらです。",
    [["いりぐち", "Iriguchi"], ["は", "wa"], ["あちら", "achira"], ["です", "desu"]],
    { en: "The entrance is over there.", id: "Pintu masuknya di sebelah sana." }, "入口", "入口はあちらです。",
    { en: "Combines 入 (enter) + 口 (opening) — its opposite でぐち swaps in 出 (go out) with the same 口.", id: "Gabungan dari 入 (masuk) + 口 (mulut/bukaan) — lawannya, でぐち, mengganti dengan 出 (keluar) memakai 口 yang sama." }],
  ["でぐち", "deguchi", { en: "exit", id: "pintu keluar" }, "でぐちは どこですか。",
    [["でぐち", "Deguchi"], ["は", "wa"], ["どこ", "doko"], ["です", "desu"], ["か", "ka"]],
    { en: "Where is the exit?", id: "Di mana pintu keluarnya?" }, "出口", "出口はどこですか。",
    { en: "Combines 出 (go out) + 口 (opening) — station signs often pair it with a direction, as in ひがしぐち, the east exit.", id: "Gabungan dari 出 (keluar) + 口 (bukaan) — papan di stasiun sering memasangkannya dengan arah, seperti ひがしぐち, pintu keluar timur." }],
  ["もん", "mon", { en: "gate", id: "gerbang" }, "がっこうの もんは おおきいです。",
    [["がっこう", "Gakkou"], ["の", "no"], ["もん", "mon"], ["は", "wa"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "The school gate is big.", id: "Gerbang sekolahnya besar." }, "門", "学校の門は大きいです。",
    { en: "門 is a gate set in a wall or fence — larger and more structural than ドア, an ordinary door.", id: "門 adalah gerbang pada tembok atau pagar — lebih besar dan bersifat bangunan dibandingkan ドア, pintu biasa." }],
  ["きっぷ", "kippu", { en: "ticket", id: "tiket, karcis" }, "えきで きっぷを かいます。",
    [["えき", "Eki"], ["で", "de"], ["きっぷ", "kippu"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy a ticket at the station.", id: "Saya membeli tiket di stasiun." }, "切符", "駅で切符を買います。",
    { en: "Combines 切 (cut) + 符 (token) — a leftover from the days when tickets were physically clipped on use.", id: "Gabungan dari 切 (potong) + 符 (tanda) — peninggalan masa ketika tiket benar-benar digunting saat dipakai." }],
  ["かいだん", "kaidan", { en: "stairs", id: "tangga" }, "かいだんを のぼります。",
    [["かいだん", "Kaidan"], ["を", "wo"], ["のぼります", "noborimasu"]],
    { en: "I go up the stairs.", id: "Saya naik tangga." }, "階段", "階段を登ります。",
    { en: "Combines 階 (floor/story) + 段 (step) — pairs naturally with のぼる (climb up) or おりる (go down).", id: "Gabungan dari 階 (lantai/tingkat) + 段 (anak tangga) — sering dipasangkan dengan のぼる (naik) atau おりる (turun)." }],
  ["エレベーター", "erebeetaa", { en: "elevator", id: "lift" }, "エレベーターで さんがいへ いきます。",
    [["エレベーター", "Erebeetaa"], ["で", "de"], ["さんがい", "sangai"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to the third floor by elevator.", id: "Saya pergi ke lantai tiga naik lift." }, "", "エレベーターで三階へ行きます。",
    { en: "A loanword from English 'elevator' — its faster, stairless counterpart for reaching another floor.", id: "Kata serapan dari bahasa Inggris 'elevator' — alternatif yang lebih cepat dan tanpa tangga untuk mencapai lantai lain." }],
  ["こうさてん", "kousaten", { en: "intersection", id: "persimpangan" }, "つぎの こうさてんを みぎに まがります。",
    [["つぎ", "Tsugi"], ["の", "no"], ["こうさてん", "kousaten"], ["を", "wo"], ["みぎ", "migi"], ["に", "ni"], ["まがります", "magarimasu"]],
    { en: "I turn right at the next intersection.", id: "Saya belok kanan di persimpangan berikutnya." }, "交差点", "次の交差点を右に曲がります。",
    { en: "Combines 交差 (crossing) + 点 (point) — commonly used with まがる (turn) when giving street directions.", id: "Gabungan dari 交差 (persilangan) + 点 (titik) — biasa dipakai dengan まがる (belok) saat memberi petunjuk jalan." }]
];

// Sub-Tier 5.1: Aktivitas Dasar Harian (5)
const KOTOBA_N5_CH5_1 = [
  ["たべる", "taberu", { en: "eat", id: "makan" }, "あさごはんを たべます。",
    [["あさごはん", "Asagohan"], ["を", "wo"], ["たべます", "tabemasu"]],
    { en: "I eat breakfast.", id: "Saya makan sarapan." }, "食べる", "朝ご飯を食べます。",
    { en: "食べる is an ichidan (ru-)verb; its kanji 食 also appears in たべもの (food) and しょくじ (a meal, using the on'yomi しょく).", id: "食べる adalah kata kerja ichidan (ru-verb); kanji 食-nya juga muncul pada たべもの (makanan) dan しょくじ (waktu makan, memakai bacaan on'yomi しょく)." }],
  ["のむ", "nomu", { en: "drink", id: "minum" }, "コーヒーを のみます。",
    [["コーヒー", "Koohii"], ["を", "wo"], ["のみます", "nomimasu"]],
    { en: "I drink coffee.", id: "Saya minum kopi." }, "飲む", "コーヒーを飲みます。",
    { en: "飲む is a godan verb; 飲 pairs with 食 in the compound word 飲食 (いんしょく, \"food and drink\").", id: "飲む adalah kata kerja godan; 飲 berpasangan dengan 食 pada kata majemuk 飲食 (いんしょく, \"makan dan minum\")." }],
  ["みる", "miru", { en: "see / watch", id: "lihat / menonton" }, "えいがを みるのが すきです。",
    [["えいが", "Eiga"], ["を", "wo"], ["みる", "miru"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like watching movies.", id: "Saya suka menonton film." }, "見る", "映画を見るのが好きです。",
    { en: "見る covers both \"see\" and \"watch\"; the related verb きく similarly covers both \"listen\" and \"ask\" depending on kanji.", id: "見る mencakup makna \"melihat\" maupun \"menonton\"; kata kerja きく juga mencakup makna \"mendengar\" dan \"bertanya\" tergantung kanjinya." }],
  ["きく", "kiku", { en: "listen / hear", id: "dengar" }, "おんがくを きくのが すきです。",
    [["おんがく", "Ongaku"], ["を", "wo"], ["きく", "kiku"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like listening to music.", id: "Saya suka mendengarkan musik." }, "聞く", "音楽を聞くのが好きです。",
    { en: "聞く also means \"to ask\" in the right context (道を聞く, \"ask for directions\") — same kanji, different nuance depending on the object.", id: "聞く juga bisa berarti \"bertanya\" dalam konteks yang tepat (道を聞く, \"menanyakan arah\") — kanji yang sama, nuansa berbeda tergantung objeknya." }],
  ["ねる", "neru", { en: "sleep", id: "tidur" }, "まいばん じゅういちじに ねます。",
    [["まいばん", "Maiban"], ["じゅういちじ", "juuichiji"], ["に", "ni"], ["ねます", "nemasu"]],
    { en: "I sleep at eleven every night.", id: "Saya tidur jam sebelas setiap malam." }, "寝る", "毎晩十一時に寝ます。",
    { en: "寝る is an ichidan verb; its kanji 寝 also appears in ねぼう (寝坊, oversleeping).", id: "寝る adalah kata kerja ichidan; kanji 寝-nya juga muncul pada ねぼう (寝坊, kesiangan bangun)." }],
  ["おきる", "okiru", { en: "wake up, get up", id: "bangun tidur" }, "まいあさ ろくじに おきます。",
    [["まいあさ", "Maiasa"], ["ろくじ", "rokuji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I wake up at six every morning.", id: "Saya bangun tidur jam enam setiap pagi." }, "起きる", "毎朝六時に起きます。",
    { en: "起きる is an ichidan verb and the natural opposite of ねる (to sleep) — its kanji 起 also appears in おきあがる (to get up/stand up).", id: "起きる adalah kata kerja ichidan dan lawan alami dari ねる (tidur) — kanji 起-nya juga muncul pada おきあがる (bangkit/berdiri)." }],
  ["あらう", "arau", { en: "wash", id: "mencuci" }, "しょくじの まえに てを あらいます。",
    [["しょくじ", "Shokuji"], ["の", "no"], ["まえ", "mae"], ["に", "ni"], ["て", "te"], ["を", "wo"], ["あらいます", "araimasu"]],
    { en: "I wash my hands before a meal.", id: "Saya mencuci tangan sebelum makan." }, "洗う", "食事の前に手を洗います。",
    { en: "洗う is a godan verb used for washing hands, clothes, or dishes; for bathing the whole body, use あびる instead.", id: "洗う adalah kata kerja godan untuk mencuci tangan, baju, atau piring; untuk mandi seluruh badan, pakai あびる." }],
  ["あびる", "abiru", { en: "take a shower, bathe", id: "mandi (shower)" }, "まいあさ シャワーを あびます。",
    [["まいあさ", "Maiasa"], ["シャワー", "shawaa"], ["を", "wo"], ["あびます", "abimasu"]],
    { en: "I take a shower every morning.", id: "Saya mandi shower setiap pagi." }, "浴びる", "毎朝シャワーを浴びます。",
    { en: "あびる almost always pairs with シャワーを (a shower) — for soaking in a Japanese bathtub, おふろに はいる is used instead.", id: "あびる hampir selalu dipasangkan dengan シャワーを (shower) — untuk berendam di bak mandi Jepang, dipakai おふろに はいる." }],
  ["よむ", "yomu", { en: "read", id: "membaca" }, "としょかんで ほんを よみます。",
    [["としょかん", "Toshokan"], ["で", "de"], ["ほん", "hon"], ["を", "wo"], ["よみます", "yomimasu"]],
    { en: "I read a book at the library.", id: "Saya membaca buku di perpustakaan." }, "読む", "図書館で本を読みます。",
    { en: "読む is a godan verb; its kanji 読 also appears in どくしょ (読書, reading as a hobby, using the on'yomi どく).", id: "読む adalah kata kerja godan; kanji 読-nya juga muncul pada どくしょ (読書, hobi membaca, memakai bacaan on'yomi どく)." }],
  ["かく", "kaku", { en: "write, draw", id: "menulis, menggambar" }, "てがみを かきます。",
    [["てがみ", "Tegami"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write a letter.", id: "Saya menulis surat." }, "書く", "手紙を書きます。",
    { en: "書く specifically means writing text or characters, distinct from 描く (also read かく, \"to draw a picture\") — same reading, different kanji.", id: "書く secara khusus berarti menulis teks atau huruf, berbeda dari 描く (juga dibaca かく, \"menggambar\") — bacaan sama, kanji berbeda." }],
  ["かう", "kau", { en: "buy", id: "membeli" }, "あたらしい くつを かいます。",
    [["あたらしい", "Atarashii"], ["くつ", "kutsu"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy new shoes.", id: "Saya membeli sepatu baru." }, "買う", "新しい靴を買います。",
    { en: "買う is a homophone of 飼う (かう, \"to keep/raise an animal\") — context and kanji distinguish the two meanings.", id: "買う adalah homofon dari 飼う (かう, \"memelihara hewan\") — konteks dan kanji yang membedakan kedua maknanya." }],
  ["つくる", "tsukuru", { en: "make", id: "membuat" }, "ははは まいにち ばんごはんを つくります。",
    [["はは", "Haha"], ["は", "wa"], ["まいにち", "mainichi"], ["ばんごはん", "bangohan"], ["を", "wo"], ["つくります", "tsukurimasu"]],
    { en: "My mother makes dinner every day.", id: "Ibu saya membuat makan malam setiap hari." }, "作る", "母は毎日晩ご飯を作ります。",
    { en: "作る is a godan verb used broadly for making or creating things, from food to objects — its kanji 作 also appears in さくぶん (作文, a composition/essay).", id: "作る adalah kata kerja godan yang dipakai luas untuk membuat atau menciptakan sesuatu, dari makanan hingga benda — kanji 作-nya juga muncul pada さくぶん (作文, karangan/esai)." }],
  ["べんきょうする", "benkyou suru", { en: "study", id: "belajar" }, "だいがくで にほんごを べんきょうします。",
    [["だいがく", "Daigaku"], ["で", "de"], ["にほんご", "nihongo"], ["を", "wo"], ["べんきょうします", "benkyoushimasu"]],
    { en: "I study Japanese at university.", id: "Saya belajar bahasa Jepang di universitas." }, "勉強する", "大学で日本語を勉強します。",
    { en: "べんきょうする is a suru-verb (noun 勉強 + する) — the same pattern used by そうじする (to clean) and many other noun-based verbs.", id: "べんきょうする adalah kata kerja suru (kata benda 勉強 + する) — pola yang sama dipakai そうじする (membersihkan) dan banyak kata kerja berbasis kata benda lainnya." }],
  ["はなす", "hanasu", { en: "speak", id: "bicara" }, "にほんごで はなします。",
    [["にほんご", "Nihongo"], ["で", "de"], ["はなします", "hanashimasu"]],
    { en: "I speak in Japanese.", id: "Saya berbicara dalam bahasa Jepang." }, "話す", "日本語で話します。",
    { en: "話す shares its kanji 話 with はなし (a talk/story) and でんわ (電話, telephone, lit. \"electric talk\").", id: "話す berbagi kanji 話 dengan はなし (cerita/obrolan) dan でんわ (電話, telepon, secara harfiah \"obrolan listrik\")." }],
  ["あう", "au", { en: "meet", id: "bertemu" }, "えきで ともだちに あいます。",
    [["えき", "Eki"], ["で", "de"], ["ともだち", "tomodachi"], ["に", "ni"], ["あいます", "aimasu"]],
    { en: "I meet a friend at the station.", id: "Saya bertemu teman di stasiun." }, "会う", "駅で友達に会います。",
    { en: "会う takes the particle に for the person met, not を — a common mistake since \"meet someone\" sounds like it needs a direct object.", id: "会う memakai partikel に untuk orang yang ditemui, bukan を — kesalahan umum karena \"bertemu seseorang\" terdengar seperti butuh objek langsung." }],
  ["やすむ", "yasumu", { en: "rest, take a day off", id: "istirahat, libur" }, "きょうは かいしゃを やすみます。",
    [["きょう", "Kyou"], ["は", "wa"], ["かいしゃ", "kaisha"], ["を", "wo"], ["やすみます", "yasumimasu"]],
    { en: "I am taking the day off work today.", id: "Hari ini saya libur dari kantor." }, "休む", "今日は会社を休みます。",
    { en: "休む covers both resting and being absent from school or work — its kanji 休 also appears in やすみ (a break/holiday) and なつやすみ (summer vacation).", id: "休む mencakup makna beristirahat maupun tidak masuk sekolah/kantor — kanji 休-nya juga muncul pada やすみ (libur/istirahat) dan なつやすみ (libur musim panas)." }],
  ["そうじする", "souji suru", { en: "clean", id: "membersihkan" }, "にちようびに へやを そうじします。",
    [["にちようび", "Nichiyoubi"], ["に", "ni"], ["へや", "heya"], ["を", "wo"], ["そうじします", "soujishimasu"]],
    { en: "I clean my room on Sunday.", id: "Saya membersihkan kamar pada hari Minggu." }, "掃除する", "日曜日に部屋を掃除します。",
    { en: "そうじする is a suru-verb (noun 掃除 + する), the same pattern as べんきょうする — the noun 掃除 alone can also mean \"cleaning\" as a task.", id: "そうじする adalah kata kerja suru (kata benda 掃除 + する), pola yang sama seperti べんきょうする — kata benda 掃除 sendiri juga bisa berarti \"kegiatan bersih-bersih\"." }],
  ["わかる", "wakaru", { en: "understand", id: "mengerti / paham" }, "わたしは にほんごが わかります。",
    [["わたし", "Watashi"], ["は", "wa"], ["にほんご", "nihongo"], ["が", "ga"], ["わかります", "wakarimasu"]],
    { en: "I understand Japanese.", id: "Saya mengerti bahasa Jepang." }, "分かる", "私は日本語が分かります。",
    { en: "Takes the particle ga (not wo) for the thing understood — wakarimasu is the polite present-tense form.", id: "Memakai partikel が (bukan を) untuk hal yang dimengerti — わかります adalah bentuk sopan present tense." }],
  ["しる", "shiru", { en: "know", id: "tahu" }, "そのニュースを しっていますか。",
    [["その", "Sono"], ["ニュース", "nyuusu"], ["を", "wo"], ["しっています", "shitte imasu"], ["か", "ka"]],
    { en: "Do you know that news?", id: "Apa kamu tahu berita itu?" }, "知る", "そのニュースを知っていますか。",
    { en: "Usually appears as shitte imasu ('I know') — shirimasen ('I don't know') is fine too, but a bare shirimasu sounds unnatural.", id: "Biasanya muncul sebagai しっています ('saya tahu') — しりません ('tidak tahu') juga wajar, tapi しります sendirian terdengar janggal." }],
  ["おもう", "omou", { en: "think", id: "berpikir / merasa" }, "あしたは あめだと おもいます。",
    [["あした", "Ashita"], ["は", "wa"], ["あめ", "ame"], ["だと", "da to"], ["おもいます", "omoimasu"]],
    { en: "I think it will rain tomorrow.", id: "Saya rasa besok akan hujan." }, "思う", "明日は雨だと思います。",
    { en: "Used to state a personal opinion or guess, usually with to omoimasu ('I think that ~') attached after a plain-form sentence.", id: "Dipakai untuk menyatakan pendapat atau perkiraan pribadi, biasanya dengan と おもいます ('saya rasa bahwa ~') ditempel setelah kalimat bentuk biasa." }],
  ["つかう", "tsukau", { en: "use", id: "memakai / menggunakan" }, "この かみを つかっても いいですか。",
    [["この", "Kono"], ["かみ", "kami"], ["を", "wo"], ["つかっても", "tsukattemo"], ["いい", "ii"], ["です", "desu"], ["か", "ka"]],
    { en: "May I use this paper?", id: "Boleh saya pakai kertas ini?" }, "使う", "この紙を使ってもいいですか。",
    { en: "A godan verb taking を for the thing used — the te-form tsukatte often pairs with mo ii desu ka to ask permission.", id: "Kata kerja godan yang memakai partikel を untuk benda yang dipakai — bentuk te つかって sering dipasangkan dengan もいいですか untuk meminta izin." }],
  ["もつ", "motsu", { en: "hold, carry, have", id: "memegang / membawa" }, "かばんを もって います。",
    [["かばん", "Kaban"], ["を", "wo"], ["もって", "motte"], ["います", "imasu"]],
    { en: "I am holding a bag.", id: "Saya sedang membawa tas." }, "持つ", "かばんを持っています。",
    { en: "Often appears as motte imasu ('am holding' or 'have/own') — the same te-form is used in motte kite kudasai (please bring it).", id: "Sering muncul sebagai もっています ('sedang memegang' atau 'punya') — bentuk te yang sama dipakai pada もってきてください (tolong bawakan)." }],
  ["すわる", "suwaru", { en: "sit", id: "duduk" }, "いすに すわって ください。",
    [["いす", "Isu"], ["に", "ni"], ["すわって", "suwatte"], ["ください", "kudasai"]],
    { en: "Please sit on the chair.", id: "Silakan duduk di kursi." }, "座る", "椅子に座ってください。",
    { en: "Takes the particle に for the thing sat on or place sat at — its opposite is たつ (stand).", id: "Memakai partikel に untuk benda atau tempat yang diduduki — lawan katanya adalah たつ (berdiri)." }],
  ["たつ", "tatsu", { en: "stand", id: "berdiri" }, "みんな たって ください。",
    [["みんな", "Minna"], ["たって", "tatte"], ["ください", "kudasai"]],
    { en: "Everyone, please stand.", id: "Semuanya, tolong berdiri." }, "立つ", "みんな立ってください。",
    { en: "The opposite of すわる (sit) — its kanji 立 also appears in words like こくりつ (national, lit. 'established by the state').", id: "Lawan kata dari すわる (duduk) — kanji 立-nya juga muncul pada kata seperti こくりつ (nasional, secara harfiah 'didirikan oleh negara')." }],
  ["あける", "akeru", { en: "open (something)", id: "membuka" }, "まどを あけて ください。",
    [["まど", "Mado"], ["を", "wo"], ["あけて", "akete"], ["ください", "kudasai"]],
    { en: "Please open the window.", id: "Tolong buka jendelanya." }, "開ける", "窓を開けてください。",
    { en: "A transitive verb (needs an object with を) — its intransitive pair aku describes something opening by itself.", id: "Kata kerja transitif (butuh objek dengan を) — pasangan intransitifnya, あく, menggambarkan sesuatu yang terbuka dengan sendirinya." }],
  ["しめる", "shimeru", { en: "close (something)", id: "menutup" }, "ドアを しめて ください。",
    [["ドア", "Doa"], ["を", "wo"], ["しめて", "shimete"], ["ください", "kudasai"]],
    { en: "Please close the door.", id: "Tolong tutup pintunya." }, "閉める", "ドアを閉めてください。",
    { en: "The transitive opposite of あける (open) — always takes を for the thing being closed.", id: "Lawan transitif dari あける (membuka) — selalu memakai を untuk benda yang ditutup." }],
  ["つける", "tsukeru", { en: "turn on", id: "menyalakan" }, "でんきを つけて ください。",
    [["でんき", "Denki"], ["を", "wo"], ["つけて", "tsukete"], ["ください", "kudasai"]],
    { en: "Please turn on the light.", id: "Tolong nyalakan lampunya." }, "点ける", "電気を点けてください。",
    { en: "Used for switching on electronics or appliances (lights, TV, AC) — its opposite is けす (turn off).", id: "Dipakai untuk menyalakan barang elektronik (lampu, TV, AC) — lawan katanya adalah けす (mematikan)." }],
  ["けす", "kesu", { en: "turn off, erase", id: "mematikan / menghapus" }, "テレビを けして ください。",
    [["テレビ", "Terebi"], ["を", "wo"], ["けして", "keshite"], ["ください", "kudasai"]],
    { en: "Please turn off the TV.", id: "Tolong matikan TV-nya." }, "消す", "テレビを消してください。",
    { en: "Covers both switching something off and erasing writing — the tool for erasing pencil marks, けしゴム, shares this kanji.", id: "Mencakup baik mematikan alat maupun menghapus tulisan — alat penghapus pensil, けしゴム, memakai kanji yang sama." }]
];

// Sub-Tier 5.2: Perpindahan & Mobilisasi (4)
const KOTOBA_N5_CH5_2 = [
  ["いく", "iku", { en: "go", id: "pergi" }, "がっこうへ いきます。",
    [["がっこう", "Gakkou"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I go to school.", id: "Saya pergi ke sekolah." }, "行く", "学校へ行きます。",
    { en: "行く is read いく as a standalone verb, but switches to the on'yomi こう in compounds like りょこう (旅行, travel) or ぎんこう (bank, using 行 for \"institution\").", id: "行く dibaca いく sebagai kata kerja berdiri sendiri, tetapi berubah menjadi bacaan on'yomi こう pada kata majemuk seperti りょこう (旅行, bepergian) atau ぎんこう (bank, memakai 行 untuk \"lembaga\")." }],
  ["くる", "kuru", { en: "come", id: "datang" }, "ともだちが うちへ きます。",
    [["ともだち", "Tomodachi"], ["が", "ga"], ["うち", "uchi"], ["へ", "e"], ["きます", "kimasu"]],
    { en: "A friend is coming to my house.", id: "Teman datang ke rumah." }, "来る", "友達が家へ来ます。",
    { en: "来る is one of only two irregular verbs in Japanese (the other being する) — its conjugation pattern doesn't follow the regular godan/ichidan rules.", id: "来る adalah satu dari hanya dua kata kerja tidak beraturan dalam bahasa Jepang (satunya する) — pola konjugasinya tidak mengikuti aturan godan/ichidan biasa." }],
  ["かえる", "kaeru", { en: "go home", id: "pulang" }, "はやく いえへ かえります。",
    [["はやく", "Hayaku"], ["いえ", "ie"], ["へ", "e"], ["かえります", "kaerimasu"]],
    { en: "I go home early.", id: "Saya pulang ke rumah lebih awal." }, "帰る", "早く家へ帰ります。",
    { en: "帰る specifically means returning to one's home or place of origin, unlike もどる (to go back to a place in general, not necessarily home).", id: "帰る secara khusus berarti kembali ke rumah atau tempat asal seseorang, berbeda dari もどる (kembali ke suatu tempat secara umum, tidak harus rumah)." }],
  ["あるく", "aruku", { en: "walk", id: "berjalan kaki" }, "まいあさ こうえんを あるきます。",
    [["まいあさ", "Maiasa"], ["こうえん", "kouen"], ["を", "wo"], ["あるきます", "arukimasu"]],
    { en: "I walk in the park every morning.", id: "Saya berjalan kaki di taman setiap pagi." }, "歩く", "毎朝公園を歩きます。",
    { en: "The particle を here marks the space being traversed rather than a direct object — the same pattern is used with verbs like とおる (to pass through).", id: "Partikel を di sini menandai ruang yang dilalui, bukan objek langsung — pola yang sama dipakai pada kata kerja seperti とおる (melewati)." }],
  ["はしる", "hashiru", { en: "run", id: "berlari" }, "まいあさ こうえんを はしります。",
    [["まいあさ", "Maiasa"], ["こうえん", "kouen"], ["を", "wo"], ["はしります", "hashirimasu"]],
    { en: "I run in the park every morning.", id: "Saya berlari di taman setiap pagi." }, "走る", "毎朝公園を走ります。",
    { en: "走る is a godan verb — despite ending in る like an ichidan verb, it conjugates as godan, a common trap for learners (the same is true of かえる).", id: "走る adalah kata kerja godan — meski berakhiran る seperti kata kerja ichidan, konjugasinya mengikuti pola godan, jebakan umum bagi pembelajar (hal sama berlaku pada かえる)." }],
  ["でかける", "dekakeru", { en: "go out, head out", id: "bepergian, keluar rumah" }, "きょうは かいものに でかけます。",
    [["きょう", "Kyou"], ["は", "wa"], ["かいもの", "kaimono"], ["に", "ni"], ["でかけます", "dekakemasu"]],
    { en: "Today I am going out shopping.", id: "Hari ini saya keluar untuk berbelanja." }, "出かける", "今日は買い物に出かけます。",
    { en: "出かける combines 出 (go out) + かける (set off) — it implies leaving home for a purpose, unlike でる, which simply means to exit any place.", id: "出かける menggabungkan 出 (keluar) + かける (berangkat) — menyiratkan meninggalkan rumah untuk suatu keperluan, berbeda dari でる yang sekadar berarti keluar dari tempat mana pun." }],
  ["でる", "deru", { en: "exit, leave", id: "keluar" }, "はちじに いえを でます。",
    [["はちじ", "Hachiji"], ["に", "ni"], ["いえ", "ie"], ["を", "wo"], ["でます", "demasu"]],
    { en: "I leave the house at eight o'clock.", id: "Saya keluar rumah jam delapan." }, "出る", "八時に家を出ます。",
    { en: "出る is an ichidan verb whose direct opposite is はいる (to enter) — its kanji 出 also appears in でぐち (exit) and でかける (to go out).", id: "出る adalah kata kerja ichidan yang lawan langsungnya adalah はいる (masuk) — kanji 出-nya juga muncul pada でぐち (pintu keluar) dan でかける (bepergian)." }],
  ["はいる", "hairu", { en: "enter", id: "masuk" }, "きょうしつに はいります。",
    [["きょうしつ", "Kyoushitsu"], ["に", "ni"], ["はいります", "hairimasu"]],
    { en: "I enter the classroom.", id: "Saya masuk ke ruang kelas." }, "入る", "教室に入ります。",
    { en: "入る is a godan verb — another trap for learners, since it ends in る like an ichidan verb but conjugates as godan (はいります, not はいれます for the plain non-past).", id: "入る adalah kata kerja godan — jebakan lain bagi pembelajar, karena berakhiran る seperti kata kerja ichidan tapi konjugasinya godan (はいります, bukan はいれます untuk bentuk non-lampau biasa)." }],
  ["つく", "tsuku", { en: "arrive", id: "tiba, sampai" }, "くじに えきに つきます。",
    [["くじ", "Kuji"], ["に", "ni"], ["えき", "eki"], ["に", "ni"], ["つきます", "tsukimasu"]],
    { en: "I arrive at the station at nine o'clock.", id: "Saya tiba di stasiun jam sembilan." }, "着く", "九時に駅に着きます。",
    { en: "着く takes に for the arrival point, the same particle いく uses for a destination — its kanji 着 also appears in きもの (着物, kimono, lit. \"a worn thing\").", id: "着く memakai partikel に untuk titik tujuan tiba, sama seperti partikel yang dipakai いく untuk tujuan — kanji 着-nya juga muncul pada きもの (着物, kimono, secara harfiah \"benda yang dikenakan\")." }],
  ["のる", "noru", { en: "ride, board", id: "naik kendaraan" }, "でんしゃに のります。",
    [["でんしゃ", "Densha"], ["に", "ni"], ["のります", "norimasu"]],
    { en: "I board the train.", id: "Saya naik kereta." }, "乗る", "電車に乗ります。",
    { en: "乗る takes に for the vehicle you board, unlike で which marks the vehicle used as a means (でんしゃで いく, \"go by train\").", id: "乗る memakai partikel に untuk kendaraan yang dinaiki, berbeda dari で yang menandai kendaraan sebagai sarana (でんしゃで いく, \"pergi naik kereta\")." }],
  ["おりる", "oriru", { en: "get off, get down", id: "turun (kendaraan)" }, "つぎの えきで おります。",
    [["つぎ", "Tsugi"], ["の", "no"], ["えき", "eki"], ["で", "de"], ["おります", "orimasu"]],
    { en: "I get off at the next station.", id: "Saya turun di stasiun berikutnya." }, "降りる", "次の駅で降ります。",
    { en: "降りる is an ichidan verb and the direct opposite of のる (to board) — で here marks the place where the action of getting off happens.", id: "降りる adalah kata kerja ichidan dan lawan langsung dari のる (naik) — で di sini menandai tempat berlangsungnya tindakan turun." }],
  ["のりかえる", "norikaeru", { en: "transfer, change vehicles", id: "transit, ganti kendaraan" }, "しんじゅくで でんしゃを のりかえます。",
    [["しんじゅく", "Shinjuku"], ["で", "de"], ["でんしゃ", "densha"], ["を", "wo"], ["のりかえます", "norikaemasu"]],
    { en: "I change trains at Shinjuku.", id: "Saya transit kereta di Shinjuku." }, "乗り換える", "新宿で電車を乗り換えます。",
    { en: "Combines のる (to board) + かえる (to change/exchange, a different verb from かえる \"go home\") — this かえる is written 換える, not 帰る.", id: "Gabungan dari のる (naik) + かえる (bertukar/berganti, kata kerja berbeda dari かえる \"pulang\") — かえる di sini ditulis 換える, bukan 帰る." }],
  ["わたる", "wataru", { en: "cross", id: "menyeberang" }, "みちを わたります。",
    [["みち", "Michi"], ["を", "wo"], ["わたります", "watarimasu"]],
    { en: "I cross the street.", id: "Saya menyeberangi jalan." }, "渡る", "道を渡ります。",
    { en: "渡る is a godan verb; を here marks the space being crossed, the same pattern used by あるく (walk through/along a space).", id: "渡る adalah kata kerja godan; を di sini menandai ruang yang diseberangi, pola yang sama dipakai あるく (berjalan melintasi suatu ruang)." }],
  ["まがる", "magaru", { en: "turn", id: "belok" }, "つぎの かどを みぎに まがります。",
    [["つぎ", "Tsugi"], ["の", "no"], ["かど", "kado"], ["を", "wo"], ["みぎ", "migi"], ["に", "ni"], ["まがります", "magarimasu"]],
    { en: "I turn right at the next corner.", id: "Saya belok kanan di tikungan berikutnya." }, "曲がる", "次の角を右に曲がります。",
    { en: "曲がる is a godan verb; while を marks the corner passed, に marks the direction turned toward — both particles appear together in this common pattern.", id: "曲がる adalah kata kerja godan; sementara を menandai tikungan yang dilewati, に menandai arah yang dituju — kedua partikel ini muncul bersama dalam pola umum ini." }],
  ["のぼる", "noboru", { en: "climb", id: "mendaki, memanjat" }, "にちようびに やまに のぼります。",
    [["にちようび", "Nichiyoubi"], ["に", "ni"], ["やま", "yama"], ["に", "ni"], ["のぼります", "noborimasu"]],
    { en: "I climb a mountain on Sunday.", id: "Saya mendaki gunung pada hari Minggu." }, "登る", "日曜日に山に登ります。",
    { en: "登る is a godan verb that takes に for the thing being climbed — its kanji 登 also appears in とざん (登山, mountain climbing as a hobby).", id: "登る adalah kata kerja godan yang memakai partikel に untuk benda yang didaki — kanji 登-nya juga muncul pada とざん (登山, hobi mendaki gunung)." }],
  ["およぐ", "oyogu", { en: "swim", id: "berenang" }, "なつは プールで およぎます。",
    [["なつ", "Natsu"], ["は", "wa"], ["プール", "puuru"], ["で", "de"], ["およぎます", "oyogimasu"]],
    { en: "I swim in the pool in summer.", id: "Di musim panas saya berenang di kolam renang." }, "泳ぐ", "夏はプールで泳ぎます。",
    { en: "泳ぐ is a godan verb; で here marks the place the swimming happens, the same use of で seen with words like がっこうで (at school).", id: "泳ぐ adalah kata kerja godan; で di sini menandai tempat berlangsungnya kegiatan berenang, penggunaan で yang sama seperti がっこうで (di sekolah)." }],
  ["とぶ", "tobu", { en: "fly", id: "terbang" }, "ひこうきが そらを とびます。",
    [["ひこうき", "Hikouki"], ["が", "ga"], ["そら", "sora"], ["を", "wo"], ["とびます", "tobimasu"]],
    { en: "The plane flies through the sky.", id: "Pesawat terbang melintasi langit." }, "飛ぶ", "飛行機が空を飛びます。",
    { en: "飛ぶ is a godan verb; its kanji 飛 also appears in ひこうき (飛行機, airplane, lit. \"flying-go machine\").", id: "飛ぶ adalah kata kerja godan; kanji 飛-nya juga muncul pada ひこうき (飛行機, pesawat terbang, secara harfiah \"mesin yang terbang dan pergi\")." }],
  ["さんぽする", "sanpo suru", { en: "take a walk, stroll", id: "jalan-jalan santai" }, "まいあさ いぬと さんぽします。",
    [["まいあさ", "Maiasa"], ["いぬ", "inu"], ["と", "to"], ["さんぽします", "sanposhimasu"]],
    { en: "I take a walk with my dog every morning.", id: "Saya jalan-jalan santai bersama anjing saya setiap pagi." }, "散歩する", "毎朝犬と散歩します。",
    { en: "さんぽする is a suru-verb (noun 散歩 + する); unlike あるく, which simply means \"to walk\", さんぽする implies a leisurely, purposeless stroll.", id: "さんぽする adalah kata kerja suru (kata benda 散歩 + する); berbeda dari あるく yang sekadar berarti \"berjalan kaki\", さんぽする menyiratkan jalan santai tanpa tujuan tertentu." }],
  ["りょこうする", "ryokou suru", { en: "travel", id: "bepergian, traveling" }, "らいねん にほんを りょこうします。",
    [["らいねん", "Rainen"], ["にほん", "Nihon"], ["を", "wo"], ["りょこうします", "ryokoushimasu"]],
    { en: "Next year I will travel around Japan.", id: "Tahun depan saya akan bepergian keliling Jepang." }, "旅行する", "来年日本を旅行します。",
    { en: "りょこうする is a suru-verb (noun 旅行 + する) — its kanji 行 shares the same reading pattern seen in いく (行く, to go) when used in compounds.", id: "りょこうする adalah kata kerja suru (kata benda 旅行 + する) — kanji 行-nya berbagi pola bacaan yang sama seperti pada いく (行く, pergi) ketika dipakai dalam kata majemuk." }],
  ["ひっこす", "hikkosu", { en: "move house, relocate", id: "pindah rumah" }, "らいげつ あたらしい いえに ひっこします。",
    [["らいげつ", "Raigetsu"], ["あたらしい", "atarashii"], ["いえ", "ie"], ["に", "ni"], ["ひっこします", "hikkoshimasu"]],
    { en: "I will move to a new house next month.", id: "Bulan depan saya akan pindah ke rumah baru." }, "引っ越す", "来月新しい家に引っ越します。",
    { en: "引っ越す combines 引く (pull) + 越す (cross over) — the small っ marks a held pause, so it's read ひっこす, not ひきこす.", id: "引っ越す menggabungkan 引く (menarik) + 越す (melintasi) — っ kecil menandai jeda tertahan, sehingga dibaca ひっこす, bukan ひきこす." }],
  ["あそぶ", "asobu", { en: "play", id: "bermain" }, "こうえんで こどもたちと あそびます。",
    [["こうえん", "Kouen"], ["で", "de"], ["こどもたち", "kodomotachi"], ["と", "to"], ["あそびます", "asobimasu"]],
    { en: "I play with the children at the park.", id: "Saya bermain dengan anak-anak di taman." }, "遊ぶ", "公園で子供たちと遊びます。",
    { en: "Takes と for the person played with, not に — covers playing games, hanging out, or having fun in general.", id: "Memakai partikel と untuk orang yang diajak bermain, bukan に — mencakup bermain game, nongkrong, atau bersenang-senang secara umum." }],
  ["うたう", "utau", { en: "sing", id: "bernyanyi" }, "カラオケで うたを うたいます。",
    [["カラオケ", "Karaoke"], ["で", "de"], ["うた", "uta"], ["を", "wo"], ["うたいます", "utaimasu"]],
    { en: "I sing a song at karaoke.", id: "Saya bernyanyi lagu di karaoke." }, "歌う", "カラオケで歌を歌います。",
    { en: "Shares its kanji 歌 with うた (song, the noun) — the verb takes を for the song being sung.", id: "Berbagi kanji 歌 dengan うた (lagu, kata bendanya) — kata kerjanya memakai partikel を untuk lagu yang dinyanyikan." }]
];

// Sub-Tier 5.3: Interaksi, Transaksi, & Kerja (4)
const KOTOBA_N5_CH5_3 = [
  ["はなす", "hanasu", { en: "speak", id: "bicara" }, "にほんごで はなします。",
    [["にほんご", "Nihongo"], ["で", "de"], ["はなします", "hanashimasu"]],
    { en: "I speak in Japanese.", id: "Saya berbicara dalam bahasa Jepang." }, "話す", "日本語で話します。",
    { en: "話す shares its kanji 話 with はなし (a talk/story) and でんわ (電話, telephone, lit. \"electric talk\").", id: "話す berbagi kanji 話 dengan はなし (cerita/obrolan) dan でんわ (電話, telepon, secara harfiah \"obrolan listrik\")." }],
  ["かく", "kaku", { en: "write", id: "tulis" }, "てがみを かきます。",
    [["てがみ", "Tegami"], ["を", "wo"], ["かきます", "kakimasu"]],
    { en: "I write a letter.", id: "Saya menulis surat." }, "書く", "手紙を書きます。",
    { en: "書く specifically means writing text or characters, distinct from 描く (also read かく, \"to draw a picture\") — same reading, different kanji.", id: "書く secara khusus berarti menulis teks atau huruf, berbeda dari 描く (juga dibaca かく, \"menggambar\") — bacaan sama, kanji berbeda." }],
  ["かう", "kau", { en: "buy", id: "beli" }, "あたらしい くつを かいます。",
    [["あたらしい", "Atarashii"], ["くつ", "kutsu"], ["を", "wo"], ["かいます", "kaimasu"]],
    { en: "I buy new shoes.", id: "Saya membeli sepatu baru." }, "買う", "新しい靴を買います。",
    { en: "買う is a homophone of 飼う (かう, \"to keep/raise an animal\") — context and kanji distinguish the two meanings.", id: "買う adalah homofon dari 飼う (かう, \"memelihara hewan\") — konteks dan kanji yang membedakan kedua maknanya." }],
  ["はたらく", "hataraku", { en: "work", id: "bekerja" }, "ちちは ぎんこうで はたらいて います。",
    [["ちち", "Chichi"], ["は", "wa"], ["ぎんこう", "ginkou"], ["で", "de"], ["はたらいて", "hataraite"], ["います", "imasu"]],
    { en: "My father works at a bank.", id: "Ayah saya bekerja di bank." }, "働く", "父は銀行で働いています。",
    { en: "働く combines 人 (person) + 動 (move) — literally \"a person moving\", and is a kokuji (国字), a kanji created in Japan rather than borrowed from Chinese.", id: "働く menggabungkan 人 (orang) + 動 (bergerak) — secara harfiah \"orang yang bergerak\", dan merupakan kokuji (国字), kanji buatan Jepang sendiri, bukan pinjaman dari Cina." }],
  ["うる", "uru", { en: "sell", id: "menjual" }, "この みせは くだものを うります。",
    [["この", "Kono"], ["みせ", "mise"], ["は", "wa"], ["くだもの", "kudamono"], ["を", "wo"], ["うります", "urimasu"]],
    { en: "This shop sells fruit.", id: "Toko ini menjual buah." }, "売る", "この店は果物を売ります。",
    { en: "売る is a godan verb and the direct opposite of かう (to buy) — its kanji 売 also appears in ばいてん (売店, a kiosk/stand).", id: "売る adalah kata kerja godan dan lawan langsung dari かう (membeli) — kanji 売-nya juga muncul pada ばいてん (売店, kios kecil)." }],
  ["はらう", "harau", { en: "pay", id: "membayar" }, "レジで おかねを はらいます。",
    [["レジ", "Reji"], ["で", "de"], ["おかね", "okane"], ["を", "wo"], ["はらいます", "haraimasu"]],
    { en: "I pay the money at the register.", id: "Saya membayar uang di kasir." }, "払う", "レジでお金を払います。",
    { en: "払う is a godan verb used specifically for the act of paying money, distinct from かう (to buy) which focuses on the act of acquiring something.", id: "払う adalah kata kerja godan yang dipakai khusus untuk tindakan membayar uang, berbeda dari かう (membeli) yang menekankan tindakan memperoleh sesuatu." }],
  ["きく", "kiku", { en: "ask", id: "bertanya" }, "せんせいに みちを ききます。",
    [["せんせい", "Sensei"], ["に", "ni"], ["みち", "michi"], ["を", "wo"], ["ききます", "kikimasu"]],
    { en: "I ask the teacher for directions.", id: "Saya bertanya arah jalan kepada guru." }, "聞く", "先生に道を聞きます。",
    { en: "聞く means both \"listen/hear\" and \"ask\" depending on context — here に marks the person asked, while を marks what is asked about.", id: "聞く berarti \"mendengar\" maupun \"bertanya\" tergantung konteks — di sini に menandai orang yang ditanya, sedangkan を menandai hal yang ditanyakan." }],
  ["いう", "iu", { en: "say", id: "berkata, mengucapkan" }, "かれは 「ありがとう」と いいました。",
    [["かれ", "Kare"], ["は", "wa"], ["ありがとう", "arigatou"], ["と", "to"], ["いいました", "iimashita"]],
    { en: "He said \"thank you.\"", id: "Dia berkata \"terima kasih.\"" }, "言う", "彼は「ありがとう」と言いました。",
    { en: "言う takes と to mark the exact words quoted — the same と also introduces reported speech, as in ～と おもいます (\"I think that ~\").", id: "言う memakai partikel と untuk menandai kata-kata yang dikutip persis — と yang sama juga dipakai untuk memperkenalkan ucapan tak langsung, seperti pada ～と おもいます (\"saya pikir bahwa ~\")." }],
  ["おしえる", "oshieru", { en: "teach, tell", id: "mengajar, memberitahu" }, "せんせいは にほんごを おしえます。",
    [["せんせい", "Sensei"], ["は", "wa"], ["にほんご", "nihongo"], ["を", "wo"], ["おしえます", "oshiemasu"]],
    { en: "The teacher teaches Japanese.", id: "Guru itu mengajar bahasa Jepang." }, "教える", "先生は日本語を教えます。",
    { en: "教える is an ichidan verb covering both \"teach a subject\" and \"tell/inform someone of something\" — its opposite for learning is ならう.", id: "教える adalah kata kerja ichidan yang mencakup makna \"mengajar suatu pelajaran\" maupun \"memberi tahu sesuatu\" — lawannya dari sisi belajar adalah ならう." }],
  ["ならう", "narau", { en: "learn (from someone)", id: "belajar (dari orang lain)" }, "せんせいに ピアノを ならって います。",
    [["せんせい", "Sensei"], ["に", "ni"], ["ピアノ", "piano"], ["を", "wo"], ["ならって", "naratte"], ["います", "imasu"]],
    { en: "I am learning piano from a teacher.", id: "Saya belajar piano dari seorang guru." }, "習う", "先生にピアノを習っています。",
    { en: "習う is a godan verb meaning to learn a skill under guidance, taking に for the teacher — unlike べんきょうする, which is broader and doesn't require a teacher.", id: "習う adalah kata kerja godan berarti belajar suatu keterampilan di bawah bimbingan, memakai に untuk gurunya — berbeda dari べんきょうする yang lebih umum dan tidak mensyaratkan adanya guru." }],
  ["かす", "kasu", { en: "lend", id: "meminjamkan" }, "ともだちに ほんを かします。",
    [["ともだち", "Tomodachi"], ["に", "ni"], ["ほん", "hon"], ["を", "wo"], ["かします", "kashimasu"]],
    { en: "I lend a book to a friend.", id: "Saya meminjamkan buku kepada teman." }, "貸す", "友達に本を貸します。",
    { en: "貸す is a godan verb and the direct opposite of かりる (to borrow) — both take に for the other person involved.", id: "貸す adalah kata kerja godan dan lawan langsung dari かりる (meminjam) — keduanya memakai partikel に untuk orang lain yang terlibat." }],
  ["かりる", "kariru", { en: "borrow", id: "meminjam" }, "としょかんで ほんを かります。",
    [["としょかん", "Toshokan"], ["で", "de"], ["ほん", "hon"], ["を", "wo"], ["かります", "karimasu"]],
    { en: "I borrow a book at the library.", id: "Saya meminjam buku di perpustakaan." }, "借りる", "図書館で本を借ります。",
    { en: "借りる is an ichidan verb — remember the pair かす／かりる (lend/borrow) points the opposite direction from もらう／あげる (receive/give).", id: "借りる adalah kata kerja ichidan — ingat pasangan かす／かりる (meminjamkan/meminjam) berlawanan arah dari もらう／あげる (menerima/memberi)." }],
  ["かえす", "kaesu", { en: "return (something)", id: "mengembalikan" }, "としょかんに ほんを かえします。",
    [["としょかん", "Toshokan"], ["に", "ni"], ["ほん", "hon"], ["を", "wo"], ["かえします", "kaeshimasu"]],
    { en: "I return the book to the library.", id: "Saya mengembalikan buku ke perpustakaan." }, "返す", "図書館に本を返します。",
    { en: "返す is a transitive godan verb (to return something) — don't confuse it with かえる (帰る, to go home) or かえる (換える, to exchange), which look and sound similar.", id: "返す adalah kata kerja godan transitif (mengembalikan sesuatu) — jangan tertukar dengan かえる (帰る, pulang) atau かえる (換える, bertukar), yang terdengar dan terlihat mirip." }],
  ["あげる", "ageru", { en: "give", id: "memberikan" }, "ともだちに プレゼントを あげます。",
    [["ともだち", "Tomodachi"], ["に", "ni"], ["プレゼント", "purezento"], ["を", "wo"], ["あげます", "agemasu"]],
    { en: "I give a present to a friend.", id: "Saya memberikan hadiah kepada teman." }, "上げる", "友達にプレゼントを上げます。",
    { en: "あげる is used when you give something to someone else — its opposite when someone gives something to you is もらう.", id: "あげる dipakai ketika kamu memberikan sesuatu kepada orang lain — lawannya ketika orang lain memberi sesuatu kepadamu adalah もらう." }],
  ["もらう", "morau", { en: "receive", id: "menerima" }, "たんじょうびに プレゼントを もらいました。",
    [["たんじょうび", "Tanjoubi"], ["に", "ni"], ["プレゼント", "purezento"], ["を", "wo"], ["もらいました", "moraimashita"]],
    { en: "I received a present on my birthday.", id: "Saya menerima hadiah pada hari ulang tahun saya." }, "貰う", "誕生日にプレゼントを貰いました。",
    { en: "もらう takes に or から for the giver — its opposite is あげる, giving something to someone.", id: "もらう memakai に atau から untuk pemberinya — lawannya adalah あげる, memberikan sesuatu kepada orang lain." }],
  ["おくる", "okuru", { en: "send", id: "mengirim" }, "ははに てがみを おくります。",
    [["はは", "Haha"], ["に", "ni"], ["てがみ", "tegami"], ["を", "wo"], ["おくります", "okurimasu"]],
    { en: "I send a letter to my mother.", id: "Saya mengirim surat kepada ibu saya." }, "送る", "母に手紙を送ります。",
    { en: "送る is a godan verb for sending letters, packages, or emails — に marks the recipient, the same pattern used with あげる and かす.", id: "送る adalah kata kerja godan untuk mengirim surat, paket, atau email — に menandai penerima, pola yang sama dipakai pada あげる dan かす." }],
  ["てつだう", "tetsudau", { en: "help", id: "membantu" }, "ははの しごとを てつだいます。",
    [["はは", "Haha"], ["の", "no"], ["しごと", "shigoto"], ["を", "wo"], ["てつだいます", "tetsudaimasu"]],
    { en: "I help with my mother's work.", id: "Saya membantu pekerjaan ibu saya." }, "手伝う", "母の仕事を手伝います。",
    { en: "手伝う combines 手 (hand) + 伝う (to convey) — literally \"lend a hand\", and takes を for the task or person helped.", id: "手伝う menggabungkan 手 (tangan) + 伝う (menyalurkan) — secara harfiah \"meminjamkan tangan\", dan memakai partikel を untuk tugas atau orang yang dibantu." }],
  ["よぶ", "yobu", { en: "call (someone)", id: "memanggil" }, "せんせいが わたしの なまえを よびました。",
    [["せんせい", "Sensei"], ["が", "ga"], ["わたし", "watashi"], ["の", "no"], ["なまえ", "namae"], ["を", "wo"], ["よびました", "yobimashita"]],
    { en: "The teacher called my name.", id: "Guru itu memanggil nama saya." }, "呼ぶ", "先生が私の名前を呼びました。",
    { en: "呼ぶ is a godan verb meaning to call out to someone by voice — distinct from でんわする, which specifically means to call by telephone.", id: "呼ぶ adalah kata kerja godan yang berarti memanggil seseorang dengan suara — berbeda dari でんわする yang secara khusus berarti menelepon." }],
  ["たのむ", "tanomu", { en: "ask, request", id: "meminta, memohon" }, "てんいんに みずを たのみました。",
    [["てんいん", "Ten\u2019in"], ["に", "ni"], ["みず", "mizu"], ["を", "wo"], ["たのみました", "tanomimashita"]],
    { en: "I asked the store clerk for water.", id: "Saya meminta air kepada pegawai toko." }, "頼む", "店員に水を頼みました。",
    { en: "頼む is a godan verb for making a request — に marks the person asked, similar to きく (ask) but たのむ specifically implies asking for a favor or service.", id: "頼む adalah kata kerja godan untuk mengajukan permintaan — に menandai orang yang diminta, mirip きく (bertanya) tetapi たのむ secara khusus menyiratkan meminta bantuan atau jasa." }],
  ["でんわする", "denwa suru", { en: "make a phone call", id: "menelepon" }, "ともだちに でんわします。",
    [["ともだち", "Tomodachi"], ["に", "ni"], ["でんわします", "denwashimasu"]],
    { en: "I make a phone call to a friend.", id: "Saya menelepon teman." }, "電話する", "友達に電話します。",
    { en: "でんわする is a suru-verb (noun 電話 + する), the same pattern as べんきょうする and そうじする — に marks the person called.", id: "でんわする adalah kata kerja suru (kata benda 電話 + する), pola yang sama seperti べんきょうする dan そうじする — に menandai orang yang ditelepon." }],
  ["かいもの", "kaimono", { en: "shopping", id: "belanja" }, "きょう デパートへ かいものに いきます。",
    [["きょう", "Kyou"], ["デパート", "depaato"], ["へ", "e"], ["かいもの", "kaimono"], ["に", "ni"], ["いきます", "ikimasu"]],
    { en: "Today I'm going shopping at the department store.", id: "Hari ini saya pergi belanja ke department store." }, "買い物", "今日デパートへ買い物に行きます。",
    { en: "Built from kau (to buy) + mono (thing) — commonly paired with suru or with ni iku ('go to ~').", id: "Dibentuk dari かう (membeli) + もの (barang) — biasa dipakai dengan する atau に いく ('pergi untuk ~')." }],
  ["わすれる", "wasureru", { en: "forget", id: "lupa" }, "かぎを わすれないで ください。",
    [["かぎ", "Kagi"], ["を", "wo"], ["わすれないで", "wasurenaide"], ["ください", "kudasai"]],
    { en: "Please don't forget your key.", id: "Tolong jangan lupa kuncimu." }, "忘れる", "鍵を忘れないでください。",
    { en: "Can mean forgetting information or a promise, or leaving an object behind by accident, as in the example above.", id: "Bisa berarti lupa informasi/janji, atau tidak sengaja meninggalkan barang, seperti pada contoh di atas." }],
  ["しつもん", "shitsumon", { en: "question", id: "pertanyaan" }, "しつもんが あります。",
    [["しつもん", "Shitsumon"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "I have a question.", id: "Saya punya pertanyaan." }, "質問", "質問があります。",
    { en: "Usually paired with する (to ask a question) or the verb kiku — its opposite is こたえ, the noun for 'answer'.", id: "Biasa dipasangkan dengan する (mengajukan pertanyaan) atau kata kerja きく — lawan katanya adalah こたえ, kata benda untuk 'jawaban'." }],
  ["こたえる", "kotaeru", { en: "answer", id: "menjawab" }, "せんせいの しつもんに こたえます。",
    [["せんせい", "Sensei"], ["の", "no"], ["しつもん", "shitsumon"], ["に", "ni"], ["こたえます", "kotaemasu"]],
    { en: "I answer the teacher's question.", id: "Saya menjawab pertanyaan guru." }, "答える", "先生の質問に答えます。",
    { en: "Takes the particle に for the question answered, not を — its noun form こたえ means 'answer' as a thing.", id: "Memakai partikel に untuk pertanyaan yang dijawab, bukan を — bentuk kata bendanya こたえ berarti 'jawaban' sebagai benda." }]
];

// Sub-Tier 6.1: Kata Sifat-i Deskriptif (4)
const KOTOBA_N5_CH6_1 = [
  ["おおきい", "ookii", { en: "big", id: "besar" }, "この いえは おおきいです。",
    [["この", "Kono"], ["いえ", "ie"], ["は", "wa"], ["おおきい", "ookii"], ["です", "desu"]],
    { en: "This house is big.", id: "Rumah ini besar." }, "大きい", "この家は大きいです。",
    { en: "おおきい has an alternate pre-noun form おおきな (e.g. おおきな いえ), a rare irregular pattern also shared by ちいさい (small).", id: "おおきい punya bentuk alternatif sebelum kata benda yaitu おおきな (misalnya おおきな いえ), pola tak beraturan langka yang juga dimiliki ちいさい (kecil)." }],
  ["ちいさい", "chiisai", { en: "small", id: "kecil" }, "あの いぬは ちいさいです。",
    [["あの", "Ano"], ["いぬ", "inu"], ["は", "wa"], ["ちいさい", "chiisai"], ["です", "desu"]],
    { en: "That dog is small.", id: "Anjing itu kecil." }, "小さい", "あの犬は小さいです。",
    { en: "Like おおきい, ちいさい has an alternate pre-noun form ちいさな, as in ちいさな こども (a small child).", id: "Seperti おおきい, ちいさい punya bentuk alternatif sebelum kata benda yaitu ちいさな, seperti pada ちいさな こども (anak kecil)." }],
  ["たかい", "takai", { en: "tall / expensive", id: "tinggi / mahal" }, "この かばんは たかいです。",
    [["この", "Kono"], ["かばん", "kaban"], ["は", "wa"], ["たかい", "takai"], ["です", "desu"]],
    { en: "This bag is expensive.", id: "Tas ini mahal." }, "高い", "この鞄は高いです。",
    { en: "高い covers both physical height and price — its opposite ひくい (low) only covers height, while やすい (cheap) only covers price.", id: "高い mencakup makna tinggi fisik maupun harga — lawannya ひくい (rendah) hanya untuk tinggi, sedangkan やすい (murah) hanya untuk harga." }],
  ["やすい", "yasui", { en: "cheap", id: "murah" }, "やおやの やさいは やすいです。",
    [["やおや", "Yaoya"], ["の", "no"], ["やさい", "yasai"], ["は", "wa"], ["やすい", "yasui"], ["です", "desu"]],
    { en: "The vegetables at the greengrocer are cheap.", id: "Sayuran di toko sayur itu murah." }, "安い", "八百屋の野菜は安いです。",
    { en: "安い is the price-specific opposite of たかい — note its different kanji from やすむ (休む, \"to rest\"), a common false-friend for beginners.", id: "安い adalah lawan kata たかい khusus untuk harga — perhatikan kanjinya berbeda dari やすむ (休む, \"beristirahat\"), pasangan kata yang sering membingungkan pemula." }],
  ["あたらしい", "atarashii", { en: "new", id: "baru" }, "これは あたらしい パソコンです。",
    [["これ", "Kore"], ["は", "wa"], ["あたらしい", "atarashii"], ["パソコン", "pasokon"], ["です", "desu"]],
    { en: "This is a new computer.", id: "Ini komputer baru." }, "新しい", "これは新しいパソコンです。",
    { en: "新しい is a regular i-adjective and the direct opposite of ふるい (old) — its kanji 新 also appears in しんぶん (新聞, newspaper, lit. \"new hearing\").", id: "新しい adalah kata sifat-i biasa dan lawan langsung dari ふるい (lama) — kanji 新-nya juga muncul pada しんぶん (新聞, koran, secara harfiah \"kabar baru\")." }],
  ["ふるい", "furui", { en: "old (things)", id: "lama, tua, usang" }, "この カメラは ふるいです。",
    [["この", "Kono"], ["カメラ", "kamera"], ["は", "wa"], ["ふるい", "furui"], ["です", "desu"]],
    { en: "This camera is old.", id: "Kamera ini sudah lama/usang." }, "古い", "このカメラは古いです。",
    { en: "古い describes the age of things or buildings, not people — for a person's age, use としを とった or simply state their とし (age).", id: "古い menggambarkan usia benda atau bangunan, bukan orang — untuk usia orang, dipakai としを とった atau menyebutkan とし (usia) langsung." }],
  ["いい", "ii", { en: "good", id: "bagus, baik" }, "この えいがは いいです。",
    [["この", "Kono"], ["えいが", "eiga"], ["は", "wa"], ["いい", "ii"], ["です", "desu"]],
    { en: "This movie is good.", id: "Film ini bagus." }, "良い", "この映画はいいです。",
    { en: "いい is the everyday spoken form; its older form よい is used instead whenever the ending changes, as in よかった (was good) or よくない (not good) — いかった and いくない are not used.", id: "いい adalah bentuk lisan sehari-hari; bentuk lamanya よい dipakai setiap kali akhirannya berubah, seperti よかった (dulu bagus) atau よくない (tidak bagus) — いかった dan いくない tidak dipakai." }],
  ["わるい", "warui", { en: "bad", id: "buruk, jelek" }, "きょうは てんきが わるいです。",
    [["きょう", "Kyou"], ["は", "wa"], ["てんき", "tenki"], ["が", "ga"], ["わるい", "warui"], ["です", "desu"]],
    { en: "The weather is bad today.", id: "Cuaca hari ini buruk." }, "悪い", "今日は天気が悪いです。",
    { en: "悪い is a regular i-adjective and the direct opposite of いい/よい — its kanji 悪 also appears in いじわる (意地悪, being mean/unkind).", id: "悪い adalah kata sifat-i biasa dan lawan langsung dari いい/よい — kanji 悪-nya juga muncul pada いじわる (意地悪, bersikap jahat/tidak baik)." }],
  ["ひくい", "hikui", { en: "low, short (height)", id: "rendah" }, "この テーブルは ひくいです。",
    [["この", "Kono"], ["テーブル", "teeburu"], ["は", "wa"], ["ひくい", "hikui"], ["です", "desu"]],
    { en: "This table is low.", id: "Meja ini rendah." }, "低い", "このテーブルは低いです。",
    { en: "低い is the height-only opposite of たかい — it can describe a person's height, a building, or a table, but never a price (for that, use やすい).", id: "低い adalah lawan kata たかい khusus untuk tinggi — bisa menggambarkan tinggi orang, gedung, atau meja, tapi tidak pernah untuk harga (untuk harga, dipakai やすい)." }],
  ["ながい", "nagai", { en: "long", id: "panjang" }, "かのじょは かみが ながいです。",
    [["かのじょ", "Kanojo"], ["は", "wa"], ["かみ", "kami"], ["が", "ga"], ["ながい", "nagai"], ["です", "desu"]],
    { en: "She has long hair.", id: "Rambutnya panjang." }, "長い", "彼女は髪が長いです。",
    { en: "長い is a regular i-adjective for physical length or duration of time — its kanji 長 also appears in しゃちょう (社長, company president, lit. \"company head\").", id: "長い adalah kata sifat-i biasa untuk panjang fisik atau durasi waktu — kanji 長-nya juga muncul pada しゃちょう (社長, direktur perusahaan, secara harfiah \"kepala perusahaan\")." }],
  ["みじかい", "mijikai", { en: "short (length)", id: "pendek" }, "この えんぴつは みじかいです。",
    [["この", "Kono"], ["えんぴつ", "enpitsu"], ["は", "wa"], ["みじかい", "mijikai"], ["です", "desu"]],
    { en: "This pencil is short.", id: "Pensil ini pendek." }, "短い", "この鉛筆は短いです。",
    { en: "短い is the direct opposite of ながい for length or duration — for a person's height, ひくい is used instead, not みじかい.", id: "短い adalah lawan langsung dari ながい untuk panjang atau durasi — untuk tinggi orang, dipakai ひくい, bukan みじかい." }],
  ["おもい", "omoi", { en: "heavy", id: "berat" }, "この かばんは とても おもいです。",
    [["この", "Kono"], ["かばん", "kaban"], ["は", "wa"], ["とても", "totemo"], ["おもい", "omoi"], ["です", "desu"]],
    { en: "This bag is very heavy.", id: "Tas ini sangat berat." }, "重い", "この鞄はとても重いです。",
    { en: "重い is a regular i-adjective and the direct opposite of かるい (light) — its kanji 重 also appears in じゅうよう (重要, important).", id: "重い adalah kata sifat-i biasa dan lawan langsung dari かるい (ringan) — kanji 重-nya juga muncul pada じゅうよう (重要, penting)." }],
  ["かるい", "karui", { en: "light (weight)", id: "ringan" }, "この にもつは かるいです。",
    [["この", "Kono"], ["にもつ", "nimotsu"], ["は", "wa"], ["かるい", "karui"], ["です", "desu"]],
    { en: "This luggage is light.", id: "Barang bawaan ini ringan." }, "軽い", "この荷物は軽いです。",
    { en: "軽い describes physical weight; it can also be used figuratively for something \"light\" in a non-physical sense, like a light meal (かるい しょくじ).", id: "軽い menggambarkan bobot fisik; juga bisa dipakai secara kiasan untuk sesuatu yang \"ringan\" secara non-fisik, seperti makanan ringan (かるい しょくじ)." }],
  ["ひろい", "hiroi", { en: "spacious, wide", id: "luas" }, "この こうえんは ひろいです。",
    [["この", "Kono"], ["こうえん", "kouen"], ["は", "wa"], ["ひろい", "hiroi"], ["です", "desu"]],
    { en: "This park is spacious.", id: "Taman ini luas." }, "広い", "この公園は広いです。",
    { en: "広い is a regular i-adjective and the direct opposite of せまい — its kanji 広 also appears in こうこく (広告, an advertisement).", id: "広い adalah kata sifat-i biasa dan lawan langsung dari せまい — kanji 広-nya juga muncul pada こうこく (広告, iklan)." }],
  ["せまい", "semai", { en: "narrow, cramped", id: "sempit" }, "わたしの へやは せまいです。",
    [["わたし", "Watashi"], ["の", "no"], ["へや", "heya"], ["は", "wa"], ["せまい", "semai"], ["です", "desu"]],
    { en: "My room is cramped.", id: "Kamar saya sempit." }, "狭い", "私の部屋は狭いです。",
    { en: "狭い describes a lack of space — it can apply to a room, a road, or even a narrow-minded view of something.", id: "狭い menggambarkan kurangnya ruang — bisa diterapkan pada kamar, jalan, atau bahkan pandangan yang sempit terhadap sesuatu." }],
  ["あかるい", "akarui", { en: "bright", id: "terang" }, "この へやは あかるいです。",
    [["この", "Kono"], ["へや", "heya"], ["は", "wa"], ["あかるい", "akarui"], ["です", "desu"]],
    { en: "This room is bright.", id: "Kamar ini terang." }, "明るい", "この部屋は明るいです。",
    { en: "明るい can describe light/brightness or, figuratively, a cheerful personality — its kanji 明 also appears in せつめい (説明, an explanation, lit. \"to explain and make clear\").", id: "明るい bisa menggambarkan cahaya/keterangan atau, secara kiasan, kepribadian yang ceria — kanji 明-nya juga muncul pada せつめい (説明, penjelasan, secara harfiah \"menjelaskan hingga jelas\")." }],
  ["くらい", "kurai", { en: "dark", id: "gelap" }, "そとは もう くらいです。",
    [["そと", "Soto"], ["は", "wa"], ["もう", "mou"], ["くらい", "kurai"], ["です", "desu"]],
    { en: "It is already dark outside.", id: "Di luar sudah gelap." }, "暗い", "外はもう暗いです。",
    { en: "暗い is the direct opposite of あかるい — it also describes a gloomy mood, similar to how あかるい can describe a cheerful one.", id: "暗い adalah lawan langsung dari あかるい — juga bisa menggambarkan suasana hati yang suram, mirip bagaimana あかるい menggambarkan suasana hati yang ceria." }],
  ["あかい", "akai", { en: "red", id: "merah" }, "あかい りんごを かいました。",
    [["あかい", "Akai"], ["りんご", "ringo"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a red apple.", id: "Saya membeli apel merah." }, "赤い", "赤いりんごを買いました。",
    { en: "あかい is the i-adjective form used directly before a noun (あかい りんご); the plain noun あか (red) instead needs の to modify a noun, as in あかの りんご is not used — あかい is the natural choice here.", id: "あかい adalah bentuk kata sifat-i yang langsung dipakai di depan kata benda (あかい りんご); kata benda biasa あか (merah) justru butuh の untuk mengubah kata benda, tapi あかの りんご tidak dipakai — あかい adalah pilihan alami di sini." }],
  ["あおい", "aoi", { en: "blue", id: "biru" }, "あおい そらが きれいです。",
    [["あおい", "Aoi"], ["そら", "sora"], ["が", "ga"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "The blue sky is beautiful.", id: "Langit biru itu indah." }, "青い", "青い空がきれいです。",
    { en: "あおい traditionally also covers what English calls \"green\" in some fixed expressions, such as あおしんごう (a green traffic light) — a holdover from an older color classification.", id: "あおい secara tradisional juga mencakup apa yang dalam bahasa Indonesia disebut \"hijau\" pada beberapa ungkapan baku, seperti あおしんごう (lampu lalu lintas hijau) — peninggalan dari klasifikasi warna yang lebih lama." }],
  ["くろい", "kuroi", { en: "black", id: "hitam" }, "くろい かばんを もって います。",
    [["くろい", "Kuroi"], ["かばん", "kaban"], ["を", "wo"], ["もって", "motte"], ["います", "imasu"]],
    { en: "I have a black bag.", id: "Saya membawa tas hitam." }, "黒い", "黒い鞄を持っています。",
    { en: "くろい is the i-adjective form of the color black, directly modifying a noun — the plain noun くろ (black) is used on its own or with の, as in くろの かばん.", id: "くろい adalah bentuk kata sifat-i untuk warna hitam, langsung mengubah kata benda — kata benda biasa くろ (hitam) dipakai sendiri atau dengan の, seperti pada くろの かばん." }],
  ["しろい", "shiroi", { en: "white", id: "putih" }, "しろい ねこが すきです。",
    [["しろい", "Shiroi"], ["ねこ", "neko"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like white cats.", id: "Saya suka kucing putih." }, "白い", "白い猫が好きです。",
    { en: "しろい is the i-adjective form of the color white — like あかい and くろい, it attaches directly to the noun it describes without needing の.", id: "しろい adalah bentuk kata sifat-i untuk warna putih — seperti あかい dan くろい, kata ini langsung menempel pada kata benda yang dijelaskan tanpa perlu の." }],
  ["きいろい", "kiiroi", { en: "yellow", id: "kuning" }, "きいろい はなが さいて います。",
    [["きいろい", "Kiiroi"], ["はな", "hana"], ["が", "ga"], ["さいて", "saite"], ["います", "imasu"]],
    { en: "Yellow flowers are blooming.", id: "Bunga kuning sedang mekar." }, "黄色い", "黄色い花が咲いています。",
    { en: "黄色い combines 黄色 (the noun \"yellow\") + い to form an i-adjective — unlike あか/あお/くろ/しろ, most other colors (like きいろ) can only be nouns and need の before a noun, but きいろい has this special い form.", id: "黄色い menggabungkan 黄色 (kata benda \"kuning\") + い untuk membentuk kata sifat-i — berbeda dari あか/あお/くろ/しろ, sebagian besar warna lain (seperti きいろ) hanya bisa jadi kata benda dan butuh の sebelum kata benda, tapi きいろい punya bentuk い khusus ini." }],
  ["ちゃいろい", "chairoi", { en: "brown", id: "cokelat" }, "ちゃいろい くつを はいて います。",
    [["ちゃいろい", "Chairoi"], ["くつ", "kutsu"], ["を", "wo"], ["はいて", "haite"], ["います", "imasu"]],
    { en: "I am wearing brown shoes.", id: "Saya memakai sepatu berwarna cokelat." }, "茶色い", "茶色い靴を履いています。",
    { en: "茶色い combines 茶色 (the noun \"brown\", lit. \"tea color\") + い, following the same pattern as きいろい to form an i-adjective from a color noun.", id: "茶色い menggabungkan 茶色 (kata benda \"cokelat\", secara harfiah \"warna teh\") + い, mengikuti pola yang sama seperti きいろい untuk membentuk kata sifat-i dari kata benda warna." }]
];

// Sub-Tier 6.2: Kata Sifat-i Cuaca & Sensori (4)
const KOTOBA_N5_CH6_2 = [
  ["あつい", "atsui", { en: "hot (weather)", id: "panas (cuaca)" }, "きょうは とても あついです。",
    [["きょう", "Kyou"], ["は", "wa"], ["とても", "totemo"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "Today is very hot.", id: "Hari ini sangat panas." }, "暑い", "今日はとても暑いです。",
    { en: "暑い specifically describes hot weather or air temperature, while the same reading あつい written 熱い describes a hot object or liquid, like coffee.", id: "暑い secara khusus menggambarkan cuaca atau udara yang panas, sementara bacaan あつい yang sama namun ditulis 熱い menggambarkan benda atau cairan panas, seperti kopi." }],
  ["あつい", "atsui", { en: "hot (to the touch/food)", id: "panas (benda/makanan)" }, "この おちゃは あついです。",
    [["この", "Kono"], ["おちゃ", "ocha"], ["は", "wa"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "This tea is hot.", id: "Teh ini panas." }, "熱い", "このお茶は熱いです。",
    { en: "熱い describes a hot object, food, or liquid — never the weather, which instead uses 暑い even though both are read あつい.", id: "熱い menggambarkan benda, makanan, atau cairan yang panas — tidak pernah untuk cuaca, yang justru memakai 暑い meski keduanya dibaca あつい." }],
  ["さむい", "samui", { en: "cold (weather)", id: "dingin (cuaca)" }, "きょうは さむいです。",
    [["きょう", "Kyou"], ["は", "wa"], ["さむい", "samui"], ["です", "desu"]],
    { en: "Today is cold.", id: "Hari ini dingin." }, "寒い", "今日は寒いです。",
    { en: "寒い is used only for cold weather or air, while つめたい (冷たい) describes a cold object or liquid.", id: "寒い hanya dipakai untuk cuaca atau udara dingin, sedangkan つめたい (冷たい) menggambarkan benda atau cairan yang dingin." }],
  ["おいしい", "oishii", { en: "delicious", id: "enak" }, "この りょうりは とても おいしいです。",
    [["この", "Kono"], ["りょうり", "ryouri"], ["は", "wa"], ["とても", "totemo"], ["おいしい", "oishii"], ["です", "desu"]],
    { en: "This dish is very delicious.", id: "Masakan ini sangat enak." }, "美味しい", "この料理はとても美味しいです。",
    { en: "おいしい is often written in hiragana even by native speakers, since its kanji 美味しい (\"beautiful\" + \"taste\") is considered relatively complex for everyday use.", id: "おいしい sering ditulis dalam hiragana bahkan oleh penutur asli, karena kanjinya 美味しい (\"indah\" + \"rasa\") dianggap cukup rumit untuk pemakaian sehari-hari." }],
  ["いたい", "itai", { en: "painful, hurts", id: "sakit (nyeri)" }, "おなかが いたいです。",
    [["おなか", "Onaka"], ["が", "ga"], ["いたい", "itai"], ["です", "desu"]],
    { en: "My stomach hurts.", id: "Perut saya sakit." }, "痛い", "お腹が痛いです。",
    { en: "痛い is paired with が to mark the body part that hurts, a pattern also used with other sensation words like かゆい (itchy).", id: "痛い berpasangan dengan が untuk menandai bagian tubuh yang sakit, pola yang juga dipakai pada kata sensasi lain seperti かゆい (gatal)." }],
  ["つめたい", "tsumetai", { en: "cold (to the touch)", id: "dingin (benda/sentuhan)" }, "この みずは つめたいです。",
    [["この", "Kono"], ["みず", "mizu"], ["は", "wa"], ["つめたい", "tsumetai"], ["です", "desu"]],
    { en: "This water is cold.", id: "Air ini dingin." }, "冷たい", "この水は冷たいです。",
    { en: "冷たい describes a cold object, food, or liquid — the weather-only counterpart is さむい (寒い), which never describes an object.", id: "冷たい menggambarkan benda, makanan, atau cairan yang dingin — pasangannya khusus cuaca adalah さむい (寒い), yang tidak pernah menggambarkan benda." }],
  ["あたたかい", "atatakai", { en: "warm (weather)", id: "hangat (cuaca)" }, "きょうは あたたかいです。",
    [["きょう", "Kyou"], ["は", "wa"], ["あたたかい", "atatakai"], ["です", "desu"]],
    { en: "Today is warm.", id: "Hari ini hangat." }, "暖かい", "今日は暖かいです。",
    { en: "暖かい describes warm weather or air, following the same weather/object split as 暑い vs 熱い — the object version is written 温かい, read the same way.", id: "暖かい menggambarkan cuaca atau udara yang hangat, mengikuti pembagian cuaca/benda yang sama seperti 暑い vs 熱い — versi bendanya ditulis 温かい, dibaca sama." }],
  ["あたたかい", "atatakai", { en: "warm (food/thing)", id: "hangat (benda/makanan)" }, "この スープは あたたかいです。",
    [["この", "Kono"], ["スープ", "suupu"], ["は", "wa"], ["あたたかい", "atatakai"], ["です", "desu"]],
    { en: "This soup is warm.", id: "Sup ini hangat." }, "温かい", "このスープは温かいです。",
    { en: "温かい describes a warm object, food, or drink — its kanji 温 also appears in おんど (温度, temperature).", id: "温かい menggambarkan benda, makanan, atau minuman yang hangat — kanji 温-nya juga muncul pada おんど (温度, suhu)." }],
  ["すずしい", "suzushii", { en: "cool (weather)", id: "sejuk" }, "あきは すずしいです。",
    [["あき", "Aki"], ["は", "wa"], ["すずしい", "suzushii"], ["です", "desu"]],
    { en: "Autumn is cool.", id: "Musim gugur itu sejuk." }, "涼しい", "秋は涼しいです。",
    { en: "涼しい describes pleasantly cool weather, sitting between あつい (hot) and さむい (cold) — it does not describe a cold object, which instead uses つめたい.", id: "涼しい menggambarkan cuaca sejuk yang menyenangkan, berada di antara あつい (panas) dan さむい (dingin) — tidak dipakai untuk benda dingin, yang memakai つめたい." }],
  ["あまい", "amai", { en: "sweet", id: "manis" }, "この ケーキは あまいです。",
    [["この", "Kono"], ["ケーキ", "keeki"], ["は", "wa"], ["あまい", "amai"], ["です", "desu"]],
    { en: "This cake is sweet.", id: "Kue ini manis." }, "甘い", "このケーキは甘いです。",
    { en: "甘い is a regular i-adjective for sweetness — figuratively it can also mean \"lenient\" or \"soft\", as in someone being too easy-going on rules.", id: "甘い adalah kata sifat-i biasa untuk rasa manis — secara kiasan juga bisa berarti \"lunak\" atau \"terlalu longgar\", seperti seseorang yang terlalu santai pada aturan." }],
  ["からい", "karai", { en: "spicy", id: "pedas" }, "この カレーは からいです。",
    [["この", "Kono"], ["カレー", "karee"], ["は", "wa"], ["からい", "karai"], ["です", "desu"]],
    { en: "This curry is spicy.", id: "Kare ini pedas." }, "辛い", "このカレーは辛いです。",
    { en: "辛い most commonly means spicy-hot, but in some regions and contexts it can also describe a very salty taste — しょっぱい is the more specific word for salty.", id: "辛い paling umum berarti pedas, tetapi di sebagian daerah dan konteks juga bisa menggambarkan rasa yang sangat asin — しょっぱい adalah kata yang lebih spesifik untuk asin." }],
  ["しょっぱい", "shoppai", { en: "salty", id: "asin" }, "この スープは しょっぱいです。",
    [["この", "Kono"], ["スープ", "suupu"], ["は", "wa"], ["しょっぱい", "shoppai"], ["です", "desu"]],
    { en: "This soup is salty.", id: "Sup ini asin." }, "", "このスープはしょっぱいです。",
    { en: "しょっぱい is usually written in hiragana; it specifically means salty, unlike からい which more often means spicy.", id: "しょっぱい biasanya ditulis dalam hiragana; secara khusus berarti asin, berbeda dari からい yang lebih sering berarti pedas." }],
  ["すっぱい", "suppai", { en: "sour", id: "asam" }, "この レモンは すっぱいです。",
    [["この", "Kono"], ["レモン", "remon"], ["は", "wa"], ["すっぱい", "suppai"], ["です", "desu"]],
    { en: "This lemon is sour.", id: "Lemon ini asam." }, "酸っぱい", "このレモンは酸っぱいです。",
    { en: "酸っぱい contains the kanji 酸 (acid), which also appears in さんそ (酸素, oxygen) — the small っ marks a held pause, read すっぱい, not すぱい.", id: "酸っぱい mengandung kanji 酸 (asam), yang juga muncul pada さんそ (酸素, oksigen) — っ kecil menandai jeda tertahan, dibaca すっぱい, bukan すぱい." }],
  ["にがい", "nigai", { en: "bitter", id: "pahit" }, "この コーヒーは にがいです。",
    [["この", "Kono"], ["コーヒー", "koohii"], ["は", "wa"], ["にがい", "nigai"], ["です", "desu"]],
    { en: "This coffee is bitter.", id: "Kopi ini pahit." }, "苦い", "このコーヒーは苦いです。",
    { en: "苦い describes a bitter taste — figuratively it also appears in にがて (苦手, being bad at or having an aversion to something).", id: "苦い menggambarkan rasa pahit — secara kiasan juga muncul pada にがて (苦手, tidak jago atau kurang suka pada sesuatu)." }],
  ["まずい", "mazui", { en: "not tasty, bad-tasting", id: "tidak enak" }, "この りょうりは まずいです。",
    [["この", "Kono"], ["りょうり", "ryouri"], ["は", "wa"], ["まずい", "mazui"], ["です", "desu"]],
    { en: "This dish doesn't taste good.", id: "Masakan ini tidak enak." }, "", "この料理はまずいです。",
    { en: "まずい is the direct opposite of おいしい — it is usually written in hiragana and can sound quite blunt, so it's best avoided when speaking about food someone else made for you.", id: "まずい adalah lawan langsung dari おいしい — biasanya ditulis dalam hiragana dan bisa terdengar cukup kasar, jadi sebaiknya dihindari saat membicarakan makanan buatan orang lain untukmu." }]
];

// Sub-Tier 6.3: Kata Sifat-na & Status (5)
const KOTOBA_N5_CH6_3 = [
  ["すき", "suki (na)", { en: "like", id: "suka" }, "わたしは すしが すきです。",
    [["わたし", "Watashi"], ["は", "wa"], ["すし", "sushi"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like sushi.", id: "Saya suka sushi." }, "好き", "私は寿司が好きです。",
    { en: "すき is a na-adjective, not a verb, even though it's often translated as \"to like\" — grammatically it's closer to English \"is pleasing (to me)\".", id: "すき adalah kata sifat-na, bukan kata kerja, meski sering diterjemahkan \"suka\" — secara tata bahasa lebih dekat ke \"menyenangkan (bagi saya)\"." }],
  ["きらい", "kirai", { en: "dislike, hated", id: "benci, tidak suka" }, "わたしは やさいが きらいです。",
    [["わたし", "Watashi"], ["は", "wa"], ["やさい", "yasai"], ["が", "ga"], ["きらい", "kirai"], ["です", "desu"]],
    { en: "I dislike vegetables.", id: "Saya tidak suka sayuran." }, "嫌い", "私は野菜が嫌いです。",
    { en: "きらい is the opposite na-adjective of すき, and both take the particle が for the thing liked/disliked, not を.", id: "きらい adalah lawan kata sifat-na dari すき, dan keduanya memakai partikel が untuk hal yang disuka/dibenci, bukan を." }],
  ["じょうず", "jouzu", { en: "skillful, good at", id: "pandai, jago" }, "かれは にほんごが じょうずです。",
    [["かれ", "Kare"], ["は", "wa"], ["にほんご", "nihongo"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "He is good at Japanese.", id: "Dia pandai bahasa Jepang." }, "上手", "彼は日本語が上手です。",
    { en: "上手 reuses 上 (up/top) from Tier 4.2's うえ — describing yourself as じょうず can sound boastful, so it's more often used about other people.", id: "上手 memakai kembali 上 (atas) dari うえ pada Tier 4.2 — menyebut diri sendiri じょうず bisa terdengar sombong, jadi kata ini lebih sering dipakai untuk orang lain." }],
  ["きれい", "kirei (na)", { en: "pretty / clean", id: "cantik / bersih" }, "この はなは きれいです。",
    [["この", "Kono"], ["はな", "hana"], ["は", "wa"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "This flower is pretty.", id: "Bunga ini cantik." }, "綺麗", "この花は綺麗です。",
    { en: "きれい is a na-adjective despite ending in い — a common trap for beginners, since it can't conjugate like an i-adjective (きれくない is wrong; きれいじゃない is correct).", id: "きれい adalah kata sifat-na meski berakhiran い — jebakan umum bagi pemula, karena tidak bisa dikonjugasikan seperti kata sifat-i (きれくない salah; きれいじゃない benar)." }],
  ["げんき", "genki", { en: "healthy, energetic", id: "sehat, bersemangat" }, "そふは とても げんきです。",
    [["そふ", "Sofu"], ["は", "wa"], ["とても", "totemo"], ["げんき", "genki"], ["です", "desu"]],
    { en: "My grandfather is very healthy.", id: "Kakek saya sangat sehat." }, "元気", "祖父はとても元気です。",
    { en: "元気 is also used in the common greeting おげんきですか (\"How are you?\"), literally asking about someone's vital energy.", id: "元気 juga dipakai pada sapaan umum おげんきですか (\"Apa kabar?\"), secara harfiah menanyakan energi vital seseorang." }],
  ["しんせつ", "shinsetsu", { en: "kind, friendly", id: "ramah, baik hati" }, "あの ひとは とても しんせつです。",
    [["あの", "Ano"], ["ひと", "hito"], ["は", "wa"], ["とても", "totemo"], ["しんせつ", "shinsetsu"], ["です", "desu"]],
    { en: "That person is very kind.", id: "Orang itu sangat ramah." }, "親切", "あの人はとても親切です。",
    { en: "親切 is a na-adjective combining 親 (intimate) + 切 (earnest) — describing yourself as しんせつ can sound self-praising, so it's usually used about others.", id: "親切 adalah kata sifat-na yang menggabungkan 親 (akrab) + 切 (sungguh-sungguh) — menyebut diri sendiri しんせつ bisa terdengar memuji diri, jadi biasanya dipakai untuk orang lain." }],
  ["べんり", "benri", { en: "convenient", id: "praktis, nyaman" }, "この アプリは べんりです。",
    [["この", "Kono"], ["アプリ", "apuri"], ["は", "wa"], ["べんり", "benri"], ["です", "desu"]],
    { en: "This app is convenient.", id: "Aplikasi ini praktis." }, "便利", "このアプリは便利です。",
    { en: "便利 is a na-adjective and the direct opposite of ふべん — its kanji 便 also appears in ゆうびん (郵便, mail/postal service).", id: "便利 adalah kata sifat-na dan lawan langsung dari ふべん — kanji 便-nya juga muncul pada ゆうびん (郵便, layanan pos)." }],
  ["ふべん", "fuben", { en: "inconvenient", id: "tidak praktis, sulit" }, "この まちは こうつうが ふべんです。",
    [["この", "Kono"], ["まち", "machi"], ["は", "wa"], ["こうつう", "koutsuu"], ["が", "ga"], ["ふべん", "fuben"], ["です", "desu"]],
    { en: "Transportation in this town is inconvenient.", id: "Transportasi di kota ini tidak praktis." }, "不便", "この町は交通が不便です。",
    { en: "不便 adds the negating prefix 不 (not) to 便 — the same 不 prefix pattern also appears in ふあん (不安, uneasy) and ふまん (不満, dissatisfaction).", id: "不便 menambahkan awalan negasi 不 (tidak) pada 便 — pola awalan 不 yang sama juga muncul pada ふあん (不安, gelisah) dan ふまん (不満, tidak puas)." }],
  ["ゆうめい", "yuumei", { en: "famous", id: "terkenal" }, "かれは ゆうめいな かしゅです。",
    [["かれ", "Kare"], ["は", "wa"], ["ゆうめい", "yuumei"], ["な", "na"], ["かしゅ", "kashu"], ["です", "desu"]],
    { en: "He is a famous singer.", id: "Dia penyanyi yang terkenal." }, "有名", "彼は有名な歌手です。",
    { en: "有名 combines 有 (have/exist) + 名 (name) — literally \"having a name\", the same 名 seen in なまえ (name).", id: "有名 menggabungkan 有 (memiliki) + 名 (nama) — secara harfiah \"memiliki nama\", 名 yang sama muncul pada なまえ (nama)." }],
  ["しずか", "shizuka", { en: "quiet", id: "tenang, sunyi" }, "この としょかんは しずかです。",
    [["この", "Kono"], ["としょかん", "toshokan"], ["は", "wa"], ["しずか", "shizuka"], ["です", "desu"]],
    { en: "This library is quiet.", id: "Perpustakaan ini tenang." }, "静か", "この図書館は静かです。",
    { en: "静か is a na-adjective and the direct opposite of にぎやか — its kanji 静 also appears in あんせい (安静, resting quietly, esp. medically).", id: "静か adalah kata sifat-na dan lawan langsung dari にぎやか — kanji 静-nya juga muncul pada あんせい (安静, beristirahat dengan tenang, terutama secara medis)." }],
  ["にぎやか", "nigiyaka", { en: "lively, bustling", id: "ramai, meriah" }, "この まちは にぎやかです。",
    [["この", "Kono"], ["まち", "machi"], ["は", "wa"], ["にぎやか", "nigiyaka"], ["です", "desu"]],
    { en: "This town is lively.", id: "Kota ini ramai." }, "賑やか", "この町は賑やかです。",
    { en: "賑やか describes a place full of energetic activity and noise, in a positive sense — its kanji 賑 is relatively rare, so it's often written in hiragana.", id: "賑やか menggambarkan tempat yang penuh aktivitas dan suara, dalam nuansa positif — kanji 賑-nya cukup jarang dipakai, jadi sering ditulis dalam hiragana." }],
  ["ひま", "hima", { en: "free, not busy", id: "senggang, luang" }, "きょうは ひまです。",
    [["きょう", "Kyou"], ["は", "wa"], ["ひま", "hima"], ["です", "desu"]],
    { en: "I am free today.", id: "Hari ini saya senggang." }, "暇", "今日は暇です。",
    { en: "暇 is a na-adjective and the direct opposite of いそがしい — it can also be used as a noun meaning free time, as in ひまが ない (\"there's no free time\").", id: "暇 adalah kata sifat-na dan lawan langsung dari いそがしい — juga bisa dipakai sebagai kata benda berarti waktu luang, seperti pada ひまが ない (\"tidak ada waktu luang\")." }],
  ["いそがしい", "isogashii", { en: "busy", id: "sibuk" }, "らいしゅうは とても いそがしいです。",
    [["らいしゅう", "Raishuu"], ["は", "wa"], ["とても", "totemo"], ["いそがしい", "isogashii"], ["です", "desu"]],
    { en: "Next week is very busy.", id: "Minggu depan sangat sibuk." }, "忙しい", "来週はとても忙しいです。",
    { en: "Unlike the other words in this Sub-Tier, 忙しい is an i-adjective, not a na-adjective — it's grouped here since it's most often paired with, and is the opposite of, ひま (free/not busy).", id: "Berbeda dari kata lain di Sub-Tier ini, 忙しい adalah kata sifat-i, bukan kata sifat-na — dikelompokkan di sini karena paling sering dipasangkan dengan, dan menjadi lawan kata dari, ひま (senggang/tidak sibuk)." }],
  ["ハンサム", "hansamu", { en: "handsome", id: "tampan" }, "かれは ハンサムです。",
    [["かれ", "Kare"], ["は", "wa"], ["ハンサム", "hansamu"], ["です", "desu"]],
    { en: "He is handsome.", id: "Dia tampan." }, "", "彼はハンサムです。",
    { en: "From English \"handsome\" — a na-adjective used only for men; for women, きれい (pretty) is the usual word instead.", id: "Dari bahasa Inggris \"handsome\" — kata sifat-na yang hanya dipakai untuk laki-laki; untuk perempuan, biasanya dipakai kata きれい (cantik)." }],
  ["かんたん", "kantan", { en: "easy, simple", id: "mudah, sederhana" }, "この もんだいは かんたんです。",
    [["この", "Kono"], ["もんだい", "mondai"], ["は", "wa"], ["かんたん", "kantan"], ["です", "desu"]],
    { en: "This problem is easy.", id: "Soal ini mudah." }, "簡単", "この問題は簡単です。",
    { en: "簡単 is a na-adjective and the direct opposite of たいへん (in the sense of \"difficult\") — its kanji 単 also appears in たんご (単語, a vocabulary word).", id: "簡単 adalah kata sifat-na dan lawan langsung dari たいへん (dalam makna \"sulit\") — kanji 単-nya juga muncul pada たんご (単語, kosakata)." }],
  ["たいへん", "taihen", { en: "hard, tough, serious", id: "berat, sulit, sukar" }, "この しごとは たいへんです。",
    [["この", "Kono"], ["しごと", "shigoto"], ["は", "wa"], ["たいへん", "taihen"], ["です", "desu"]],
    { en: "This job is tough.", id: "Pekerjaan ini berat." }, "大変", "この仕事は大変です。",
    { en: "大変 is a na-adjective meaning difficult or a serious struggle — it's also commonly used as an adverb meaning \"very\", as in たいへん ありがとうございます.", id: "大変 adalah kata sifat-na berarti sulit atau perjuangan berat — juga umum dipakai sebagai kata keterangan berarti \"sangat\", seperti pada たいへん ありがとうございます." }],
  ["へた", "heta", { en: "unskillful, poor at", id: "tidak pandai, ceroboh" }, "わたしは りょうりが へたです。",
    [["わたし", "Watashi"], ["は", "wa"], ["りょうり", "ryouri"], ["が", "ga"], ["へた", "heta"], ["です", "desu"]],
    { en: "I am bad at cooking.", id: "Saya tidak pandai memasak." }, "下手", "私は料理が下手です。",
    { en: "下手 is the direct opposite of じょうず and reuses 下 (down/below) from した in Tier 4.2 — unlike じょうず, it's fine to describe yourself as へた without sounding boastful.", id: "下手 adalah lawan langsung dari じょうず dan memakai kembali 下 (bawah) dari した pada Tier 4.2 — berbeda dari じょうず, menyebut diri sendiri へた tidak terdengar sombong." }],
  ["いろいろ", "iroiro", { en: "various, all kinds of", id: "bermacam-macam, beragam" }, "この みせには いろいろな ほんが あります。",
    [["この", "Kono"], ["みせ", "mise"], ["に", "ni"], ["は", "wa"], ["いろいろ", "iroiro"], ["な", "na"], ["ほん", "hon"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "This shop has all kinds of books.", id: "Toko ini punya bermacam-macam buku." }, "色々", "この店には色々な本があります。",
    { en: "色々 combines 色 (color) repeated twice — literally \"various colors\", extended to mean \"various\" or \"all sorts of\" in general.", id: "色々 menggabungkan 色 (warna) yang diulang dua kali — secara harfiah \"berbagai warna\", diperluas maknanya menjadi \"bermacam-macam\" atau \"beraneka ragam\" secara umum." }],
  ["だいじょうぶ", "daijoubu", { en: "all right, okay", id: "tidak apa-apa, aman" }, "だいじょうぶですか。",
    [["だいじょうぶ", "Daijoubu"], ["です", "desu"], ["か", "ka"]],
    { en: "Are you all right?", id: "Apakah kamu baik-baik saja?" }, "大丈夫", "大丈夫ですか。",
    { en: "だいじょうぶ is one of the most commonly used na-adjectives in daily conversation, used both to ask if someone is okay and to reassure someone that something is fine.", id: "だいじょうぶ adalah salah satu kata sifat-na yang paling sering dipakai dalam percakapan sehari-hari, dipakai baik untuk menanyakan keadaan seseorang maupun untuk meyakinkan bahwa sesuatu baik-baik saja." }],
  ["たいせつ", "taisetsu", { en: "important, precious", id: "penting, berharga" }, "かぞくは わたしに とって たいせつです。",
    [["かぞく", "Kazoku"], ["は", "wa"], ["わたし", "watashi"], ["に", "ni"], ["とって", "totte"], ["たいせつ", "taisetsu"], ["です", "desu"]],
    { en: "Family is important to me.", id: "Keluarga itu penting bagi saya." }, "大切", "家族は私にとって大切です。",
    { en: "大切 is a na-adjective often used with に とって (\"for/to [someone]\") to state what matters to a person — its kanji 切 also appears in しんせつ (kind, earlier in this Sub-Tier).", id: "大切 adalah kata sifat-na yang sering dipakai bersama に とって (\"bagi [seseorang]\") untuk menyatakan apa yang penting bagi seseorang — kanji 切-nya juga muncul pada しんせつ (ramah, sebelumnya di Sub-Tier ini)." }],
  ["あんぜん", "anzen", { en: "safe", id: "aman" }, "この みちは あんぜんです。",
    [["この", "Kono"], ["みち", "michi"], ["は", "wa"], ["あんぜん", "anzen"], ["です", "desu"]],
    { en: "This road is safe.", id: "Jalan ini aman." }, "安全", "この道は安全です。",
    { en: "安全 is a na-adjective and the direct opposite of きけん — its kanji 安 also appears in やすい (安い, cheap), both sharing a sense of \"ease\" or \"security\".", id: "安全 adalah kata sifat-na dan lawan langsung dari きけん — kanji 安-nya juga muncul pada やすい (安い, murah), keduanya berbagi nuansa \"ketenangan\" atau \"keamanan\"." }],
  ["きけん", "kiken", { en: "dangerous", id: "berbahaya" }, "この かわは きけんです。",
    [["この", "Kono"], ["かわ", "kawa"], ["は", "wa"], ["きけん", "kiken"], ["です", "desu"]],
    { en: "This river is dangerous.", id: "Sungai ini berbahaya." }, "危険", "この川は危険です。",
    { en: "危険 is a na-adjective often seen on warning signs — its kanji 危 also appears in あぶない (危ない), a more everyday i-adjective with a similar meaning.", id: "危険 adalah kata sifat-na yang sering muncul pada papan peringatan — kanji 危-nya juga muncul pada あぶない (危ない), kata sifat-i yang lebih umum dipakai sehari-hari dengan makna serupa." }]
];

// Sub-Tier 7.1: Alam & Cuaca (5)
const KOTOBA_N5_CH7_1 = [
  ["てんき", "tenki", { en: "weather", id: "cuaca" }, "きょうの てんきは いいです。",
    [["きょう", "Kyou"], ["の", "no"], ["てんき", "tenki"], ["は", "wa"], ["いい", "ii"], ["です", "desu"]],
    { en: "Today's weather is nice.", id: "Cuaca hari ini bagus." }, "天気", "今日の天気はいいです。",
    { en: "天気 combines 天 (heaven/sky) + 気 (energy/spirit) — the same 気 appears in げんき (healthy, Tier 6.3) and びょうき (sickness).", id: "天気 menggabungkan 天 (langit) + 気 (energi/semangat) — 気 yang sama muncul pada げんき (sehat, Tier 6.3) dan びょうき (sakit)." }],
  ["あめ", "ame", { en: "rain", id: "hujan" }, "きょうは あめが ふっています。",
    [["きょう", "Kyou"], ["は", "wa"], ["あめ", "ame"], ["が", "ga"], ["ふっています", "futteimasu"]],
    { en: "It is raining today.", id: "Hari ini sedang hujan." }, "雨", "今日は雨が降っています。",
    { en: "雨 is also the radical (あめかんむり) found atop related weather kanji like 雪 (snow) and 雲 (cloud).", id: "雨 juga menjadi radikal (あめかんむり) yang berada di bagian atas kanji cuaca terkait seperti 雪 (salju) dan 雲 (awan)." }],
  ["やま", "yama", { en: "mountain", id: "gunung" }, "ふじさんに のぼりたいです。",
    [["ふじさん", "Fujisan"], ["に", "ni"], ["のぼりたい", "noboritai"], ["です", "desu"]],
    { en: "I want to climb Mt. Fuji.", id: "Saya ingin mendaki Gunung Fuji." }, "山", "富士山に登りたいです。",
    { en: "山 appears as a suffix in many mountain names, such as ふじさん (Mt. Fuji) — where さん is simply the on'yomi reading of 山.", id: "山 muncul sebagai akhiran pada banyak nama gunung, seperti ふじさん (Gunung Fuji) — di mana さん adalah bacaan on'yomi dari 山." }],
  ["かわ", "kawa", { en: "river", id: "sungai" }, "かわで さかなを つりました。",
    [["かわ", "Kawa"], ["で", "de"], ["さかな", "sakana"], ["を", "wo"], ["つりました", "tsurimashita"]],
    { en: "I caught fish in the river.", id: "Saya memancing ikan di sungai." }, "川", "川で魚を釣りました。",
    { en: "川's simplified shape of three vertical strokes visually represents flowing water — one of the clearest pictographic kanji in the N5 list.", id: "Bentuk 川 yang sederhana dengan tiga goresan vertikal secara visual menggambarkan aliran air — salah satu kanji piktografis paling jelas dalam daftar N5." }],
  ["そら", "sora", { en: "sky", id: "langit" }, "そらが とても きれいです。",
    [["そら", "Sora"], ["が", "ga"], ["とても", "totemo"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "The sky is very beautiful.", id: "Langitnya sangat indah." }, "空", "空がとても綺麗です。",
    { en: "空 also means \"empty\", as in くうこう (airport, lit. \"empty harbor\" for aircraft) — the same kanji read くう in that compound.", id: "空 juga berarti \"kosong\", seperti pada くうこう (bandara, secara harfiah \"pelabuhan kosong\" untuk pesawat) — kanji yang sama dibaca くう pada kata majemuk itu." }],
  ["かぜ", "kaze", { en: "wind", id: "angin" }, "きょうは かぜが つよいです。",
    [["きょう", "Kyou"], ["は", "wa"], ["かぜ", "kaze"], ["が", "ga"], ["つよい", "tsuyoi"], ["です", "desu"]],
    { en: "The wind is strong today.", id: "Anginnya kencang hari ini." }, "風", "今日は風が強いです。",
    { en: "風 is a homophone of かぜ (風邪, a cold/flu) — context and kanji tell them apart, since \"wind\" and \"a cold\" are written differently despite sounding the same.", id: "風 adalah homofon dari かぜ (風邪, flu/masuk angin) — konteks dan kanji yang membedakan keduanya, karena \"angin\" dan \"flu\" ditulis berbeda meski terdengar sama." }],
  ["ゆき", "yuki", { en: "snow", id: "salju" }, "ふゆは ゆきが ふります。",
    [["ふゆ", "Fuyu"], ["は", "wa"], ["ゆき", "yuki"], ["が", "ga"], ["ふります", "furimasu"]],
    { en: "It snows in winter.", id: "Di musim dingin turun salju." }, "雪", "冬は雪が降ります。",
    { en: "雪 uses the same verb ふる (to fall) as あめ (rain) — both weather nouns pair with が ふります for \"it rains/snows\".", id: "雪 memakai kata kerja yang sama, ふる (turun), seperti あめ (hujan) — kedua kata benda cuaca ini berpasangan dengan が ふります untuk \"turun hujan/salju\"." }],
  ["たいよう", "taiyou", { en: "the sun", id: "matahari" }, "たいようが のぼりました。",
    [["たいよう", "Taiyou"], ["が", "ga"], ["のぼりました", "noborimashita"]],
    { en: "The sun rose.", id: "Matahari terbit." }, "太陽", "太陽が昇りました。",
    { en: "太陽 combines 太 (great/thick) + 陽 (sunshine/yang) — the same のぼる (to rise) used for climbing mountains is also used for the sun and moon rising.", id: "太陽 menggabungkan 太 (besar/tebal) + 陽 (sinar/yang) — kata のぼる (naik) yang sama dipakai untuk mendaki gunung juga dipakai untuk terbitnya matahari dan bulan." }],
  ["つき", "tsuki", { en: "the moon", id: "bulan" }, "こんばんは つきが きれいです。",
    [["こんばん", "Konban"], ["は", "wa"], ["つき", "tsuki"], ["が", "ga"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "Tonight the moon is beautiful.", id: "Malam ini bulannya indah." }, "月", "今晩は月がきれいです。",
    { en: "月 also means \"month\" when used with numbers, as in いちがつ (January, lit. \"first moon\") — the calendar month and the moon share this kanji because months were once tracked by lunar cycles.", id: "月 juga berarti \"bulan\" (satuan waktu) ketika dipakai dengan angka, seperti pada いちがつ (Januari, secara harfiah \"bulan pertama\") — bulan kalender dan bulan di langit berbagi kanji ini karena dulu bulan dihitung berdasarkan siklus bulan." }],
  ["ほし", "hoshi", { en: "star", id: "bintang" }, "そらに ほしが たくさん あります。",
    [["そら", "Sora"], ["に", "ni"], ["ほし", "hoshi"], ["が", "ga"], ["たくさん", "takusan"], ["あります", "arimasu"]],
    { en: "There are many stars in the sky.", id: "Ada banyak bintang di langit." }, "星", "空に星がたくさんあります。",
    { en: "星 combines 日 (sun/day, in its 生 variant here as a phonetic component) with a meaning of a shining celestial body — it also appears in ほしぞら (星空, a starry sky).", id: "星 memiliki komponen makna benda langit yang bersinar — kanji ini juga muncul pada ほしぞら (星空, langit berbintang)." }],
  ["き", "ki", { en: "tree, wood", id: "pohon, kayu" }, "にわに おおきい きが あります。",
    [["にわ", "Niwa"], ["に", "ni"], ["おおきい", "ookii"], ["き", "ki"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a big tree in the yard.", id: "Ada pohon besar di halaman." }, "木", "庭に大きい木があります。",
    { en: "木's simple shape of a trunk with branches is another clear pictographic kanji — doubled it becomes 林 (woods) and tripled, 森 (forest).", id: "Bentuk 木 yang sederhana berupa batang dengan cabang adalah kanji piktografis lain yang jelas — jika digandakan menjadi 林 (rimba kecil) dan ditriplekan menjadi 森 (hutan)." }],
  ["はな", "hana", { en: "flower", id: "bunga" }, "はなが さいて います。",
    [["はな", "Hana"], ["が", "ga"], ["さいて", "saite"], ["います", "imasu"]],
    { en: "Flowers are blooming.", id: "Bunga sedang mekar." }, "花", "花が咲いています。",
    { en: "花 is a homophone of はな (鼻, nose) — completely different kanji and meaning, so context makes the distinction clear.", id: "花 adalah homofon dari はな (鼻, hidung) — kanji dan maknanya sama sekali berbeda, jadi konteks yang memperjelas perbedaannya." }],
  ["うみ", "umi", { en: "sea, ocean", id: "laut" }, "なつは うみへ いきます。",
    [["なつ", "Natsu"], ["は", "wa"], ["うみ", "umi"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "In summer I go to the sea.", id: "Di musim panas saya pergi ke laut." }, "海", "夏は海へ行きます。",
    { en: "海 contains the water radical 氵on its left side, the same radical found in かわ (川's related compound forms) and みず (water) related kanji.", id: "海 mengandung radikal air 氵 di sisi kirinya, radikal yang sama ditemukan pada kanji terkait air lainnya." }],
  ["いけ", "ike", { en: "pond", id: "kolam" }, "こうえんの いけに こいが います。",
    [["こうえん", "Kouen"], ["の", "no"], ["いけ", "ike"], ["に", "ni"], ["こい", "koi"], ["が", "ga"], ["います", "imasu"]],
    { en: "There are koi in the park's pond.", id: "Ada ikan koi di kolam taman itu." }, "池", "公園の池に鯉がいます。",
    { en: "池 also contains the water radical 氵— it describes a smaller body of still water than かわ (river) or うみ (sea).", id: "池 juga mengandung radikal air 氵 — menggambarkan tubuh air tenang yang lebih kecil dibandingkan かわ (sungai) atau うみ (laut)." }],
  ["しま", "shima", { en: "island", id: "pulau" }, "にほんは しまの くにです。",
    [["にほん", "Nihon"], ["は", "wa"], ["しま", "shima"], ["の", "no"], ["くに", "kuni"], ["です", "desu"]],
    { en: "Japan is a country of islands.", id: "Jepang adalah negara kepulauan." }, "島", "日本は島の国です。",
    { en: "島 often appears as a suffix in place names, such as ひろしま (Hiroshima, lit. \"wide island\") and かごしま (Kagoshima).", id: "島 sering muncul sebagai akhiran pada nama tempat, seperti ひろしま (Hiroshima, secara harfiah \"pulau luas\") dan かごしま (Kagoshima)." }],
  ["はる", "haru", { en: "spring", id: "musim semi" }, "はるは さくらが きれいです。",
    [["はる", "Haru"], ["は", "wa"], ["さくら", "sakura"], ["が", "ga"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "In spring, the cherry blossoms are beautiful.", id: "Di musim semi, bunga sakura indah." }, "春", "春は桜がきれいです。",
    { en: "春 marks the start of the Japanese school and fiscal year in April, making it strongly associated with new beginnings, not just warm weather.", id: "春 menandai awal tahun ajaran dan tahun fiskal Jepang di bulan April, sehingga sangat terkait dengan awal yang baru, bukan sekadar cuaca hangat." }],
  ["なつ", "natsu", { en: "summer", id: "musim panas" }, "なつは あついです。",
    [["なつ", "Natsu"], ["は", "wa"], ["あつい", "atsui"], ["です", "desu"]],
    { en: "Summer is hot.", id: "Musim panas itu panas." }, "夏", "夏は暑いです。",
    { en: "なつ pairs naturally with なつやすみ (summer vacation), one of the longest school breaks of the year in Japan.", id: "なつ berpasangan alami dengan なつやすみ (libur musim panas), salah satu libur sekolah terpanjang di Jepang dalam setahun." }],
  ["あき", "aki", { en: "autumn", id: "musim gugur" }, "あきは もみじが きれいです。",
    [["あき", "Aki"], ["は", "wa"], ["もみじ", "momiji"], ["が", "ga"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "In autumn, the maple leaves are beautiful.", id: "Di musim gugur, daun maple indah." }, "秋", "秋はもみじがきれいです。",
    { en: "あき is closely associated with もみじ (autumn leaves) and しょくよくの あき (autumn, the season of good appetite), a common seasonal expression.", id: "あき sangat terkait dengan もみじ (daun musim gugur) dan しょくよくの あき (musim gugur, musim nafsu makan), ungkapan musiman yang umum." }],
  ["ふゆ", "fuyu", { en: "winter", id: "musim dingin" }, "ふゆは ゆきが ふります。",
    [["ふゆ", "Fuyu"], ["は", "wa"], ["ゆき", "yuki"], ["が", "ga"], ["ふります", "furimasu"]],
    { en: "In winter, it snows.", id: "Di musim dingin, salju turun." }, "冬", "冬は雪が降ります。",
    { en: "ふる (to fall) is used for both rain and snow in Japanese — あめが ふる (it rains) and ゆきが ふる (it snows) share the same verb.", id: "ふる (jatuh/turun) dipakai baik untuk hujan maupun salju dalam bahasa Jepang — あめが ふる (hujan turun) dan ゆきが ふる (salju turun) berbagi kata kerja yang sama." }]
];

// Sub-Tier 7.2: Warna (12)
const KOTOBA_N5_CH7_2 = [
  ["あか", "aka", { en: "red", id: "merah" }, "あかい かばんを かいました。",
    [["あかい", "Akai"], ["かばん", "kaban"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a red bag.", id: "Saya membeli tas merah." }, "赤", "赤い鞄を買いました。",
    { en: "As a plain noun the word is あか, but describing a noun directly it becomes the i-adjective あかい (赤い), the form used in this example.", id: "Sebagai kata benda biasa katanya adalah あか, tetapi untuk menggambarkan kata benda secara langsung berubah menjadi kata sifat-i あかい (赤い), bentuk yang dipakai dalam contoh ini." }],
  ["あお", "ao", { en: "blue", id: "biru" }, "そらが あおいです。",
    [["そら", "Sora"], ["が", "ga"], ["あおい", "aoi"], ["です", "desu"]],
    { en: "The sky is blue.", id: "Langit berwarna biru." }, "青", "空が青いです。",
    { en: "青 traditionally covers both \"blue\" and \"green\" in Japanese, which is why a green traffic light is called あおしんごう even though it looks green.", id: "青 secara tradisional mencakup makna \"biru\" maupun \"hijau\" dalam bahasa Jepang, sehingga lampu lalu lintas hijau disebut あおしんごう meski warnanya hijau." }],
  ["きいろ", "kiiro", { en: "yellow", id: "kuning" }, "きいろい はなが さいて います。",
    [["きいろい", "Kiiroi"], ["はな", "hana"], ["が", "ga"], ["さいて", "saite"], ["います", "imasu"]],
    { en: "Yellow flowers are blooming.", id: "Bunga kuning sedang mekar." }, "黄色", "黄色い花が咲いています。",
    { en: "Like あか and あお, きいろ becomes an i-adjective by adding い: きいろい (黄色い) — but unlike them, きいろ itself is already a compound of 黄 (yellow) + 色 (color).", id: "Seperti あか dan あお, きいろ menjadi kata sifat-i dengan menambahkan い: きいろい (黄色い) — namun berbeda dari keduanya, きいろ sendiri sudah merupakan gabungan dari 黄 (kuning) + 色 (warna)." }],
  ["しろ", "shiro", { en: "white", id: "putih" }, "しろい シャツを きています。",
    [["しろい", "Shiroi"], ["シャツ", "shatsu"], ["を", "wo"], ["きています", "kiteimasu"]],
    { en: "I am wearing a white shirt.", id: "Saya memakai kemeja putih." }, "白", "白いシャツを着ています。",
    { en: "白 pairs with くろ (black) as two of Japan's oldest recognized color terms, both usable as either nouns or i-adjectives (しろい/くろい).", id: "白 berpasangan dengan くろ (hitam) sebagai dua istilah warna tertua dalam bahasa Jepang, keduanya bisa dipakai sebagai kata benda maupun kata sifat-i (しろい/くろい)." }],
  ["くろ", "kuro", { en: "black", id: "hitam" }, "くろい ねこが います。",
    [["くろい", "Kuroi"], ["ねこ", "neko"], ["が", "ga"], ["います", "imasu"]],
    { en: "There is a black cat.", id: "Ada kucing hitam." }, "黒", "黒い猫がいます。",
    { en: "くろ also appears in real-world terms like くろじ (黒字, being profitable, lit. \"black characters\"), borrowed from accounting terminology.", id: "くろ juga muncul pada istilah nyata seperti くろじ (黒字, untung, secara harfiah \"huruf hitam\"), dipinjam dari istilah akuntansi." }],
  ["はいいろ", "haiiro", { en: "gray", id: "abu-abu" }, "そらが はいいろに なりました。",
    [["そら", "Sora"], ["が", "ga"], ["はいいろ", "haiiro"], ["に", "ni"], ["なりました", "narimashita"]],
    { en: "The sky turned gray.", id: "Langitnya menjadi abu-abu." }, "灰色", "空が灰色になりました。",
    { en: "灰色 combines 灰 (ash) + 色 (color) — literally \"ash-color\", since burnt ash is the classic reference point for this shade in Japanese, similar to English \"ash gray\".", id: "灰色 menggabungkan 灰 (abu) + 色 (warna) — secara harfiah \"warna abu\", karena abu bakaran adalah rujukan klasik untuk warna ini dalam bahasa Jepang, mirip \"ash gray\" dalam bahasa Inggris." }],
  ["みどり", "midori", { en: "green", id: "hijau" }, "こうえんは みどりが おおいです。",
    [["こうえん", "Kouen"], ["は", "wa"], ["みどり", "midori"], ["が", "ga"], ["おおい", "ooi"], ["です", "desu"]],
    { en: "The park has a lot of green.", id: "Taman itu banyak warna hijau (tumbuhan)." }, "緑", "公園は緑が多いです。",
    { en: "みどり is a pure noun with no common i-adjective form — to describe something as green, Japanese often uses みどりの or borrows あおい (see the あお note in this tier).", id: "みどり adalah kata benda murni dan tidak memiliki bentuk kata sifat-i yang umum — untuk menggambarkan sesuatu berwarna hijau, bahasa Jepang sering memakai みどりの atau meminjam あおい (lihat catatan あお di tingkatan ini)." }],
  ["むらさき", "murasaki", { en: "purple", id: "ungu" }, "むらさきの はなが すきです。",
    [["むらさき", "Murasaki"], ["の", "no"], ["はな", "hana"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like purple flowers.", id: "Saya suka bunga berwarna ungu." }, "紫", "紫の花が好きです。",
    { en: "紫 was historically Japan's most prestigious color, reserved for the highest court ranks under the ancient cap-rank system — a status still echoed in its refined image today.", id: "紫 secara historis adalah warna paling terhormat di Jepang, dikhususkan untuk pangkat istana tertinggi dalam sistem pangkat topi kuno — status yang masih tercermin dalam kesan elegannya hingga kini." }],
  ["ちゃいろ", "chairo", { en: "brown", id: "cokelat" }, "ちゃいろの かばんが すきです。",
    [["ちゃいろ", "Chairo"], ["の", "no"], ["かばん", "kaban"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like the brown bag.", id: "Saya suka tas berwarna cokelat." }, "茶色", "茶色の鞄が好きです。",
    { en: "茶色 combines 茶 (tea) + 色 (color) — literally \"tea-color\", since brewed tea's shade inspired the name; unlike きいろ, it usually stays a noun and needs の before another noun.", id: "茶色 menggabungkan 茶 (teh) + 色 (warna) — secara harfiah \"warna teh\", karena warna teh yang diseduh menginspirasi namanya; berbeda dari きいろ, biasanya tetap berupa kata benda dan memerlukan の sebelum kata benda lain." }],
  ["オレンジ", "orenji", { en: "orange", id: "oranye" }, "オレンジいろの ゆうひが きれいです。",
    [["オレンジいろ", "Orenji-iro"], ["の", "no"], ["ゆうひ", "yuuhi"], ["が", "ga"], ["きれい", "kirei"], ["です", "desu"]],
    { en: "The orange sunset is beautiful.", id: "Matahari terbenam berwarna oranye itu indah." }, "", "オレンジ色の夕日が綺麗です。",
    { en: "オレンジ names both the fruit and the color; when specifying the color alone, it's common to add 色 as in オレンジいろ (orange-colored) to avoid confusion with the fruit.", id: "オレンジ menyebut baik buahnya maupun warnanya; ketika secara khusus menyebut warnanya saja, umum ditambahkan 色 seperti pada オレンジいろ (berwarna oranye) untuk menghindari kerancuan dengan buahnya." }],
  ["ピンク", "pinku", { en: "pink", id: "merah muda / pink" }, "ピンクの ふくが かわいいです。",
    [["ピンク", "Pinku"], ["の", "no"], ["ふく", "fuku"], ["が", "ga"], ["かわいい", "kawaii"], ["です", "desu"]],
    { en: "The pink clothes are cute.", id: "Baju berwarna pink itu lucu." }, "", "ピンクの服が可愛いです。",
    { en: "ピンク is a loanword from English \"pink\" and is always written in katakana — it has no traditional kanji or native Japanese equivalent.", id: "ピンク adalah kata serapan dari bahasa Inggris \"pink\" dan selalu ditulis dalam katakana — kata ini tidak memiliki kanji tradisional atau padanan asli bahasa Jepang." }],
  ["きんいろ", "kin'iro", { en: "gold (color)", id: "warna emas" }, "きんいろの ゆびわを かいました。",
    [["きんいろ", "Kin'iro"], ["の", "no"], ["ゆびわ", "yubiwa"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought a gold-colored ring.", id: "Saya membeli cincin berwarna emas." }, "金色", "金色の指輪を買いました。",
    { en: "金色 combines 金 (gold/metal) + 色 (color) — the same 金 also means \"money\" in everyday words like おかね (お金), since gold has long symbolized wealth.", id: "金色 menggabungkan 金 (emas/logam) + 色 (warna) — 金 yang sama juga berarti \"uang\" dalam kata sehari-hari seperti おかね (お金), karena emas sejak lama melambangkan kekayaan." }],
  ["ぎんいろ", "gin'iro", { en: "silver (color)", id: "warna perak" }, "ぎんいろの くるまが すきです。",
    [["ぎんいろ", "Gin'iro"], ["の", "no"], ["くるま", "kuruma"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like silver-colored cars.", id: "Saya suka mobil berwarna perak." }, "銀色", "銀色の車が好きです。",
    { en: "銀色 combines 銀 (silver) + 色 (color) — きんいろ and ぎんいろ are a natural pair, and like ちゃいろ and オレンジいろ, both always take の before the noun they describe.", id: "銀色 menggabungkan 銀 (perak) + 色 (warna) — きんいろ dan ぎんいろ adalah pasangan alami, dan seperti ちゃいろ dan オレンジいろ, keduanya selalu memakai の sebelum kata benda yang dijelaskan." }],
  ["いろ", "iro", { en: "color", id: "warna" }, "どの いろが すきですか。",
    [["どの", "Dono"], ["いろ", "iro"], ["が", "ga"], ["すき", "suki"], ["です", "desu"], ["か", "ka"]],
    { en: "Which color do you like?", id: "Kamu suka warna apa?" }, "色", "どの色が好きですか。",
    { en: "色 is the general word for \"color\" and the building block behind every color-noun compound in this tier — きいろ, ちゃいろ, はいいろ, and オレンジいろ all end with this same kanji.", id: "色 adalah kata umum untuk \"warna\" dan unsur pembentuk di balik setiap kata gabungan warna di tingkatan ini — きいろ, ちゃいろ, はいいろ, dan オレンジいろ semuanya diakhiri dengan kanji yang sama ini." }]
];

// Sub-Tier 7.3: Kata Tanya & Kata Keterangan (21)
const KOTOBA_N5_CH7_3 = [
  ["どこ", "doko", { en: "where", id: "di mana" }, "としょかんは どこですか。",
    [["としょかん", "Toshokan"], ["は", "wa"], ["どこ", "doko"], ["です", "desu"], ["か", "ka"]],
    { en: "Where is the library?", id: "Di mana perpustakaan?" }, "", "図書館はどこですか。",
    { en: "どこ belongs to the こそあど system of demonstratives (これ/それ/あれ/どれ, ここ/そこ/あそこ/どこ), all sharing the same question-word \"do-\" prefix pattern.", id: "どこ termasuk dalam sistem こそあど kata tunjuk (これ/それ/あれ/どれ, ここ/そこ/あそこ/どこ), semuanya berbagi pola awalan kata tanya \"do-\" yang sama." }],
  ["いつ", "itsu", { en: "when", id: "kapan" }, "たんじょうびは いつですか。",
    [["たんじょうび", "Tanjoubi"], ["は", "wa"], ["いつ", "itsu"], ["です", "desu"], ["か", "ka"]],
    { en: "When is your birthday?", id: "Kapan ulang tahunmu?" }, "", "誕生日はいつですか。",
    { en: "いつ has no common kanji form (unlike どこ or なに) and is almost always written in hiragana, even in formal writing.", id: "いつ tidak punya bentuk kanji yang umum (berbeda dari どこ atau なに) dan hampir selalu ditulis dalam hiragana, bahkan pada tulisan formal." }],
  ["なに", "nani", { en: "what", id: "apa" }, "なにを していますか。",
    [["なに", "Nani"], ["を", "wo"], ["しています", "shiteimasu"], ["か", "ka"]],
    { en: "What are you doing?", id: "Apa yang sedang kamu lakukan?" }, "何", "何をしていますか。",
    { en: "何 is read なに as a standalone word but becomes なん before certain sounds or counters, as in なんじ (what time) or なんにん (how many people).", id: "何 dibaca なに sebagai kata berdiri sendiri tetapi berubah menjadi なん sebelum bunyi atau kata bantu bilangan tertentu, seperti pada なんじ (jam berapa) atau なんにん (berapa orang)." }],
  ["だれ", "dare", { en: "who", id: "siapa" }, "あの ひとは だれですか。",
    [["あの", "Ano"], ["ひと", "hito"], ["は", "wa"], ["だれ", "dare"], ["です", "desu"], ["か", "ka"]],
    { en: "Who is that person?", id: "Siapa orang itu?" }, "誰", "あの人は誰ですか。",
    { en: "誰 has a kanji form but, like いつ, だれ is almost always written in hiragana in everyday text; the polite version どなた is used when asking about someone of higher status.", id: "誰 punya bentuk kanji, tetapi seperti いつ, だれ hampir selalu ditulis dalam hiragana pada tulisan sehari-hari; bentuk sopannya どなた dipakai saat menanyakan orang yang statusnya lebih tinggi." }],
  ["どう", "dou", { en: "how", id: "bagaimana" }, "にほんの せいかつは どうですか。",
    [["にほん", "Nihon"], ["の", "no"], ["せいかつ", "seikatsu"], ["は", "wa"], ["どう", "dou"], ["です", "desu"], ["か", "ka"]],
    { en: "How is life in Japan?", id: "Bagaimana kehidupan di Jepang?" }, "", "日本の生活はどうですか。",
    { en: "どう is the root of several useful compounds: どうして (why), どうやって (how, doing what method), and どうも (a flexible word for \"thanks\" or \"very\").", id: "どう adalah akar dari beberapa kata gabungan yang berguna: どうして (mengapa), どうやって (bagaimana caranya), dan どうも (kata fleksibel untuk \"terima kasih\" atau \"sangat\")." }],
  ["どんな", "donna", { en: "what kind of", id: "yang bagaimana / seperti apa" }, "どんな おんがくが すきですか。",
    [["どんな", "Donna"], ["おんがく", "ongaku"], ["が", "ga"], ["すき", "suki"], ["です", "desu"], ["か", "ka"]],
    { en: "What kind of music do you like?", id: "Kamu suka musik yang seperti apa?" }, "", "どんな音楽が好きですか。",
    { en: "どんな always attaches directly in front of a noun, unlike どう, which instead stands alone or describes a verb or adjective at the end of a sentence.", id: "どんな selalu menempel langsung di depan kata benda, berbeda dari どう, yang justru berdiri sendiri atau menerangkan kata kerja/kata sifat di akhir kalimat." }],
  ["どうして", "doushite", { en: "why", id: "mengapa / kenapa" }, "どうして がっこうを やすみましたか。",
    [["どうして", "Doushite"], ["がっこう", "gakkou"], ["を", "wo"], ["やすみました", "yasumimashita"], ["か", "ka"]],
    { en: "Why did you miss school?", id: "Kenapa kamu tidak masuk sekolah?" }, "", "どうして学校を休みましたか。",
    { en: "どうして is the everyday spoken word for \"why\"; its near-synonym なぜ carries the same meaning but sounds more formal, common in writing or serious questions.", id: "どうして adalah kata sehari-hari untuk \"mengapa\" dalam percakapan; sinonimnya なぜ memiliki arti yang sama tetapi terdengar lebih formal, umum dipakai dalam tulisan atau pertanyaan serius." }],
  ["いくら", "ikura", { en: "how much (price)", id: "berapa harga" }, "この かばんは いくらですか。",
    [["この", "Kono"], ["かばん", "kaban"], ["は", "wa"], ["いくら", "ikura"], ["です", "desu"], ["か", "ka"]],
    { en: "How much is this bag?", id: "Tas ini harganya berapa?" }, "", "この鞄はいくらですか。",
    { en: "いくら specifically asks about price or cost, unlike いくつ, which asks about a countable quantity or a person's age.", id: "いくら secara khusus menanyakan harga atau biaya, berbeda dari いくつ, yang menanyakan jumlah yang bisa dihitung atau umur seseorang." }],
  ["いくつ", "ikutsu", { en: "how many / how old", id: "berapa banyak (jumlah/umur)" }, "りんごは いくつ ありますか。",
    [["りんご", "Ringo"], ["は", "wa"], ["いくつ", "ikutsu"], ["あります", "arimasu"], ["か", "ka"]],
    { en: "How many apples are there?", id: "Ada berapa buah apel?" }, "", "りんごはいくつありますか。",
    { en: "いくつ also politely asks someone's age, as in おいくつですか (How old are you?), adding the honorific お prefix.", id: "いくつ juga dipakai untuk sopan menanyakan umur seseorang, seperti pada おいくつですか (Berapa umur Anda?), dengan menambahkan awalan hormat お." }],
  ["どの", "dono", { en: "which (one)", id: "yang mana" }, "どの ほんが あなたのですか。",
    [["どの", "Dono"], ["ほん", "hon"], ["が", "ga"], ["あなた", "anata"], ["の", "no"], ["です", "desu"], ["か", "ka"]],
    { en: "Which book is yours?", id: "Buku yang mana punyamu?" }, "", "どの本があなたのですか。",
    { en: "どの is part of the この/その/あの/どの series and, like どんな, always attaches directly in front of a noun rather than standing alone.", id: "どの termasuk dalam rangkaian この/その/あの/どの dan, seperti どんな, selalu menempel langsung di depan kata benda, tidak berdiri sendiri." }],
  ["いつも", "itsumo", { en: "always", id: "selalu" }, "わたしは いつも ろくじに おきます。",
    [["わたし", "Watashi"], ["は", "wa"], ["いつも", "itsumo"], ["ろくじ", "rokuji"], ["に", "ni"], ["おきます", "okimasu"]],
    { en: "I always wake up at 6 o'clock.", id: "Saya selalu bangun jam 6." }, "", "私はいつも六時に起きます。",
    { en: "いつも sits at the top of the N5 frequency scale — いつも > たいてい > よく > ときどき > あまり > ぜんぜん — a useful order to memorize together with the other adverbs in this tier.", id: "いつも berada di puncak skala frekuensi N5 — いつも > たいてい > よく > ときどき > あまり > ぜんぜん — urutan yang berguna untuk dihafal bersama kata keterangan lain di tingkatan ini." }],
  ["たいてい", "taitei", { en: "usually", id: "biasanya" }, "にちようびは たいてい いえに います。",
    [["にちようび", "Nichiyoubi"], ["は", "wa"], ["たいてい", "taitei"], ["いえ", "ie"], ["に", "ni"], ["います", "imasu"]],
    { en: "I'm usually at home on Sundays.", id: "Hari Minggu saya biasanya di rumah." }, "", "日曜日はたいてい家にいます。",
    { en: "たいてい ranks just below いつも on the frequency scale — closer to \"most of the time\" than to a strict \"always\".", id: "たいてい berada tepat di bawah いつも pada skala frekuensi — lebih dekat ke \"sebagian besar waktu\" daripada \"selalu\" secara mutlak." }],
  ["よく", "yoku", { en: "often / well", id: "sering / dengan baik" }, "わたしは よく としょかんへ いきます。",
    [["わたし", "Watashi"], ["は", "wa"], ["よく", "yoku"], ["としょかん", "toshokan"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I often go to the library.", id: "Saya sering pergi ke perpustakaan." }, "", "私はよく図書館へ行きます。",
    { en: "よく has two separate meanings depending on context: frequency (\"often\"), as here, or manner (\"well\"), as in よく わかりました (I understood well).", id: "よく memiliki dua makna berbeda tergantung konteks: frekuensi (\"sering\"), seperti di sini, atau cara (\"dengan baik\"), seperti pada よく わかりました (saya mengerti dengan baik)." }],
  ["ときどき", "tokidoki", { en: "sometimes", id: "kadang-kadang" }, "ときどき えいがを みます。",
    [["ときどき", "Tokidoki"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I sometimes watch movies.", id: "Kadang-kadang saya menonton film." }, "時々", "時々映画を見ます。",
    { en: "ときどき is written with a doubled kanji 時々, using the iteration mark 々 to show that 時 (time) repeats — a common pattern in Japanese reduplicated words.", id: "ときどき ditulis dengan kanji ganda 時々, memakai tanda pengulangan 々 untuk menunjukkan bahwa 時 (waktu) berulang — pola umum pada kata-kata Jepang yang mengalami reduplikasi." }],
  ["もう", "mou", { en: "already", id: "sudah" }, "しゅくだいは もう おわりました。",
    [["しゅくだい", "Shukudai"], ["は", "wa"], ["もう", "mou"], ["おわりました", "owarimashita"]],
    { en: "I have already finished my homework.", id: "PR saya sudah selesai." }, "", "宿題はもう終わりました。",
    { en: "もう means \"already\" with a positive verb, but shifts to mean \"not anymore\" when paired with a negative verb, as in もう たべません (I won't eat anymore) — the same positive/negative flip seen with まだ.", id: "もう berarti \"sudah\" bila dipakai dengan kata kerja positif, tetapi berubah menjadi \"tidak lagi\" bila dipasangkan dengan kata kerja negatif, seperti pada もう たべません (saya tidak akan makan lagi) — pembalikan makna positif/negatif yang sama seperti pada まだ." }],
  ["まだ", "mada", { en: "not yet", id: "belum" }, "しゅくだいは まだ おわっていません。",
    [["しゅくだい", "Shukudai"], ["は", "wa"], ["まだ", "mada"], ["おわっていません", "owatteimasen"]],
    { en: "My homework isn't finished yet.", id: "PR saya belum selesai." }, "", "宿題はまだ終わっていません。",
    { en: "まだ pairs naturally with a negative verb to mean \"not yet\", but with an affirmative verb it instead means \"still\", as in まだ あめが ふっています (it's still raining).", id: "まだ secara alami dipasangkan dengan kata kerja negatif untuk berarti \"belum\", tetapi dengan kata kerja afirmatif justru berarti \"masih\", seperti pada まだ あめが ふっています (masih hujan)." }]
];

// Sub-Tier 7.4: Kata Hubung & Sambungan (9)
const KOTOBA_N5_CH7_4 = [
  ["そして", "soshite", { en: "and, and then", id: "dan, lalu" }, "あさごはんを たべました。そして、がっこうへ いきました。",
    [["あさごはんを たべました。", "Asagohan wo tabemashita."], ["そして、", "Soshite,"], ["がっこうへ いきました。", "gakkou e ikimashita."]],
    { en: "I ate breakfast. And then, I went to school.", id: "Saya sarapan. Lalu, saya pergi ke sekolah." }, "", "朝ご飯を食べました。そして、学校へ行きました。",
    { en: "そして typically connects two separate sentences describing sequential actions, unlike the て-form (e.g. たべて), which links actions within a single sentence.", id: "そして biasanya menghubungkan dua kalimat terpisah yang menggambarkan tindakan berurutan, berbeda dari bentuk-て (misalnya たべて), yang menghubungkan tindakan dalam satu kalimat." }],
  ["それから", "sorekara", { en: "after that, and then", id: "setelah itu, lalu" }, "ばんごはんを たべました。それから、おふろに はいりました。",
    [["ばんごはんを たべました。", "Bangohan wo tabemashita."], ["それから、", "Sorekara,"], ["おふろに はいりました。", "ofuro ni hairimashita."]],
    { en: "I ate dinner. After that, I took a bath.", id: "Saya makan malam. Setelah itu, saya mandi (berendam)." }, "", "晩ご飯を食べました。それから、お風呂に入りました。",
    { en: "それから can also mean \"and also\" when listing additional items, not only \"after that\" in a time sequence.", id: "それから juga bisa berarti \"dan juga\" ketika menyebutkan hal tambahan, tidak hanya \"setelah itu\" dalam urutan waktu." }],
  ["でも", "demo", { en: "but, however", id: "tapi, tetapi" }, "あめでした。でも、こうえんへ いきました。",
    [["あめでした。", "Ame deshita."], ["でも、", "Demo,"], ["こうえんへ いきました。", "kouen e ikimashita."]],
    { en: "It was raining. But, I went to the park.", id: "Waktu itu hujan. Tapi, saya pergi ke taman." }, "", "雨でした。でも、公園へ行きました。",
    { en: "This sentence-connecting でも (\"but\") is different from the particle でも meaning \"even\" (e.g. こどもでも わかります, \"even a child would understand\").", id: "でも penghubung kalimat (\"tapi\") ini berbeda dari partikel でも yang berarti \"bahkan\" (misalnya こどもでも わかります, \"bahkan anak kecil pun mengerti\")." }],
  ["しかし", "shikashi", { en: "however, but", id: "namun, akan tetapi" }, "あめでした。しかし、こうえんへ いきました。",
    [["あめでした。", "Ame deshita."], ["しかし、", "Shikashi,"], ["こうえんへ いきました。", "kouen e ikimashita."]],
    { en: "It was raining. However, I went to the park.", id: "Waktu itu hujan. Namun, saya pergi ke taman." }, "", "雨でした。しかし、公園へ行きました。",
    { en: "しかし carries the same meaning as でも but sounds more formal and written — common in essays, news, and speeches, while でも stays in everyday conversation.", id: "しかし memiliki makna yang sama dengan でも tetapi terdengar lebih formal dan tertulis — umum dipakai dalam esai, berita, dan pidato, sedangkan でも tetap dipakai dalam percakapan sehari-hari." }],
  ["ですが", "desuga", { en: "but, however (polite)", id: "tetapi (bentuk lebih sopan)" }, "この みせは たかいです。ですが、サービスが いいです。",
    [["この みせは たかいです。", "Kono mise wa takai desu."], ["ですが、", "Desuga,"], ["サービスが いいです。", "sabisu ga ii desu."]],
    { en: "This store is expensive. However, the service is good.", id: "Toko ini mahal. Tetapi, pelayanannya bagus." }, "", "この店は高いです。ですが、サービスがいいです。",
    { en: "ですが attaches directly onto です to form a polite connector; unlike でも and しかし, which usually start a new sentence, ですが can also sit mid-sentence as Xですが、Y.", id: "ですが menempel langsung pada です untuk membentuk penghubung yang sopan; berbeda dari でも dan しかし, yang biasanya memulai kalimat baru, ですが juga bisa berada di tengah kalimat sebagai Xですが、Y." }],
  ["だから", "dakara", { en: "so, therefore", id: "jadi, oleh karena itu" }, "あしたは テストです。だから、べんきょうします。",
    [["あしたは テストです。", "Ashita wa tesuto desu."], ["だから、", "Dakara,"], ["べんきょうします。", "benkyoushimasu."]],
    { en: "Tomorrow is a test. So, I will study.", id: "Besok ada ujian. Jadi, saya akan belajar." }, "", "明日はテストです。だから、勉強します。",
    { en: "だから is casual/neutral in tone; the more formal equivalent used in polite speech or writing is ですから.", id: "だから bernada santai/netral; padanan yang lebih formal untuk dipakai dalam tuturan sopan atau tulisan adalah ですから." }],
  ["だからといって", "dakaratoitte", { en: "even so, that doesn't mean...", id: "meskipun demikian, bukan berarti..." }, "びょうきです。だからといって、やすみません。",
    [["びょうきです。", "Byouki desu."], ["だからといって、", "Dakaratoitte,"], ["やすみません。", "yasumimasen."]],
    { en: "I'm sick. Even so, I won't take the day off.", id: "Saya sakit. Meskipun demikian, saya tidak akan libur." }, "だからと言って", "病気です。だからと言って、休みません。",
    { en: "だからといって pairs だから with a という-style construction to mean \"just because X, that doesn't mean Y\" — a step up from plain だから, useful for pushing back against an assumed conclusion.", id: "だからといって memadukan だから dengan konstruksi bergaya という untuk berarti \"hanya karena X, bukan berarti Y\" — satu tingkat di atas だから biasa, berguna untuk menyanggah kesimpulan yang dianggap sudah pasti." }],
  ["それじゃ", "soreja", { en: "well then, if that's the case", id: "kalau begitu / jika demikian" }, "あめですか。それじゃ、うちに いましょう。",
    [["あめです", "Ame desu"], ["か。", "ka."], ["それじゃ、", "Soreja,"], ["うちに いましょう。", "uchi ni imashou."]],
    { en: "Is it raining? Well then, let's stay home.", id: "Apakah sedang hujan? Kalau begitu, ayo tetap di rumah." }, "", "雨ですか。それじゃ、うちにいましょう。",
    { en: "それじゃ is a casual contraction of それでは; its fully formal register is では alone (or それでは), used in writing and formal speech for the same \"well then\" transition.", id: "それじゃ adalah bentuk singkat santai dari それでは; bentuk formalnya adalah では saja (atau それでは), dipakai dalam tulisan dan tuturan formal untuk transisi \"kalau begitu\" yang sama." }],
  ["じゃ", "ja", { en: "well then, so (casual)", id: "nah / kalau begitu" }, "じゃ、また あした。",
    [["じゃ、", "Ja,"], ["また", "mata"], ["あした。", "ashita."]],
    { en: "Well then, see you tomorrow.", id: "Kalau begitu, sampai besok." }, "", "じゃ、また明日。",
    { en: "じゃ is an even shorter, more casual contraction than それじゃ, most often heard right before ending a conversation or making a quick decision, as in じゃ、いこう (Alright, let's go).", id: "じゃ adalah bentuk singkat yang lebih santai lagi dibanding それじゃ, paling sering terdengar tepat sebelum mengakhiri percakapan atau mengambil keputusan cepat, seperti pada じゃ、いこう (Baiklah, ayo pergi)." }]
];

// Sub-Tier 7.5: Kata Keterangan Derajat & Tata Bahasa (12)
const KOTOBA_N5_CH7_5 = [
  ["とても", "totemo", { en: "very", id: "sangat" }, "これは とても むずかしいです。",
    [["これ", "Kore"], ["は", "wa"], ["とても", "totemo"], ["むずかしい", "muzukashii"], ["です", "desu"]],
    { en: "This is very difficult.", id: "Ini sangat sulit." }, "", "",
    { en: "An intensifier placed before an adjective, e.g. totemo muzukashii ('very difficult') or totemo omoshiroi ('very interesting').", id: "Kata penguat yang diletakkan sebelum kata sifat, misalnya totemo muzukashii ('sangat sulit') atau totemo omoshiroi ('sangat menarik')." }],
  ["ずいぶん", "zuibun", { en: "quite, considerably", id: "cukup / lumayan" }, "きょうは ずいぶん さむいですね。",
    [["きょう", "Kyou"], ["は", "wa"], ["ずいぶん", "zuibun"], ["さむい", "samui"], ["です", "desu"], ["ね", "ne"]],
    { en: "It's quite cold today, isn't it?", id: "Hari ini lumayan dingin, ya." }, "随分", "今日は随分寒いですね。",
    { en: "ずいぶん expresses a stronger degree than plain とても, often carrying a note of surprise at how much something exceeds expectations — similar to English \"quite\" or \"rather\".", id: "ずいぶん mengungkapkan tingkat yang lebih kuat daripada とても biasa, sering membawa nuansa terkejut atas seberapa jauh sesuatu melampaui perkiraan — mirip \"cukup\" atau \"lumayan\" dalam bahasa Indonesia." }],
  ["ちょっと", "chotto", { en: "a little / a moment", id: "agak / sedikit" }, "ちょっと まってください。",
    [["ちょっと", "Chotto"], ["まって", "matte"], ["ください", "kudasai"]],
    { en: "Please wait a moment.", id: "Tolong tunggu sebentar." }, "", "ちょっと待ってください。",
    { en: "ちょっと is the casual, everyday counterpart of すこし; it's also used alone to soften a refusal, as in ちょっと… (trailing off to mean \"that's a bit difficult\").", id: "ちょっと adalah padanan santai dan sehari-hari dari すこし; kata ini juga dipakai sendirian untuk memperhalus penolakan, seperti pada ちょっと… (menggantung untuk berarti \"agak sulit\")." }],
  ["すこし", "sukoshi", { en: "a little, a bit", id: "sedikit" }, "にほんごが すこし わかります。",
    [["にほんご", "Nihongo"], ["が", "ga"], ["すこし", "sukoshi"], ["わかります", "wakarimasu"]],
    { en: "I understand a little Japanese.", id: "Saya mengerti sedikit bahasa Jepang." }, "少し", "日本語が少し分かります。",
    { en: "すこし is often paired into すこしだけ (\"just a little\") to soften a statement, a common technique in polite Japanese conversation.", id: "すこし sering digabung menjadi すこしだけ (\"hanya sedikit\") untuk memperhalus pernyataan, teknik umum dalam percakapan sopan bahasa Jepang." }],
  ["たくさん", "takusan", { en: "a lot, many", id: "banyak" }, "こうえんに ひとが たくさん います。",
    [["こうえん", "Kouen"], ["に", "ni"], ["ひと", "hito"], ["が", "ga"], ["たくさん", "takusan"], ["います", "imasu"]],
    { en: "There are a lot of people in the park.", id: "Ada banyak orang di taman." }, "", "公園に人がたくさんいます。",
    { en: "たくさん can also directly modify a following noun with の, as in たくさんの人 (many people) — a general-purpose quantifier that applies to people, objects, or amounts alike.", id: "たくさん juga bisa langsung menerangkan kata benda setelahnya dengan の, seperti pada たくさんの人 (banyak orang) — kata penunjuk jumlah serbaguna yang berlaku untuk orang, benda, maupun jumlah lainnya." }],
  ["おおぜい", "oozei", { en: "many people", id: "banyak orang (khusus untuk manusia)" }, "こうえんに ひとが おおぜい います。",
    [["こうえん", "Kouen"], ["に", "ni"], ["ひと", "hito"], ["が", "ga"], ["おおぜい", "oozei"], ["います", "imasu"]],
    { en: "There are many people in the park.", id: "Ada banyak orang di taman." }, "大勢", "公園に人が大勢います。",
    { en: "おおぜい specifically describes a large number of people, unlike the general-purpose たくさん, which can quantify anything, people included.", id: "おおぜい secara khusus menggambarkan banyak orang, berbeda dari たくさん yang bersifat umum dan bisa dipakai untuk apa saja, termasuk orang." }],
  ["ぜんぜん", "zenzen", { en: "not at all (with negative)", id: "sama sekali tidak (diikuti bentuk negatif)" }, "にほんごが ぜんぜん わかりません。",
    [["にほんご", "Nihongo"], ["が", "ga"], ["ぜんぜん", "zenzen"], ["わかりません", "wakarimasen"]],
    { en: "I don't understand Japanese at all.", id: "Saya sama sekali tidak mengerti bahasa Jepang." }, "全然", "日本語が全然分かりません。",
    { en: "Like あまり, ぜんぜん traditionally needs a negative ending; in casual modern speech it's sometimes paired with a positive word to mean \"totally\" (ぜんぜん だいじょうぶ, totally fine), though textbooks teach the negative pattern.", id: "Seperti あまり, ぜんぜん secara tradisional memerlukan akhiran negatif; dalam percakapan santai modern kadang dipasangkan dengan kata positif untuk berarti \"benar-benar\" (ぜんぜん だいじょうぶ, benar-benar tidak apa-apa), meski buku pelajaran mengajarkan pola negatif." }],
  ["あまり", "amari", { en: "not very / not much (with negative)", id: "tidak begitu (diikuti bentuk negatif)" }, "わたしは あまり さけを のみません。",
    [["わたし", "Watashi"], ["は", "wa"], ["あまり", "amari"], ["さけ", "sake"], ["を", "wo"], ["のみません", "nomimasen"]],
    { en: "I don't drink alcohol very much.", id: "Saya tidak terlalu minum sake/alkohol." }, "", "私はあまり酒を飲みません。",
    { en: "あまり needs a negative ending like ～ません to mean \"not very\" — paired with an affirmative verb instead, it means \"too much\", an excessive degree.", id: "あまり memerlukan akhiran negatif seperti ～ません untuk berarti \"tidak terlalu\" — jika dipasangkan dengan kata kerja afirmatif, artinya justru \"terlalu\", suatu tingkat berlebihan." }],
  ["もっと", "motto", { en: "more", id: "lebih" }, "もっと べんきょうしたいです。",
    [["もっと", "Motto"], ["べんきょうしたい", "benkyoushitai"], ["です", "desu"]],
    { en: "I want to study more.", id: "Saya ingin belajar lebih banyak lagi." }, "", "もっと勉強したいです。",
    { en: "もっと is a comparative adverb meaning \"more\" without needing a fixed reference point — it simply intensifies the degree of the verb or adjective that follows.", id: "もっと adalah kata keterangan komparatif yang berarti \"lebih\" tanpa memerlukan titik acuan tetap — kata ini cukup memperkuat tingkat dari kata kerja atau kata sifat setelahnya." }],
  ["いちばん", "ichiban", { en: "most, number one", id: "paling / nomor satu" }, "これが いちばん すきです。",
    [["これ", "Kore"], ["が", "ga"], ["いちばん", "ichiban"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like this the most.", id: "Saya paling suka ini." }, "一番", "これが一番好きです。",
    { en: "一番 literally means \"number one\" and functions as the superlative marker in Japanese — placed before an adjective or verb, it turns a comparison into a \"the most ___\" statement.", id: "一番 secara harfiah berarti \"nomor satu\" dan berfungsi sebagai penanda superlatif dalam bahasa Jepang — diletakkan sebelum kata sifat atau kata kerja, mengubah sebuah perbandingan menjadi pernyataan \"paling ___\"." }],
  ["だいたい", "daitai", { en: "roughly, mostly, in general", id: "kira-kira / sebagian besar / garis besar" }, "しゅくだいは だいたい おわりました。",
    [["しゅくだい", "Shukudai"], ["は", "wa"], ["だいたい", "daitai"], ["おわりました", "owarimashita"]],
    { en: "My homework is mostly done.", id: "PR saya sebagian besar sudah selesai." }, "大体", "宿題は大体終わりました。",
    { en: "大体 covers two related senses: as a degree it means \"roughly, mostly\" (as here), and as a sentence opener it can mean \"in general\", summarizing the big picture of a situation.", id: "大体 mencakup dua makna yang berkaitan: sebagai tingkat berarti \"kira-kira, sebagian besar\" (seperti di sini), dan sebagai pembuka kalimat bisa berarti \"secara garis besar\", merangkum gambaran umum suatu keadaan." }],
  ["たいがい", "taigai", { en: "mostly, generally", id: "kebanyakan / umumnya" }, "にちようびは たいがい いえに います。",
    [["にちようび", "Nichiyoubi"], ["は", "wa"], ["たいがい", "taigai"], ["いえ", "ie"], ["に", "ni"], ["います", "imasu"]],
    { en: "I'm generally at home on Sundays.", id: "Hari Minggu saya biasanya/umumnya di rumah." }, "大概", "日曜日はたいがい家にいます。",
    { en: "たいがい overlaps closely with たいてい (usually, Tier 7.3) and だいたい (roughly) — all three describe \"most of the time/most of it\", but たいがい leans slightly more formal and written than たいてい.", id: "たいがい tumpang tindih erat dengan たいてい (biasanya, Tier 7.3) dan だいたい (kira-kira) — ketiganya menggambarkan \"sebagian besar waktu/sebagian besar bagian\", tetapi たいがい sedikit lebih formal dan tertulis dibanding たいてい." }],
  ["ちょうど", "choudo", { en: "exactly, just right", id: "pas / tepat" }, "いま ちょうど さんじです。",
    [["いま", "Ima"], ["ちょうど", "choudo"], ["さんじ", "sanji"], ["です", "desu"]],
    { en: "It's exactly 3 o'clock now.", id: "Sekarang tepat jam 3." }, "", "今ちょうど三時です。",
    { en: "ちょうど emphasizes precision — a time, amount, or fit that matches exactly, as in このくつは ちょうど いいです (these shoes fit just right).", id: "ちょうど menekankan ketepatan — waktu, jumlah, atau kecocokan yang persis sesuai, seperti pada このくつは ちょうど いいです (sepatu ini pas/cocok)." }]
];

// Sub-Tier 8.1: Tubuh & Kesehatan
const KOTOBA_N5_CH8_1 = [
  ["あたま", "atama", { en: "head", id: "kepala" }, "あたまが いたいです。",
    [["あたま", "Atama"], ["が", "ga"], ["いたい", "itai"], ["です", "desu"]],
    { en: "My head hurts.", id: "Kepala saya sakit." }, "頭", "頭が痛いです。",
    { en: "頭 refers to the whole head, including the skull and hair — different from 顔 (face), which is just the front part with eyes, nose, and mouth.", id: "頭 merujuk pada seluruh bagian kepala, termasuk tengkorak dan rambut — berbeda dari 顔 (wajah), yang hanya bagian depan dengan mata, hidung, dan mulut." }],
  ["かお", "kao", { en: "face", id: "wajah" }, "かおを あらいます。",
    [["かお", "Kao"], ["を", "wo"], ["あらいます", "araimasu"]],
    { en: "I wash my face.", id: "Saya mencuci wajah." }, "顔", "顔を洗います。",
    { en: "顔 covers the whole front of the head — eyes, nose, mouth, and cheeks all together — and appears in common expressions like 顔色 (complexion) and 笑顔 (smiling face).", id: "顔 mencakup seluruh bagian depan kepala — mata, hidung, mulut, dan pipi sekaligus — dan muncul dalam ungkapan umum seperti 顔色 (raut wajah) dan 笑顔 (wajah tersenyum)." }],
  ["め", "me", { en: "eye", id: "mata" }, "めが おおきいですね。",
    [["め", "Me"], ["が", "ga"], ["おおきい", "ookii"], ["です", "desu"], ["ね", "ne"]],
    { en: "Your eyes are big, aren't they.", id: "Matamu besar ya." }, "目", "目が大きいですね。",
    { en: "目 also appears in many set phrases beyond the body part itself, such as 目がいい (having good eyesight) and 一目 (a glance).", id: "目 juga muncul dalam banyak ungkapan tetap selain sebagai bagian tubuh, seperti 目がいい (penglihatan bagus) dan 一目 (sekali lihat)." }],
  ["みみ", "mimi", { en: "ear", id: "telinga" }, "みみが いたいです。",
    [["みみ", "Mimi"], ["が", "ga"], ["いたい", "itai"], ["です", "desu"]],
    { en: "My ear hurts.", id: "Telinga saya sakit." }, "耳", "耳が痛いです。",
    { en: "耳 is also used in the idiom 耳が痛い, which literally means 'my ear hurts' but figuratively means a criticism 'hits close to home'.", id: "耳 juga dipakai dalam idiom 耳が痛い, yang secara harfiah berarti 'telinga saya sakit' tetapi secara kiasan berarti sebuah kritik 'terasa menohok'." }],
  ["くち", "kuchi", { en: "mouth", id: "mulut" }, "くちを あけてください。",
    [["くち", "Kuchi"], ["を", "wo"], ["あけて", "akete"], ["ください", "kudasai"]],
    { en: "Please open your mouth.", id: "Tolong buka mulut Anda." }, "口", "口を開けてください。",
    { en: "口 is a very productive kanji, appearing in words like 入り口 (entrance) and 人口 (population) — literally 'mouth of people'.", id: "口 adalah kanji yang sangat produktif, muncul dalam kata seperti 入り口 (pintu masuk) dan 人口 (populasi) — secara harfiah 'mulut orang'." }],
  ["は", "ha", { en: "tooth", id: "gigi" }, "まいにち はを みがきます。",
    [["まいにち", "Mainichi"], ["は", "ha"], ["を", "wo"], ["みがきます", "migakimasu"]],
    { en: "I brush my teeth every day.", id: "Saya menggosok gigi setiap hari." }, "歯", "毎日歯を磨きます。",
    { en: "は (tooth) is a different word from the topic particle は (pronounced 'wa') — context and the kanji 歯 make the meaning clear in writing.", id: "は (gigi) adalah kata yang berbeda dari partikel penanda topik は (dibaca 'wa') — konteks dan kanji 歯 membuat maknanya jelas dalam tulisan." }],
  ["くび", "kubi", { en: "neck", id: "leher" }, "くびが いたいです。",
    [["くび", "Kubi"], ["が", "ga"], ["いたい", "itai"], ["です", "desu"]],
    { en: "My neck hurts.", id: "Leher saya sakit." }, "首", "首が痛いです。",
    { en: "首 can also mean the 'head' of an organization informally, and appears in 手首 (wrist, literally 'hand-neck') and 足首 (ankle, 'foot-neck').", id: "首 juga bisa berarti 'kepala' sebuah organisasi secara informal, dan muncul dalam 手首 (pergelangan tangan, harfiah 'leher tangan') dan 足首 (pergelangan kaki, 'leher kaki')." }],
  ["て", "te", { en: "hand", id: "tangan" }, "てを あげてください。",
    [["て", "Te"], ["を", "wo"], ["あげて", "agete"], ["ください", "kudasai"]],
    { en: "Please raise your hand.", id: "Tolong angkat tangan Anda." }, "手", "手を上げてください。",
    { en: "て covers the hand and arm together in everyday use, and is one of the most common kanji, appearing in 上手 (skillful) and 手紙 (letter, literally 'hand paper').", id: "て mencakup tangan dan lengan sekaligus dalam pemakaian sehari-hari, dan merupakan salah satu kanji paling umum, muncul dalam 上手 (mahir) dan 手紙 (surat, harfiah 'kertas tangan')." }],
  ["あし", "ashi", { en: "leg / foot", id: "kaki" }, "あしが ながいです。",
    [["あし", "Ashi"], ["が", "ga"], ["ながい", "nagai"], ["です", "desu"]],
    { en: "Your legs are long.", id: "Kakimu panjang." }, "足", "足が長いです。",
    { en: "あし covers both the leg and the foot in Japanese, unlike English which separates the two — context usually makes clear which part is meant.", id: "あし mencakup baik tungkai maupun telapak kaki dalam bahasa Jepang, berbeda dari bahasa Indonesia yang biasanya memisahkan keduanya — konteks biasanya memperjelas bagian mana yang dimaksud." }],
  ["からだ", "karada", { en: "body", id: "tubuh" }, "からだに きを つけてください。",
    [["からだ", "Karada"], ["に", "ni"], ["き", "ki"], ["を", "wo"], ["つけて", "tsukete"], ["ください", "kudasai"]],
    { en: "Please take care of your health.", id: "Tolong jaga kesehatan Anda." }, "体", "体に気をつけてください。",
    { en: "からだに きをつける is a fixed, very common expression for 'take care of your health' — a polite thing to say when someone is sick or about to travel.", id: "からだに きをつける adalah ungkapan tetap yang sangat umum untuk 'jaga kesehatan' — hal sopan untuk dikatakan saat seseorang sakit atau akan bepergian." }],
  ["こえ", "koe", { en: "voice", id: "suara" }, "もっと おおきい こえで はなしてください。",
    [["もっと", "Motto"], ["おおきい", "ookii"], ["こえ", "koe"], ["で", "de"], ["はなして", "hanashite"], ["ください", "kudasai"]],
    { en: "Please speak in a louder voice.", id: "Tolong bicara dengan suara yang lebih keras." }, "声", "もっと大きい声で話してください。",
    { en: "声 refers specifically to the human or animal voice, not to sound in general — for other sounds, the word 音 (oto) is used instead.", id: "声 secara khusus merujuk pada suara manusia atau hewan, bukan bunyi secara umum — untuk bunyi lain, digunakan kata 音 (oto)." }],
  ["せなか", "senaka", { en: "back", id: "punggung" }, "せなかが いたいです。",
    [["せなか", "Senaka"], ["が", "ga"], ["いたい", "itai"], ["です", "desu"]],
    { en: "My back hurts.", id: "Punggung saya sakit." }, "背中", "背中が痛いです。",
    { en: "背中 combines 背 (stature/back) and 中 (middle) to specifically mean the back of the body, as opposed to お腹 (the front, the stomach).", id: "背中 menggabungkan 背 (postur/punggung) dan 中 (tengah) untuk secara khusus berarti bagian belakang tubuh, berlawanan dengan お腹 (bagian depan, perut)." }],
  ["おなか", "onaka", { en: "stomach", id: "perut" }, "おなかが すきました。",
    [["おなか", "Onaka"], ["が", "ga"], ["すきました", "sukimashita"]],
    { en: "I'm hungry.", id: "Saya lapar." }, "お腹", "お腹がすきました。",
    { en: "おなかが すく literally means 'the stomach becomes empty' and is the standard way to say 'I'm hungry' — the opposite, おなかが いっぱい, means 'I'm full'.", id: "おなかが すく secara harfiah berarti 'perut menjadi kosong' dan merupakan cara standar untuk mengatakan 'saya lapar' — kebalikannya, おなかが いっぱい, berarti 'saya kenyang'." }],
  ["むね", "mune", { en: "chest", id: "dada" }, "むねが どきどきします。",
    [["むね", "Mune"], ["が", "ga"], ["どきどき", "dokidoki"], ["します", "shimasu"]],
    { en: "My heart is pounding.", id: "Dada saya berdebar-debar." }, "胸", "胸がどきどきします。",
    { en: "むね refers to the chest area, and is often paired with どきどき (an onomatopoeia for a pounding heartbeat) to describe nervousness or excitement.", id: "むね merujuk pada area dada, dan sering dipasangkan dengan どきどき (tiruan bunyi detak jantung berdebar) untuk menggambarkan rasa gugup atau bersemangat." }],
  ["ゆび", "yubi", { en: "finger", id: "jari" }, "ゆびで さしてください。",
    [["ゆび", "Yubi"], ["で", "de"], ["さして", "sashite"], ["ください", "kudasai"]],
    { en: "Please point with your finger.", id: "Tolong tunjuk dengan jari." }, "指", "指で指してください。",
    { en: "ゆび covers both fingers and toes in Japanese; to specify, 手のゆび (fingers) or 足のゆび (toes) can be used.", id: "ゆび mencakup baik jari tangan maupun jari kaki dalam bahasa Jepang; untuk memperjelas, bisa dipakai 手のゆび (jari tangan) atau 足のゆび (jari kaki)." }],
  ["つめ", "tsume", { en: "nail", id: "kuku" }, "つめが ながいですね。",
    [["つめ", "Tsume"], ["が", "ga"], ["ながい", "nagai"], ["です", "desu"], ["ね", "ne"]],
    { en: "Your nails are long, aren't they.", id: "Kukumu panjang ya." }, "爪", "爪が長いですね。",
    { en: "つめ refers to both fingernails and toenails, as well as the claws of animals.", id: "つめ merujuk pada kuku jari tangan maupun kaki, serta cakar hewan." }],
  ["かみのけ", "kaminoke", { en: "hair", id: "rambut" }, "かみのけが ながいです。",
    [["かみのけ", "Kaminoke"], ["が", "ga"], ["ながい", "nagai"], ["です", "desu"]],
    { en: "My hair is long.", id: "Rambut saya panjang." }, "髪の毛", "髪の毛が長いです。",
    { en: "髪の毛 literally combines 髪 (hair) and 毛 (fur/hair strand) for emphasis; in casual speech, 髪 (kami) alone is often used to mean the same thing.", id: "髪の毛 secara harfiah menggabungkan 髪 (rambut) dan 毛 (bulu/helai rambut) untuk penegasan; dalam percakapan santai, 髪 (kami) saja sering dipakai untuk arti yang sama." }],
  ["あご", "ago", { en: "chin / jaw", id: "rahang / dagu" }, "あごが いたいです。",
    [["あご", "Ago"], ["が", "ga"], ["いたい", "itai"], ["です", "desu"]],
    { en: "My jaw hurts.", id: "Rahang saya sakit." }, "顎", "顎が痛いです。",
    { en: "The kanji 顎 is fairly complex and rarely written by hand, so あご is very often written in hiragana even in formal contexts.", id: "Kanji 顎 cukup rumit dan jarang ditulis tangan, sehingga あご sangat sering ditulis dalam hiragana bahkan dalam konteks formal." }],
  ["ほお", "hoo", { en: "cheek", id: "pipi" }, "ほおが あかいです。",
    [["ほお", "Hoo"], ["が", "ga"], ["あかい", "akai"], ["です", "desu"]],
    { en: "Your cheeks are red.", id: "Pipimu merah." }, "頬", "頬が赤いです。",
    { en: "ほお is sometimes pronounced ほほ in careful or older speech — both refer to the same part of the face, the cheek.", id: "ほお kadang diucapkan ほほ dalam bicara yang lebih hati-hati atau gaya lama — keduanya merujuk pada bagian wajah yang sama, yaitu pipi." }],
  ["びょうき", "byouki", { en: "illness", id: "sakit / penyakit" }, "ちちは びょうきです。",
    [["ちち", "Chichi"], ["は", "wa"], ["びょうき", "byouki"], ["です", "desu"]],
    { en: "My father is sick.", id: "Ayah saya sakit." }, "病気", "父は病気です。",
    { en: "びょうき describes an ongoing illness or disease, different from いたい (which describes a localized pain) — 病 (byou) meaning 'illness' appears in 病院 (hospital) too.", id: "びょうき menggambarkan penyakit atau kondisi sakit yang berkelanjutan, berbeda dari いたい (yang menggambarkan rasa sakit di satu bagian) — 病 (byou) yang berarti 'penyakit' juga muncul pada 病院 (rumah sakit)." }],
  ["くすり", "kusuri", { en: "medicine", id: "obat" }, "しょくじの あとで くすりを のんでください。",
    [["しょくじ", "Shokuji"], ["の", "no"], ["あとで", "atode"], ["くすり", "kusuri"], ["を", "wo"], ["のんで", "nonde"], ["ください", "kudasai"]],
    { en: "Please take the medicine after eating.", id: "Tolong minum obat setelah makan." }, "薬", "食事の後で薬を飲んでください。",
    { en: "Japanese uses the verb のむ (to drink) for taking medicine, even for pills, rather than a separate word for 'to take medicine'.", id: "Bahasa Jepang menggunakan kata kerja のむ (minum) untuk mengonsumsi obat, bahkan untuk pil sekalipun, alih-alih kata terpisah untuk 'minum obat'." }],
  ["くすりや", "kusuriya", { en: "pharmacy", id: "apotek" }, "くすりやで くすりを かいました。",
    [["くすりや", "Kusuriya"], ["で", "de"], ["くすり", "kusuri"], ["を", "wo"], ["かいました", "kaimashita"]],
    { en: "I bought medicine at the pharmacy.", id: "Saya membeli obat di apotek." }, "薬屋", "薬屋で薬を買いました。",
    { en: "くすりや is a friendly, everyday term for a pharmacy; a more formal word you'll see on signs is 薬局 (yakkyoku).", id: "くすりや adalah istilah ramah sehari-hari untuk apotek; kata yang lebih formal yang sering terlihat di papan nama adalah 薬局 (yakkyoku)." }],
  ["はいしゃ", "haisha", { en: "dentist", id: "dokter gigi" }, "あした はいしゃに いきます。",
    [["あした", "Ashita"], ["はいしゃ", "haisha"], ["に", "ni"], ["いきます", "ikimasu"]],
    { en: "I'm going to the dentist tomorrow.", id: "Besok saya akan pergi ke dokter gigi." }, "歯医者", "明日歯医者に行きます。",
    { en: "はいしゃ literally combines 歯 (tooth) and 医者 (doctor) — the same 医者 pattern is used for other specialists too, like 目医者 (eye doctor).", id: "はいしゃ secara harfiah menggabungkan 歯 (gigi) dan 医者 (dokter) — pola 医者 yang sama dipakai untuk dokter spesialis lain juga, seperti 目医者 (dokter mata)." }],
  ["けが", "kega", { en: "injury", id: "cedera / luka" }, "あしを けがしました。",
    [["あし", "Ashi"], ["を", "wo"], ["けがしました", "kegashimashita"]],
    { en: "I injured my leg.", id: "Kaki saya cedera." }, "怪我", "足を怪我しました。",
    { en: "けが can be used as a noun (an injury) or combined with する to make a verb (けがする, to get injured) — it's almost always written in hiragana even though it has kanji.", id: "けが bisa dipakai sebagai kata benda (cedera) atau digabung dengan する untuk membentuk kata kerja (けがする, mengalami cedera) — kata ini hampir selalu ditulis dalam hiragana meski memiliki kanji." }],
  ["ねつ", "netsu", { en: "fever", id: "demam" }, "ねつが あります。",
    [["ねつ", "Netsu"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "I have a fever.", id: "Saya demam." }, "熱", "熱があります。",
    { en: "ねつが ある is the standard way to say 'I have a fever'; the same kanji 熱 also means 'heat' in general, as in 熱い (hot).", id: "ねつが ある adalah cara standar untuk mengatakan 'saya demam'; kanji 熱 yang sama juga berarti 'panas' secara umum, seperti pada 熱い (panas)." }],
  ["せき", "seki", { en: "cough", id: "batuk" }, "せきが でます。",
    [["せき", "Seki"], ["が", "ga"], ["でます", "demasu"]],
    { en: "I have a cough.", id: "Saya batuk." }, "咳", "咳が出ます。",
    { en: "Japanese describes a cough or symptom 'coming out' (でる) rather than the person 'having' it — the same pattern appears with ねつが でる (running a fever) in casual speech.", id: "Bahasa Jepang menggambarkan batuk atau gejala sebagai sesuatu yang 'keluar' (でる) alih-alih orangnya 'memiliki' — pola yang sama muncul pada ねつが でる (demam) dalam percakapan santai." }],
  ["くしゃみ", "kushami", { en: "sneeze", id: "bersin" }, "くしゃみが とまりません。",
    [["くしゃみ", "Kushami"], ["が", "ga"], ["とまりません", "tomarimasen"]],
    { en: "My sneezing won't stop.", id: "Bersin saya tidak berhenti." }, "", "",
    { en: "くしゃみ is almost always written in hiragana or katakana; it's often paired with the verb する, as in くしゃみを する (to sneeze).", id: "くしゃみ hampir selalu ditulis dalam hiragana atau katakana; kata ini sering dipasangkan dengan kata kerja する, seperti pada くしゃみを する (bersin)." }],
  ["めまい", "memai", { en: "dizziness", id: "pusing" }, "めまいが します。",
    [["めまい", "Memai"], ["が", "ga"], ["します", "shimasu"]],
    { en: "I feel dizzy.", id: "Saya merasa pusing." }, "", "",
    { en: "めまいが する is the set phrase for feeling dizzy; めまい is essentially always written in hiragana in everyday use.", id: "めまいが する adalah ungkapan tetap untuk merasa pusing; めまい pada dasarnya selalu ditulis dalam hiragana dalam pemakaian sehari-hari." }],
  ["たいおん", "taion", { en: "body temperature", id: "suhu tubuh" }, "たいおんを はかりましょう。",
    [["たいおん", "Taion"], ["を", "wo"], ["はかりましょう", "hakarimashou"]],
    { en: "Let's measure your temperature.", id: "Mari kita ukur suhu tubuh Anda." }, "体温", "体温を測りましょう。",
    { en: "体温 literally combines 体 (body) and 温 (warmth) — the same 温 appears in 温泉 (hot spring) and おんど (temperature in general).", id: "体温 secara harfiah menggabungkan 体 (tubuh) dan 温 (kehangatan) — 温 yang sama muncul pada 温泉 (pemandian air panas) dan おんど (suhu secara umum)." }],
  ["けんこう", "kenkou", { en: "health", id: "kesehatan" }, "けんこうが いちばん たいせつです。",
    [["けんこう", "Kenkou"], ["が", "ga"], ["いちばん", "ichiban"], ["たいせつ", "taisetsu"], ["です", "desu"]],
    { en: "Health is the most important thing.", id: "Kesehatan adalah hal yang paling penting." }, "健康", "健康が一番大切です。",
    { en: "けんこう is a na-adjective/noun that describes being healthy — けんこうな ひと (a healthy person) or けんこうです (to be healthy) are both common patterns.", id: "けんこう adalah kata sifat-na/kata benda yang menggambarkan keadaan sehat — けんこうな ひと (orang yang sehat) atau けんこうです (sehat) sama-sama pola yang umum." }],
  ["しんぱい", "shinpai", { en: "worry", id: "khawatir" }, "しんぱいしないでください。",
    [["しんぱいしないで", "Shinpai shinaide"], ["ください", "kudasai"]],
    { en: "Please don't worry.", id: "Tolong jangan khawatir." }, "心配", "心配しないでください。",
    { en: "しんぱい literally combines 心 (heart/mind) and 配 (distribute) and is most often used as a verb with する: しんぱいする (to worry).", id: "しんぱい secara harfiah menggabungkan 心 (hati/pikiran) dan 配 (mendistribusikan) dan paling sering dipakai sebagai kata kerja dengan する: しんぱいする (khawatir)." }],
  ["あんしん", "anshin", { en: "relief", id: "lega / tenang" }, "それを きいて あんしんしました。",
    [["それ", "Sore"], ["を", "wo"], ["きいて", "kiite"], ["あんしんしました", "anshin shimashita"]],
    { en: "I felt relieved to hear that.", id: "Saya merasa lega mendengar itu." }, "安心", "それを聞いて安心しました。",
    { en: "あんしん is the direct opposite of しんぱい — combining 安 (peace/safety) and 心 (heart), it describes a feeling of relief or peace of mind.", id: "あんしん adalah lawan langsung dari しんぱい — menggabungkan 安 (damai/aman) dan 心 (hati), kata ini menggambarkan perasaan lega atau tenang." }],
  ["つかれる", "tsukareru", { en: "to get tired", id: "menjadi lelah" }, "きょうは とても つかれました。",
    [["きょう", "Kyou"], ["は", "wa"], ["とても", "totemo"], ["つかれました", "tsukaremashita"]],
    { en: "I got very tired today.", id: "Hari ini saya sangat lelah." }, "疲れる", "今日はとても疲れました。",
    { en: "つかれる is a ru-verb meaning 'to become tired' — the past tense つかれました is the standard way to say 'I'm tired' about a completed state.", id: "つかれる adalah kata kerja golongan ru yang berarti 'menjadi lelah' — bentuk lampau つかれました adalah cara standar untuk mengatakan 'saya lelah' tentang kondisi yang sudah terjadi." }],
  ["ねむい", "nemui", { en: "sleepy", id: "mengantuk" }, "きょうは ねむいです。",
    [["きょう", "Kyou"], ["は", "wa"], ["ねむい", "nemui"], ["です", "desu"]],
    { en: "I'm sleepy today.", id: "Hari ini saya mengantuk." }, "眠い", "今日は眠いです。",
    { en: "ねむい describes feeling sleepy, different from つかれた (tired from exertion) — you can be つかれて いる (tired) without being ねむい (sleepy), and vice versa.", id: "ねむい menggambarkan rasa mengantuk, berbeda dari つかれた (lelah karena beraktivitas) — kamu bisa saja つかれて いる (lelah) tanpa ねむい (mengantuk), begitu pula sebaliknya." }],
  ["マスク", "masuku", { en: "mask", id: "masker" }, "マスクを つけてください。",
    [["マスク", "Masuku"], ["を", "wo"], ["つけて", "tsukete"], ["ください", "kudasai"]],
    { en: "Please wear a mask.", id: "Tolong pakai masker." }, "", "",
    { en: "マスク comes from the English word 'mask' and is written in katakana as a loanword — it's used with つける (attach/wear), the same verb used for glasses and accessories.", id: "マスク berasal dari kata Inggris 'mask' dan ditulis dalam katakana sebagai kata serapan — kata ini dipakai dengan つける (memasang/memakai), kata kerja yang sama dipakai untuk kacamata dan aksesori." }],
  ["おふろ", "ofuro", { en: "bath", id: "kamar mandi (bak rendam)" }, "よる おふろに はいります。",
    [["よる", "Yoru"], ["おふろ", "ofuro"], ["に", "ni"], ["はいります", "hairimasu"]],
    { en: "I take a bath at night.", id: "Saya mandi (berendam) di malam hari." }, "お風呂", "夜お風呂に入ります。",
    { en: "おふろに はいる literally means 'enter the bath' and is the standard phrase for taking a bath — the polite prefix お is almost always kept, even in casual speech.", id: "おふろに はいる secara harfiah berarti 'masuk ke bak mandi' dan merupakan frasa standar untuk mandi berendam — awalan sopan お hampir selalu dipertahankan, bahkan dalam percakapan santai." }],
  ["シャワー", "shawaa", { en: "shower", id: "shower" }, "あさ シャワーを あびます。",
    [["あさ", "Asa"], ["シャワー", "shawaa"], ["を", "wo"], ["あびます", "abimasu"]],
    { en: "I take a shower in the morning.", id: "Saya mandi shower di pagi hari." }, "", "",
    { en: "Unlike おふろ (a soaking bath) which uses はいる (to enter), シャワー (shower) uses the verb あびる (to pour over oneself) — シャワーを あびる.", id: "Berbeda dari おふろ (mandi berendam) yang memakai はいる (masuk), シャワー (shower) memakai kata kerja あびる (menyiram diri) — シャワーを あびる." }],
  ["はブラシ", "haburashi", { en: "toothbrush", id: "sikat gigi" }, "はブラシで はを みがきます。",
    [["はブラシ", "Haburashi"], ["で", "de"], ["は", "ha"], ["を", "wo"], ["みがきます", "migakimasu"]],
    { en: "I brush my teeth with a toothbrush.", id: "Saya menggosok gigi dengan sikat gigi." }, "歯ブラシ", "歯ブラシで歯を磨きます。",
    { en: "はブラシ mixes the kanji 歯 (tooth) with the katakana loanword ブラシ (brush) — this kanji-plus-katakana pattern is common for modern compound words.", id: "はブラシ menggabungkan kanji 歯 (gigi) dengan kata serapan katakana ブラシ (sikat) — pola kanji-plus-katakana ini umum untuk kata gabungan modern." }],
  ["シャンプー", "shanpuu", { en: "shampoo", id: "sampo" }, "この シャンプーは いい においです。",
    [["この", "Kono"], ["シャンプー", "shanpuu"], ["は", "wa"], ["いい", "ii"], ["におい", "nioi"], ["です", "desu"]],
    { en: "This shampoo has a nice smell.", id: "Sampo ini baunya enak." }, "", "",
    { en: "シャンプー is a katakana loanword from English 'shampoo', commonly used together with せっけん (soap) and リンス (conditioner) in bathroom vocabulary.", id: "シャンプー adalah kata serapan katakana dari bahasa Inggris 'shampoo', umum dipakai bersama せっけん (sabun) dan リンス (kondisioner) dalam kosakata kamar mandi." }],
  ["ドライヤー", "doraiyaa", { en: "hair dryer", id: "pengering rambut" }, "かみを ドライヤーで かわかします。",
    [["かみ", "Kami"], ["を", "wo"], ["ドライヤー", "doraiyaa"], ["で", "de"], ["かわかします", "kawakashimasu"]],
    { en: "I dry my hair with a hair dryer.", id: "Saya mengeringkan rambut dengan pengering rambut." }, "", "",
    { en: "ドライヤー comes from English 'dryer' and specifically refers to a hair dryer in everyday Japanese, even though the English word alone is more general.", id: "ドライヤー berasal dari bahasa Inggris 'dryer' dan secara khusus merujuk pada pengering rambut dalam bahasa Jepang sehari-hari, meski kata Inggrisnya sendiri lebih umum." }]
];

// Sub-Tier 8.2: Hewan, Musim, Olahraga, Hobi, & Sekolah
// Sub-Tier 8.2: Hewan & Serangga
const KOTOBA_N5_CH8_2 = [
  ["いぬ", "inu", { en: "dog", id: "anjing" }, "いぬが すきです。",
    [["いぬ", "Inu"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like dogs.", id: "Saya suka anjing." }, "犬", "犬が好きです。",
    { en: "犬 is one of the first animal kanji learners meet, and appears in casual idioms like 犬も歩けば棒に当たる (even a dog gets hit by a stick if it walks around — a proverb about being active).", id: "犬 adalah salah satu kanji hewan pertama yang dipelajari, dan muncul dalam idiom santai seperti 犬も歩けば棒に当たる (anjing pun kena tongkat kalau jalan-jalan — pepatah tentang aktif bergerak)." }],
  ["ねこ", "neko", { en: "cat", id: "kucing" }, "うちには ねこが にひき います。",
    [["うち", "Uchi"], ["に", "ni"], ["は", "wa"], ["ねこ", "neko"], ["が", "ga"], ["にひき", "nihiki"], ["います", "imasu"]],
    { en: "I have two cats at home.", id: "Di rumah saya ada dua ekor kucing." }, "猫", "うちには猫が二匹います。",
    { en: "Animals are counted with ひき (hiki), which changes sound depending on the number — いっぴき, にひき, さんびき — a classic N5 counter pattern.", id: "Hewan dihitung dengan ひき (hiki), yang berubah bunyi tergantung angkanya — いっぴき, にひき, さんびき — pola penghitung klasik level N5." }],
  ["とり", "tori", { en: "bird", id: "burung" }, "そらに とりが います。",
    [["そら", "Sora"], ["に", "ni"], ["とり", "tori"], ["が", "ga"], ["います", "imasu"]],
    { en: "There is a bird in the sky.", id: "Ada burung di langit." }, "鳥", "空に鳥がいます。",
    { en: "鳥 refers to birds in general; note that とり can also mean 'chicken meat' as food, distinct from にわとり (a live chicken).", id: "鳥 merujuk pada burung secara umum; perlu dicatat とり juga bisa berarti 'daging ayam' sebagai makanan, berbeda dari にわとり (ayam hidup)." }],
  ["うし", "ushi", { en: "cow", id: "sapi" }, "のうかで うしを みました。",
    [["のうか", "Nouka"], ["で", "de"], ["うし", "ushi"], ["を", "wo"], ["みました", "mimashita"]],
    { en: "I saw a cow at the farm.", id: "Saya melihat sapi di pertanian." }, "牛", "農家で牛を見ました。",
    { en: "牛 also appears in 牛肉 (beef) and 牛乳 (cow's milk) — the same kanji works for both the live animal and its products.", id: "牛 juga muncul dalam 牛肉 (daging sapi) dan 牛乳 (susu sapi) — kanji yang sama berlaku untuk hewan hidup maupun produknya." }],
  ["うま", "uma", { en: "horse", id: "kuda" }, "うまに のりたいです。",
    [["うま", "Uma"], ["に", "ni"], ["のりたい", "noritai"], ["です", "desu"]],
    { en: "I want to ride a horse.", id: "Saya ingin menunggang kuda." }, "馬", "馬に乗りたいです。",
    { en: "うま uses のる (to ride/board) with に, the same particle pattern used for riding trains and bicycles — うまに のる.", id: "うま menggunakan のる (menaiki) dengan partikel に, pola yang sama dipakai untuk menaiki kereta dan sepeda — うまに のる." }],
  ["ぶた", "buta", { en: "pig", id: "babi" }, "この のうかは ぶたを そだてて います。",
    [["この", "Kono"], ["のうか", "nouka"], ["は", "wa"], ["ぶた", "buta"], ["を", "wo"], ["そだてて", "sodatete"], ["います", "imasu"]],
    { en: "This farm raises pigs.", id: "Peternakan ini memelihara babi." }, "豚", "この農家は豚を育てています。",
    { en: "豚 also appears in 豚肉 (pork), one of the most common meats in Japanese cooking, alongside 牛肉 (beef) and 鶏肉 (chicken).", id: "豚 juga muncul dalam 豚肉 (daging babi), salah satu daging paling umum dalam masakan Jepang, bersama 牛肉 (daging sapi) dan 鶏肉 (daging ayam)." }],
  ["ぞう", "zou", { en: "elephant", id: "gajah" }, "どうぶつえんで ぞうを みました。",
    [["どうぶつえん", "Doubutsuen"], ["で", "de"], ["ぞう", "zou"], ["を", "wo"], ["みました", "mimashita"]],
    { en: "I saw an elephant at the zoo.", id: "Saya melihat gajah di kebun binatang." }, "象", "動物園で象を見ました。",
    { en: "象 is often one of the first animals children learn to recognize in kanji, thanks to its distinctive shape resembling the animal's trunk and body.", id: "象 sering menjadi salah satu kanji hewan pertama yang dikenali anak-anak, berkat bentuknya yang khas menyerupai belalai dan tubuh hewan tersebut." }],
  ["さる", "saru", { en: "monkey", id: "monyet" }, "やまに さるが たくさん います。",
    [["やま", "Yama"], ["に", "ni"], ["さる", "saru"], ["が", "ga"], ["たくさん", "takusan"], ["います", "imasu"]],
    { en: "There are many monkeys in the mountains.", id: "Ada banyak monyet di gunung." }, "猿", "山に猿がたくさんいます。",
    { en: "さる also appears in the proverb 猿も木から落ちる ('even monkeys fall from trees'), meaning even experts make mistakes sometimes.", id: "さる juga muncul dalam pepatah 猿も木から落ちる ('bahkan monyet jatuh dari pohon'), yang berarti bahkan ahli pun kadang berbuat salah." }],
  ["うさぎ", "usagi", { en: "rabbit", id: "kelinci" }, "うさぎは みみが ながいです。",
    [["うさぎ", "Usagi"], ["は", "wa"], ["みみ", "mimi"], ["が", "ga"], ["ながい", "nagai"], ["です", "desu"]],
    { en: "Rabbits have long ears.", id: "Kelinci memiliki telinga yang panjang." }, "兎", "兎は耳が長いです。",
    { en: "The kanji 兎 is uncommon and rarely taught at this level, so うさぎ is almost always written in hiragana in everyday text.", id: "Kanji 兎 jarang dipakai dan jarang diajarkan pada tingkat ini, sehingga うさぎ hampir selalu ditulis dalam hiragana dalam teks sehari-hari." }],
  ["くま", "kuma", { en: "bear", id: "beruang" }, "やまで くまを みました。",
    [["やま", "Yama"], ["で", "de"], ["くま", "kuma"], ["を", "wo"], ["みました", "mimashita"]],
    { en: "I saw a bear in the mountains.", id: "Saya melihat beruang di gunung." }, "熊", "山で熊を見ました。",
    { en: "くま often appears in place names in Japan, such as 熊本 (Kumamoto), a prefecture whose name literally includes the kanji for 'bear'.", id: "くま sering muncul dalam nama tempat di Jepang, seperti 熊本 (Kumamoto), sebuah prefektur yang namanya secara harfiah mengandung kanji 'beruang'." }],
  ["どうぶつ", "doubutsu", { en: "animal", id: "hewan" }, "どうぶつが すきですか。",
    [["どうぶつ", "Doubutsu"], ["が", "ga"], ["すき", "suki"], ["です", "desu"], ["か", "ka"]],
    { en: "Do you like animals?", id: "Apakah kamu suka binatang?" }, "動物", "動物が好きですか。",
    { en: "動物 literally means 'moving thing' — 動く (to move) plus 物 (thing) — a logical way Japanese constructs the word for 'animal'.", id: "動物 secara harfiah berarti 'benda yang bergerak' — 動く (bergerak) ditambah 物 (benda) — cara logis bahasa Jepang membentuk kata untuk 'hewan'." }],
  ["どうぶつえん", "doubutsuen", { en: "zoo", id: "kebun binatang" }, "にちようびに どうぶつえんへ いきます。",
    [["にちようび", "Nichiyoubi"], ["に", "ni"], ["どうぶつえん", "doubutsuen"], ["へ", "e"], ["いきます", "ikimasu"]],
    { en: "I'm going to the zoo on Sunday.", id: "Saya akan pergi ke kebun binatang hari Minggu." }, "動物園", "日曜日に動物園へ行きます。",
    { en: "どうぶつえん combines 動物 (animal) with 園 (garden/park) — the same 園 appears in 公園 (park) and ようちえん (kindergarten).", id: "どうぶつえん menggabungkan 動物 (hewan) dengan 園 (taman) — 園 yang sama muncul pada 公園 (taman umum) dan ようちえん (taman kanak-kanak)." }],
  ["むし", "mushi", { en: "insect", id: "serangga" }, "なつは むしが おおいです。",
    [["なつ", "Natsu"], ["は", "wa"], ["むし", "mushi"], ["が", "ga"], ["おおい", "ooi"], ["です", "desu"]],
    { en: "There are many insects in summer.", id: "Di musim panas banyak serangga." }, "虫", "夏は虫が多いです。",
    { en: "虫 is a broad word covering insects, bugs, and even worms — Japanese doesn't distinguish these as separately as English does in everyday speech.", id: "虫 adalah kata luas yang mencakup serangga, kutu, bahkan cacing — bahasa Jepang tidak membedakan ini secara terpisah seperti bahasa Indonesia dalam percakapan sehari-hari." }],
  ["ちょう", "chou", { en: "butterfly", id: "kupu-kupu" }, "にわに ちょうが とんで います。",
    [["にわ", "Niwa"], ["に", "ni"], ["ちょう", "chou"], ["が", "ga"], ["とんで", "tonde"], ["います", "imasu"]],
    { en: "A butterfly is flying in the garden.", id: "Kupu-kupu sedang terbang di taman." }, "蝶", "庭に蝶が飛んでいます。",
    { en: "ちょう is one of many insect names that use a dedicated kanji with the 虫 (insect) radical on the left side, a pattern shared with 蜂 (bee) and 蟻 (ant).", id: "ちょう adalah salah satu dari banyak nama serangga yang memakai kanji khusus dengan radikal 虫 (serangga) di sisi kiri, pola yang sama dengan 蜂 (lebah) dan 蟻 (semut)." }],
  ["はち", "hachi", { en: "bee", id: "lebah" }, "はちに さされました。",
    [["はち", "Hachi"], ["に", "ni"], ["さされました", "sasaremashita"]],
    { en: "I got stung by a bee.", id: "Saya disengat lebah." }, "蜂", "蜂に刺されました。",
    { en: "はち (bee) is a homophone of はち (eight, 八) — only the kanji or context distinguishes them, since they're pronounced identically.", id: "はち (lebah) adalah homofon dari はち (delapan, 八) — hanya kanji atau konteks yang membedakan keduanya, karena diucapkan sama persis." }]
];

// Sub-Tier 8.3: Olahraga, Hobi, & Sekolah
const KOTOBA_N5_CH8_3 = [
  ["うんどう", "undou", { en: "exercise", id: "olahraga" }, "まいにち うんどうを します。",
    [["まいにち", "Mainichi"], ["うんどう", "undou"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I exercise every day.", id: "Saya berolahraga setiap hari." }, "運動", "毎日運動をします。",
    { en: "うんどう is the general word for exercise or physical activity of any kind, while specific sports like サッカー have their own names.", id: "うんどう adalah kata umum untuk olahraga atau aktivitas fisik apa pun, sementara olahraga spesifik seperti サッカー memiliki nama masing-masing." }],
  ["サッカー", "sakkaa", { en: "soccer", id: "sepak bola" }, "しゅうまつ サッカーを します。",
    [["しゅうまつ", "Shuumatsu"], ["サッカー", "sakkaa"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I play soccer on the weekend.", id: "Saya bermain sepak bola di akhir pekan." }, "", "",
    { en: "サッカー comes from the English 'soccer' and is written in katakana as a loanword — most modern sports names in Japanese follow this pattern.", id: "サッカー berasal dari bahasa Inggris 'soccer' dan ditulis dalam katakana sebagai kata serapan — sebagian besar nama olahraga modern dalam bahasa Jepang mengikuti pola ini." }],
  ["やきゅう", "yakyuu", { en: "baseball", id: "bisbol" }, "やきゅうを みるのが すきです。",
    [["やきゅう", "Yakyuu"], ["を", "wo"], ["みる", "miru"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like watching baseball.", id: "Saya suka menonton bisbol." }, "野球", "野球を見るのが好きです。",
    { en: "野球 literally means 'field ball' — combining 野 (field) and 球 (ball) — and is one of the most popular spectator sports in Japan.", id: "野球 secara harfiah berarti 'bola lapangan' — menggabungkan 野 (lapangan) dan 球 (bola) — dan merupakan salah satu olahraga tontonan paling populer di Jepang." }],
  ["テニス", "tenisu", { en: "tennis", id: "tenis" }, "たなかさんは テニスが じょうずです。",
    [["たなかさん", "Tanaka-san"], ["は", "wa"], ["テニス", "tenisu"], ["が", "ga"], ["じょうず", "jouzu"], ["です", "desu"]],
    { en: "Mr./Ms. Tanaka is good at tennis.", id: "Tanaka pandai bermain tenis." }, "", "",
    { en: "テニス uses が with じょうず (skilled) to describe what someone is good at — the skill itself, not the person, takes が.", id: "テニス memakai partikel が dengan じょうず (mahir) untuk menggambarkan apa yang seseorang kuasai — keahlian itu sendiri, bukan orangnya, yang memakai partikel が." }],
  ["すいえい", "suiei", { en: "swimming", id: "berenang" }, "なつやすみに すいえいを ならいます。",
    [["なつやすみ", "Natsuyasumi"], ["に", "ni"], ["すいえい", "suiei"], ["を", "wo"], ["ならいます", "naraimasu"]],
    { en: "I'll learn swimming during summer vacation.", id: "Saya akan belajar berenang saat libur musim panas." }, "水泳", "夏休みに水泳を習います。",
    { en: "水泳 combines 水 (water) and 泳 (swim) — the standalone verb およぐ (to swim) uses the same 泳 kanji.", id: "水泳 menggabungkan 水 (air) dan 泳 (berenang) — kata kerja mandiri およぐ (berenang) memakai kanji 泳 yang sama." }],
  ["バスケットボール", "basukettobooru", { en: "basketball", id: "bola basket" }, "たかしくんは バスケットボールの せんしゅです。",
    [["たかしくん", "Takashi-kun"], ["は", "wa"], ["バスケットボール", "basukettobooru"], ["の", "no"], ["せんしゅ", "senshu"], ["です", "desu"]],
    { en: "Takashi is a basketball player.", id: "Takashi adalah pemain bola basket." }, "", "",
    { en: "バスケットボール is often shortened to just バスケ in casual conversation — a common pattern of clipping long katakana loanwords.", id: "バスケットボール sering disingkat menjadi バスケ saja dalam percakapan santai — pola umum memotong kata serapan katakana yang panjang." }],
  ["バレーボール", "bareebooru", { en: "volleyball", id: "bola voli" }, "がっこうで バレーボールを しました。",
    [["がっこう", "Gakkou"], ["で", "de"], ["バレーボール", "bareebooru"], ["を", "wo"], ["しました", "shimashita"]],
    { en: "I played volleyball at school.", id: "Saya bermain voli di sekolah." }, "", "",
    { en: "バレーボール is easily confused with バレエ (ballet) since both start with バレ — pay attention to the long vowel and following sounds.", id: "バレーボール mudah tertukar dengan バレエ (balet) karena keduanya diawali バレ — perhatikan bunyi vokal panjang dan bunyi setelahnya." }],
  ["すもう", "sumou", { en: "sumo", id: "sumo" }, "にほんの すもうを みたことが ありますか。",
    [["にほん", "Nihon"], ["の", "no"], ["すもう", "sumou"], ["を", "wo"], ["みた", "mita"], ["こと", "koto"], ["が", "ga"], ["あります", "arimasu"], ["か", "ka"]],
    { en: "Have you ever seen Japanese sumo?", id: "Apakah kamu pernah melihat sumo Jepang?" }, "相撲", "日本の相撲を見たことがありますか。",
    { en: "すもう is Japan's traditional national sport, and the kanji 相撲 is considered advanced, so the word is usually written in hiragana in everyday text.", id: "すもう adalah olahraga tradisional nasional Jepang, dan kanji 相撲 dianggap tingkat lanjut, sehingga kata ini biasanya ditulis dalam hiragana pada teks sehari-hari." }],
  ["かつ", "katsu", { en: "to win", id: "menang" }, "わたしたちの チームが かちました。",
    [["わたしたち", "Watashitachi"], ["の", "no"], ["チーム", "chiimu"], ["が", "ga"], ["かちました", "kachimashita"]],
    { en: "Our team won.", id: "Tim kami menang." }, "勝つ", "私たちのチームが勝ちました。",
    { en: "かつ is a u-verb meaning 'to win' — it takes the particle に when naming an opponent (たなかさんに かちました, I won against Tanaka), and が for a competition.", id: "かつ adalah kata kerja golongan u yang berarti 'menang' — memakai partikel に saat menyebutkan lawan (たなかさんに かちました, saya menang melawan Tanaka), dan が untuk kompetisi." }],
  ["まける", "makeru", { en: "to lose", id: "kalah" }, "しあいで まけました。",
    [["しあい", "Shiai"], ["で", "de"], ["まけました", "makemashita"]],
    { en: "I lost the match.", id: "Saya kalah dalam pertandingan." }, "負ける", "試合で負けました。",
    { en: "まける is the direct opposite of かつ (to win) — both are common ru-verbs used together when talking about games, matches, and competitions.", id: "まける adalah lawan langsung dari かつ (menang) — keduanya adalah kata kerja golongan ru yang umum dipakai bersama saat membicarakan permainan, pertandingan, dan kompetisi." }],
  ["え", "e", { en: "picture / drawing", id: "gambar / lukisan" }, "えを かくのが すきです。",
    [["え", "E"], ["を", "wo"], ["かく", "kaku"], ["の", "no"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like drawing pictures.", id: "Saya suka menggambar." }, "絵", "絵を描くのが好きです。",
    { en: "え uses a special verb かく (描く, to draw/paint) that's written with a different kanji from かく (書く, to write) used for letters and text — same reading, different meaning.", id: "え memakai kata kerja khusus かく (描く, menggambar/melukis) yang ditulis dengan kanji berbeda dari かく (書く, menulis) yang dipakai untuk huruf dan teks — bacaan sama, arti berbeda." }],
  ["えいが", "eiga", { en: "movie", id: "film" }, "しゅうまつ えいがを みます。",
    [["しゅうまつ", "Shuumatsu"], ["えいが", "eiga"], ["を", "wo"], ["みます", "mimasu"]],
    { en: "I watch a movie on the weekend.", id: "Saya menonton film di akhir pekan." }, "映画", "週末映画を見ます。",
    { en: "映画 combines 映 (reflect/project) and 画 (picture) — the theater where you watch one, 映画館 (eigakan), uses the same first kanji.", id: "映画 menggabungkan 映 (memantulkan/memproyeksikan) dan 画 (gambar) — bioskop tempat menontonnya, 映画館 (eigakan), memakai kanji pertama yang sama." }],
  ["おどる", "odoru", { en: "to dance", id: "menari" }, "パーティーで おどりました。",
    [["パーティー", "Paatii"], ["で", "de"], ["おどりました", "odorimashita"]],
    { en: "I danced at the party.", id: "Saya menari di pesta." }, "踊る", "パーティーで踊りました。",
    { en: "おどる is a u-verb for dancing of any kind, from traditional festival dances (ぼんおどり) to modern club dancing.", id: "おどる adalah kata kerja golongan u untuk menari jenis apa pun, mulai dari tarian festival tradisional (ぼんおどり) hingga menari modern di klub." }],
  ["りょこう", "ryokou", { en: "travel", id: "bepergian" }, "なつやすみに りょこうを します。",
    [["なつやすみ", "Natsuyasumi"], ["に", "ni"], ["りょこう", "ryokou"], ["を", "wo"], ["します", "shimasu"]],
    { en: "I'll travel during summer vacation.", id: "Saya akan bepergian saat libur musim panas." }, "旅行", "夏休みに旅行をします。",
    { en: "りょこう pairs naturally with する to become the verb 'to travel' (りょこうする), and often appears with a destination marked by に or へ, like にほんに りょこうする.", id: "りょこう berpasangan alami dengan する menjadi kata kerja 'bepergian' (りょこうする), dan sering muncul dengan tujuan yang ditandai に atau へ, seperti にほんに りょこうする." }],
  ["つり", "tsuri", { en: "fishing", id: "memancing" }, "ちちと つりに いきました。",
    [["ちち", "Chichi"], ["と", "to"], ["つり", "tsuri"], ["に", "ni"], ["いきました", "ikimashita"]],
    { en: "I went fishing with my father.", id: "Saya pergi memancing bersama ayah saya." }, "釣り", "父と釣りに行きました。",
    { en: "つりに いく ('go fishing') follows the same [hobby]に いく pattern as りょこうに いく (go traveling) — a very productive structure for talking about activities.", id: "つりに いく ('pergi memancing') mengikuti pola [hobi]に いく yang sama seperti りょこうに いく (pergi bepergian) — struktur yang sangat produktif untuk membicarakan aktivitas." }],
  ["キャンプ", "kyanpu", { en: "camping", id: "berkemah" }, "かぞくで キャンプに いきます。",
    [["かぞく", "Kazoku"], ["で", "de"], ["キャンプ", "kyanpu"], ["に", "ni"], ["いきます", "ikimasu"]],
    { en: "I go camping with my family.", id: "Saya pergi berkemah bersama keluarga." }, "", "",
    { en: "キャンプ comes from the English 'camp' and is often combined with する (キャンプする) or いく (キャンプに いく) to describe the activity of camping.", id: "キャンプ berasal dari bahasa Inggris 'camp' dan sering digabung dengan する (キャンプする) atau いく (キャンプに いく) untuk menggambarkan aktivitas berkemah." }],
  ["すうがく", "suugaku", { en: "mathematics", id: "matematika" }, "すうがくは むずかしいです。",
    [["すうがく", "Suugaku"], ["は", "wa"], ["むずかしい", "muzukashii"], ["です", "desu"]],
    { en: "Mathematics is difficult.", id: "Matematika itu sulit." }, "数学", "数学は難しいです。",
    { en: "数学 combines 数 (number) and 学 (study) — the same 学 pattern names other school subjects, like 科学 (science) and 文学 (literature).", id: "数学 menggabungkan 数 (angka) dan 学 (ilmu) — pola 学 yang sama menamai mata pelajaran lain, seperti 科学 (sains) dan 文学 (sastra)." }],
  ["かがく", "kagaku", { en: "science", id: "sains" }, "かがくの じゅぎょうが すきです。",
    [["かがく", "Kagaku"], ["の", "no"], ["じゅぎょう", "jugyou"], ["が", "ga"], ["すき", "suki"], ["です", "desu"]],
    { en: "I like science class.", id: "Saya suka pelajaran sains." }, "科学", "科学の授業が好きです。",
    { en: "かがく (science, 科学) is a homophone of かがく (price, 価額) and 化学 (chemistry, also read かがく) — context and kanji distinguish the meanings.", id: "かがく (sains, 科学) adalah homofon dari かがく (harga, 価額) dan 化学 (kimia, juga dibaca かがく) — konteks dan kanji membedakan maknanya." }],
  ["じゅぎょう", "jugyou", { en: "class / lesson", id: "pelajaran" }, "じゅぎょうは くじから はじまります。",
    [["じゅぎょう", "Jugyou"], ["は", "wa"], ["くじ", "kuji"], ["から", "kara"], ["はじまります", "hajimarimasu"]],
    { en: "Class starts from 9 o'clock.", id: "Pelajaran dimulai dari jam 9." }, "授業", "授業は九時から始まります。",
    { en: "じゅぎょう refers to a class period or lesson itself, different from がっこう (the school as an institution) or きょうしつ (the classroom as a physical room).", id: "じゅぎょう merujuk pada jam pelajaran atau les itu sendiri, berbeda dari がっこう (sekolah sebagai institusi) atau きょうしつ (ruang kelas sebagai ruangan fisik)." }],
  ["テスト", "tesuto", { en: "test", id: "tes" }, "あした テストが あります。",
    [["あした", "Ashita"], ["テスト", "tesuto"], ["が", "ga"], ["あります", "arimasu"]],
    { en: "There is a test tomorrow.", id: "Besok ada tes." }, "", "",
    { en: "テスト is a casual loanword for a quiz or test, used interchangeably with the more formal native word しけん in everyday conversation.", id: "テスト adalah kata serapan santai untuk kuis atau tes, dipakai bergantian dengan kata asli yang lebih formal しけん dalam percakapan sehari-hari." }],
  ["しけん", "shiken", { en: "exam", id: "ujian" }, "にほんごの しけんを うけます。",
    [["にほんご", "Nihongo"], ["の", "no"], ["しけん", "shiken"], ["を", "wo"], ["うけます", "ukemasu"]],
    { en: "I'm taking a Japanese language exam.", id: "Saya akan mengikuti ujian bahasa Jepang." }, "試験", "日本語の試験を受けます。",
    { en: "しけん carries a more formal, higher-stakes nuance than テスト — it's used for entrance exams, certification exams, and other serious tests, always paired with the verb うける (to take/receive).", id: "しけん membawa nuansa yang lebih formal dan berisiko tinggi dibanding テスト — dipakai untuk ujian masuk, ujian sertifikasi, dan tes serius lainnya, selalu dipasangkan dengan kata kerja うける (mengikuti/menerima)." }]
];

const KOTOBA_TIER_KEYS = ["tier1", "tier2", "tier3", "tier4", "tier5", "tier6", "tier7", "tier8", "tier9", "tier10", "tier11", "tier12", "tier13", "tier14", "tier15", "tier16", "tier17", "tier18", "tier19", "tier20", "tier21", "tier22", "tier23", "tier24", "tier25", "tier26", "tier27"];
const KOTOBA_N5_CHAPTERS = [
  KOTOBA_N5_CH1_1, KOTOBA_N5_CH1_2, KOTOBA_N5_CH1_3,
  KOTOBA_N5_CH2_1, KOTOBA_N5_CH2_2, KOTOBA_N5_CH2_3, KOTOBA_N5_CH2_4,
  KOTOBA_N5_CH3_1, KOTOBA_N5_CH3_2, KOTOBA_N5_CH3_3,
  KOTOBA_N5_CH4_1, KOTOBA_N5_CH4_2, KOTOBA_N5_CH4_3,
  KOTOBA_N5_CH5_1, KOTOBA_N5_CH5_2, KOTOBA_N5_CH5_3,
  KOTOBA_N5_CH6_1, KOTOBA_N5_CH6_2, KOTOBA_N5_CH6_3,
  KOTOBA_N5_CH7_1, KOTOBA_N5_CH7_2, KOTOBA_N5_CH7_3, KOTOBA_N5_CH7_4, KOTOBA_N5_CH7_5,
  KOTOBA_N5_CH8_1, KOTOBA_N5_CH8_2, KOTOBA_N5_CH8_3
];
const KOTOBA_N5_LEVEL_META = [
  ...KOTOBA_TIER_KEYS.map((id, i) => ({ id, tier: i + 1, rank: "N5" })),
  { id: "all", tier: KOTOBA_TIER_KEYS.length, rank: "N5" }
];
const KOTOBA_N5_LEVEL_TEXT = {
  tier1: { title: { en: "Tier 1.1 — Personal Pronouns & Greetings", id: "Tier 1.1 — Kata Ganti Orang & Sapaan" }, sample: "わたし あなた こんにちは", desc: { en: "54 N5 vocabulary words.", id: "54 kosakata N5." } },
  tier2: { title: { en: "Tier 1.2 — Family & Relationships", id: "Tier 1.2 — Keluarga & Hubungan" }, sample: "かぞく ちち はは", desc: { en: "29 N5 vocabulary words.", id: "29 kosakata N5." } },
  tier3: { title: { en: "Tier 1.3 — Occupations & Roles", id: "Tier 1.3 — Profesi & Peran" }, sample: "がくせい かいしゃいん", desc: { en: "28 N5 vocabulary words.", id: "28 kosakata N5." } },
  tier4: { title: { en: "Tier 2.1 — Daily Time & Time Expressions", id: "Tier 2.1 — Waktu Harian & Keterangan Waktu" }, sample: "いま きょう あした", desc: { en: "28 N5 vocabulary words.", id: "28 kosakata N5." } },
  tier5: { title: { en: "Tier 2.2 — Days, Months, & Hours", id: "Tier 2.2 — Hari, Bulan, & Jam" }, sample: "げつようび いちじかん", desc: { en: "53 N5 vocabulary words.", id: "53 kosakata N5." } },
  tier6: { title: { en: "Tier 2.3 — Numbers & Counters", id: "Tier 2.3 — Bilangan & Satuan Penghitung" }, sample: "ひとつ ひとり まい", desc: { en: "35 N5 vocabulary words.", id: "35 kosakata N5." } },
  tier7: { title: { en: "Tier 2.4 — Frequency & Duration", id: "Tier 2.4 — Frekuensi & Durasi" }, sample: "いつも よく たまに", desc: { en: "21 N5 vocabulary words.", id: "21 kosakata N5." } },
  tier8: { title: { en: "Tier 3.1 — Food & Drinks", id: "Tier 3.1 — Makanan & Minuman" }, sample: "ごはん たまご くだもの", desc: { en: "36 N5 vocabulary words.", id: "36 kosakata N5." } },
  tier9: { title: { en: "Tier 3.2 — Personal Items & Home", id: "Tier 3.2 — Benda-benda Pribadi & Rumah" }, sample: "ほん つくえ でんわ", desc: { en: "52 N5 vocabulary words.", id: "52 kosakata N5." } },
  tier10: { title: { en: "Tier 3.3 — Clothing & Accessories", id: "Tier 3.3 — Pakaian & Aksesori" }, sample: "ふく くつ ぼうし", desc: { en: "21 N5 vocabulary words.", id: "21 kosakata N5." } },
  tier11: { title: { en: "Tier 4.1 — Locations & Public Facilities", id: "Tier 4.1 — Lokasi & Fasilitas Publik" }, sample: "がっこう びょういん こうえん", desc: { en: "29 N5 vocabulary words.", id: "29 kosakata N5." } },
  tier12: { title: { en: "Tier 4.2 — Direction & Position", id: "Tier 4.2 — Arah & Posisi" }, sample: "うえ した みぎ", desc: { en: "14 N5 vocabulary words.", id: "14 kosakata N5." } },
  tier13: { title: { en: "Tier 4.3 — Transportation & City Features", id: "Tier 4.3 — Transportasi & Fitur Kota" }, sample: "でんしゃ くるま バス", desc: { en: "21 N5 vocabulary words.", id: "21 kosakata N5." } },
  tier14: { title: { en: "Tier 5.1 — Basic Daily Activities", id: "Tier 5.1 — Aktivitas Dasar Harian" }, sample: "たべる のむ みる", desc: { en: "28 N5 vocabulary words.", id: "28 kosakata N5." } },
  tier15: { title: { en: "Tier 5.2 — Movement & Mobility", id: "Tier 5.2 — Perpindahan & Mobilisasi" }, sample: "いく くる かえる", desc: { en: "22 N5 vocabulary words.", id: "22 kosakata N5." } },
  tier16: { title: { en: "Tier 5.3 — Interaction, Transactions, & Work", id: "Tier 5.3 — Interaksi, Transaksi, & Kerja" }, sample: "はなす かく かう", desc: { en: "24 N5 vocabulary words.", id: "24 kosakata N5." } },
  tier17: { title: { en: "Tier 6.1 — Descriptive i-Adjectives", id: "Tier 6.1 — Kata Sifat-i Deskriptif" }, sample: "おおきい ちいさい", desc: { en: "23 N5 vocabulary words.", id: "23 kosakata N5." } },
  tier18: { title: { en: "Tier 6.2 — Weather & Sensory i-Adjectives", id: "Tier 6.2 — Kata Sifat-i Cuaca & Sensori" }, sample: "あつい さむい いたい", desc: { en: "15 N5 vocabulary words.", id: "15 kosakata N5." } },
  tier19: { title: { en: "Tier 6.3 — na-Adjectives & Status", id: "Tier 6.3 — Kata Sifat-na & Status" }, sample: "すき きらい げんき", desc: { en: "22 N5 vocabulary words.", id: "22 kosakata N5." } },
  tier20: { title: { en: "Tier 7.1 — Nature & Weather", id: "Tier 7.1 — Alam & Cuaca" }, sample: "てんき あめ やま", desc: { en: "19 N5 vocabulary words.", id: "19 kosakata N5." } },
  tier21: { title: { en: "Tier 7.2 — Colors", id: "Tier 7.2 — Warna" }, sample: "あか あお きいろ", desc: { en: "14 N5 vocabulary words.", id: "14 kosakata N5." } },
  tier22: { title: { en: "Tier 7.3 — Question Words & Adverbs", id: "Tier 7.3 — Kata Tanya & Kata Keterangan" }, sample: "どこ だれ いつも", desc: { en: "16 N5 vocabulary words.", id: "16 kosakata N5." } },
  tier23: { title: { en: "Tier 7.4 — Conjunctions & Connectors", id: "Tier 7.4 — Kata Hubung & Sambungan" }, sample: "そして でも だから", desc: { en: "9 N5 vocabulary words.", id: "9 kosakata N5." } },
  tier24: { title: { en: "Tier 7.5 — Adverbs & Modifiers", id: "Tier 7.5 — Kata Keterangan Derajat & Tata Bahasa" }, sample: "とても すこし もっと", desc: { en: "13 N5 vocabulary words.", id: "13 kosakata N5." } },
  tier25: { title: { en: "Tier 8.1 — Body & Health", id: "Tier 8.1 — Tubuh & Kesehatan" }, sample: "あたま かお びょうき", desc: { en: "40 N5 vocabulary words.", id: "40 kosakata N5." } },
  tier26: { title: { en: "Tier 8.2 — Animals & Insects", id: "Tier 8.2 — Hewan & Serangga" }, sample: "いぬ ねこ むし", desc: { en: "15 N5 vocabulary words.", id: "15 kosakata N5." } },
  tier27: { title: { en: "Tier 8.3 — Sports, Hobbies, & School", id: "Tier 8.3 — Olahraga, Hobi, & Sekolah" }, sample: "サッカー えいが テスト", desc: { en: "21 N5 vocabulary words.", id: "21 kosakata N5." } },
  all: { title: { en: "All Mixed", id: "seluruh Campur" }, sample: "せんせい あるく げんき", desc: { en: "All 702 N5 vocabulary words shuffled into one Chapter.", id: "Seluruh 702 kosakata N5 diacak menjadi satu Chapter." } }
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
    title: { en: "Chapter 7 — Nature, Colors & Grammar Words", id: "Chapter 7 — Alam, Warna & Kata Tata Bahasa" } },
  { tierKeys: ["tier25", "tier26", "tier27"], sample: "あたま いぬ サッカー",
    title: { en: "Chapter 8 — Body, Animals, Sports & Hobbies", id: "Chapter 8 — Tubuh, Hewan, Olahraga & Hobi" } }
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

/* ---- Kotoba N5 — pengelompokan isi tiap Sub-Tier berdasarkan JENIS kata ----
   Seluruh 24 Sub-Tier (1.1 s/d 7.5) urutan aslinya masih
   campur (mis. di Makanan & Minuman, "minuman" nyempil di antara "lauk").
   KOTOBA_CATEGORY_DEFS di bawah menata ulang urutan kartu di Mode Belajar
   jadi berkelompok per jenis + dikasih pemisah kategori, TANPA mengubah data
   asli KOTOBA_N5_CHAPTERS (dipakai Mode Kuis, urutannya tetap seperti semula).
   Cara nambah/ubah: cukup geser kata-nya ke array `words` kategori yang mau.
   Kata yang belum terdaftar otomatis masuk kelompok "Lainnya" di paling akhir. */
const KOTOBA_CATEGORY_DEFS = {
  tier1: [
    { label: { en: "Personal Pronouns", id: "Kata Ganti Orang" },
      words: ["わたし", "わたしたち", "あなた", "かれ", "かのじょ", "かれら"] },
    { label: { en: "Words for People", id: "Sebutan untuk Orang" },
      words: ["ひと", "かた", "あのひと", "あのかた", "みなさん", "みんな"] },
    { label: { en: "Name Suffixes", id: "Akhiran Sapaan Nama" },
      words: ["さん", "くん", "ちゃん", "じん"] },
    { label: { en: "Daily Greetings", id: "Salam Harian" },
      words: ["おはようございます", "こんにちは", "こんばんは", "おやすみなさい", "さようなら"] },
    { label: { en: "Leaving & Coming Home", id: "Salam Keluar & Pulang Rumah" },
      words: ["いってきます", "いってらっしゃい", "ただいま", "おかえりなさい"] },
    { label: { en: "Thanks & Apologies", id: "Terima Kasih & Permintaan Maaf" },
      words: ["ありがとうございます", "どういたしまして", "すみません", "ごめんなさい"] },
    { label: { en: "Introducing Yourself", id: "Perkenalan Diri" },
      words: ["はじめまして", "よろしくおねがいします", "なまえ"] },
    { label: { en: "Mealtime Phrases", id: "Ungkapan Saat Makan" },
      words: ["いただきます", "ごちそうさまでした"] },
    { label: { en: "Asking Who", id: "Kata Tanya Orang" },
      words: ["だれ", "どなた"] },
    { label: { en: "Demonstratives — Things", id: "Kata Tunjuk Benda" },
      words: ["これ", "それ", "あれ", "どれ"] },
    { label: { en: "Demonstratives — + Noun", id: "Kata Tunjuk + Kata Benda" },
      words: ["この", "その", "あの", "どの"] },
    { label: { en: "Demonstratives — Places", id: "Kata Tunjuk Tempat" },
      words: ["ここ", "そこ", "あそこ", "どこ"] },
    { label: { en: "Demonstratives — Directions (polite)", id: "Kata Tunjuk Arah (Sopan)" },
      words: ["こちら", "そちら", "あちら", "どちら"] },
    { label: { en: "Yes & No", id: "Jawaban Ya & Tidak" },
      words: ["はい", "いいえ"] }
  ],
  tier2: [
    { label: { en: "Family in General", id: "Keluarga Secara Umum" },
      words: ["かぞく", "ごかぞく", "りょうしん", "きょうだい"] },
    { label: { en: "My Own Family (humble)", id: "Keluarga Sendiri (Merendah)" },
      words: ["ちち", "はは", "あに", "あね", "おとうと", "いもうと", "つま", "かない", "おっと", "しゅじん"] },
    { label: { en: "Someone Else's Family (polite)", id: "Keluarga Orang Lain (Sopan)" },
      words: ["おとうさん", "おかあさん", "おにいさん", "おねえさん", "おとうとさん", "いもうとさん", "おくさん", "ごしゅじん"] },
    { label: { en: "Children", id: "Anak" },
      words: ["こども", "おこさん"] },
    { label: { en: "Friends & People at School", id: "Teman & Orang di Sekolah" },
      words: ["ともだち", "せいと", "がくせい", "りゅうがくせい", "せんせい"] }
  ],
  tier3: [
    { label: { en: "Education — Teachers & Students", id: "Pendidikan — Guru & Pelajar" },
      words: ["がくせい", "せいと", "りゅうがくせい", "せんせい", "きょうし"] },
    { label: { en: "Office & Shop Workers", id: "Pekerja Kantor & Toko" },
      words: ["かいしゃいん", "しゃいん", "ぎんこういん", "てんいん", "こうむいん"] },
    { label: { en: "Professional Occupations", id: "Profesi Keahlian" },
      words: ["いしゃ", "かんごし", "べんごし", "けいかん", "エンジニア", "けんきゅうしゃ"] },
    { label: { en: "By Age & Gender", id: "Menurut Usia & Gender" },
      words: ["おとな", "こども", "おとこのひと", "おんなのひと", "おとこのこ", "おんなのこ"] },
    { label: { en: "General Words for People", id: "Sebutan Umum untuk Orang" },
      words: ["ひと", "かた", "みなさん"] },
    { label: { en: "Work & Languages", id: "Pekerjaan & Bahasa" },
      words: ["しごと", "にほんご", "えいご"] }
  ],
  tier4: [
    { label: { en: "Now, Today & Nearby Days", id: "Sekarang, Hari Ini & Hari Sekitarnya" },
      words: ["いま", "きょう", "あした", "きのう", "あさって", "おととい"] },
    { label: { en: "Parts of the Day", id: "Bagian Waktu dalam Sehari" },
      words: ["あさ", "ひる", "ゆうがた", "ばん", "よる"] },
    { label: { en: "Specific Moments", id: "Penunjuk Waktu Spesifik" },
      words: ["けさ", "こんばん", "ゆうべ"] },
    { label: { en: "Every ~ (Routine)", id: "Setiap ~ (Rutin)" },
      words: ["まいにち", "まいあさ", "まいばん"] },
    { label: { en: "AM & PM", id: "Pembagian AM & PM" },
      words: ["ごぜん", "ごご"] },
    { label: { en: "Frequency & Asking When", id: "Frekuensi & Kata Tanya Waktu" },
      words: ["いつ", "いつも", "ときどき"] },
    { label: { en: "Sooner or Later", id: "Cepat-Lambatnya Waktu" },
      words: ["すぐに", "もうすぐ", "あとで", "まだ", "もう"] },
    { label: { en: "Days Off", id: "Hari Libur" },
      words: ["やすみ"] }
  ],
  tier5: [
    { label: { en: "Days of the Week", id: "Hari dalam Seminggu" },
      words: ["げつようび", "かようび", "すいようび", "もくようび", "きんようび", "どようび", "にちようび", "なんようび"] },
    { label: { en: "Calendar Months", id: "Bulan dalam Kalender" },
      words: ["いちがつ", "にがつ", "さんがつ", "しがつ", "ごがつ", "ろくがつ", "しちがつ", "はちがつ", "くがつ", "じゅうがつ", "じゅういちがつ", "じゅうにがつ", "なんがつ"] },
    { label: { en: "Clock Time & Units", id: "Jam, Menit & Satuan Waktu" },
      words: ["じかん", "いちじかん", "なんじかん", "ふん", "なんぷん", "びょう", "いちじ", "なんじ", "はん"] },
    { label: { en: "Approximate Time & Limits", id: "Perkiraan Waktu & Batasnya" },
      words: ["ごろ", "ぐらい", "まえ", "すぎ", "から", "まで"] },
    { label: { en: "Weeks", id: "Minggu" },
      words: ["こんしゅう", "せんしゅう", "らいしゅう", "いっしゅうかん"] },
    { label: { en: "Months (this / last / next)", id: "Bulan (Ini / Lalu / Depan)" },
      words: ["こんげつ", "せんげつ", "らいげつ"] },
    { label: { en: "Years", id: "Tahun" },
      words: ["ことし", "きょねん", "らいねん", "さらいねん", "いちねん", "なんねん"] },
    { label: { en: "Every ~ (Routine)", id: "Setiap ~ (Rutin)" },
      words: ["まいあさ", "まいしゅう", "まいつき", "まいとし"] }
  ],
  tier6: [
    { label: { en: "Native Japanese Numbers (1-10)", id: "Bilangan Asli Jepang (1-10)" },
      words: ["ひとつ", "ふたつ", "みっつ", "よっつ", "いつつ", "むっつ", "ななつ", "やっつ", "ここのつ", "とお"] },
    { label: { en: "Large Numbers", id: "Angka Besar" },
      words: ["ゼロ", "ひゃく", "せん", "まん"] },
    { label: { en: "Counting People", id: "Penghitung Orang" },
      words: ["ひとり", "ふたり", "さんにん", "なんにん"] },
    { label: { en: "Counting Objects", id: "Penghitung Benda" },
      words: ["こ", "ほん", "まい", "なんまい", "さつ", "だい", "はい", "そく", "ちゃく", "ひき"] },
    { label: { en: "Order & Frequency Counters", id: "Penghitung Urutan & Frekuensi" },
      words: ["かい", "ばん", "ばんめ"] },
    { label: { en: "Quantity & Asking How Many", id: "Jumlah & Kata Tanya Berapa" },
      words: ["いくつ", "ぜんぶ", "だけ"] }
  ],
  tier7: [
    { label: { en: "Frequency (often to never)", id: "Frekuensi (Sering ke Tidak Pernah)" },
      words: ["いつも", "たいてい", "よく", "ときどき", "たまに", "あまり", "ぜんぜん"] },
    { label: { en: "Right Away or Not Yet", id: "Segera atau Belum" },
      words: ["すぐ", "もうすぐ", "まだ"] },
    { label: { en: "Duration", id: "Durasi & Lamanya" },
      words: ["ずっと", "しばらく", "ちょっと", "あいだ"] },
    { label: { en: "Pace & Gradual Change", id: "Kecepatan & Perubahan Bertahap" },
      words: ["ゆっくり", "だんだん"] },
    { label: { en: "Order & Repetition", id: "Urutan & Pengulangan" },
      words: ["はじめに", "さいごに", "もういちど"] },
    { label: { en: "Approximation", id: "Perkiraan Jumlah & Lama" },
      words: ["どのくらい", "ぐらい"] }
  ],
  tier8: [
    { label: { en: "General Words & Meals", id: "Istilah Umum & Waktu Makan" },
      words: ["たべもの", "のみもの", "りょうり", "ごはん", "あさごはん", "ひるごはん", "ばんごはん", "べんとう"] },
    { label: { en: "Drinks", id: "Minuman" },
      words: ["みず", "おちゃ", "こうちゃ", "ぎゅうにゅう", "ジュース", "コーヒー", "ビール", "おさけ"] },
    { label: { en: "Meat, Fish & Eggs", id: "Daging, Ikan & Telur" },
      words: ["にく", "ぎゅうにく", "ぶたにく", "とりにく", "さかな", "たまご"] },
    { label: { en: "Vegetables & Fruit", id: "Sayur & Buah" },
      words: ["やさい", "くだもの"] },
    { label: { en: "Staples & Cooked Dishes", id: "Makanan Pokok & Olahan" },
      words: ["パン", "そば", "ラーメン", "カレー"] },
    { label: { en: "Snacks & Sweets", id: "Camilan & Makanan Manis" },
      words: ["おかし", "ケーキ"] },
    { label: { en: "Seasonings & Ingredients", id: "Bumbu & Bahan" },
      words: ["さとう", "しお", "バター"] },
    { label: { en: "At the Table", id: "Di Meja Makan" },
      words: ["メニュー", "スプーン", "フォーク"] }
  ],
  tier9: [
    { label: { en: "Everyday Carry", id: "Barang Bawaan Sehari-hari" },
      words: ["かばん", "さいふ", "おかね", "かぎ", "とけい", "かさ", "にもつ"] },
    { label: { en: "Stationery", id: "Alat Tulis" },
      words: ["えんぴつ", "ペン", "ボールペン", "けしゴム", "かみ", "ノート", "てちょう"] },
    { label: { en: "Things to Read", id: "Bahan Bacaan" },
      words: ["ほん", "じしょ", "ざっし", "しんぶん"] },
    { label: { en: "Mail & Post", id: "Surat-menyurat" },
      words: ["てがみ", "はがき", "きって"] },
    { label: { en: "Electronics & Appliances", id: "Elektronik & Perabot Listrik" },
      words: ["でんわ", "ケータイ", "テレビ", "ラジオ", "カメラ", "パソコン", "エアコン", "れいぞうこ", "ストーブ", "でんき"] },
    { label: { en: "The House & Its Parts", id: "Rumah & Bagiannya" },
      words: ["いえ", "へや", "まど", "ドア"] },
    { label: { en: "Furniture", id: "Perabot Rumah" },
      words: ["つくえ", "いす", "テーブル", "ベッド", "ふとん"] },
    { label: { en: "Tableware & Containers", id: "Peralatan Makan & Wadah" },
      words: ["さら", "コップ", "ちゃわん", "はこ"] },
    { label: { en: "Bath & Household Supplies", id: "Perlengkapan Mandi & Rumah Tangga" },
      words: ["せっけん", "タオル", "スリッパ"] },
    { label: { en: "Hobbies & Entertainment", id: "Hobi & Hiburan" },
      words: ["しゅみ", "おんがく", "うた", "しゃしん", "スポーツ"] }
  ],
  tier10: [
    { label: { en: "General & Traditional Wear", id: "Istilah Umum & Pakaian Tradisional" },
      words: ["ふく", "きもの"] },
    { label: { en: "Tops & Outerwear", id: "Atasan & Pakaian Luar" },
      words: ["シャツ", "Tシャツ", "セーター", "うわぎ", "コート"] },
    { label: { en: "Bottoms", id: "Bawahan" },
      words: ["ズボン", "スカート"] },
    { label: { en: "Footwear", id: "Alas Kaki" },
      words: ["くつ", "くつした", "スリッパ"] },
    { label: { en: "Accessories", id: "Aksesori & Pelengkap" },
      words: ["ぼうし", "めがね", "ネクタイ", "てぶくろ", "ゆびわ", "ハンカチ", "かさ"] },
    { label: { en: "Parts of Clothing", id: "Bagian Pakaian" },
      words: ["ポケット", "ボタン"] }
  ],
  tier11: [
    { label: { en: "Public & Civic Facilities", id: "Fasilitas Layanan & Umum" },
      words: ["がっこう", "だいがく", "としょかん", "びょういん", "ぎんこう", "ゆうびんきょく", "こうばん", "こうえん", "たいしかん", "びじゅつかん", "プール"] },
    { label: { en: "Shopping & Leisure Spots", id: "Tempat Belanja & Hiburan" },
      words: ["かいしゃ", "みせ", "スーパー", "デパート", "やおや", "やっきょく", "レストラン", "きっさてん", "えいがかん", "ホテル"] },
    { label: { en: "Transit & Public Geography", id: "Area Transit & Wilayah" },
      words: ["えき", "くうこう", "バスてい", "ちゅうしゃじょう", "まち", "し", "くに", "がいこく"] }
  ],
  tier12: [
    { label: { en: "Up & Down", id: "Atas & Bawah" },
      words: ["うえ", "した"] },
    { label: { en: "Inside & Outside", id: "Dalam & Luar" },
      words: ["なか", "そと"] },
    { label: { en: "Left & Right", id: "Kiri & Kanan" },
      words: ["みぎ", "ひだり"] },
    { label: { en: "Front & Back", id: "Depan & Belakang" },
      words: ["まえ", "うしろ"] },
    { label: { en: "Beside & Nearby", id: "Samping & Kedekatan" },
      words: ["となり", "よこ", "そば", "ちかく"] },
    { label: { en: "Between & Across", id: "Antara & Seberang" },
      words: ["あいだ", "むこう"] }
  ],
  tier13: [
    { label: { en: "Vehicles", id: "Alat Transportasi" },
      words: ["でんしゃ", "ちかてつ", "れっしゃ", "バス", "タクシー", "くるま", "じてんしゃ", "ひこうき", "ふね"] },
    { label: { en: "Streets & City Infrastructure", id: "Fitur Jalanan & Infrastruktur Kota" },
      words: ["みち", "はし", "かど", "しんごう", "のりば", "いりぐち", "でぐち", "もん", "きっぷ", "かいだん", "エレベーター", "こうさてん"] }
  ],
  tier14: [
    { label: { en: "Eating & Drinking", id: "Makan & Minum" },
      words: ["たべる", "のむ"] },
    { label: { en: "Seeing & Hearing", id: "Melihat & Mendengar" },
      words: ["みる", "きく"] },
    { label: { en: "Reading & Writing", id: "Membaca & Menulis" },
      words: ["よむ", "かく"] },
    { label: { en: "Sleeping & Waking", id: "Tidur & Bangun" },
      words: ["ねる", "おきる"] },
    { label: { en: "Washing, Bathing & Cleaning", id: "Mencuci, Mandi & Membersihkan" },
      words: ["あらう", "あびる", "そうじする"] },
    { label: { en: "Buying & Making", id: "Membeli & Membuat" },
      words: ["かう", "つくる"] },
    { label: { en: "Study, Talk & Meet", id: "Belajar, Bicara & Bertemu" },
      words: ["べんきょうする", "はなす", "あう"] },
    { label: { en: "Resting", id: "Istirahat" },
      words: ["やすむ"] },
    { label: { en: "Understanding, Knowing & Thinking", id: "Mengerti, Tahu & Berpikir" },
      words: ["わかる", "しる", "おもう"] },
    { label: { en: "Using & Having", id: "Memakai & Memiliki" },
      words: ["つかう", "もつ"] },
    { label: { en: "Sitting & Standing", id: "Duduk & Berdiri" },
      words: ["すわる", "たつ"] },
    { label: { en: "Opening, Closing & Switches", id: "Membuka, Menutup & Menyalakan" },
      words: ["あける", "しめる", "つける", "けす"] }
  ],
  tier15: [
    { label: { en: "Going, Coming & Returning", id: "Pergi, Datang & Pulang" },
      words: ["いく", "くる", "かえる"] },
    { label: { en: "Walking & Running", id: "Berjalan & Berlari" },
      words: ["あるく", "はしる"] },
    { label: { en: "Leaving & Entering", id: "Keluar & Masuk" },
      words: ["でかける", "でる", "はいる"] },
    { label: { en: "Arriving & Boarding", id: "Tiba & Naik Kendaraan" },
      words: ["つく", "のる", "おりる", "のりかえる"] },
    { label: { en: "Crossing & Turning", id: "Menyeberang & Belok" },
      words: ["わたる", "まがる"] },
    { label: { en: "Climbing, Swimming & Flying", id: "Mendaki, Berenang & Terbang" },
      words: ["のぼる", "およぐ", "とぶ"] },
    { label: { en: "Leisure Travel", id: "Jalan-jalan & Bepergian" },
      words: ["さんぽする", "りょこうする"] },
    { label: { en: "Moving House", id: "Pindah Rumah" },
      words: ["ひっこす"] },
    { label: { en: "Playing & Singing", id: "Bermain & Bernyanyi" },
      words: ["あそぶ", "うたう"] }
  ],
  tier16: [
    { label: { en: "Speaking & Telling", id: "Berbicara & Menyampaikan" },
      words: ["はなす", "いう", "でんわする"] },
    { label: { en: "Asking, Teaching & Learning", id: "Bertanya, Mengajar & Belajar" },
      words: ["きく", "おしえる", "ならう", "しつもん", "こたえる"] },
    { label: { en: "Writing", id: "Menulis" },
      words: ["かく"] },
    { label: { en: "Buying, Selling & Paying", id: "Membeli, Menjual & Membayar" },
      words: ["かう", "うる", "はらう", "かいもの"] },
    { label: { en: "Lending, Borrowing & Returning", id: "Meminjamkan, Meminjam & Mengembalikan" },
      words: ["かす", "かりる", "かえす"] },
    { label: { en: "Giving, Receiving & Sending", id: "Memberi, Menerima & Mengirim" },
      words: ["あげる", "もらう", "おくる"] },
    { label: { en: "Helping, Calling & Requesting", id: "Membantu, Memanggil & Meminta" },
      words: ["てつだう", "よぶ", "たのむ"] },
    { label: { en: "Working", id: "Bekerja" },
      words: ["はたらく"] },
    { label: { en: "Forgetting", id: "Lupa" },
      words: ["わすれる"] }
  ],
  tier17: [
    { label: { en: "Size", id: "Ukuran" },
      words: ["おおきい", "ちいさい"] },
    { label: { en: "New & Old", id: "Baru & Lama" },
      words: ["あたらしい", "ふるい"] },
    { label: { en: "Good & Bad", id: "Baik & Buruk" },
      words: ["いい", "わるい"] },
    { label: { en: "Height & Price", id: "Tinggi & Harga" },
      words: ["たかい", "ひくい", "やすい"] },
    { label: { en: "Length", id: "Panjang & Pendek" },
      words: ["ながい", "みじかい"] },
    { label: { en: "Weight", id: "Berat & Ringan" },
      words: ["おもい", "かるい"] },
    { label: { en: "Space", id: "Luas & Sempit" },
      words: ["ひろい", "せまい"] },
    { label: { en: "Brightness", id: "Terang & Gelap" },
      words: ["あかるい", "くらい"] },
    { label: { en: "Colors", id: "Warna" },
      words: ["あかい", "あおい", "くろい", "しろい", "きいろい", "ちゃいろい"] }
  ],
  tier18: [
    { label: { en: "Temperature — Weather", id: "Suhu — Cuaca" },
      words: [["あつい", "暑い"], "さむい", ["あたたかい", "暖かい"], "すずしい"] },
    { label: { en: "Temperature — Touch & Food", id: "Suhu — Benda & Makanan" },
      words: [["あつい", "熱い"], "つめたい", ["あたたかい", "温かい"]] },
    { label: { en: "Pain", id: "Sakit" },
      words: ["いたい"] },
    { label: { en: "Basic Tastes", id: "Rasa Dasar" },
      words: ["あまい", "からい", "しょっぱい", "すっぱい", "にがい"] },
    { label: { en: "Food Quality", id: "Kualitas Makanan" },
      words: ["おいしい", "まずい"] }
  ],
  tier19: [
    { label: { en: "Likes & Dislikes", id: "Suka & Tidak Suka" },
      words: ["すき", "きらい"] },
    { label: { en: "Health & Energy", id: "Kesehatan & Semangat" },
      words: ["げんき"] },
    { label: { en: "Personality & Skill", id: "Kepribadian & Kemampuan" },
      words: ["しんせつ", "じょうず", "へた"] },
    { label: { en: "Appearance", id: "Penampilan" },
      words: ["きれい", "ハンサム"] },
    { label: { en: "Convenience", id: "Kepraktisan" },
      words: ["べんり", "ふべん"] },
    { label: { en: "Fame", id: "Ketenaran" },
      words: ["ゆうめい"] },
    { label: { en: "Atmosphere & Noise", id: "Suasana & Keramaian" },
      words: ["しずか", "にぎやか"] },
    { label: { en: "Free Time & Busy", id: "Waktu Luang & Kesibukan" },
      words: ["ひま", "いそがしい"] },
    { label: { en: "Difficulty", id: "Tingkat Kesulitan" },
      words: ["かんたん", "たいへん"] },
    { label: { en: "Variety", id: "Keberagaman" },
      words: ["いろいろ"] },
    { label: { en: "Safety & Importance", id: "Keamanan & Kepentingan" },
      words: ["だいじょうぶ", "たいせつ", "あんぜん", "きけん"] }
  ],
  tier20: [
    { label: { en: "Weather Phenomena", id: "Cuaca & Fenomena Alam" },
      words: ["てんき", "あめ", "かぜ", "ゆき"] },
    { label: { en: "Sky & Celestial Bodies", id: "Langit & Benda Langit" },
      words: ["そら", "たいよう", "つき", "ほし"] },
    { label: { en: "Landforms & Water", id: "Bentang Alam & Perairan" },
      words: ["やま", "かわ", "うみ", "いけ", "しま"] },
    { label: { en: "Plants", id: "Tumbuhan" },
      words: ["き", "はな"] },
    { label: { en: "Seasons", id: "Musim" },
      words: ["はる", "なつ", "あき", "ふゆ"] }
  ],
  tier21: [
    { label: { en: "Primary Colors", id: "Warna Dasar" },
      words: ["あか", "あお", "きいろ"] },
    { label: { en: "Achromatic Colors", id: "Warna Netral" },
      words: ["しろ", "くろ", "はいいろ"] },
    { label: { en: "Other Colors", id: "Warna Lainnya" },
      words: ["みどり", "むらさき", "ちゃいろ", "オレンジ", "ピンク", "きんいろ", "ぎんいろ"] },
    { label: { en: "General Term", id: "Istilah Umum" },
      words: ["いろ"] }
  ],
  tier22: [
    { label: { en: "Question Words", id: "Kata Tanya" },
      words: ["どこ", "いつ", "なに", "だれ", "どう", "どんな", "どうして", "いくら", "いくつ", "どの"] },
    { label: { en: "Adverbs", id: "Kata Keterangan" },
      words: ["いつも", "たいてい", "よく", "ときどき", "もう", "まだ"] }
  ],
  tier23: [
    { label: { en: "Adding & Sequencing", id: "Menambahkan & Mengurutkan" },
      words: ["そして", "それから"] },
    { label: { en: "Contrast", id: "Pertentangan" },
      words: ["でも", "しかし", "ですが"] },
    { label: { en: "Cause & Concession", id: "Sebab-Akibat & Penegasan" },
      words: ["だから", "だからといって"] },
    { label: { en: "Conversational Transition", id: "Transisi Percakapan" },
      words: ["それじゃ", "じゃ"] }
  ],
  tier24: [
    { label: { en: "Intensity", id: "Intensitas" },
      words: ["とても", "ずいぶん", "ちょっと"] },
    { label: { en: "Quantity", id: "Jumlah & Kuantitas" },
      words: ["すこし", "たくさん", "おおぜい"] },
    { label: { en: "Negative-Paired", id: "Berpasangan dengan Negatif" },
      words: ["ぜんぜん", "あまり"] },
    { label: { en: "Comparison & Superlative", id: "Perbandingan & Superlatif" },
      words: ["もっと", "いちばん"] },
    { label: { en: "Approximation & Precision", id: "Perkiraan & Ketepatan" },
      words: ["だいたい", "たいがい", "ちょうど"] }
  ],
  tier25: [
    { label: { en: "Head, Face & Voice", id: "Kepala, Wajah & Suara" },
      words: ["あたま", "かお", "め", "みみ", "くち", "は", "ほお", "あご", "かみのけ", "くび", "こえ"] },
    { label: { en: "Torso & Limbs", id: "Tubuh & Anggota Badan" },
      words: ["て", "あし", "からだ", "せなか", "おなか", "むね", "ゆび", "つめ"] },
    { label: { en: "Illness & Symptoms", id: "Sakit & Gejala" },
      words: ["びょうき", "けが", "ねつ", "せき", "くしゃみ", "めまい"] },
    { label: { en: "Medical Care", id: "Perawatan Medis" },
      words: ["くすり", "くすりや", "はいしゃ", "たいおん", "けんこう"] },
    { label: { en: "Feelings & Fatigue", id: "Perasaan & Kelelahan" },
      words: ["しんぱい", "あんしん", "つかれる", "ねむい"] },
    { label: { en: "Bath & Hygiene", id: "Mandi & Kebersihan Diri" },
      words: ["マスク", "おふろ", "シャワー", "はブラシ", "シャンプー", "ドライヤー"] }
  ],
  tier26: [
    { label: { en: "Farm & Wild Animals", id: "Hewan Ternak & Liar" },
      words: ["いぬ", "ねこ", "とり", "うし", "うま", "ぶた", "ぞう", "さる", "うさぎ", "くま"] },
    { label: { en: "Animals in General & Insects", id: "Hewan Secara Umum & Serangga" },
      words: ["どうぶつ", "どうぶつえん", "むし", "ちょう", "はち"] }
  ],
  tier27: [
    { label: { en: "Sports", id: "Olahraga" },
      words: ["うんどう", "サッカー", "やきゅう", "テニス", "すいえい", "バスケットボール", "バレーボール", "すもう", "かつ", "まける"] },
    { label: { en: "Hobbies & Leisure", id: "Hobi & Waktu Luang" },
      words: ["え", "えいが", "おどる", "りょこう", "つり", "キャンプ"] },
    { label: { en: "School & Study", id: "Sekolah & Belajar" },
      words: ["すうがく", "かがく", "じゅぎょう", "テスト", "しけん"] }
  ]
};

/* Menata ulang `items` satu Sub-Tier sesuai KOTOBA_CATEGORY_DEFS, lalu
   mengembalikan array baru + daftar "run" (kategori, indeks awal, jumlah)
   yang dipakai renderVocabTables() buat nyisipin baris pemisah kategori.
   Array aslinya TIDAK dimutasi, jadi Mode Kuis tetap pakai urutan lama. */
function vocabWordMatchesRule(entry, rule) {
  // rule biasa cuma string bacaan (mis. "あつい") — cocok ke SEMUA entri
  // dengan bacaan itu. Kalau ada 2 kata beda arti tapi bacaan sama persis
  // (mis. あつい "暑い" cuaca vs あつい "熱い" benda/makanan), pakai rule
  // berupa pasangan [bacaan, kanji] biar keduanya bisa dipisah ke kategori
  // yang beda — kanji-nya (entry[6]) yang jadi pembeda.
  if (Array.isArray(rule)) return entry[0] === rule[0] && entry[6] === rule[1];
  return entry[0] === rule;
}

function buildCategorizedVocab(tierKey, items) {
  const defs = KOTOBA_CATEGORY_DEFS[tierKey];
  if (!defs) return { items: items, runs: null };
  const buckets = defs.map(d => ({ label: d.label, items: [] }));
  const leftovers = [];
  items.forEach(entry => {
    const idx = defs.findIndex(d => d.words.some(rule => vocabWordMatchesRule(entry, rule)));
    if (idx >= 0) buckets[idx].items.push(entry);
    else leftovers.push(entry);
  });
  if (leftovers.length) buckets.push({ label: { en: "Other", id: "Lainnya" }, items: leftovers });
  const ordered = [];
  const runs = [];
  buckets.forEach(b => {
    if (!b.items.length) return;
    runs.push({ label: b.label, start: ordered.length, count: b.items.length });
    b.items.forEach(entry => ordered.push(entry));
  });
  return { items: ordered, runs: runs };
}

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
  { tierKey: "tier24", title: KOTOBA_N5_LEVEL_TEXT.tier24.title, desc: KOTOBA_N5_LEVEL_TEXT.tier24.desc, items: KOTOBA_N5_CH7_5 },
  { tierKey: "tier25", title: KOTOBA_N5_LEVEL_TEXT.tier25.title, desc: KOTOBA_N5_LEVEL_TEXT.tier25.desc, items: KOTOBA_N5_CH8_1 },
  { tierKey: "tier26", title: KOTOBA_N5_LEVEL_TEXT.tier26.title, desc: KOTOBA_N5_LEVEL_TEXT.tier26.desc, items: KOTOBA_N5_CH8_2 },
  { tierKey: "tier27", title: KOTOBA_N5_LEVEL_TEXT.tier27.title, desc: KOTOBA_N5_LEVEL_TEXT.tier27.desc, items: KOTOBA_N5_CH8_3 }
];

// urutkan ulang kartu tiap Sub-Tier Kotoba berdasarkan jenis katanya (khusus
// Sub-Tier yang terdaftar di KOTOBA_CATEGORY_DEFS — saat ini semuanya, Tier 1.1-7.5).
KOTOBA_N5_LEARN.forEach(section => {
  const built = buildCategorizedVocab(section.tierKey, section.items);
  section.items = built.items;
  section.categoryRuns = built.runs;
});

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
    // dataUsage: catatan singkat "cara pakai" tiap kata (elemen ke-9 di
    // KOTOBA_N5_CHAPTERS, "" kalau tidak ada catatan), ditampilkan sebagai info
    // tambahan di feedback kuis, tepat di bawah baris kanji-nya.
    dataUsage: Object.fromEntries(KOTOBA_TIER_KEYS.map((tk, i) => [tk, KOTOBA_N5_CHAPTERS[i].map(([c, , , , , , , , u]) => [c, tf(u)])])),
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
  if (s.dataUsage) {
    s.dataUsage.all = cat(s.dataUsage);
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
  // catatan cara pakai juga bilingual (objek {en,id}) jadi ikut dibangun ulang
  // tiap ganti bahasa, sama seperti data.meaning di atas.
  SCRIPTS.kotoba.dataUsage = Object.fromEntries(KOTOBA_TIER_KEYS.map((tk, i) => [tk, KOTOBA_N5_CHAPTERS[i].map(([c, , , , , , , , u]) => [c, tf(u)])]));
  SCRIPTS.bunpo.data = Object.fromEntries(BUNPO_N5_TIER_KEYS.map((tk, i) => [tk, BUNPO_N5_CHAPTERS[i].map(([c, , m]) => [c, tf(m)])]));
  [SCRIPTS.kanji, SCRIPTS.kotoba, SCRIPTS.bunpo].forEach(s => {
    const tks = s.tierKeys || ["tier1", "tier2", "tier3"];
    s.data.all = tks.reduce((acc, tk) => acc.concat(s.data[tk]), []);
  });
  SCRIPTS.kotoba.dataUsage.all = (SCRIPTS.kotoba.tierKeys || ["tier1", "tier2", "tier3"])
    .reduce((acc, tk) => acc.concat(SCRIPTS.kotoba.dataUsage[tk]), []);
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
  // pemisah kategori: dicari per indeks biar urutan kartu & pemisahnya sinkron
  const runsByStart = {};
  if (Array.isArray(section.categoryRuns)) {
    section.categoryRuns.forEach(run => { runsByStart[run.start] = run; });
  }
  section.items.forEach(([word, reading, meaning, example, exampleSegments, exampleTranslation, kanjiWord, kanjiExample, usage], itemIndex) => {
    const run = runsByStart[itemIndex];
    if (run) {
      const divider = document.createElement("div");
      divider.className = "vocab-cat-divider";
      divider.innerHTML = `
        <span class="vocab-cat-label">${tf(run.label)}</span>
        <span class="vocab-cat-count">${run.count} ${t("learn.words")}</span>
      `;
      list.appendChild(divider);
    }
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
    // pemisah kategori Kotoba: ikut disembunyiin kalau semua kartu di bawahnya
    // gak cocok sama pencarian, biar gak ada judul kategori yang ngambang kosong.
    sectionEl.querySelectorAll(".vocab-cat-divider").forEach(dividerEl => {
      let groupHasMatch = false;
      let sib = dividerEl.nextElementSibling;
      while (sib && !sib.classList.contains("vocab-cat-divider")) {
        if (sib.classList.contains("grammar-card") && !sib.classList.contains("no-match")) {
          groupHasMatch = true;
          break;
        }
        sib = sib.nextElementSibling;
      }
      dividerEl.classList.toggle("no-match", !groupHasMatch);
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
    // Chapter yang gaada satu pun hasil cocok di dalamnya: jangan cuma
    // ditutup accordion-nya, tapi sembunyiin sekalian wadah/headernya biar
    // gak numpuk kelihatan di hasil pencarian.
    groupEl.classList.toggle("no-match", !!query && !hasMatch);
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

    // catatan singkat "cara pakai" — cuma dimiliki Basic Kotoba, ditampilkan di
    // feedback kuis tepat di bawah baris kanji-nya (lihat handleAnswer()).
    const usageNotePool = scriptKey === "kotoba"
      ? (usesAllPool ? script.dataUsage.all : script.dataUsage[mode])
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
      const extraUsage = usageNotePool ? usageNotePool[i][1] : null;
      return [src[i][0], src[i][1], type, extra, extraReading, extraUsage];
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
    // catatan singkat "cara pakai" (khusus Basic Kotoba, current[5]) —
    // ditampilkan sebagai baris terakhir, di bawah baris kanji-nya.
    if (current[5]) {
      extraText += "\n" + t("quiz.usageNote", { value: current[5] });
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
  const [kana, romaji, meaning, example, segments, translation, kanji, exampleKanji, usage] = item;
  const exRomaji = (segments || []).map(s => s[1]).join(" ");
  const showExKanji = exampleKanji && exampleKanji !== example;
  const front = kanji
    ? `
    <div class="fc-kanji-front">${escapeHtml(kanji)}</div>
    <div class="fc-kana">${escapeHtml(kana)}</div>`
    : `
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
    ${translation ? `<div class="fc-translation">${escapeHtml(tf(translation))}</div>` : ""}
    ${usage ? `<div class="vocab-usage fc-usage">
      <span class="vocab-usage-label">${escapeHtml(t("learn.usageNote"))}</span>
      <p class="vocab-usage-text">${escapeHtml(tf(usage))}</p>
    </div>` : ""}`;
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
        <span class="flash-deck-count">${stat.total} ${t(defn.kind === "kotoba" ? "learn.words" : "learn.characters")}</span>
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
          <span class="flash-deck-count">${stat.total} ${t("flash.cards")}</span>
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
  updateFlashDeckScrollTopVisibility();
}

/* back-to-top button — deck picker can get long (built-in + imported decks) */
function updateFlashDeckScrollTopVisibility() {
  const btn = document.getElementById("btn-flashdeck-scrolltop");
  if (!btn || !screenFlashDeck) return;
  const isVisible = !screenFlashDeck.classList.contains("hidden");
  const shouldShow = isVisible && window.scrollY > 400;
  btn.classList.toggle("hidden", !shouldShow);
}
window.addEventListener("scroll", updateFlashDeckScrollTopVisibility, { passive: true });
const btnFlashDeckScrollTop = document.getElementById("btn-flashdeck-scrolltop");
if (btnFlashDeckScrollTop) {
  btnFlashDeckScrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
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
}

function renderCurrentFlashcard() {
  if (flashState.index >= flashState.queue.length) {
    showFlashDone();
    return;
  }
  const desc = flashState.queue[flashState.index];
  const content = getCardContent(desc);
  const frontEl = document.getElementById("flashcard-front");
  const backEl = document.getElementById("flashcard-back");
  frontEl.innerHTML = content.front;
  backEl.innerHTML = content.back;
  frontEl.scrollTop = 0;
  backEl.scrollTop = 0;
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
  updateFlashDeckScrollTopVisibility();
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