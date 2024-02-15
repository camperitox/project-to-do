import httpClient from '@/services/httpClient.js'

const url = '/projects'

const getProjects = () => httpClient.get(url);
const getProject = (id) => httpClient.get(url + '/' + id);
const getTasksProject = (id) => httpClient.get(url + '/' + id + '/tasks');
const deleteProject = (id) => httpClient.delete(url + '/' + id);
export default{
    getProjects,
    getProject,
    getTasksProject,
    deleteProject
}