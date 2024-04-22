var move_left_btn = document.getElementById("move_left");
var move_right_btn = document.getElementById("move_right");
var scroll_section = document.getElementById("job-scroll");
var move_left_img = document.getElementById("move_left_img");
var job_section = document.getElementById("job_section");
var job_section_container = document.getElementById("job_section_container");
var job_scroll = document.getElementById("job-scroll");

var margin_left = 5;
var job_list_height = 1200;

if (margin_left == 5){
  move_left_img.style.opacity = "0.5";
}

move_right_btn.addEventListener("click", function(){
  margin_left -= 26
  scroll_section.style.marginLeft = String(margin_left) + "%"
  if (margin_left != 5){
    move_left_img.style.opacity = "1";
  }
});

move_left_btn.addEventListener("click", function(){
  if (margin_left != 5){
    margin_left += 26;
    scroll_section.style.marginLeft = String(margin_left) + "%"
  } 
  if (margin_left == 5){
    move_left_img.style.opacity = "0.5";
  }
});

function expand_job_list(){
  job_section.style.height = String(job_list_height) + "px";
  job_section_container.style.height = String(job_list_height) + "px";
  job_scroll.style.height = String(job_list_height) + "px";
  job_list_height += 200
}

function width_changed(){
  if (window.innerWidth >= 1100){
    job_section.style.height = String(377) + "px";
    job_section_container.style.height = String(430) + "px";
    job_scroll.style.height = String(377) + "px";
  } else {
    job_section.style.height = String(job_list_height) + "px";
    job_section_container.style.height = String(job_list_height) + "px";
    job_scroll.style.height = String(job_list_height) + "px";
  }
}
