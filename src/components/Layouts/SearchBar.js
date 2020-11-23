import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
                <form className="form-inline">
                    <div className="form-group has-feedback has-search cus_height_search">
                        <span className="glyphicon glyphicon-search form-control-feedback"></span>
                        <input type="text" className="form-control custom_width" placeholder="Search" />
                    </div>
                </form>

            </React.Fragment>
        )
    }

}
export default SearchBar