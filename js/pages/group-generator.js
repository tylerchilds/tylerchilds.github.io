App = {
  views: {
    single: _.template($('#view-single-list').html()),
    single_edit: _.template($('#view-single-list-edit').html()),
    group: _.template($('#view-group').html()),
  },

  forms: {
    groups: $('#form-groups'),
    names: $('#form-names'),
  },

  regions: {
    groups: $('#region-groups'),
    names: $('#region-names'),
  },

  get_names: function(){
    var names = localStorage.getItem("names")
    return names ? JSON.parse(names) : [];
  },

  set_names: function(new_names){
    var names = _.union(this.get_names(), new_names);
    localStorage.setItem("names", JSON.stringify(names));
    this.render_list();
  },

  remove_name: function(name){
    var names = _.difference(this.get_names(), [name]);
    localStorage.setItem("names", JSON.stringify(names));
    this.render_list();
  },

  chunkify: function (a, n, balanced) {
    if (n < 2)
      return [a];

    var len = a.length, out = [], i = 0, size;

    if (len % n === 0) {
      size = Math.floor(len / n);
      while (i < len) {
        out.push(a.slice(i, i += size));
      }
    }

    else if (balanced) {
      while (i < len) {
        size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, i += size));
      }
    }

    else {
      n--;
      size = Math.floor(len / n);
      if (len % size === 0)
          size--;
      while (i < size * n) {
          out.push(a.slice(i, i += size));
      }
      out.push(a.slice(size * n))
    }

    return out;
  },

  generate_groups: function(size){
    var groups = this.chunkify(_.shuffle(this.get_names()), size, true);

    this.render_groups(groups, size);
  },

  render_groups: function(groups, size){
    App.regions.groups.empty();
    var self = this;

    _.each(groups, function(group, i){
      var list_html = "";

      _.each(group, function(name){
        list_html += self.views.single({name: name});
      });

      var group_html = self.views.group({list_html: list_html, index: i+1});

      App.regions.groups.append(group_html);
    });
  },

  render_list: function(){
    var self = this;

    var names_html = "";

    _.each(self.get_names(), function(name){
      names_html += self.views.single_edit({name: name});
    });

    self.regions.names.html(names_html);
  }
};

$(function(){
  App.render_list();
  App.generate_groups(10);

  App.forms.groups.on('submit', function(e){
    e.preventDefault();
    if(_.isEmpty($(e.target).find('#group-size').val())) return;

    var size = parseInt($(e.target).find('#group-size').val().trim());

    App.generate_groups(size);
  });

  App.forms.names.on('submit', function(e){
    e.preventDefault();
    if(_.isEmpty($(e.target).find('#add-names').val())) return;

    var names = $(e.target).find('#add-names').val().split(',');
    App.set_names(names);

    App.forms.names.find('textarea').val('');
  });

  $(document).on('click', '.remove-name', function(e){
    var name = $(e.target).data('name');

    App.remove_name(name);
  })
});