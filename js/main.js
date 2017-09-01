const tabs = document.querySelectorAll('.tab');
const allPanels = document.querySelectorAll('.schedule');

function activateTab(tab) {

  //remove active de todas as outras tabs
  tabs.forEach(tab => {
    tab.classList.remove('active');
  }) 
  //adiciona active em t
  tab.classList.add('active');
}

function openCourse(item, day) {

  allPanels.forEach(panel => {
    panel.style.display = 'none';
  })
  
  document.getElementById(day).style.display = 'block';
  activateTab(item);
}