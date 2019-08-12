import Mock from "mockjs"
Mock.mock("https://api.myjson.com/bins/fp5ml",{
    "dataList|10-20":[{
          "name":"@last @first",
          "time":"@time(hh:mm:ss)",
          "cname":"@cname",
          "img":"@img(100*100)"
    }
    ]
})
let Random=Mock.Random
let arr=[]
for (let i=0;i<20;i++){
    arr.push({
        name:Random.cname()
    })
}