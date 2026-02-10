let template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: auto;
    }
  </style>

  <img
    src="https://cdn.jsdelivr.net/gh/parth6020/Parrrth01@main/workingif.gif"
    alt="Car Animation"
  />
`;

class CarStayWidget extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));
    }
  }

  connectedCallback() {
    console.log("CarStayWidget loaded successfully");
  }
}

if (!customElements.get("car-stay-widget")) {
  customElements.define("car-stay-widget", CarStayWidget);
}
