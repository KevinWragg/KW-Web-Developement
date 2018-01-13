var section = document.querySelector("section");
var showPageData = document.querySelector("section").innerHTML;
var holdAboutData = document.querySelector(".holdPageData").innerHTML;
var holdHomeData = document.querySelector(".holdHomeData").innerHTML;
var aboutMenu = document.querySelector(".about-menu");
var homeMenu = document.querySelector(".home-menu");
var homeAnimationPlayed = false;
var aboutAnimationPlayed = false;
var exitedPage = false;
var firstLoad = true;



// Functions######################################################

function loadAboutPage(){
  if(exitedPage){
      exitedPage = false;
      homeAnimationPlayed = false;
      aboutAnimationPlayed = false;
      section.innerHTML = holdAboutData;
      var aboutSpacing = document.querySelector(".about-spacing");
      aboutSpacing.classList.remove("jumbotron-styles");
      aboutSpacing.classList.add("zoomIn");
      aboutSpacing.classList.add("animated");
      window.setTimeout(function(){
        aboutAnimationPlayed = true;
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
          }, 490);
      }, 1000);

      window.setTimeout(function () {
        var str = "<div id='built' class='col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center headermain'><span class='glyphicon glyphicon-wrench btn-lg' aria-hidden='true'><h1>Built</h1></span></div>";
        var animations = document.querySelector(".animations");
        animations.insertAdjacentHTML( 'beforeend', str );
          window.setTimeout(function(){
            var built = document.querySelector("#built");
            built.classList.add("tada");
            built.classList.add("animated");
          }, 490);
      }, 2500);

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
              },300);
          }, 490);
      }, 4000);
    }
    else{
      window.setTimeout(function(){
        loadHomepage();
      },1000);
    }
}

function exitHomePage(){
  homeAnimationPlayed = false;
  jumbotron.classList.add("zoomOutDown");
  jumbotron.classList.add("animated");
  designed.classList.add("zoomOutLeft");
  deployed.classList.add("zoomOutRight");
  built.classList.add("bounceOut");
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



loadHomepage();




// Set up event listeners #######################################

homeMenu.addEventListener("click", function(){
  if(aboutAnimationPlayed){
    exitAboutPage();
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
  if(homeAnimationPlayed){
    exitHomePage();
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
