import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comic-character', 'comic-character-timelined'],
  attributeBindings: ['bgImageStyle:style','bar:foo'],
  bar: true,
  bgImage: null,
  createTimeline(timeStart) {
//    return new AnimationTimeline({ originTime: timeStart });
  },
  bgImageStyle: Ember.computed('bgImage', function() {
    return Ember.String.htmlSafe(`background-image: url(${this.get('bgImage')})`);
  }),
  init() {
    this._super(...arguments);
  },
  startAnimation: Ember.on('didRender', function() {
    let keyFrames = this.get('keyFrames');
    let animationOptions = this.get('animationOptions');
  //  let timeline = this.createTimeline(500);
   // this.set('timeline', timeline);
    this.$()[0].animate(keyFrames, animationOptions);
    console.log("keyframes? " + keyFrames);
  }),
  animationOptions: Ember.computed(function() {
    let options = this.get('options');
    if (options) {
      return options;
    }
    else {
     return {
      duration: 1000,
      iterations: Infinity
     };
     }
  })

});