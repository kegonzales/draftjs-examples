import React, { Component } from 'react';
import Header from '../components/Header.js';
import Panel from '../components/Panel.js';
import Basic from '../components/Basic.js';
import Link from '../components/Link.js';
import Entity from '../components/Entity.js';
import Color from '../components/Color.js';
import PlainText from '../components/PlainText.js';
import Rich from '../components/Rich.js';
import TexEditorExample from '../components/TexEditorExample.js';
import Tweet from '../components/Tweet.js';
import CustomMentionEditor from '../components/CustomMentionEditor.js';

class Examples extends Component {
  render() {
    return (
      <div>
        <Header />
        <br/><br/>
        <div className="container">
       	<Panel title="Basic" source="https://github.com/facebook/draft-js/blob/master/examples/plaintext/plaintext.html">
        	<Basic />
       	</Panel>
       	<br/><br/>
       	<Panel title="Plain Text" source="https://github.com/facebook/draft-js/blob/master/examples/plaintext/plaintext.html">
        	<PlainText />
       	</Panel>
        <Panel title="Link" source="https://github.com/facebook/draft-js/blob/master/examples/link/link.html">      
        	<Link />
        </Panel>
        <Panel title="Entity" source="https://github.com/facebook/draft-js/blob/master/examples/entity/entity.html">              
        	<Entity />
        </Panel> 
        <Panel title="Color" source="https://github.com/facebook/draft-js/blob/master/examples/color/color.html">                    
        	<Color />
        </Panel>
        <Panel title="Rich Text" source="https://github.com/facebook/draft-js/blob/master/examples/rich/rich.html">                    
        	<Rich />
        </Panel>
        <Panel title="TeXEditorExample" source="https://github.com/facebook/draft-js/blob/master/examples/tex">                    
        	<TexEditorExample />
        </Panel>
        <Panel title="TeXEditorExample" source="https://github.com/facebook/draft-js/blob/master/examples/tweet">                    
        	<Tweet />
        </Panel>
        <Panel title="https://react-rte.org/demo" source="https://react-rte.org/demo">                    
        	   <iframe src="https://react-rte.org/demo" height="500px" width="1000px" frameBorder="0"/>
        </Panel>

        </div>
      </div>
    );
  }
}


export default Examples;