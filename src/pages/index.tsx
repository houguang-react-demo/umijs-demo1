import {Button} from "antd"
import {request} from "umi";

export default function IndexPage(props:any) {

  function getData() {
    request("/api/lists").then(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
    request("/api/index",{
      method:"post"
    }).then(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

  return (
    <div>
      首页
      <Button type="primary" onClick={getData}>请求数据</Button>
    </div>
  );
}
