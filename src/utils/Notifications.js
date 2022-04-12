import { biCheck2 } from '@quasar/extras/bootstrap-icons'
import { Notify } from 'quasar'

const standardSnack = (message, type, icon, pos) => {
  Notify.create({
    message,
    timeout: 2500,
    type,
    color: type,
    icon,
    position: (typeof pos === 'string') ? pos : 'top-right'
  })
}

export const successSnack = (message, position) => {
  standardSnack(message, 'positive', biCheck2, position)
}
