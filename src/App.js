import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className='box'>
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};

export default connect(mapStateToProps, {})(App);

/*** READ from the redux store
 *  const mapStateToProps = state => {
 *    //map each value to be read from the store to a prop
 *     return {
 *       editing: state.editing,
 *       title: state.title
 *     };
 *  };
 *
 * ** WRITE to the redux store
 *   const mapDispatchToProps = dispatch => {
 * // build a dispatching function from each action creator
 *   return {
 *     updateTitle: newTitle => dispatch(updateTitle(newTitle)),
 *     toggleEditing: () => dispatch(toggleEditing()),
 *     // other actions here
 *   };
 * };
 *
 * export default connect(mapStateToProps,mapDispatchToProps)(Title);
 *
 *
 */
