'use strict'

const Hash = use('Hash')

const PidHook = module.exports = {}

/**
 * Hash using password as a hook.
 *
 * @method
 *
 * @param  {Object} pidInstance
 *
 * @return {void}
 */
PidHook.hashPassword = async (pidInstance) => {
  if (pidInstance.password) {
    pidInstance.password = await Hash.make(pidInstance.password)
  }
}
