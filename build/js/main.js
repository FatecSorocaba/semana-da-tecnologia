"use strict";

var tabs = document.querySelectorAll('.tab');
var allPanels = document.querySelectorAll('.schedule');

function activateTab(tab) {
  //remove active de todas as outras tabs
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  }); //adiciona active em t

  tab.classList.add('active');
}

function openCourse(item, day) {
  allPanels.forEach(function (panel) {
    panel.style.display = 'none';
  });
  document.getElementById(day).style.display = 'block';
  activateTab(item);
}