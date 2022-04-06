import Route from '@ioc:Adonis/Core/Route'

//Routes Conta
Route.post('/contas', 'ContasController.create')
Route.get('/contas', 'ContasController.index')
Route.get('/contas/:id', 'ContasController.show')
Route.put('/contas/:id', 'ContasController.update')
Route.delete('/contas/:id', 'ContasController.destroy')

//Routes Saque
Route.post('/saques', 'SaquesController.create')
Route.get('/saques', 'SaquesController.index')
Route.get('/saques/:id', 'SaquesController.show')
