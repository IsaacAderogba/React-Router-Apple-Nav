import React from 'react';

class SubItem extends React.Component {
    render() {
        return (
            <span>{this.props.subItem}</span>
        );
    }
}

export default SubItem;