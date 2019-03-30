// 包含多个基于state的getter计算属性的对象
export default {
  totalCount (state) {
    let { shopcart } = state
    let newAyy = []
    shopcart.forEach((item) => {
      // if (!item.checkAll) {
      //   item.checke = false
      // }
      if (item.check && item.checkAll) {
        newAyy.push(item)
      }
    })
    return newAyy.reduce((preToatl, shop) => preToatl + shop.count, 0)
  },
  totalPrice (state) {
    let { shopcart } = state
    let newAyy = []
    shopcart.forEach((item) => {
      if (item.check && item.checkAll) {
        newAyy.push(item)
      }
    })
    return newAyy.reduce((preTotal, shop) => preTotal + parseInt(shop.price) * shop.count, 0)
  }
}
