import { Projects } from "../../data/projects";

const projectsList ={
    getData: ({from, to}) => {
        return new Promise ((resolve, reject) => {

            const data = Projects.slice(from, to)

            resolve({
                count: Projects.length,
                data: data
            })
        })
    }
}

export default projectsList