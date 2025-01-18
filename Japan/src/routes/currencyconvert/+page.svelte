<script lang="ts">
const ExchangeRate = {usd: 1, yen:156.28, php: 58.54}
let selected: string = "yen"
let YenInput: number = ExchangeRate.yen
let UsdInput: number = ExchangeRate.usd
function roundToTwoDecimals(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
function Convert(_ToUSD:boolean, other:string){
    console.log(other)
    if(other=="yen"){
        console.log("yen")
        if(_ToUSD){
            let yen = YenInput
            let result = yen/ExchangeRate.yen
            UsdInput = roundToTwoDecimals(result)
        }
        else{
            let usd = UsdInput
            let result = usd*ExchangeRate.yen
            YenInput = roundToTwoDecimals(result)
        }
    }
    else if(other=="php"){
        console.log("PHP")
        if(_ToUSD){
            let php = YenInput
            let result = php/ExchangeRate.php
            UsdInput = roundToTwoDecimals(result)
        }
        else{
            let usd = UsdInput
            let result = usd*ExchangeRate.php
            YenInput = roundToTwoDecimals(result)
        }
    }
}

function SwapDefault(){
    UsdInput = ExchangeRate.usd
    if(selected=="yen"){
        YenInput = ExchangeRate.yen
    }
    else if(selected=="php"){
        YenInput = ExchangeRate.php
    }
}
</script>
<h2>Currency Converter</h2>
<p class="subtext">This currency may not be up to date. Last updated 01/18/2025</p>

<div class="converter">
    <h3>USD</h3>
    <p></p>
    <select bind:value={selected} on:change={SwapDefault}>
        <option value="yen">Yen</option>
        <option value="php">PHP</option>
    </select>
    <input type="number" bind:value={UsdInput} min="0" id="usd" on:change={()=>Convert(false, selected)} step=0.01>
    <p class="equal">=</p>
    <input type="number" bind:value={YenInput} id="yen" on:change={()=>Convert(true, selected)} step=0.01>
</div>
<style>
    .subtext{
        font-style: italic;
    }

    .converter{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        row-gap: 0;
        max-width: 95vw;
        margin-left: 2.5vw;
        margin-right: 2.5vw;
        border: 1px grey solid;
        padding: 5%;
        border-radius: 8px;
        }
        input[type='number']{
            text-align: right;
            padding-right: 5%;
            font-size: large;
            padding-top: 3%;
            padding-bottom: 3%;
            margin: 0;
            align-self: center;
            border-radius: 4px;
            max-width: 30vw;
        }
        select{
            font-weight: bold;
            font-size: large;
            text-align: center;
        }
        .equal{
            font-weight: bold;
            font-size: xx-large;
            padding: 0px;
        }
</style>