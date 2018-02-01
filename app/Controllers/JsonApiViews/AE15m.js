const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class AE15m extends JsonApiView {
  get attributes() {
    return ['name', 'fullyear', 'division', 'pid', 'region', 'rank', 'managername'];
  }

  pids() {
    return this.hasMany('App/Controllers/Http/JsonApiViews/Pid', {
      included: true,
      excludeRelation: 'AE15m'
    });
  }

}

module.exports = AE15m;
