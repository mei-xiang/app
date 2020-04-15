import { get, post, put, del } from "../utils/require";

//发送短信验证码     //500系统繁忙请稍后再试    2手机号有误
//手机号    tel
export function telcode(data) {
  return post("/api/login/telcode", data);
}

//短信验证码登录
//{tel,lockcode}  手机号  短信验证码    返回有id
export function loginsms(data) {
  return post("/api/login/loginsms", data);
}

//短信验证码登录
//{tel,lockcode}  手机号  短信验证码    返回无id
export function ajaxsms(data) {
  return post("/api/login/ajaxsms", data);
}

//邀请码注册
//{tel,password,code}  手机号  密码  邀请码
export function anvitationcode(data) {
  return post("/api/login/anvitationcode", data);
}

//用户地址列表
//{u_id}   用户id
export function address(data) {
  return post("/api/user/address", data);
}

//用户地址省id
//{u_id}   用户id
export function province(data) {
  return post("/api/user/province", data);
}

//市id


//区id


//用户删除地址
// {u_id,u_d_id}   用户id,地址id
export function deladdress(data) {
  return post("/api/user/deladdress", data);
}

//个人中心
// {u_id}
export function usercenter(data) {
  return post("/api/user/usercenter", data);
}

//修改个人信息
//{u_id,u_sex,u_name,avatar}  用户id,性别,名称,用户头像
export function useredit(data) {
  return post("/api/user/useredit", data);
}


//非普通用户个人中心
//  {u_id}  用户id
export function uccenter(data) {
  return post("/api/user/uccenter", data);
}

//商户后台
//{u_id}  用户id
export function merccenter(data) {
  return post("/api/user/merccenter", data);
}

//意见反馈
// {u_id,tel,content}   用户id,联系方式,反馈内容
export function feedback(data) {
  return post("/api/user/feedback", data);
}

//账单
//  {u_id,bill_type}    用户id,账单类型（1设备使用 2商品消费 3余额充值 4分红）
export function bill(data) {
  return post("/api/user/bill", data);
}

//我的订单列表
// {u_id,order_type}   用户id,订单类型（0全部 1待付款 2待发货 3待收货 4已完成）
export function Ubill(data) {
  return post("/api/user/bill", data);
}

//商城首页
//  {u_id}  用户id
export function shop(data) {
  return post("/api/shop/index", data);
}

//商城首页瀑布流
// {u_id,page,showpage}  用户id,当前页,单页数
export function waterfall(data) {
  return post("/api/shop/waterfall", data);
}

// 商品详情
// {u_id,s_id}  用户id，商品id
export function detail(data) {
  return post("/api/shop/detail", data);
}

//搜索商品
//{u_id，search}  用户id，商品搜索关键字
export function search(data) {
  return post("/api/shop/search", data);
}

//  加入购物车
//  用户id，商品id，商户号，商户名称，商品banner图，商品名称，商品价格，会员价格，商品数量，快递费
//  {u_id，s_id，m_name，s_banner，s_name，s_name,price,member_price,num,conurier_fee}
export function addcart(data) {
  return post("/api/shop/addcart", data);
}

// 购物车列表
// {u_id}  用户id 
export function cartlist(data) {
  return post("/api/shop/cartlist", data);
}

//单个删除购物车商品
//{u_id,cart_id} 用户id，购物车id 
export function cartdel(data) {
  return post("/api/shop/cartdel", data);
}

//清空购物车
//  {u_id}  用户id
export function cartclear(data) {
  return post("/api/shop/cartclear", data);
}

//确认订单
//用户ID 商品ID 商户号 	商户名称 商品banner图 	商品名称 	商品价格 	会员价格 	商品数量 	快递费 	用户收货地址ID
// {u_id,s_id,m_cid,m_name s_banner s_name price member_price num courier_fee u_d_id}
export function confirmorder(data) {
  return post("/api/shop/confirmorder", data);
}

// 支付
//用户id 订单号 支付金额 支付方式（(1现金支付 2设备积分 3商品积分)） 	支付来源(1微信 2支付宝 3余额)
// {u_id,order_on,pay_amount,pay_way,pay_source}
export function pay(data) {
  return post("/api/shop/pay", data);
}

// 设备首页
// {u_id，ulatitude ，u_longitude}  用户id  经度  纬度
export function device(data) {
  return post("/api/device/index", data);
}

// 用户定位更新
//  {u_id,u_latitude,u_longitude}  用户id  经度  纬度
export function point(data) {
  return post("/api/device/point", data);
}


// 设备列表
//  {u_id,u_latitude,u_longitude,d_m_id}  用户id  经度  纬度  设备店铺id
export function lists(data) {
  return post("/api/device/list", data);
}














// 用户注册接口
export function regist(model) {
  return post("/api/v1/auth/reg", model);
}

// 用户登录接口
export function login(model) {
  return post("/api/v1/auth/login", model);
}

// 获取用户信息
export function info() {
  return get("/api/v1/users/info");
}

// 获取商品信息
export function product(params) {
  return get("/api/v1/products", params);
}

// 根据id获取商品详情
export function getProductById(id) {
  return get(`/api/v1/products/${id}`);
}

// 加入购物车
export function Cart(id, num) {
  return post(`/api/v1/shop_carts`, {
    product: id,
    quantity: num
  });
}

//获取用户购物车数据
export function getCart() {
  return get("/api/v1/shop_carts");
}

//修改购物车数据
export function editCart() {
  return put("api/v1/shop_carts", {
    product: id,
    quantity: num
  });
}

//删除购物车信息
export function delCart(id) {
  //   return del(`/api/v1/shop_carts/${id}`);
  return del("/api/v1/shop_carts/" + id);
}

//  订单提交
export function order(model) {
  return post(`/api/v1/orders`, model);
}

//  获取订单列表
export function orederList(params) {
  return get(`/api/v1/orders`, params);
}

// 根据id 订单获取详情
export function orderid(id) {
  return get(`/api/v1/orders/${id}`);
}

//根据id删除详情
export function delorder(id) {
  return del(`/api/v1/orders/${id}`);
}

//收货地址列表
export function addressList(model) {
  return get("/api/v1/addresses", model);
}

//收货地址新增
export function addaddress(model) {
  return post(`/api/v1/addresses`, model);
}

// 收货地址修改
export function exitaddress(id, model) {
  return put(`/api/v1/addresses/${id}`, model);
}

// 收货地址删除
export function addresses(id) {
  return del(`/api/v1/addresses/${id}`);
}
