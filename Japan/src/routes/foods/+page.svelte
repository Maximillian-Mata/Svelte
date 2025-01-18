<script lang="ts">
    import { onMount } from "svelte";
    import * as d3 from 'd3'//@ts-ignore


    let data: any

    onMount(
        async () => {
            data = await d3.csv("Japan Trip 2025- Food (1).csv")
            console.log(data)
            data = JSON.stringify(data)
            data =JSON.parse(data)
            console.log(data)

        }
    )

     let DirectionUrl: string = "https://www.google.com/maps/dir/Current+Location/"

    function GenerateLink(point:string){
        let point1 = point.substring(7,16)
        let point2 = point.substring(18,26)
        let give = DirectionUrl + point2 + ","+point1
        return give
    }

    let selected_foodfilter: string | null
    let selected_areafilter: string | null
function FoodFilter(){

}
function AreaFilter(){

}
const FoodTypes = ["Wagyu", "Bakery", "Sushi", "Matcha", "Soup", "Snacks", "Beef Stuff", "Karaage"]
const Areas = ["Taito City", "Kanda", "Asakusa", "Shibuya", "Kyoto", "Shibuya","Shinjuku", "Osaka", "Chiyoda", "Minato City"]
</script>
<h2>Food Options</h2>

<label for="food">Food Filter:</label>
<select aria-label="Select" id="food" bind:value={selected_foodfilter} on:change={FoodFilter}>
    <option selected disabled value="">Select Filter</option>
{#each FoodTypes as item}
    <option value={item}>{item}</option>
{/each}
</select>

<label for="area">Area Filter:</label>
<select aria-label="Select" id="area" bind:value={selected_areafilter} on:change={AreaFilter}>
    <option selected disabled value="">Select Filter</option>
{#each Areas as item}
    <option value={item}>{item}</option>
{/each}
</select>

<table>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Region</th>
            <th scope="col">Google Maps</th>
        </tr>
    </thead>
    <tbody>
        {#each data as food}
        {#if (selected_foodfilter == "") || (food.description == selected_foodfilter)}
            {#if (selected_areafilter == "") || (food.Area == selected_areafilter)}
            <tr>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>{food.Area}</td>
                <td><a href={GenerateLink(food.WKT)}>Go here</a></td>
            </tr>
            {/if}
            
        {/if}

        {/each}
    </tbody>
</table>