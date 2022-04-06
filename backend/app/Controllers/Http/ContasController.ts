import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contas from 'App/Models/Conta'

export default class ContasController {
  public async index({}: HttpContextContract) {
    const data = await Contas.all()
    return data
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(['nome', 'cpf', 'saldo'])

    const contas = await Contas.create(data)

    return contas
  }

  public async show({ params }: HttpContextContract) {
    const data = await Contas.query().select().where({ id: params.id }).preload('saques')

    return data
  }

  public async update({ request, params }: HttpContextContract) {
    const conta = await Contas.findOrFail(params.id)
    const data = request.only(['nome', 'cpf', 'saldo'])

    conta.merge(data)

    await conta.save()

    return conta
  }

  public async destroy({ params }: HttpContextContract) {
    const conta = await Contas.findOrFail(params.id)
    await conta.delete()
    return 'Sucess'
  }
}
