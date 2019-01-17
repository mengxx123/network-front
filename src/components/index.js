import page from './page'
import result from './result'
import appList from './app-list'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('result', result)
        Vue.component('app-list', appList)
    }
}
