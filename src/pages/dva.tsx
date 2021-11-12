import { connect } from "umi";

const dva = props => {
  console.log(props);
  return (
    <div>
      <h1>DVA</h1>
      <div>

      </div>
    </div>
  );
};

const stateToProps = (state) => {
  console.log(state)
  return { tagsLists:state.dva.tagsLists };
};
export default connect(stateToProps)(dva);
