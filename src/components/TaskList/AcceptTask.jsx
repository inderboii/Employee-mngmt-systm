import React, { useState } from 'react'

const AcceptTask = ({ data, handleTaskStatusUpdate }) => {
    const [status, setStatus] = useState('new'); // Track the current status

    const handleComplete = () => {
        handleTaskStatusUpdate(data.employeeId, data.taskIndex, 'completed');
        setStatus('completed'); // Update local state
    };

    const handleFail = () => {
        handleTaskStatusUpdate(data.employeeId, data.taskIndex, 'failed');
        setStatus('failed'); // Update local state
    };

    const handleAccept = () => {
        setStatus('active'); // Set status to active when accepted
    };

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                {status === 'active' && (
                    <>
                        <button 
                            className='bg-green-500 rounded font-medium py-1 px-2 text-xs'
                            onClick={handleComplete}
                        >
                            Mark as Completed
                        </button>
                        <button 
                            className='bg-red-500 rounded font-medium py-1 px-2 text-xs'
                            onClick={handleFail}
                        >
                            Mark as Failed
                        </button>
                    </>
                )}
                {status === 'completed' && (
                    <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs' disabled>
                        Completed
                    </button>
                )}
                {status === 'failed' && (
                    <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs' disabled>
                        Failed
                    </button>
                )}
                {status === 'new' && (
                    <button 
                        className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'
                        onClick={handleAccept}
                    >
                        Accept Task
                    </button>
                )}
            </div>
        </div>
    )
}

export default AcceptTask
