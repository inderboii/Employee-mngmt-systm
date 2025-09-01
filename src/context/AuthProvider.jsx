import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, updateTaskStatus } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    const handleTaskStatusUpdate = (employeeId, taskIndex, newStatus) => {
        console.log("Updating task status:", { employeeId, taskIndex, newStatus }); // Debugging log
        const { employees } = getLocalStorage();
        const updatedEmployees = updateTaskStatus(employees, employeeId, taskIndex, newStatus);
        setUserData(updatedEmployees);
    };

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    const username = userData ? userData[0].firstName : ''; // Extract username from userData

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData, handleTaskStatusUpdate, username]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
