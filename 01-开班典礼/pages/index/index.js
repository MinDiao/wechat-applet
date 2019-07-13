//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        value: 0
    },
    change: function() {
        this.data.value++
        this.setData({
            value: this.data.value
        })
    }
})
