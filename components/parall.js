import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const bg_style = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
};

// export default class Parall extends Component {
//   constructor(props) {
//     super(props);
//     this.layers_count = this.props.layers.length;
//     this.sp = 0.5 / this.layers_count;
//   }

//   make_layers = (layers) => {
//     const layers_comp = layers.map((layer, index) => {
//       return (
//         <Parallax.Layer offset={0} speed={this.sp * index} key={'l' + index}>
//           <img src={layer} style={bg_style} />
//         </Parallax.Layer>
//       );
//     });
//     return layers_comp;
//   };

//   render() {
//     return (
//       <div>
//         <Parallax ref="parallax" pages={1}>
//           <div style={{ position: 'relative' }}>
//             {this.make_layers(this.props.layers.slice(0, this.layers_count - 1))}
//             <Parallax.Layer offset={0} speed={this.sp * this.layers_count}>
//               <div style={bg_style}>
//                 <img
//                   src={this.props.layers[this.layers_count - 1]}
//                   style={{ position: 'relative', width: '100%' }}
//                 />
//                   <div
//                     style={{
//                       position: 'relative',
//                       backgroundColor: this.props.backgroundColor,
//                       marginTop: '-10px',
//                       height: '4000px',
//                     }}
//                   >
//                     {this.props.children}
//                   </div>

//               </div>
//             </Parallax.Layer>
//           </div>
//         </Parallax>
//       </div>
//     );
//   }
// }

export default class Parall extends Component {
  constructor(props) {
    super(props);
    this.layers_count = this.props.layers.length;
    this.sp = 50 / this.layers_count;
  }

  make_layers = (layers) => {
    const layers_comp = layers.map((layer, index) => {
      return (
        <div style={bg_style}>
          {console.log(index, this.sp * index - 50, 50 - this.sp * index)}
          <Parallax className="custom-class" y={[this.sp * index - 40, 40 - this.sp * index]}>
            <img src={layer} style={{ position: 'relative', width: '100%' }} />
          </Parallax>
        </div>
      );
    });
    return layers_comp;
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <ParallaxProvider>
          <div style={{}}>
            <Parallax className="custom-class" y={[-40, 40]}>
              <img src={this.props.layers[0]} style={{ position: 'relative', width: '100%' }} />
              
        
            </Parallax>
          </div>
          {/*
                      <div style={bg_style}>
            <Parallax className="custom-class" y={[-30, 30]}>
              <img src={this.props.layers[1]} style={{ position: 'relative', width: '100%' }} />
            </Parallax>
          </div>
          <div style={bg_style}>
            <Parallax className="custom-class" y={[-20, 20]}>
              <img src={this.props.layers[2]} style={{ position: 'relative', width: '100%' }} />
            </Parallax>
          </div>
          <div style={bg_style}>
            <Parallax className="custom-class" y={[-10, 10]}>
              <img src={this.props.layers[3]} style={{ position: 'relative', width: '100%' }} />
            </Parallax>
          </div> 
                <div style={{}}>
            <Parallax className="custom-class" y={[-0, 0]}>
              <img src={this.props.layers[4]} style={{ position: 'relative', width: '100%' }} />
             
            </Parallax>
          </div>
          */}
          {this.make_layers(this.props.layers.slice(1, this.layers_count))}
          <Parallax className="custom-class" y={[-10, 10]}>

          {/* <div
          style={{
            position: 'relative',
            backgroundColor: this.props.backgroundColor,
            marginTop: '10px',
            height: '1000px',
          }}/> */}
          </Parallax>
        </ParallaxProvider>

        
      </div>
    );
  }
}
