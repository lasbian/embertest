import Ember from 'ember';
import DS from 'ember-data';


export default Ember.Route.extend({
  model: function(){
    return ['child','grownup','teen','oldie','fart','child','grownup','teen','farout!']
  },
});

