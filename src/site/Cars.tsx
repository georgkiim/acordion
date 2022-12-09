
type CarsAutoType = {
    cardio: CarsType[]
}

type CarsType={
    manufacturer:string,
    model:string
}
const Auto = (props:CarsAutoType) =>{
    return(
        <div>
        <table>
            <tr>

                {props.cardio.map((objectFromCarsArray,index)=>{
                return(
                    <td key={1}>{objectFromCarsArray.manufacturer}</td>

                )
                })}
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
        </div>
    )
}

export default Auto