"use strict";

function setState() {
    const getReq = new Request("../functional_php/api.php");
    fetch(getReq)
    .then(getResp => {
        if(!getResp.ok) {
            throw Error(getResp.status);
        }
        return getResp.json();
    })
    .then(getResource => {
        STATE = getResource;
    });
}