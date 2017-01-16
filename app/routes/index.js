import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('post');
  },
  actions: {
    createPost: function (model) {
      let post = this.store.createRecord('post', {
        title: model.title,
        content: model.content,
        author: model.author,
        createdDate: new Date()
      });
      post.save();
    }
  }
});
