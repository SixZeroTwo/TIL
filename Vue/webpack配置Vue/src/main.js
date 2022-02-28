const math = require('./js/mathUtils')
console.log(math.add(1, 2));
require('./css/normal.css')

import Vue from 'vue'
import app from './vue/App.vue'
console.log(app);
new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue',
    },
    components: {
        app,
    },
    template: `</app>`,
})