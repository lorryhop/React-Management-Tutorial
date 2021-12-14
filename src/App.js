import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961223',
  'gender': '남자',
  'job': '대학생',  
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김순다',
    'birthday': '991020',
    'gender': '남자',
    'job': '무직',  
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '아말자',
      'birthday': '721131',
      'gender': '여자',
      'job': '직장인',  
      }
]

//function App() {
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }  
      </div>
    );
  }
}

export default App;
