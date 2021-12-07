import React, { Component } from 'react'
import Item from '../../models/Item'

export default class ItemListComponent extends Component {
    showDSMonAn() {
        return this.props.dsMonAn.map((item, index) => {
            return <div key={item.id} className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6">
                {console.log("test key")}
                <Item history={this.props.history} item={item} />
            </div>
        })
    }
    render() {
        console.log("item list menu");
        return (
            <div className="row">
                {this.showDSMonAn()}
           </div>
        )
    }
}
