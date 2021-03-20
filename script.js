let innerWrapper = document.querySelector('.inner-wrapper');
let outerWrapper = document.querySelector('.outer-wrapper')

//onscroll start function
outerWrapper.onscroll = () => { progressBar(); progressStep()};

      progressBar = () => {

        // position of Users scrolling
        let winScroll = outerWrapper.scrollTop;
        // complete scroll width of inner Wrapper - clientHeight from outer Wrapper = scrolled to 100%
        let width = innerWrapper.scrollWidth - outerWrapper.clientHeight;
        // position of user / width * 100 = percentage where user is
        let scrolled = (winScroll / width) * 100;
        // width of progress bar equals width of percentage where user is
        document.getElementById("progress-bar").style.width = scrolled + "%";
      }



      progressStep = () => {
        let progressDiv = (document.getElementById("progress-bar"))
        let dot2 = document.getElementById("dot2")
        let dot3 = document.getElementById("dot3")
        let dot4 = document.getElementById("dot4")
        let dot5 = document.getElementById("dot5")

         
        let progressString = progressDiv.style.width
        let progress = Number.parseInt(progressString) 
        console.log(typeof(progress))
        console.log(progress) 
                  
                  if(progress > -1 && progress <= 25) 
                  {
                  dot2.style.display = "none";
                  }
                  else if(progress > 25 && progress <= 50)
                  {
                  dot2.style.display = "block";
                  dot3.style.display = "none";
                  }
                  else if(progress > 50 && progress <= 75)
                  {
                  dot3.style.display = "block";
                  dot4.style.display = "none";
                  }
                  else if (progress > 75 && progress <= 99)
                  {
                  dot4.style.display = "block";
                  dot5.style.display = "none";
                  }
                  else if (progress == 100)
                  {
                  dot5.style.display = "block";
                  }                 
      }