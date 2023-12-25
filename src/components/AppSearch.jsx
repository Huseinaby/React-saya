import React from "react";

class AppSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        };
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(value) {
        this.setState({keyword: value});
        this.props.onSearch(value);
    }

    render() {
        return (
            <div className="note-search">
                <input type="text" placeholder="Cari Catatan ..." value={this.state.keyword} 
                onChange={(e) => this.onSearch(n.target.value)} />
            </div>
        )
    }
}

export default AppSearch;