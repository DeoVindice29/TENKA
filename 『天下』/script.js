/* =========================================================
   AUDIO PENGUCAPAN — Web Speech API (ja-JP)
   dipakai oleh semua elemen ber-atribut data-speak di mode Belajar
   ========================================================= */
const speechSupported = "speechSynthesis" in window;
let jaVoice = null;
function pickJaVoice(){
  if(!speechSupported) return;
  const voices = speechSynthesis.getVoices();
  jaVoice = voices.find(v => v.lang === "ja-JP") || voices.find(v => v.lang && v.lang.startsWith("ja")) || null;
}
if(speechSupported){
  pickJaVoice();
  speechSynthesis.addEventListener("voiceschanged", pickJaVoice);
}

// token pembanding: memastikan hanya klik TERAKHIR yang benar-benar diucapkan.
// Tanpa ini, cancel()+speak() yang dipanggil beruntun (mis. saat mengetuk beberapa
// huruf dengan cepat) rawan bug di beberapa browser: teks yang terdengar jadi teks
// klik SEBELUMNYA, bukan klik yang baru — itulah penyebab audio "tidak sesuai huruf".
let speakRequestId = 0;

function clearSpeakingHighlight(){
  document.querySelectorAll(".speaking").forEach(b=> b.classList.remove("speaking"));
}

function speakJapanese(text, btn){
  if(!speechSupported || !text) return;
  const requestId = ++speakRequestId;

  // highlight target yang benar SEKARANG JUGA (sinkron), sebelum delay apa pun,
  // supaya walau audio sedikit tertunda, elemen yang disorot selalu yang baru diklik.
  clearSpeakingHighlight();
  if(btn) btn.classList.add("speaking");

  speechSynthesis.cancel();
  if(!jaVoice) pickJaVoice();

  // jeda singkat setelah cancel() sebelum speak() — menghindari race condition
  // pada beberapa browser (terutama Chrome) yang membuat ucapan sebelumnya masih
  // "nyangkut" dan terdengar bercampur/salah dengan permintaan baru.
  setTimeout(()=>{
    if(requestId !== speakRequestId) return; // sudah dikalahkan oleh klik yang lebih baru
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP";
    if(jaVoice) utter.voice = jaVoice;
    utter.rate = 0.85;
    utter.onend = ()=> { if(btn) btn.classList.remove("speaking"); };
    utter.onerror = ()=> { if(btn) btn.classList.remove("speaking"); };
    speechSynthesis.speak(utter);
  }, 80);
}

// event delegation: satu listener untuk semua tombol/sel yang punya data-speak
document.addEventListener("click", (e)=>{
  const el = e.target.closest("[data-speak]");
  if(!el) return;
  e.preventDefault();
  e.stopPropagation();
  speakJapanese(el.getAttribute("data-speak"), el);
});
document.addEventListener("keydown", (e)=>{
  if(e.key !== "Enter" && e.key !== " ") return;
  const el = e.target.closest("[data-speak]");
  if(!el) return;
  e.preventDefault();
  speakJapanese(el.getAttribute("data-speak"), el);
});

/* ---------------- theme ---------------- */
const themeToggle = document.getElementById("theme-toggle");
const themeSwitchInput = document.getElementById("theme-switch-input");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap");
  themeSwitchInput.checked = theme === "dark";
  const themeLabel = document.getElementById("theme-toggle-label");
  themeLabel.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
}
applyTheme(prefersDark ? "dark" : "light");

function toggleTheme(){
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}
themeToggle.addEventListener("click", toggleTheme);
themeSwitchInput.addEventListener("change", ()=> applyTheme(themeSwitchInput.checked ? "dark" : "light"));

/* ---------------- settings panel ---------------- */
const settingsBtn = document.getElementById("settings-toggle");
const settingsOverlay = document.getElementById("settings-overlay");
const settingsClose = document.getElementById("settings-close");
const fontSelect = document.getElementById("font-select");
const fontPreview = document.getElementById("font-preview");

const FONT_STACKS = {
  hiragino: `"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Zen Kaku Gothic New", "Yu Gothic", "Meiryo", sans-serif`,
  zenkaku: `"Zen Kaku Gothic New", "Hiragino Sans", sans-serif`,
  noto: `"Noto Sans JP", "Hiragino Sans", sans-serif`,
  mplus: `"M PLUS Rounded 1c", "Hiragino Sans", sans-serif`,
  kosugi: `"Kosugi Maru", "Hiragino Sans", sans-serif`,
  sawarabi: `"Sawarabi Mincho", "Hiragino Mincho ProN", serif`,
  yusei: `"Yusei Magic", "Hiragino Sans", sans-serif`,
  klee: `"Klee One", "Hiragino Mincho ProN", serif`,
  mincho: `"Shippori Mincho", "Hiragino Mincho ProN", serif`
};

function applyFont(key){
  const stack = FONT_STACKS[key] || FONT_STACKS.hiragino;
  document.documentElement.style.setProperty("--kana-font", stack);
  fontPreview.style.fontFamily = stack;
  fontSelect.value = key;
}
applyFont("noto");

function openSettings(){
  settingsOverlay.classList.add("open");
  settingsOverlay.setAttribute("aria-hidden","false");
  settingsClose.focus();
}
function closeSettings(){
  settingsOverlay.classList.remove("open");
  settingsOverlay.setAttribute("aria-hidden","true");
  settingsBtn.focus();
}
settingsBtn.addEventListener("click", openSettings);
settingsClose.addEventListener("click", closeSettings);
settingsOverlay.addEventListener("click", (e)=>{
  if(e.target === settingsOverlay) closeSettings();
});
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && settingsOverlay.classList.contains("open")) closeSettings();
});
fontSelect.addEventListener("change", ()=> applyFont(fontSelect.value));

/* =========================================================
   PROFILE / TINGKATAN — "dari Heimin menuju Tennō" (tanpa XP)
   ========================================================= */
const RANK_KEY = "tebakAksara_rank_v1";
const PHOTO_KEY = "tebakAksara_photo_v1";
const MASTERY_KEY = "tebakAksara_mastery_v1";
const NICKNAME_KEY = "tebakAksara_nickname_v1";

// Tingkatan kebangsawanan — dari rakyat jelata sampai kaisar.
// Setiap tingkat butuh menuntaskan Chapter "Kaisar" (Semua Campur) pada aksara terkait.
const RANK_LEVELS = [
  {title:"Heimin",   subtitle:"平民",  emoji:"🌾", req:"Titik awal perjalanan belajarmu."},
  {title:"Knight",   subtitle:"騎士",  emoji:"⚔️", req:"Kuasai semua Hiragana & Katakana."},
  {title:"Baron",    subtitle:"男爵",  emoji:"🎗️", req:"Kuasai semua Kotoba N5."},
  {title:"Viscount", subtitle:"子爵",  emoji:"📯", req:"Pahami semua Bunpō N5."},
  {title:"Count",    subtitle:"伯爵",  emoji:"🏛️", req:"Kuasai semua Kanji N5."},
  {title:"Marquis",  subtitle:"侯爵",  emoji:"🏯", req:"Kuasai seluruh materi N5 — Hiragana, Katakana, Kotoba, Bunpō, dan Kanji."},
  {title:"Duke",     subtitle:"公爵",  emoji:"🦅", req:"Kuasai seluruh materi N4.", locked:true},
  {title:"Prince",   subtitle:"親王",  emoji:"🌟", req:"Kuasai seluruh materi N3.", locked:true},
  {title:"King",     subtitle:"国王",  emoji:"🏵️", req:"Kuasai seluruh materi N2.", locked:true},
  {title:"Emperor",  subtitle:"天皇",  emoji:"👑", req:"Kuasai seluruh materi N1.", locked:true}
];

function getRankIndex(){
  return parseInt(localStorage.getItem(RANK_KEY) || "0", 10) || 0;
}
function setRankIndex(i){
  localStorage.setItem(RANK_KEY, String(i));
}

/* ---- penguasaan per-aksara: Chapter "Kaisar" (all) yang sudah dituntaskan ---- */
function getMastery(){
  try { return JSON.parse(localStorage.getItem(MASTERY_KEY) || "{}"); }
  catch(e){ return {}; }
}
function markScriptMastered(scriptKey){
  const m = getMastery();
  if(!m[scriptKey]){
    m[scriptKey] = true;
    localStorage.setItem(MASTERY_KEY, JSON.stringify(m));
  }
}
function computeRankIndex(){
  const m = getMastery();
  let idx = 0;
  if(m.hiragana && m.katakana) idx = 1; // Knight
  if(idx >= 1 && m.kotoba)     idx = 2; // Baron
  if(idx >= 2 && m.bunpo)      idx = 3; // Viscount
  if(idx >= 3 && m.kanji)      idx = 4; // Count
  if(idx >= 4)                 idx = 5; // Marquis — seluruh N5 tuntas
  return idx;
}
// dipanggil setelah menuntaskan Chapter "Kaisar" pada sebuah aksara
function promoteIfHigher(scriptKey, mode){
  if(mode === "all") markScriptMastered(scriptKey);
  const computed = computeRankIndex();
  if(computed > getRankIndex()){
    setRankIndex(computed);
    return true;
  }
  return false;
}

/* =========================================================
   KOLEKSI TITLE — title khusus per aksara, didapat dari Mode Penaklukan
   ========================================================= */
const TITLES_KEY = "tebakAksara_titles_v1";

const CONQUEST_TITLES = {
  hiragana: {title:"Penakluk Hiragana", emoji:"あ"},
  katakana: {title:"Penakluk Katakana", emoji:"ア"},
  kotoba:   {title:"Penakluk Kotoba",   emoji:"語"},
  bunpo:    {title:"Penakluk Bunpō",    emoji:"文"},
  kanji:    {title:"Penakluk Kanji N5", emoji:"漢"}
};

// cerita sederhana buat Mode Penaklukan 3 Chapter — cuma dipakai utk Hiragana & Katakana,
// masing-masing Chapter dipetakan ke tier1 (dasar) / tier2 (bertitik) / tier3 (gabungan).
// cerita satu kesatuan: Hiragana = Ujian Ksatria Tahap Pertama (desa asal),
// Katakana = Ujian Ksatria Tahap Kedua (kota pelabuhan) — menuntaskan keduanya
// resmi mengangkat pemain jadi Knight (騎士), sesuai RANK_LEVELS[1].
const CONQUEST_STORY = {
  hiragana: {
    epilogue: "Bupati membubuhkan cap resminya pada surat rekomendasimu. Ujian Ksatria Tahap Pertama tuntas — kau resmi diakui layak melangkah ke Ujian Tahap Kedua di kota pelabuhan, tempat Katakana menanti.",
    phases: [
      { label:"Chapter 1 — Gerbang Balai Desa",
        text:"⚔️ Sejak kecil kau hanya mendengar cerita tentang Ksatria Kekaisaran dari para musafir yang singgah di desamu. Hari ini, utusan Balai Ksatria akhirnya membuka pendaftaran murid baru. Syarat pertama: buktikan kau bisa membaca dan menulis sendiri 46 aksara dasar Hiragana di hadapan penulis balai desa — tanpa contekan, tanpa pilihan ganda, murni dari ingatanmu." },
      { label:"Chapter 2 — Sandi Sang Mata-Mata",
        text:"🎉 Penulis balai desa mengangguk puas — namamu dicatat sebagai calon murid! Tapi sebelum surat rekomendasi diserahkan, ia menyodorkan gulungan sandi berisi huruf-huruf bertitik dan berlingkar kecil (dakuten & handakuten) yang disita dari mata-mata musuh. \"Kalau kau bisa membaca sandi ini,\" katanya, \"kau pantas jadi murid ksatria.\" Tuliskan sendiri setiap bunyinya." },
      { label:"Chapter 3 — Titah Sang Bupati",
        text:"✨ Sandi berhasil kau pecahkan. Tak lama, Bupati setempat datang membawa titah resmi penuh aksara gabungan yōon — きゃ, しゅ, ちょ — untuk mengujimu langsung. Ini ujian pemungkas sebelum kau boleh berangkat ke kota pelabuhan untuk Ujian Ksatria Tahap Kedua." }
    ]
  },
  katakana: {
    epilogue: "Kapten Ksatria menyarungkan pedangnya dan meletakkannya di kedua bahumu. \"Bangkitlah, Ksatria.\" Malam itu juga, di hadapan obor dan derap ombak pelabuhan, kau resmi diangkat menjadi Ksatria Kekaisaran — dua ujian, Hiragana dan Katakana, telah kau taklukkan sepenuhnya.",
    phases: [
      { label:"Chapter 1 — Gerbang Pelabuhan",
        text:"⚔️ Berbekal surat rekomendasi dari Bupati, kau tiba di kota pelabuhan yang ramai oleh kapal asing dan papan nama beraksara Katakana. Petugas gerbang, seorang ksatria magang, menantangmu membaca 46 aksara dasar katakana satu per satu — tanpa pilihan, langsung tulis jawabanmu sendiri." },
      { label:"Chapter 2 — Daftar Muatan Kapal Asing",
        text:"🎉 Gerbang terbuka! Namun di dermaga, seorang saudagar asing menyerahkan daftar muatan kapal penuh nama barang bertitik dakuten & handakuten yang bercampur logat asing. \"Kalau kau mau jadi ksatria,\" katanya, \"kau harus bisa baca ini tanpa salah eja.\" Tuliskan sendiri setiap jawabanmu." },
      { label:"Chapter 3 — Titah Sang Kapten Ksatria",
        text:"✨ Seluruh daftar muatan berhasil kau baca. Di menara pengawas pelabuhan, Kapten Ksatria sendiri turun tangan mengujimu dengan aksara gabungan yōon asing — kya, shu, cho — sebagai ujian pemungkas. Kalau kau lulus, gelar Ksatria akan resmi disematkan malam ini juga." }
    ]
  }
};

// urutan wajib Mode Penaklukan: tiap aksara harus ditaklukkan berurutan,
// tidak bisa lompat (mis. Katakana harus menunggu Hiragana takluk dulu).
const CONQUEST_ORDER = Object.keys(CONQUEST_TITLES);
// return key aksara prasyarat yang belum ditaklukkan, atau null kalau sudah boleh.
function getConquestLockReason(scriptKey){
  const idx = CONQUEST_ORDER.indexOf(scriptKey);
  if(idx <= 0) return null;
  const earned = getConqueredTitles();
  for(let i=0; i<idx; i++){
    if(!earned[CONQUEST_ORDER[i]]) return CONQUEST_ORDER[i];
  }
  return null;
}

function getConqueredTitles(){
  try { return JSON.parse(localStorage.getItem(TITLES_KEY) || "{}"); }
  catch(e){ return {}; }
}
// menandai sebuah aksara sebagai sudah ditaklukkan; return true kalau title-nya baru didapat
function earnConquestTitle(scriptKey){
  const t = getConqueredTitles();
  if(!t[scriptKey]){
    t[scriptKey] = true;
    localStorage.setItem(TITLES_KEY, JSON.stringify(t));
    return true;
  }
  return false;
}

function renderTitleCollection(){
  const el = document.getElementById("title-collection");
  if(!el) return;
  const earned = getConqueredTitles();
  el.innerHTML = Object.keys(CONQUEST_TITLES).map(key=>{
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
function updateScriptConquestBadges(){
  const earned = getConqueredTitles();
  document.querySelectorAll('#script-tabs .script-tab').forEach(btn=>{
    btn.classList.toggle('conquered', !!earned[btn.dataset.script]);
  });
}

const profileEmojiEl = document.getElementById("profile-emoji");
const profileTitleEl = document.getElementById("profile-title");
const profileSubtitleEl = document.getElementById("profile-subtitle");
const profileDotsEl = document.getElementById("profile-dots");
const profileNextEl = document.getElementById("profile-next");

function renderProfile(){
  const idx = getRankIndex();
  const rank = RANK_LEVELS[idx];
  const next = RANK_LEVELS[idx+1];
  profileEmojiEl.textContent = rank.emoji;
  profileTitleEl.textContent = rank.title;
  profileSubtitleEl.textContent = rank.subtitle;
  profileDotsEl.innerHTML = RANK_LEVELS.map((_,i)=> `<span class="${i<=idx?'filled':''}"></span>`).join("");
  if(next && next.locked){
    profileNextEl.textContent = `Tingkatan N5 tertinggi tercapai — ${next.emoji} ${next.title} akan terbuka begitu materi N4 hadir.`;
  } else if(next){
    profileNextEl.textContent = `${next.req} untuk naik jadi ${next.emoji} ${next.title}`;
  } else {
    profileNextEl.textContent = "Tingkatan tertinggi tercapai — bertahtalah, Emperor! 👑";
  }
  renderRankLadder(idx);
}
renderProfile();
renderTitleCollection();

/* ---- daftar tingkatan kebangsawanan di panel About ---- */
function renderRankLadder(idx){
  const el = document.getElementById("rank-ladder");
  if(!el) return;
  el.innerHTML = RANK_LEVELS.map((r,i)=>{
    const status = r.locked ? "locked" : (i < idx ? "done" : i === idx ? "current" : "todo");
    const soon = r.locked ? `<span class="rank-soon">Segera hadir</span>` : "";
    return `
      <li class="rank-item ${status}">
        <span class="rank-emoji">${r.emoji}</span>
        <span class="rank-body">
          <span class="rank-name">${r.title} <span class="rank-jp">${r.subtitle}</span></span>
          <span class="rank-req">${r.req}</span>
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

function renderAvatar(){
  const dataUrl = localStorage.getItem(PHOTO_KEY);
  if(dataUrl){
    avatarImgEl.src = dataUrl;
    avatarImgEl.classList.remove("hidden");
    avatarPlaceholderEl.classList.add("hidden");
  } else {
    avatarImgEl.classList.add("hidden");
    avatarPlaceholderEl.classList.remove("hidden");
  }
}
renderAvatar();

avatarBtn.addEventListener("click", ()=> photoInput.click());
photoInput.addEventListener("change", ()=>{
  const file = photoInput.files && photoInput.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    localStorage.setItem(PHOTO_KEY, reader.result);
    renderAvatar();
  };
  reader.readAsDataURL(file);
});

/* ---- nickname profil ---- */
function getNickname(){
  return (localStorage.getItem(NICKNAME_KEY) || "").trim();
}
function setNickname(name){
  localStorage.setItem(NICKNAME_KEY, name);
}

const nicknameBtnEl = document.getElementById("profile-nickname-btn");
const nicknameTextEl = document.getElementById("profile-nickname-text");
const nicknameInputEl = document.getElementById("profile-nickname-input");

function renderNickname(){
  const name = getNickname();
  nicknameTextEl.textContent = name || "+ Tambah nickname";
  nicknameBtnEl.classList.toggle("has-name", !!name);
}
renderNickname();

function openNicknameEditor(){
  nicknameInputEl.value = getNickname();
  nicknameBtnEl.classList.add("hidden");
  nicknameInputEl.classList.remove("hidden");
  nicknameInputEl.focus();
  nicknameInputEl.select();
}
function commitNickname(){
  const val = nicknameInputEl.value.trim().slice(0, 18);
  setNickname(val);
  nicknameInputEl.classList.add("hidden");
  nicknameBtnEl.classList.remove("hidden");
  renderNickname();
}
nicknameBtnEl.addEventListener("click", openNicknameEditor);
nicknameInputEl.addEventListener("blur", commitNickname);
nicknameInputEl.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    e.preventDefault();
    nicknameInputEl.blur();
  } else if(e.key === "Escape"){
    nicknameInputEl.value = getNickname();
    nicknameInputEl.blur();
  }
});

/* =========================================================
   DATA — Hiragana, Katakana, Kanji N5
   ========================================================= */

/* ---- Hiragana ---- */
const HIRAGANA_TIER1 = [
  ["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"],
  ["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"],
  ["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"],
  ["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"],
  ["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"],
  ["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"],
  ["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"],
  ["や","ya"],["ゆ","yu"],["よ","yo"],
  ["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"],
  ["わ","wa"],["を","wo"],["ん","n"]
];
const HIRAGANA_TIER2 = [
  ["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"],
  ["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"],
  ["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"],
  ["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"],
  ["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]
];
const HIRAGANA_TIER3 = [
  ["きゃ","kya"],["きゅ","kyu"],["きょ","kyo"],
  ["しゃ","sha"],["しゅ","shu"],["しょ","sho"],
  ["ちゃ","cha"],["ちゅ","chu"],["ちょ","cho"],
  ["にゃ","nya"],["にゅ","nyu"],["にょ","nyo"],
  ["ひゃ","hya"],["ひゅ","hyu"],["ひょ","hyo"],
  ["みゃ","mya"],["みゅ","myu"],["みょ","myo"],
  ["りゃ","rya"],["りゅ","ryu"],["りょ","ryo"],
  ["ぎゃ","gya"],["ぎゅ","gyu"],["ぎょ","gyo"],
  ["じゃ","ja"],["じゅ","ju"],["じょ","jo"],
  ["びゃ","bya"],["びゅ","byu"],["びょ","byo"],
  ["ぴゃ","pya"],["ぴゅ","pyu"],["ぴょ","pyo"]
];
const GOJUON_HIRAGANA = {
  tier1: [
    { label:"",  cols:5, chars:[["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"]] },
    { label:"k", cols:5, chars:[["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]] },
    { label:"s", cols:5, chars:[["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"]] },
    { label:"t", cols:5, chars:[["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"]] },
    { label:"n", cols:5, chars:[["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]] },
    { label:"h", cols:5, chars:[["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"]] },
    { label:"m", cols:5, chars:[["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]] },
    { label:"y", cols:5, chars:[["や","ya"],null,["ゆ","yu"],null,["よ","yo"]] },
    { label:"r", cols:5, chars:[["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]] },
    { label:"w", cols:5, chars:[["わ","wa"],null,null,null,["を","wo"]] },
    { label:"n", cols:5, chars:[["ん","n"],null,null,null,null] }
  ],
  tier2: [
    { label:"g", cols:5, chars:[["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"]] },
    { label:"z", cols:5, chars:[["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"]] },
    { label:"d", cols:5, chars:[["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"]] },
    { label:"b", cols:5, chars:[["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"]] },
    { label:"p", cols:5, chars:[["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]] }
  ],
  tier3: [
    { label:"ky", cols:3, chars:[["きゃ","kya"],["きゅ","kyu"],["きょ","kyo"]] },
    { label:"sh", cols:3, chars:[["しゃ","sha"],["しゅ","shu"],["しょ","sho"]] },
    { label:"ch", cols:3, chars:[["ちゃ","cha"],["ちゅ","chu"],["ちょ","cho"]] },
    { label:"ny", cols:3, chars:[["にゃ","nya"],["にゅ","nyu"],["にょ","nyo"]] },
    { label:"hy", cols:3, chars:[["ひゃ","hya"],["ひゅ","hyu"],["ひょ","hyo"]] },
    { label:"my", cols:3, chars:[["みゃ","mya"],["みゅ","myu"],["みょ","myo"]] },
    { label:"ry", cols:3, chars:[["りゃ","rya"],["りゅ","ryu"],["りょ","ryo"]] },
    { label:"gy", cols:3, chars:[["ぎゃ","gya"],["ぎゅ","gyu"],["ぎょ","gyo"]] },
    { label:"j",  cols:3, chars:[["じゃ","ja"],["じゅ","ju"],["じょ","jo"]] },
    { label:"by", cols:3, chars:[["びゃ","bya"],["びゅ","byu"],["びょ","byo"]] },
    { label:"py", cols:3, chars:[["ぴゃ","pya"],["ぴゅ","pyu"],["ぴょ","pyo"]] }
  ]
};

/* ---- Katakana ---- */
const KATAKANA_TIER1 = [
  ["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"],
  ["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"],
  ["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"],
  ["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"],
  ["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"],
  ["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"],
  ["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"],
  ["ヤ","ya"],["ユ","yu"],["ヨ","yo"],
  ["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"],
  ["ワ","wa"],["ヲ","wo"],["ン","n"]
];
const KATAKANA_TIER2 = [
  ["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"],
  ["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"],
  ["ダ","da"],["ヂ","ji"],["ヅ","zu"],["デ","de"],["ド","do"],
  ["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"],
  ["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]
];
const KATAKANA_TIER3 = [
  ["キャ","kya"],["キュ","kyu"],["キョ","kyo"],
  ["シャ","sha"],["シュ","shu"],["ショ","sho"],
  ["チャ","cha"],["チュ","chu"],["チョ","cho"],
  ["ニャ","nya"],["ニュ","nyu"],["ニョ","nyo"],
  ["ヒャ","hya"],["ヒュ","hyu"],["ヒョ","hyo"],
  ["ミャ","mya"],["ミュ","myu"],["ミョ","myo"],
  ["リャ","rya"],["リュ","ryu"],["リョ","ryo"],
  ["ギャ","gya"],["ギュ","gyu"],["ギョ","gyo"],
  ["ジャ","ja"],["ジュ","ju"],["ジョ","jo"],
  ["ビャ","bya"],["ビュ","byu"],["ビョ","byo"],
  ["ピャ","pya"],["ピュ","pyu"],["ピョ","pyo"]
];
const GOJUON_KATAKANA = {
  tier1: [
    { label:"",  cols:5, chars:[["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"]] },
    { label:"k", cols:5, chars:[["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"]] },
    { label:"s", cols:5, chars:[["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"]] },
    { label:"t", cols:5, chars:[["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"]] },
    { label:"n", cols:5, chars:[["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"]] },
    { label:"h", cols:5, chars:[["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"]] },
    { label:"m", cols:5, chars:[["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"]] },
    { label:"y", cols:5, chars:[["ヤ","ya"],null,["ユ","yu"],null,["ヨ","yo"]] },
    { label:"r", cols:5, chars:[["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"]] },
    { label:"w", cols:5, chars:[["ワ","wa"],null,null,null,["ヲ","wo"]] },
    { label:"n", cols:5, chars:[["ン","n"],null,null,null,null] }
  ],
  tier2: [
    { label:"g", cols:5, chars:[["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"]] },
    { label:"z", cols:5, chars:[["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"]] },
    { label:"d", cols:5, chars:[["ダ","da"],["ヂ","ji"],["ヅ","zu"],["デ","de"],["ド","do"]] },
    { label:"b", cols:5, chars:[["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"]] },
    { label:"p", cols:5, chars:[["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]] }
  ],
  tier3: [
    { label:"ky", cols:3, chars:[["キャ","kya"],["キュ","kyu"],["キョ","kyo"]] },
    { label:"sh", cols:3, chars:[["シャ","sha"],["シュ","shu"],["ショ","sho"]] },
    { label:"ch", cols:3, chars:[["チャ","cha"],["チュ","chu"],["チョ","cho"]] },
    { label:"ny", cols:3, chars:[["ニャ","nya"],["ニュ","nyu"],["ニョ","nyo"]] },
    { label:"hy", cols:3, chars:[["ヒャ","hya"],["ヒュ","hyu"],["ヒョ","hyo"]] },
    { label:"my", cols:3, chars:[["ミャ","mya"],["ミュ","myu"],["ミョ","myo"]] },
    { label:"ry", cols:3, chars:[["リャ","rya"],["リュ","ryu"],["リョ","ryo"]] },
    { label:"gy", cols:3, chars:[["ギャ","gya"],["ギュ","gyu"],["ギョ","gyo"]] },
    { label:"j",  cols:3, chars:[["ジャ","ja"],["ジュ","ju"],["ジョ","jo"]] },
    { label:"by", cols:3, chars:[["ビャ","bya"],["ビュ","byu"],["ビョ","byo"]] },
    { label:"py", cols:3, chars:[["ピャ","pya"],["ピュ","pyu"],["ピョ","pyo"]] }
  ]
};

/* ---- Kanji N5 (char, reading-for-learning, meaning-for-quiz, kana-for-TTS) ----
   elemen ke-4 (kana) WAJIB diisi untuk kanji tunggal — TTS browser sering "menebak"
   cara baca sendiri kalau cuma dikasih 1 karakter kanji mentah (mis. 四 dibaca "shi"
   padahal yang diajarkan "yon", 七 dibaca "shichi" padahal "nana", 土 dibaca "do"
   padahal "tsuchi"). Dengan mengucapkan kana-nya langsung, audio selalu cocok teks. */
const KANJI_TIER1 = [
  ["一","ichi","satu (1)","いち"],["二","ni","dua (2)","に"],["三","san","tiga (3)","さん"],["四","yon","empat (4)","よん"],
  ["五","go","lima (5)","ご"],["六","roku","enam (6)","ろく"],["七","nana","tujuh (7)","なな"],["八","hachi","delapan (8)","はち"],
  ["九","kyuu","sembilan (9)","きゅう"],["十","juu","sepuluh (10)","じゅう"],["人","hito","orang","ひと"],["日","hi / nichi","hari / matahari","ひ"],
  ["月","tsuki","bulan","つき"],["火","hi / ka","api","ひ"],["水","mizu","air","みず"],["木","ki","pohon / kayu","き"]
];
const KANJI_TIER2 = [
  ["金","kin","emas / uang","きん"],["土","tsuchi","tanah","つち"],["年","toshi","tahun","とし"],["本","hon","buku / asal","ほん"],
  ["中","naka","tengah / dalam","なか"],["大","ookii","besar","おおきい"],["小","chiisai","kecil","ちいさい"],["上","ue","atas","うえ"],
  ["下","shita","bawah","した"],["左","hidari","kiri","ひだり"],["右","migi","kanan","みぎ"],["山","yama","gunung","やま"],
  ["川","kawa","sungai","かわ"],["田","ta","sawah","た"],["女","onna","perempuan","おんな"],["男","otoko","laki-laki","おとこ"]
];
const KANJI_TIER3 = [
  ["子","ko","anak","こ"],["学","gaku","ilmu / belajar","がく"],["校","kou","sekolah","こう"],["先","sen","lebih dulu","せん"],
  ["生","sei","hidup / lahir","せい"],["私","watashi","saya","わたし"],["今","ima","sekarang","いま"],["何","nani","apa","なに"],
  ["時","ji","waktu / jam","じ"],["分","fun","menit / bagian","ふん"],["半","han","setengah","はん"],["週","shuu","minggu","しゅう"],
  ["毎","mai","setiap","まい"],["食","shoku","makan","しょく"],["飲","in","minum","いん"],["見","ken","melihat","けん"]
];
// reading lookup used only in Learn mode + as a quiz hint
const KANJI_READING = {};
[...KANJI_TIER1, ...KANJI_TIER2, ...KANJI_TIER3].forEach(([c,r])=>{ KANJI_READING[c] = r; });

/* ---- Kotoba N5 (word-in-kana, romaji, meaning-for-quiz, contoh kalimat-in-kana, contoh romaji) ----
   Sengaja ditulis full hiragana/katakana (tanpa kanji) supaya bisa langsung dibaca begitu
   Hiragana & Katakana sudah dikuasai — kanji-nya dipelajari terpisah di Chapter "Kanji N5". */
const KOTOBA_TIER1 = [
  ["わたし","watashi","saya","わたしは がくせいです。","Watashi wa gakusei desu."],
  ["あなた","anata","kamu","あなたの なまえは なんですか。","Anata no namae wa nan desu ka."],
  ["せんせい","sensei","guru","せんせいは とても やさしいです。","Sensei wa totemo yasashii desu."],
  ["がくせい","gakusei","murid / pelajar","がくせいは まいにち べんきょうします。","Gakusei wa mainichi benkyou shimasu."],
  ["がっこう","gakkou","sekolah","がっこうは とても おおきいです。","Gakkou wa totemo ookii desu."],
  ["かいしゃ","kaisha","perusahaan","ちちは かいしゃで はたらきます。","Chichi wa kaisha de hatarakimasu."],
  ["いえ","ie","rumah","わたしの いえは えきの ちかくです。","Watashi no ie wa eki no chikaku desu."],
  ["ともだち","tomodachi","teman","ともだちと えいがを みます。","Tomodachi to eiga wo mimasu."],
  ["かぞく","kazoku","keluarga","わたしの かぞくは よにんです。","Watashi no kazoku wa yonin desu."],
  ["ちち","chichi","ayah (saya)","ちちは あさ はやく おきます。","Chichi wa asa hayaku okimasu."],
  ["はは","haha","ibu (saya)","ははは りょうりが じょうずです。","Haha wa ryouri ga jouzu desu."],
  ["こども","kodomo","anak","こどもたちは こうえんで あそびます。","Kodomotachi wa kouen de asobimasu."],
  ["なまえ","namae","nama","あなたの なまえを おしえてください。","Anata no namae wo oshiete kudasai."],
  ["でんわ","denwa","telepon","でんわで はなしましょう。","Denwa de hanashimashou."],
  ["くるま","kuruma","mobil","くるまで がっこうへ いきます。","Kuruma de gakkou e ikimasu."],
  ["ほん","hon","buku","この ほんは とても おもしろいです。","Kono hon wa totemo omoshiroi desu."],
  ["みず","mizu","air","みずを いっぱい のみます。","Mizu wo ippai nomimasu."],
  ["たべもの","tabemono","makanan","すきな たべものは なんですか。","Sukina tabemono wa nan desu ka."],
  ["のみもの","nomimono","minuman","のみものは なにに しますか。","Nomimono wa nani ni shimasu ka."],
  ["てんき","tenki","cuaca","きょうの てんきは いいです。","Kyou no tenki wa ii desu."],
  ["きょう","kyou","hari ini","きょうは とても あついです。","Kyou wa totemo atsui desu."],
  ["いぬ","inu","anjing","いぬと さんぽします。","Inu to sanpo shimasu."],
  ["ねこ","neko","kucing","ねこが いすの うえに います。","Neko ga isu no ue ni imasu."],
  ["テレビ","terebi","televisi","よる テレビを みます。","Yoru terebi wo mimasu."]
];
const KOTOBA_TIER2 = [
  ["たべる","taberu","makan","あさごはんを たべます。","Asagohan wo tabemasu."],
  ["のむ","nomu","minum","コーヒーを のみます。","Koohii wo nomimasu."],
  ["みる","miru","melihat / menonton","えいがを みるのが すきです。","Eiga wo miru no ga suki desu."],
  ["きく","kiku","mendengar","おんがくを きくのが すきです。","Ongaku wo kiku no ga suki desu."],
  ["はなす","hanasu","berbicara","にほんごで はなします。","Nihongo de hanashimasu."],
  ["いく","iku","pergi","がっこうへ いきます。","Gakkou e ikimasu."],
  ["くる","kuru","datang","ともだちが うちへ きます。","Tomodachi ga uchi e kimasu."],
  ["かえる","kaeru","pulang","はやく いえへ かえります。","Hayaku ie e kaerimasu."],
  ["かう","kau","membeli","あたらしい くつを かいます。","Atarashii kutsu wo kaimasu."],
  ["よむ","yomu","membaca","ほんを よむのが すきです。","Hon wo yomu no ga suki desu."],
  ["かく","kaku","menulis","てがみを かきます。","Tegami wo kakimasu."],
  ["ねる","neru","tidur","よる はやく ねます。","Yoru hayaku nemasu."],
  ["おきる","okiru","bangun","まいあさ ろくじに おきます。","Maiasa rokuji ni okimasu."],
  ["わかる","wakaru","mengerti","にほんごが すこし わかります。","Nihongo ga sukoshi wakarimasu."],
  ["おおきい","ookii","besar","この いえは おおきいです。","Kono ie wa ookii desu."],
  ["ちいさい","chiisai","kecil","あの いぬは ちいさいです。","Ano inu wa chiisai desu."],
  ["たかい","takai","tinggi / mahal","この かばんは たかいです。","Kono kaban wa takai desu."],
  ["やすい","yasui","murah","やおやの やさいは やすいです。","Yaoya no yasai wa yasui desu."],
  ["あたらしい","atarashii","baru","あたらしい くるまが ほしいです。","Atarashii kuruma ga hoshii desu."],
  ["ふるい","furui","lama / tua","これは ふるい たてものです。","Kore wa furui tatemono desu."],
  ["いい","ii","bagus","きょうは いい てんきですね。","Kyou wa ii tenki desu ne."],
  ["たのしい","tanoshii","menyenangkan","りょこうは とても たのしかったです。","Ryokou wa totemo tanoshikatta desu."],
  ["きれい","kirei (na)","cantik / bersih","この はなは きれいです。","Kono hana wa kirei desu."],
  ["すき","suki (na)","suka","わたしは すしが すきです。","Watashi wa sushi ga suki desu."]
];
const KOTOBA_TIER3 = [
  ["えき","eki","stasiun","えきまで あるいて いきます。","Eki made aruite ikimasu."],
  ["びょういん","byouin","rumah sakit","びょういんで くすりを もらいます。","Byouin de kusuri wo moraimasu."],
  ["ぎんこう","ginkou","bank","ぎんこうで おかねを おろします。","Ginkou de okane wo oroshimasu."],
  ["ゆうびんきょく","yuubinkyoku","kantor pos","ゆうびんきょくで きってを かいます。","Yuubinkyoku de kitte wo kaimasu."],
  ["としょかん","toshokan","perpustakaan","としょかんで ほんを よみます。","Toshokan de hon wo yomimasu."],
  ["こうえん","kouen","taman","こうえんで さんぽします。","Kouen de sanpo shimasu."],
  ["えいが","eiga","film","しゅうまつに えいがを みます。","Shuumatsu ni eiga wo mimasu."],
  ["おんがく","ongaku","musik","おんがくを きくのが たのしいです。","Ongaku wo kiku no ga tanoshii desu."],
  ["しごと","shigoto","pekerjaan","しごとは なんじに おわりますか。","Shigoto wa nanji ni owarimasu ka."],
  ["やすみ","yasumi","libur / istirahat","あしたは やすみです。","Ashita wa yasumi desu."],
  ["あさ","asa","pagi","あさ ろくじに おきます。","Asa rokuji ni okimasu."],
  ["ひる","hiru","siang","ひるに ごはんを たべます。","Hiru ni gohan wo tabemasu."],
  ["よる","yoru","malam","よるは しずかです。","Yoru wa shizuka desu."],
  ["あした","ashita","besok","あした がっこうへ いきます。","Ashita gakkou e ikimasu."],
  ["きのう","kinou","kemarin","きのう えいがを みました。","Kinou eiga wo mimashita."],
  ["いま","ima","sekarang","いま なんじですか。","Ima nanji desu ka."],
  ["どこ","doko","di mana","としょかんは どこですか。","Toshokan wa doko desu ka."],
  ["だれ","dare","siapa","あのひとは だれですか。","Ano hito wa dare desu ka."],
  ["いつ","itsu","kapan","たんじょうびは いつですか。","Tanjoubi wa itsu desu ka."],
  ["なぜ","naze","mengapa","なぜ がっこうを やすみましたか。","Naze gakkou wo yasumimashita ka."],
  ["おはよう","ohayou","selamat pagi","おはよう ございます。","Ohayou gozaimasu."],
  ["こんにちは","konnichiwa","selamat siang / halo","こんにちは、げんきですか。","Konnichiwa, genki desu ka."],
  ["ありがとう","arigatou","terima kasih","てつだって くれて ありがとう。","Tetsudatte kurete arigatou."],
  ["すみません","sumimasen","permisi / maaf","すみません、といれは どこですか。","Sumimasen, toire wa doko desu ka."]
];

/* ---- Bunpō N5 (pattern, contoh kalimat, fungsi/arti-for-quiz) ---- */
/* elemen ke-4 = romaji pecah per-segmen kata: [[teks_jp, romaji], ...] agar mudah dipelajari & bisa diucapkan satu-satu */
const BUNPO_TIER1 = [
  ["〜は〜です","私は学生です。","menyatakan A adalah B",[["私","Watashi"],["は","wa"],["学生","gakusei"],["です。","desu."]]],
  ["〜が","雨が降っています。","menandai subjek kalimat",[["雨","Ame"],["が","ga"],["降っています。","futte imasu."]]],
  ["〜を","水を飲みます。","menandai objek langsung",[["水","Mizu"],["を","wo"],["飲みます。","nomimasu."]]],
  ["〜に","7時に起きます。","menunjukkan waktu atau tujuan",[["7時","Shichi-ji"],["に","ni"],["起きます。","okimasu."]]],
  ["〜で","電車で行きます。","menunjukkan tempat/alat melakukan sesuatu",[["電車","Densha"],["で","de"],["行きます。","ikimasu."]]],
  ["〜と","友達と話します。","dan / bersama dengan",[["友達","Tomodachi"],["と","to"],["話します。","hanashimasu."]]],
  ["〜も","私も学生です。","juga",[["私","Watashi"],["も","mo"],["学生です。","gakusei desu."]]],
  ["〜の","これは私の本です。","menunjukkan kepemilikan",[["これ","Kore"],["は","wa"],["私の","watashi no"],["本です。","hon desu."]]],
  ["〜へ","学校へ行きます。","menuju / ke arah",[["学校","Gakkou"],["へ","e"],["行きます。","ikimasu."]]],
  ["〜か","これは何ですか。","partikel tanya",[["これ","Kore"],["は","wa"],["何ですか。","nan desu ka."]]],
  ["〜ね","今日は暑いですね。","penegasan, kira-kira 'ya kan?'",[["今日","Kyou"],["は","wa"],["暑いですね。","atsui desu ne."]]],
  ["〜よ","もう6時ですよ。","penekanan informasi baru",[["もう","Mou"],["6時","roku-ji"],["ですよ。","desu yo."]]]
];
const BUNPO_TIER2 = [
  ["〜ませんか","一緒に行きませんか。","mengajak, 'maukah...?'",[["一緒に","Issho ni"],["行きませんか。","ikimasen ka."]]],
  ["〜ましょう","一緒に食べましょう。","ayo / mari kita",[["一緒に","Issho ni"],["食べましょう。","tabemashou."]]],
  ["〜たい","日本へ行きたいです。","ingin melakukan sesuatu",[["日本へ","Nihon e"],["行きたいです。","ikitai desu."]]],
  ["〜ないでください","写真を撮らないでください。","tolong jangan lakukan",[["写真を","Shashin wo"],["撮らないでください。","toranaide kudasai."]]],
  ["〜てください","ここに座ってください。","tolong lakukan",[["ここに","Koko ni"],["座ってください。","suwatte kudasai."]]],
  ["〜ています","今、勉強しています。","sedang melakukan (progresif)",[["今、","Ima,"],["勉強しています。","benkyou shite imasu."]]],
  ["〜ました","昨日、映画を見ました。","bentuk lampau positif",[["昨日、","Kinou,"],["映画を","eiga wo"],["見ました。","mimashita."]]],
  ["〜ませんでした","昨日、行きませんでした。","bentuk lampau negatif",[["昨日、","Kinou,"],["行きませんでした。","ikimasen deshita."]]],
  ["〜から〜まで","9時から5時まで働きます。","dari...sampai",[["9時から","Ku-ji kara"],["5時まで","go-ji made"],["働きます。","hatarakimasu."]]],
  ["〜より","犬より猫が好きです。","dibanding dengan",[["犬より","Inu yori"],["猫が","neko ga"],["好きです。","suki desu."]]],
  ["〜ほうがいい","早く寝たほうがいいです。","lebih baik melakukan",[["早く","Hayaku"],["寝たほうが","neta hou ga"],["いいです。","ii desu."]]],
  ["〜てもいいです","ここに座ってもいいです。","boleh melakukan",[["ここに","Koko ni"],["座ってもいいです。","suwattemo ii desu."]]]
];
const BUNPO_TIER3 = [
  ["〜なければなりません","薬を飲まなければなりません。","harus melakukan",[["薬を","Kusuri wo"],["飲まなければなりません。","nomanakereba narimasen."]]],
  ["〜前に","寝る前に歯を磨きます。","sebelum melakukan",[["寝る前に","Neru mae ni"],["歯を","ha wo"],["磨きます。","migakimasu."]]],
  ["〜後で","食べた後で薬を飲みます。","setelah melakukan",[["食べた後で","Tabeta ato de"],["薬を","kusuri wo"],["飲みます。","nomimasu."]]],
  ["〜ながら","音楽を聞きながら勉強します。","sambil melakukan",[["音楽を","Ongaku wo"],["聞きながら","kikinagara"],["勉強します。","benkyou shimasu."]]],
  ["〜ので","雨なので、行きません。","karena (alasan)",[["雨なので、","Ame nanode,"],["行きません。","ikimasen."]]],
  ["〜のに","勉強したのに、忘れました。","padahal / meskipun",[["勉強したのに、","Benkyou shita noni,"],["忘れました。","wasuremashita."]]],
  ["〜と思います","明日雨が降ると思います。","saya pikir / menurut saya",[["明日","Ashita"],["雨が","ame ga"],["降ると思います。","furu to omoimasu."]]],
  ["〜と言いました","先生は明日休むと言いました。","mengatakan bahwa",[["先生は","Sensei wa"],["明日","ashita"],["休むと言いました。","yasumu to iimashita."]]],
  ["〜ことができます","漢字を読むことができます。","bisa / mampu melakukan",[["漢字を","Kanji wo"],["読むことができます。","yomu koto ga dekimasu."]]],
  ["〜つもりです","来年日本へ行くつもりです。","berniat / berencana",[["来年","Rainen"],["日本へ","Nihon e"],["行くつもりです。","iku tsumori desu."]]],
  ["〜でしょう","明日は晴れでしょう。","mungkin / perkiraan",[["明日は","Ashita wa"],["晴れでしょう。","hare deshou."]]],
  ["〜すぎる","食べすぎました。","terlalu (berlebihan)",[["食べすぎました。","Tabesugimashita."]]]
];

/* =========================================================
   SCRIPTS registry — generalizes hiragana / katakana / kanji
   ========================================================= */
// beberapa kanji punya 2 cara baca sekaligus (mis. "hi / nichi") — untuk soal
// quest "Tebak romaji" kita ambil bacaan utama (sebelum " / ") sebagai jawaban.
function primaryReading(str){
  return str.includes(" / ") ? str.split(" / ")[0].trim() : str;
}
const LEVEL_META = [
  {id:"tier1", tier:1, rank:"Warrior"},
  {id:"tier2", tier:2, rank:"Epic"},
  {id:"tier3", tier:3, rank:"Mythical"},
  {id:"all",   tier:4, rank:"Immortal"}
];

const SCRIPTS = {
  hiragana: {
    key:"hiragana", label:"Hiragana", tabGlyph:"あ", quizType:"romaji", quizLabel:"Tebak romaji",
    data:{ tier1:HIRAGANA_TIER1, tier2:HIRAGANA_TIER2, tier3:HIRAGANA_TIER3 },
    levelText:{
      tier1:{title:"Dasar", sample:"あ い う", desc:"Gojūon — 46 karakter inti dari a sampai n."},
      tier2:{title:"Bertitik", sample:"が ざ ぱ", desc:"Dakuten & handakuten: ga, za, da, ba, pa."},
      tier3:{title:"Gabungan", sample:"きゃ しゅ", desc:"Yōon — kombinasi kecil seperti kya, sha, cho."},
      all:{title:"Semua Campur", sample:"ん づ りょ", desc:"Seluruh karakter hiragana diacak jadi satu Chapter."}
    },
    learnSections:[
      {tierKey:"tier1", title:"Gojūon — Dasar", desc:"46 karakter inti. Ini fondasi yang wajib dihafal duluan.", rows:GOJUON_HIRAGANA.tier1},
      {tierKey:"tier2", title:"Dakuten & Handakuten — Bertitik", desc:"Tanda titik dua (゛) atau lingkaran kecil (゜) mengubah cara baca.", rows:GOJUON_HIRAGANA.tier2},
      {tierKey:"tier3", title:"Yōon — Gabungan", desc:"Konsonan + ゃゅょ kecil yang dibaca sebagai satu suku kata.", rows:GOJUON_HIRAGANA.tier3}
    ]
  },
  katakana: {
    key:"katakana", label:"Katakana", tabGlyph:"ア", quizType:"romaji", quizLabel:"Tebak romaji",
    data:{ tier1:KATAKANA_TIER1, tier2:KATAKANA_TIER2, tier3:KATAKANA_TIER3 },
    levelText:{
      tier1:{title:"Dasar", sample:"ア イ ウ", desc:"46 karakter inti katakana, dari a sampai n."},
      tier2:{title:"Bertitik", sample:"ガ ザ パ", desc:"Dakuten & handakuten katakana: ga, za, da, ba, pa."},
      tier3:{title:"Gabungan", sample:"キャ シュ", desc:"Yōon katakana — kombinasi kecil seperti kya, sha, cho."},
      all:{title:"Semua Campur", sample:"ン ヅ リョ", desc:"Seluruh karakter katakana diacak jadi satu Chapter."}
    },
    learnSections:[
      {tierKey:"tier1", title:"Gojūon — Dasar", desc:"46 karakter inti katakana, biasanya dipakai untuk kata serapan asing dan nama.", rows:GOJUON_KATAKANA.tier1},
      {tierKey:"tier2", title:"Dakuten & Handakuten — Bertitik", desc:"Sama seperti hiragana, tanda titik mengubah cara baca konsonannya.", rows:GOJUON_KATAKANA.tier2},
      {tierKey:"tier3", title:"Yōon — Gabungan", desc:"Konsonan + ャュョ kecil, dibaca sebagai satu suku kata.", rows:GOJUON_KATAKANA.tier3}
    ]
  },
  kanji: {
    key:"kanji", label:"Kanji N5", tabGlyph:"漢", quizType:"meaning",
    quizLabel:"Tebak artinya", quizLabelRomaji:"Tebak romaji", hasVariants:true,
    data:{
      tier1: KANJI_TIER1.map(([c,,m])=>[c,m]),
      tier2: KANJI_TIER2.map(([c,,m])=>[c,m]),
      tier3: KANJI_TIER3.map(([c,,m])=>[c,m])
    },
    dataRomaji:{
      tier1: KANJI_TIER1.map(([c,r])=>[c, primaryReading(r)]),
      tier2: KANJI_TIER2.map(([c,r])=>[c, primaryReading(r)]),
      tier3: KANJI_TIER3.map(([c,r])=>[c, primaryReading(r)])
    },
    levelText:{
      tier1:{title:"Angka & Alam", sample:"一 二 日", desc:"16 kanji dasar: angka dan unsur alam."},
      tier2:{title:"Ukuran & Arah", sample:"大 小 上", desc:"16 kanji: ukuran, arah, dan keluarga."},
      tier3:{title:"Sekolah & Waktu", sample:"学 校 今", desc:"16 kanji: sekolah, waktu, dan kegiatan sehari-hari."},
      all:{title:"Semua Campur", sample:"私 何 見", desc:"Seluruh 48 kanji N5 diacak jadi satu Chapter."}
    },
    learnCards:[
      {tierKey:"tier1", title:"Angka & Alam", desc:"16 kanji dasar: angka dan unsur alam.", items:KANJI_TIER1},
      {tierKey:"tier2", title:"Ukuran & Arah", desc:"16 kanji: ukuran, arah, dan keluarga.", items:KANJI_TIER2},
      {tierKey:"tier3", title:"Sekolah & Waktu", desc:"16 kanji: sekolah, waktu, dan kegiatan sehari-hari.", items:KANJI_TIER3}
    ]
  },
  kotoba: {
    key:"kotoba", label:"Kotoba", tabGlyph:"語", quizType:"meaning",
    quizLabel:"Tebak artinya", quizLabelRomaji:"Tebak romaji", hasVariants:true,
    data:{
      tier1: KOTOBA_TIER1.map(([c,,m])=>[c,m]),
      tier2: KOTOBA_TIER2.map(([c,,m])=>[c,m]),
      tier3: KOTOBA_TIER3.map(([c,,m])=>[c,m])
    },
    dataRomaji:{
      tier1: KOTOBA_TIER1.map(([c,r])=>[c,r]),
      tier2: KOTOBA_TIER2.map(([c,r])=>[c,r]),
      tier3: KOTOBA_TIER3.map(([c,r])=>[c,r])
    },
    levelText:{
      tier1:{title:"Kata Benda", sample:"わたし がっこう ともだち", desc:"24 kosakata N5 (kana, tanpa kanji): orang, tempat, dan benda sehari-hari, lengkap dengan contoh kalimat."},
      tier2:{title:"Kerja & Sifat", sample:"たべる おおきい すき", desc:"24 kosakata N5 (kana, tanpa kanji): kata kerja, kata sifat -i, dan kata sifat -na, lengkap dengan contoh kalimat."},
      tier3:{title:"Waktu & Ekspresi", sample:"えき あした ありがとう", desc:"24 kosakata N5 (kana, tanpa kanji): tempat, waktu, kata tanya, dan ekspresi/salam, lengkap dengan contoh kalimat."},
      all:{title:"Semua Campur", sample:"しごと あたらしい かえる", desc:"Seluruh 72 kosakata N5 diacak jadi satu Chapter."}
    },
    learnVocab:[
      {tierKey:"tier1", title:"Kata Benda — Sehari-hari", desc:"24 kosakata dasar N5 (full kana, tanpa kanji): orang, keluarga, tempat, dan benda sehari-hari — tiap kata disertai contoh kalimat.", items:KOTOBA_TIER1},
      {tierKey:"tier2", title:"Kata Kerja & Kata Sifat", desc:"24 kosakata N5 (full kana, tanpa kanji): kata kerja, kata sifat -i, dan kata sifat -na — tiap kata disertai contoh kalimat.", items:KOTOBA_TIER2},
      {tierKey:"tier3", title:"Tempat, Waktu & Ekspresi", desc:"24 kosakata N5 (full kana, tanpa kanji): tempat, waktu, kata tanya, dan ekspresi/salam — tiap kata disertai contoh kalimat.", items:KOTOBA_TIER3}
    ]
  },
  bunpo: {
    key:"bunpo", label:"Bunpō", tabGlyph:"文", quizType:"meaning", quizLabel:"Tebak fungsinya",
    data:{
      tier1: BUNPO_TIER1.map(([c,,m])=>[c,m]),
      tier2: BUNPO_TIER2.map(([c,,m])=>[c,m]),
      tier3: BUNPO_TIER3.map(([c,,m])=>[c,m])
    },
    levelText:{
      tier1:{title:"Partikel Dasar", sample:"〜は 〜が 〜を", desc:"12 partikel dasar N5 yang wajib dikuasai."},
      tier2:{title:"Pola Kalimat", sample:"〜たい 〜てください", desc:"12 pola kalimat N5 untuk percakapan sehari-hari."},
      tier3:{title:"Struktur Lanjutan", sample:"〜ながら 〜ので", desc:"12 struktur tata bahasa N5 tingkat lanjut."},
      all:{title:"Semua Campur", sample:"〜つもりです", desc:"Seluruh 36 pola bunpō N5 diacak jadi satu Chapter."}
    },
    learnGrammar:[
      {tierKey:"tier1", title:"Partikel Dasar", desc:"12 partikel dasar N5 yang wajib dikuasai.", items:BUNPO_TIER1},
      {tierKey:"tier2", title:"Pola Kalimat", desc:"12 pola kalimat N5 untuk percakapan sehari-hari.", items:BUNPO_TIER2},
      {tierKey:"tier3", title:"Struktur Lanjutan", desc:"12 struktur tata bahasa N5 tingkat lanjut.", items:BUNPO_TIER3}
    ]
  }
};

// build the "all" (Kaisar) pool for every script
Object.values(SCRIPTS).forEach(s=>{
  s.data.all = [...s.data.tier1, ...s.data.tier2, ...s.data.tier3];
  if(s.dataRomaji){
    s.dataRomaji.all = [...s.dataRomaji.tier1, ...s.dataRomaji.tier2, ...s.dataRomaji.tier3];
  }
});

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
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function buildChoices(correct, pool, count=4){
  const wrongPool = pool.filter(p => p[0] !== correct[0]);
  // hilangkan duplikat jawaban (mis. dua kanji beda yg kebetulan sama bacaannya)
  const uniqueWrongs = [...new Map(wrongPool.map(p => [p[1], p])).values()].filter(p => p[1] !== correct[1]);
  const wrongs = shuffle(uniqueWrongs).slice(0, count - 1).map(p => p[1]);
  return shuffle([correct[1], ...wrongs]);
}

/* ---------------- render: learn tables (hiragana/katakana) ---------------- */
function renderGojuonTables(section){
  const wrap = document.createElement("div");
  const total = section.rows.reduce((sum,r)=> sum + r.chars.filter(Boolean).length, 0);
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${section.title} <span class="count">${total} karakter</span></h2>
    <p class="learn-section-desc">${section.desc}</p>
  `;
  const table = document.createElement("div");
  table.className = "kana-table";
  section.rows.forEach(row=>{
    const rowEl = document.createElement("div");
    rowEl.className = `kana-row cols-${row.cols}`;
    const labelEl = document.createElement("div");
    labelEl.className = "kana-row-label";
    labelEl.textContent = row.label;
    rowEl.appendChild(labelEl);
    row.chars.forEach(pair=>{
      const cell = document.createElement("div");
      if(pair){
        cell.className = "kana-cell filled speakable";
        cell.setAttribute("data-speak", pair[0]);
        cell.setAttribute("role","button");
        cell.setAttribute("tabindex","0");
        cell.setAttribute("aria-label", `Dengar ucapan ${pair[0]}, dibaca ${pair[1]}`);
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

function renderKanjiTables(section){
  const wrap = document.createElement("div");
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${section.title} <span class="count">${section.items.length} karakter</span></h2>
    <p class="learn-section-desc">${section.desc}</p>
  `;
  const grid = document.createElement("div");
  grid.className = "kanji-grid";
  section.items.forEach(([char,reading,meaning,kana])=>{
    const cell = document.createElement("div");
    cell.className = "kanji-cell";
    cell.setAttribute("data-speak", kana || char);
    cell.setAttribute("role","button");
    cell.setAttribute("tabindex","0");
    cell.setAttribute("aria-label", `Dengar ucapan ${char}, dibaca ${reading}`);
    cell.innerHTML = `
      <span class="kj">${char}</span>
      <span class="kj-reading">${reading}</span>
      <span class="kj-meaning">${meaning}</span>
      <span class="cell-audio-icon">🔊</span>
    `;
    grid.appendChild(cell);
  });
  sectionEl.appendChild(grid);
  wrap.appendChild(sectionEl);
  return wrap;
}

function renderVocabTables(section){
  const wrap = document.createElement("div");
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${section.title} <span class="count">${section.items.length} kata</span></h2>
    <p class="learn-section-desc">${section.desc}</p>
  `;
  const list = document.createElement("div");
  list.className = "grammar-list vocab-list";
  section.items.forEach(([word,reading,meaning,example,exampleRomaji])=>{
    const card = document.createElement("div");
    card.className = "grammar-card vocab-card";
    const wordRow = `
      <button type="button" class="vocab-word-btn" data-speak="${word}" aria-label="Dengar ucapan ${word}, dibaca ${reading}">
        <span class="grammar-pattern vocab-word">${word}</span>
        <span class="cell-audio-icon">🔊</span>
      </button>
      <span class="vocab-reading">${reading}</span>
      <span class="grammar-meaning">${meaning}</span>
    `;
    const exampleHtml = example ? `
      <div class="grammar-example-row">
        <span class="grammar-example">${example}</span>
        <button type="button" class="speak-btn" data-speak="${example}" aria-label="Dengar kalimat contoh">🔊</button>
      </div>
      <span class="vocab-example-romaji">${exampleRomaji || ""}</span>
    ` : "";
    card.innerHTML = wordRow + exampleHtml;
    list.appendChild(card);
  });
  sectionEl.appendChild(list);
  wrap.appendChild(sectionEl);
  return wrap;
}

function renderGrammarCards(section){
  const wrap = document.createElement("div");
  const sectionEl = document.createElement("div");
  sectionEl.className = "learn-section";
  sectionEl.innerHTML = `
    <h2 class="learn-section-title">${section.title} <span class="count">${section.items.length} pola</span></h2>
    <p class="learn-section-desc">${section.desc}</p>
  `;
  const list = document.createElement("div");
  list.className = "grammar-list";
  section.items.forEach(([pattern,example,meaning,segments])=>{
    const card = document.createElement("div");
    card.className = "grammar-card";
    const segmentsHtml = Array.isArray(segments)
      ? segments.map(([seg,rom])=>`
          <button type="button" class="segment-chip" data-speak="${seg}" aria-label="Dengar ${seg}, dibaca ${rom}">
            <span class="seg-jp">${seg}</span>
            <span class="seg-romaji">${rom}</span>
          </button>`).join("")
      : "";
    card.innerHTML = `
      <span class="grammar-pattern">${pattern}</span>
      <span class="grammar-meaning">${meaning}</span>
      <div class="grammar-example-row">
        <span class="grammar-example">${example}</span>
        <button type="button" class="speak-btn" data-speak="${example}" aria-label="Dengar kalimat contoh">🔊</button>
      </div>
      <div class="grammar-segments">${segmentsHtml}</div>
    `;
    list.appendChild(card);
  });
  sectionEl.appendChild(list);
  wrap.appendChild(sectionEl);
  return wrap;
}

function renderLearnTables(scriptKey){
  currentLearnScript = scriptKey;
  const script = SCRIPTS[scriptKey];
  const wrap = document.getElementById("learn-tables");
  wrap.innerHTML = "";
  if(script.learnSections){
    script.learnSections.forEach(section=>{
      wrap.appendChild(renderGojuonTables(section));
    });
  } else if(script.learnVocab){
    script.learnVocab.forEach(section=>{
      wrap.appendChild(renderVocabTables(section));
    });
  } else if(script.learnGrammar){
    script.learnGrammar.forEach(section=>{
      wrap.appendChild(renderGrammarCards(section));
    });
  } else if(script.learnCards){
    script.learnCards.forEach(section=>{
      wrap.appendChild(renderKanjiTables(section));
    });
  }
  document.querySelectorAll("#learn-script-tabs .script-tab").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.script === scriptKey);
  });
}

document.querySelectorAll("#learn-script-tabs .script-tab").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    renderLearnTables(btn.dataset.script);
    window.scrollTo({top:0, behavior:"instant"});
  });
});

/* ---------------- render: start screen levels ---------------- */
const levelsEl = document.getElementById("levels");
const startBtn = document.getElementById("btn-start");
const btnOpenLearn = document.getElementById("btn-open-learn");

function renderLevels(scriptKey){
  currentScript = scriptKey;
  const script = SCRIPTS[scriptKey];
  levelsEl.innerHTML = "";
  state.mode = null;
  startBtn.disabled = true;
  startBtn.textContent = "Pilih tingkatan dulu";
  btnOpenLearn.textContent = `📖 Belajar ${script.label} Dulu`;
  quizVariantPickerEl.classList.toggle("hidden", !script.hasVariants);
  rangePickerEl.classList.add("hidden");

  const supportsHard = scriptKey === "hiragana" || scriptKey === "katakana";
  const hardBtn = document.querySelector('.difficulty-btn[data-difficulty="hard"]');
  hardBtn.disabled = !supportsHard;
  difficultyHintEl.classList.toggle("hidden", supportsHard);
  if(!supportsHard && selectedDifficulty === "hard"){
    setDifficulty("easy");
  }

  LEVEL_META.forEach(meta=>{
    const info = script.levelText[meta.id];
    const card = document.createElement("button");
    card.className = "level-card";
    card.type = "button";
    card.setAttribute("aria-pressed","false");
    card.innerHTML = `
      <span class="tier">
        <span class="tier-dots">${[1,2,3,4].map(n => `<span class="${n <= meta.tier ? 'filled' : ''}"></span>`).join("")}</span>
        ${meta.rank}
      </span>
      <span class="kana-sample">${info.sample}</span>
      <h3>${info.title}</h3>
      <p>${info.desc}</p>
    `;
    card.addEventListener("click", ()=>{
      document.querySelectorAll(".level-card").forEach(c=>{c.classList.remove("selected"); c.setAttribute("aria-pressed","false");});
      card.classList.add("selected");
      card.setAttribute("aria-pressed","true");
      state.mode = meta.id;
      startBtn.disabled = false;
      renderRangePicker(scriptKey, meta.id);
    });
    levelsEl.appendChild(card);
  });

  updateConquestCard(scriptKey);
}

document.querySelectorAll("#script-tabs .script-tab").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll("#script-tabs .script-tab").forEach(b=> b.classList.toggle("active", b === btn));
    renderLevels(btn.dataset.script);
  });
});

startBtn.addEventListener("click", ()=> startQuiz(currentScript, state.mode));

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
function getRangeItemInfo(scriptKey, modeId, i){
  const script = SCRIPTS[scriptKey];
  const kana = script.data[modeId][i][0];
  if(script.dataRomaji){
    return { kana, romaji: script.dataRomaji[modeId][i][1], arti: script.data[modeId][i][1] };
  }
  if(script.quizType === "meaning"){
    return { kana, romaji: "", arti: script.data[modeId][i][1] };
  }
  return { kana, romaji: script.data[modeId][i][1], arti: "" };
}

// batch selang-seling: hiragana/katakana pakai grup baris tabel gojūon asli
// (mis. "a-i-u-e-o" satu batch), script lain (kotoba/bunpō/kanji) dikelompokkan
// tiap 4 item berurutan supaya tetap ada variasi warna walau tanpa tabel baris.
function getBatchSizes(scriptKey, modeId){
  const isKana = scriptKey === "hiragana" || scriptKey === "katakana";
  if(isKana){
    const gojuon = scriptKey === "hiragana" ? GOJUON_HIRAGANA : GOJUON_KATAKANA;
    const tiers = modeId === "all" ? ["tier1","tier2","tier3"] : [modeId];
    const sizes = [];
    tiers.forEach(t=>{
      gojuon[t].forEach(row=>{
        const n = row.chars.filter(Boolean).length;
        if(n > 0) sizes.push(n);
      });
    });
    return sizes;
  }
  const total = SCRIPTS[scriptKey].data[modeId].length;
  const sizes = [];
  for(let remaining = total; remaining > 0; remaining -= 4) sizes.push(Math.min(4, remaining));
  return sizes;
}

function buildBatchIndexArray(sizes){
  const arr = [];
  sizes.forEach((size, batchIdx)=>{
    for(let k=0;k<size;k++) arr.push(batchIdx);
  });
  return arr;
}

function renderRangeOptionsHtml(){
  return currentRangeItems.map((item, i)=>{
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

function closeRangeDropdown(key){
  const cfg = rangeDdConfig[key];
  cfg.list.classList.add("hidden");
  cfg.trigger.setAttribute("aria-expanded","false");
}
function closeAllRangeDropdowns(){
  closeRangeDropdown("from");
  closeRangeDropdown("to");
}
function openRangeDropdown(key){
  closeAllRangeDropdowns();
  const cfg = rangeDdConfig[key];
  cfg.list.classList.remove("hidden");
  cfg.trigger.setAttribute("aria-expanded","true");
  const activeEl = cfg.list.querySelector(".range-option.active");
  if(activeEl) activeEl.scrollIntoView({block:"nearest"});
}

function updateRangeTrigger(key, index){
  const cfg = rangeDdConfig[key];
  const item = currentRangeItems[index];
  cfg.kanaEl.textContent = item.kana;
  cfg.subEl.textContent = item.romaji || item.arti || "";
  cfg.list.querySelectorAll(".range-option").forEach(li=>{
    li.classList.toggle("active", parseInt(li.dataset.index,10) === index);
  });
}

function selectRangeIndex(key, index){
  if(key === "from"){
    selectedRangeFrom = index;
    if(selectedRangeFrom > selectedRangeTo) selectedRangeTo = selectedRangeFrom;
  } else {
    selectedRangeTo = index;
    if(selectedRangeTo < selectedRangeFrom) selectedRangeFrom = selectedRangeTo;
  }
  updateRangeTrigger("from", selectedRangeFrom);
  updateRangeTrigger("to", selectedRangeTo);
  updateRangeHint();
}

["from","to"].forEach(key=>{
  const cfg = rangeDdConfig[key];
  cfg.trigger.addEventListener("click", ()=>{
    const isOpen = cfg.trigger.getAttribute("aria-expanded") === "true";
    if(isOpen) closeRangeDropdown(key); else openRangeDropdown(key);
  });
  cfg.list.addEventListener("click", (e)=>{
    const li = e.target.closest(".range-option");
    if(!li) return;
    selectRangeIndex(key, parseInt(li.dataset.index,10));
    closeRangeDropdown(key);
  });
});
document.addEventListener("click", (e)=>{
  if(!e.target.closest(".range-dd")) closeAllRangeDropdowns();
});
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") closeAllRangeDropdowns();
});

// isi ulang kedua dropdown "Dari"/"Sampai" sesuai urutan karakter di tingkatan
// yang baru dipilih, lalu reset rentang ke seluruh tingkatan itu (awal - akhir).
function renderRangePicker(scriptKey, modeId){
  const pool = SCRIPTS[scriptKey].data[modeId];
  const batchIdxArr = buildBatchIndexArray(getBatchSizes(scriptKey, modeId));
  currentRangeItems = pool.map((_,i)=>({
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

function setRangeMode(mode){
  rangeMode = mode;
  document.querySelectorAll(".range-mode-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.rangeMode === mode);
  });
  rangeRowEl.classList.toggle("hidden", mode !== "manual");
  rangeRandomEl.classList.toggle("hidden", mode !== "random");
}
rangeModeToggleEl.addEventListener("click", (e)=>{
  const btn = e.target.closest(".range-mode-btn");
  if(!btn) return;
  setRangeMode(btn.dataset.rangeMode);
  updateRangeHint();
});

// opsi kelipatan 5 sampai total soal tingkatan ini, selalu diakhiri "Semua".
function renderRandomCountOptions(totalCount){
  const steps = [];
  for(let n = 5; n < totalCount; n += 5) steps.push(n);
  steps.push(totalCount);
  if(!steps.includes(selectedRandomCount)) selectedRandomCount = steps[0];
  rangeRandomOptionsEl.innerHTML = steps.map(n=>{
    const label = n === totalCount ? `Semua (${n})` : String(n);
    return `<button type="button" class="range-count-btn ${n === selectedRandomCount ? 'active' : ''}" data-count="${n}">${label}</button>`;
  }).join("");
}
rangeRandomOptionsEl.addEventListener("click", (e)=>{
  const btn = e.target.closest(".range-count-btn");
  if(!btn) return;
  selectedRandomCount = parseInt(btn.dataset.count, 10);
  rangeRandomOptionsEl.querySelectorAll(".range-count-btn").forEach(b=>{
    b.classList.toggle("active", b === btn);
  });
  updateRangeHint();
});

function updateRangeHint(){
  if(!state.mode) return;
  const info = SCRIPTS[currentScript].levelText[state.mode];

  if(rangeMode === "random"){
    const total = currentRangeItems.length;
    const count = Math.min(selectedRandomCount, total);
    rangeHintEl.textContent = `🎲 ${count} soal acak dipilih dari total ${total} soal di tingkatan ini`;
    startBtn.textContent = `Mulai — ${info.title} (${count} Soal Acak)`;
    return;
  }

  const count = selectedRangeTo - selectedRangeFrom + 1;
  const fromLabel = currentRangeItems[selectedRangeFrom].kana;
  const toLabel = currentRangeItems[selectedRangeTo].kana;
  rangeHintEl.textContent = count === 1
    ? `1 soal terpilih (${fromLabel})`
    : `${count} soal terpilih (${fromLabel} → ${toLabel})`;
  startBtn.textContent = `Mulai — ${info.title} (${count} Soal)`;
}

/* ---------------- tipe soal: arti / romaji / campuran ---------------- */
const quizVariantPickerEl = document.getElementById("quiz-variant-picker");
document.querySelectorAll(".quiz-variant-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".quiz-variant-btn").forEach(b=> b.classList.remove("active"));
    btn.classList.add("active");
    selectedQuizVariant = btn.dataset.variant;
  });
});

/* ---------------- tingkat kesulitan: easy / medium / hard ---------------- */
const difficultyHintEl = document.getElementById("difficulty-hint");
document.querySelectorAll(".difficulty-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    if(btn.disabled) return;
    document.querySelectorAll(".difficulty-btn").forEach(b=> b.classList.remove("active"));
    btn.classList.add("active");
    selectedDifficulty = btn.dataset.difficulty;
  });
});
function setDifficulty(value){
  selectedDifficulty = value;
  document.querySelectorAll(".difficulty-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.difficulty === value);
  });
}

/* ---------------- mode penaklukan (conquest) ---------------- */
const btnConquest = document.getElementById("btn-conquest");
const conquestOverlay = document.getElementById("conquest-overlay");
const conquestModalText = document.getElementById("conquest-modal-text");
const conquestModalRulesEl = document.getElementById("conquest-modal-rules");
const btnConquestCancel = document.getElementById("btn-conquest-cancel");
const btnConquestConfirm = document.getElementById("btn-conquest-confirm");
const conquestScriptLabelEl = document.getElementById("conquest-script-label");
const conquestCountEl = document.getElementById("conquest-count");

const conquestStatusEl = document.getElementById("conquest-status");
const conquestLockNoteEl = document.getElementById("conquest-lock-note");

function updateConquestCard(scriptKey){
  const script = SCRIPTS[scriptKey];
  const total = script.data.all.length;
  conquestScriptLabelEl.textContent = script.label;
  conquestCountEl.textContent = total;
  const isConquered = !!getConqueredTitles()[scriptKey];
  if(conquestStatusEl) conquestStatusEl.classList.toggle("hidden", !isConquered);

  const lockKey = getConquestLockReason(scriptKey);
  btnConquest.classList.toggle("locked", !!lockKey);
  btnConquest.disabled = !!lockKey;
  if(lockKey){
    conquestLockNoteEl.textContent = `🔒 Taklukkan ${SCRIPTS[lockKey].label} dulu sebelum bisa menaklukkan ${script.label}.`;
    conquestLockNoteEl.classList.remove("hidden");
  } else {
    conquestLockNoteEl.classList.add("hidden");
  }
  updateScriptConquestBadges();
}

function openConquestOverlay(){
  if(getConquestLockReason(currentScript)) return; // terkunci — tombolnya juga sudah disabled
  const script = SCRIPTS[currentScript];
  const total = script.data.all.length;
  const isThreePhase = currentScript === "hiragana" || currentScript === "katakana";
  const bothConquered = !!getConqueredTitles().hiragana && !!getConqueredTitles().katakana;

  let rules;
  if(isThreePhase){
    conquestModalText.textContent = `Ini bukan quest biasa — ini Ujian Ksatria. Penaklukan ${script.label} terbagi jadi 3 Chapter cerita (dasar → bertitik → gabungan), total ${total} soal.`;
    rules = [
      `Di <b>semua Chapter</b>, kamu harus <b>mengetik sendiri</b> jawabannya — tidak ada pilihan ganda sama sekali.`,
      `Salah <b>satu saja</b> jawaban, penaklukan langsung <b>GAGAL</b>.`,
      `Kalau gagal, kamu harus mengulang lagi dari Chapter 1.`,
      currentScript === "katakana" && !bothConquered
        ? `Taklukkan ini sampai tuntas dan kamu akan resmi <b>diangkat jadi Knight (騎士)</b> — ujian Hiragana &amp; Katakana lunas keduanya!`
        : `Taklukkan Hiragana &amp; Katakana keduanya untuk resmi <b>diangkat jadi Knight (騎士)</b>.`
    ];
  } else {
    conquestModalText.textContent = `Kamu akan menghadapi seluruh ${total} soal ${script.label} sekaligus, diacak.`;
    rules = [
      `Semua soal aksara ini akan diacak dan ditampilkan sekaligus, <b>tanpa dipotong</b>.`,
      `Salah <b>satu saja</b> jawaban, penaklukan langsung <b>GAGAL</b>.`,
      `Kalau gagal, kamu harus mengulang lagi dari soal pertama.`
    ];
  }
  conquestModalRulesEl.innerHTML = rules.map(r => `<li>${r}</li>`).join("");

  conquestOverlay.classList.add("open");
  conquestOverlay.setAttribute("aria-hidden","false");
  btnConquestConfirm.focus();
}
function closeConquestOverlay(){
  conquestOverlay.classList.remove("open");
  conquestOverlay.setAttribute("aria-hidden","true");
  btnConquest.focus();
}
btnConquest.addEventListener("click", openConquestOverlay);
btnConquestCancel.addEventListener("click", closeConquestOverlay);
conquestOverlay.addEventListener("click", (e)=>{
  if(e.target === conquestOverlay) closeConquestOverlay();
});
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && conquestOverlay.classList.contains("open")) closeConquestOverlay();
});
btnConquestConfirm.addEventListener("click", ()=>{
  if(getConquestLockReason(currentScript)) { closeConquestOverlay(); return; }
  closeConquestOverlay();
  startQuiz(currentScript, "conquest");
});

/* ---------------- learn screen navigation ---------------- */
const screenLearnEl = document.getElementById("screen-learn");
const btnLearnBack = document.getElementById("btn-learn-back");
const btnLearnToQuiz = document.getElementById("btn-learn-to-quiz");
const screenStart = document.getElementById("screen-start");

btnOpenLearn.addEventListener("click", ()=>{
  screenStart.classList.add("hidden");
  screenLearnEl.classList.remove("hidden");
  renderLearnTables(currentScript);
  window.scrollTo({top:0, behavior:"instant"});
});
btnLearnBack.addEventListener("click", ()=>{
  screenLearnEl.classList.add("hidden");
  screenStart.classList.remove("hidden");
});
btnLearnToQuiz.addEventListener("click", ()=>{
  screenLearnEl.classList.add("hidden");
  screenStart.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"instant"});
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
const screenConquestStory = document.getElementById("screen-conquest-story");
const conquestStoryEyebrowEl = document.getElementById("conquest-story-eyebrow");
const conquestStoryTitleEl = document.getElementById("conquest-story-title");
const conquestStoryTextEl = document.getElementById("conquest-story-text");
const conquestStoryMetaEl = document.getElementById("conquest-story-meta");
const btnConquestStoryContinue = document.getElementById("btn-conquest-story-continue");

// Mode Penaklukan 3 Chapter: setiap Chapter (Hiragana maupun Katakana) selalu
// mode "hard" — user mengetik sendiri jawabannya, tanpa pilihan ganda sama sekali.
function getConquestPhaseDifficulty(_phaseIdx){
  return "hard";
}

function startQuiz(scriptKey, mode){
  const script = SCRIPTS[scriptKey];
  const isConquest = mode === "conquest";
  // Mode Penaklukan 3 Chapter (cerita) cuma utk Hiragana & Katakana — tier1/tier2/tier3
  // berturut-turut jadi Chapter 1/2/3, masih satu penaklukan (1x salah = gagal semua).
  const isThreePhaseConquest = isConquest && (scriptKey === "hiragana" || scriptKey === "katakana");

  let pool, queue, wrongPools;
  let conquestPhaseBoundaries = null;

  if(script.hasVariants){
    // kotoba / bunpo / kanji: bisa soal "arti", "romaji", atau "campuran" keduanya
    const meaningPool = isConquest ? script.data.all : script.data[mode];
    const romajiPool  = isConquest ? script.dataRomaji.all : script.dataRomaji[mode];
    wrongPools = { meaning: meaningPool, romaji: romajiPool };
    pool = meaningPool;

    // di luar penaklukan: mode manual pakai rentang "Dari"—"Sampai", mode acak
    // mengambil sejumlah `selectedRandomCount` soal random dari seluruh tingkatan.
    let rangeIndices;
    if(isConquest){
      rangeIndices = meaningPool.map((_,i)=>i);
    } else if(rangeMode === "random"){
      const count = Math.min(selectedRandomCount, meaningPool.length);
      rangeIndices = shuffle(meaningPool.map((_,i)=>i)).slice(0, count);
    } else {
      const from = Math.max(0, Math.min(selectedRangeFrom, meaningPool.length - 1));
      const to = Math.max(from, Math.min(selectedRangeTo, meaningPool.length - 1));
      rangeIndices = [];
      for(let i=from; i<=to; i++) rangeIndices.push(i);
    }
    const indices = shuffle(rangeIndices);
    queue = indices.map(i=>{
      const type = selectedQuizVariant === "both"
        ? (Math.random() < 0.5 ? "meaning" : "romaji")
        : selectedQuizVariant;
      const src = type === "romaji" ? romajiPool : meaningPool;
      // simpan juga sisi "lainnya" (kalau soalnya arti, simpan romaji-nya, dan
      // sebaliknya) supaya bisa ditunjukkan begitu user selesai jawab soal ini.
      const extra = type === "romaji" ? meaningPool[i][1] : romajiPool[i][1];
      return [src[i][0], src[i][1], type, extra];
    });
  } else if(isThreePhaseConquest){
    const t1 = shuffle(script.data.tier1), t2 = shuffle(script.data.tier2), t3 = shuffle(script.data.tier3);
    pool = script.data.all;
    wrongPools = { romaji: pool };
    queue = [...t1, ...t2, ...t3].map(p => [p[0], p[1], "romaji"]);
    conquestPhaseBoundaries = [0, t1.length, t1.length + t2.length, t1.length + t2.length + t3.length];
  } else {
    // hiragana / katakana: hanya tebak romaji, seperti semula
    pool = isConquest ? script.data.all : script.data[mode];
    wrongPools = { romaji: pool };
    // di luar penaklukan: mode manual pakai rentang "Dari"—"Sampai", mode acak
    // mengambil sejumlah `selectedRandomCount` karakter random dari seluruh tingkatan.
    let rangePool;
    if(isConquest){
      rangePool = pool;
    } else if(rangeMode === "random"){
      const count = Math.min(selectedRandomCount, pool.length);
      rangePool = shuffle(pool).slice(0, count);
    } else {
      const from = Math.max(0, Math.min(selectedRangeFrom, pool.length - 1));
      const to = Math.max(from, Math.min(selectedRangeTo, pool.length - 1));
      rangePool = pool.slice(from, to + 1);
    }
    queue = shuffle(rangePool).map(p=>[p[0], p[1], "romaji"]);
  }

  const supportsHard = scriptKey === "hiragana" || scriptKey === "katakana";
  // penaklukan 3 Chapter selalu pakai progresi kesulitan otomatis per Chapter,
  // mengabaikan pilihan Tingkat Kesulitan di layar awal.
  const difficulty = isThreePhaseConquest
    ? getConquestPhaseDifficulty(0)
    : (selectedDifficulty === "hard" && !supportsHard) ? "easy" : selectedDifficulty;

  state = {
    script: scriptKey, mode, pool, wrongPools,
    queue,
    difficulty,
    conquestPhaseBoundaries, conquestPhaseIndex: 0,
    index: 0, score: 0, streak: 0, maxStreak: 0, missed: [], results: [],
    rankIndexBefore: getRankIndex(),
    conquest: isConquest, conquestFailed: false
  };
  cancelArmed = false;
  clearTimeout(cancelTimer);
  btnCancel.textContent = "← Kembali";
  btnCancel.classList.remove("armed");
  screenStart.classList.add("hidden");
  screenResults.classList.add("hidden");

  if(isThreePhaseConquest){
    screenQuiz.classList.add("hidden");
    renderConquestStory(0);
  } else {
    screenConquestStory.classList.add("hidden");
    screenQuiz.classList.remove("hidden");
    screenQuiz.classList.toggle("conquest-active", isConquest);
    renderDots();
    renderQuestion();
  }
}

function renderConquestStory(phaseIndex){
  const script = SCRIPTS[state.script];
  const story = CONQUEST_STORY[state.script];
  const phase = story.phases[phaseIndex];
  const boundaries = state.conquestPhaseBoundaries;
  const phaseLen = boundaries[phaseIndex+1] - boundaries[phaseIndex];

  state.conquestPhaseIndex = phaseIndex;
  state.difficulty = getConquestPhaseDifficulty(phaseIndex);
  const isFinalPhase = phaseIndex === story.phases.length - 1;
  const diffLabel = "🔥 ketik jawaban sendiri";
  conquestStoryEyebrowEl.textContent = phaseIndex === 0
    ? "⚔️ Ujian Ksatria dimulai"
    : isFinalPhase ? "⚔️ Chapter terakhir" : "⚔️ Chapter berikutnya";
  conquestStoryTitleEl.textContent = `${phase.label} — ${script.label}`;
  conquestStoryTextEl.textContent = phase.text;
  conquestStoryMetaEl.textContent = `${phaseLen} soal di Chapter ini · ${diffLabel} · satu kali salah, seluruh penaklukan gagal.`;

  screenQuiz.classList.add("hidden");
  screenResults.classList.add("hidden");
  screenConquestStory.classList.remove("hidden");
  btnConquestStoryContinue.focus();
}

btnConquestStoryContinue.addEventListener("click", ()=>{
  screenConquestStory.classList.add("hidden");
  screenQuiz.classList.remove("hidden");
  screenQuiz.classList.toggle("conquest-active", true);
  renderDots();
  renderQuestion();
});
document.getElementById("btn-conquest-story-back").addEventListener("click", ()=>{
  screenConquestStory.classList.add("hidden");
  screenStart.classList.remove("hidden");
  renderProfile();
});

function renderDots(){
  dotsEl.innerHTML = "";
  let indices;
  if(state.conquestPhaseBoundaries){
    const b = state.conquestPhaseBoundaries;
    const start = b[state.conquestPhaseIndex], end = b[state.conquestPhaseIndex + 1];
    indices = [];
    for(let i = start; i < end; i++) indices.push(i);
  } else {
    indices = state.queue.map((_,i)=>i);
  }
  indices.forEach(i=>{
    const d = document.createElement("span");
    d.className = "dot";
    if(i === state.index) d.classList.add("current");
    if(state.results[i] === true) d.classList.add("correct");
    if(state.results[i] === false) d.classList.add("wrong");
    dotsEl.appendChild(d);
  });
}

function renderQuestion(){
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback-text";
  feedbackExtraEl.textContent = "";
  feedbackExtraEl.classList.add("hidden");
  nextBtn.classList.add("hidden");

  const script = SCRIPTS[state.script];
  const current = state.queue[state.index];

  if(state.conquest){
    if(state.conquestPhaseBoundaries){
      const b = state.conquestPhaseBoundaries;
      const phaseIdx = state.conquestPhaseIndex;
      const qInPhase = state.index - b[phaseIdx] + 1;
      const phaseLen = b[phaseIdx+1] - b[phaseIdx];
      const phaseLabel = CONQUEST_STORY[state.script].phases[phaseIdx].label;
      quizModeLabelEl.textContent = `⚔️ ${phaseLabel} · Soal ${qInPhase}/${phaseLen}`;
    } else {
      quizModeLabelEl.textContent = `⚔️ Penaklukan — ${script.label} · Soal ${state.index+1}/${state.queue.length}`;
    }
  } else if(script.hasVariants){
    quizModeLabelEl.textContent = current[2] === "romaji" ? script.quizLabelRomaji : script.quizLabel;
  } else {
    quizModeLabelEl.textContent = script.quizLabel;
  }

  kanaCharEl.textContent = current[0];
  stampEl.classList.toggle("kanji-stamp", script.quizType === "meaning");
  // kata (kotoba/kanji/bunpō) selalu pakai kartu lebar "long-text" biar tidak
  // meluber dari lingkaran cap — lingkaran hanya untuk 1 karakter kana/kanji tunggal.
  const isWordStamp = script.quizType === "meaning" || current[0].length > 6;
  stampEl.classList.toggle("long-text", isWordStamp);
  if(isWordStamp){
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

  if(state.difficulty === "hard"){
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
    options.forEach(opt=>{
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", ()=> handleAnswer(opt, btn, current));
      choicesEl.appendChild(btn);
    });
  }

  renderDots();
  updateStreakUI();
}

function updateStreakUI(){
  streakCountEl.textContent = state.streak;
  streakEl.classList.toggle("show", state.streak >= 2);
}

function handleAnswer(chosen, btn, current){
  document.querySelectorAll("button.choice").forEach(b => b.disabled = true);
  hardInputEl.disabled = true;
  btnHardSubmit.disabled = true;
  const isCorrect = String(chosen).trim().toLowerCase() === String(current[1]).trim().toLowerCase();

  document.querySelectorAll("button.choice").forEach(b=>{
    if(b.textContent === current[1]) b.classList.add("correct");
  });

  if(isCorrect){
    state.score++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    feedbackEl.textContent = "Tepat!";
    feedbackEl.classList.add("correct");
    if(state.difficulty === "hard") hardInputEl.classList.add("correct");
  } else {
    if(btn) btn.classList.add("wrong");
    if(state.difficulty === "hard") hardInputEl.classList.add("wrong");
    state.streak = 0;
    state.missed.push(current);
    if(state.conquest){
      state.conquestFailed = true;
      feedbackEl.textContent = `Gagal — jawabannya "${current[1]}"`;
    } else {
      feedbackEl.textContent = `Meleset — jawabannya "${current[1]}"`;
    }
    feedbackEl.classList.add("wrong");
  }
  state.results[state.index] = isCorrect;
  renderDots();
  updateStreakUI();

  // tunjukkan "sisi lainnya" (arti kalau tadi soal romaji, romaji kalau tadi soal arti)
  // sebelum lanjut ke soal berikutnya — khusus Kotoba & Kanji.
  if(current[3]){
    feedbackExtraEl.textContent = current[2] === "romaji" ? `Arti: ${current[3]}` : `Romaji: ${current[3]}`;
    feedbackExtraEl.classList.remove("hidden");
  }

  nextBtn.classList.remove("hidden");
  if(state.conquest && state.conquestFailed){
    nextBtn.textContent = "Lihat Hasil →";
  } else {
    nextBtn.textContent = state.index === state.queue.length - 1 ? "Lihat Hasil →" : "Lanjut →";
  }
  nextBtn.focus();
}

btnHardSubmit.addEventListener("click", ()=>{
  if(hardInputEl.disabled) return;
  if(hardInputEl.value.trim() === ""){
    feedbackEl.textContent = "Isi dulu jawabannya sebelum lanjut.";
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
hardInputEl.addEventListener("input", ()=>{
  // hapus peringatan "isi dulu" begitu user mulai mengetik lagi
  if(feedbackEl.classList.contains("warn")){
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback-text";
  }
});
hardInputEl.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    e.preventDefault();
    e.stopPropagation(); // jangan sampai keydown ini juga kepick up listener "Enter = lanjut soal"
    if(!hardInputEl.disabled) btnHardSubmit.click();
  }
});

document.getElementById("btn-restart-quiz").addEventListener("click", ()=>{
  startQuiz(state.script, state.mode);
});

const btnCancel = document.getElementById("btn-cancel");
let cancelArmed = false;
let cancelTimer = null;

btnCancel.addEventListener("click", ()=>{
  if(!cancelArmed){
    cancelArmed = true;
    btnCancel.textContent = "Yakin? Klik lagi untuk batalkan";
    btnCancel.classList.add("armed");
    clearTimeout(cancelTimer);
    cancelTimer = setTimeout(()=>{
      cancelArmed = false;
      btnCancel.textContent = "← Kembali";
      btnCancel.classList.remove("armed");
    }, 3000);
    return;
  }
  clearTimeout(cancelTimer);
  cancelArmed = false;
  btnCancel.textContent = "← Kembali";
  btnCancel.classList.remove("armed");
  screenQuiz.classList.add("hidden");
  screenResults.classList.add("hidden");
  screenStart.classList.remove("hidden");
  renderProfile();
});

nextBtn.addEventListener("click", ()=>{
  if(state.conquest && state.conquestFailed){
    renderResults();
    return;
  }
  state.index++;
  if(state.index >= state.queue.length){
    renderResults();
    return;
  }
  // penaklukan 3 Chapter: begitu masuk indeks awal Chapter baru, tampilkan dulu
  // layar cerita transisinya sebelum lanjut ke soal berikutnya.
  if(state.conquestPhaseBoundaries){
    const nextPhaseIdx = state.conquestPhaseBoundaries.indexOf(state.index);
    if(nextPhaseIdx > 0 && nextPhaseIdx < state.conquestPhaseBoundaries.length - 1){
      renderConquestStory(nextPhaseIdx);
      return;
    }
  }
  renderQuestion();
});

/* keyboard shortcuts 1-4 for choices, enter/space for next */
document.addEventListener("keydown", (e)=>{
  if(screenQuiz.classList.contains("hidden")) return;
  if(settingsOverlay.classList.contains("open")) return;
  if(["1","2","3","4"].includes(e.key)){
    const btns = document.querySelectorAll("button.choice");
    const idx = parseInt(e.key,10) - 1;
    if(btns[idx] && !btns[idx].disabled) btns[idx].click();
  } else if((e.key === "Enter" || e.key === " ") && !nextBtn.classList.contains("hidden")){
    e.preventDefault();
    nextBtn.click();
  }
});

/* ---------------- results ---------------- */
const promoBannerEl = document.getElementById("promo-banner");
const resGreetEl = document.getElementById("res-greet");
const btnResultsLearn = document.getElementById("btn-results-learn");

function renderResults(){
  screenQuiz.classList.add("hidden");
  screenResults.classList.remove("hidden");

  document.getElementById("res-score").textContent = `${state.score}/${state.queue.length}`;
  const acc = Math.round((state.score / state.queue.length) * 100);
  const streakNote = state.maxStreak >= 3 ? ` · beruntun terbaik ${state.maxStreak}` : "";
  document.getElementById("res-acc").textContent = `Akurasi ${acc}%${streakNote}`;

  const nickname = getNickname();
  if(nickname){
    let greet;
    if(state.conquest){
      // penaklukan: berhasil = otomatis 100% (sekali salah = gagal), jadi tetap layak pujian.
      greet = state.conquestFailed ? `Semangat, ${nickname}! 💪` : `Sempurna, ${nickname}! 🏆`;
    } else if(acc === 100){
      greet = `Sempurna, ${nickname}! 🎉`;
    } else if(acc >= 80){
      greet = `Hampir sempurna, ${nickname}! Sedikit lagi.`;
    } else if(acc >= 50){
      greet = `Lumayan, ${nickname}! Terus berlatih ya.`;
    } else {
      greet = `Semangat, ${nickname}! Coba lagi pelan-pelan.`;
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
  if(state.missed.length === 0){
    missedWrap.classList.add("hidden");
  } else {
    missedWrap.classList.remove("hidden");
    if(missedTitleEl) missedTitleEl.textContent = state.conquest ? "Penyebab kegagalan" : "Perlu diulang";
    state.missed.forEach(m=>{
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.innerHTML = `<span class="k">${m[0]}</span><span class="r">${m[1]}</span>`;
      missedEl.appendChild(chip);
    });
  }

  const retryBtn = document.getElementById("btn-retry");
  promoBannerEl.classList.remove("conquest-success","conquest-fail");

  if(state.conquest){
    const script = SCRIPTS[state.script];
    if(state.conquestFailed){
      const phaseNote = state.conquestPhaseBoundaries
        ? ` di ${CONQUEST_STORY[state.script].phases[state.conquestPhaseIndex].label}`
        : "";
      promoBannerEl.innerHTML = `💀 <b>Penaklukan Gagal</b> — meleset${phaseNote} (soal ke-${state.index+1} dari ${state.queue.length}). ${script.label} belum takluk, coba lagi dari awal!`;
      promoBannerEl.classList.add("conquest-fail");
      promoBannerEl.classList.remove("hidden");
      retryBtn.textContent = "⚔️ Coba Lagi dari Awal";
      btnResultsLearn.classList.remove("hidden");
    } else {
      btnResultsLearn.classList.add("hidden");
      const promoted = promoteIfHigher(state.script, "all");
      const newTitle = earnConquestTitle(state.script);
      const opening = state.conquestPhaseBoundaries
        ? `🏆 <b>Penaklukan Berhasil!</b> ${CONQUEST_STORY[state.script].epilogue}`
        : `🏆 <b>Penaklukan Berhasil!</b> Kamu resmi menaklukkan seluruh ${script.label}!`;
      let msg = opening;
      if(newTitle){
        const ct = CONQUEST_TITLES[state.script];
        msg += ` Title baru didapat: <b>${ct.emoji} ${ct.title}</b> — cek koleksimu di Settings.`;
      }
      if(promoted){
        const rank = RANK_LEVELS[getRankIndex()];
        if(rank.title === "Knight"){
          msg += ` <br><br>⚔️ <b>Upacara Pengangkatan Ksatria!</b> Hiragana dan Katakana sudah kau taklukkan sepenuhnya — Kapten Ksatria meletakkan pedangnya di kedua bahumu di hadapan seluruh warga kota. Mulai hari ini kau resmi menyandang gelar <b>${rank.emoji} ${rank.title} (${rank.subtitle})</b>!`;
        } else {
          msg += ` Tingkatanmu naik jadi <b>${rank.emoji} ${rank.title} (${rank.subtitle})</b>`;
        }
      }
      promoBannerEl.innerHTML = msg;
      promoBannerEl.classList.add("conquest-success");
      promoBannerEl.classList.remove("hidden");
      retryBtn.textContent = "⚔️ Taklukkan Lagi";
      renderTitleCollection();
      updateScriptConquestBadges();
    }
  } else {
    btnResultsLearn.classList.add("hidden");
    retryBtn.textContent = "Ulangi Set Ini";
    const promoted = promoteIfHigher(state.script, state.mode);
    if(promoted){
      const rank = RANK_LEVELS[getRankIndex()];
      promoBannerEl.innerHTML = `Tingkatanmu naik! Sekarang kamu adalah <b>${rank.emoji} ${rank.title} (${rank.subtitle})</b>`;
      promoBannerEl.classList.remove("hidden");
    } else {
      promoBannerEl.classList.add("hidden");
    }
  }

  renderProfile();
}

document.getElementById("btn-retry").addEventListener("click", ()=> startQuiz(state.script, state.mode));
document.getElementById("btn-change").addEventListener("click", ()=>{
  screenResults.classList.add("hidden");
  screenStart.classList.remove("hidden");
});
btnResultsLearn.addEventListener("click", ()=>{
  screenResults.classList.add("hidden");
  screenLearnEl.classList.remove("hidden");
  renderLearnTables(state.script);
  window.scrollTo({top:0, behavior:"instant"});
});

/* ---------------- kirim masukan (email) ---------------- */
const feedbackTextEl = document.getElementById("feedback-text");
const btnSendFeedback = document.getElementById("btn-send-feedback");
if(btnSendFeedback){
  btnSendFeedback.addEventListener("click", ()=>{
    const msg = (feedbackTextEl.value || "").trim();
    const subject = encodeURIComponent("Masukan — Learning Japanese App");
    const body = encodeURIComponent(msg || "Tulis masukanmu di sini...");
    window.location.href = `mailto:ferlisuganda29@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ---------------- init ---------------- */
document.querySelector('#script-tabs .script-tab[data-script="hiragana"]').classList.add("active");
document.querySelector('#learn-script-tabs .script-tab[data-script="hiragana"]').classList.add("active");
renderLevels("hiragana");
