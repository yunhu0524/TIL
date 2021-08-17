import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

//'컴포넌트' => 구성요소
//화면을 구성하는 요소들을 막막 만들고 그것을 하나로 합쳐 하나의 페이지가 되는 형식
// 클래스 컴포넌트를 펑션 컴포넌트로 변경
function Square(props) {
  //button 렌더링
  //props => 부모(board)에서 받아온 데이터 =>수정불가
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
// 9개의 square값을 한 곳에서 확인할 수 있어야 한다.
// Board는 자식인 Square에세 prop으로 상태를 전달 한다.
//여러 개의 자식 컴포넌트로 부터 데이터를 모으거나 두 개 이상의
//자식 컴포넌트를 연결하려면 부모 컴포넌트에 공유 state를 정의 해야한다.

class Board extends React.Component {
  //사각형 9개를 렌더링한다.
  //부모 Board 컴포넌트에서 자식 Square 컴포넌트로 'props'을 전달한다.
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    ); // value 와 onClick 두 개의 props 를 전달
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  //게임판 렌더링

  //이전 동작에 대한 리스트를 보여주려면 최상위 단계의 Game 컴포넌트
  //가 필요하다. history를 이용해야 하기 때문에 최상위 단계인
  //game 에 history state를 둔다.
  //square 컴포넌트에서 했던거 처럼 Board에서 Game으로 state를 끌어올린다.
  //history에 저장된 과거의 차례를 Board가 렌더링할 수 있게 한다.
  constructor(props) {
    super(props);
    //state는 컴포넌트의 특정 상태를 기억하여 화면에 반영하고,
    //상태가 사용자에 의해 변경되면 다시 화면이 변경되는 기능을 하기
    //위헤 존재하는 객체 (계속 변하는 값을 state에 넣어 준다.)
    // => 객체를 사용하기 위해 부모를 상속받는 class를 생성하여 생성자로 사용
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          // fill() 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채운다.
        },
      ],
      stepNumber: 0, //현재 진행 중인 단계를 표시 (jumpTO로 업테이트)
      xIsNext: true,
    };
  }

  handleClick(i) {
    //새로운 기록 목록을 history로 연결
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    //slice로 새로운 배열을 복사 this.state.stepNumber + 1 까지 잘라 배열을 업데이트
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    //.slice() 메소드로 기존 배열을 수정하지 않고 squares 배열의 복사본을 생성
    //불변하는 데이터를 만들어 놓는 것이 중요하다. => Pure Components를 만드는데 도움을 준다.
    //(변화된 부분을 체크하는 것이 쉬워진다면 이를 바탕으로 컴포넌트가 다시
    // 렌더링할지를 결정하는 것이 쉬워진다.)
    //변화된 부분을 체크할 때, 이미 수정된 데이터 자체에서 알아내려고 하기 보다는
    //복제한 테이터를 변화시켜서 기존의 데이터와 비교하는것이 쉽다.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    //(xlsNext가 true이면 x가 표시되고 아니라면 O 가 표시될 것이다.
    this.setState({
      history: history.concat([
        //push() 와 달리
        //concat 기존 배열을 변경하지 않기 때문에 이를 권장

        {
          squares: squares,
        },
      ]),
      stepNumber: history.length, //로 업데이트 될 때마다 넘버 추가가 되도록 한다.
      xIsNext: !this.state.xIsNext,
      //Board 생성자의 초기 state에 xlsNext라는 초깃값을 설정해주었다.
      //플레이어가 수를 둘 때 마다 xlsNext가 뒤집혀 다음 플레이어가 누군지
      //결정하고 게일의 state가 저장된다.
    });
  }

  jumpTo(step) {
    //stepNumber가 짝수일 때 마다 xIsNext 를 ture로 설정
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    //가장 최근 기록을 사용하도록 업데이트 하여 게임을 상태를 확인
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      //이동 기록을 화면에 표시되는
      //react 버트 엘리먼트로 맵핑할 수 있으며 과거의 이동으로 '돌아가는' 버튼 목록을 표시할 수 있다.
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

reportWebVitals();
