import React, { Component } from 'react'

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }



    async converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y&apiKey=7dfc806666d5babe6ffa`
        fetch(url)
            .then(res => {
                return res.json()  
            
            })
            .then(json => {
                let cotacao = json[de_para].val;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2) 
                this.setState({ moedaB_valor })
            })
    }

    render() {
        return (
            <div className="conversor">
                <p> Esse é o nosso componente</p>
                <h2> {this.props.moedaA} para {this.props.moedaB} </h2>
                <input type="text" onChange = {(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" value="converter" onClick={ this.converter }></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>

        )
    }
}