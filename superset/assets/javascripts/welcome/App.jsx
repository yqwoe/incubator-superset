import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Row, Col, Tabs, Tab, FormControl } from 'react-bootstrap';
import RecentActivity from '../profile/components/RecentActivity';
import Favorites from '../profile/components/Favorites';
import DashboardTable from './DashboardTable';
import { t } from '../locales';

const propTypes = {
  user: PropTypes.object.isRequired,
};

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    return (
      <div className="container welcome">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title={t('看板')}>
            <Panel>
              <Row>
                <Col md={8}><h2>{t('看板')}</h2></Col>
                <Col md={4}>
                  <FormControl
                    type="text"
                    bsSize="sm"
                    style={{ marginTop: '25px' }}
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.onSearchChange}
                  />
                </Col>
              </Row>
              <hr />
              <DashboardTable search={this.state.search} />
            </Panel>
          </Tab>
          <Tab eventKey={2} title={t('最近浏览')}>
            <Panel>
              <Row>
                <Col md={8}><h2>{t('最近浏览')}</h2></Col>
              </Row>
              <hr />
              <RecentActivity user={this.props.user} />
            </Panel>
          </Tab>
          <Tab eventKey={3} title={t('收藏夹')}>
            <Panel>
              <Row>
                <Col md={8}><h2>{t('收藏夹')}</h2></Col>
              </Row>
              <hr />
              <Favorites user={this.props.user} />
            </Panel>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

App.propTypes = propTypes;
