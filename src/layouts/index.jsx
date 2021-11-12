import { Link, NavLink } from "umi";
import "./index.less"

export default function index(props) {
  return (
    <div>
      <h2>header</h2>
      <NavLink to="/shop/index">商品首页</NavLink>
      <NavLink to="/user">用户中心</NavLink>
      <NavLink to="/dva">Dva</NavLink>
      {props.children}
      <footer>footer</footer>
    </div>
  );
}
