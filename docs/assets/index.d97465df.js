(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();let h=0,i;const s=4,d=4;document.addEventListener("DOMContentLoaded",()=>{console.log("Calling loadGame"),y()});function y(){let t=document.querySelector("#gameGrid");document.querySelector("#score"),i=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(let e=0;e<s;e++)for(let r=0;r<d;r++){let n=document.createElement("div");n.id=`${e}-${r}`;let o=i[e][r];f(n,o),t.append(n)}u(),u(),console.log("After calling generate 2 times")}function f(t,e){t.innerText="",t.classList.value="",t.classList.add("gridElement"),e>0&&(t.innerText=`${e}`,t.classList.add(`num${e}`))}function u(){if(!L())return;let t=!1;for(;!t;){let e=Math.floor(Math.random()*s),r=Math.floor(Math.random()*d);if(i[e][r]==0){i[e][r]=2;let n=document.getElementById(`${e}-${r}`);n.innerText="2",n.classList.add("num2"),t=!0}}}function L(){for(let t=0;t<s;t++)for(let e=0;e<d;e++)if(i[t][e]===0)return!0;return!1}document.addEventListener("keyup",t=>{const r={ArrowLeft:()=>{m("left")},ArrowRight:()=>{m("right")},ArrowUp:()=>{g("up")},ArrowDown:()=>{g("down")}}[t.code];r!==void 0&&(r(),u()),scoreBoard.innerText=h});function a(t){return t.filter(e=>e)}function p(t){t=a(t);for(let e=0;e<t.length-1;e++)t[e]==t[e+1]&&(t[e]*=2,t[e+1]=0,h+=t[e]);for(t=a(t);t.length<4;)t.push(0);return t}function m(t){for(let e=0;e<s;e++){let r=i[e];t==="right"&&r.reverse(),r=p(r),i[e]=t==="right"?r.reverse():r;for(let n=0;n<d;n++){let o=document.getElementById(`${e}-${n}`),l=i[e][n];f(o,l)}}}function g(t){for(let e=0;e<d;e++){let r=[i[0][e],i[1][e],i[2][e],i[3][e]];t==="down"&&r.reverse(),r=p(r),t==="down"&&r.reverse();for(let n=0;n<s;n++){i[n][e]=r[n];let o=document.getElementById(`${n}-${e}`),l=i[n][e];f(o,l)}}}
