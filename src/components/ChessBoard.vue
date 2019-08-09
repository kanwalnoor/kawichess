<template>
    <div class="board-area">
        <img class="board"
            src="../assets/chessboard.jpg"
        />
    <WQueen class="piece WQueen" v-on:click="gridTemplateColumns++" v-bind:style="{ gridTemplateColumns: gridTemplateColumns, gridTemplateRows: gridTemplateRows }"/>
    <WKing class="piece WKing"/>
    <WRook class="piece WRook"/>
    <WPawn class="piece WPawn"/>
    <WBishop class="piece WBishop"/>
    <WKnight class="piece WKnight"/>
    <BQueen class="piece BQueen"/>
    <BRook class="piece BRook"/>
    <BKing class="piece BKing"/>
    <BPawn class="piece BPawn"/>
    <BBishop class="piece BBishop"/>
    <BKnight class="piece BKnight"/>
    </div>
</template>

<script>

import WQueen from "../components/WQueen.vue"
import WKing from "../components/WKing.vue"
import WRook from "../components/WRook.vue"
import WPawn from "../components/WPawn.vue"
import WBishop from "../components/WBishop.vue"
import WKnight from "../components/WKnight.vue"
import BQueen from "../components/BQueen.vue"
import BKing from "../components/BKing.vue"
import BRook from "../components/BRook.vue"
import BPawn from "../components/BPawn.vue"
import BBishop from "../components/BBishop.vue"
import BKnight from "../components/BKnight.vue"

export default {
    name: 'ChessBoard',
    components: {WQueen, WKing, WKnight, WRook, WPawn, WBishop, BBishop, BKnight, BQueen, BKing, BRook, BPawn
    },

    data() {
    return {
        gridTemplateRows: 5,
        gridTemplateColumns: 5
        }
    }
};

</script>



<style scoped>
.board-area {
    display: inline-grid;
    width: 600px;
    height: 600px;
    grid-template-columns: 38px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 38px;
    grid-template-rows: 38px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 38px;
}

.board{
    margin: auto;
}

.piece{
    width: auto;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    align-self: center;
}


.WKing{
    grid-column: 6;
    grid-row: 9;
}
.WBishop{
    grid-column: 4;
    grid-row: 9;
}
.WKnight{
    grid-column: 3;
    grid-row: 9;
}
.WRook{
    grid-column: 2;
    grid-row: 9;
}
.WPawn{
    grid-column: 2;
    grid-row: 8;
}
.BQueen{
    grid-column: 6;
    grid-row: 2;
}
.BKing{
    grid-column: 5;
    grid-row: 2;
}
.BBishop{
    grid-column: 3;
    grid-row: 2;
}
.BKnight{
    grid-column: 3;
    grid-row: 9;
}
.BRook{
    grid-column: 5;
    grid-row: 9;
}
.BPawn{
    grid-column: 5;
    grid-row: 9;
}
</style>
