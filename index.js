Page({
  data:{
    tabs:[
      {
        id:1,
        value:"网点自送",
        isActive:true
      },
      {
        id:2,
        value:"定点取件",
        isActive:false
      }
    ]
  },
  handletabsItemChange(e){
    const {index}=e.detail;
    let {tabs}=this.data;
   tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
     this.setData({
       tabs
     })
  }
})