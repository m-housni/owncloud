import { getCurrentInstance } from 'vue'
import { ClientService } from '../../services'

export const useClientService = (): ClientService => {
  return (getCurrentInstance().proxy as any).$clientService
}
