let innerWrapper = document.querySelector('.inner-wrapper');
let outerWrapper = document.querySelector('.outer-wrapper')

//onscroll start function
outerWrapper.onscroll = () => { progressBar(); progressStep()};

      //  calculation based on scrolling for the progress bar
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


      // this function handles the appearance of the progress dots
      progressStep = () => {

        // get all the CSS
        let progressDiv = (document.getElementById("progress-bar"))
        let dot2 = document.getElementById("dot2")
        let dot3 = document.getElementById("dot3")
        let dot4 = document.getElementById("dot4")
        let dot5 = document.getElementById("dot5")

        // turn the scroll percentage from string to number
        let progressString = progressDiv.style.width
        let progress = Number.parseInt(progressString) 
        // console.log(typeof(progress))
        // console.log(progress) 

                  // regulates when the dots appears
                  
                  if(progress > -1 && progress <= 11) 
                  {
                  dot2.style.display = "none";
                  }
                  else if(progress > 11 && progress <= 35)
                  {
                  dot2.style.display = "block";
                  dot3.style.display = "none";
                  }
                  else if(progress > 35 && progress <= 61)
                  {
                  dot3.style.display = "block";
                  dot4.style.display = "none";
                  }
                  else if (progress > 61 && progress <= 87)
                  {
                  dot4.style.display = "block";
                  dot5.style.display = "none";
                  }
                  else if (progress > 88)
                  {
                  dot5.style.display = "block";
                  }                 
      }