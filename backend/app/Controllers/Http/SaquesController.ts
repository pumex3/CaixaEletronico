import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Saques from '../../Models/Saque'
import Contas from '../../Models/Conta'

export default class SaquesController {
  public async index({}: HttpContextContract) {
    const saque = await Saques.query().select().groupBy('id').preload('conta_id')
    return saque
  }

  public async create({ request }: HttpContextContract) {
    let data = request.only(['saldo', 'id_conta'])
    const saque = await Saques.create(data)

    try {
      const BuscaSaldoAtual = await Contas.query().select('saldo').where({ id: data.id_conta })
      const saldoAtual = BuscaSaldoAtual[0].saldo
      const valorSaque = data.saldo
      const saldoPosSaque = saldoAtual - valorSaque

      const qtdNotas100 = valorSaque / 100
      const qtdNotas50 = valorSaque / 50
      const qtdNotas20 = valorSaque / 20
      const qtdNotas10 = valorSaque / 10

      const AtualizaSaldo = Database.from('contas')
        .where('id', data.id_conta)
        .update({ saldo: saldoPosSaque })
      return (
        await AtualizaSaldo,
        `Saque realizado com sucesso de: ${valorSaque} | Saldo Atual: ${saldoPosSaque}Notas Entregues :
        'Notas de 100: ${qtdNotas100}
        'Notas de 50:  ${qtdNotas50}
        'Notas de 20:  ${qtdNotas20}
        'Notas de 10:  ${qtdNotas10}`
      )
    } catch (error) {
      ;('Erro ao processar')
    }
  }

  public async show({ params }: HttpContextContract) {
    const saque = await Saques.query().select().where({ id: params.id }).preload('conta_id')

    return saque
  }
}
