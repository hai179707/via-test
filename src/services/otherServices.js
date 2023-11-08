import axios from "axios"

export const getCities = async () => {
    try {
        const res = await axios('https://provinces.open-api.vn/api/?depth=1')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getDistricts = async (cityCode) => {
    try {
        const res = await axios('https://provinces.open-api.vn/api/p/' + cityCode +'?depth=2')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getWards = async (districtCode) => {
    try {
        const res = await axios('https://provinces.open-api.vn/api/d/' + districtCode +'?depth=2')
        return res.data
    } catch (error) {
        console.log(error)
    }
}