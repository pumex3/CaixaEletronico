import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Saques extends BaseSchema {
  protected tableName = 'saques'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('saldo').notNullable
      table.integer('id_conta').unsigned().references('contas.id').onUpdate('CASCADE')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
