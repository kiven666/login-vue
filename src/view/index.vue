<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for='(product,idx) in productList'>
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for='item in product.list'>
              <a :href='item.url'>{{item.name}}</a>
              <span v-if='item.hot'>Hot</span>
            </li>
          </ul>
          <div class="hr" v-if='!product.lastest'></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for='item in newsList' :key='item.id'>
            <a class='new-item' :href='item.url'>{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="index-right">
      <slide-show :slides='slides' :inv='invTime'></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for='(item,index) in boardList' :key='item.index' :class="['index-board-' + item.id,{'line-last':index%2 !==0}]">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <router-link :to='item.href'>
                <el-button class='button' type='primary' round>立即购买</el-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SlideShow from '../components/slide-show'
  export default {
    data(){
      return {
        invTime: 1800,
        newsList:[],
        productList:{
          pc:{
            title:'PC产品',
            list:[
              {
                name:'数据统计',
                url:'detail/count'
              },
              {
                name: "数据预测",
                url: "detail/forecast"
              },
              {
                name: "流量分析",
                url: "detail/analysis"
              },
              {
                name: "广告发布",
                url: "detail/publish",
                hot: true
              }
            ]
          },
          app: {
            title: "应用分类",
            lastest: true,
            list: [
              {
                name: "91助手",
                url: "http://weixin.com"
              },
              {
                name: "产品助手",
                url: "http://twitter.com"
              },
              {
                name: "智能地图",
                url: "http://maps.com"
              },
              {
                name: "团队语音",
                url: "http://phone.com"
              }
            ]
          }
        },
        boardList:[
        {
          title:'开放产品',
          description:'开放产品是一款开放的产品',
          id:'sun',
          href:'detail/analysis',
          saleout:false
        },
        {
          title: "品牌营销",
          description: "开放产品是一款开放产品",
          id: "beg",
          href: 'detail/count',
          saleout: false
        },
        {
          title: "使命必达",
          description: "开放产品是一款开放产品",
          id: "book",
          href: 'detail/forecast',
          saleout: true
        },
        {
          title: "找我所爱",
          description: "开放产品是一款开放产品",
          id: "camare",
          href: 'detail/publish',
          saleout: false
        }],
        slides:[
        {
          src:require('../assets/slideShow/pic1.jpg'),
          title:'图片1',
          href:'http://baidu.com'
        },{
          src:require('../assets/slideShow/pic2.jpg'),
          title:'图片2',
          href:'detail/analysis'
        },{
          src:require('../assets/slideShow/pic3.jpg'),
          title:'图片3',
          href:'detail/analysis'
        },{
          src:require('../assets/slideShow/pic1.jpg'),
          title:'图片4',
          href:'detail/analysis'
        }]
      }
    },
    created (){
      this.$http.get('api/newsList').then( res =>{
        this.newsList = res.data;
      }, err =>{
        console.log(err)
      })
      // console.log(this.$store)
    },
    components:{
      SlideShow
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    height: 20px;
    border-bottom: 4px solid rgb(253, 249, 249);
    background: #4fc08d;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    list-style-type: none;
    padding: 5px;
  }
  .index-left-block li a {
    color: #000;
    text-decoration: none;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-sun .index-board-item-inner {
    background: url(../assets/sun.png) no-repeat;
    background-size: 30%;
  }
  .index-board-beg .index-board-item-inner {
    background: url(../assets/beg.png) no-repeat;
    background-size: 30%;
  }
  .index-board-book .index-board-item-inner {
    background: url(../assets/book.png) no-repeat;
    background-size: 30%;
  }
  .index-board-camare .index-board-item-inner {
    background: url(../assets/camare.png) no-repeat;
    background-size: 30%;
  }
  .index-board-item h2 {
    font-style: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .news-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>