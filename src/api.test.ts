import * as api from "@/api"
// @ponicode
describe("api.getBigMacIndex", () => {
    test("0", async () => {
        await api.getBigMacIndex()
    })
})

// @ponicode
describe("api.getBigMacIndexFromDate", () => {
    test("0", async () => {
        await api.getBigMacIndexFromDate(undefined)
    })
})

// @ponicode
describe("api.calculateValues", () => {
    test("0", () => {
        let callFunction: any = () => {
            api.calculateValues(0, 0, 0, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            api.calculateValues(16, -5.48, 100, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            api.calculateValues(16, 0, -100, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            api.calculateValues(0, 1, 0, 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            api.calculateValues(Infinity, Infinity, Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("api.getRawValues", () => {
    test("0", async () => {
        await api.getRawValues(NaN, "", "", NaN, undefined)
    })
})

// @ponicode
describe("api.getAdjustedValues", () => {
    test("0", async () => {
        await api.getAdjustedValues(Infinity, "", "", -Infinity, undefined)
    })
})
