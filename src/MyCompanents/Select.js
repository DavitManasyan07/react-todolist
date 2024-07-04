export default function Select(props){
    return(
    <select
            className="selectNav"
            onChange={props.onSelect}
          >
            <option value="all">ALL</option>
            <option value="completed">COMPLETED</option>
            <option value="uncompleted">UNCOMPLETED</option>
          </select>

    )
}