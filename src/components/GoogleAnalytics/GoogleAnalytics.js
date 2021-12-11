import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class GoogleAnalytics extends Component {
  render() {
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }

    const { id } = this.props;

    return (
      <Helmet>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        />
        <script>
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${id}');
          `}
        </script>
      </Helmet>
    );
  }
}

export default GoogleAnalytics;
