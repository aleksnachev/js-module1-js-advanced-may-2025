import { assert } from "chai";
import {isOddOrEven} from "/isOddOrEven.js"

describe("main test", () => {
    it ("test with non string value", ()=> {
        assert.equal(isOddOrEven(64232323),undefined,"return type must be undefined")
        
    })
})