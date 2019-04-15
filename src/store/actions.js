// 通过mutation间接更新state的多个方法的对象
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
import {
  reqSwiper,
  reqCategory,
  reqRecommend,
  reqArea,
  reqEnterprise,
  reqProduct,
  reqInfo,
  reqLogout,
  getShopcar,
  // setShopcar,
  getaddress,
  getorder,
  getallorder,
  getalluser,
  getallusers,
  getalladdress
} from '../api/index'

export default {
  async reqSwiper ({ commit }) {
    const result = await reqSwiper()
    if (result.code === 0) {
      const swiper = result.data
      commit(RECEIVE_SWIPER, { swiper })
    }
  },
  async reqCategory ({ commit }) {
    const result = await reqCategory()
    if (result.code === 0) {
      const category = result.data
      commit(RECEIVE_CATEGORY, { category })
    }
  },
  async reqRecommend ({ commit }) {
    const reslut = await reqRecommend()
    if (reslut.code === 0) {
      const recommend = reslut.data
      commit(RECEIVE_RECOMMEND, { recommend })
    }
  },
  async reqArea ({ commit }) {
    const reslut = await reqArea()
    if (reslut.code === 0) {
      const area = reslut.data
      commit(RECEIVE_AREA, { area })
    }
  },
  async reqEnterprise ({ commit }) {
    const reslut = await reqEnterprise()
    if (reslut.code === 0) {
      const enterprise = reslut.data
      commit(RECEIVE_ENTERPRISE, { enterprise })
    }
  },
  async reqProduct ({ commit }) {
    const reslut = await reqProduct()
    if (reslut.code === 0) {
      const product = reslut.data
      commit(RECEIVE_PRODUCT, { product })
    }
  },
  async reqInfo ({ commit }) {
    const result = await reqInfo()
    if (result.code === 0) {
      const userinfo = result.data
      commit(RECEIVE_USERINFO, { userinfo })
    }
  },
  async reqLogout ({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RET_USERINFO)
    }
  },
  async getShopcar ({ commit }) {
    const result = await getShopcar()
    if (result.code === 0) {
      let shopcart = result.data
      shopcart.forEach((item) => {
        item.check = true
        item.checkAll = true
        item.allCheck = true
      })
      commit(RECEIVE_SHOPCART, { shopcart })
    }
  },
  setShopCount ({ commit }, { isAdd, shopindex }) {
    if (isAdd) {
      commit(INCREMENT_SHOP_COUNT, { shopindex })
    } else {
      commit(DECREMENT_SHOP_COUNT, { shopindex })
    }
  },
  async clearShopcart ({ commit }) {
    commit(CLEAR_SHOPCART)
  },
  async getaddress ({ commit, state }) {
    const username = await state.userinfo.name
    const data = await getaddress(username)
    if (data.data.length) {
      commit(RECEIVE_ADDRESS, { address: data.data })
    }
  },
  async getorder ({ commit, state }) {
    const userid = state.userinfo._id
    const data = await getorder(userid)
    if (data.code === 0) {
      commit(RECEIVE_ORDER, { order: data.data })
    } else {
      commit(RECEIVE_ORDER, { order: [] })
    }
  },
  async getallorder ({ commit }) {
    const result = await getallorder()
    if (result.code === 0) {
      const allorder = result.data
      commit(RECEIVE_ALLORDER, { allorder })
    }
  },
  async getalluser ({ commit }) {
    const result = await getalluser()
    if (result.code === 0) {
      const alluser = result.data
      commit(RECEIVE_ALLUSER, { alluser })
    }
  },
  async getallusers ({ commit }) {
    const result = await getallusers()
    if (result.code === 0) {
      const allusers = result.data
      commit(RECEIVE_ALLUSERS, { allusers })
    }
  },
  async getalladdress ({ commit }) {
    const result = await getalladdress()
    if (result.code === 0) {
      const alladdress = result.data
      commit(RECEIVE_ALLADDRESS, { alladdress })
    }
  }
}
