import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';
import styles from './styles';

// Material components
import { Grid, Button, Link } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import ButtonAppBar from 'components/Navbar';
import Footer from 'components/Footer';
import { Helmet } from 'react-helmet';
// import ResponsiveSVG from './components/responsive.svg';

class Landing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Webboard | Home</title>
          <meta
            name="description"
            content="Webboard is a whiteboard for the web. Online writing tool that runs in your browser"
          />
        </Helmet>
        <div className={classes.gradient}>
          <div className={classes.banner}>
            <ButtonAppBar />
            <Grid container spacing={0}>
              <Grid item xs={12} lg={6} className={classes.mainBanner}>
                <h1 className={classes.bannerHeading}>
                  A Whiteboard for the Web
                </h1>
                <p className={classes.regularText}>
                  {' '}
                  Webboard allows you to write anything on the fly
                </p>

                <div className={classes.buttonGroup}>
                  <Button
                    size="large"
                    color="primary"
                    className={classes.bannerButton}
                    href="http://127.0.0.1:5000/">
                    Start Writing
                  </Button>
                  <Button
                    size="large"
                    color="primary"
                    className={classes.bannerButton}>
                    Explore
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                className={classes.subsectionImage}
                style={{ padding: 50 }}>
                <img
                  src='/images/wb.webp'
                  width="450"
                  alt="Write with Webboard"
                />
                {/* <img src="/images/bg.svg" /> */}
              </Grid>
            </Grid>
            {/* <div className={classes.bannertext}>
          
        <h1 className={classes.bannerHeading}>
                A Whiteboard for the Web
        </h1>
        <p className={classes.regularText}>
        Webboard allows you to write anything on the fly.<br /> More stuff about webboard. And some more lines.
        </p>
        </div> */}
          </div>
        </div>

        <div className={classes.section}>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={6} className={classes.subsection}>
              <h1 className={classes.sectionHeading}>
                Write like Never before
              </h1>
              <p className={classes.regularText}>
                {' '}
                All you need is browser and an internet connection. You can
                write on any device and access it anywhere in the world!
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.subsectionImage}
              style={{ padding: 50 }}>
              <img
                src="/images/responsive.svg"
                alt="Write anywhere using Webboard"
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.section}>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={6} className={classes.subsectionImageMD}>
              <img
                src="/images/connect.svg"
                alt="Share notes with Webboard"
              />
              {/* <a href="https://www.freepik.com/vectors/people">People vector created by freepik - www.freepik.com</a> */}
            </Grid>
            <Grid item xs={12} lg={6} className={classes.subsection}>
              <h1 className={classes.sectionHeading}>
                Share Like Never Before
              </h1>

              <p className={classes.regularText}>
                All your boards are saved in our servers. You can open them
                anywhere, edit them anywhere, export them as pdf and much more!
              </p>
            </Grid>
            <Grid item xs={12} lg={6} className={classes.subsectionImageXS}>
              <img
                src="/images/connect.svg"
                alt="Open your boards anywhere in the World"
              />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

{
  /* <a href="https://www.freepik.com/vectors/people">People vector created by freepik - www.freepik.com</a> */
}
Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Landing);
