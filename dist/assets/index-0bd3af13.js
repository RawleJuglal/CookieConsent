(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.getElementById("modal"),r=document.getElementById("modal-close-btn"),d=document.getElementById("consent-form"),c=document.getElementById("modal-text"),m=document.getElementById("decline-btn"),u=document.getElementById("modal-choice-btns");setTimeout(function(){a.style.display="inline"},1500);r.addEventListener("click",()=>{modal.style.display="none"});m.addEventListener("mouseover",()=>{u.classList.toggle("reverse")});d.addEventListener("submit",l=>{l.preventDefault();let o=new FormData(d).get("fullName");c.innerHTML=`<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`,setTimeout(()=>{document.getElementById("uploadText").textContent="Making the sale...",setTimeout(function(){document.getElementById("modal-inner").innerHTML=`
          <h2>Thanks <span class="modal-display-name">${o}</span>, you sucker! </h2>
          <p>We just sold the rights to your eternal soul.</p>
          <div class="idiot-gif">
              <img src="images/pirate.gif">
          </div>
      `,r.disabled=!1},1500)},1500)});
