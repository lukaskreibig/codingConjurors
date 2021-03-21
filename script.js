let innerWrapper = document.querySelector('.inner-wrapper');
let outerWrapper = document.querySelector('.outer-wrapper')


        // get all the CSS for the dots
        let dot2 = document.getElementById("dot2")
        let dot3 = document.getElementById("dot3")
        let dot4 = document.getElementById("dot4")
        let dot5 = document.getElementById("dot5")

        // get all the CSS for the text
        let text2 = document.getElementById("progress-text2")
        let text3 = document.getElementById("progress-text3")
        let text4 = document.getElementById("progress-text4")
        let text5 = document.getElementById("progress-text5")

        let monster = document.getElementById("monsteranimation")

        let monsterPlace = 0;

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

        // turn the scroll percentage from string to number
        let progressDiv = (document.getElementById("progress-bar"))
        let progressString = progressDiv.style.width
        let progress = Number.parseInt(progressString)
        console.log(progress)

        //Monster Animation function declaration
        let id = null;
        function monsterani(start, stop) {   
          let pos = start;
          clearInterval(id);
          id = setInterval(frame, 10);
          function frame() {
            if (pos == stop) {
              clearInterval(id);
            } else {
              pos++;
              monster.style.left = pos + '%';
            }
          }
        } 


                  // regulates when the things appears
                  
                  if(progress > -1 && progress <= 11) 
                  {
                      dot2.style.display = "none";
                      text2.style.display = "none";
                      
                      if(monsterPlace == 0){
                        return  monsterPlace = 1;
                      }

                  }


                  else if(progress > 11 && progress <= 35)
                  {
                      dot2.style.display = "block";
                      dot3.style.display = "none";

                      text2.style.display = "block";
                      text3.style.display = "none";

                      if(monsterPlace == 1){
                        monsterani(1, 22)
                        return monsterPlace = 2
                      }
                  }
            
                   
                  else if(progress > 35 && progress <= 61)
                  {
                      dot3.style.display = "block";
                      dot4.style.display = "none";

                      text3.style.display = "block";
                      text4.style.display = "none";

                     if(monsterPlace == 2){
                      monsterani(22, 48)
                      return monsterPlace = 3
                      }
                      // if(monsterBack == 2 ){
                      //   monsterani(48, 22)
                      //   return monsterBack = 3
                      // }

                  }
                  else if (progress > 61 && progress <= 87)
                  {
                      dot4.style.display = "block";
                      dot5.style.display = "none";

                      text4.style.display = "block";
                      text5.style.display = "none";

                      if(monsterPlace == 3 ){
                        monsterani(48, 73)
                        return monsterPlace = 4
                      }
                      // if(monsterBack == 1 ){
                      //   monsterani(73, 48)
                      //   return monsterBack = 2
                      // }

                  }
                  else if (progress > 88)
                  {
                  dot5.style.display = "block";
                  text5.style.display = "block";

                  if(monsterPlace == 4){
                  monsterani(73, 97)
                  return monsterPlace = 5
                  }
                    
                    
                  
                  }                 
        }


      