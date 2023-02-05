let  mcs , sec , min , hrs ;

mcs = document.querySelector(".mcs");
sec = document.querySelector(".sec");
min = document.querySelector(".min");
hrs = document.querySelector(".hrs");


//registed box
let tours = document.querySelector(".tours")

///start restart controler
let startstop = "started";

let playPause = "play";

// restart settings

let setmilsecs = 0;
let setsecondes = 0;
let setminutes = 0;
let sethours = 0;




let btn_start = document.querySelector(".start-btn");
btn_start.addEventListener("click" , () => {
    
     btn_start.innerHTML = '<i class="fa-sharp fa-solid fa-person-walking-arrow-loop-left"></i>';

    if(startstop === "started"){

        // start chronology
        let chronology = setInterval(() => {

            //setting milsecs
            setmilsecs++;
           
            if (setmilsecs < 10){
                mcs.textContent = `0${setmilsecs}`;
            } else {

                mcs.textContent = setmilsecs;
                if(setmilsecs / 99 === 1){
                    setmilsecs = 0;
                    mcs.textContent = `0${setmilsecs}`;

                    //misecs setted

                    // setting secondes
                    setsecondes++;
                    if(setsecondes < 10) {
                        sec.textContent = `0${setsecondes}`;
                    } else {
                        sec.textContent = setsecondes;
                        if(setsecondes / 60 === 1) {
                            setsecondes = 0;
                            sec.textContent  = `0${setsecondes}`;
                            //secondes setted

                            //setting munites
                            setminutes++;
                            if (setminutes < 10) {
                                min.textContent = `0${setminutes}`;
                            } else {
                                min.textContent = setminutes;
                                if (setminutes / 60 === 1) {
                                    setminutes = 0;
                                    min.textContent = `0${setminutes}`
                                    //munites setted

                                    // setting hours
                                    sethours++;
                                    if (sethours < 10) {
                                        hrs.textContent = `0${sethours}`
                                    } else {
                                        hrs.textContent  = sethours ;
                                         //hours setted
                                    }
                                }
                            }
                        }
                    }
                }
            }

        } , 10);

    

        //change the value of startstop
        startstop = "restarted";
        console.log(startstop)

} else  if (startstop === "restarted") {
        // restart the chronology

        //change the value

setmilsecs = 0;
mcs.textContent = `0${setmilsecs}`;

setsecondes = 0;
sec.textContent = `0${setsecondes}`;

setminutes = 0;
min.textContent = `0${setminutes}`;

sethours = 0;
hrs.textContent = `0${sethours}`

       
    } 
    document.querySelector(".btn-add").onclick = () => {
        let tourConatiner = document.createElement("div");
        tourConatiner.className = "trs-box";
        let registedTimer = document.createElement("span");
        let icon = document.createElement("i");
        icon.className = "fa-sharp fa-solid fa-clock";
        tourConatiner.appendChild(icon);


         registedTimer.textContent = 
         `${sethours.toString().length <= 1 ? `0${sethours}` : sethours } :
         ${setminutes.toString().length <= 1 ? `0${setminutes}` : setminutes} :
         ${setsecondes.toString().length <= 1 ? `0${setsecondes}` : setsecondes} :
         ${setmilsecs.toString().length  <= 1 ? `0${setmilsecs}` : setmilsecs}`;


        tourConatiner.appendChild(registedTimer);
        tours.appendChild(tourConatiner);


        tourConatiner.onclick = () => {
            
                tourConatiner.style.transform = "translateX(50px)";
                tourConatiner.style.opacity = "0";
                
                setTimeout(() => {
                tours.removeChild(tourConatiner);
            } , 500)
        }
         
    }

}); 
