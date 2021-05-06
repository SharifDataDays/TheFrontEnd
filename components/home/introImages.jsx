import React from 'react';
import NoSSR from 'react-no-ssr';
import { Grid, Image } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

// function renderImage(url, index) {
//   if (index % 2 == 0) {
//     return (
//       <Grid.Row>
//         <Grid.Column width={8}></Grid.Column>
//         <Grid.Column floated="right" width={8}>
//           <Fade right>
//             <Image bordered rounded size="big" src={url} />
//           </Fade>
//         </Grid.Column>
//       </Grid.Row>
//     );
//   } else {
//     return (
//       <Grid.Row>
//         <Grid.Column floated="left" width={8}>
//           <Fade left>
//             <Image bordered rounded size="big" src={url} />
//           </Fade>
//         </Grid.Column>
//         <Grid.Column width={8}></Grid.Column>
//       </Grid.Row>
//     );
//   }
// }

function IntroImages() {
  const imageUrls = ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png'];
  return (
    <NoSSR>
      <div
        style={{
          backgroundColor: '#202020',
          marginTop: '-8px',
          padding: '2em 0em',
        }}
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
            <Fade left>
                <Image bordered rounded size="big" src={imageUrls[1]} />
              </Fade>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Fade right>
                <Image bordered rounded size="big" src={imageUrls[0]} />
              </Fade>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
            <Fade left>
                <Image bordered rounded size="big" src={imageUrls[3]} />
              </Fade>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Fade right>
                <Image bordered rounded size="big" src={imageUrls[2]} />
              </Fade>
            </Grid.Column>
          </Grid.Row>
          {/* {imageUrls.map((url, index) => {
            return renderImage(url, index);
          })} */}
        </Grid>
      </div>
    </NoSSR>
  );
}

export default IntroImages;
