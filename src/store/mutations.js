// 直接更新state的多个方法的对象
import {
  RECEIVE_SWIPER,
  RECEIVE_CATEGORY,
  RECEIVE_RECOMMEND,
  RECEIVE_AREA,
  RECEIVE_ENTERPRISE,
  RECEIVE_PRODUCT,
  RECEIVE_USERINFO,
  RET_USERINFO,
  RECEIVE_SHOPCART,
  INCREMENT_SHOP_COUNT,
  DECREMENT_SHOP_COUNT,
  CLEAR_SHOPCART,
  RECEIVE_ADDRESS,
  RECEIVE_ORDER,
  RECEIVE_ALLORDER,
  RECEIVE_ALLUSER,
  RECEIVE_ALLUSERS,
  RECEIVE_ALLADDRESS
} from './mutations-type'
// import Vue from 'vue'

export default {
  [RECEIVE_SWIPER] (state, { swiper }) {
    state.swiper = swiper
  },
  [RECEIVE_CATEGORY] (state, { category }) {
    state.category = category
  },
  [RECEIVE_RECOMMEND] (state, { recommend }) {
    state.recommend = recommend
  },
  [RECEIVE_AREA] (state, { area }) {
    state.area = area
  },
  [RECEIVE_ENTERPRISE] (state, { enterprise }) {
    state.enterprise = enterprise
  },
  [RECEIVE_PRODUCT] (state, { product }) {
    state.product = product
  },
  [RECEIVE_USERINFO] (state, { userinfo }) {
    state.userinfo = userinfo
  },
  [RET_USERINFO] (state) {
    state.userinfo = {}
    state.shopcart = []
  },
  [RECEIVE_SHOPCART] (state, { shopcart }) {
    state.shopcart = shopcart
  },
  [INCREMENT_SHOP_COUNT] (state, { shopindex }) {
    state.shopcart[shopindex].count += 1
  },
  [DECREMENT_SHOP_COUNT] (state, { shopindex }) {
    if (state.shopcart[shopindex].count > 0) {
      state.shopcart[shopindex].count--
    }
  },
  [CLEAR_SHOPCART] (state) {
    for (let i = state.shopcart.length - 1; i >= 0; i--) {
      if (state.shopcart[i].check) {
        state.shopcart.splice(i, 1)
      }
    }
  },
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_ORDER] (state, { order }) {
    state.order = order
  },
  [RECEIVE_ALLORDER] (state, { allorder }) {
    state.allorder = allorder
  },
  [RECEIVE_ALLUSER] (state, { alluser }) {
    state.alluser = alluser
  },
  [RECEIVE_ALLUSERS] (state, { allusers }) {
    state.allusers = allusers
  },
  [RECEIVE_ALLADDRESS] (state, { alladdress }) {
    state.alladdress = alladdress
  }
}
