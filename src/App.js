import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			player: 1,
			table: ['','','','','','','','',''],
			winner: 0
		}
		this.action = this.action.bind(this)
		this.winCheck = this.winCheck.bind(this)
		this.reload = this.reload.bind(this)
	}


	action(props) {
		var tempTable = this.state.table
		if (this.state.table[props] != '') {
		} else if(this.state.player == 1 && this.state.winner == 0) {
			tempTable[props] = 'X'
			this.setState({ 
				player: 2,
				table: tempTable
			});
			this.winCheck(1)
		} else if (this.state.winner == 0) {
			tempTable[props] = 'O'
			this.setState({ 
				player: 1,
				table: tempTable
			});
			this.winCheck(2)
		}
	}

	winCheck(props){
			   if (this.state.table[0] == this.state.table[1] && this.state.table[0] == this.state.table[2] && this.state.table[0] != '') {
				this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (this.state.table[3] == this.state.table[4] && this.state.table[3] == this.state.table[5] && this.state.table[3] != '') {
			this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (this.state.table[6] == this.state.table[7] && this.state.table[6] == this.state.table[8] && this.state.table[6] != '') {
			this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (this.state.table[0] == this.state.table[3] && this.state.table[0] == this.state.table[6] && this.state.table[0] != '') {
			this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (this.state.table[1] == this.state.table[4] && this.state.table[1] == this.state.table[7] && this.state.table[1] != '') {
			this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (this.state.table[2] == this.state.table[5] && this.state.table[2] == this.state.table[8] && this.state.table[2] != '') {
			this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (this.state.table[0] == this.state.table[4] && this.state.table[0] == this.state.table[8] && this.state.table[0] != '') {
			this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (this.state.table[2] == this.state.table[4] && this.state.table[2] == this.state.table[6] && this.state.table[2] != '') {
			this.setState({winner: props })
			console.log(props + " is the winner")
		} else if (!this.state.table.includes('')) {
			this.setState({winner: 3 })
			console.log('tie')
		}
	}
	
	reload() {
		window.location.reload(false)
	}

	render() {
		// console.log(this.state.player)
		return (
			<div className="App-body">
				{this.state.winner == 0 ? <p>Player {this.state.player}'s turn</p> : this.state.winner == 3 ? <p>Tie, you both suck</p> : <p>Player {this.state.winner} wins</p>}
				<table>
					<tbody style={{ userSelect: "none" }}>
						<tr><th onClick={() => this.action(0)}>{this.state.table[0] == 'X' || 'O' ? this.state.table[0] : ''}</th>
							<th onClick={() => this.action(1)}>{this.state.table[1] == 'X' || 'O' ? this.state.table[1] : ''}</th>
							<th onClick={() => this.action(2)}>{this.state.table[2] == 'X' || 'O' ? this.state.table[2] : ''}</th></tr>
						<tr><th onClick={() => this.action(3)}>{this.state.table[3] == 'X' || 'O' ? this.state.table[3] : ''}</th>
							<th onClick={() => this.action(4)}>{this.state.table[4] == 'X' || 'O' ? this.state.table[4] : ''}</th>
							<th onClick={() => this.action(5)}>{this.state.table[5] == 'X' || 'O' ? this.state.table[5] : ''}</th></tr>
						<tr><th onClick={() => this.action(6)}>{this.state.table[6] == 'X' || 'O' ? this.state.table[6] : ''}</th>
							<th onClick={() => this.action(7)}>{this.state.table[7] == 'X' || 'O' ? this.state.table[7] : ''}</th>
							<th onClick={() => this.action(8)}>{this.state.table[8] == 'X' || 'O' ? this.state.table[8] : ''}</th></tr>
					</tbody>
				</table>
				<br />
				<button onClick={() => this.reload()}>Restart</button>
			</div>
		);
	}
}

export default App;
