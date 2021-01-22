import React from "react";
import Select from "react-select";

//initial cities
const options = [
    { value: 'Johannesburg', label: 'Johannesburg'},
    { value: 'Durban', label: 'Durban'},
    { value: 'Cape Town', label: 'Cape Town'},
    { value: 'Bloemfantein', label: 'Bloemfantein'},
    { value: 'Port Elizabeth', label: 'Port Elizabeth'},
    { value: 'Kimberley', label: 'Kimberley' },
    { value: 'East London', label: 'East London'},
    { value: 'Goerge', label: 'Goerge'},
    { value: 'Upington', label: 'Upington'},
  ];
  
class Rooms extends React.Component {
    state = {
    selectedOption: null,
    };
  
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    render() {
      const { selectedOption } = this.state;
  
        return (
            <div style={{width: '300px'}}>
                <label>Type of room</label>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        );
    }
}
  
  export default Rooms;