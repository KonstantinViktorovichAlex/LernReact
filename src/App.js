import React, {Component} from 'react';
import './App.css';

import Content from './components/content/Content'
import Car from './components/Car/Car'

class App extends Component {
    
    state = {
        title: 'new title',
        toggleContent: false,
        cars: 
            [
                {name: 'Ford', year: 2018},
                {name: 'Audi', year: 2018},
                {name: 'Mazda', year: 2010},
            ],
        pageTitle: 'React Components',
        showCars: false
    }
    

    handleChange = (e) => {
        
        this.setState({
            title: e.target.value
        })
    }
    showContent = () => {
        this.setState((state) => ({
            toggleContent: !state.toggleContent
        }))
    }
    showCars = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName = (name, index) => {
        console.log(name, index)
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars: cars
        })
    }

    deleteHandler = (index) => {
        const cars = [...this.state.cars]
        cars.splice(index, 1)
        this.setState({
            cars:cars
        })
    }


  render(){
    //   const cars = this.state.cars

    const cars = this.state.cars.map((item, index) => {
        return (
            <Car 
                key = {index}
                name = {item.name}
                year = {item.year}
                onDelete = {() => {this.deleteHandler(index)}}
                onChangeName = {(event) => this.onChangeName(event.target.value, index)}
            />
        )
    })

    return (
      <div className="App">
          <button onClick = {this.showContent}>show</button>
          {this.state.toggleContent ? <p>{this.state.title}</p> : '' }
          <Content 
          handleChange = {this.handleChange} 
          title = {this.state.title}
          />

            <h1>{this.state.pageTitle}</h1>

            <button onClick = {this.showCars}>Show Cars</button>

            {this.state.showCars ? cars : null}

          {/* <Car 
            name = {'Ford'} 
            year = {2018}
            onChangeTitle = {this.changeHandler.bind(this, cars[0].name)} // первый способ передачи параметров в функцию(правильный, работает быстрее)
            />
          <Car 
            name = {'Audi'} 
            year = {2016}
            onChangeTitle = {() => this.changeHandler(cars[1].name)} // второй способ
            />
          <Car 
            name = {'Mazda'} 
            year = {2010}
            onChangeTitle = {() => this.changeHandler(cars[2].name)}
            /> */}

      </div>
    );
  }

  
}
export default App;
