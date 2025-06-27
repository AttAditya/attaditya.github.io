const $loader = document.getElementById('loader');
const $root = document.getElementById('root');

$loader.style.position = "fixed";
$loader.style.top = 0;
$loader.style.left = 0;
$loader.style.width = "100vw";
$loader.style.height = "100vh";
$loader.style.zIndex = -1000;
$loader.style.opacity = 0;
$loader.style.transition = "all 1s ease-in-out";
$loader.style.transitionDelay = "background-color 0.2s";

window.loaderActivated = false;

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  
  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

function createPowerBlob() {
  const blob = document.createElement('div');
  
  blob.className = 'power-blob';
  blob.style.width = `${Math.random() * 50 + 20}px`;
  blob.style.height = blob.style.width;
  blob.style.borderRadius = "50%";
  blob.style.position = "absolute";
  blob.style.zIndex = "4000";
  blob.style.opacity = 0;
  blob.style.backgroundColor = Math.random() < 0.5
    ? `var(--accent-blue)`
    : `var(--accent-green)`;

  const radius = Math.random() * 50 + 30;
  const angle = Math.random() * Math.PI * 2;
  const startX = (Math.sin(angle) * radius) + 50;
  const startY = (Math.cos(angle) * radius) + 50;

  const animateBlob = new Promise((finished) => {
    blob.animate([
      {
        left: `${startX}vw`,
        top: `${startY}vh`,
        transform: `translate(-50%, -50%) scale(0)`,
        opacity: 0,
      },
      {
        left: `${startX}vw`,
        top: `${startY}vh`,
        transform: `translate(-50%, -50%) scale(1)`,
        opacity: 1,
      },
      {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(0)",
        opacity: 0,
      }
    ], {
      duration: Math.random() * 1000 + 500,
      delay: Math.random() * 50,
      easing: "ease-in",
    }).onfinish = (() => {
      blob.remove();
      finished();
    });
  })
  
  return {blob, animateBlob};
}

function openLoader(loadFn) {
  $loader.style.zIndex = 4000;
  $loader.style.opacity = 1;
  setTimeout(() => {
    $loader.style.background = "var(--background-color)"
    $root.opacity = 0;
    if (loadFn) setTimeout(loadFn, 1000);
  }, 1000);
}

function closeLoader() {
  if (!$loader) return;

  $loader.style.zIndex = -1000;
  $loader.style.opacity = 0;

  $root.style.opacity = 1;
}

function startLoading(loadFn) {
  if (!$loader) return;
  openLoader(loadFn);

  const maxBlobCount = detectMob() ? 200 : 500;
  let blobCount = 0;
  
  const spawnBlob = () => {
    if (!window.loaderActivated) return;
    if (blobCount >= maxBlobCount) return;
    
    const { blob, animateBlob } = createPowerBlob();
    $loader.appendChild(blob);
    blobCount++;

    animateBlob.then(() => {
      blobCount--;
      if (!blobCount && !window.loaderActivated) {
        closeLoader();
      } else {
        setTimeout(spawnBlob, Math.random() * 1000);
      }
    });

    setTimeout(spawnBlob, Math.random() * 1000);
  };
  
  for (let i = 0; i < 10; i++) {
    spawnBlob();
  }
}

window.activateLoader = (loadFn) => {
  if (window.loaderActivated) return;
  window.loaderActivated = true;
  startLoading(loadFn);
}

window.deactivateLoader = () => {
  if (!window.loaderActivated) return;
  window.loaderActivated = false;
  $loader.style.background = "transparent";
};

