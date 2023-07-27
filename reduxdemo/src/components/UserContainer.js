import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './redux/Users/UserAction'

function UserContainer({ userData,fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>) : (<div>
      <h2>User List</h2>
      <div className='container'>
        {userData && userData.users && userData.users.map(user=><div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>{user.name}</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
        <div className="col-md-6">
          <h3>Address:</h3>
          <p>
            <strong>Street:</strong> {user.address.street}
          </p>
          <p>
            <strong>Suite:</strong> {user.address.suite}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Zip Code:</strong> {user.address.zipcode}
          </p>
          <h3>Company:</h3>
          <p>
            <strong>Company Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company.bs}
          </p>
        </div>
      </div>
    </div>)}
      </div>
    </div>)
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
