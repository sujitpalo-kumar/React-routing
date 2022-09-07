import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';

let Employees = () => {
    let [employees, setEmployees] = useState([]);

    useEffect(() => {
        let dataURL = `https://gist.githubusercontent.com/sujitpalo-kumar/2e3ed0b5dd23ddc3c65d80c626fa9017/raw/2b34118ce41ee4b694ae16f47b7272c4b0eb2032/emps-git.json`;
        Axios.get(dataURL).then((response) => {
            setEmployees(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Employees Info</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt doloremque excepturi inventore ipsa magni molestias officia, officiis possimus quasi, quidem repellat sit vero? Debitis expedita ipsum maiores mollitia repellat.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            employees.length > 0 ?
                                <React.Fragment>
                                    <table className="table table-hover text-center table-striped table-light">
                                        <thead className="bg-dark text-white">
                                        <tr>
                                            <th>Emp Id</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            employees.map((employee) => {
                                                return (
                                                    <tr key={employee.login.uuid}>
                                                        <td>{employee.login.uuid.substr(employee.login.uuid.length - 4)}</td>
                                                        <td>
                                                            <img alt="" src={employee.picture.large} width="50" height="50"/>
                                                        </td>
                                                        <td>
                                                            <Link to={`/employees/${employee.login.uuid}`} className="text-primary font-weight-bold">{employee.name.first} {employee.name.last}</Link>
                                                        </td>
                                                        <td>{employee.dob.age} Yrs.</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.location.city}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Employees;
