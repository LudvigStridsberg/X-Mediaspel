"use strict";

function setState() {
    const getReq = new Request("../functional_php/api.php?user=please");
    fetch(getReq)
    .then(getResp => {
        if(!getResp.ok) {
            throw Error(getResp.status);
        }
        return getResp.json();
    })
    .then(getResource => {
        return getResource;
    });
}

let STATE = setState();

console.log(STATE);