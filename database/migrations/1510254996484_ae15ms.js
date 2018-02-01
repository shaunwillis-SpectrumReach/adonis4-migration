'use strict'

const Schema = use('Schema')

class AE15msTableSchema extends Schema {
  up () {
    this.create('ae15ms', (table) => {
      table.increments()
      table.string('fullyear', 80).notNullable();
      table.string('division', 80).notNullable();
      table.string('region', 80).notNullable();
      table.string('rank', 80).notNullable();
      table.string('managername', 80).notNullable();
      table.integer('pid_id').unsigned().references('pids.id');
      table.timestamps()
    })
  }

  down () {
    this.drop('ae15ms')
  }
}

module.exports = AE15msTableSchema
