import{s,_ as n}from"./index-e250b302.js";class o{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=s(e))}}async function a(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await n(()=>import("./Pusher-d08f8dc1.js"),["assets/Pusher-d08f8dc1.js","assets/index-e250b302.js","assets/index-e53d0f4d.css","assets/ExternalInteractorBase-029fb1b6.js"]);return new u(e)},t)}export{o as Push,a as loadExternalPushInteraction};