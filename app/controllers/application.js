import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNewPost(){
      this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body')
      }).save();
      this.set('title', '');
      this.set('body', '');
    },
    deletePost(post){
      post.destroyRecord()
    }
  }
});
