// poppulation map 
vegaEmbed(
  "#population_map",
  "js/population_map.vg.json",
  { actions: false }
).catch(console.error);

// this is for the state income
vegaEmbed(
  "#earnings_dotplot",
  "js/earnings_dotplot.vg.json",
  { actions: false }
).catch(console.error);

// Job vs businesses 
vegaEmbed(
  "#jobs_businesses_bar",
  "js/jobs_businesses_bar.vg.json",
  { actions: false }
).catch(console.error);

// opportunity 
vegaEmbed(
  "#opportunity_heatmap",
  "js/opportunity_heatmap.vg.json",
  { actions: false }
).catch(console.error);

// this is for the income / house / population and cost of living 
vegaEmbed(
  "#income_house_scatter",
  "js/income_house_scatter.vg.json",
  { actions: false }
).catch(console.error);

// rent morgage 
vegaEmbed(
  "#rent_mortgage_dumbbell",
  "js/rent_mortgage_dumbbell.vg.json",
  { actions: false }
).catch(console.error);

// protected landx`
vegaEmbed(
  "#protected_land_lollipop",
  "js/protected_land_lollipop.vg.json",
  { actions: false }
).catch(console.error);

// oppourtunity vs affordability 
vegaEmbed(
  "#balance_quadrant",
  "js/balance_quadrant.vg.json",
  { actions: false }
).catch(console.error);

// cost of living bar chart
vegaEmbed(
  "#cost_living_bar",
  "js/cost_living_bar.vg.json",
  { actions: false }
).catch(console.error);


// selection map
vegaEmbed(
  "#perspective_map",
  "js/perspective_map.vg.json",
  { actions: false }
).catch(console.error);