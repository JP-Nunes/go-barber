import { Router } from 'express'

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication'
import AppointmentsController from '../controllers/AppointmentsController'
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController'

const appointmentsRouter = Router()
const appointmentsController = new AppointmentsController()
const providerAppointmentsController = new ProviderAppointmentsController()

appointmentsRouter.use(ensureAuthentication)

appointmentsRouter.post('/', appointmentsController.create)
appointmentsRouter.get('/my-appointments', providerAppointmentsController.index)

export default appointmentsRouter
