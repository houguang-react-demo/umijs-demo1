import {Button} from "antd"

export default function user(props){
  function jump() {
    props.history.push("/shop/index")
  }
    return (
        <div>
          <div>user page</div>
          <Button type="primary" onClick={jump}>跳转到首页</Button>
        </div>
    )
}
