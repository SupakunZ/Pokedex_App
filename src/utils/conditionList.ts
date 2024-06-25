import { generationList } from "./optionList"

export const conResponse = ({generation ,callData}) => {

    if (generation !== undefined) {
        if (generation === 'Generation I') {
            return callData(generationList[0])
        } else if (generation === 'Generation II') {
            return callData(generationList[1])
        } else if (generation === 'Generation III') {
            return callData(generationList[2])
        }else if (generation === 'Generation IV') {
            return callData(generationList[3])
        }else if (generation === 'Generation V') {
            return callData(generationList[4])
        }else if (generation === 'Generation VI') {
            return callData(generationList[5])
        }else if (generation === 'Generation VII') {
            return callData(generationList[6])
        }else if (generation === 'Generation VIII') {
            return callData(generationList[7])
        }else if (generation === 'Generation IX') {
            return callData(generationList[8])
        }
    }
}