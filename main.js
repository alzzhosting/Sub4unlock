// Status tugas
const taskStatus = {
  subscribe: false,
  like: false,
  follow: false,
};

// Handle tugas
function handleTask(task, url) {
  window.open(url, '_blank');
  setTimeout(() => {
    taskStatus[task] = true;
    updateProgress();
  }, 2000);
}

// Update progress bar
function updateProgress() {
  const totalTasks = Object.keys(taskStatus).length;
  const completedTasks = Object.values(taskStatus).filter(status => status).length;
  const progress = (completedTasks / totalTasks) * 100;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${progress}%`;

  const unlockBtn = document.getElementById('unlock-btn');
  unlockBtn.disabled = completedTasks !== totalTasks;
}

// Buka link
function unlockLink() {
  document.getElementById('locked-link').style.display = 'block';
}

// Tema gelap/terang
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const themeIcon = document.getElementById('theme-icon');
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');
});