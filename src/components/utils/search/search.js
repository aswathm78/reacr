import React, { Component } from "react";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div class="search-btn">
                    <a href="javascript:void(0);" class="search-trigger"><i class="icon-icons185"></i></a>
                </div>
                <div class="search-container">
                    <i class="fa fa-times header-search-close"></i>
                    <div class="search-overlay"></div>
                    <div class="search">
                        <form>
                            <label>Search:</label>
                            <input type="text" placeholder="" />
                            <button><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;
