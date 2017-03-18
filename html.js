import React, { PropTypes, Component } from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

export default class Html extends Component {
  render () {
    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <link rel='stylesheet' type='text/css' href={`/styles.css?t=${BUILD_TIME}`} />
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>{title}</title>
          {css}
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string
}