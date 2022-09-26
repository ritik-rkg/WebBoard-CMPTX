import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Switch
} from '@material-ui/core';
import {Typography as TypographyComponent } from '@material-ui/core';

// Shared services
import { getOrders } from 'services/order';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletToolbar,
  PortletContent,
  Status
} from 'components';

// Component styles
import styles from './styles';

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refund: 'danger'
};

class Setting extends Component {

  constructor(props){
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state = {
      isLoading: false,
      limit: 10,
      orders: [],
      ordersTotal: 0,
      switch : false
    };
  }
  signal = false;



  async getOrders(limit) {
    try {
      this.setState({ isLoading: true });

      const { orders, ordersTotal } = await getOrders(limit);

      if (this.signal) {
        this.setState({
          isLoading: false,
          orders,
          ordersTotal
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentDidMount() {
    this.signal = true;

    const { limit } = this.state;

    this.getOrders(limit);
  }

  componentWillUnmount() {
    this.signal = false;
  }

  handleSwitch(event,checked) {
    console.log(event.target.checked);
    this.setState({ switch: event.target.checked });
  };

  render() {
    const { classes, className } = this.props;
    const { isLoading, orders, ordersTotal } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet className={rootClassName}>
        <PortletHeader>
          <PortletLabel
            // subtitle={`${ordersTotal} in total`}
            title="Some Setting"
          />
          <PortletToolbar>
            {/* <Button
              className={classes.newEntryButton}
              color="primary"
              size="small"
              variant="outlined"
            >
              New entry
            </Button> */}
          <Switch
              checked={this.state.switch}
              onChange={this.handleSwitch}
              value="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </PortletToolbar>
        </PortletHeader>
        {/* <PerfectScrollbar> */}
          <PortletContent
            className={classes.portletContent}
            // noPadding
          >
              <div className={classes.settingDetail}>
              <TypographyComponent variant={"body1"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex assumenda necessitatibus iste fugit iusto veniam totam similique fuga quibusdam reiciendis deserunt, quasi laborum molestias temporibus porro facilis cum dicta tempore.
                  </TypographyComponent>
              </div>
          </PortletContent>
        {/* </PerfectScrollbar> */}
      </Portlet>
    );
  }
}

Setting.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Setting);
