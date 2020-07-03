import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as NationalityActions from '../actions';
import NationalityOptionsGrid from '../components/NationalityOptionsGrid';

const mapStateToProps = (state) => ({
  selectedNationalities: state.nationalities,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(NationalityActions, dispatch),
});

/**
 * Adreess book settings page
 * It renders the different nationality options for users fetching
 * @param {Object} selectedNationalities - An array with the currently nationalities filter
 * @param {Object} actions - Object with ADD_NATIONALITY and REMOVE_NATIONALITY redux actions
 */
export const Settings = (props) => (
  <div className="w-full h-full">
    <div className="w-full flex">
      <Link to="/">
        <FontAwesomeIcon
          className="m-4 transform cursor-pointer duration-200 hover:scale-110 hover:text-red-600 z-20"
          icon={faArrowLeft}
          fixedWidth={false}
          size="2x"
        />
      </Link>
    </div>
    <NationalityOptionsGrid {...props} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
