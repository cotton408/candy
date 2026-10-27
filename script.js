const profiles = {
  "charlotte": {
    "name": "샤를로트",
    "meta": "마녀 · 1,000세 이상 (외견 25세) · 165cm",
    "intro": "백색 피부, 긴 백금발 곱슬머리와 보랏빛 눈. 검은 마녀모자, 우아한 검은 원피스와 하이힐을 고집하는 탑의 주인. 도도하게 보이려 하지만 허를 찔리면 곧장 허둥지둥합니다."
  },
  "jack": {
    "name": "잭",
    "meta": "사념체 · 나이 불명 (외견 22세) · 182cm",
    "quote": "“여..여기를 어떻게 알고 찾아오신 거예요..?”",
    "intro": "백색 피부에 밝은 잿빛 머리, 흐릿한 보랏빛 눈. 검은 셔츠와 바지 위로 낡은 흰 천 후드망토를 두른 존재. 온화하고 속이 깊지만, 고개를 숙이거나 손가락을 만지작거리며 말을 고릅니다."
  }
};
const floors = [
  [
    "입구, 그리고 무심한 엘리베이터",
    "계단과 엘리베이터가 보입니다. 엘리베이터는 샤를로트와 잭만 인식해요. 외부인이 타도 아무 반응이 없습니다."
  ],
  [
    "끈적끈적 슬라임 대소동",
    "슬라임이 엄청나게 많습니다. 바닥까지 끈적여 한 발짝 떼기도 쉽지 않아요. 신발을 잘 챙기세요!"
  ],
  [
    "귀엽다고 방심하면 큰일",
    "말하는 토끼들의 구역. 전투에 무척 강하고, 사납고, 성질도 더럽습니다. 귀여움과 친절함은 별개랍니다."
  ],
  [
    "끝나지 않는 잔소리",
    "샤를로트가 만든 할머니와 할아버지 인형이 기다립니다. 귀가 아프도록 잔소리를 하며 집요하게 길을 막아요."
  ],
  [
    "발밑을 조심하세요",
    "바닥 곳곳에 창을 발사하는 함정이 숨겨져 있습니다. 한 걸음이 중요해지는 층입니다."
  ],
  [
    "수고했어요. 케이크 드실래요?",
    "테이블에 멀쩡해 보이는 케이크 한 조각과 “여기까지 오느라 고생 많았어”라는 편지가 놓여 있습니다."
  ],
  [
    "아무것도… 없다고요?",
    "의외로 아무것도 없는 층. 정말로요. 잠깐 숨을 돌릴 수 있을지도 모르겠네요."
  ],
  [
    "누군가의 생활 공간",
    "부엌과 거실입니다. 이쯤까지 올라오면 샤를로트와 잭도 침입자의 존재를 슬슬 눈치채기 시작합니다."
  ],
  [
    "잭의 방",
    "탑의 9층은 잭이 지내는 방입니다. 더 올라가기 전에 그와 이야기해볼 수도 있겠죠. 무엇을 말할지는 당신에게 달렸습니다."
  ],
  [
    "마녀와 사라진 달콤함",
    "샤를로트의 방입니다. 방 안쪽 이차원 공간에 빼앗긴 달콤한 음식이 보관되어 있습니다."
  ]
];
const floorButtons = document.querySelector('.floor-buttons');
const floorDetail = document.querySelector('.floor-detail');
floors.forEach((floor,index)=>{const button=document.createElement('button');button.type='button';button.textContent=`${index+1}F`;button.setAttribute('aria-label',`${index+1}층 ${floor[0]}`);button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>selectFloor(index));floorButtons.append(button)});
function selectFloor(index){[...floorButtons.children].forEach((button,i)=>button.setAttribute('aria-pressed',String(index===i)));const [title,description]=floors[index];floorDetail.innerHTML=`<span class="floor-label">FLOOR ${String(index+1).padStart(2,'0')} / 10</span><h3>${title}</h3><p>${description}</p>`;}
selectFloor(0);
const dialog=document.getElementById('character-dialog');
let closing=false,lastTrigger;
document.querySelectorAll('[data-character]').forEach(button=>button.addEventListener('click',()=>{if(closing)return;lastTrigger=button;const profile=profiles[button.dataset.character];document.getElementById('dialog-body').innerHTML=`<div class="modal-content"><p class="eyebrow">CHARACTER INTRODUCTION</p><h2 id="dialog-title">${profile.name}</h2><p class="profile-meta">${profile.meta}</p>${profile.quote ? `<blockquote>${profile.quote}</blockquote>` : ''}<p>${profile.intro}</p></div>`;dialog.showModal();document.body.style.overflow='hidden';requestAnimationFrame(()=>requestAnimationFrame(()=>dialog.classList.add('visible')))}));
function closeDialog(){if(closing||!dialog.open)return;closing=true;dialog.classList.remove('visible');setTimeout(()=>{dialog.close();document.body.style.overflow='';closing=false;lastTrigger?.focus()},matchMedia('(prefers-reduced-motion: reduce)').matches?0:230)}
document.getElementById('close-dialog').addEventListener('click',closeDialog);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog()});
dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))closeDialog()});

// Automatically crossfade slides while the page is visible.
const slideshow = document.querySelector('.hero-slideshow');
const slides = [...slideshow.querySelectorAll('.hero-slide')];
const slideDots = [...slideshow.querySelectorAll('[data-slide]')];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let activeSlide = 0, slideTimer;
function showSlide(index) {
  if (!slides[index].complete || !slides[index].naturalWidth) return;
  activeSlide = index;
  slides.forEach((slide, i) => {
    slide.classList.toggle('is-active', i === index);
    slide.setAttribute('aria-hidden', String(i !== index));
    slideDots[i].setAttribute('aria-pressed', String(i === index));
  });
}
function scheduleSlides() {
  clearInterval(slideTimer);
  if (!document.hidden && !reducedMotion.matches)
    slideTimer = setInterval(() => showSlide((activeSlide + 1) % slides.length), 5000);
}

slideDots.forEach((button, index) => button.addEventListener('click', () => { showSlide(index); scheduleSlides(); }));
document.addEventListener('visibilitychange', scheduleSlides);
reducedMotion.addEventListener('change', scheduleSlides);
scheduleSlides();
