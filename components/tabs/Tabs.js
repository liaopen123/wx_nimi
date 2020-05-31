// components/tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // aaa:{
    //   type:String,
    //   value:""
    // }
    tabs:{
      //传值类型
      type:Array,
      //传值默认值
      value:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     
  },



  /**
   * 组件的方法列表
   */
  methods: {
    onTitleClick(e){
      console.log(e);
      let index = e.currentTarget.dataset.index;
      this.triggerEvent("onTabChange",{index});
      let {tabs} = this.data;
      // console.log(tabs);
      tabs.forEach((v,i)=> v.isActive=(i==index));
this.setData({
tabs
});

    },
  }
})
