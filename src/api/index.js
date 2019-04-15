import ajax from './ajax'

const BASE_URL = '/api'
const BASE_URL1 = '/users'

//上传文件
export const uploadfile = (data) => ajax(BASE_URL + '/uploadfile', { data }, 'post')

//1. 获取一次性图形验证
// export const reqCaptcha = () => ajax(BASE_URL + '/captcha')
//5. 注册
export const register = (data) => ajax(BASE_URL1 + '/register', { data }, 'post')
//6. 根据sesion中的userid, 查询对应的user
export const reqInfo = () => ajax(BASE_URL1 + '/userinfo')
//7.退出登录
export const reqLogout = () => ajax(BASE_URL1 + '/logout')
//`
// // 1、根据经纬度获取位置详情<br/>
// export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//1. 获取轮播图
export const reqSwiper = () => ajax(BASE_URL + '/swiper')

//2. 获取category
export const reqCategory = () => ajax(BASE_URL + '/category')

//3. 获取首页推荐
export const reqRecommend = () => ajax(BASE_URL + '/recommend')
//4. 获取地区列表
export const reqArea = () => ajax(BASE_URL + '/area')

//5. 获取企业商品列表
export const reqEnterprise = () => ajax(BASE_URL + '/enterprise')

//6. 获取产品列表
export const reqProduct = () => ajax(BASE_URL + '/product')

//购物车商品加入到session中
export const setShopcar = (data) => ajax(BASE_URL + '/setshopcat', { data }, 'post')

//8. 获取购物车列表
export const getShopcar = () => ajax((BASE_URL + '/getshopcart'))
//清空购物车
export const clearshop = (data) => ajax(BASE_URL + '/clearshopcart', { data }, 'post')

//通过username查询收货地址
export const getaddress = (username) => ajax(BASE_URL + '/getaddress', { username })
//设置收货地址
export const setaddress = (data) => ajax(BASE_URL + '/setaddress', { data }, 'post')
//更新收货地址
export const upaddress = (data) => ajax(BASE_URL + '/upaddress', { data }, 'post')

//选择默认收货地址
export const checkaddress = (index) => ajax(BASE_URL + '/checkaddress', { index }, '[post]')
//根据用户id获取订单
export const getorder = (userid) => ajax(BASE_URL + '/getorder', { userid })
//添加订单
export const setorder = (data) => ajax(BASE_URL + '/setorder', { data }, 'post')

//删除订单
export const delorder = (index) => ajax(BASE_URL + '/delorder', { index })

//根据所有订单
export const getallorder = () => ajax(BASE_URL + '/getallorder')

//根据所有用户
export const getalluser = () => ajax(BASE_URL + '/getalluser')

//根据所有管理员
export const getallusers = () => ajax(BASE_URL + '/getallusers')

//根据所有收货地址
export const getalladdress = () => ajax(BASE_URL + '/getalladdress')
