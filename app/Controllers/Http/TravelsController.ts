import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'

export default class TravelsController {
  public async index({ view }: HttpContextContract) {
    try {
      const response = await axios.get('https://alexishenry.eu/api/travels')
      const travels = response.data // Récupérez les voyages à partir de la réponse
      return view.render('travels', { travels }) // Renvoyez les voyages à la vue
    } catch (error) {
      console.error(error)
    }
  }

  public async show({ view, params }: HttpContextContract) {
    try {
      const response = await axios.get('https://alexishenry.eu/api/travels')
      const travels = response.data // Récupérez les voyages à partir de la réponse
      const travel = travels.find((travel: any) => travel.slug === params.slug) // Récupérez le voyage correspondant au slug
      return view.render('travel', { travel }) // Renvoyez le voyage à la vue
    } catch (error) {
      console.error(error)
    }
  }
}
