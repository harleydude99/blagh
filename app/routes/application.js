import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post')
    /*
    return  [
      {title: 'First post', body: '1st body'},
      {title: 'Second post', body: '2nd body'},
      {title: 'Third post', body: '3rd body'}
    ]
    */
  }
});
