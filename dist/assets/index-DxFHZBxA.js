(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const ze="vrelectric_business_config_v1",ke="vrelectric_private_feedback_v1",Me="vrelectric_analytics_v1",fe={businessName:"VR Electric",tagline:"Licensed Electrical Contractors & Smart Home Solutions",industry:"Electrical Contracting & Smart Automation",phone:"+91 98765 43210",whatsapp:"+919876543210",email:"service@vrelectric.com",address:"Shop 12, Commercial Plaza, Main Road, New Delhi",googleReviewUrl:"https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4",ratingThreshold:4,primaryColor:"#2563eb",accentColor:"#f59e0b",showLogoInQR:!0,reviewPool:[{text:"Excellent service by VR Electric! The team arrived on time, quickly identified the wiring issue, and fixed it within an hour. Very professional and neat work. Highly recommend their electrical services!",category:"Emergency & Repair"},{text:"Called VR Electric for a complete house rewiring job and they did an outstanding job. Fair pricing, no hidden charges, and the electricians were extremely skilled. Will definitely use them again!",category:"House Wiring"},{text:"VR Electric installed new switchboards, MCBs, and heavy line cabling at our office. The work quality was top-notch — clean wiring, proper labeling, and they even cleaned up after finishing. 5 stars!",category:"Commercial & Office"},{text:"Had an emergency power outage late at night and VR Electric responded within 30 minutes. Their technician was polite, diagnosed the problem fast, and got our power restored safely. Lifesavers!",category:"Emergency & Repair"},{text:"Very impressed with VR Electric's smart home automation work. They set up our lighting controls, motorized switches, and fan regulators perfectly. Great knowledge of modern smart electrical systems!",category:"Smart Home"},{text:"VR Electric handled our shop's complete electrical setup — from main distribution board to earthing to inverter backup connections. Everything was done per safety standards. Trustworthy and reliable service!",category:"Commercial & Office"},{text:"Got our entire flat's old aluminum wiring replaced with heavy copper cabling by VR Electric. The team was careful with our interiors, worked efficiently, and the final result is excellent. Best electricians in town!",category:"House Wiring"},{text:"VR Electric did a fantastic job installing our kitchen electrical points, chimney power line, and induction load balancing. Proper earthing, neat conduit work, and very reasonable charges. Very happy customer!",category:"House Wiring"},{text:"Hired VR Electric for our new bungalow construction electrical work. From conduit laying to final designer light fittings, everything was handled professionally. On-time delivery and great attention to safety codes!",category:"House Wiring"},{text:"VR Electric's team installed our EV charger point at our parking bay. They explained the load requirements clearly, did proper heavy cabling with isolators, and tested charging thoroughly. Very knowledgeable team!",category:"EV & Green Energy"},{text:"Our housing society hired VR Electric for a common area lighting and panel upgrade. They completed the project ahead of schedule, used certified materials, and the power efficiency is noticeable. Excellent work!",category:"Commercial & Office"},{text:"VR Electric diagnosed and permanently fixed a persistent short circuit and MCB tripping issue that two previous electricians couldn't solve. Methodical and thorough troubleshooting. Finally, peace of mind!",category:"Emergency & Repair"},{text:"Superb ceiling fan and chandelier installation work by VR Electric. They took great care with our high ceiling fixtures and balanced the fans perfectly with no wobbling. Courteous staff and fair pricing!",category:"General Electrical"},{text:"Installed our inverter and battery backup system through VR Electric. Seamless changeover, proper ventilation advice, and tidy wiring. Great customer service from start to finish!",category:"Emergency & Repair"}]},Ee=[{id:"fb-101",customerName:"Rohit Sharma",phone:"+91 98112 34567",email:"rohit.s@example.com",rating:2,category:"Technician Arrived Late",message:"The technician came 45 minutes after the scheduled slot without prior update. The work was fine, but the delay messed up my schedule.",status:"In Progress",timestamp:new Date(Date.now()-36e5*24).toISOString(),resolutionNotes:"Called customer and apologized. Provided 15% discount voucher for next visit."},{id:"fb-102",customerName:"Priya Mehta",phone:"+91 99201 88921",email:"priya.m@example.com",rating:3,category:"Pricing / Billing Misunderstanding",message:"Work was good, but the extra charges for spare conduits were not explained upfront before installation.",status:"Resolved",timestamp:new Date(Date.now()-36e5*72).toISOString(),resolutionNotes:"Manager clarified the bill breakdown; customer satisfied and agreed to rehire."}],he={totalScans:148,ratingsBreakdown:{5:112,4:24,3:7,2:3,1:2},redirectedToGoogle:136,internalFeedbackSubmitted:12,history:[{type:"scan",timestamp:new Date(Date.now()-6e4*25).toISOString()},{type:"google_redirect",rating:5,timestamp:new Date(Date.now()-6e4*24).toISOString()},{type:"scan",timestamp:new Date(Date.now()-6e4*120).toISOString()},{type:"google_redirect",rating:5,timestamp:new Date(Date.now()-6e4*119).toISOString()}]};function Z(){try{const e=localStorage.getItem(ze);return e?{...fe,...JSON.parse(e)}:{...fe}}catch(e){return console.error("Failed to parse config:",e),{...fe}}}function Ht(e){const t={...Z(),...e};return localStorage.setItem(ze,JSON.stringify(t)),ge("config",t),t}function oe(){try{const e=localStorage.getItem(ke);return e?JSON.parse(e):[...Ee]}catch(e){return console.error("Failed to parse feedback:",e),[...Ee]}}function it(e,t,n=""){const i=oe().map(r=>r.id===e?{...r,status:t,resolutionNotes:n||r.resolutionNotes}:r);return localStorage.setItem(ke,JSON.stringify(i)),ge("feedback",i),i}function Ot(e){const t=oe().filter(n=>n.id!==e);return localStorage.setItem(ke,JSON.stringify(t)),ge("feedback",t),t}function We(){try{const e=localStorage.getItem(Me);return e?{...he,...JSON.parse(e)}:{...he}}catch(e){return console.error("Failed to parse analytics:",e),{...he}}}function Vt(){const e=We();e.totalScans=(e.totalScans||0)+1,e.history.unshift({type:"scan",timestamp:new Date().toISOString()}),e.history.length>100&&e.history.pop(),localStorage.setItem(Me,JSON.stringify(e)),ge("analytics",e)}function Gt(e,t){const n=We(),i=parseInt(e,10)||5;n.ratingsBreakdown[i]=(n.ratingsBreakdown[i]||0)+1,n.redirectedToGoogle=(n.redirectedToGoogle||0)+1,n.history.unshift({type:"google_redirect",rating:i,timestamp:new Date().toISOString()}),n.history.length>100&&n.history.pop(),localStorage.setItem(Me,JSON.stringify(n)),ge("analytics",n)}function Ut(){localStorage.setItem(ze,JSON.stringify(fe)),localStorage.setItem(ke,JSON.stringify(Ee)),localStorage.setItem(Me,JSON.stringify(he)),ge("all",{config:fe,feedback:Ee,analytics:he})}const Se=[];function _t(e){return Se.push(e),()=>{const t=Se.indexOf(e);t>-1&&Se.splice(t,1)}}function ge(e,t){Se.forEach(n=>{try{n(e,t)}catch(i){console.error("Listener error:",i)}})}function Qe(e=[]){return e.map((t,n)=>typeof t=="string"?{id:`rev-${n}`,text:t,category:"General Electrical"}:{id:t.id||`rev-${n}`,text:t.text||"",category:t.category||"General Electrical"}).filter(t=>t.text.trim().length>0)}function zt(e=[]){const t=Qe(e),n=new Set;return t.forEach(i=>{i.category&&n.add(i.category)}),["All Services",...Array.from(n)]}var je={};(function e(t,n,i,r){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",c=function(){if(!t.OffscreenCanvas)return!1;try{var d=new OffscreenCanvas(1,1),l=d.getContext("2d");l.fillRect(0,0,1,1);var E=d.transferToImageBitmap();l.createPattern(E,"no-repeat")}catch{return!1}return!0}();function o(){}function p(d){var l=n.exports.Promise,E=l!==void 0?l:t.Promise;return typeof E=="function"?new E(d):(d(o,o),null)}var v=function(d,l){return{transform:function(E){if(d)return E;if(l.has(E))return l.get(E);var M=new OffscreenCanvas(E.width,E.height),I=M.getContext("2d");return I.drawImage(E,0,0),l.set(E,M),M},clear:function(){l.clear()}}}(c,new Map),k=function(){var d=Math.floor(16.666666666666668),l,E,M={},I=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(l=function(P){var N=Math.random();return M[N]=requestAnimationFrame(function B(x){I===x||I+d-1<x?(I=x,delete M[N],P()):M[N]=requestAnimationFrame(B)}),N},E=function(P){M[P]&&cancelAnimationFrame(M[P])}):(l=function(P){return setTimeout(P,d)},E=function(P){return clearTimeout(P)}),{frame:l,cancel:E}}(),y=function(){var d,l,E={};function M(I){function P(N,B){I.postMessage({options:N||{},callback:B})}I.init=function(B){var x=B.transferControlToOffscreen();I.postMessage({canvas:x},[x])},I.fire=function(B,x,q){if(l)return P(B,null),l;var O=Math.random().toString(36).slice(2);return l=p(function(D){function V(G){G.data.callback===O&&(delete E[O],I.removeEventListener("message",V),l=null,v.clear(),q(),D())}I.addEventListener("message",V),P(B,O),E[O]=V.bind(null,{data:{callback:O}})}),l},I.reset=function(){I.postMessage({reset:!0});for(var B in E)E[B](),delete E[B]}}return function(){if(d)return d;if(!i&&a){var I=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{d=new Worker(URL.createObjectURL(new Blob([I])))}catch(P){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",P),null}M(d)}return d}}(),u={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function f(d,l){return l?l(d):d}function C(d){return d!=null}function b(d,l,E){return f(d&&C(d[l])?d[l]:u[l],E)}function w(d){return d<0?0:Math.floor(d)}function m(d,l){return Math.floor(Math.random()*(l-d))+d}function h(d){return parseInt(d,16)}function g(d){return d.map(R)}function R(d){var l=String(d).replace(/[^0-9a-f]/gi,"");return l.length<6&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),{r:h(l.substring(0,2)),g:h(l.substring(2,4)),b:h(l.substring(4,6))}}function T(d){var l=b(d,"origin",Object);return l.x=b(l,"x",Number),l.y=b(l,"y",Number),l}function A(d){d.width=document.documentElement.clientWidth,d.height=document.documentElement.clientHeight}function S(d){var l=d.getBoundingClientRect();d.width=l.width,d.height=l.height}function L(d){var l=document.createElement("canvas");return l.style.position="fixed",l.style.top="0px",l.style.left="0px",l.style.pointerEvents="none",l.style.zIndex=d,l}function F(d,l,E,M,I,P,N,B,x){d.save(),d.translate(l,E),d.rotate(P),d.scale(M,I),d.arc(0,0,1,N,B,x),d.restore()}function j(d){var l=d.angle*(Math.PI/180),E=d.spread*(Math.PI/180);return{x:d.x,y:d.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:d.startVelocity*.5+Math.random()*d.startVelocity,angle2D:-l+(.5*E-Math.random()*E),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:d.color,shape:d.shape,tick:0,totalTicks:d.ticks,decay:d.decay,drift:d.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:d.gravity*3,ovalScalar:.6,scalar:d.scalar,flat:d.flat}}function X(d,l){l.x+=Math.cos(l.angle2D)*l.velocity+l.drift,l.y+=Math.sin(l.angle2D)*l.velocity+l.gravity,l.velocity*=l.decay,l.flat?(l.wobble=0,l.wobbleX=l.x+10*l.scalar,l.wobbleY=l.y+10*l.scalar,l.tiltSin=0,l.tiltCos=0,l.random=1):(l.wobble+=l.wobbleSpeed,l.wobbleX=l.x+10*l.scalar*Math.cos(l.wobble),l.wobbleY=l.y+10*l.scalar*Math.sin(l.wobble),l.tiltAngle+=.1,l.tiltSin=Math.sin(l.tiltAngle),l.tiltCos=Math.cos(l.tiltAngle),l.random=Math.random()+2);var E=l.tick++/l.totalTicks,M=l.x+l.random*l.tiltCos,I=l.y+l.random*l.tiltSin,P=l.wobbleX+l.random*l.tiltCos,N=l.wobbleY+l.random*l.tiltSin;if(d.fillStyle="rgba("+l.color.r+", "+l.color.g+", "+l.color.b+", "+(1-E)+")",d.beginPath(),s&&l.shape.type==="path"&&typeof l.shape.path=="string"&&Array.isArray(l.shape.matrix))d.fill(ne(l.shape.path,l.shape.matrix,l.x,l.y,Math.abs(P-M)*.1,Math.abs(N-I)*.1,Math.PI/10*l.wobble));else if(l.shape.type==="bitmap"){var B=Math.PI/10*l.wobble,x=Math.abs(P-M)*.1,q=Math.abs(N-I)*.1,O=l.shape.bitmap.width*l.scalar,D=l.shape.bitmap.height*l.scalar,V=new DOMMatrix([Math.cos(B)*x,Math.sin(B)*x,-Math.sin(B)*q,Math.cos(B)*q,l.x,l.y]);V.multiplySelf(new DOMMatrix(l.shape.matrix));var G=d.createPattern(v.transform(l.shape.bitmap),"no-repeat");G.setTransform(V),d.globalAlpha=1-E,d.fillStyle=G,d.fillRect(l.x-O/2,l.y-D/2,O,D),d.globalAlpha=1}else if(l.shape==="circle")d.ellipse?d.ellipse(l.x,l.y,Math.abs(P-M)*l.ovalScalar,Math.abs(N-I)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI):F(d,l.x,l.y,Math.abs(P-M)*l.ovalScalar,Math.abs(N-I)*l.ovalScalar,Math.PI/10*l.wobble,0,2*Math.PI);else if(l.shape==="star")for(var $=Math.PI/2*3,_=4*l.scalar,W=8*l.scalar,Q=l.x,Y=l.y,ie=5,J=Math.PI/ie;ie--;)Q=l.x+Math.cos($)*W,Y=l.y+Math.sin($)*W,d.lineTo(Q,Y),$+=J,Q=l.x+Math.cos($)*_,Y=l.y+Math.sin($)*_,d.lineTo(Q,Y),$+=J;else d.moveTo(Math.floor(l.x),Math.floor(l.y)),d.lineTo(Math.floor(l.wobbleX),Math.floor(I)),d.lineTo(Math.floor(P),Math.floor(N)),d.lineTo(Math.floor(M),Math.floor(l.wobbleY));return d.closePath(),d.fill(),l.tick<l.totalTicks}function U(d,l,E,M,I){var P=l.slice(),N=d.getContext("2d"),B,x,q=p(function(O){function D(){B=x=null,N.clearRect(0,0,M.width,M.height),v.clear(),I(),O()}function V(){i&&!(M.width===r.width&&M.height===r.height)&&(M.width=d.width=r.width,M.height=d.height=r.height),!M.width&&!M.height&&(E(d),M.width=d.width,M.height=d.height),N.clearRect(0,0,M.width,M.height),P=P.filter(function(G){return X(N,G)}),P.length?B=k.frame(V):D()}B=k.frame(V),x=D});return{addFettis:function(O){return P=P.concat(O),q},canvas:d,promise:q,reset:function(){B&&k.cancel(B),x&&x()}}}function pe(d,l){var E=!d,M=!!b(l||{},"resize"),I=!1,P=b(l,"disableForReducedMotion",Boolean),N=a&&!!b(l||{},"useWorker"),B=N?y():null,x=E?A:S,q=d&&B?!!d.__confetti_initialized:!1,O=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,D;function V($,_,W){for(var Q=b($,"particleCount",w),Y=b($,"angle",Number),ie=b($,"spread",Number),J=b($,"startVelocity",Number),Pt=b($,"decay",Number),Lt=b($,"gravity",Number),Nt=b($,"drift",Number),et=b($,"colors",g),xt=b($,"ticks",Number),tt=b($,"shapes"),$t=b($,"scalar"),Ft=!!b($,"flat"),nt=T($),rt=Q,Le=[],qt=d.width*nt.x,Dt=d.height*nt.y;rt--;)Le.push(j({x:qt,y:Dt,angle:Y,spread:ie,startVelocity:J,color:et[rt%et.length],shape:tt[m(0,tt.length)],ticks:xt,decay:Pt,gravity:Lt,drift:Nt,scalar:$t,flat:Ft}));return D?D.addFettis(Le):(D=U(d,Le,x,_,W),D.promise)}function G($){var _=P||b($,"disableForReducedMotion",Boolean),W=b($,"zIndex",Number);if(_&&O)return p(function(J){J()});E&&D?d=D.canvas:E&&!d&&(d=L(W),document.body.appendChild(d)),M&&!q&&x(d);var Q={width:d.width,height:d.height};B&&!q&&B.init(d),q=!0,B&&(d.__confetti_initialized=!0);function Y(){if(B){var J={getBoundingClientRect:function(){if(!E)return d.getBoundingClientRect()}};x(J),B.postMessage({resize:{width:J.width,height:J.height}});return}Q.width=Q.height=null}function ie(){D=null,M&&(I=!1,t.removeEventListener("resize",Y)),E&&d&&(document.body.contains(d)&&document.body.removeChild(d),d=null,q=!1)}return M&&!I&&(I=!0,t.addEventListener("resize",Y,!1)),B?B.fire($,Q,ie):V($,Q,ie)}return G.reset=function(){B&&B.reset(),D&&D.reset()},G}var se;function H(){return se||(se=pe(null,{useWorker:!0,resize:!0})),se}function ne(d,l,E,M,I,P,N){var B=new Path2D(d),x=new Path2D;x.addPath(B,new DOMMatrix(l));var q=new Path2D;return q.addPath(x,new DOMMatrix([Math.cos(N)*I,Math.sin(N)*I,-Math.sin(N)*P,Math.cos(N)*P,E,M])),q}function re(d){if(!s)throw new Error("path confetti are not supported in this browser");var l,E;typeof d=="string"?l=d:(l=d.path,E=d.matrix);var M=new Path2D(l),I=document.createElement("canvas"),P=I.getContext("2d");if(!E){for(var N=1e3,B=N,x=N,q=0,O=0,D,V,G=0;G<N;G+=2)for(var $=0;$<N;$+=2)P.isPointInPath(M,G,$,"nonzero")&&(B=Math.min(B,G),x=Math.min(x,$),q=Math.max(q,G),O=Math.max(O,$));D=q-B,V=O-x;var _=10,W=Math.min(_/D,_/V);E=[W,0,0,W,-Math.round(D/2+B)*W,-Math.round(V/2+x)*W]}return{type:"path",path:l,matrix:E}}function It(d){var l,E=1,M="#000000",I='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof d=="string"?l=d:(l=d.text,E="scalar"in d?d.scalar:E,I="fontFamily"in d?d.fontFamily:I,M="color"in d?d.color:M);var P=10*E,N=""+P+"px "+I,B=new OffscreenCanvas(P,P),x=B.getContext("2d");x.font=N;var q=x.measureText(l),O=Math.ceil(q.actualBoundingBoxRight+q.actualBoundingBoxLeft),D=Math.ceil(q.actualBoundingBoxAscent+q.actualBoundingBoxDescent),V=2,G=q.actualBoundingBoxLeft+V,$=q.actualBoundingBoxAscent+V;O+=V+V,D+=V+V,B=new OffscreenCanvas(O,D),x=B.getContext("2d"),x.font=N,x.fillStyle=M,x.fillText(l,G,$);var _=1/E;return{type:"bitmap",bitmap:B.transferToImageBitmap(),matrix:[_,0,0,_,-O*_/2,-D*_/2]}}n.exports=function(){return H().apply(this,arguments)},n.exports.reset=function(){H().reset()},n.exports.create=pe,n.exports.shapeFromPath=re,n.exports.shapeFromText=It})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),je,!1);const Ne=je.exports;je.exports.create;const at="vrelectric_last_review_index";function Wt(e){if(e<=0)return 0;let n=(parseInt(localStorage.getItem(at)||"-1",10)+1)%e;return localStorage.setItem(at,String(n)),n}function dt(e,t={}){const n=Z(),i=Qe(n.reviewPool),r=zt(n.reviewPool);let a="All Services",s=i,c=Wt(i.length),o=i[c]?i[c].text:"Excellent service by VR Electric! Professional, punctual, and high quality work. Highly recommended!",p=!1,v=!1,k=!1;t.isSimulated||Vt();function y(S){a=S,S==="All Services"?s=i:(s=i.filter(L=>L.category===S),s.length===0&&(s=i)),c=0,o=s[0].text,p=!1,v=!1,f()}function u(){if(s.length<=1)return;c=(c+1)%s.length,o=s[c].text,p=!1,v=!1,f();const S=e.querySelector("#reviewTextBox");S&&(S.classList.remove("animate-fade-in"),S.offsetWidth,S.classList.add("animate-fade-in"))}function f(){e.innerHTML=`
      <div class="customer-portal-wrap">
        <!-- Branded Header -->
        <header class="portal-header">
          <div class="brand-avatar-box">
            <img src="/logo.svg" alt="${A(n.businessName)} Logo" class="portal-logo" />
            <span class="verified-badge" title="Verified Business">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
          </div>
          <h1 class="portal-business-name">${A(n.businessName)}</h1>
          <p class="portal-tagline">${A(n.tagline)}</p>

          <div class="portal-rating-trust-pill">
            <span class="trust-stars">⭐⭐⭐⭐⭐</span>
            <span class="trust-text">5.0 Star Rated on Google</span>
          </div>
        </header>

        <!-- Main Card -->
        <main class="portal-card">
          ${k?b():C()}
        </main>

        <!-- Footer -->
        <footer class="portal-footer">
          <p class="footer-help">Questions or need direct assistance?</p>
          <div class="footer-contact-actions">
            <a href="tel:${n.phone.replace(/[^0-9+]/g,"")}" class="footer-phone-link">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-1-1z"/>
              </svg>
              ${A(n.phone)}
            </a>
            ${n.whatsapp?`
              <a href="https://wa.me/${n.whatsapp.replace(/[^0-9]/g,"")}" target="_blank" rel="noopener noreferrer" class="footer-whatsapp-link">
                💬 WhatsApp Us
              </a>
            `:""}
          </div>
          <div class="powered-by">
            <span>Powered by <strong>${A(n.businessName)} Smart Reviews</strong></span>
          </div>
        </footer>
      </div>
    `,m()}function C(){const S=s[c]&&s[c].category||"General Electrical";return`
      <div class="direct-review-flow animate-fade-in">
        <!-- Hero Greeting -->
        <div class="review-greeting-section">
          <div class="big-stars-display">⭐⭐⭐⭐⭐</div>
          <h2 class="review-main-heading">Thank You For Choosing Us!</h2>
          <p class="review-sub-heading">
            We've prepared an authentic 5-star review based on our electrical service today. Feel free to use it or edit it before posting!
          </p>
        </div>

        <!-- Service Category Filter Chips -->
        <div class="service-category-chips-bar">
          <span class="chips-label">Service Type:</span>
          <div class="chips-scroll-container">
            ${r.map(L=>`
              <button 
                type="button" 
                class="service-chip-btn ${a===L?"active":""}" 
                data-category="${A(L)}"
              >
                ${w(L)} ${A(L)}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Pre-Written Review Box -->
        <div class="prewritten-review-container">
          <div class="review-box-label">
            <span class="label-icon">✍️</span>
            <span class="label-badge-cat">${A(S)}</span>
            
            <div class="review-box-header-actions">
              <button type="button" class="btn-shuffle-review" id="shuffleReviewBtn" title="Show another unique review suggestion">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
                <span>Suggest Another</span>
              </button>
              
              <button type="button" class="btn-edit-toggle ${p?"active":""}" id="toggleEditBtn" title="Edit this review">
                ${p?"✓ Done":"✏️ Edit"}
              </button>
            </div>
          </div>

          <div class="review-text-display ${p?"is-editing":""}" id="reviewTextBox">
            ${p?`
              <textarea id="liveReviewEditArea" class="live-review-textarea" rows="4" placeholder="Personalize your review...">${A(o)}</textarea>
            `:`
              <div class="quote-mark">“</div>
              <p class="review-body-text">${A(o)}</p>
            `}
          </div>

          <div class="review-meta-bar">
            <div class="meta-status">
              <span class="pulse-indicator"></span>
              <span>${v?"✓ Copied to clipboard":"Unique 5-Star Draft Ready"}</span>
            </div>
            <button type="button" class="btn-copy-inline ${v?"copied":""}" id="copyReviewBtn">
              ${v?`
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Copied!
              `:`
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                Copy Text
              `}
            </button>
          </div>
        </div>

        <!-- Big Google Review CTA Button -->
        <div class="cta-block">
          <button type="button" class="btn-post-google" id="postToGoogleBtn">
            <div class="google-btn-inner">
              <svg viewBox="0 0 24 24" class="google-g-icon" width="28" height="28">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div class="google-btn-text">
                <strong>Copy Review & Open Google</strong>
                <span>One tap copies text & opens Google Maps</span>
              </div>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" class="arrow-icon">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </button>

          <!-- 3 Step Visual Guide -->
          <div class="cta-steps-mini">
            <div class="mini-step">
              <span class="mini-step-num">1</span>
              <span>Tap button to copy</span>
            </div>
            <span class="mini-arrow">→</span>
            <div class="mini-step">
              <span class="mini-step-num">2</span>
              <span>Google opens</span>
            </div>
            <span class="mini-arrow">→</span>
            <div class="mini-step">
              <span class="mini-step-num">3</span>
              <span>Paste & submit</span>
            </div>
          </div>
        </div>
      </div>
    `}function b(){return`
      <div class="redirect-success-state animate-fade-in">
        <div class="success-check-circle">
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#10b981" stroke-width="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        
        <h2 class="success-heading">Review Copied to Clipboard! 🎉</h2>
        <p class="success-text">
          Google Reviews was launched. When Google Maps loads on your screen, simply paste and tap <strong>Post</strong>:
        </p>

        <!-- Visual Tutorial Card -->
        <div class="success-visual-guide">
          <div class="guide-step">
            <span class="guide-num">1</span>
            <div class="guide-step-content">
              <strong>Select 5 Stars</strong>
              <span>Tap the 5th star ⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div class="guide-step">
            <span class="guide-num">2</span>
            <div class="guide-step-content">
              <strong>Paste Your Review</strong>
              <span>Long-press in the text box & tap <em>Paste</em></span>
            </div>
          </div>
          <div class="guide-step">
            <span class="guide-num">3</span>
            <div class="guide-step-content">
              <strong>Submit</strong>
              <span>Tap the blue <em>Post</em> button in top right</span>
            </div>
          </div>
        </div>

        <!-- Copied Review Preview -->
        <div class="copied-review-preview">
          <div class="copied-preview-header">
            <span>Copied Text:</span>
            <button type="button" class="btn-copy-preview" id="copyAgainBtn">
              📋 Copy Again
            </button>
          </div>
          <p class="copied-preview-body">${A(o)}</p>
        </div>

        <div class="success-action-buttons">
          <button type="button" class="btn btn-primary btn-block" id="retryGoogleBtn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
            Re-open Google Reviews Page ↗
          </button>

          <button type="button" class="btn btn-ghost btn-sm" id="resetFlowBtn">
            ← Choose a different review
          </button>
        </div>
      </div>
    `}function w(S){return S.includes("Wiring")?"⚡":S.includes("Emergency")||S.includes("Repair")?"🚨":S.includes("Commercial")||S.includes("Office")?"🏢":S.includes("Smart")?"💡":S.includes("EV")||S.includes("Green")?"🔌":"🌟"}function m(){e.querySelectorAll(".service-chip-btn").forEach(H=>{H.addEventListener("click",()=>{const ne=H.getAttribute("data-category");y(ne)})});const L=e.querySelector("#shuffleReviewBtn");L&&L.addEventListener("click",()=>{u(),T("Suggested another unique review! 🔄")});const F=e.querySelector("#toggleEditBtn");F&&F.addEventListener("click",()=>{if(p){const H=e.querySelector("#liveReviewEditArea");H&&H.value.trim()&&(o=H.value.trim()),p=!1,f(),T("Review updated!")}else{p=!0,f();const H=e.querySelector("#liveReviewEditArea");H&&(H.focus(),H.setSelectionRange(H.value.length,H.value.length))}});const j=e.querySelector("#copyReviewBtn");j&&j.addEventListener("click",()=>{if(p){const H=e.querySelector("#liveReviewEditArea");H&&H.value.trim()&&(o=H.value.trim(),p=!1)}g(o),v=!0,f(),T("Review copied to clipboard! 📋")});const X=e.querySelector("#copyAgainBtn");X&&X.addEventListener("click",()=>{g(o),T("Copied again to clipboard! 📋")});const U=e.querySelector("#postToGoogleBtn");U&&U.addEventListener("click",()=>{if(p){const re=e.querySelector("#liveReviewEditArea");re&&re.value.trim()&&(o=re.value.trim(),p=!1)}g(o),v=!0,t.isSimulated||Gt(5),h();const H=n.googleReviewUrl,ne=window.open(H,"_blank");if(!ne||ne.closed||typeof ne.closed>"u")try{window.location.href=H}catch(re){console.error("Redirect failed:",re)}k=!0,f()});const pe=e.querySelector("#retryGoogleBtn");pe&&pe.addEventListener("click",()=>{g(o),window.open(n.googleReviewUrl,"_blank"),T("Opening Google Reviews...")});const se=e.querySelector("#resetFlowBtn");se&&se.addEventListener("click",()=>{k=!1,v=!1,p=!1,f()})}function h(){try{Ne({particleCount:90,spread:75,origin:{y:.6}}),setTimeout(()=>{Ne({particleCount:45,angle:60,spread:55,origin:{x:0}}),Ne({particleCount:45,angle:120,spread:55,origin:{x:1}})},250)}catch{}if(typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate([40,60,40])}catch{}}function g(S){navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(S).catch(()=>R(S)):R(S)}function R(S){const L=document.createElement("textarea");L.value=S,L.setAttribute("readonly",""),L.style.position="fixed",L.style.left="-9999px",document.body.appendChild(L),L.select();try{document.execCommand("copy")}catch(F){console.warn("execCommand failed:",F)}document.body.removeChild(L)}function T(S,L=2500){let F=document.getElementById("globalAppToast");F||(F=document.createElement("div"),F.id="globalAppToast",F.className="app-toast",document.body.appendChild(F)),F.textContent=S,F.classList.add("visible"),setTimeout(()=>F.classList.remove("visible"),L)}function A(S){return S?String(S).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}f()}function ot(e){let t=!0;function n(){e.innerHTML=`
      <div class="simulator-wrapper">
        <div class="simulator-top-bar">
          <div class="sim-info">
            <h2 class="section-title">Customer Scan Experience Simulator</h2>
            <p class="section-subtitle">
              Test exactly what your customers experience after scanning your QR stand on their mobile phones.
            </p>
          </div>

          <div class="sim-controls">
            <div class="view-toggle-pills">
              <button type="button" class="pill-btn ${t?"active":""}" id="togglePhoneFrameBtn">
                📱 iPhone Mockup
              </button>
              <button type="button" class="pill-btn ${t?"":"active"}" id="toggleFullWidthBtn">
                🖥️ Full Screen View
              </button>
            </div>
            <button type="button" class="btn btn-primary btn-sm" id="simNewScanBtn" title="Simulates a new customer scanning the QR code, cycling to the next review">
              🔄 Simulate New Scan
            </button>
            <button type="button" class="btn btn-outline-primary btn-sm" id="openRealReviewTabBtn">
              ↗ Open in New Window
            </button>
          </div>
        </div>

        <div class="simulator-stage ${t?"stage-phone-mode":"stage-full-mode"}">
          ${t?`
            <div class="device-phone-frame">
              <div class="phone-speaker-notch">
                <span class="notch-lens"></span>
                <span class="notch-speaker"></span>
              </div>
              <div class="phone-screen-viewport" id="simulatedScreenArea">
                <!-- Customer portal injected here -->
              </div>
              <div class="phone-home-indicator"></div>
            </div>
          `:`
            <div class="full-screen-preview-box" id="simulatedScreenArea">
              <!-- Customer portal injected here -->
            </div>
          `}
        </div>
      </div>
    `,r(),i()}function i(){const a=e.querySelector("#simulatedScreenArea");a&&dt(a,{isSimulated:!0})}function r(){const a=e.querySelector("#togglePhoneFrameBtn"),s=e.querySelector("#toggleFullWidthBtn"),c=e.querySelector("#openRealReviewTabBtn");a&&a.addEventListener("click",()=>{t=!0,n()}),s&&s.addEventListener("click",()=>{t=!1,n()});const o=e.querySelector("#simNewScanBtn");o&&o.addEventListener("click",()=>{i()}),c&&c.addEventListener("click",()=>{const p=`${window.location.origin}${window.location.pathname}?mode=review`;window.open(p,"_blank")})}n()}var we={},Qt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},ut={},z={};let Je;const jt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];z.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};z.getSymbolTotalCodewords=function(t){return jt[t]};z.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};z.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Je=t};z.isKanjiModeEnabled=function(){return typeof Je<"u"};z.toSJIS=function(t){return Je(t)};var Te={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},e.from=function(i,r){if(e.isValid(i))return i;try{return t(i)}catch{return r}}})(Te);function gt(){this.buffer=[],this.length=0}gt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Jt=gt;function be(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}be.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)};be.prototype.get=function(e,t){return this.data[e*this.size+t]};be.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};be.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Kt=be,pt={};(function(e){const t=z.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const r=Math.floor(i/7)+2,a=t(i),s=a===145?26:Math.ceil((a-13)/(2*r-2))*2,c=[a-7];for(let o=1;o<r-1;o++)c[o]=c[o-1]-s;return c.push(6),c.reverse()},e.getPositions=function(i){const r=[],a=e.getRowColCoords(i),s=a.length;for(let c=0;c<s;c++)for(let o=0;o<s;o++)c===0&&o===0||c===0&&o===s-1||c===s-1&&o===0||r.push([a[c],a[o]]);return r}})(pt);var ft={};const Yt=z.getSymbolSize,st=7;ft.getPositions=function(t){const n=Yt(t);return[[0,0],[n-st,0],[0,n-st]]};var ht={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const a=r.size;let s=0,c=0,o=0,p=null,v=null;for(let k=0;k<a;k++){c=o=0,p=v=null;for(let y=0;y<a;y++){let u=r.get(k,y);u===p?c++:(c>=5&&(s+=t.N1+(c-5)),p=u,c=1),u=r.get(y,k),u===v?o++:(o>=5&&(s+=t.N1+(o-5)),v=u,o=1)}c>=5&&(s+=t.N1+(c-5)),o>=5&&(s+=t.N1+(o-5))}return s},e.getPenaltyN2=function(r){const a=r.size;let s=0;for(let c=0;c<a-1;c++)for(let o=0;o<a-1;o++){const p=r.get(c,o)+r.get(c,o+1)+r.get(c+1,o)+r.get(c+1,o+1);(p===4||p===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const a=r.size;let s=0,c=0,o=0;for(let p=0;p<a;p++){c=o=0;for(let v=0;v<a;v++)c=c<<1&2047|r.get(p,v),v>=10&&(c===1488||c===93)&&s++,o=o<<1&2047|r.get(v,p),v>=10&&(o===1488||o===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let a=0;const s=r.data.length;for(let o=0;o<s;o++)a+=r.data[o];return Math.abs(Math.ceil(a*100/s/5)-10)*t.N4};function n(i,r,a){switch(i){case e.Patterns.PATTERN000:return(r+a)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return a%3===0;case e.Patterns.PATTERN011:return(r+a)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(a/3))%2===0;case e.Patterns.PATTERN101:return r*a%2+r*a%3===0;case e.Patterns.PATTERN110:return(r*a%2+r*a%3)%2===0;case e.Patterns.PATTERN111:return(r*a%3+(r+a)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(r,a){const s=a.size;for(let c=0;c<s;c++)for(let o=0;o<s;o++)a.isReserved(o,c)||a.xor(o,c,n(r,o,c))},e.getBestMask=function(r,a){const s=Object.keys(e.Patterns).length;let c=0,o=1/0;for(let p=0;p<s;p++){a(p),e.applyMask(p,r);const v=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(p,r),v<o&&(o=v,c=p)}return c}})(ht);var Ae={};const ee=Te,ye=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ce=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ae.getBlocksCount=function(t,n){switch(n){case ee.L:return ye[(t-1)*4+0];case ee.M:return ye[(t-1)*4+1];case ee.Q:return ye[(t-1)*4+2];case ee.H:return ye[(t-1)*4+3];default:return}};Ae.getTotalCodewordsCount=function(t,n){switch(n){case ee.L:return Ce[(t-1)*4+0];case ee.M:return Ce[(t-1)*4+1];case ee.Q:return Ce[(t-1)*4+2];case ee.H:return Ce[(t-1)*4+3];default:return}};var vt={},Ie={};const ve=new Uint8Array(512),Re=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)ve[n]=t,Re[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)ve[n]=ve[n-255]})();Ie.log=function(t){if(t<1)throw new Error("log("+t+")");return Re[t]};Ie.exp=function(t){return ve[t]};Ie.mul=function(t,n){return t===0||n===0?0:ve[Re[t]+Re[n]]};(function(e){const t=Ie;e.mul=function(i,r){const a=new Uint8Array(i.length+r.length-1);for(let s=0;s<i.length;s++)for(let c=0;c<r.length;c++)a[s+c]^=t.mul(i[s],r[c]);return a},e.mod=function(i,r){let a=new Uint8Array(i);for(;a.length-r.length>=0;){const s=a[0];for(let o=0;o<r.length;o++)a[o]^=t.mul(r[o],s);let c=0;for(;c<a.length&&a[c]===0;)c++;a=a.slice(c)}return a},e.generateECPolynomial=function(i){let r=new Uint8Array([1]);for(let a=0;a<i;a++)r=e.mul(r,new Uint8Array([1,t.exp(a)]));return r}})(vt);const mt=vt;function Ke(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Ke.prototype.initialize=function(t){this.degree=t,this.genPoly=mt.generateECPolynomial(this.degree)};Ke.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const i=mt.mod(n,this.genPoly),r=this.degree-i.length;if(r>0){const a=new Uint8Array(this.degree);return a.set(i,r),a}return i};var Zt=Ke,wt={},te={},Ye={};Ye.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var K={};const bt="[0-9]+",Xt="[A-Z $%*+\\-./:]+";let me="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";me=me.replace(/u/g,"\\u");const en="(?:(?![A-Z0-9 $%*+\\-./:]|"+me+`)(?:.|[\r
]))+`;K.KANJI=new RegExp(me,"g");K.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");K.BYTE=new RegExp(en,"g");K.NUMERIC=new RegExp(bt,"g");K.ALPHANUMERIC=new RegExp(Xt,"g");const tn=new RegExp("^"+me+"$"),nn=new RegExp("^"+bt+"$"),rn=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");K.testKanji=function(t){return tn.test(t)};K.testNumeric=function(t){return nn.test(t)};K.testAlphanumeric=function(t){return rn.test(t)};(function(e){const t=Ye,n=K;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(a,s){if(!a.ccBits)throw new Error("Invalid mode: "+a);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?a.ccBits[0]:s<27?a.ccBits[1]:a.ccBits[2]},e.getBestModeForData=function(a){return n.testNumeric(a)?e.NUMERIC:n.testAlphanumeric(a)?e.ALPHANUMERIC:n.testKanji(a)?e.KANJI:e.BYTE},e.toString=function(a){if(a&&a.id)return a.id;throw new Error("Invalid mode")},e.isValid=function(a){return a&&a.bit&&a.ccBits};function i(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(a,s){if(e.isValid(a))return a;try{return i(a)}catch{return s}}})(te);(function(e){const t=z,n=Ae,i=Te,r=te,a=Ye,s=7973,c=t.getBCHDigit(s);function o(y,u,f){for(let C=1;C<=40;C++)if(u<=e.getCapacity(C,f,y))return C}function p(y,u){return r.getCharCountIndicator(y,u)+4}function v(y,u){let f=0;return y.forEach(function(C){const b=p(C.mode,u);f+=b+C.getBitsLength()}),f}function k(y,u){for(let f=1;f<=40;f++)if(v(y,f)<=e.getCapacity(f,u,r.MIXED))return f}e.from=function(u,f){return a.isValid(u)?parseInt(u,10):f},e.getCapacity=function(u,f,C){if(!a.isValid(u))throw new Error("Invalid QR Code version");typeof C>"u"&&(C=r.BYTE);const b=t.getSymbolTotalCodewords(u),w=n.getTotalCodewordsCount(u,f),m=(b-w)*8;if(C===r.MIXED)return m;const h=m-p(C,u);switch(C){case r.NUMERIC:return Math.floor(h/10*3);case r.ALPHANUMERIC:return Math.floor(h/11*2);case r.KANJI:return Math.floor(h/13);case r.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(u,f){let C;const b=i.from(f,i.M);if(Array.isArray(u)){if(u.length>1)return k(u,b);if(u.length===0)return 1;C=u[0]}else C=u;return o(C.mode,C.getLength(),b)},e.getEncodedBits=function(u){if(!a.isValid(u)||u<7)throw new Error("Invalid QR Code version");let f=u<<12;for(;t.getBCHDigit(f)-c>=0;)f^=s<<t.getBCHDigit(f)-c;return u<<12|f}})(wt);var yt={};const Ve=z,Ct=1335,an=21522,lt=Ve.getBCHDigit(Ct);yt.getEncodedBits=function(t,n){const i=t.bit<<3|n;let r=i<<10;for(;Ve.getBCHDigit(r)-lt>=0;)r^=Ct<<Ve.getBCHDigit(r)-lt;return(i<<10|r)^an};var St={};const on=te;function le(e){this.mode=on.NUMERIC,this.data=e.toString()}le.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};le.prototype.getLength=function(){return this.data.length};le.prototype.getBitsLength=function(){return le.getBitsLength(this.data.length)};le.prototype.write=function(t){let n,i,r;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),r=parseInt(i,10),t.put(r,10);const a=this.data.length-n;a>0&&(i=this.data.substr(n),r=parseInt(i,10),t.put(r,a*3+1))};var sn=le;const ln=te,xe=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ce(e){this.mode=ln.ALPHANUMERIC,this.data=e}ce.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};ce.prototype.getLength=function(){return this.data.length};ce.prototype.getBitsLength=function(){return ce.getBitsLength(this.data.length)};ce.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=xe.indexOf(this.data[n])*45;i+=xe.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(xe.indexOf(this.data[n]),6)};var cn=ce;const dn=te;function de(e){this.mode=dn.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}de.getBitsLength=function(t){return t*8};de.prototype.getLength=function(){return this.data.length};de.prototype.getBitsLength=function(){return de.getBitsLength(this.data.length)};de.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var un=de;const gn=te,pn=z;function ue(e){this.mode=gn.KANJI,this.data=e}ue.getBitsLength=function(t){return t*13};ue.prototype.getLength=function(){return this.data.length};ue.prototype.getBitsLength=function(){return ue.getBitsLength(this.data.length)};ue.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=pn.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var fn=ue,Et={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,i,r){var a={},s={};s[i]=0;var c=t.PriorityQueue.make();c.push(i,0);for(var o,p,v,k,y,u,f,C,b;!c.empty();){o=c.pop(),p=o.value,k=o.cost,y=n[p]||{};for(v in y)y.hasOwnProperty(v)&&(u=y[v],f=k+u,C=s[v],b=typeof s[v]>"u",(b||C>f)&&(s[v]=f,c.push(v,f),a[v]=p))}if(typeof r<"u"&&typeof s[r]>"u"){var w=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(w)}return a},extract_shortest_path_from_predecessor_list:function(n,i){for(var r=[],a=i;a;)r.push(a),n[a],a=n[a];return r.reverse(),r},find_path:function(n,i,r){var a=t.single_source_shortest_paths(n,i,r);return t.extract_shortest_path_from_predecessor_list(a,r)},PriorityQueue:{make:function(n){var i=t.PriorityQueue,r={},a;n=n||{};for(a in i)i.hasOwnProperty(a)&&(r[a]=i[a]);return r.queue=[],r.sorter=n.sorter||i.default_sorter,r},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var r={value:n,cost:i};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Et);var hn=Et.exports;(function(e){const t=te,n=sn,i=cn,r=un,a=fn,s=K,c=z,o=hn;function p(w){return unescape(encodeURIComponent(w)).length}function v(w,m,h){const g=[];let R;for(;(R=w.exec(h))!==null;)g.push({data:R[0],index:R.index,mode:m,length:R[0].length});return g}function k(w){const m=v(s.NUMERIC,t.NUMERIC,w),h=v(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let g,R;return c.isKanjiModeEnabled()?(g=v(s.BYTE,t.BYTE,w),R=v(s.KANJI,t.KANJI,w)):(g=v(s.BYTE_KANJI,t.BYTE,w),R=[]),m.concat(h,g,R).sort(function(A,S){return A.index-S.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function y(w,m){switch(m){case t.NUMERIC:return n.getBitsLength(w);case t.ALPHANUMERIC:return i.getBitsLength(w);case t.KANJI:return a.getBitsLength(w);case t.BYTE:return r.getBitsLength(w)}}function u(w){return w.reduce(function(m,h){const g=m.length-1>=0?m[m.length-1]:null;return g&&g.mode===h.mode?(m[m.length-1].data+=h.data,m):(m.push(h),m)},[])}function f(w){const m=[];for(let h=0;h<w.length;h++){const g=w[h];switch(g.mode){case t.NUMERIC:m.push([g,{data:g.data,mode:t.ALPHANUMERIC,length:g.length},{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.ALPHANUMERIC:m.push([g,{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.KANJI:m.push([g,{data:g.data,mode:t.BYTE,length:p(g.data)}]);break;case t.BYTE:m.push([{data:g.data,mode:t.BYTE,length:p(g.data)}])}}return m}function C(w,m){const h={},g={start:{}};let R=["start"];for(let T=0;T<w.length;T++){const A=w[T],S=[];for(let L=0;L<A.length;L++){const F=A[L],j=""+T+L;S.push(j),h[j]={node:F,lastCount:0},g[j]={};for(let X=0;X<R.length;X++){const U=R[X];h[U]&&h[U].node.mode===F.mode?(g[U][j]=y(h[U].lastCount+F.length,F.mode)-y(h[U].lastCount,F.mode),h[U].lastCount+=F.length):(h[U]&&(h[U].lastCount=F.length),g[U][j]=y(F.length,F.mode)+4+t.getCharCountIndicator(F.mode,m))}}R=S}for(let T=0;T<R.length;T++)g[R[T]].end=0;return{map:g,table:h}}function b(w,m){let h;const g=t.getBestModeForData(w);if(h=t.from(m,g),h!==t.BYTE&&h.bit<g.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(h)+`.
 Suggested mode is: `+t.toString(g));switch(h===t.KANJI&&!c.isKanjiModeEnabled()&&(h=t.BYTE),h){case t.NUMERIC:return new n(w);case t.ALPHANUMERIC:return new i(w);case t.KANJI:return new a(w);case t.BYTE:return new r(w)}}e.fromArray=function(m){return m.reduce(function(h,g){return typeof g=="string"?h.push(b(g,null)):g.data&&h.push(b(g.data,g.mode)),h},[])},e.fromString=function(m,h){const g=k(m,c.isKanjiModeEnabled()),R=f(g),T=C(R,h),A=o.find_path(T.map,"start","end"),S=[];for(let L=1;L<A.length-1;L++)S.push(T.table[A[L]].node);return e.fromArray(u(S))},e.rawSplit=function(m){return e.fromArray(k(m,c.isKanjiModeEnabled()))}})(St);const Pe=z,$e=Te,vn=Jt,mn=Kt,wn=pt,bn=ft,Ge=ht,Ue=Ae,yn=Zt,Be=wt,Cn=yt,Sn=te,Fe=St;function En(e,t){const n=e.size,i=bn.getPositions(t);for(let r=0;r<i.length;r++){const a=i[r][0],s=i[r][1];for(let c=-1;c<=7;c++)if(!(a+c<=-1||n<=a+c))for(let o=-1;o<=7;o++)s+o<=-1||n<=s+o||(c>=0&&c<=6&&(o===0||o===6)||o>=0&&o<=6&&(c===0||c===6)||c>=2&&c<=4&&o>=2&&o<=4?e.set(a+c,s+o,!0,!0):e.set(a+c,s+o,!1,!0))}}function Rn(e){const t=e.size;for(let n=8;n<t-8;n++){const i=n%2===0;e.set(n,6,i,!0),e.set(6,n,i,!0)}}function Bn(e,t){const n=wn.getPositions(t);for(let i=0;i<n.length;i++){const r=n[i][0],a=n[i][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?e.set(r+s,a+c,!0,!0):e.set(r+s,a+c,!1,!0)}}function kn(e,t){const n=e.size,i=Be.getEncodedBits(t);let r,a,s;for(let c=0;c<18;c++)r=Math.floor(c/3),a=c%3+n-8-3,s=(i>>c&1)===1,e.set(r,a,s,!0),e.set(a,r,s,!0)}function qe(e,t,n){const i=e.size,r=Cn.getEncodedBits(t,n);let a,s;for(a=0;a<15;a++)s=(r>>a&1)===1,a<6?e.set(a,8,s,!0):a<8?e.set(a+1,8,s,!0):e.set(i-15+a,8,s,!0),a<8?e.set(8,i-a-1,s,!0):a<9?e.set(8,15-a-1+1,s,!0):e.set(8,15-a-1,s,!0);e.set(i-8,8,1,!0)}function Mn(e,t){const n=e.size;let i=-1,r=n-1,a=7,s=0;for(let c=n-1;c>0;c-=2)for(c===6&&c--;;){for(let o=0;o<2;o++)if(!e.isReserved(r,c-o)){let p=!1;s<t.length&&(p=(t[s]>>>a&1)===1),e.set(r,c-o,p),a--,a===-1&&(s++,a=7)}if(r+=i,r<0||n<=r){r-=i,i=-i;break}}}function Tn(e,t,n){const i=new vn;n.forEach(function(o){i.put(o.mode.bit,4),i.put(o.getLength(),Sn.getCharCountIndicator(o.mode,e)),o.write(i)});const r=Pe.getSymbolTotalCodewords(e),a=Ue.getTotalCodewordsCount(e,t),s=(r-a)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const c=(s-i.getLengthInBits())/8;for(let o=0;o<c;o++)i.put(o%2?17:236,8);return An(i,e,t)}function An(e,t,n){const i=Pe.getSymbolTotalCodewords(t),r=Ue.getTotalCodewordsCount(t,n),a=i-r,s=Ue.getBlocksCount(t,n),c=i%s,o=s-c,p=Math.floor(i/s),v=Math.floor(a/s),k=v+1,y=p-v,u=new yn(y);let f=0;const C=new Array(s),b=new Array(s);let w=0;const m=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const S=A<o?v:k;C[A]=m.slice(f,f+S),b[A]=u.encode(C[A]),f+=S,w=Math.max(w,S)}const h=new Uint8Array(i);let g=0,R,T;for(R=0;R<w;R++)for(T=0;T<s;T++)R<C[T].length&&(h[g++]=C[T][R]);for(R=0;R<y;R++)for(T=0;T<s;T++)h[g++]=b[T][R];return h}function In(e,t,n,i){let r;if(Array.isArray(e))r=Fe.fromArray(e);else if(typeof e=="string"){let p=t;if(!p){const v=Fe.rawSplit(e);p=Be.getBestVersionForData(v,n)}r=Fe.fromString(e,p||40)}else throw new Error("Invalid data");const a=Be.getBestVersionForData(r,n);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=a;else if(t<a)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+a+`.
`);const s=Tn(t,n,r),c=Pe.getSymbolSize(t),o=new mn(c);return En(o,t),Rn(o),Bn(o,t),qe(o,n,0),t>=7&&kn(o,t),Mn(o,s),isNaN(i)&&(i=Ge.getBestMask(o,qe.bind(null,o,n))),Ge.applyMask(i,o),qe(o,n,i),{modules:o,version:t,errorCorrectionLevel:n,maskPattern:i,segments:r}}ut.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let i=$e.M,r,a;return typeof n<"u"&&(i=$e.from(n.errorCorrectionLevel,$e.M),r=Be.from(n.version),a=Ge.from(n.maskPattern),n.toSJISFunc&&Pe.setToSJISFunction(n.toSJISFunc)),In(t,r,i,a)};var Rt={},Ze={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(a){return[a,a]}))),i.length===6&&i.push("F","F");const r=parseInt(i.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const r=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,a=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:a,scale:a?4:s,margin:r,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,r){return r.width&&r.width>=i+r.margin*2?r.width/(i+r.margin*2):r.scale},e.getImageWidth=function(i,r){const a=e.getScale(i,r);return Math.floor((i+r.margin*2)*a)},e.qrToImageData=function(i,r,a){const s=r.modules.size,c=r.modules.data,o=e.getScale(s,a),p=Math.floor((s+a.margin*2)*o),v=a.margin*o,k=[a.color.light,a.color.dark];for(let y=0;y<p;y++)for(let u=0;u<p;u++){let f=(y*p+u)*4,C=a.color.light;if(y>=v&&u>=v&&y<p-v&&u<p-v){const b=Math.floor((y-v)/o),w=Math.floor((u-v)/o);C=k[c[b*s+w]?1:0]}i[f++]=C.r,i[f++]=C.g,i[f++]=C.b,i[f]=C.a}}})(Ze);(function(e){const t=Ze;function n(r,a,s){r.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=s,a.width=s,a.style.height=s+"px",a.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(a,s,c){let o=c,p=s;typeof o>"u"&&(!s||!s.getContext)&&(o=s,s=void 0),s||(p=i()),o=t.getOptions(o);const v=t.getImageWidth(a.modules.size,o),k=p.getContext("2d"),y=k.createImageData(v,v);return t.qrToImageData(y.data,a,o),n(k,p,v),k.putImageData(y,0,0),p},e.renderToDataURL=function(a,s,c){let o=c;typeof o>"u"&&(!s||!s.getContext)&&(o=s,s=void 0),o||(o={});const p=e.render(a,s,o),v=o.type||"image/png",k=o.rendererOpts||{};return p.toDataURL(v,k.quality)}})(Rt);var Bt={};const Pn=Ze;function ct(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function De(e,t,n){let i=e+t;return typeof n<"u"&&(i+=" "+n),i}function Ln(e,t,n){let i="",r=0,a=!1,s=0;for(let c=0;c<e.length;c++){const o=Math.floor(c%t),p=Math.floor(c/t);!o&&!a&&(a=!0),e[c]?(s++,c>0&&o>0&&e[c-1]||(i+=a?De("M",o+n,.5+p+n):De("m",r,0),r=0,a=!1),o+1<t&&e[c+1]||(i+=De("h",s),s=0)):r++}return i}Bt.render=function(t,n,i){const r=Pn.getOptions(n),a=t.modules.size,s=t.modules.data,c=a+r.margin*2,o=r.color.light.a?"<path "+ct(r.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",p="<path "+ct(r.color.dark,"stroke")+' d="'+Ln(s,a,r.margin)+'"/>',v='viewBox="0 0 '+c+" "+c+'"',y='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+v+' shape-rendering="crispEdges">'+o+p+`</svg>
`;return typeof i=="function"&&i(null,y),y};const Nn=Qt,_e=ut,kt=Rt,xn=Bt;function Xe(e,t,n,i,r){const a=[].slice.call(arguments,1),s=a.length,c=typeof a[s-1]=="function";if(!c&&!Nn())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(r=n,n=t,t=i=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=i,i=void 0):(r=i,i=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=i=void 0):s===2&&!t.getContext&&(i=n,n=t,t=void 0),new Promise(function(o,p){try{const v=_e.create(n,i);o(e(v,t,i))}catch(v){p(v)}})}try{const o=_e.create(n,i);r(null,e(o,t,i))}catch(o){r(o)}}we.create=_e.create;we.toCanvas=Xe.bind(null,kt.render);we.toDataURL=Xe.bind(null,kt.renderToDataURL);we.toString=Xe.bind(null,function(e,t,n){return xn.render(e,n)});function $n(e){const t=Z();let n="#0f172a",i="#ffffff",r="tent",a="";const s=()=>`${window.location.origin+window.location.pathname}?mode=review`;async function c(){const u=s();try{a=await we.toDataURL(u,{errorCorrectionLevel:"H",margin:2,width:600,color:{dark:n,light:i}}),p()}catch(f){console.error("QR code generation failed:",f)}}function o(){e.innerHTML=`
      <div class="qr-studio-wrapper">
        <div class="studio-header">
          <div>
            <h2 class="section-title">QR Code & Marketing Print Studio</h2>
            <p class="section-subtitle">
              Generate crisp, scan-ready QR codes and ready-to-print counter stands & stickers for ${y(t.businessName)}.
            </p>
          </div>
          <div class="studio-top-actions">
            <button type="button" class="btn btn-outline" id="copyReviewLinkBtn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
              Copy Customer Review Link
            </button>
            <button type="button" class="btn btn-primary" id="printMarketingCardBtn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              Print Ready Stand / Card
            </button>
          </div>
        </div>

        <div class="studio-layout-grid">
          <!-- Controls Panel -->
          <div class="studio-controls-card">
            <h3 class="panel-heading">1. Select Marketing Template</h3>
            <div class="template-selector-grid">
              <div class="template-choice ${r==="tent"?"active":""}" data-tpl="tent">
                <div class="tpl-icon">📐</div>
                <div class="tpl-info">
                  <strong>Countertop Tent Stand</strong>
                  <span>Best for payment desk & reception</span>
                </div>
              </div>

              <div class="template-choice ${r==="window"?"active":""}" data-tpl="window">
                <div class="tpl-icon">🏷️</div>
                <div class="tpl-info">
                  <strong>Store Window / Door Decal</strong>
                  <span>Square sticker for entrance & glass</span>
                </div>
              </div>

              <div class="template-choice ${r==="invoice"?"active":""}" data-tpl="invoice">
                <div class="tpl-icon">🧾</div>
                <div class="tpl-info">
                  <strong>Invoice & Service Slip Insert</strong>
                  <span>Handed to customer after completion</span>
                </div>
              </div>
            </div>

            <h3 class="panel-heading mt-4">2. QR Customization</h3>
            <div class="custom-qr-options">
              <div class="form-group">
                <label class="form-label">QR Code Foreground Color</label>
                <div class="color-picker-row">
                  <input type="color" id="qrColorPicker" value="${n}" class="color-input" />
                  <span class="color-code" id="qrColorCode">${n}</span>
                  <div class="quick-swatches">
                    <button type="button" class="swatch-btn" data-color="#0f172a" style="background:#0f172a;" title="Dark Navy"></button>
                    <button type="button" class="swatch-btn" data-color="#2563eb" style="background:#2563eb;" title="Electric Blue"></button>
                    <button type="button" class="swatch-btn" data-color="#059669" style="background:#059669;" title="Emerald Green"></button>
                  </div>
                </div>
              </div>

              <div class="target-url-info">
                <span class="url-badge">Dynamic Review Target:</span>
                <code class="url-string" id="displayReviewUrl">${s()}</code>
              </div>

              <div class="download-btns-row">
                <button type="button" class="btn btn-outline btn-block" id="downloadQrPngBtn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
                  </svg>
                  Download High-Res PNG (1200px)
                </button>
              </div>
            </div>
          </div>

          <!-- Live Print Preview Area -->
          <div class="studio-preview-card">
            <div class="preview-card-header">
              <span>Live Print Preview (${r==="tent"?"Countertop Stand":r==="window"?"Window Decal":"Service Receipt"})</span>
              <span class="badge-ready">Vector Ready</span>
            </div>

            <div class="printable-canvas-container" id="printableCardArea">
              <!-- Rendered dynamically -->
            </div>
          </div>
        </div>
      </div>
    `,v(),c()}function p(){const u=e.querySelector("#printableCardArea");u&&(r==="tent"?u.innerHTML=`
        <div class="print-card print-tent-card" id="activePrintElement">
          <div class="print-top-accent"></div>
          
          <div class="print-tent-header">
            <img src="/logo.svg" alt="Logo" class="print-logo" />
            <h2 class="print-biz-name">${y(t.businessName)}</h2>
            <p class="print-biz-tag">${y(t.tagline)}</p>
          </div>

          <div class="print-headline-box">
            <div class="print-stars-row">⭐⭐⭐⭐⭐</div>
            <h3 class="print-cta-title">How Did We Do Today?</h3>
            <p class="print-cta-sub">Takes only 15 seconds to review your electrical service</p>
          </div>

          <div class="print-qr-frame">
            <img src="${a}" alt="Scan QR Review Code" class="print-qr-img" />
            <div class="print-qr-overlay-badge">
              <span>⚡</span>
            </div>
          </div>

          <div class="print-instructions">
            <div class="instruction-step">
              <span class="step-num">1</span>
              <span>Open Phone Camera</span>
            </div>
            <div class="instruction-arrow">➔</div>
            <div class="instruction-step">
              <span class="step-num">2</span>
              <span>Scan QR Code</span>
            </div>
            <div class="instruction-arrow">➔</div>
            <div class="instruction-step">
              <span class="step-num">3</span>
              <span>Tap 5 Stars ⭐</span>
            </div>
          </div>

          <div class="print-footer-info">
            <span>Direct Feedback & Urgent Inquiries: <strong>${y(t.phone)}</strong></span>
          </div>
        </div>
      `:r==="window"?u.innerHTML=`
        <div class="print-card print-window-decal" id="activePrintElement">
          <div class="decal-inner-border">
            <div class="decal-brand-row">
              <img src="/logo.svg" alt="Logo" class="print-logo-small" />
              <span class="decal-name">${y(t.businessName)}</span>
            </div>
            <h3 class="decal-title">Loved Our Service?</h3>
            <p class="decal-sub">Review us on Google!</p>
            
            <div class="print-qr-frame decal-qr-frame">
              <img src="${a}" alt="Scan QR Review Code" class="print-qr-img" />
            </div>

            <div class="decal-stars">⭐⭐⭐⭐⭐</div>
            <div class="decal-footer-text">Scan with any phone camera</div>
          </div>
        </div>
      `:u.innerHTML=`
        <div class="print-card print-invoice-insert" id="activePrintElement">
          <div class="insert-left">
            <img src="/logo.svg" alt="Logo" class="print-logo-small" />
            <h3 class="insert-title">Thank You For Choosing ${y(t.businessName)}!</h3>
            <p class="insert-desc">
              Your safety and satisfaction are our top priorities. Please scan to rate your service technician today.
            </p>
            <div class="insert-highlights">
              <span>⚡ 100% Quality Guarantee</span>
              <span>🛠️ Certified Electricians</span>
            </div>
            <div class="insert-contact">
              Support: ${y(t.phone)} | ${y(t.email)}
            </div>
          </div>
          <div class="insert-right">
            <div class="print-qr-frame">
              <img src="${a}" alt="Scan QR Review Code" class="print-qr-img" />
            </div>
            <span class="insert-scan-label">Scan to Rate & Review</span>
          </div>
        </div>
      `)}function v(){const u=e.querySelectorAll(".template-choice");u.forEach(g=>{g.addEventListener("click",()=>{u.forEach(R=>R.classList.remove("active")),g.classList.add("active"),r=g.getAttribute("data-tpl"),p()})});const f=e.querySelector("#qrColorPicker"),C=e.querySelector("#qrColorCode");f&&f.addEventListener("input",g=>{n=g.target.value,C&&(C.textContent=n),c()}),e.querySelectorAll(".swatch-btn").forEach(g=>{g.addEventListener("click",()=>{n=g.getAttribute("data-color"),f&&(f.value=n),C&&(C.textContent=n),c()})});const w=e.querySelector("#copyReviewLinkBtn");w&&w.addEventListener("click",()=>{const g=s();navigator.clipboard.writeText(g).then(()=>{k("Customer review URL copied to clipboard! 🔗")}).catch(()=>{k("URL: "+g)})});const m=e.querySelector("#downloadQrPngBtn");m&&m.addEventListener("click",()=>{if(!a)return;const g=document.createElement("a");g.download=`${t.businessName.toLowerCase().replace(/\s+/g,"-")}-review-qr.png`,g.href=a,document.body.appendChild(g),g.click(),document.body.removeChild(g),k("High-Res QR code downloaded! 📥")});const h=e.querySelector("#printMarketingCardBtn");h&&h.addEventListener("click",()=>{window.print()})}function k(u){let f=document.getElementById("globalAppToast");f||(f=document.createElement("div"),f.id="globalAppToast",f.className="app-toast",document.body.appendChild(f)),f.textContent=u,f.classList.add("visible"),setTimeout(()=>{f.classList.remove("visible")},2500)}function y(u){return u?String(u).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}o()}function Fn(e){const t=Z();let n="All",i="All",r="";function a(){const u=oe(),f=u.filter(b=>{const w=n==="All"||b.status===n,m=i==="All"||b.rating.toString()===i,h=!r||b.customerName.toLowerCase().includes(r.toLowerCase())||b.phone.includes(r)||b.message.toLowerCase().includes(r.toLowerCase())||b.category.toLowerCase().includes(r.toLowerCase());return w&&m&&h}),C=u.filter(b=>b.status==="New").length;e.innerHTML=`
      <div class="feedback-inbox-wrap">
        <!-- Header -->
        <div class="inbox-header">
          <div>
            <div class="inbox-title-row">
              <h2 class="section-title">Private Feedback & Complaints Inbox</h2>
              ${C>0?`<span class="badge-urgent">${C} Urgent Attention</span>`:""}
            </div>
            <p class="section-subtitle">
              Customers who rated 1-3 stars are intercepted here before leaving public Google reviews. Resolve their issues quickly to earn loyal clients!
            </p>
          </div>
          <div class="inbox-top-actions">
            <button type="button" class="btn btn-outline" id="exportCsvBtn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Export CSV
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div class="inbox-filters-bar">
          <div class="filter-search-box">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              id="inboxSearchInput" 
              placeholder="Search by customer name, phone, or issue..." 
              value="${y(r)}"
            />
          </div>

          <div class="filter-group">
            <label class="filter-label">Status:</label>
            <select id="statusFilterSelect" class="filter-select">
              <option value="All" ${n==="All"?"selected":""}>All Statuses (${u.length})</option>
              <option value="New" ${n==="New"?"selected":""}>New (${u.filter(b=>b.status==="New").length})</option>
              <option value="In Progress" ${n==="In Progress"?"selected":""}>In Progress</option>
              <option value="Resolved" ${n==="Resolved"?"selected":""}>Resolved</option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">Rating:</label>
            <select id="ratingFilterSelect" class="filter-select">
              <option value="All" ${i==="All"?"selected":""}>All Ratings</option>
              <option value="1" ${i==="1"?"selected":""}>1 Star (Critical)</option>
              <option value="2" ${i==="2"?"selected":""}>2 Stars</option>
              <option value="3" ${i==="3"?"selected":""}>3 Stars</option>
            </select>
          </div>
        </div>

        <!-- Feedback Cards List -->
        <div class="feedback-list-container">
          ${f.length===0?c():f.map(b=>s(b)).join("")}
        </div>
      </div>
    `,o()}function s(u){const f="⭐".repeat(u.rating)+"☆".repeat(5-u.rating),C=new Date(u.timestamp).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),b=u.status==="New"?"badge-new":u.status==="In Progress"?"badge-progress":"badge-resolved",w=u.phone.replace(/[^0-9+]/g,""),m=encodeURIComponent(`Hello ${u.customerName}, this is the customer care desk at ${t.businessName}. Thank you for your feedback regarding "${u.category}". We take this very seriously and would love to make this right. Could we discuss how we can resolve this for you?`);return`
      <div class="feedback-card ${u.status==="New"?"border-unread":""}" data-id="${u.id}">
        <div class="card-top-row">
          <div class="customer-info-block">
            <div class="avatar-initials">${y(v(u.customerName))}</div>
            <div>
              <div class="name-status-line">
                <h3 class="customer-name">${y(u.customerName)}</h3>
                <span class="status-badge ${b}">${y(u.status)}</span>
              </div>
              <div class="customer-contacts">
                <span class="contact-pill phone-pill">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-1-1z"/>
                  </svg>
                  ${y(u.phone)}
                </span>
                ${u.email?`
                  <span class="contact-pill email-pill">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    ${y(u.email)}
                  </span>
                `:""}
              </div>
            </div>
          </div>

          <div class="card-right-meta">
            <span class="rating-stars-badge">${f} (${u.rating}/5)</span>
            <span class="ticket-date">${C}</span>
          </div>
        </div>

        <div class="category-tag-row">
          <span class="issue-category-tag">Concern: ${y(u.category)}</span>
        </div>

        <div class="feedback-quote-box">
          <p class="feedback-text-content">"${y(u.message)}"</p>
        </div>

        <!-- Resolution Notes if any -->
        ${u.resolutionNotes?`
          <div class="resolution-notes-preview">
            <strong>Management Notes:</strong> ${y(u.resolutionNotes)}
          </div>
        `:""}

        <!-- Action Toolbar -->
        <div class="card-actions-toolbar">
          <div class="action-direct-links">
            <a 
              href="https://wa.me/${w.replace("+","")}?text=${m}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp-reply"
              title="Open WhatsApp chat with pre-written resolution draft"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z"/>
              </svg>
              Reply on WhatsApp
            </a>

            <a href="tel:${w}" class="btn btn-call-client">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-1-1z"/>
              </svg>
              Call Customer
            </a>
          </div>

          <div class="action-status-group">
            <select class="status-quick-select" data-id="${u.id}">
              <option value="New" ${u.status==="New"?"selected":""}>Status: New</option>
              <option value="In Progress" ${u.status==="In Progress"?"selected":""}>Status: In Progress</option>
              <option value="Resolved" ${u.status==="Resolved"?"selected":""}>Status: Resolved</option>
            </select>

            <button type="button" class="btn-notes-toggle" data-id="${u.id}" title="Add/Edit internal notes">
              📝 Notes
            </button>

            <button type="button" class="btn-delete-ticket" data-id="${u.id}" title="Remove entry">
              🗑️
            </button>
          </div>
        </div>
      </div>
    `}function c(){return`
      <div class="inbox-empty-state">
        <div class="empty-icon-shield">🛡️</div>
        <h3>No Negative Complaints Found!</h3>
        <p>
          Either all your customers are having 5-star experiences, or no feedback matches your active filters.
        </p>
      </div>
    `}function o(){const u=e.querySelector("#inboxSearchInput");u&&u.addEventListener("input",g=>{r=g.target.value,a()});const f=e.querySelector("#statusFilterSelect");f&&f.addEventListener("change",g=>{n=g.target.value,a()});const C=e.querySelector("#ratingFilterSelect");C&&C.addEventListener("change",g=>{i=g.target.value,a()}),e.querySelectorAll(".status-quick-select").forEach(g=>{g.addEventListener("change",R=>{const T=g.getAttribute("data-id"),A=g.value;it(T,A),k(`Feedback status updated to ${A}`),a()})}),e.querySelectorAll(".btn-notes-toggle").forEach(g=>{g.addEventListener("click",()=>{const R=g.getAttribute("data-id"),A=oe().find(F=>F.id===R);if(!A)return;const S=A.resolutionNotes||"",L=prompt("Enter internal management notes for this complaint (e.g. resolution offered, technician briefed):",S);L!==null&&(it(R,A.status,L.trim()),k("Resolution notes updated!"),a())})}),e.querySelectorAll(".btn-delete-ticket").forEach(g=>{g.addEventListener("click",()=>{const R=g.getAttribute("data-id");confirm("Are you sure you want to delete this feedback entry?")&&(Ot(R),k("Feedback record deleted."),a())})});const h=e.querySelector("#exportCsvBtn");h&&h.addEventListener("click",p)}function p(){const u=oe();if(u.length===0){k("No feedback to export.");return}const f=["ID","Date","Customer Name","Phone","Email","Rating","Category","Status","Feedback Message","Internal Notes"],C=u.map(h=>[h.id,new Date(h.timestamp).toLocaleString(),`"${(h.customerName||"").replace(/"/g,'""')}"`,`"${(h.phone||"").replace(/"/g,'""')}"`,`"${(h.email||"").replace(/"/g,'""')}"`,h.rating,`"${(h.category||"").replace(/"/g,'""')}"`,h.status,`"${(h.message||"").replace(/"/g,'""')}"`,`"${(h.resolutionNotes||"").replace(/"/g,'""')}"`]),b="data:text/csv;charset=utf-8,"+[f.join(","),...C.map(h=>h.join(","))].join(`
`),w=encodeURI(b),m=document.createElement("a");m.setAttribute("href",w),m.setAttribute("download",`${t.businessName.toLowerCase().replace(/\s+/g,"-")}-feedback-${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(m),m.click(),document.body.removeChild(m),k("Feedback exported as CSV! 📊")}function v(u){if(!u)return"VR";const f=u.trim().split(/\s+/);return f.length===1?f[0].substring(0,2).toUpperCase():(f[0][0]+f[f.length-1][0]).toUpperCase()}function k(u){let f=document.getElementById("globalAppToast");f||(f=document.createElement("div"),f.id="globalAppToast",f.className="app-toast",document.body.appendChild(f)),f.textContent=u,f.classList.add("visible"),setTimeout(()=>{f.classList.remove("visible")},2500)}function y(u){return u?String(u).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}a()}function qn(e){const t=Z(),n=We(),i=oe(),r=Object.values(n.ratingsBreakdown).reduce((w,m)=>w+m,0)||1,a=n.ratingsBreakdown[5]||0,s=n.ratingsBreakdown[4]||0,c=n.ratingsBreakdown[3]||0,o=n.ratingsBreakdown[2]||0,p=n.ratingsBreakdown[1]||0,v=n.redirectedToGoogle||a+s,k=n.internalFeedbackSubmitted||c+o+p,y=Math.round(v/(v+k||1)*100),u=i.length;function f(){e.innerHTML=`
      <div class="analytics-view-wrap">
        <div class="analytics-header">
          <div>
            <h2 class="section-title">Review Funnel & Reputation Analytics</h2>
            <p class="section-subtitle">
              Live metrics tracking customer engagement, Google review conversions, and intercepted negative feedback.
            </p>
          </div>
          <span class="live-pulse-badge">
            <span class="pulse-dot"></span> Live Syncing
          </span>
        </div>

        <!-- Metric Cards Grid -->
        <div class="metrics-kpi-grid">
          <div class="kpi-card">
            <div class="kpi-icon-box bg-blue">📱</div>
            <div class="kpi-meta">
              <span class="kpi-label">Total QR Scans</span>
              <strong class="kpi-val">${n.totalScans}</strong>
              <span class="kpi-trend trend-up">↑ 18% this month</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-icon-box bg-amber">⭐</div>
            <div class="kpi-meta">
              <span class="kpi-label">Redirected to Google</span>
              <strong class="kpi-val">${v}</strong>
              <span class="kpi-trend trend-up">${y}% 5-Star Conversion</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-icon-box bg-emerald">🛡️</div>
            <div class="kpi-meta">
              <span class="kpi-label">Bad Reviews Prevented</span>
              <strong class="kpi-val">${u}</strong>
              <span class="kpi-trend trend-shield">100% Intercepted Privately</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-icon-box bg-purple">⚡</div>
            <div class="kpi-meta">
              <span class="kpi-label">Protected Google Rating</span>
              <strong class="kpi-val">4.9 / 5.0</strong>
              <span class="kpi-trend">Google Verified</span>
            </div>
          </div>
        </div>

        <div class="analytics-charts-grid">
          <!-- Rating Breakdown Chart -->
          <div class="chart-card">
            <h3 class="chart-title">Customer Satisfaction Breakdown</h3>
            <p class="chart-subtitle">Direct breakdown from all interactive scan responses</p>

            <div class="rating-bars-list">
              ${C(5,a,r,"Outstanding","#10b981")}
              ${C(4,s,r,"Very Good","#3b82f6")}
              ${C(3,c,r,"Average (Private Gate)","#f59e0b")}
              ${C(2,o,r,"Poor (Private Gate)","#f97316")}
              ${C(1,p,r,"Terrible (Private Gate)","#ef4444")}
            </div>

            <div class="chart-footer-note">
              <span>Threshold set at: <strong>${t.ratingThreshold} Stars and above to Google</strong></span>
            </div>
          </div>

          <!-- Funnel Visualization Card -->
          <div class="chart-card">
            <h3 class="chart-title">Review Funnel Architecture</h3>
            <p class="chart-subtitle">Direct QR to Google Reviews 5-Star Conversion Machine</p>

            <div class="funnel-pipeline">
              <div class="funnel-step">
                <div class="step-badge">1. Mobile Scan</div>
                <div class="step-content">
                  <strong>Customer Scans QR Code Stand</strong>
                  <span>Opens branded, mobile-first review page</span>
                </div>
              </div>

              <div class="funnel-step mt-2">
                <div class="step-badge">2. Rotating Pool</div>
                <div class="step-content">
                  <strong>Unique Pre-Written 5-Star Review</strong>
                  <span>Tailored to their electrical service type (or shuffled)</span>
                </div>
              </div>

              <div class="funnel-step mt-2">
                <div class="step-badge">3. One-Tap Action</div>
                <div class="step-content">
                  <strong>Copy & Redirect to Google</strong>
                  <span>Text is auto-copied and Google Maps review dialog opens</span>
                </div>
              </div>

              <div class="funnel-step mt-2">
                <div class="step-badge">4. Submission</div>
                <div class="step-content">
                  <strong>Customer Pastes & Taps Post</strong>
                  <span>5-Star Google rating published in under 15 seconds!</span>
                </div>
              </div>
            </div>

            <div class="funnel-summary-badge mt-3">
              <span>✨ Result: <strong>${n.redirectedToGoogle||0} Customers</strong> successfully redirected to your Google Maps review page!</span>
            </div>
          </div>
        </div>

        <!-- Recent Activity Feed -->
        <div class="recent-activity-card">
          <h3 class="chart-title">Recent Event History</h3>
          <div class="activity-timeline">
            ${b(n.history)}
          </div>
        </div>
      </div>
    `}function C(w,m,h,g,R){const T=Math.round(m/h*100);return`
      <div class="bar-row">
        <div class="bar-label-group">
          <span class="stars-label">${w} ⭐</span>
          <span class="sub-label">${g}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${T}%; background-color: ${R};"></div>
        </div>
        <div class="bar-stats">
          <strong>${m}</strong>
          <span>(${T}%)</span>
        </div>
      </div>
    `}function b(w){return!w||w.length===0?'<p class="text-muted">No recent activity recorded yet.</p>':w.slice(0,6).map(m=>{const h=m.type==="google_redirect",g=m.type==="scan",R=new Date(m.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
        <div class="activity-item">
          <div class="activity-icon ${h?"icon-green":g?"icon-blue":"icon-amber"}">
            ${h?"⭐":g?"📱":"⚠️"}
          </div>
          <div class="activity-info">
            <span class="activity-title">
              ${h?`Customer redirected to <strong>Google Review (${m.rating||5} Stars)</strong>`:g?"QR Code scanned by customer":"Private customer complaint received"}
            </span>
            <span class="activity-time">${R}</span>
          </div>
        </div>
      `}).join("")}f()}function Dn(e){let t=Z();function n(){const c=Qe(t.reviewPool);e.innerHTML=`
      <div class="settings-view-wrap">
        <div class="settings-header">
          <div>
            <h2 class="section-title">Business Profile & Review Funnel Settings</h2>
            <p class="section-subtitle">
              Update your business contact info, Google review link, and customize the rotating pre-written review pool.
            </p>
          </div>
          <button type="button" class="btn btn-outline-danger" id="resetDataBtn">
            Reset to Default VR Electric Demo Data
          </button>
        </div>

        <form id="businessConfigForm" class="settings-form-layout">
          <!-- Business Profile Card -->
          <div class="settings-card">
            <h3 class="panel-heading">1. Business Information</h3>
            <p class="panel-desc">These details appear on the customer QR review page, branded header, and printable stands.</p>

            <div class="form-row-2">
              <div class="form-group">
                <label for="cfgBizName" class="form-label">Business Name <span class="required">*</span></label>
                <input type="text" id="cfgBizName" class="form-control" value="${s(t.businessName)}" required />
              </div>

              <div class="form-group">
                <label for="cfgIndustry" class="form-label">Industry / Specialization</label>
                <input type="text" id="cfgIndustry" class="form-control" value="${s(t.industry)}" />
              </div>
            </div>

            <div class="form-group">
              <label for="cfgTagline" class="form-label">Tagline / Subtitle</label>
              <input type="text" id="cfgTagline" class="form-control" value="${s(t.tagline)}" />
            </div>

            <div class="form-row-3">
              <div class="form-group">
                <label for="cfgPhone" class="form-label">Calling Phone <span class="required">*</span></label>
                <input type="tel" id="cfgPhone" class="form-control" value="${s(t.phone)}" required />
              </div>

              <div class="form-group">
                <label for="cfgWhatsapp" class="form-label">WhatsApp Number <span class="required">*</span></label>
                <input type="tel" id="cfgWhatsapp" class="form-control" value="${s(t.whatsapp)}" placeholder="+91..." required />
              </div>

              <div class="form-group">
                <label for="cfgEmail" class="form-label">Support Email</label>
                <input type="email" id="cfgEmail" class="form-control" value="${s(t.email)}" />
              </div>
            </div>

            <div class="form-group">
              <label for="cfgAddress" class="form-label">Shop / Office Address</label>
              <input type="text" id="cfgAddress" class="form-control" value="${s(t.address)}" />
            </div>
          </div>

          <!-- Review Routing / Google Setup -->
          <div class="settings-card">
            <h3 class="panel-heading">2. Official Google Review Link</h3>
            <p class="panel-desc">Where happy customers are directed when they tap "Post Review on Google".</p>

            <div class="form-group">
              <label for="cfgGoogleUrl" class="form-label">
                Google Review URL <span class="required">*</span>
              </label>
              <div class="input-with-button-row">
                <input 
                  type="url" 
                  id="cfgGoogleUrl" 
                  class="form-control font-mono" 
                  value="${s(t.googleReviewUrl)}" 
                  placeholder="https://search.google.com/local/writereview?placeid=..." 
                  required 
                />
                <button type="button" class="btn btn-outline" id="testGoogleLinkBtn" title="Test this link in a new tab">
                  Test Link ↗
                </button>
              </div>
              <small class="helper-text">
                💡 <em>Tip:</em> In Google Business Profile dashboard, click <strong>"Ask for reviews"</strong> and copy your short link (e.g. <code>https://g.page/r/.../review</code>).
              </small>
            </div>

            <div class="form-group">
              <label class="form-label">Direct QR Review Funnel Architecture</label>
              <div class="info-banner-light">
                <span>⚡ <strong>How it works:</strong> Customer scans your counter QR stand → Sees an authentic pre-written 5-star review tailored to their service → One tap copies it & opens your Google Review page → Customer long-presses to paste and submits!</span>
              </div>
            </div>
          </div>

          <!-- Pre-Written Review Pool -->
          <div class="settings-card">
            <div class="panel-header-split">
              <div>
                <h3 class="panel-heading">3. Rotating Pre-Written Reviews Pool (${c.length} Active)</h3>
                <p class="panel-desc">Each customer scan picks a unique review from this pool so every review on your Google profile looks authentic and written by a real client.</p>
              </div>
              <div class="panel-header-actions">
                <button type="button" class="btn btn-sm btn-outline" id="toggleBulkImportBtn">
                  ⚡ Bulk Add Reviews
                </button>
              </div>
            </div>

            <!-- Bulk Import Panel (collapsible) -->
            <div class="bulk-import-panel hidden" id="bulkImportPanel">
              <label class="form-label">Paste multiple reviews below (separate each review with a blank line):</label>
              <textarea class="form-control font-mono" id="bulkImportTextarea" rows="5" placeholder="Review 1: Excellent service by VR Electric...&#10;&#10;Review 2: Called VR Electric for house wiring..."></textarea>
              <div class="bulk-import-actions mt-2">
                <button type="button" class="btn btn-sm btn-primary" id="applyBulkImportBtn">Import to Pool</button>
                <button type="button" class="btn btn-sm btn-ghost" id="cancelBulkImportBtn">Cancel</button>
              </div>
            </div>

            <div class="review-pool-editor" id="reviewPoolEditor">
              ${c.map((o,p)=>`
                <div class="review-edit-row" data-index="${p}">
                  <div class="review-edit-header">
                    <span class="review-edit-num">Review #${p+1}</span>
                    <div class="review-row-meta">
                      <select class="form-control form-control-sm review-category-select">
                        <option value="General Electrical" ${o.category==="General Electrical"?"selected":""}>General Electrical</option>
                        <option value="House Wiring" ${o.category==="House Wiring"?"selected":""}>House Wiring</option>
                        <option value="Emergency & Repair" ${o.category==="Emergency & Repair"?"selected":""}>Emergency & Repair</option>
                        <option value="Commercial & Office" ${o.category==="Commercial & Office"?"selected":""}>Commercial & Office</option>
                        <option value="Smart Home" ${o.category==="Smart Home"?"selected":""}>Smart Home</option>
                        <option value="EV & Green Energy" ${o.category==="EV & Green Energy"?"selected":""}>EV & Green Energy</option>
                      </select>
                      <button type="button" class="btn-remove-tag" title="Delete review">✕</button>
                    </div>
                  </div>
                  <textarea class="form-control review-pool-textarea" rows="3" placeholder="Write a unique 5-star review...">${s(o.text)}</textarea>
                </div>
              `).join("")}
            </div>

            <button type="button" class="btn btn-sm btn-outline mt-3" id="addNewReviewBtn">
              + Add Another Single Review
            </button>
          </div>

          <div class="settings-actions-footer">
            <button type="submit" class="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
              </svg>
              Save All Settings
            </button>
            <span class="save-status-msg" id="saveStatusMsg"></span>
          </div>
        </form>
      </div>
    `,i()}function i(){const c=e.querySelector("#testGoogleLinkBtn");c&&c.addEventListener("click",()=>{const b=e.querySelector("#cfgGoogleUrl"),w=b?b.value.trim():"";w?window.open(w,"_blank","noopener,noreferrer"):a("Please enter a Google Review URL first.")});const o=e.querySelector("#toggleBulkImportBtn"),p=e.querySelector("#bulkImportPanel"),v=e.querySelector("#cancelBulkImportBtn"),k=e.querySelector("#applyBulkImportBtn");o&&p&&o.addEventListener("click",()=>{p.classList.toggle("hidden")}),v&&p&&v.addEventListener("click",()=>{p.classList.add("hidden")}),k&&p&&k.addEventListener("click",()=>{const b=e.querySelector("#bulkImportTextarea"),w=b?b.value.trim():"";if(!w)return;const m=w.split(/\n\s*\n/).map(h=>h.trim()).filter(Boolean);if(m.length>0){const h=e.querySelector("#reviewPoolEditor");m.forEach(g=>{const R=h.querySelectorAll(".review-edit-row").length,T=document.createElement("div");T.className="review-edit-row",T.setAttribute("data-index",R),T.innerHTML=`
              <div class="review-edit-header">
                <span class="review-edit-num">Review #${R+1}</span>
                <div class="review-row-meta">
                  <select class="form-control form-control-sm review-category-select">
                    <option value="General Electrical">General Electrical</option>
                    <option value="House Wiring">House Wiring</option>
                    <option value="Emergency & Repair">Emergency & Repair</option>
                    <option value="Commercial & Office">Commercial & Office</option>
                    <option value="Smart Home">Smart Home</option>
                    <option value="EV & Green Energy">EV & Green Energy</option>
                  </select>
                  <button type="button" class="btn-remove-tag" title="Delete review">✕</button>
                </div>
              </div>
              <textarea class="form-control review-pool-textarea" rows="3">${s(g)}</textarea>
            `,h.appendChild(T),r(T)}),b.value="",p.classList.add("hidden"),a(`Imported ${m.length} new reviews! Remember to click Save.`)}});const y=e.querySelector("#addNewReviewBtn");y&&y.addEventListener("click",()=>{const b=e.querySelector("#reviewPoolEditor"),w=b.querySelectorAll(".review-edit-row").length,m=document.createElement("div");m.className="review-edit-row",m.setAttribute("data-index",w),m.innerHTML=`
          <div class="review-edit-header">
            <span class="review-edit-num">Review #${w+1}</span>
            <div class="review-row-meta">
              <select class="form-control form-control-sm review-category-select">
                <option value="General Electrical">General Electrical</option>
                <option value="House Wiring">House Wiring</option>
                <option value="Emergency & Repair">Emergency & Repair</option>
                <option value="Commercial & Office">Commercial & Office</option>
                <option value="Smart Home">Smart Home</option>
                <option value="EV & Green Energy">EV & Green Energy</option>
              </select>
              <button type="button" class="btn-remove-tag" title="Delete review">✕</button>
            </div>
          </div>
          <textarea class="form-control review-pool-textarea" rows="3" placeholder="Write a unique 5-star review...">Great experience with VR Electric! The team arrived on time, completed the electrical work safely, and charged reasonable rates. Highly recommended!</textarea>
        `,b.appendChild(m),r(m)}),e.querySelectorAll(".review-edit-row").forEach(b=>r(b));const f=e.querySelector("#businessConfigForm");f&&f.addEventListener("submit",b=>{b.preventDefault();const w=e.querySelectorAll(".review-edit-row"),m=[];w.forEach((R,T)=>{const A=R.querySelector(".review-pool-textarea"),S=R.querySelector(".review-category-select"),L=A?A.value.trim():"",F=S?S.value:"General Electrical";L&&m.push({id:`rev-${T}`,text:L,category:F})});const h={businessName:e.querySelector("#cfgBizName").value.trim(),industry:e.querySelector("#cfgIndustry").value.trim(),tagline:e.querySelector("#cfgTagline").value.trim(),phone:e.querySelector("#cfgPhone").value.trim(),whatsapp:e.querySelector("#cfgWhatsapp").value.trim(),email:e.querySelector("#cfgEmail").value.trim(),address:e.querySelector("#cfgAddress").value.trim(),googleReviewUrl:e.querySelector("#cfgGoogleUrl").value.trim(),reviewPool:m.length>0?m:t.reviewPool};Ht(h),t=h;const g=e.querySelector("#saveStatusMsg");g&&(g.textContent="✓ Saved successfully! Customer portal & QR codes updated.",g.style.color="#10b981",setTimeout(()=>{g.textContent=""},3500)),a("Settings saved successfully!")});const C=e.querySelector("#resetDataBtn");C&&C.addEventListener("click",()=>{confirm("Reset all business info, feedback tickets, and stats back to default VR Electric sample data?")&&(Ut(),t=Z(),n(),a("Data reset to default."))})}function r(c){const o=c.querySelector(".btn-remove-tag");o&&o.addEventListener("click",()=>{c.remove()})}function a(c){let o=document.getElementById("globalAppToast");o||(o=document.createElement("div"),o.id="globalAppToast",o.className="app-toast",document.body.appendChild(o)),o.textContent=c,o.classList.add("visible"),setTimeout(()=>{o.classList.remove("visible")},2500)}function s(c){return c?String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}n()}const Mt=document.getElementById("app");let ae="simulator";function Tt(){return new URLSearchParams(window.location.search).get("mode")==="review"||window.location.hash==="#review"}function Hn(){window.addEventListener("popstate",He),_t(()=>{Tt()||He()}),He()}function He(){Tt()?On():Vn()}function On(){Z(),Mt.innerHTML=`
    <div class="standalone-customer-container">
      <div id="customerPortalMount"></div>
      <div class="customer-bottom-utility">
        <a href="?mode=admin" class="admin-discreet-link" title="Open Business Admin Dashboard">
          ⚙️ Business Owner Hub
        </a>
      </div>
    </div>
  `;const e=document.getElementById("customerPortalMount");dt(e,{isSimulated:!1})}function Vn(){const e=Z(),n=oe().filter(i=>i.status==="New").length;Mt.innerHTML=`
    <!-- Top Bar Navigation -->
    <header class="app-topbar">
      <div class="topbar-inner">
        <div class="brand-ident">
          <img src="/logo.svg" alt="${Oe(e.businessName)}" class="header-logo" />
          <div class="brand-text-block">
            <div class="brand-title-wrap">
              <span class="brand-name">${Oe(e.businessName)}</span>
              <span class="system-badge">QR Review Funnel</span>
            </div>
            <span class="brand-sub">${Oe(e.tagline)}</span>
          </div>
        </div>

        <nav class="nav-tabs-bar" role="tablist">
          <button type="button" class="nav-tab-item ${ae==="simulator"?"active":""}" data-tab="simulator">
            <span>📱</span> Customer Simulator
          </button>
          <button type="button" class="nav-tab-item ${ae==="qr-studio"?"active":""}" data-tab="qr-studio">
            <span>📐</span> QR & Print Studio
          </button>
          <button type="button" class="nav-tab-item ${ae==="inbox"?"active":""}" data-tab="inbox">
            <span>📥</span> Feedback CRM
            ${n>0?`<span class="tab-badge">${n}</span>`:""}
          </button>
          <button type="button" class="nav-tab-item ${ae==="analytics"?"active":""}" data-tab="analytics">
            <span>📊</span> Analytics
          </button>
          <button type="button" class="nav-tab-item ${ae==="settings"?"active":""}" data-tab="settings">
            <span>⚙️</span> Settings
          </button>
        </nav>

        <div class="topbar-actions">
          <a href="?mode=review" target="_blank" class="btn btn-outline btn-sm" title="Open live mobile customer URL">
            ↗ Live Customer View
          </a>
        </div>
      </div>
    </header>

    <!-- Main View Mount -->
    <main class="app-main-content">
      <div id="tabContentMount"></div>
    </main>
  `,Gn(),At()}function At(){const e=document.getElementById("tabContentMount");if(e)switch(ae){case"simulator":ot(e);break;case"qr-studio":$n(e);break;case"inbox":Fn(e);break;case"analytics":qn(e);break;case"settings":Dn(e);break;default:ot(e)}}function Gn(){const e=document.querySelectorAll(".nav-tab-item");e.forEach(t=>{t.addEventListener("click",()=>{ae=t.getAttribute("data-tab"),e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),At()})})}function Oe(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}Hn();
