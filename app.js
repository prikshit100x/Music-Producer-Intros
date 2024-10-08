window.addEventListener('keydown',function(e){
const audio =this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
console.log(key);
if(!audio) return;
audio.currentTime =0 
audio.play();

key.classList.add('playing')

function removeTransition(e){
if(e.propertyName!= 'transform') return;
this.classList.remove('playing')
}
const keys = this.document.querySelectorAll('.key')
keys.forEach(key =>{
    key.addEventListener('transitionend',removeTransition)
})
})