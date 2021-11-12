export default function auth(props) {
  const isLogin = true;
  if (isLogin) {
    return (
      <div>{props.children}</div>
    );
  } else {
    return (
      <div>auth</div>
    );
  }
}
