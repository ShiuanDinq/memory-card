import { v4 as uuidv4 } from 'uuid'

const Images = ["001.png", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.png", "009.png"]


const ImageCollection = Images.map((image) => ({id: uuidv4(), src: image}))
export default ImageCollection