import React, { Component } from 'react';

import './List.css';
class List extends Component {

    state = {
        toggleAddTextBoxes: false,
        inputErrorMessages: "",
        studentList: [
            {
                name: "Chirag Pandit1",
                rollNum: 32,
                rewards: 40
            }, {
                name: "Chirag Pandit1",
                rollNum: 33,
                rewards: 40
            },
            {
                name: "Harsh Pandit",
                rollNum: 4,
                rewards: 49
            },
            {
                name: "Danny Sawla",
                rollNum: 35,
                rewards: 99
            },
        ],
        AddedRollNumber: 0,
        AddedName: null,
        AddedStudentNumRewards: 0,
    }


    // <td><input type="number" onClick={this.changeRollNumberHandler} placeholder="Roll Number" required /></td>
    // <td><input type="text" onClick={this.changeNameHandler} placeholder="Name" required /></td>
    // <td><input type="number" onClick={this.changeRewardsHandler} id="studentRewards" placeholder="Rewards" required /></td>
    // <td><input type="submit" onClick={this.addStudentHandler} value="Add"></input></td>

    changeRollNumberHandler = (event) => {
        this.setState ({AddedRollNumber : event.target.value});
    }
    changeNameHandler = (event) => {
        this.setState ({AddedName : event.target.value});
    }
    changeRewardsHandler = (event) => {
        this.setState ({AddedStudentNumRewards : event.target.value});
    }



    //toggleAddTextBoxes - set toggleAddTextBoxes flag in state
    toggleAddTextBoxes = () => {
        this.setState({ toggleAddTextBoxes: true });
    }

    addStudentHandler = () => {
        //Add Student to state
        let sl = [...this.state.studentList];
        console.log(
            "Adding : "+
            this.state.AddedName+""+
            this.state.AddedRollNumber+""+
            this.state.AddedStudentNumRewards);
        sl.push({
            name: this.state.AddedName,
            rollNum: this.state.AddedRollNumber,
            rewards: this.state.AddedStudentNumRewards
        })
        this.setState({
            studentList:  sl,
            toggleAddTextBoxes: false
        });
    }

    deleteStudentHandler = (rollNum) => {
        console.log("Deleting Roll Num : " + rollNum);

        this.setState({
            studentList: this.state.studentList.filter((student) => {
                return student.rollNum !== rollNum
            })
        })
    }
     
    removeAllStudents = () => {
        this.setState({
            studentList: []
        });
    }

    render() {

        let list = null;

        if (this.state.studentList.length > 0) {
            list = (
                <div>
                    <table width="700px">
                        <tbody>
                            <tr>
                                <td> RollNo </td>
                                <td>Name</td>
                                <td className="rewards">Rewards</td>
                                <td className="close">Delete</td>
                            </tr>
                            {
                                this.state.studentList.map((student, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {student.rollNum} </td>
                                            <td>{student.name}</td>
                                            <td className="rewards">{student.rewards}</td>
                                            <td className="close" onClick={() => this.deleteStudentHandler(student.rollNum)}>X</td>
                                        </tr>);
                                })
                            }
                        </tbody>
                    </table>
                </div>);
        }
        else {
            list = (<h1>No Students enrolled so far..! Please add students</h1>);
        }

        let addTextBoxes = null;

        //If add textboxes is set >> Show form to add student otherwise show default button to add user
        if (this.state.toggleAddTextBoxes) {
            addTextBoxes = <div>
                <table width="500px">

                    <tbody>
                        <tr>
                                <td><input type="number" onChange={this.changeRollNumberHandler} placeholder="Roll Number" required /></td>
                                <td><input type="text" onChange={this.changeNameHandler} placeholder="Name" required /></td>
                                <td><input type="number" onChange={this.changeRewardsHandler} id="studentRewards" placeholder="Rewards" required /></td>
                                <td><input type="submit" onClick={this.addStudentHandler} value="Add"></input></td>
                        </tr>
                    </tbody>


                </table>
                <p>{this.state.inputErrorMessages}</p>
            </div>;
        }
        else {
            addTextBoxes = <div>
                <td>
                    <input type="submit" onClick={this.toggleAddTextBoxes} value="Add Student"></input>
                    <input type="submit" onClick={this.removeAllStudents} value="Remove All Students"></input>
                </td>
            </div>;
        }


        return (
            <div>
                {list}
                <br />
                {addTextBoxes}
            </div>
        );
    }
}
export default List;