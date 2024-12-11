import React from 'react';
import { getFooterCopy, getFullyear } from '../utils/utils';
import AppContext from '../App/AppContext';

/* The footer function */

function Footer() {
  const { user } = AppContext;
  return (
    <div className="App-footer">
      { user.isLoggedIn && <p><a href='#'>Contact Us</a></p>}
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
}

Footer.defaultTypes = {
  user: null,
};

Footer.propTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);
