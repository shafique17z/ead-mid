import { useState } from 'react'
import './App.css'

function App() {
  const sampleData = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      city: 'New York',
      occupation: 'Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 30,
      city: 'San Francisco',
      occupation: 'Designer',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 28,
      city: 'Chicago',
      occupation: 'Accountant',
    },
    {
      id: 4,
      name: 'Alice Brown',
      age: 35,
      city: 'Los Angeles',
      occupation: 'Teacher',
    },
    {
      id: 5,
      name: 'Charlie Wilson',
      age: 40,
      city: 'Houston',
      occupation: 'Doctor',
    },
    { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
    {
      id: 7,
      name: 'Frank Miller',
      age: 32,
      city: 'Seattle',
      occupation: 'Software Engineer',
    },
    {
      id: 8,
      name: 'Grace Taylor',
      age: 45,
      city: 'Boston',
      occupation: 'Lawyer',
    },
    {
      id: 9,
      name: 'Henry Clark',
      age: 28,
      city: 'Denver',
      occupation: 'Marketing Manager',
    },
    {
      id: 10,
      name: 'Ivy Adams',
      age: 33,
      city: 'Atlanta',
      occupation: 'Entrepreneur',
    },
  ]
  const [nameValue, setNameValue] = useState('')
  const [ageValue, setAgeValue] = useState('')
  const [cityOption, setCityOption] = useState('cityOption')
  const [occupationOption, setOccupationOption] = useState('occupationOption')
  const [filteredUsers, setFilteredUsers] = useState([])

  const handleFilterNew = () => {
    const filtered = sampleData.filter(
      (user) =>
        user.name.equals(nameValue) &&
        user.age.equals(ageValue) &&
        user.city.equals(cityOption) &&
        user.occupation.equals(occupationOption)
    )
    setFilteredUsers(filtered)
  }

  const handleCityDropdownChange = (event) => {
    setCityOption(event.target.value)
  }

  const handleOccupationDropdownChange = (event) => {
    setOccupationOption(event.target.value)
  }

  const handleNameChange = (event) => {
    setNameValue(event.target.value)
  }
  const handleAgeChange = (event) => {
    setAgeValue(event.target.value)
  }

  function clearFilter() {
    setNameValue('')
    setAgeValue('')
    setCityOption('cityOption')
    setOccupationOption('occupationOption')
    return <p>Clear Filtered</p>
  }

  return (
    <>
      {/* Table */}
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Occupation</th>
        </tr>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>25</td>
          <td>New York</td>
          <td>Engineer</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>30</td>
          <td>San Francisco</td>
          <td>Designer</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob Johnson</td>
          <td>28</td>
          <td>Chicago</td>
          <td>Accountant</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Alice Brown</td>
          <td>35</td>
          <td>Los Angeles</td>
          <td>Teacher</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Charlie Wilson</td>
          <td>40</td>
          <td>Houston</td>
          <td>Doctor</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Eva Davis</td>
          <td>22</td>
          <td>Miami</td>
          <td>Artist</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Frank Miller</td>
          <td>32</td>
          <td>Seattle</td>
          <td>Software Engineer</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Grace Taylor</td>
          <td>45</td>
          <td>Boston</td>
          <td>Lawyer</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Henry Clark</td>
          <td>28</td>
          <td>Denver</td>
          <td>Marketing Manager</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Ivy Adams</td>
          <td>33</td>
          <td>Atlanta</td>
          <td>Entrepreneur</td>
        </tr>
      </table>
      <>
        <br></br>
      </>

      {/* text box for name and age to filter */}
      <form>
        <label>
          Name:{' '}
          <input type='text' value={nameValue} onChange={handleNameChange} />
        </label>
        <label>
          {' '}
          Age:{' '}
          <input type='number' value={ageValue} onChange={handleAgeChange} />
        </label>
        <p>
          Input Value: {nameValue} and {ageValue}
        </p>{' '}
      </form>

      {/* dropdown filter option by City and Occupation */}
      <div>
        <label>
          Filter by City:{'\n'}
          <select value={cityOption} onChange={handleCityDropdownChange}>
            <option value='noCity'>Select City</option>
            <option value='New York'>New York</option>
            <option value='San Francisco'>San Francisco</option>
            <option value='Chicago'>Chicago</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='Houston'>Houston</option>
            <option value='Miami'>Miami</option>
            <option value='Seattle'>Seattle</option>
            <option value='Boston'>Boston</option>
            <option value='Denver'>Denver</option>
            <option value='Atlanta'>Atlanta</option>
          </select>
        </label>
        <label>
          {' '}
          and Occupation:{'\n'}
          <select
            value={occupationOption}
            onChange={handleOccupationDropdownChange}
          >
            <option value='noOcc'>Select Occupation</option>
            <option value='Engineer'>Engineer</option>
            <option value='Designer'>Designer</option>
            <option value='Accountant'>Accountant</option>
            <option value='Teacher'>Teacher</option>
            <option value='Doctor'>Doctor</option>
            <option value='Artist'>Artist</option>
            <option value='Software Engineer'>Software Engineer</option>
            <option value='Lawyer'>Lawyer</option>
            <option value='Marketing Manager'>Marketing Manager</option>
            <option value='Atlanta'>Marketing Manager</option>
          </select>
        </label>
        <></>
        <p>City: {cityOption}</p>
        <p>Occupation: {occupationOption}</p>
      </div>
      <>
        <br></br>
      </>

      {/* search */}
      <button onClick={handleFilterNew}>Filter</button>

      {/* clear button */}
      <button onClick={clearFilter}>Clear Filter</button>
      <>
        <br></br>
      </>

      {/* display filtered data */}
      {filteredUsers.length != 0 &&
        filteredUsers.map((user) => (
          <div key={user.name}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <p>Occupation: {user.occupation}</p>
          </div>
        ))}
    </>
  )
}

export default App
