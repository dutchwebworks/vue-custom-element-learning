const { defineCustomElement } = Vue;

customElements.define(
  "awesome-component",
  defineCustomElement({
    props: {
      name: {
        type: String,
        default: "nameless",
      },
    },
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      add() {
        this.counter++;
      },
    },
    styles: [
      /* css */ `
      :host {
        display: block;
        border-radius: 10px;
        padding: 10px;
        background-color: var(--light-color, #ddd);
      }

      h2 {
        font-family: Times, serif;
        font-size: 1.5rem;
        color: var(--secondary-brand-color, green);
        transition: color 2s;
      }

      button {
        border: 0;
        padding: 5px 10px;
        background-color: var(--secondary-brand-color);
        color: white;
        border-radius: 20px;
        cursor: pointer;
        transition: background-color 2s;
      }
    `,
    ],
    template: /* html */ `
      <div class="block">
        <p><strong>This is a Vue Web Component</strong></p>

          <h2 class="block__heading">h2. Hello, {{ name }}!</h2>

          <div class="block__button">
            <button @click="add">Click me to increment!</button>
            {{counter}}  
          </div>

          <div class="block__body">
            <slot />
          </div>

          <div>
            <slot name="usp">Named slot usp</slot>
          </div>
      </div>
    `,
  })
);