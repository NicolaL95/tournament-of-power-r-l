export default function  getImage(filename){
    return filename ? require(`../assets/${filename}`) : require(`../assets/nig.png`);
}
