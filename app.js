new Vue({
    el: '#taskList',
    data: {
      title: 'To Do List',
      newTaskName: '',
      tasks: [

      ]
    },
    methods: {
      newItem: function() {
        if (!this.newTaskName.trim()) {
          return;
        }
        this.tasks.push({
          name: this.newTaskName
        });
        this.newTaskName = '';
      },
      delItem: function(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      }
    }
  });
  