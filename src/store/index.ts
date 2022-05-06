import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
export { useUserStore } from './modules/user'
export { useArticleStore } from './modules/articles'

export default createPinia().use(piniaPluginPersist)