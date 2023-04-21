const { defineCustomElement } = Vue;

customElements.define("awesome-component", defineCustomElement({
    props: {
      name: {
        type: String,
        default: "[nameless]",
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
    styles: [`
      :host {
        display: block;
        border-radius: 10px;
        padding: 10px;
        background-color: var(--light-color, #ddd);
      }

      h2 {
        color: var(--secondary-brand-color, green);
      }
    `],
    template: `
      <div class="block">
          <h2 class="block__heading">Hello, {{ name }}!</h2>

          <div class="block__button">
            <button @click="add()">click me!</button>
            {{counter}}  
          </div>

          <div class="block__body">
            <slot />
          </div>

          <footer>
            <slot name="usp">Here come USP's</slot>
          </footer>
      </div>
    `,
  })
);