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
applyFont("hiragino");

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

/* ---------------- data ---------------- */
const DATA = {
  basic: [
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
  ],
  dakuten: [
    ["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"],
    ["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"],
    ["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"],
    ["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"],
    ["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]
  ],
  yoon: [
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
  ]
};
DATA.all = [...DATA.basic, ...DATA.dakuten, ...DATA.yoon];

/* ---------------- gojūon chart data (for Learn mode) ---------------- */
const GOJUON = {
  basic: [
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
  dakuten: [
    { label:"g", cols:5, chars:[["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"]] },
    { label:"z", cols:5, chars:[["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"]] },
    { label:"d", cols:5, chars:[["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"]] },
    { label:"b", cols:5, chars:[["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"]] },
    { label:"p", cols:5, chars:[["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]] }
  ],
  yoon: [
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

const LEARN_SECTIONS = [
  { key:"basic",   title:"Gojūon — Dasar", desc:"46 karakter inti. Ini fondasi yang wajib dihafal duluan.", rows:GOJUON.basic },
  { key:"dakuten", title:"Dakuten & Handakuten — Bertitik", desc:"Tanda titik dua (゛) atau lingkaran kecil (゜) mengubah cara baca.", rows:GOJUON.dakuten },
  { key:"yoon",    title:"Yōon — Gabungan", desc:"Konsonan + ゃゅょ kecil yang dibaca sebagai satu suku kata.", rows:GOJUON.yoon }
];

function renderLearnTables(){
  const wrap = document.getElementById("learn-tables");
  wrap.innerHTML = "";
  LEARN_SECTIONS.forEach(section=>{
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
          cell.className = "kana-cell filled";
          cell.innerHTML = `<span class="k">${pair[0]}</span><span class="r">${pair[1]}</span>`;
        } else {
          cell.className = "kana-cell empty";
        }
        rowEl.appendChild(cell);
      });
      table.appendChild(rowEl);
    });
    sectionEl.appendChild(table);
    wrap.appendChild(sectionEl);
  });
}
renderLearnTables();

const LEVELS = [
  {id:"basic",   tier:1, label:"Pemula",   title:"Dasar", sample:"あ い う", desc:"Gojūon — 46 karakter inti dari a sampai n."},
  {id:"dakuten", tier:2, label:"Menengah", title:"Bertitik", sample:"が ざ ぱ", desc:"Dakuten & handakuten: ga, za, da, ba, pa."},
  {id:"yoon",    tier:3, label:"Mahir",    title:"Gabungan", sample:"きゃ しゅ", desc:"Yōon — kombinasi kecil seperti kya, sha, cho."},
  {id:"all",     tier:4, label:"Master",   title:"Semua Campur", sample:"ん づ りょ", desc:"Seluruh karakter diacak jadi satu babak."}
];

const ROUND_LEN = 10;

/* ---------------- state ---------------- */
let state = {
  mode: null,
  pool: [],
  queue: [],
  index: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  missed: [],
  results: []
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

function buildChoices(correct, pool){
  const wrongPool = pool.filter(p => p[0] !== correct[0]);
  const wrongs = shuffle(wrongPool).slice(0,3).map(p => p[1]);
  const options = shuffle([correct[1], ...wrongs]);
  // ensure uniqueness in case of duplicate romaji (e.g. ji/zu)
  return [...new Set(options)].length === 4 ? options : shuffle([correct[1], ...new Set(wrongPool.map(p=>p[1])) ].filter((v,i,a)=>a.indexOf(v)===i && v!==correct[1]).slice(0,3).concat(correct[1]));
}

/* ---------------- render: start screen ---------------- */
const levelsEl = document.getElementById("levels");
const startBtn = document.getElementById("btn-start");

LEVELS.forEach(lv=>{
  const card = document.createElement("button");
  card.className = "level-card";
  card.type = "button";
  card.setAttribute("aria-pressed","false");
  card.innerHTML = `
    <span class="tier">
      <span class="tier-dots">${[1,2,3,4].map(n => `<span class="${n <= lv.tier ? 'filled' : ''}"></span>`).join("")}</span>
      ${lv.label}
    </span>
    <span class="kana-sample">${lv.sample}</span>
    <h3>${lv.title}</h3>
    <p>${lv.desc}</p>
  `;
  card.addEventListener("click", ()=>{
    document.querySelectorAll(".level-card").forEach(c=>{c.classList.remove("selected"); c.setAttribute("aria-pressed","false");});
    card.classList.add("selected");
    card.setAttribute("aria-pressed","true");
    state.mode = lv.id;
    startBtn.disabled = false;
    startBtn.textContent = `Mulai — ${lv.title}`;
  });
  levelsEl.appendChild(card);
});

startBtn.addEventListener("click", ()=> startQuiz(state.mode));

/* ---------------- learn screen navigation ---------------- */
const screenLearnEl = document.getElementById("screen-learn");
const btnOpenLearn = document.getElementById("btn-open-learn");
const btnLearnBack = document.getElementById("btn-learn-back");
const btnLearnToQuiz = document.getElementById("btn-learn-to-quiz");

btnOpenLearn.addEventListener("click", ()=>{
  screenStart.classList.add("hidden");
  screenLearnEl.classList.remove("hidden");
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
const screenStart = document.getElementById("screen-start");
const screenQuiz = document.getElementById("screen-quiz");
const screenResults = document.getElementById("screen-results");
const dotsEl = document.getElementById("dots");
const streakEl = document.getElementById("streak");
const streakCountEl = document.getElementById("streak-count");
const stampEl = document.getElementById("stamp");
const kanaCharEl = document.getElementById("kana-char");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("btn-next");

function startQuiz(mode){
  const pool = DATA[mode];
  const len = Math.min(ROUND_LEN, pool.length);
  state = {
    mode, pool,
    queue: shuffle(pool).slice(0,len),
    index: 0, score: 0, streak: 0, maxStreak: 0, missed: [], results: []
  };
  cancelArmed = false;
  clearTimeout(cancelTimer);
  btnCancel.textContent = "← Kembali";
  btnCancel.classList.remove("armed");
  screenStart.classList.add("hidden");
  screenResults.classList.add("hidden");
  screenQuiz.classList.remove("hidden");
  renderDots();
  renderQuestion();
}

function renderDots(){
  dotsEl.innerHTML = "";
  state.queue.forEach((_,i)=>{
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
  nextBtn.classList.add("hidden");

  const current = state.queue[state.index];
  kanaCharEl.textContent = current[0];
  stampEl.classList.remove("pop");
  void stampEl.offsetWidth;
  stampEl.classList.add("pop");

  const options = buildChoices(current, state.pool);
  choicesEl.innerHTML = "";
  options.forEach(opt=>{
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.textContent = opt;
    btn.addEventListener("click", ()=> handleAnswer(opt, btn, current));
    choicesEl.appendChild(btn);
  });

  renderDots();
  updateStreakUI();
}

function updateStreakUI(){
  streakCountEl.textContent = state.streak;
  streakEl.classList.toggle("show", state.streak >= 2);
}

function handleAnswer(chosen, btn, current){
  document.querySelectorAll("button.choice").forEach(b => b.disabled = true);
  const isCorrect = chosen === current[1];

  document.querySelectorAll("button.choice").forEach(b=>{
    if(b.textContent === current[1]) b.classList.add("correct");
  });

  if(isCorrect){
    state.score++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    feedbackEl.textContent = "Tepat!";
    feedbackEl.classList.add("correct");
  } else {
    btn.classList.add("wrong");
    state.streak = 0;
    state.missed.push(current);
    feedbackEl.textContent = `Meleset — jawabannya "${current[1]}"`;
    feedbackEl.classList.add("wrong");
  }
  state.results[state.index] = isCorrect;
  renderDots();
  updateStreakUI();

  nextBtn.classList.remove("hidden");
  nextBtn.textContent = state.index === state.queue.length - 1 ? "Lihat Hasil →" : "Lanjut →";
  nextBtn.focus();
}

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
});

nextBtn.addEventListener("click", ()=>{
  state.index++;
  if(state.index >= state.queue.length){
    renderResults();
  } else {
    renderQuestion();
  }
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
function renderResults(){
  screenQuiz.classList.add("hidden");
  screenResults.classList.remove("hidden");

  document.getElementById("res-score").textContent = `${state.score}/${state.queue.length}`;
  const acc = Math.round((state.score / state.queue.length) * 100);
  const streakNote = state.maxStreak >= 3 ? ` · beruntun terbaik ${state.maxStreak}` : "";
  document.getElementById("res-acc").textContent = `Akurasi ${acc}%${streakNote}`;

  const missedWrap = document.getElementById("res-missed-wrap");
  const missedEl = document.getElementById("res-missed");
  missedEl.innerHTML = "";
  if(state.missed.length === 0){
    missedWrap.classList.add("hidden");
  } else {
    missedWrap.classList.remove("hidden");
    state.missed.forEach(m=>{
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.innerHTML = `<span class="k">${m[0]}</span><span class="r">${m[1]}</span>`;
      missedEl.appendChild(chip);
    });
  }
}

document.getElementById("btn-retry").addEventListener("click", ()=> startQuiz(state.mode));
document.getElementById("btn-change").addEventListener("click", ()=>{
  screenResults.classList.add("hidden");
  screenStart.classList.remove("hidden");
});
