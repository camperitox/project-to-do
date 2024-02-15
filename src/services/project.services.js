import httpClient from '@/services/httpClient.js'

const url = '/projects'

const getProjects = () => httpClient.get(url);

export default{
    getProjects
}