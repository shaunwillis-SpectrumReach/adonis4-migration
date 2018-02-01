'use strict';

const AE15m = use('App/Models/AE15m');
const attributes = ['name', 'fullyear', 'division', 'pid', 'managername'];

class AE15mController {

  async index({request, response}) => {
    if (request.input('mine')) {
      const Pid = await request.auth.getUser();

      const ae15m = await AE15m.with('Pid')
        .where({ pid_id: Pid.id })
        .fetch();

      return response.jsonApi('AE15m', ae15m);
    }
    const pid = await AE15m.with('Pid').fetch();

    response.jsonApi('AE15m', pid);
  }

  // async store({request, response}) => {
  //    const input = request.jsonApi.getAttributesSnakeCase(attributes);
  //    const foreignKeys = {
  //      pid_id: request.authUser.id,
  //    };
  //    const pledge = await Pledge.create(Object.assign({}, input, foreignKeys));
  //
  //    response.jsonApi('Pledge', pledge);
  //  }

  async show({request, response}) => {

    const id = request.param('id');
    const pid = await AE15m.with('Pid').where({ id }).firstOrFail();

    response.jsonApi('AE15m', pid);
  }


}

module.exports = AE15mController;
