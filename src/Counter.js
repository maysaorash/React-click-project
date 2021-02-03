import {connect} from 'react-redux';
import {increaseCount, decreaseCount} from './actions/counterAction';

function Counter(props){
  return <div>
    {props.count}
  <button onClick={props.decrease}>Decrease</button>
  <button onClick={props.increase}>Increase</button>
  </div>
}

const mapStateToProps = (state) => ({
count: state.count
})

const mapDispatchToProps = {
  increase: increaseCount,
  decrease: decreaseCount
}

export default connect(mapStateToProps,mapDispatchToProps )(Counter);