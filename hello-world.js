// Define the custom element using defineCustomElement
const { defineCustomElement } = Vue;

const HelloWorldElement = defineCustomElement({
  props: ['name'],
  data() {
    return {
        counter: 0
    }
  },
  methods: {
    add() {
        this.counter++;
    }
  },
  template: `
    <div>Hello, {{ name }}! 
        <button @click="add()" >click me!</button> 
        {{counter}}
    </div>
    `
});

customElements.define('hello-world', HelloWorldElement);