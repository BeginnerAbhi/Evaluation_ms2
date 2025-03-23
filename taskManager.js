function taskManager()
{
    tasks=[];

    return
    {

        //add task
        addTask(title)
        {
            tasks.add(task);
            task.title=title;
            task.id=id;
            task.status.completed=false;
        }

        //get all tasks
        getAlltasks()
        {
        return tasks.JSON.stringify();
        }

        //complete task
        completeTask(taskID)
        {
            task.taskID.status.complete=true;
        }

        //remove task
        removetask(taskID);
        {
            tasks.unshift(task=>task.taskID===taskID );
        }


   
        //get the pending tasks
        getPendingTasks()
        {
            return tasks.filter(task=>task.status.completed=false);
        }

        //get the finished tasks
        getCompletedTasks()
        {
            const completedTasks= tasks.filter(task=>task.status.completed=true);
        }

        //sort the tasks
        sortTasks()
        {
            return tasks.sort((a,b)=>a.title.localCompare(b.title));
        }
    };

}