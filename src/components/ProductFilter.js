import React, { Component } from 'react'

export default class ProductFilter extends Component {

    state = {
        searchText: ''
    }

    textChanged = (e) => {
        this.props.filterProduct(e.target.value);
        this.setState({
            searchText: e.target.value
        })
    }

    render() {
        return (
            <div className="input-group md-form form-sm form-1 pl-3 w-75 mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-danger lighten-3" id="basic-text1"><i className="fas fa-search text-white"
                        aria-hidden="true"></i></span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="ค้นหาเมนูที่ท่านต้องการ" aria-label="Search" value={this.state.searchText} onChange={this.textChanged}></input>
                <br/>
            </div>
        )
    }
}
