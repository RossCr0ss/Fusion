import Home from '../resources/pages/Home.vue'
import Profile from '../resources/pages/Profile.vue'
import Tariff from '../resources/pages/Tariff.vue'
import Documents from '../resources/pages/Documents.vue'
import Wallet from '../resources/pages/Wallet.vue'
import Withdraw from '../resources/pages/Withdraw.vue'
import Login from '../resources/pages/Login.vue'
import Register from '../resources/pages/Register.vue'
import GenealogyTree from '../resources/pages/GenealogyTree.vue'
import SessionStats from '../resources/pages/SessionStats.vue'
import Promotion from '../resources/pages/Promotion.vue'
import OperationHistory from '../resources/pages/OperationHistory.vue'
import Partners from '../resources/pages/Partners.vue'
import Products from '../resources/pages/Products.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/tariff',
        name: 'Tariff',
        component: Tariff
    },
    {
        path: '/documents',
        name: 'Documents',
        component: Documents
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: Wallet
    },
    {
        path: '/withdraw',
        name: 'Withdraw',
        component: Withdraw
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/genealogy',
        name: 'GenealogyTree',
        component: GenealogyTree
    },
    {
        path: '/session',
        name: 'SessionStats',
        component: SessionStats
    },
    {
        path: '/promotion',
        name: 'Promotion',
        component: Promotion
    },
    {
        path: '/history',
        name: 'OperationHistory',
        component: OperationHistory
    },
    {
        path: '/partners',
        name: 'Partners',
        component: Partners
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
]

export default routes;