// components/tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      list:[
        {
          id:0,
          title:"首页",
          isActive:true,
        },
        {
          id:1,
          title:"原创",
          isActive:false,
        },
        {
          id:0,
          title:"分类",
          isActive:false,
        },
        {
          id:0,
          title:"关于",
          isActive:false,
        },
      ],
  },



  /**
   * 组件的方法列表
   */
  methods: {
    onTitleClick(e){
      console.log(e);
      let index = e.currentTarget.dataset.index;
      // console.log("index:"+index);
      // let {list} = this.data;
      this.data.list.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
this.setData({
list
});

    },
  }
})
