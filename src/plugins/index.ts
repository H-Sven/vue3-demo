import { App } from 'vue'
import { Button } from 'ant-design-vue'
const installPlugins = (app: App<Element>) => {
  app.use(Button)
}
export default installPlugins
