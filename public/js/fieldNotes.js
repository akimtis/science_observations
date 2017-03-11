$(document).ready(function() {

  example_post1 = {
    title: "title1",
    student_id: "student_id1",
    doclink: "doclink1",
    doctype: "doctype1",
    docdesc: "docdesc1"
  }

  example_post2 = {
    title: "title2",
    student_id: "student_id2",
    doclink: "doclink2",
    doctype: "doctype2",
    docdesc: "docdesc2",
  }

// This function constructs a post's HTML
  function createNewRow(post) {
    var newPost = $("<div>");
    var newPostHeading = $("<h3>");
    newPostHeading.html("title: " + post.title + "<br> author id: " + post.student_id);

    var newPostBody = $("<p>")
    newPostBody.html("link: " + post.doclink + "<br> type: " + post.doctype + "<br> description: "  + post.docdesc);

    newPost.append(newPostHeading)
    newPost.append(newPostBody)

    return newPost;
  }

// placeholder for a get request that grabs all posts 
  var all_posts = [example_post1, example_post2]

  for (i in all_posts){
    $("#allPosts").append(createNewRow(all_posts[i]))
  }

// placeholder for a get request that grabs user's posts
  var my_posts = [example_post1, example_post2]

  for (i in my_posts){
    $("#myPosts").append(createNewRow(my_posts[i]))
  }
// placeholder for a get request that grabs user's region's posts
  var my_region_posts = [example_post1, example_post2]

  for (i in my_region_posts){
    $("#myRegionPosts").append(createNewRow(my_region_posts[i]))
  }

//uses classList, setAttribute, and querySelectorAll
//used for accordian fuctions of the site
(function(){
  var d = document,
  accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
  setAria,
  setAccordionAria,
  switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

    setAriaAttr = function(el, ariaType, newProperty){
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function(el1, el2, expanded){
    switch(expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
//function
switchAccordion = function(e) {
  console.log("triggered");
  e.preventDefault();
  var thisAnswer = e.target.parentNode.nextElementSibling;
  var thisQuestion = e.target;
  if(thisAnswer.classList.contains('is-collapsed')) {
    setAccordionAria(thisQuestion, thisAnswer, 'true');
  } else {
    setAccordionAria(thisQuestion, thisAnswer, 'false');
  }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');
  
    thisAnswer.classList.toggle('animateIn');
  };
  for (var i=0,len=accordionToggles.length; i<len; i++) {
    if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

});