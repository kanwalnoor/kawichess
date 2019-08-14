import { addListener } from "cluster";
import { stringify } from "querystring";

class Piece {

    constructor(imageLink, initialPos) {
        var newPiece = document.createElement("IMG");
        newPiece.setAttribute("src", imageLink);
        newPiece.setAttribute("width", "auto");
        newPiece.setAttribute("height", "auto");
        
        locToGrid(initialPos);

        newPiece.setAttribute()

    }

    locToGrid(pos) {
        pos = pos.split();
        return pos[0].charCodeAt()-95, pos[1]+1;
    }
}

