// AFRAME.registerComponent('clock', {
//     schema: {
//     position: {type: 'vec3', default: {x: -.75, y: 1.75, z: -1.75}},
//     color: {type: 'color', default: '#41f495'},
//     font: {type: 'string', default: 'monoid'}
//     },
//     init: function () {
//     this.clockEl = document.createElement('a-text');
//     this.el.appendChild(this.clockEl); 
//     this.clockEl.setAttribute('position', this.data.position);
//     this.clockEl.setAttribute('color', this.data.color);
//     this.clockEl.setAttribute('font', this.data.font);
//     this.clockEl.setAttribute('value', 'Hello World!');
//     } 
//     });