import React from 'react';
import { hiddenScroll, visibleScroll } from '@helpers/utils';
import { HashRouter as Router, Route } from 'react-router-dom';
import { spring, AnimatedSwitch} from 'react-router-transition';

// import { Scrollbars } from 'react-custom-scrollbars';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactTooltip from 'react-tooltip';
// import Sticky from 'react-sticky-el';
import Modal from 'react-animated-modal';
import ModalTitle from '@components/UI/modals/ModalTitle.jsx';
// import { Route, Switch } from 'react-router-dom';
// import './App.sass';
// import { Link } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Title from '../title/Title.jsx';
// import About from '../about/About.jsx';
import Footer from '../footer/Footer.jsx';
// import Header from '../header/Header';

// import Inquirer from '../inquirer/Inquirer';
// import Result from '../result/Result';
// import Footer from '../footer/Footer';

function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),

    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,

        };
    }

  //   renderThumbVertical({ style, ...props }) {
  //     const customStyle = {
  //         backgroundColor: '#FEFF37',
  //         boxShadow: `0 0.875em 1.75em rgba(28, 97, 172, 0.25),
  //                     0 2.125em 2.125em rgba(28, 97, 172, 0.22),
  //                     inset 1px 1px 4px rgba(28, 97, 172, 0.5), 1px 1px 4px #1c61ac`,
  //         zIndex: 20,
  //         width: 8,
  //         marginRight: 5,
  //         borderRadius: 6,

  //     };
  //     return (
  //         <div {...props} style={{ ...style, ...customStyle }}/>
  //     );
  // }


    render() {
        const {content, langSwitch} = {...this.props};
        console.log(content);
        // let questions = this.props.questions,
        //     answers = this.props.answers,
        //     result = this.props.result,
        //     stateInquirer = this.props.stateInquirer,
        //     getTest = this.props.getTest,
        //     stateInquirerDefault = this.props.stateInquirerDefault,
        //     anewTest = this.props.anewTest;

        return (
            <ParallaxProvider>
              <div className="wrap-helper">
                  <div className="wrap-helper__inner">
                    <div className="bubbles">
                      <img
                        src="./images/underwater-bubbles.png"
                        alt="bubbles"
                      />
                    </div>
                      <Header />
                      <Router>
                          <AnimatedSwitch
                            atEnter={bounceTransition.atEnter}
                            atLeave={bounceTransition.atLeave}
                            atActive={bounceTransition.atActive}
                            mapStyles={mapStyles}
                            className="switch-wrapper"
                          >
                              <Route exact path="/" render={() => <Title content={content.titlePage} />} />
                              {/* <Route exact path="/" component={Home} /> */}
                              <Route path="/about/" render={() => <Title content={content.titlePage} />}/>
                              {/* <Route path="/etc/" component={Etc}/> */}
                          </AnimatedSwitch>
                      </Router>
                      <button onClick={()=>{
                        langSwitch('en');
                      }}>SWITCH</button>
                  </div>
                  <Footer />
              </div>
              <ReactTooltip id='tooltip-title' getContent={() => {
                return (
                  <div className="tooltip-title">
                    <div className="tooltip-title__bubble thought-bubble">
                      <div className="thought-bubble__inner">
                        <p>{content.tooltipTitle.title}</p>
                      </div>
                      <span className="thought-bubble__child-first"></span>
                      <span className="thought-bubble__child-second"></span>
                    </div>
                    <div className="card card--xxs">
                      <div className="card__inner py-10 tooltip-title__inner">
                          <img
                            className="img-fluid"
                            src="./images/spongebob-puzzled.png"
                            alt="SpongeBob"
                          />
                          <div className="card tooltip-title__link">
                            <div
                              className="card__inner py-10"
                              onClick={() => {
                                ReactTooltip.hide(this.fooRef);
                                this.setState({ showModal: true });
                                hiddenScroll();
                              }}
                            >
                            {content.tooltipTitle.button}
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  );
              }}/>
              <Modal
                visible={this.state.showModal}
                closemodal={() => {
                  this.setState({ showModal: false });
                  visibleScroll();
                }}
                type="flipInX"
              >
                <ModalTitle content={content.modalTitle}/>
              </Modal>
          </ParallaxProvider>
        );
}
}

export default App;
