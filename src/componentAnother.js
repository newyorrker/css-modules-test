import styles from './local-another.scss';

import React from 'react';
import { hot } from 'react-hot-loader';

function componentAnother(props) {
  return(
  	<div>
  		<div className={styles.App}>
	      <button>Simple Button</button>
	    </div>
  	</div>
  );
}

export default hot(module)(componentAnother)