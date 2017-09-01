import Ember from 'ember';

export default Ember.Controller.extend({
  generatePubDate(){
    let d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
  },
  genPubDate(){
    var date = new Date();
    var n = date.toDateString();
    var time = date.toLocaleTimeString();
    return n + ' ' + time;
  },
  actions: {
    saveNewPost(){
      let publishDate = this.genPubDate();
      this.store.createRecord('post', {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        pubDateTime: publishDate
      }).save();
      this.set('title', '');
      this.set('author', '');
      this.set('body', '');
    },
    deletePost(post){
      post.destroyRecord()
    }
  }
});
