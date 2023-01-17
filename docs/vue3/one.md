# 父子传值

## 1.父向子传值

1. 子组件通过props声明自定义属性

   - 实际开发不要修改props的值，想修改的话转存到data中修改

2. 父组件通过属性绑定的方式为父组件中创建的子组件传值

   ```js
   <Son :自定义属性名="父组件中的数据名"></Son>
   ```

3. 示例代码

   ```js
   //Father
   <Son :msg="message", :sonObj="fatherObj">
   data(){
   	return{
   		message:"Hello,Friend~",
   		fatherObj:{
   			name:"Bart",
   			age:"12"
   		}
   	}
   }
   //Son
   props:[msg, sonObj]
   ```

4. 注意事项：

   1. 当子组件的props的属性值是基本数据类型时，对子组件属性值的修改不会改变父组件的属性值
   2. 当子组件的props的属性值是对象时，对子组件属性值的改变也不会改变父组件的属性值，但是，对子组件**属性值的属性的改变**（也就是改变对象属性对应的值）会改变父组件的属性值

## 2.子向父传值

1. 子组件中通过$emit的方法触发自定义事件并传值

   ```js
   data(){
   	message:"vue"
   },
   methods:{
   	add(){
   		this.$emit("自定义事件名",传递的值)
   	}
   }
   ```

2. 父组件通过事件绑定的方式为父组件中创建的子组件传值

   ```js
   <Son @自定义事件名="getMsg"></Son>
   <button @click="getMsg">点击以接收子组件的数据</button>
   methods:{
       getMsg(val){//val形参接收子组件传递的值
           this.msgFromSon=val;
       }
   }
   ```

## 3.兄弟间传值

1. 创建eventBus.js模块，并向外共享一个vue的实例对象

   ```js
   import Vue from "vue"
   export default new Vue()
   ```

2. 数据发送方：调用bus.$emit("事件名称"，要发送的数据)方法触发自定义事件

   > 定义在methods里

   ```js
   import bus from "./eventBus.js"
   <button @click="sendMsg">点击将数据发送给同级组件</button>
   export defalut{
   	data(){
   		return {
   			msg:"vue"
   		}
   	},
   	methods:{
   		sendMsg(){
               bus.$emit("share",this.msg)
           }
   	},
   }
   ```

   

3. 数据接收方：调用bus.$on("事件名称"，要接收的数据)方法注册一个自定义事件

   > 定义在created里

   ```js
   import bus from "./eventBus.js"
   <p>{{msgFromBrother}}</p>
   export defalut{
   	data(){
   		return {
   			msgFromBrother:""
   		}
   	},
       created(){
           bus.$on("share", val=>{
               this.msgFromBrother = val;
           })
   	},
   }
   ```

# DOM操作

## ref

```
<button ref='btn'></button>
```

可以通过this.$refs.btn拿到button按钮的DOM对象

## this.$nextTick(参数) 

> 获取更新后的DOM内容

1. 参数是箭头函数（回调函数）

2. 原理：将回调函数中的代码延迟执行，直到DOM重新渲染完毕，也就是延迟到生命周期的mounted(updated)结点，以保证回调函数中的代码可以操作到更新后的DOM元素
3. 应用场景：用到和DOM相关的插件/需要把接口数据放到页面上，插件里延迟计算出数据内容，会产生偏差，所以将插件放到nextTick里调用

# 插槽

> v-slot:  简写为  #

# 路由

## 0.介绍

路由的简单理解就是 ：哈希地址和组件的对应关系

location.hash = #...
location.href = 完整地址

## 1.安装vue-router

## 2.router/index.js下配置router

```js
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import Movie from "../components/Movie.vue"
import About from "../components/About.vue"

Vue.use(VueRouter)//把vue-router安装为项目的插件

const router = new VueRouter({
  //routers时一个数组，定义hash地址和组件的对应关系
  routes: [//路由规则
            //重定向的路由规则
            {path:'/',redirect: Home},
            //普通路由规则
            {path:'/home',component: Home},
            {path:'/movie',component:Movie},
            {path:'/about',component:About},
           ]
  })

export default router
```

## 3.main.js中挂载router插件

```js
import Vue from 'vue'
import App from './App2.vue'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载路由的示例对象
  router:router //也可以简写为router
}).$mount('#app')
```

## 4.App.vue组件中使用

```js
<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <!-- router-link代替a链接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/about">关于</router-link>
    <hr />
    <!-- 路由变换时展示的组件占位符 -->
    <router-view></router-view>
  </div>
</template>
```

## 5.路由重定向

在访问地址A时，强制用户跳转到地址B，进而展示特定的组件页面

通过路由规则的redirect属性，指定心得路由地址，可以方便的设置路由重定向

## 6.嵌套路由

通过路由实现组件的嵌套展示  

```js
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import Movie from "../components/Movie.vue"
import About from "../components/About.vue"
import Tab1 from "../components/tabs/Tab1.vue"
import Tab2 from "../components/tabs/Tab2.vue"
Vue.use(VueRouter)//把vue-router安装为项目的插件

const router = new VueRouter({
  //routers时一个数组，定义hash地址和组件的对应关系
  routes: [//路由规则
            //重定向的路由规则
            {path:'/',redirect: Home},
            //普通路由规则
            {path:'/home',component: Home},
            {path:'/movie',component:Movie},
            {path:'/about',component:About,children:[
              {path:'tab1',component:Tab1},
              {path:'tab2',component:Tab2},
            ]},
           ]
  })

export default router
```

## 7.默认子路由

```js
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import Movie from "../components/Movie.vue"
import About from "../components/About.vue"
import Tab1 from "../components/tabs/Tab1.vue"
import Tab2 from "../components/tabs/Tab2.vue"
Vue.use(VueRouter)//把vue-router安装为项目的插件

const router = new VueRouter({
  //routers时一个数组，定义hash地址和组件的对应关系
  routes: [
            //路由规则
            {path:'/',redirect: '/home'},
            {path:'/home',component: Home},
            {path:'/movie',component:Movie},
            {path:'/about',
            component:About,
            //redirect: '/about/tab1',
            children:[
              {path:'',component:Tab1},//默认子路由
              {path:'tab2',component:Tab2},
            ]},
           ]
  })

export default router
```

## 8.动态路由匹配

> 目的：方便路由规则的复用性

动态路由指的是：把哈希地址中的可变部分定义为参数项，从而提高复用性

vue-router中使用英文冒号代替路由的参数项

### 1.起步

```js
{path:'/movie/:id',component:Movie}
```

### 2进阶

index.js中设置：

```js
{path:'/movie/:id',component:Movie,props:true}
```

同时，在组件中定义同名props:['id']，就可以拿到id值

### 3.附加

1. **哈希地址中，”/“后面的参数叫做路径参数**

路由"参数对象"中，this.$route.params来访问路径参数

2. **哈希地址中，”?“后面的参数叫做查询参数**

路由"参数对象"中，this.$route.query来访问路径参数

```js
<router-link to="/movie/2?name='zs' age=20">电影</router-link>
```

3. this.$route.path为相对地址，this.$route.fullPath为绝对地址

## 9.声明式导航&&编程式导航

### 声明式导航

普通网页中声明点击a链接，vue中点击<router-link>，都属于声明式导航

### 编程式导航

浏览器中，调用API方法实现导航的方式，叫做编程式导航，例如：

- 普通网页中调用location.href跳转到新页面的方式

- vue-router中的编程式导航

  - this.$router.push(hash地址)
    - 跳转到指定的hash地址，并增加一条浏览记录
  - this.$router.replace(hash地址)
    - 跳转到指定的hash地址，并替换掉当前的浏览记录
  - this.$router.go(数值n)
    - 在浏览器中前进后后退
    - -n代表后退n个页面,n代表前进n个页面
    - 层数超过上限，则不动
    - $router.back() && $router.forward() 后退或前进一层

  ### 导航守卫

  > 控制路由的访问权限

  1. 全局前置守卫

     - index.js中

       ```js
       router.beforeEach((to, from, next)=>{
       	//to是将要访问的路由的信息对象
       	//from是将要离开的路由的信息对象
       	//next是一个函数，调用next()表示放行，允许这次路由导航
       })
       ```

     - next的三种调用方式

       - 用户拥有访问权限，直接放行：next()
       - 用户没有访问权限，强制跳转到登录页面：next('/login')
       - 用户没有访问权限，不允许跳转到后台页面：next(false)

  

  

