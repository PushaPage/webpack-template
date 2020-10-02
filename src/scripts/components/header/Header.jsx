/* eslint-disable no-tabs */
import React from 'react';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actionTabs: true,

		  };
			}
			tabChose = e => {
				console.log(this.state.actionTabs);
				if (e.target.classList.contains('clicable') && this.state.actionTabs) {
					this.setState({ actionTabs: false });
					alert();
				}
			}
			render () {
				return (
					<header>
						<div className="line-decor line-decor--top"></div>
						<div className="lang-switch tabs-chose" onClick={this.tabChose}>
							<button className="lang-switch__item tabs-chose__item not-clicable">Ru</button>
							<button className="lang-switch__item tabs-chose__item clicable">En</button>
						</div>
					</header>
				);
		}
}

export default Header;
