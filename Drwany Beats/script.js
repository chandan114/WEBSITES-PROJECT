		
		

		const pl = document.querySelector('button') ;
		const p = document.querySelector('audio') ;
		const play = document.getElementById('pre');
		let level = document.getElementById('range') ;
		const playpauseimage = document.getElementsByClassName('playpauseimage');


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar").style.top = "0";
  } else {
    document.getElementsByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
		

		function explore(){

			let h = screen.height ;
			window.scrollBy(0 , h);
		}

		

		function changetime(){
			

				p.currentTime = range.value ;
		}

		p.addEventListener("timeupdate", function(){

			level.value = p.currentTime ;
		});

		p.addEventListener( "durationchange", function(){

			level.max = p.duration ;

		});
		
		let isplay = false ;


		function tap(s){

			p.src = s ;
			if(isplay){

				playpauseimage.src = 'pause.png' ;
			}
			else {
				
				playpauseimage.src = 'play-button.png' ;
			}

			playsong();



		}

		function playsong(){

			if(isplay){
				p.pause();
				isplay = false
				playpauseimage.src = "pause.png" ;

				


				
				

			}
			else{

				p.play();
				isplay = true ;
				playpauseimage.src = 'play-button.png' ;
			}
		}



		pre.addEventListener( "click", function(){


			

			
			if(isplay){
				p.pause();
				isplay = false
				playpauseimage.src = "pause.png" ;

				


				
				

			}
			else{

				p.play();
				isplay = true ;
			}

		});
		// function tap(s){

			
			
			
		// 	console.log('dcsfc');
		// }