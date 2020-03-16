import React from "react";
import { MDBDataTable } from 'mdbreact';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class Table extends React.Component {

 constructor(props){
 super(props);
 this.getHeader = this.getHeader.bind(this);
 this.getRowsData = this.getRowsData.bind(this);
 this.getKeys = this.getKeys.bind(this);
 }

 getKeys = function(){
  return Object.keys(this.props.data[0]);
  }

 getHeader = function(){
   var keys = this.getKeys();
   return keys.map((key, index)=>{
   return <th key={key}>{key.toUpperCase()}</th>
 })
 }

 getRowsData = function(){
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index)=>{
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
  })
  }

 render() {
 return (
 <div>
 <table>
 <thead>
 <tr>{this.getHeader()}</tr>
 </thead>
 <tbody>
 {this.getRowsData()}
 </tbody>
 </table>
 </div>

 );
 }
}
const RenderRow = (props) =>{
 return props.keys.map((key, index)=>{
 return <td key={props.data[key]}>{props.data[key]}</td>
 })
}
const StudentScoresTable = () => {
  const data = {
    columns: [
      {
        label: 'Month',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Mastery',
        field: 'mastery',
        sort: 'asc',
        width: 150
      },
      {
        label: 'A',
        field: 'a',
        sort: 'asc',
        width: 50
      },
      {
        label: 'B',
        field: 'b',
        sort: 'asc',
        width: 50
      },
      {
        label: 'C',
        field: 'c',
        sort: 'asc',
        width: 50
      },
      {
        label: 'D',
        field: 'd',
        sort: 'asc',
        width: 50
      },
      {
        label: 'E',
        field: 'e',
        sort: 'asc',
        width: 50
      },
      {
        label: "F",
        field: 'f',
        sort: 'asc',
        width: 50
      },
      {
        label: 'G',
        field: 'g',
        sort: 'asc',
        width: 50
      },
      {
        label: 'H',
        field: 'h',
        sort: 'asc',
        width: 50
      },
      {
        label: 'I',
        field: 'i',
        sort: 'asc',
        width: 50
      },
      {
        label: 'J',
        field: 'j',
        sort: 'asc',
        width: 50
      },
      {
        label: 'K',
        field: 'k',
        sort: 'asc',
        width: 50
      },
      {
        label: 'L',
        field: 'l',
        sort: 'asc',
        width: 50
      },
      {
        label: 'M',
        field: 'm',
        sort: 'asc',
        width: 50
      },
      {
        label: 'N',
        field: 'n',
        sort: 'asc',
        width: 50
      },
      {
        label: 'O',
        field: 'o',
        sort: 'asc',
        width: 50
      },
      {
        label: 'P',
        field: 'p',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Q',
        field: 'q',
        sort: 'asc',
        width: 50
      },
      {
        label: 'R',
        field: 'r',
        sort: 'asc',
        width: 50
      },
      {
        label: 'S',
        field: 's',
        sort: 'asc',
        width: 50
      },
      {
        label: 'T',
        field: 't',
        sort: 'asc',
        width: 50
      },
      {
        label: 'U',
        field: 'u',
        sort: 'asc',
        width: 50
      },
      {
        label: 'V',
        field: 'v',
        sort: 'asc',
        width: 50
      },
      {
        label: 'W',
        field: 'w',
        sort: 'asc',
        width: 50
      },
      {
        label: 'X',
        field: 'x',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Y',
        field: 'y',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Z',
        field: 'z',
        sort: 'asc',
        width: 50
      }
    ],
    rows: [
      {
        month: 'August',
        mastery: 89+"%",
        a: 51+"%",
        b: 52+"%",
        c: 53+"%",
        d: 54+"%",
        e: 55+"%",
        f: 86+"%",
        g: 57+"%",
        h: 68+"%",
        i: 89+"%",
        j: 90+"%",
        k: 41+"%",
        l: 42+"%",
        m: 93+"%",
        n: 100+"%",
        o: 90+"%",
        p: 94+"%",
        q: 65+"%",
        r: 66+"%",
        s: 57+"%",
        t: 98+"%",
        u: 38+"%",
        v: 49+"%",
        w: 70+"%",
        x: 91+"%",
        y: 92+"%",
        z: 83+"%"
      },
      {
        name: 'September',
        mastery: '89%',
        a: 59+"%",
        b: 58+"%",
        c: 57+"%",
        d: 56+"%",
        e: 55+"%",
        f: 84+"%",
        g: 53+"%",
        h: 62+"%",
        i: 81+"%",
        j: 97+"%",
        k: 48+"%",
        l: 43+"%",
        m: 96+"%",
        n: 40+"%",
        o: 80+"%",
        p: 99+"%",
        q: 62+"%",
        r: 67+"%",
        s: 51+"%",
        t: 97+"%",
        u: 33+"%",
        v: 45+"%",
        w: 70+"%",
        x: 93+"%",
        y: 92+"%",
        z: 86+"%"
      },
      {
        name: 'October',
        mastery: '89%',
        a: 55+"%",
        b: 55+"%",
        c: 55+"%",
        d: 55+"%",
        e: 55+"%",
        f: 84+"%",
        g: 55+"%",
        h: 67+"%",
        i: 88+"%",
        j: 98+"%",
        k: 46+"%",
        l: 49+"%",
        m: 99+"%",
        n: 100+"%",
        o: 100+"%",
        p: 98+"%",
        q: 65+"%",
        r: 69+"%",
        s: 55+"%",
        t: 99+"%",
        u: 32+"%",
        v: 46+"%",
        w: 77+"%",
        x: 90+"%",
        y: 98+"%",
        z: 81+"%"
      },
      {
        name: 'November',
        mastery: '89%',
        a: 66+"%",
        b: 57+"%",
        c: 55+"%",
        d: 54+"%",
        e: 53+"%",
        f: 81+"%",
        g: 50+"%",
        h: 69+"%",
        i: 85+"%",
        j: 91+"%",
        k: 42+"%",
        l: 44+"%",
        m: 96+"%",
        n: 80+"%",
        o: 100+"%",
        p: 97+"%",
        q: 68+"%",
        r: 60+"%",
        s: 53+"%",
        t: 93+"%",
        u: 31+"%",
        v: 45+"%",
        w: 79+"%",
        x: 99+"%",
        y: 98+"%",
        z: 81+"%"
      },
      {
        name: 'December',
        mastery: '89%',
        a: 66+"%",
        b: 57+"%",
        c: 55+"%",
        d: 54+"%",
        e: 53+"%",
        f: 81+"%",
        g: 50+"%",
        h: 69+"%",
        i: 85+"%",
        j: 91+"%",
        k: 42+"%",
        l: 44+"%",
        m: 96+"%",
        n: 80+"%",
        o: 100+"%",
        p: 97+"%",
        q: 68+"%",
        r: 60+"%",
        s: 53+"%",
        t: 93+"%",
        u: 31+"%",
        v: 45+"%",
        w: 79+"%",
        x: 99+"%",
        y: 98+"%",
        z: 81+"%"
      },
      {
        name: 'January',
        mastery: '89%',
        a: 66+"%",
        b: 57+"%",
        c: 55+"%",
        d: 54+"%",
        e: 53+"%",
        f: 81+"%",
        g: 50+"%",
        h: 69+"%",
        i: 85+"%",
        j: 91+"%",
        k: 42+"%",
        l: 44+"%",
        m: 96+"%",
        n: 80+"%",
        o: 100+"%",
        p: 97+"%",
        q: 68+"%",
        r: 60+"%",
        s: 53+"%",
        t: 93+"%",
        u: 31+"%",
        v: 45+"%",
        w: 79+"%",
        x: 99+"%",
        y: 98+"%",
        z: 81+"%"
      },
      {
        name: 'February',
        mastery: '89%',
        a: 66+"%",
        b: 57+"%",
        c: 55+"%",
        d: 54+"%",
        e: 53+"%",
        f: 81+"%",
        g: 50+"%",
        h: 69+"%",
        i: 85+"%",
        j: 91+"%",
        k: 42+"%",
        l: 44+"%",
        m: 96+"%",
        n: 80+"%",
        o: 100+"%",
        p: 97+"%",
        q: 68+"%",
        r: 60+"%",
        s: 53+"%",
        t: 93+"%",
        u: 31+"%",
        v: 45+"%",
        w: 79+"%",
        x: 99+"%",
        y: 98+"%",
        z: 81+"%"
      },
      {
        name: 'March',
        mastery:'',
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:'',
        i:'',
        j:'',
        k:'',
        l:'',
        m:'',
        n:'',
        o:'',
        p:'',
        q:'',
        r:'',
        s:'',
        t:'',
        u:'',
        v:'',
        w:'',
        x:'',
        y:'',
        z:''
      },
      {
        name: 'April',
        mastery:'',
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:'',
        i:'',
        j:'',
        k:'',
        l:'',
        m:'',
        n:'',
        o:'',
        p:'',
        q:'',
        r:'',
        s:'',
        t:'',
        u:'',
        v:'',
        w:'',
        x:'',
        y:'',
        z:''
      },
      {
        name: 'May',
        mastery:'',
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:'',
        i:'',
        j:'',
        k:'',
        l:'',
        m:'',
        n:'',
        o:'',
        p:'',
        q:'',
        r:'',
        s:'',
        t:'',
        u:'',
        v:'',
        w:'',
        x:'',
        y:'',
        z:''
      }
    ]
  };
  return (
    <MDBDataTable
      scrollX
      striped
      paging={false}
      bordered
      theadColor="rgba-blue-strong"
      theadTextWhite
      hover
      responsive
      data={data}
    />
  );
}

function StudentScoresPage() {
  return (
    <div class="container d-flex justify-content-around flex-wrap margin-bottom">
          <h1 class="display-4 mt-5 mb-5">Student Progress Tracker</h1>


      <div id="tableSize" class="row justify-content-center">
        <div class="col-sm-12">
          <StudentScoresTable></StudentScoresTable>
        </div>
      </div>
    </div>
  )
}

export default StudentScoresPage;
