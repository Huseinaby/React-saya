import React from 'react';

class AppSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        const value = e.target.value;
        this.setState({ keyword: value });
        this.props.onSearch(value);
    }

    render() {
        return (
            <div className='note-search'>
                <input
                    type='text'
                    placeholder='Cari catatan kamu ...'
                    value={this.state.keyword}
                    onChange={this.onSearch}
                />
            </div>
        );
    }
}

export default AppSearch;
