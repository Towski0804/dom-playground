window.dom={create(e){let t=document.createElement("template");return t.innerHTML=e.trim(),t.children[0]},after(e,t){e.parentNode.insertBefore(t,e.nextSibling)},before(e,t){e.parentNode.insertBefore(t,e)},append(e,t){e.appendChild(t)},wrap(e,t){dom.before(e,t),dom.append(t,e)},remove:e=>(e.parentNode.removeChild(e),e),empty(e){let{childNodes:t}=e,n=[],r=e.firstChild;for(;r;)n.push(dom.remove(r)),r=e.firstChild;return n},attr(e,t,n){if(3==arguments.length)e.setAttribute(t,n);else if(2==arguments.length)return e.getAttribute(t)},text(e,t){if(2==arguments.length)"innerText"in e?e.innerText=t:e.textContent=t;else if(1==arguments.length)return"innerText"in e?e.innerText:e.textContent},html(e,t){if(2==arguments.length)e.innerHTML=t;else if(1==arguments.length)return e.innerHTML},style(e,t,n){if(3==arguments.length)e.style[t]=n;else if(2==arguments.length){if("string"==typeof t)return e.style[t];if(t instanceof Object)for(let n in t)e.style[n]=t[n]}},class:{add(e,t){e.classList.add(t)},remove(e,t){e.classList.remove(t)},has:(e,t)=>e.classList.contains(t)},on(e,t,n){e.addEventListener(t,n)},off(e,t,n){e.removeEventListener(t,n)},find:(e,t)=>(t||document).querySelectorAll(e),parent:e=>e.parentNode,children:e=>e.children,siblings:e=>Array.from(e.parentNode.children).filter(t=>t!==e),next(e){let t=e.nextSibling;for(;t&&3===t.nodeType;)t=t.nextSibling;return t},previous(e){let t=e.previousSibling;for(;t&&3===t.nodeType;)t=t.previousSibling;return t},each(e,t){for(let n=0;n<e.length;n++)t.call(null,e[n])},index(e){let t=dom.children(e.parentNode);for(let n=0;n<t.length;n++)if(t[n]===e)return n}};
//# sourceMappingURL=index.3cd4c9bf.js.map
