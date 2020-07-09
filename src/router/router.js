import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            const position = {}
      
            if (to.hash) {
                position.selector = to.hash,
                position.offset = { x: 0, y: 100 }
        
                if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
                    return position
                }
        
                return false
            }
        }
    } 
});

export default router;
