import{_ as s}from"./index-e250b302.js";class o{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}async function d(t,e=!0){await t.addInteractor("externalAttract",async i=>{const{Attractor:n}=await s(()=>import("./Attractor-18692894.js"),["assets/Attractor-18692894.js","assets/Ranges-50c6af7d.js","assets/index-e250b302.js","assets/index-e53d0f4d.css","assets/ExternalInteractorBase-029fb1b6.js"]);return new n(t,i)},e)}export{o as Attract,d as loadExternalAttractInteraction};