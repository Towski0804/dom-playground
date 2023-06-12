window.dom = {
    create (string) {
        const container = document.createElement("div");
        container.innerHTML = string;
        return container.children[0];
    }
}; // dom.create = function () {};

//# sourceMappingURL=index.755bdb92.js.map
