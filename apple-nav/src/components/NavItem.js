import React from 'react';

class NavItem extends React.Component {
    render() {
        return (
            <span>{this.props.menuItem.title}</span>
        );
    }
}

export default NavItem;