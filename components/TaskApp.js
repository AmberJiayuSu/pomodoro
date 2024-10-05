const TaskList = ({ tasks}) => {
    const handleTaskUpdate = async (task) => {
        const { _id, ...restOfTask } = task;
        const updatedTask = { ...restOfTask, status: 'completed' };
    
        try {
          const response = await fetch(`/api/tasks/${task._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({update: updatedTask}),
          });
    
          if (!response.ok) {
            const errorDetails = await response.json();
            console.log('Error details:', errorDetails);
            throw new Error('Error updating task');
          }
        } catch (error) {
          console.error('Failed to update task', error);
        }
      };

      
    if (tasks.length === 0) {
      return <p>No tasks added yet!</p>;
    }
  
    return (
      <ul>
        {tasks.map((task, index) => (
            <li key={task._id}>
            <input type="checkbox"
            onChange={() => handleTaskUpdate(task)}
            />
            {task.task } 
            </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  