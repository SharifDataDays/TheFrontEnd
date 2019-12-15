// import styled from 'styled-components';
// import React from 'react';
// import { Grid, Segment, Sidebar, Menu, Input, Header, List, Transition } from 'semantic-ui-react';

// const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'];

// const SmallGrid = styled(Grid)`
//   min-width: 100%;
//   background-color: #f3f4f7;
//   border-radius: 0;
// `;

// const StyledLists = styled(List)`
//   width: 100%;
//   background-color: #f3f4f7;
// `;

// const StyledInput = styled(Input)`
//   width: 97.5%;
//   height: 35px;
//   margin: 0 auto;
//   margin-top: 50px;
// `;

// const StyledHeader = styled(Header)`
//   font-family: FreightSans, Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 1.1rem;
//   color: #262626;
//   font-weight: 400;
//   line-height: 1.375rem;
//   margin: 40px auto 8px 7%;
//   opacity: 0.85;
// `;

// const StyledLink = styled(List.Item)`
//   color: #6c6c6d;
//   display: block;
//   margin-left: 7%;
//   font-size: 0.875rem;
//   opacity: 0.8;
//   margin-bottom: 5px;
// `;

// const VeryLastElement = styled(List.Item)`
//   margin-bottom: 10%;
// `;

// class SideBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { display: 'span', animation: transitions[3], duration: 1000, visible: true };
//     this.handleClick = this.handleClick.bind(this);
//     this.toggleVisibility = this.toggleVisibility.bind(this);
//   }

//   toggleVisibility = () => this.setState((prevState) => ({ visible: !prevState.visible }));

//   handleClick() {
//     const { display } = this.state;
//     const change = display === 'none' ? 'span' : 'none';
//     this.setState({ display: change });
//     this.toggleVisibility();
//   }

//   render() {
//     const { display } = this.state;
//     const style = { margin: '0 auto' };
//     const SmallSideBar = styled(Sidebar)`
//       width: 70%;
//       background-color: #f3f4f7;
//       display: ${display};
//       position: absolute;
//     `;

//     const { animation, duration, visible } = this.state;
//     const styledDiv = {
//       position: 'relative',
//       left: 0,
//     };
//     return (
//       <>
//         <Menu onClick={this.handleClick}>
//           <p style={style}>For display/hide Sidebar, click!</p>
//         </Menu>
//         <Grid>
//           <Grid.Column floated="right" width={10} style={{ left: '100%' }}>
//             aaaaaa
//             <SmallSideBar as={Segment} direction="right" animation="overlay">
//               <SmallGrid floated="right" textAlign="right" columns={1}>
//                 <StyledInput placeholder="Search..." />
//                 <StyledHeader as="p">Getting Started</StyledHeader>
//                 <StyledLists link>
//                   <StyledLink as="a" href="./resources">
//                     Deep Learning with PyTorch: A 60 Minute Blitz
//                   </StyledLink>
//                   <StyledLink as="a" href="./resources">
//                     Writing Custom Datasets, DataLoaders and Transforms
//                   </StyledLink>
//                   <StyledLink as="a" href="./resources">
//                     Writing Custom Datasets, DataLoaders and Transforms
//                   </StyledLink>
//                 </StyledLists>
//                 <StyledHeader as="p">Text</StyledHeader>
//                 <StyledLists link>
//                   <StyledLink as="a" href="./resources">
//                     NLP From Scratch: Classifying Names with a Character-Level RNN
//                   </StyledLink>
//                   <StyledLink as="a" href="./resources">
//                     NLP From Scratch: Generating Names with a Character-Level RNN
//                   </StyledLink>
//                 </StyledLists>
//                 <VeryLastElement content="" />
//               </SmallGrid>
//             </SmallSideBar>
//           </Grid.Column>
//         </Grid>
//       </>
//     );
//   }
// }

// export default SideBar;
import React from 'react';
import { Header, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react';
import { render } from 'react-dom';
import styled from 'styled-components';

class SmallSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { visible } = this.state;
    const change = visible === true ? false : true;
    this.setState({ visible: change });
  }

  render() {
    const { visible } = this.state;
    return (
      <Sidebar.Pushable
        as={Segment.Group}
        raised
        onClick={this.handleClick}
        style={{ width: '100vw', margin: "0 auto" }}
      >
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          direction="right"
          style={{ backgroundColor: '#f3f4f7' }}
          onClick={this.handleClick}
          width="thin"
        >
          <Menu.Item as="a" style={{ color: 'black' }}>
            Home
          </Menu.Item>
          <Menu.Item as="a" style={{ color: 'black' }}>
            Games
          </Menu.Item>
          <Menu.Item as="a" style={{ color: 'black' }}>
            Channels
          </Menu.Item>
        </Sidebar>
        <div style={{ height: '100vh' }} />
      </Sidebar.Pushable>
    );
  }
}

export default SmallSideBar;
