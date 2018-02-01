'use strict'

const Model = use('Model')

class Pid extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to bash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/Pid.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeSave', 'Pid.hashPassword')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this
    .hasMany('App/Models/Token')
  }
}

module.exports = Pid
