if(!self.define){let s,e={};const l=(l,p)=>(l=new URL(l+".js",p).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(p,a)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let n={};const r=s=>l(s,i),u={module:{uri:i},exports:n,require:r};e[i]=Promise.all(p.map((s=>u[s]||r(s)))).then((s=>(a(...s),n)))}}define(["./workbox-6cd28afd"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/apple-splash-1125-2436.5aa42f51.jpg",revision:null},{url:"assets/apple-splash-1136-640.14da800c.jpg",revision:null},{url:"assets/apple-splash-1170-2532.b64da12d.jpg",revision:null},{url:"assets/apple-splash-1242-2208.eafcc7b0.jpg",revision:null},{url:"assets/apple-splash-1242-2688.cc89a62b.jpg",revision:null},{url:"assets/apple-splash-1284-2778.3f4dde44.jpg",revision:null},{url:"assets/apple-splash-1334-750.86dc5169.jpg",revision:null},{url:"assets/apple-splash-1536-2048.62850339.jpg",revision:null},{url:"assets/apple-splash-1620-2160.708dfb68.jpg",revision:null},{url:"assets/apple-splash-1668-2224.96e6ee1f.jpg",revision:null},{url:"assets/apple-splash-1668-2388.88890eb8.jpg",revision:null},{url:"assets/apple-splash-1792-828.04f0ca47.jpg",revision:null},{url:"assets/apple-splash-2048-1536.a5697fa0.jpg",revision:null},{url:"assets/apple-splash-2048-2732.54e7d424.jpg",revision:null},{url:"assets/apple-splash-2160-1620.9d70daea.jpg",revision:null},{url:"assets/apple-splash-2208-1242.ca1bd25a.jpg",revision:null},{url:"assets/apple-splash-2224-1668.2d1d18c3.jpg",revision:null},{url:"assets/apple-splash-2388-1668.cc0892fe.jpg",revision:null},{url:"assets/apple-splash-2436-1125.9c592f5e.jpg",revision:null},{url:"assets/apple-splash-2532-1170.e48ae3f4.jpg",revision:null},{url:"assets/apple-splash-2688-1242.064738a2.jpg",revision:null},{url:"assets/apple-splash-2732-2048.ff6b0a09.jpg",revision:null},{url:"assets/apple-splash-2778-1284.fdfd81e3.jpg",revision:null},{url:"assets/apple-splash-640-1136.f065155c.jpg",revision:null},{url:"assets/apple-splash-750-1334.c9ad1e91.jpg",revision:null},{url:"assets/apple-splash-828-1792.2971bcd4.jpg",revision:null},{url:"assets/index.035f57a7.css",revision:null},{url:"assets/index.6b788d6f.js",revision:null},{url:"assets/vendor.ce2593fe.js",revision:null},{url:"index.html",revision:"80eee4fc5f538b4503497bd77e3399bb"},{url:"manifest.webmanifest",revision:"9731bbe7e3e49419acb1f653e029f17d"},{url:"manifest.webmanifest",revision:"9731bbe7e3e49419acb1f653e029f17d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
