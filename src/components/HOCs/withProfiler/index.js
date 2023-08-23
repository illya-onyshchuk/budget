import React, { Profiler } from 'react'

function withProfiler(WrappedComponent, id='') {
  class WithProfiler extends React.Component {
    render() {
      return (
        <Profiler id={id} onRender={this.onRender}>
          <WrappedComponent {...this.props}/>
        </Profiler>
      )
    }

    onRender(...res) {
      console.table(res)
    }
  };

  WithProfiler.displayName = `WithProfiler(${getDisplayName})`;
  return WithProfiler;
}

export default withProfiler

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}