<template>
    <div class="board-area">
        <img class="board"
            src="../assets/chessboard.jpg"
        />
    <Piece class="piece"/>
    </div>
</template>

<script>

import Piece from "../components/Piece.vue"

export default {
    name: 'ChessBoard',
    components: {Piece
    }
};
</script>

<style scoped>
.board-area {
    display: inline-grid;
    width: 600px;
    height: 600px;
    grid-template-columns: 38px auto auto auto auto auto auto auto auto 38px;
    grid-template-rows: 38px auto auto auto auto auto auto auto auto 38px;
}

.board{
    margin: auto;
}

.piece{
    width: 50px;
    height: auto;
    grid-column: 2;
}
</style>
