import styles from './local.scss';
const cls = styles;

console.log(cls);

import React from 'react';
import Select, {components} from 'react-select';
import { hot } from 'react-hot-loader';

function Component() {
	const className = 'customClass';
  return(
  	<div>
  		<div className="select">
  			<Select className="customSelect"
    						classNamePrefix="customSelect" />
  		</div>
  		<div className={cls.App}>
	      <button>Simple Button</button>
	    </div>
  	</div>
  );
}

export default hot(module)(Component)