import React, {Component} from 'react';
import {PaginationButtons} from "./PaginationButtons";

export class PaginationControls extends Component {
    constructor(props) {
        super(props);
        this.pageSizes = this.props.size || [5, 10, 15, 20];
        this.sortsKeys = this.props.keys || ["Name", "Price"];
    }

    handlePageSizeChange = (event) => {
        this.props.setPageSize(event.target.value);
    }

    handleSortPropertyChange = (event) => {
        this.props.setSortProperty(event.target.value);
    }

    render() {
        return (
            <div className="m-2">
                <div className="text-center m-1">
                    <PaginationButtons currentPage={this.props.currentPage}
                                       pageCount={this.props.pageCount}
                                       navigate={this.props.navigateToPage} />
                </div>

                <div className="form-inline justify-content-center">
                    <select className="form-control"
                            onChange={this.handlePageSizeChange}
                            value={this.props.pageSize || this.pageSizes[0]}>
                        {this.pageSizes.map(p =>
                            <option key={p} value={p}> {p} per page</option>
                        )}
                    </select>

                    <select className="form-control"
                            onChange={this.handleSortPropertyChange}
                            value={this.props.sortKey || this.sortsKeys[0]}>
                        {this.sortsKeys.map(s =>
                            <option value={s.toLowerCase()} key={s} > Sort by {s} </option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}
