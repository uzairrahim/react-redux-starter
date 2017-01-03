import './Layout.scss'
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Layout extends Component {
	render(){
		const { className } = this.props;
		return(
			<div className={classnames('g-row', className)}>
				<div className='g-col twe'>
					<span className='text large gray'>React/Redux Starter</span>
				</div>
			</div>
		);
	}
}

Layout.propTypes = {
	className: PropTypes.string
};

Layout.defaultProps = {
	className: ''
};

export default Layout;