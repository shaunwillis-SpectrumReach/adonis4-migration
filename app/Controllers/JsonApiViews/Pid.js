const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Pid extends JsonApiView {
  get attributes() {
    return ['pid', 'firstname', 'lastname', 'managername', 'division', 'rank', 'jobtitle', 'region', 'email', 'is_admin', 'is_approved'];
  }

  AE15m() {
    return this.belongsTo('App/Controllers/Http/JsonApiViews/AE15m', {
      included: true,
      excludeRelation: 'Pid'
    });
  }
  //
  // AE1m() {
  //   return this.belongsTo('App/Http/JsonApiViews/AE1m', {
  //     included: true,
  //     excludeRelation: 'pid',
  //   });
  // },
  //

}

module.exports = Pid;
