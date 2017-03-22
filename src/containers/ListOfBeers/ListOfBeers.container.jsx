import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading.component';
import ListOfBeers from '../../components/ListOfBeers/ListOfBeers.component';

class ListOfBeersContainer extends Component {

  constructor() {
    super();
    this.state = {
      beers: [],
      fetchStatus: 0
    };
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
        this.setState({
          beers: res.data,
          fetchStatus: 1
        });
      })
      .catch(() => {
        this.setState({ fetchStatus: -1 });
      });
  }

  render() {
    switch (this.state.fetchStatus) {
      case -1:
        return <div>Fetch error</div>;
      case 0:
        return <Loading />;
      case 1:
        return <ListOfBeers beers={this.state.beers} />;
      default:
        return <div>something went wrong...</div>;
    }
  }

}

export default ListOfBeersContainer;
