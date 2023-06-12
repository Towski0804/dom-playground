window.dom = {
  create(string) {
    const container = document.createElement("template");
    container.innerHTML = string.trim();
    return container.children[0];
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, node) {
    parent.appendChild(node);
  },
  wrap(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
  },
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  // deletion
  empty(node) {
    // same function as the new line
    // const childNodes = node.childNodes;
    const { childNodes } = node;
    const array = [];
    let firstChild = node.firstChild;
    while (firstChild) {
      array.push(dom.remove(firstChild));
      firstChild = node.firstChild;
    }
    return array;
  },
  // manipulation
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      //function overloading
      return node.getAttribute(name);
    }
  },
  text(node, string) {
    if (arguments.length === 2) {
      // overloading
      if (`innerText` in node) {
        // this is for ie
        node.innerText = string;
      } else {
        //this is for firfox and chrome
        node.textContent = string;
      }
    } else if (arguments.length === 1) {
      if (`innerText` in node) {
        // this is for ie
        return node.innerText;
      } else {
        //this is for firfox and chrome
        return node.textContent;
      }
    }
  },
  html(node, string) {
    // overloading
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    // dom.style(div, 'color', 'red')
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      // dom.style(div, 'color') check style
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(div, 'color: red') change style
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, event, func) {
    node.addEventListener(event, func);
  },
  off(node, event, func) {
    node.removeEventListener(event, func);
  },
  // search
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      // fn(nodeList[i]);
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    const nodeList = dom.children(node.parentNode);
    for (let i = 0; i < nodeList.length; i++) {
      if (nodeList[i] === node) {
        return i;
      }
    }
  },
};
