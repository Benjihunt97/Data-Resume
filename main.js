// set pwrcentages on skill bars based on the data attribute in the parent
const skills = document.querySelectorAll('.skill-bar');

skills.forEach((bar) => {
  const barWidth = bar.parentElement.getAttribute('data-percent');
  const barColor = bar.parentElement.getAttribute('data-color');
  
  setTimeout(() => {
    bar.parentElement.style.setProperty('--__barWidth', barWidth + '%');
    bar.parentElement.style.setProperty('--__barColor', barColor);
    
    bar.parentElement.style.setProperty('--__barText', "'" + barWidth + "%'" );
  }, 1200);
  
});

//dark/light theme toggle
const check = document.querySelector('.check');
const themeBall = document.querySelector('.theme-ball');
const sections = document.querySelectorAll('.section');

check.addEventListener('click', () => {
  if (check.checked) {
    sections.forEach((section) => section.setAttribute('data-dark', true));
    themeBall.style.left = '60%';
    themeBall.setAttribute('data-dark', true);
  } else {
    sections.forEach((section) => section.removeAttribute('data-dark'));
    themeBall.style.left = '.5rem';
    themeBall.removeAttribute('data-dark');
  }
});
