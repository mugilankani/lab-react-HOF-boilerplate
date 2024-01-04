import React,{Component} from 'react'

export class HigherOrderComponent extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    mapItems(data){
        const mapData = data.map(item => {
            return(
                <React.Fragment key={item.id}>
                    <li className='list-item'>
                        <span>Id:{item.id}</span>
                        <span>Name:{item.name}</span>
                        <span>User Type: {item.user_type}</span>
                    </li>

                </React.Fragment>
            )
        })
        return mapData
    }


    filterUserType(data,userType){
        const filterData = data.filter(item => item.user_type == userType)
        return this.mapItems(filterData)
    }
    filterDataByletter(data,letter){
        const filterData = data.filter(item => item.name.startsWith(letter))
        return this.mapItems(filterData)
    }

    filterDataByAge(data){
        const filterData = data.filter(item => item.age > 28 && item.age <=50)
        return this.mapItems(filterData)
    }

    calculateSumOfYearsForDesigners() {
        const designers = this.state.userData.filter(user => user.user_type === 'Designer');
        const sumOfYears = designers.map(designer => designer.years).reduce((acc, curr) => acc + curr, 0);
        return sumOfYears;
      }


    render() {
        return (
        <>
            <h1>User Data</h1>
            <div>
                <ul>{this.mapItems(this.state.userData)}</ul>
            </div>
            
            <h1>User data by user Type</h1>
            <div className='display-box'>
                <ul>{this.filterUserType(this.state.userData,"Designer")}</ul>
            </div>

            <h1>User data by letter</h1>
            <div className='display-box'>
                <ul>{this.filterDataByletter(this.state.userData,'J')}</ul>
            </div>

            <h1>User data by age</h1>
            <div className='display-box'>
                <ul>{this.filterDataByAge(this.state.userData)}</ul>
            </div>

            <h1>Find The Total Years Of The Designers</h1>
            <div className='display-box'>
                <p>{this.calculateSumOfYearsForDesigners()}</p>
            </div>

        



        </>
        )
    }

}

export default HigherOrderComponent