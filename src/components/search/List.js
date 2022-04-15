import { React } from 'react';
import data from '../../data/dataList.json';
import { Link } from 'react-router-dom';

function List(props) {
  //create a new array by filtering the original one
  const filteredData = data.filter((orig) => {
    //if there's no input then return the original
    if (props.input === '') {
      return orig;
    }
    // else return the item which matches the user input
    else {
      return (
        orig.type.toLowerCase().includes(props.input) ||
        orig.duration.toLowerCase().includes(props.input) ||
        orig.for.toLowerCase().includes(props.input) ||
        orig.cost.toLowerCase().includes(props.input) ||
        orig.includes.toLowerCase().includes(props.input) ||
        orig.special.toLowerCase().includes(props.input)
      );
    }
  });
  //user input will be accessed via the props
  return (
    <div className="items">
      <ul>
        {/* {data.map((dataItem) */}
        {filteredData.map((dataItem) => (
          <li key={dataItem.id}>
            <Link style={{ textDecoration: 'none' }} to="/booking">
              <strong>{dataItem.type}</strong> <br />
            </Link>
            {dataItem.duration}
            {dataItem.for}
            {dataItem.cost}
            {dataItem.includes}
            {dataItem.special}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
