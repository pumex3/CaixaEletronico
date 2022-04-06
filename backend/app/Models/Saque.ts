import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Conta from '../Models/Conta'

export default class Saque extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public saldo: any

  @column()
  public nome: string

  @column()
  public id_conta: number

  @belongsTo(() => Conta, { foreignKey: 'id_conta' })
  public conta_id: BelongsTo<typeof Conta>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
