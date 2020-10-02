import React from 'react';


class ModalTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        const {content} = {...this.props};
        return (
            <div className="card">
                <img
                className="card__bubble"
                src="./images/bubble.png"
                alt="SpongeBob"
                />
                <div className="card__inner py-20">
                    <div className="card__content px-8 py-8 mt-30 mx-16">
                        <div className="block-info px-8 py-8">
                        <span className="text-md text-bold text-secondary">{content.title} </span>
                        {content.text1}
                        <img
                            className="leftimg"
                            src="./images/drawing-sponge.png"
                            alt="SpongeBob"
                        />
                        {content.text2}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalTitle;
