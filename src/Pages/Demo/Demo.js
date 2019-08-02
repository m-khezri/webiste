import React from 'react';
import './Demo.scss';

class Demo extends React.Component {
  render() {
    return (
      <div className='DemoContainer'>
        <iframe className="demo" title='livedemo' width="300" height="737" src="https://xd.adobe.com/embed/1a4fd035-4f8c-4251-4cdc-acb5ee19d833-6c7e/" frameborder="0" allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default Demo;