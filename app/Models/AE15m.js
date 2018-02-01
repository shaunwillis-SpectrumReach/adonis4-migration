
'use strict';

const Lucid = use('Lucid');

class AE15m extends Lucid {


  Pid() {
    return this
    .belongsTo('App/Model/Pid', 'id', 'pid_id')
  }
}

module.exports = AE15m;
