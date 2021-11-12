import mockjs from "mockjs"

export default {
  "POST /api/index": {
    id: 1,
    name: "hungry"
  },
  "Post /api/person": {
    id: 2,
    name: "张三"
  },
  "GET /api/lists":mockjs.mock({
    "list|100":[{name:"@city@county","value|1-100":50,'type|0-2':1}]
  })
};
