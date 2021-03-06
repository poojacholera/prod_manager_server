var React = require('react');
var PropTypes = require('prop-types');
import Sidebar_Nav from './Sidebar_Nav';

function Layout(props){
  return(
    <html>
      <head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" ></meta>
        <meta httpEquiv="Content-Security-Policy" content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval';" />
        <meta name='viewport' content='width=device-width, initial-scale=1' ></meta>
        <meta name="description" content="production manager tutorials" ></meta>
        <meta name="keywords" content="HTML5,CSS, React, Express, mongoose, MongoDB" ></meta>
        <meta name="author" content="Pooja Cholera"></meta>
        <link rel='stylesheet' href='.././stylesheets/style.css'/>
          <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        </head>
        <body>
          <div className="container-fluid">
            <div className="row">
              <Sidebar_Nav></Sidebar_Nav>
              <div className="col-sm-10">
                {props.children}
              </div>
            </div>
          </div>
        </body>
    </html>
  );
}
Layout.propTypes = {
  title : PropTypes.string,
};
module.exports = Layout;
