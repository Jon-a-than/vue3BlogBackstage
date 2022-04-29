import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
export { useUserStore } from './modules/user'

export default createPinia().use(piniaPluginPersist)