<script>
  import StackNavigationList from "./StackNavigationList";
  import radialNavData, { icons } from "../data/radialNav";

  export let _style = "";
</script>

<section style={_style}>
  <StackNavigationList data={radialNavData.children} />
</section>
