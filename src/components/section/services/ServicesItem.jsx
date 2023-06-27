import React from 'react';
import { Link } from 'react-router-dom';
function ServicesItem(props) {
  return (
    <tr>
                <th scope="row">{props.id}</th>
                <td>{props.Services}</td>
                <td><Link to="/sginup">start now</Link></td>
                <td className='true-sev'>true</td>
    </tr>
  )
}

export default ServicesItem