import { computed } from 'vue'
import { Store } from 'vuex'

interface UserContextOptions {
  store: Store<any>
}

export const useUserContext = ({ store }: UserContextOptions) => {
  return computed(() => {
    return store.getters['runtime/auth/isUserContextReady']
  })
}
