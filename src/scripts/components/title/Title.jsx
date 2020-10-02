/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';


// import ReactTooltip from 'react-tooltip';
// import './Title.sass';


class Title extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {content} = {...this.props};
      return (
        <section className="title">
          <div className="container">
            <Parallax className="d-flex justify-content-center title__pic" y={[0, 15]}>
              <picture>
                <source srcSet="./images/title-mob.png" media="(max-width: 768px)" />
                <img
                  className="img-fluid"
                  src="./images/title.png"
                  alt="SpongeBob"
                />
              </picture>
            </Parallax>
              <div className="card card--lg my-20">
                <div className="card__inner py-34">
                  <h1 className="text-center">{content.title}</h1>
                  <button
                    ref={ref => this.fooRef = ref}
                    className="card__info"
                    data-tip=''
                    data-effect='solid'
                    data-for='tooltip-title'
                    data-arrow-color='#FEFF37'
                    data-event='click'
                    >
                      <img
                        className="img-fluid"
                        src="./images/cap.png"
                        alt="SpongeBob"
                      />
                  </button>
                </div>
              </div>
            <Parallax y={[-10, 25]}>
              <div className="b-perspective d-flex justify-content-center align-items-center">
                <Link className="btn btn-main btn-title" to="/about">{content.button}</Link>
                <div className="jelly-fish jelly-fish-static"></div>
              </div>
            </Parallax>
          </div>
          <div className="jelly-fish jelly-fish-shift"></div>
        </section>
          // <section className="title">
          //   <div className="text-center">
          //     <picture>
          //       <source srcSet="./img/title-md.png" media="(max-width: 768px)" />
          //       <img
          //         className="img-title img-fluid"
          //         src="./img/title.png"
          //         alt="SpongeBob"
          //       />
          //     </picture>         </div>
          //     <div className="title-item-wrap">
          //   <div className="title-item col-11 col-lg-10">
          //    <h1 className="title-text">Как хорошо ты знаешь Спанч Боба?</h1>
          //  </div>
          //     </div>
          //   <div className="btn-box-title">
          //   {/* <Link className="btn btn-bg btn-dang btn-title position-relative mr-0" to="/inquirer" role="button">Проверить!!!</Link> */}
          //     <div className="jelly-fish-animate-near-btn">
          //       <div className="jelly-fish"></div>
          //     </div>
          //   </div>
          //   <div className="jelly-fish-animate">
          //     <div className="jelly-fish"></div>
          //   </div>
          // </section>
      );
  }
}

export default Title;
