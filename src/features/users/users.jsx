import { useDispatch, useSelector } from "react-redux"
import { removeUser, salaryDown, salaryUp, swipeDown, swipeUp } from "./users.slice"

export const Users = () => {

    const users = useSelector(state => state.items)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Users</h2>
            <table className="table table-dark"> 
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>gender</th>
                        <th>salary</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map(user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.gender}</td>
                            <td>{user.salary}</td>
                            <td>
                                <button 
                                    onClick={() => dispatch(salaryUp(user.id))}
                                    className="btn btn-success"
                                >salary up</button>
                                <button 
                                    onClick={() => dispatch(salaryDown(user.id))}
                                    className="btn btn-info"
                                >salary down</button>
                                <button 
                                    onClick={() => dispatch(removeUser(user.id))}
                                    className="btn btn-danger"
                                >delete</button>
                                <button 
                                    onClick={() => dispatch(swipeUp(user.id))}
                                    className="btn btn-warning"
                                >swipe up</button>
                                <button 
                                    onClick={() => dispatch(swipeDown(user.id))}
                                    className="btn btn-light"
                                >swipe down</button>
                            </td>
                        </tr>
                      )
                    }
                </tbody>
            </table>
        </>
    )
}