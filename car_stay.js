(function() {
    let template = document.createElement("template");
    template.innerHTML = `
        <style>
            :host { display: block; width: 100%; height: 100%; }
            img { width: 100%; height: auto; display: block; }
        </style>
        <div id="car-container">
            <img src="https://cdn.jsdelivr.net/gh/parth6020/Parrrth01@main/workingif.gif" alt="Car Animation">
        </div>
    `;

    class CarStayWidget extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }
        connectedCallback() {
            console.log("Widget initialized: Car will remain on screen.");
        }
    }
    // Note this tag name: car-stay-widget
    customElements.define("car-stay-widget", CarStayWidget);
})();