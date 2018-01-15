var section = document.querySelector("section");
var showPageData = document.querySelector("section").innerHTML;
var holdAboutData = document.querySelector(".holdAboutData").innerHTML;
var holdHomeData = document.querySelector(".holdHomeData").innerHTML;
var holdContactData = document.querySelector(".holdContactData").innerHTML;
var aboutMenu = document.querySelector(".about-menu");
var homeMenu = document.querySelector(".home-menu");
var contactMenu = document.querySelector(".contact-menu");
var homeAnimationPlayed = false;
var aboutAnimationPlayed = false;
var contactAnimationPlayed = false;
var animationsHavePlayed = false;
var exitedPage = false;
var firstLoad = true;
var currentPage = {
      homePage: homeAnimationPlayed,
      aboutPage: aboutAnimationPlayed,
      contactPage: contactAnimationPlayed
};




//continue to update currentPage #################################
updateCurrentPage();


// Functions######################################################

function animationsPlayed(){
  if(homeAnimationPlayed || aboutAnimationPlayed || contactAnimationPlayed){
    animationsHavePlayed = true;
    return true;
  }
  animationsHavePlayed = false;
  return false;
}


function updateCurrentPage(){
    window.setTimeout(function(){
      currentPage.homePage = homeAnimationPlayed;
      currentPage.aboutPage = aboutAnimationPlayed;
      currentPage.contactPage = contactAnimationPlayed;
      updateCurrentPage();
    },1000);
  }

function resetAllPageLoads(){
  homeAnimationPlayed = false;
  aboutAnimationPlayed = false;
  contactAnimationPlayed = false;
}

function loadContactPage(){
  if(exitedPage){
      exitedPage = false;
      resetAllPageLoads();
      section.innerHTML = holdContactData;
      var contactJumbotron = document.querySelector(".contact-jumbotron");
      contactJumbotron.classList.add("jackInTheBox");
      contactJumbotron.classList.add("animated");
      window.setTimeout(function(){
        contactAnimationPlayed = true;
        animationsPlayed();
      },1000);
    }
    else{
      window.setTimeout(function(){
        loadContactPage();
      },200);
    }
}

function loadAboutPage(){
  if(exitedPage){
      exitedPage = false;
      resetAllPageLoads();
      section.innerHTML = holdAboutData;
      var aboutSpacing = document.querySelector(".about-spacing");
      aboutSpacing.classList.remove("jumbotron-styles");
      aboutSpacing.classList.add("zoomIn");
      aboutSpacing.classList.add("animated");
      window.setTimeout(function(){
        aboutAnimationPlayed = true;
        animationsPlayed();
      },1000);
    }
    else{
      window.setTimeout(function(){
        loadAboutPage();
      },200);
    }
}

function loadHomepage(){
    if(exitedPage || firstLoad){
      exitedPage = false;
      firstLoad = false;
      resetAllPageLoads();
      section.insertAdjacentHTML( 'beforeend', holdHomeData );
      createLearnMoreBtn();
      window.setTimeout(function(){
        var str = "<div id='designed' class='col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center headermain'><span class='glyphicon glyphicon-pencil btn-lg' aria-hidden='true'><h1>Designed</h1></span></div>";
        var animations = document.querySelector(".animations");
        animations.insertAdjacentHTML( 'afterbegin', str );
        var animations = document.querySelector(".animations");
        animations.classList.remove("animationspacing");
          window.setTimeout(function(){
            var designed = document.querySelector("#designed");
            designed.classList.add("tada");
            designed.classList.add("animated");
          }, 420);
      }, 700);

      window.setTimeout(function () {
        var str = "<div id='built' class='col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center headermain'><span class='glyphicon glyphicon-wrench btn-lg' aria-hidden='true'><h1>Built</h1></span></div>";
        var animations = document.querySelector(".animations");
        animations.insertAdjacentHTML( 'beforeend', str );
          window.setTimeout(function(){
            var built = document.querySelector("#built");
            built.classList.add("tada");
            built.classList.add("animated");
          }, 420);
      }, 2200);

      window.setTimeout(function () {
        var str = "<div id='deployed' class='col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center headermain'><span class='glyphicon glyphicon-ok btn-lg' aria-hidden='true'><h1>Deployed</h1></span></div>";
        var animations = document.querySelector(".animations");
        animations.insertAdjacentHTML( 'beforeend', str );
          window.setTimeout(function(){
            var deployed = document.querySelector("#deployed");
            deployed.classList.add("tada");
            deployed.classList.add("animated");
              window.setTimeout(function(){
                homeAnimationPlayed = true;
                animationsPlayed();
              },300);
          }, 420);
      }, 3700);
    }
    else{
      window.setTimeout(function(){
        loadHomepage();
      },500);
    }
}

function exitContactPage(){
  contactAnimationPlayed = false;
  contactJumbotron = document.querySelector(".contact-jumbotron");
  contactJumbotron.classList.add("zoomOut");
  contactJumbotron.classList.add("animated");
    window.setTimeout(function(){
      section.innerHTML = "";
      exitedPage = true;
    },500);
}

function exitHomePage(){
  homeAnimationPlayed = false;
  jumbotron.classList.add("zoomOutDown");
  jumbotron.classList.add("animated");
  designed.classList.add("zoomOutLeft");
  deployed.classList.add("zoomOutRight");
  built.classList.add("zoomOutUp");
    window.setTimeout(function(){
      section.innerHTML = "";
      exitedPage = true;
    },1000);
}

function exitAboutPage(){
  aboutAnimationPlayed = false;
  var aboutTitle = document.querySelector(".about-title");
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.classList.add("zoomOutUp");
  jumbotron.classList.add("animated");
  aboutTitle.classList.add("zoomOut");
  aboutTitle.classList.add("animated");
    window.setTimeout(function(){
      section.innerHTML = "";
      exitedPage = true;
    },1000);
}

function createLearnMoreBtn(){
  var learnMore = document.querySelector(".btn-primary");
    learnMore.addEventListener("click", function(){
      if(homeAnimationPlayed){
        exitHomePage();
        loadAboutPage();
      }else{
        learnMore.classList.add("shake");
        learnMore.classList.add("animated");
        window.setTimeout(function(){
          learnMore.classList.remove("shake");
        },1000);
        return;
      }
    });
}


loadHomepage();




// Set up event listeners #######################################

homeMenu.addEventListener("click", function(){
  animationsPlayed();
  if(animationsHavePlayed && !currentPage.homePage){
    switch (true) {
      case currentPage.homePage: exitHomePage();
      break;
      case currentPage.aboutPage: exitAboutPage();
      break;
      case currentPage.contactPage: exitContactPage();
      break;
    }
    loadHomepage();
  }else{
    homeMenu.classList.add("shake");
    homeMenu.classList.add("animated");
    window.setTimeout(function(){
      homeMenu.classList.remove("shake");
    },1000);
    return;
  }
});

aboutMenu.addEventListener("click", function(){
  animationsPlayed();
  if(animationsHavePlayed && !currentPage.aboutPage){
    switch (true) {
      case currentPage.homePage: exitHomePage();
      break;
      case currentPage.aboutPage: exitAboutPage();
      break;
      case currentPage.contactPage: exitContactPage();
      break;
    }
    loadAboutPage();
  }else{
    aboutMenu.classList.add("shake");
    aboutMenu.classList.add("animated");
    window.setTimeout(function(){
      aboutMenu.classList.remove("shake");
    },1000);
    return;
  }
});

contactMenu.addEventListener("click", function(){
  animationsPlayed();
  if(animationsHavePlayed && !currentPage.contactPage){
    switch (true) {
      case currentPage.homePage: exitHomePage();
      break;
      case currentPage.aboutPage: exitAboutPage();
      break;
      case currentPage.contactPage: exitContactPage();
      break;
    }
    loadContactPage();
  }else{
    contactMenu.classList.add("shake");
    contactMenu.classList.add("animated");
    window.setTimeout(function(){
      contactMenu.classList.remove("shake");
    },1000);
    return;
  }
});
