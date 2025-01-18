<script lang="ts">
    import { onMount } from "svelte";
    import * as d3 from 'd3'//@ts-ignore


  

    let data: any
    let sorted_data: any
    onMount(
        async () => {
            data = await d3.csv("Japan Trip 2025- JapanVisit Locations (1).csv")
            console.log(data)
            data = JSON.stringify(data)
            data =JSON.parse(data)
            sorted_data = data
            SortTable()
        }
    )
    


    let DirectionUrl: string = "https://www.google.com/maps/dir/Current+Location/"
    //35.624512,139.429293

    function GenerateLink(point:string){
        let point1 = point.substring(7,16)
        let point2 = point.substring(18,26)
        let give = DirectionUrl + point2 + ","+point1
        return give
    }

    let sort_value: string = "place"
    function SortTable(){
        if (sort_value == "region"){
            sorted_data = data.sort((a: { name: string; },b: { name: string; }) => a.name.localeCompare(b.name))
        }
        else if(sort_value == "place"){
            sorted_data = data.sort((a: { Area: string; },b: { Area: string; }) => a.Area.localeCompare(b.Area))
        }
    }
   
const Areas = ["Chiba", "Chuo City", "Itabashi", "Koto City", "Minato City", "Mitaka", "Narita", "Nerima", "Osaka", "Setagay", "Shibuya", "Shinjuku", "Sumida City", "Taito City", "Tama"] 

let selected_filter: string | null

function Filter(){
    selected_filter = selected_filter
}

</script>
<h2>Locations To Visit</h2>
<a href="https://www.google.com/maps/d/edit?mid=12rUKXZuAoUTQvRxjfQ9qOKTkciKV0wU&ll=35.71221910023825%2C139.99961976143226&z=11">Google Map Link</a>


<label for="sortby">Sort By:</label>
<select name="select" aria-label="Select" on:change={SortTable} bind:value={sort_value} id="sortby">
    <option value="place">Place</option>
    <option selected value="region">Region</option>
</select>

<label for="filter">Filter:</label>
<select aria-label="Select" id="filter" bind:value={selected_filter} on:change={Filter}>
    <option selected disabled value="">Select Filter</option>
{#each Areas as item}
    <option value={item}>{item}</option>
{/each}
</select>

<table>
    <thead><tr><th scope="col">Place</th><th scope="col">Region</th><th scope="col">Google Maps</th></tr></thead>
    <tbody>
    {#each sorted_data as local}
    {#if (selected_filter == "") || (local.Area == selected_filter)}
    <tr><td class="place">{local.name}</td><td>{local.Area}</td><td><a href={GenerateLink(local.WKT)}>Go here</a></td></tr>
    {/if}
    {/each}
</tbody>
</table>

<style>
    
    
</style>