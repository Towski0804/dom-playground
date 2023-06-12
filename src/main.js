const div = dom.create("<div>new div</div>");
const test = dom.find("#test");
console.log(div);

dom.after(test, div);

const div3 = dom.create("<div id='parent'></div>");
dom.wrap(test, div3);
// nodes = dom.empty(window.empty);
// console.log(nodes);

// manipulation test
dom.attr(test, "title", "towski");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);

dom.style(test, { border: "1px solid red", color: "yellow" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "2px solid black");

dom.class.add(test, "yellow");
console.log(dom.class.has(test, "yellow"));
dom.class.remove(test, "yellow");
console.log(dom.class.has(test, "yellow"));

const fn = () => {
  console.log("嗨害嗨");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
console.log(testDiv);

console.log(dom.siblings(dom.find("#e2")[0]));
console.log(dom.next(dom.find("#e2")[0]));
console.log(dom.previous(dom.find("#e2")[0]));

const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));

console.log(dom.index(dom.find("#t4")[0]));
