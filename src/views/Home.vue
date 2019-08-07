<template>
  <div class="home">
    <HelloWorld msg="Hello World" />
    <ChessBoard/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld";
import ChessBoard from "../components/ChessBoard";

export default {
  name: "home",
  components: {
    HelloWorld,
    ChessBoard
  }
};
</script>
