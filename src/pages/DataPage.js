import React from "react";
import { MDBDataTable } from 'mdbreact';
const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
      },
      {
        label: 'Surname',
        field: 'surname',
        sort: 'asc',
      },
      {
        label: 'Mastery',
        field: 'mastery',
        sort: 'asc',
      },
      {
        label: 'A',
        field: 'a',
        sort: 'asc',
      },
      {
        label: 'B',
        field: 'b',
        sort: 'asc',
      },
      {
        label: 'C',
        field: 'c',
        sort: 'asc',
      },
      {
        label: 'D',
        field: 'd',
        sort: 'asc',
      },
      {
        label: 'E',
        field: 'e',
        sort: 'asc',
      },
      {
        label: "F",
        field: 'f',
        sort: 'asc',
      },
      {
        label: 'G',
        field: 'g',
        sort: 'asc',
      },
      {
        label: 'H',
        field: 'h',
        sort: 'asc',
      },
      {
        label: 'I',
        field: 'i',
        sort: 'asc',
      },
      {
        label: 'J',
        field: 'j',
        sort: 'asc',
      },
      {
        label: 'K',
        field: 'k',
        sort: 'asc',
      },
      {
        label: 'L',
        field: 'l',
        sort: 'asc',
      },
      {
        label: 'M',
        field: 'm',
        sort: 'asc',
      },
      {
        label: 'N',
        field: 'n',
        sort: 'asc',
      },
      {
        label: 'O',
        field: 'o',
        sort: 'asc',
      },
      {
        label: 'P',
        field: 'p',
        sort: 'asc',
      },
      {
        label: 'Q',
        field: 'q',
        sort: 'asc',
      },
      {
        label: 'R',
        field: 'r',
        sort: 'asc',
      },
      {
        label: 'S',
        field: 's',
        sort: 'asc',
      },
      {
        label: 'T',
        field: 't',
        sort: 'asc',
      },
      {
        label: 'U',
        field: 'u',
        sort: 'asc',
      },
      {
        label: 'V',
        field: 'v',
        sort: 'asc',
      },
      {
        label: 'W',
        field: 'w',
        sort: 'asc',
      },
      {
        label: 'X',
        field: 'x',
        sort: 'asc',
      },
      {
        label: 'Y',
        field: 'y',
        sort: 'asc',
      },
      {
        label: 'Z',
        field: 'z',
        sort: 'asc',
      }
    ],
    rows: [
      {
        name: 'Tiger',
        surname: 'Nixon',
        mastery: '89%',
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
        name: 'Garrett',
        surname: 'Winters',
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
        name: 'Ashton',
        surname: 'Cox',
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
        name: 'Cedric',
        surname: 'Kelly',
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
      }
    ]
  };

  return (
    <MDBDataTable
      scrollX
      striped

      theadColor="light-blue"
      theadTextWhite
      hover
      data={data}
    />
  );
}
function DataPage() {
  return (
    <div class="container container d-flex justify-content-around flex-wrap margin-bottom">
      <h1 class="mt-5">Progress Tracker</h1>
      <div class="row d-flex justify-content-center">
        <div class="col-sm-8">
          <DatatablePage></DatatablePage>
        </div>
      </div>
    </div>
  )
}

export default DataPage;
